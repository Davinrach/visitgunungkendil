const fs = require('fs');
const path = require('path');

const source = "C:\\Users\\davin\\.gemini\\antigravity-ide\\brain\\0bc83ad8-a15e-498f-be8f-5030556dc2d8\\hero_landscape_1783763318030.png";
const destDir = path.join(__dirname, 'public', 'images');
const dest = path.join(destDir, 'hero_landscape.png');

// Ensure directory exists
if (!fs.existsSync(destDir)){
    fs.mkdirSync(destDir, { recursive: true });
}

try {
    fs.copyFileSync(source, dest);
    console.log(`Successfully copied hero image to ${dest}`);
} catch (err) {
    console.error('Error copying file:', err);
}
