
const { getCountryByIp } = require('./index');

describe('getCountryByIp', () => {
    it('should return country data for a german IP', async () => {
        const ip = '77.1.2.3';
        const result = await getCountryByIp(ip);
        expect(result).toHaveProperty('ip', ip);
        expect(result).toHaveProperty('country', 'US');
    });

    it('should return country data for a swiss IP', async () => {
        const ip = '165.225.94.246';
        const result = await getCountryByIp(ip);
        expect(result).toHaveProperty('ip', ip);
        expect(result).toHaveProperty('country', 'US');
    });    

    it('should throw an error for an invalid IP', async () => {
        const ip = 'invalid_ip';
        await expect(getCountryByIp(ip)).rejects.toThrow();
    });
});