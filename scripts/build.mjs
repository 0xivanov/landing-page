import {mkdir,copyFile} from 'node:fs/promises';
const files=['index.html','getting-started.html','styles.css','script.js','privacy.html','terms.html','legal.css','favicon.svg','robots.txt','sitemap.xml','_headers'];
await mkdir('dist',{recursive:true});
for (const file of files) await copyFile(file,`dist/${file}`);
console.log(`Built ${files.length} public assets.`);
