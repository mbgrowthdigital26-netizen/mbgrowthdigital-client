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
            // Fix backgrounds
            .replace(/bg-white/g, 'bg-[#130f30]')
            .replace(/bg-slate-50/g, 'bg-[#1e1945]')
            
            // Fix text colors
            .replace(/text-\[#130f30\]/g, 'text-white')
            .replace(/text-slate-800/g, 'text-slate-300')
            .replace(/text-slate-900/g, 'text-white')
            .replace(/text-slate-600/g, 'text-slate-400')
            .replace(/text-slate-700/g, 'text-slate-300')
            .replace(/text-slate-500/g, 'text-slate-400')
            
            // Fix borders
            .replace(/border-slate-100/g, 'border-[#1e1945]')
            .replace(/border-slate-200/g, 'border-slate-800')
            .replace(/border-slate-300/g, 'border-slate-700')
            
            // Fix specific gradients that might have been messed up
            .replace(/from-slate-50/g, 'from-[#130f30]')
            .replace(/via-white/g, 'via-[#0a081a]')
            .replace(/to-fuchsia-50\/40/g, 'to-fuchsia-900\/20')
            .replace(/bg-fuchsia-50/g, 'bg-fuchsia-900\/20')
            .replace(/bg-fuchsia-100/g, 'bg-fuchsia-900\/40')
            .replace(/bg-fuchsia-200/g, 'bg-fuchsia-800\/40')
            .replace(/border-fuchsia-100/g, 'border-fuchsia-900\/50')
            .replace(/border-fuchsia-200/g, 'border-fuchsia-800\/50')
            .replace(/border-fuchsia-300/g, 'border-fuchsia-700\/50')
            .replace(/shadow-fuchsia-200/g, 'shadow-fuchsia-900\/20');

        if (content !== newContent) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log('Updated', filePath);
        }
    }
});
