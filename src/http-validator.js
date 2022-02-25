import fetch from "node-fetch";

// function checkStats(arrayURLs) {
//     const arryStats 
// }

function creatArrayURL(arrayLinks) {
    return arrayLinks.map(objetctLink => objetctLink.map(link => Object.values(link).join()));
}

function checkURLs(arrayLinks) {
    return creatArrayURL(arrayLinks);
}

export default checkURLs;