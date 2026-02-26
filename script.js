async function loadGoldPrice() {
    try {
        const response = await fetch('./data.json?v=' + Date.now());

        if (!response.ok) {
            throw new Error("Không thể tải data.json");
        }

        const data = await response.json();

        document.getElementById('buy-price').textContent =
            data.sjc_buy ? data.sjc_buy + " Triệu" : "Không có dữ liệu";

        document.getElementById('sell-price').textContent =
            data.sjc_sell ? data.sjc_sell + " Triệu" : "Không có dữ liệu";

        document.getElementById('last-update').textContent =
            data.updated_at || "Không rõ";

    } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
        document.getElementById('buy-price').textContent = "Lỗi";
        document.getElementById('sell-price').textContent = "Lỗi";
        document.getElementById('last-update').textContent = "Lỗi";
    }
}

// Chạy khi trang load xong
document.addEventListener("DOMContentLoaded", loadGoldPrice);
