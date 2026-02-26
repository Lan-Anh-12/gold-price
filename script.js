async function loadGoldPrice() {
  try {
    const response = await fetch('./data.json?v=' + Date.now());

    if (!response.ok) {
      throw new Error("Không thể tải data.json");
    }

    const data = await response.json();

    const buy = data.today.buy;
    const sell = data.today.sell;
    const updatedAt = data.updated_at;

    const formatVND = (num) =>
      Number(num).toLocaleString('vi-VN') + ' VND';

    document.getElementById('buy-price').textContent = formatVND(buy);
    document.getElementById('sell-price').textContent = formatVND(sell);
    document.getElementById('last-update').textContent = updatedAt;

  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu:", error);
    document.getElementById('buy-price').textContent = "Lỗi";
    document.getElementById('sell-price').textContent = "Lỗi";
    document.getElementById('last-update').textContent = "-";
  }
}

document.addEventListener("DOMContentLoaded", loadGoldPrice);
