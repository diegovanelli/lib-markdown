import chalk from 'chalk';
import getFile from './index.js';
import checkURLs from './http-validator.js';

const path = process.argv;

async function textProcess(filePath) {
    const result = await getFile(filePath[2]);
    if (path[3] === 'validar') {
        console.log(chalk.yellow('validated links'), await checkURLs(result))
    } else {
        console.log(chalk.yellow('list of links'), result);
    }
}

textProcess(path);