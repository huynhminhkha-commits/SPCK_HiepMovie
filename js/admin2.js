const movies = [
    { title: "Avengers: Endgame", category: "Hành động", year: 2019, views: "12,400,000", status: "Đang hiển thị", image: "image/end.jpg", page: "Avengers Endgame.html" },
    { title: "Oppenheimer", category: "Lịch sử", year: 2023, views: "2,190,000", status: "Đang hiển thị", image: "image/coppen.jpg", page: "Oppenheimer.html" },
    { title: "John Wick: Chapter 4", category: "Hành động", year: 2023, views: "13,840,000", status: "Đang hiển thị", image: "image/john_pork.jpg", page: "John Wick 4.html" },
    { title: "SpongeBob", category: "Thiếu nhi", year: 2025, views: "6,890,000", status: "Đang hiển thị", image: "image/$_57.jpg", page: "SpongeBob.html" },
    { title: "Squid Game 3", category: "Giật gân", year: 2024, views: "21,130,040", status: "Đang hiển thị", image: "image/hq720.jpg", page: "Squid Game3.html" },
    { title: "Michael", category: "Kịch", year: 2025, views: "29,880,230", status: "Đang hiển thị", image: "image/michael.jpg", page: "Michael.html" },
    {title: "Trại Buôn Người", category: "Tội phạm", year: 2026, views: "21,521,002", status: "Đang hiển thị", image: "image/traiBuonNguoi.jpg", page: "Trai Buon Nguoi.html" },
    { title: "Parasite", category: "Giật gân", year: 2025, views: "12,890,000", status: "Đang hiển thị", image: "image/parte.jpg", page: "Parasite.html" },
    { title: "SpiderMan: Brand New Day", category: "Phiêu lưu", year: 2025, views: "22,421,340", status: "Đang hiển thị", image: "image/spiderman1.jpg", page: "SpiderMan Brand New Day.html" },
    { title: "Stranger Thing 5", category: "Kinh dị", year: 2025, views: "18,890,000", status: "Đang hiển thị", image: "image/images.jpg", page: "Stranger Thing 5.html" },
    { title: "The Tiger", category: "Hành Động", year: 2025, views: "16,197,000", status: "Đang hiển thị", image: "image/tiger.jpg", page: "The Tiger.html" },
    { title: "Escape 2024", category: "Hành động", year: 2024, views: "14,852,000", status: "Đang hiển thị", image: "image/escape.jpeg", page: "Escape 2024.html" },
    { title: "The Backrooms", category: "Giật gân", year: 2025, views: "20,293,000", status: "Đang hiển thị", image: "image/backrooms.jpg", page: "The Backrooms.html" },
    { title: "Chiikawa", category: "Hoạt hình", year: 2026, views: "23,499,000", status: "Đang hiển thị", image: "image/chikawa.jpg", page: "Chiikawa.html" },
    { title: "Coco", category: "Hoạt hình", year: 2017, views: "24,423,000", status: "Đang hiển thị", image: "image/coco1.jpg", page: "Coco.html" }
];

const tableBody = document.getElementById("movie-list-body");

movies.forEach(movie => {
    const row = document.createElement("tr");
    
    row.innerHTML = `
        <td>
            <div class="movie-cell">
                <img src="${movie.image}" alt="" class="movie-thumb">
                <strong>${movie.title}</strong>
            </div>
        </td>
        <td>${movie.category}</td>
        <td>${movie.year}</td>
        <td>${movie.views}</td>
        <td><span class="status-badge">${movie.status}</span></td>
        <td>
            <button class="btn-action" onclick="xemPhim('${movie.page}')">Xem</button>
        </td>
    `;
    
    tableBody.appendChild(row);
});

// Hàm chuyển đến file HTML tương ứng của phim
function xemPhim(pageUrl) {
    window.location.href = pageUrl;
}