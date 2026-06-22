const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

walkDir('f:/Business/M.B Growth Digital/next-app/src', function(filePath) {
    if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.css')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let newContent = content
            // 1. Revert to emerald and teal
            .replace(/fuchsia-/g, 'emerald-')
            .replace(/blue-/g, 'teal-')
            
            // 2. Change dark backgrounds to white or light gray
            // The previous [#130f30] replaced slate-900. Let's make it a very light green/gray or white
            .replace(/bg-\[#130f30\]/g, 'bg-white')
            .replace(/bg-\[#1e1945\]\/50/g, 'bg-slate-50')
            .replace(/bg-\[#1e1945\]/g, 'bg-slate-50')
            .replace(/bg-\[#0a081a\]/g, 'bg-white')
            
            // Fix texts in areas that were dark:
            // "text-white" in internship section, footers, etc needs to become text-slate-900 or text-slate-600
            // But buttons with "bg-emerald-600 text-white" should stay text-white.
            // Let's replace "text-white" with "text-slate-900" ONLY when it's not preceded by bg-emerald-600 or similar button classes.
            // A simpler way: we just replace specific known blocks or use regex carefully.
            
            // In page.tsx: text-[#130f30] was replacing text-slate-900, so we revert it
            .replace(/text-\[#130f30\]/g, 'text-slate-900')
            .replace(/text-\[#1e1945\]/g, 'text-slate-800')
            
            // The footer background is now white (bg-[#130f30] -> bg-white). So footer text must be dark
            .replace(/text-slate-400/g, 'text-slate-600')
            .replace(/border-slate-800/g, 'border-slate-200')
            .replace(/border-slate-700/g, 'border-slate-200')
            .replace(/border-\[#1e1945\]/g, 'border-slate-200');

        // Manual text-white to text-slate-900 replacements for headers that used to be dark mode
        newContent = newContent
            .replace(/text-white tracking-tight/g, 'text-slate-900 tracking-tight')
            .replace(/text-white font-heading/g, 'text-slate-900 font-heading')
            .replace(/text-slate-300 \[\&>h2\]:text-white/g, 'text-slate-600 [&>h2]:text-slate-900')
            .replace(/text-white relative overflow-hidden/g, 'text-slate-900 relative overflow-hidden');
            
        if (content !== newContent) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log('Updated', filePath);
        }
    }
});
