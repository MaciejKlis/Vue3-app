import axios from 'axios';

const baseUrl = 'https://api.coingecko.com/api/v3/'

const fetchTop100Coins = async () => {
    const reqParams = {
        method: 'get',
        url: baseUrl + 'coins/markets?vs_currency=pln&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    }

    const response = await axios(reqParams);
    return response.data;
}

export {
    fetchTop100Coins
}