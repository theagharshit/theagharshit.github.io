const puppeteer = require('/home/claude/portfolio2/node_modules/puppeteer-core');
const axeSrc = require('fs').readFileSync(require.resolve('axe-core/axe.min.js'), 'utf8');
const routes = ['/', '/about/', '/work/', '/work/mahadev-ply-center/', '/work/d2c-order-and-inventory-system/', '/work/ga4-analytics-agent/', '/work/ai-chef-agent/', '/work/linkedin-post-generator-agent/', '/work/smart-india-hackathon-ml-project/', '/work/sikshya-lms/', '/work/employee-management-system/', '/resume/', '/404.html'];
(async () => {
  const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
  let total = 0;
  for (const w of [1440, 375]) for (const r of routes) {
    const p = await b.newPage(); await p.setViewport({ width: w, height: 900 });
    await p.goto('http://127.0.0.1:4321' + r, { waitUntil: 'networkidle0' });
    // axe needs script injection; CSP blocks it in the page, so bypass CSP for the audit only
    const res = await p.evaluate(axeSrc + '; axe.run(document, { runOnly: ["wcag2a","wcag2aa","wcag21a","wcag21aa","best-practice"] })').catch(async () => null);
    let out = res;
    if (!out) { await p.setBypassCSP(true); await p.reload({ waitUntil: 'networkidle0' }); await p.addScriptTag({ content: axeSrc }); out = await p.evaluate(() => axe.run(document, { runOnly: ['wcag2a','wcag2aa','wcag21a','wcag21aa','best-practice'] })); }
    const h1 = await p.evaluate(() => document.querySelectorAll('h1').length);
    const levels = await p.evaluate(() => [...document.querySelectorAll('h1,h2,h3,h4')].map(h => +h.tagName[1]));
    let skip = false; for (let i = 1; i < levels.length; i++) if (levels[i] - levels[i-1] > 1) skip = true;
    total += out.violations.length;
    console.log(`${w} ${r}: ${out.violations.length} violations, h1=${h1}${skip ? ', HEADING SKIP' : ''}` + out.violations.map(v => `\n   - ${v.id} (${v.impact}): ${v.nodes.length} node(s) ${v.nodes[0].target}`).join(''));
    await p.close();
  }
  await b.close(); console.log('TOTAL', total);
})();
