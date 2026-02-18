async function loadGoldPrice() {
    try {
        const response = await fetch('./data.json?v=' + Date.now());
        if (!response.ok) throw new Error("File empty");
        const data = await response.json();

    }
}

loadGoldPrice();

