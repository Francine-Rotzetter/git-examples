const axios = require('axios');


async function getCountryFromUsedIpAddress() {
    try {
        const response = await axios.get('https://api.country.is/');
        console.log(`Your IP Address: ${response.data.ip} is from ${response.data.country}`); 
    } catch (error) {
        console.error(error); 
    }
}

async function getCountryByIp(ip) {
    try {
        const response = await axios.get(`https://api.country.is/${ip}`);
        return response.data;
    } catch (error) {
        throw new Error(`Failed to fetch country for IP ${ip}: ${error.message}`);
    }
}

module.exports = { getCountryByIp };

getCountryFromUsedIpAddress();