import fs from 'fs';
import path from 'path';

function extractLinks(text) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResults = [];
    let temp;
    while ((temp = regex.exec(text)) !== null) {
        arrayResults.push({ [temp[1]]: temp[2] });
    }
    return arrayResults.length === 0 ? 'there are no links' : arrayResults;
}

function handlesError(error) {
    throw new Error(error.code, 'There are no files in the path');
}

async function getFile(paramPath) {
    const __dirname = path.resolve();
    const absolutPath = path.join(__dirname, paramPath);
    const encoding = 'utf-8';
    try {
        const paths = await fs.promises.readdir(absolutPath,  { encoding });
        const result = await Promise.all(paths.map(async (file) => {
            const filePath = `${absolutPath}/${file}`;
            const text = await fs.promises.readFile(filePath, encoding);
            return extractLinks(text);
        }));
        return result;
    } catch (error) {
        return handlesError(error);
    }
}

export default getFile;