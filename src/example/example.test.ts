import { add } from './example';

describe('example test', () => {
    it('shoud add 2 numbers', () => {
        expect(add(2, 3)).toEqual(5);
    });
});
