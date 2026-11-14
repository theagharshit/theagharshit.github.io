const puppeteer = require('/home/claude/portfolio2/node_modules/puppeteer-core');
(async () => {
  const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox', '--allow-file-access-from-files'] });
  const p = await b.newPage();
  await p.goto('file://' + __dirname + '/og.html', { waitUntil: 'networkidle0' });
  await p.evaluateHandle('document.fonts.ready');
  await (await p.$('#og')).screenshot({ path: __dirname + '/../public/og.png' });
  await (await p.$('#fav')).screenshot({ path: __dirname + '/../public/apple-touch-icon.png' });
  await b.close();
})();
