async function bitcoinPriceIndex() {
  const price = Number(prompt('Enter how much bitocin do you want '));
  if (isNaN(price)) {
    alert('missing input');
    return;
  };
  const data = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const res = await data.json();
  return (price*res.bpi.USD.rate_float).toFixed(4)
};
bitcoinPriceIndex().then((data)=>{
  console.log(data)
});