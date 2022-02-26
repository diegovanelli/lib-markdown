import fetch from "node-fetch";

function handleError(error) {
    throw new Error(error.message);
}

async function checkStats(arrayURLs) {
    try {
        const arrayStats = await Promise
            .all(arrayURLs
                .map(async url => {
                    const res = await fetch(url);
                    return `${res.status} - ${res.statusText}`;
                })
            );
        return arrayStats;
    } catch(error) {
        handleError(error);
    }
}

function creatArrayURL(arrayLinks) {
    const url = [];
    arrayLinks
        .map(objetctLink => objetctLink
            .map(link => url.push(link)));
    return url;
}

function creatURLs(arrayLinks) {
    return arrayLinks
        .map(objetctLink => Object
            .values(objetctLink).join());
}

async function checkURLs(arrayLinks) {
    const fileLinks = creatArrayURL(arrayLinks);
    const links = creatURLs(fileLinks);
    const statusLinks = await checkStats(links);

    const results = fileLinks.map((object, index) => ({
        ...object,
        status: statusLinks[index]
    }));

    return results;
}

export default checkURLs;