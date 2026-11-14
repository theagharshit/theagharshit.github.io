const puppeteer = require('/home/claude/portfolio2/node_modules/puppeteer-core');
(async () => {
  const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
  const p = await b.newPage();
  await p.goto('file://' + __dirname + '/resume.html', { waitUntil: 'networkidle0' });
  await p.evaluateHandle('document.fonts.ready');
  await p.pdf({ path: __dirname + '/out.pdf', format: 'A4', printBackground: true, preferCSSPageSize: true });
  await b.close();
})();
