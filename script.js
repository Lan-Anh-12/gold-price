async function loadGoldPrice() {
    try {
        const response = await fetch('./data.json?v=' + Date.now());

        if (!response.ok) {
            throw new Error("Không thể tải data.json");
        }

        const data = await response.json();

        document.getElementById('buy-price').textContent =
            data.sjc_buy + " Triệu";

        document.getElementById('sell-price').textContent =
            data.sjc_sell + " Triệu";

        document.getElementById('last-update').textContent =
            data.updated_at;

    } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
        document.getElementById('buy-price').textContent = "Lỗi";
        document.getElementById('sell-price').textContent = "Lỗi";
    }
}

// Chạy khi trang load xong
document.addEventListener("DOMContentLoaded", loadGoldPrice);
