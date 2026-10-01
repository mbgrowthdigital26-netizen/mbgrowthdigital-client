// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require("fs"); fs.writeFileSync("src/data/services.ts", "// placeholder\nexport const services = [];\nexport function getServiceBySlug(s) { return undefined; }\nexport function getRelatedServices(c, r) { return []; }\n", "utf8"); console.log("done");
