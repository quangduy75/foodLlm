// Đọc tệp JSON (hoặc sử dụng dữ liệu tĩnh)
const jsonData = [
  {
    "src": "Hello world",
    "tgt": "Xin chào thế giới",
    "context": {
      "system": "Greeting"
    }
  },
  {
    "src": "How are you?",
    "tgt": "Bạn khỏe không?",
    "context": {
      "system": "Question"
    }
  },
  {
    "src": "Scrambled eggs",
    "tgt": "Trứng bác",
    "context": {
      "system": "Food"
    }
  }
];

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
