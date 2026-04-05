/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const outputPath = path.join(__dirname, '..', 'src', 'stitch-exports', 'screens');
const jsonFilePath = '/home/sanniinuoluwadunsimi/.gemini/antigravity/brain/4aa1f8d1-f5e6-434d-9d11-02f29866bf0e/.system_generated/steps/148/output.txt';

if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, { recursive: true });
}

function sanitizeName(name) {
    return name.replace(/[^a-zA-Z0-9-_\.]/g, '_').substring(0, 100);
}

function download(url, dest) {
    console.log(`Downloading ${url} to ${dest}`);
    try {
        execSync(`curl -sL --retry 3 "${url}" -o "${dest}"`, { stdio: 'inherit' });
    } catch (e) {
        throw new Error(`curl failed: ${e.message}`);
    }
}

async function main() {
    try {
        const fileContent = fs.readFileSync(jsonFilePath, 'utf8');
        const jsonStart = fileContent.indexOf('{');
        if (jsonStart === -1) throw new Error("Could not find JSON in output.txt");
        
        const jsonString = fileContent.substring(jsonStart);
        const data = JSON.parse(jsonString);
        
        const screens = data.screens || [];
        console.log(`Found ${screens.length} screens. Starting downloads...`);
        
        for (const screen of screens) {
            const screenDirName = sanitizeName(screen.title || screen.name.split('/').pop());
            const screenDirPath = path.join(outputPath, screenDirName);
            
            if (!fs.existsSync(screenDirPath)) {
                fs.mkdirSync(screenDirPath);
            }
            
            try {
                if (screen.htmlCode && screen.htmlCode.downloadUrl) {
                    const ext = screen.htmlCode.mimeType === 'text/plain' ? 'txt' : 'html';
                    download(screen.htmlCode.downloadUrl, path.join(screenDirPath, `code.${ext}`));
                }
                
                if (screen.screenshot && screen.screenshot.downloadUrl) {
                    download(screen.screenshot.downloadUrl, path.join(screenDirPath, 'screenshot.png'));
                }
                console.log(`Successfully downloaded: ${screen.title}`);
            } catch (dlErr) {
                console.error(`Error downloading assets for ${screen.title}:`, dlErr.message);
            }
        }
        
        console.log('All screens processed successfully!');
    } catch (err) {
        console.error("Error:", err);
    }
}

main();
