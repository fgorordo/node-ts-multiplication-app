import fs from 'fs';
import { yarg } from './config/plugins/yargs.plugin';


let outputMessage = '';
const base = yarg.b;
const headerMessage = `
================================
        Tabla del ${base}
================================\n
`;

for (let i = 1; i <= yarg.l; i++) {
    outputMessage += `${base} x ${i} = ${base * i} \n`
}

if(yarg.s) console.log(headerMessage + outputMessage);

const outputPath = `outputs`

fs.mkdirSync(outputPath, {recursive: true});
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, headerMessage + outputMessage)