const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Building Demo 1...');
execSync('npm install', { cwd: './nexova-app', stdio: 'inherit' });
execSync('npm run build', { cwd: './nexova-app', stdio: 'inherit' });

console.log('Building Demo 2...');
execSync('npm install', { cwd: './nexova-app-v2', stdio: 'inherit' });
execSync('npm run build', { cwd: './nexova-app-v2', stdio: 'inherit' });

console.log('Creating vercel_build folder...');
if (fs.existsSync('vercel_build')) fs.rmSync('vercel_build', { recursive: true, force: true });
fs.mkdirSync('vercel_build');

console.log('Copying root files...');
let idx = fs.readFileSync('index.html', 'utf-8'); idx = idx.replace(/http:\/\/localhost:3001/g, '').replace(/http:\/\/localhost:3002/g, ''); fs.writeFileSync('vercel_build/index.html', idx);
if (fs.existsSync('uiuxdemo1.md')) fs.copyFileSync('uiuxdemo1.md', 'vercel_build/uiuxdemo1.md');
if (fs.existsSync('uiuxdemo2.md')) fs.copyFileSync('uiuxdemo2.md', 'vercel_build/uiuxdemo2.md');

console.log('Copying build outputs...');
fs.cpSync('nexova-app/dist', 'vercel_build/demo1', { recursive: true });
fs.cpSync('nexova-app-v2/dist', 'vercel_build/demo2', { recursive: true });

console.log('Build complete!');
