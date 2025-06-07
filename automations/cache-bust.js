const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const assets = [
  'site/assets/css/main.css',
  'site/assets/js/main.js',
  'site/assets/js/quote-calculator.js'
];

const htmlFiles = [
  'site/index.html',
  'site/quote.html',
  'site/resources.html'
];

function hashFile(file) {
  const data = fs.readFileSync(file);
  return crypto.createHash('md5').update(data).digest('hex').slice(0, 8);
}

function versionAsset(file) {
  const ext = path.extname(file);
  const dir = path.dirname(file);
  const base = path.basename(file, ext);
  const hash = hashFile(file);
  const newName = `${base}.${hash}${ext}`;
  fs.copyFileSync(file, path.join(dir, newName));
  return {
    oldRef: path.relative('site', file).replace(/\\/g, '/'),
    newRef: path.relative('site', path.join(dir, newName)).replace(/\\/g, '/')
  };
}

const replacements = assets.map(versionAsset);

htmlFiles.forEach(htmlPath => {
  let html = fs.readFileSync(htmlPath, 'utf8');
  replacements.forEach(({oldRef, newRef}) => {
    html = html.replace(new RegExp(oldRef.replace(/\./g, '\\.'), 'g'), newRef);
  });
  fs.writeFileSync(htmlPath, html);
});
