const fs = require('fs');
const path = require('path');

const globalsPath = 'f:/Business/M.B Growth Digital/next-app/src/app/globals.css';
let content = fs.readFileSync(globalsPath, 'utf8');

const themeOverrides = `
  --color-green-50: #f0fbf6;
  --color-green-100: #dcf5eb;
  --color-green-200: #bdebd9;
  --color-green-300: #91dcc0;
  --color-green-400: #009966;
  --color-green-500: #008a5c;
  --color-green-600: #00734d;
  --color-green-700: #005c3d;
  --color-green-800: #00452e;
  --color-green-900: #002e1f;
  --color-green-950: #00170f;
`;

// Insert after @theme {
if (!content.includes('--color-green-400: #009966;')) {
    content = content.replace('@theme {', '@theme {' + themeOverrides);
}

// Update primary variables to point to the new main color #009966
content = content.replace(/--color-primary: #[0-9a-fA-F]+;/g, '--color-primary: #009966;');
content = content.replace(/--color-primary-dark: #[0-9a-fA-F]+;/g, '--color-primary-dark: #00734d;');
content = content.replace(/--color-secondary: #[0-9a-fA-F]+;/g, '--color-secondary: #00b377;');
content = content.replace(/--color-accent: #[0-9a-fA-F]+;/g, '--color-accent: #00cc88;');

// Update border colors
content = content.replace(/rgba\(74, 222, 128/g, 'rgba(0, 153, 102'); // #009966 is 0, 153, 102

// Update base layer HSL variables for the new #009966 (H:160 S:100% L:30%)
content = content.replace(/--primary: 142 71% 58%;/g, '--primary: 160 100% 30%;');
content = content.replace(/--secondary: 142 76% 73%;/g, '--secondary: 160 100% 35%;');
content = content.replace(/--accent: 142 53% 85%;/g, '--accent: 160 100% 40%;');
content = content.replace(/--border: 142 71% 58% \/ 0\.15;/g, '--border: 160 100% 30% / 0.15;');
content = content.replace(/--ring: 142 71% 58%;/g, '--ring: 160 100% 30%;');

fs.writeFileSync(globalsPath, content, 'utf8');
console.log('Updated globals.css with new brand color #009966');
