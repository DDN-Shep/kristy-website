const fetch = require('node-fetch');

exports.handler = async (event, context) => {
    const apiUrl = 'https://kristinasheppard.substack.com/api/v1/archive?sort=new&offset=0&limit=14';
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'OPTIONS, POST, GET'
    };

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        return { statusCode: 200, headers, body: JSON.stringify(data) };
    }
    catch (error) {
        return { statusCode: 500, headers, body: JSON.stringify({ error: 'Failed to fetch data' }) };
    }
};
