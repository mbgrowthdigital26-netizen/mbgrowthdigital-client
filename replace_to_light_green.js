const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    if (!fs.existsSync(dir)) return;
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

walkDir('f:/Business/M.B Growth Digital/next-app/src', function(filePath) {
    if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.css') || filePath.endsWith('.js')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let newContent = content
            // Update CSS variables specifically in globals.css
            .replace(/--color-primary: #059669;/g, '--color-primary: #4ade80;')
            .replace(/--color-primary-dark: #047857;/g, '--color-primary-dark: #22c55e;')
            .replace(/--color-secondary: #10b981;/g, '--color-secondary: #86efac;')
            .replace(/--color-accent: #34d399;/g, '--color-accent: #bbf7d0;')
            .replace(/rgba\(16, 185, 129/g, 'rgba(74, 222, 128')
            .replace(/rgba\(5, 150, 105/g, 'rgba(74, 222, 128')
            
            // HSL values in globals.css
            .replace(/--primary: 161 94% 30%; \/\* #059669 \*\//g, '--primary: 142 71% 58%; /* #4ade80 */')
            .replace(/--secondary: 160 84% 39%; \/\* #10b981 \*\//g, '--secondary: 142 76% 73%; /* #86efac */')
            .replace(/--accent: 158 64% 52%; \/\* #34d399 \*\//g, '--accent: 142 53% 85%; /* #bbf7d0 */')
            .replace(/--border: 161 94% 30% \/ 0\.15;/g, '--border: 142 71% 58% / 0.15;')
            .replace(/--ring: 161 94% 30%;/g, '--ring: 142 71% 58%;')
            
            // Tailwind class replacements for tsx
            .replace(/emerald-600/g, 'green-400')
            .replace(/emerald-500/g, 'green-400')
            .replace(/emerald-400/g, 'green-300')
            .replace(/emerald-700/g, 'green-500')
            .replace(/emerald-300/g, 'green-200')
            .replace(/emerald-200/g, 'green-100')
            .replace(/emerald-100/g, 'green-50')
            .replace(/emerald-800/g, 'green-600')
            .replace(/emerald-900/g, 'green-700')
            .replace(/emerald-950/g, 'green-800');

        if (content !== newContent) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log('Updated', filePath);
        }
    }
});
