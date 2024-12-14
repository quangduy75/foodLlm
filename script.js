let jsonData = [];  // Mảng để chứa dữ liệu JSON

// Tải tệp JSON từ server khi trang được tải
window.onload = function() {
  fetch('output.json')  // Tải tệp output.json từ server
    .then(response => response.json())  // Chuyển đổi phản hồi thành JSON
    .then(data => {
      jsonData = data;  // Lưu dữ liệu JSON vào biến jsonData
      console.log('Dữ liệu JSON đã được tải:', jsonData);
    })
    .catch(error => console.error('Lỗi khi tải tệp JSON:', error));
};

// Hàm tìm kiếm trong JSON
function searchJSON() {
  const query = document.getElementById("search").value.toLowerCase();
  const results = [];

  // Duyệt qua các mục trong JSON và kiểm tra xem có chứa từ khóa không
  jsonData.forEach(item => {
    if (item.src.toLowerCase().includes(query) || 
        item.tgt.toLowerCase().includes(query) || 
        item.context.system.toLowerCase().includes(query)) {
      results.push(item);
    }
  });

  // Hiển thị kết quả tìm kiếm
  displayResults(results);
}

// Hàm hiển thị kết quả tìm kiếm
function displayResults(results) {
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = "";  // Xóa kết quả cũ

  if (results.length === 0) {
    resultsContainer.innerHTML = "<p>No results found.</p>";
  } else {
    results.forEach(result => {
      const resultElement = document.createElement("div");
      resultElement.innerHTML = `
        <p><strong>Source:</strong> ${result.src}</p>
        <p><strong>Target:</strong> ${result.tgt}</p>
        <p><strong>Context:</strong> ${result.context.system}</p>
        <hr>
      `;
      resultsContainer.appendChild(resultElement);
    });
  }
}
