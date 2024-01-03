const LATEST_PRICES_ENDPOINT = 'https://api.porssisahko.net/v1/latest-prices.json';
 
async function fetchLatestPriceData() {
  const response = await fetch(LATEST_PRICES_ENDPOINT);
  const json = await response.json()
  //console.log(json)
  return json;
}
 

module.exports= {
    fetchLatestPriceData
} 
 


    