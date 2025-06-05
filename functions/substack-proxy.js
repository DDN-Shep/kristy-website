const fetch = require('node-fetch');

exports.handler = async (event, context) => {
    const apiUrl = 'https://kristinasheppard.substack.com/api/v1/archive?sort=new&offset=0&limit=14';

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        return { statusCode: 200, body: JSON.stringify(data) };
    }
    catch (error) {
        return { statusCode: 500, body: JSON.stringify({ error: 'Failed to fetch data' }) };
    }
};