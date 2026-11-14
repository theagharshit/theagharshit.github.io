const puppeteer = require('/home/claude/portfolio2/node_modules/puppeteer-core');
const routes = ['/', '/about/', '/work/', '/work/mahadev-ply-center/', '/work/d2c-order-and-inventory-system/', '/work/ai-chef-agent/', '/work/sikshya-lms/', '/resume/', '/404.html'];
const widths = (process.argv[2] || '1440,375').split(',').map(Number);
(async () => {
  const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
  const errors = [];
  for (const w of widths) for (const r of routes) {
    const p = await b.newPage();
    p.on('console', (m) => { if (['error', 'warning'].includes(m.type())) errors.push(`${w} ${r}: ${m.text()}`); });
    p.on('pageerror', (e) => errors.push(`${w} ${r}: ${e.message}`));
    await p.setViewport({ width: w, height: 900 });
    await p.goto('http://127.0.0.1:4321' + r, { waitUntil: 'networkidle0' });
    await p.evaluateHandle('document.fonts.ready');
    const over = await p.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    if (over > 0) errors.push(`${w} ${r}: horizontal overflow ${over}px`);
    const name = (r === '/' ? 'home' : r.replace(/\//g, '_').replace(/^_|_$/g, '').replace('.html', '')) + '-' + w;
    await p.screenshot({ path: `/home/claude/site/.shots/${name}.png`, fullPage: true });
    await p.close();
  }
  await b.close();
  console.log(errors.length ? errors.join('\n') : 'no console errors, no overflow');
})();
