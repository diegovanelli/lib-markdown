import getFile from './index.js';
import checkURLs from './http-validator.js';

const path = process.argv;

async function textProcess(filePath) {
    const result = await getFile(filePath[2]);
    if (path[3] === 'validar') {
        console.log('validated links', await checkURLs(result))
    } else {
        console.log('list of links', result);
    }
}

textProcess(path);