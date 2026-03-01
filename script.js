async function loadGoldPrice() {
    const buyEl = document.getElementById('buy-price');
    const sellEl = document.getElementById('sell-price');
    const updateEl = document.getElementById('last-update');

    try {
        // Thêm timestamp Date.now() để trình duyệt luôn tải file mới nhất từ GitHub
        const response = await fetch('./data.json?v=' + Date.now());

        if (!response.ok) throw new Error("Không thể tải data.json");

        const data = await response.json();

        // Cập nhật giao diện
        buyEl.textContent = data.sjc_buy ? `${data.sjc_buy} Triệu` : "---";
        sellEl.textContent = data.sjc_sell ? `${data.sjc_sell} Triệu` : "---";
        updateEl.textContent = data.updated_at || "Không rõ";

        console.log("Dữ liệu mới nhất:", data);

    } catch (error) {
        console.error("Lỗi:", error);
        buyEl.textContent = "Lỗi tải";
        sellEl.textContent = "Lỗi tải";
        updateEl.textContent = "Vui lòng thử lại sau";
    }
}

// Chạy khi trang web tải xong
document.addEventListener("DOMContentLoaded", loadGoldPrice);
