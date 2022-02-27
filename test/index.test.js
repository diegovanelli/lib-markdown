import getFile from "../src/index.js";

const arrayResult = [
    [
        {
            FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
        }

    ]
]

describe('getFile::', () => {
    it('must be a function', () => {
        expect(typeof getFile).toBe('function');
    });
    it('should return array with results', async () => {
        const result = await getFile('/test/arquivos/ok/');
        expect(result).toEqual(arrayResult);
    });
    it('should return message "there are no links"', async () => {
        const result = await getFile('/test/arquivos/fail/');
        expect(result).toEqual(['there are no links']);
    });
    it('deve lançar um erro na falta de arquivo', () => {
        async function capturaErro() {
            await pegaArquivo('/test/arquivos/')
            expect(capturaErro).toThrowError(/There are no files in the path/)
        }
    });
});

