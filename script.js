async function loadGoldPrice() {
    const response = await fetch('./data.json');
    const data = await response.json();
    
    document.getElementById('buy-price').innerText = data.sjc_buy;
    document.getElementById('sell-price').innerText = data.sjc_sell;
}

loadGoldPrice();
