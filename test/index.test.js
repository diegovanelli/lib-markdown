import getFile from "../src/index.js";

test('must be a function', () =>{
    expect(typeof getFile).toBe('function');
});