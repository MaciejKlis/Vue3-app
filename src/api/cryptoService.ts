import axios from 'axios';

const baseUrl = 'https://api.coingecko.com/api/v3/'

const apiConfig = {
    currency: 'pln'
}

const fetchTop100Coins = async () => {
    const reqParams = {
        method: 'get',
        url: `${baseUrl}coins/markets?vs_currency=${apiConfig.currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    }

    const response = await axios(reqParams);
    return response.data;
}

const fetchCoinChartData = async (id:string) => {
    const reqParams = {
        method: 'get',
        url: `${baseUrl}coins/${id}/market_chart?vs_currency=${apiConfig.currency}&days=1500`
    }

    const response = await axios(reqParams);
    return response.data.prices;
}

export {
    fetchTop100Coins,
    fetchCoinChartData
}