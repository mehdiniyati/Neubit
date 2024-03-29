const BASE_URL = "https://api.coingecko.com/api/v3";
const API_KEY = "CG-LoAW2wPPwmC47sarQLy3VEoH";

export const getCoinList = (coinsNumber) => {
  return `${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${coinsNumber}&page=1&sparkline=false&locale=en&x_cg_demo_api_key=${API_KEY}`;
};

export const marketChart = (coin) => {
  return `${BASE_URL}/coins/${coin}/market_chart?vs_currency=usd&days=7`;
};

export const PaginationCoins = (coin) => {
  return `${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=${coin}&sparkline=false&locale=en&x_cg_demo_api_key=${API_KEY}`;
};
