const assert = require('assert');

describe('my first', () => {
    it('is running', () => assert.equal(true,true));
    it('once upan a time ... ', () => assert.ok(true));
    it('is running too', () => assert.equal(true,true));
    it('last but running too', () => assert.equal(false,false));
});