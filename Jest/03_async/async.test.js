const Ajax1 = require('./async');

describe('testing echo func', () => {
    test('should return value async', async () => {
        const result = await Ajax1.echo('pricetik');
        expect(result).toBe('pricetik');
    });

    test('should return promice', () => {
        return Ajax1.echo('pricetik').then(data => {
            expect(data).toBe('pricetik');
        });
    });

    test('should return error if empty value', () => {
        return Ajax1.echo().catch(err => {  // ловим ошибку
            expect(err).toBeInstanceOf(Error);
        });
    });

    test('should return error if empty value async/await', async () => {
        try {
            await Ajax1.echo();
        } catch(e) {
            expect(e.message).toBe('Error1')
        }
    });
})

