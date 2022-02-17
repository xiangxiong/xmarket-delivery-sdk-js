const { expect } = require('@jest/globals');
const removeSNames = require('./app');

test('removeSNames',()=>{
    if('should remove all S names',()=>{
        const names = ['Apple','Strawberry','Star fruit'];
        expect(removeSNames(names)).not.toContain('Star fruit');
    });
});