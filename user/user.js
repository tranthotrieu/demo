// Lấy các phần tử input và button từ DOM
const fromDateInput = document.querySelector('input[type="date"]:nth-of-type(1)');
const toDateInput = document.querySelector('input[type="date"]:nth-of-type(2)');
const searchButton = document.querySelector('.btn-search');
const items = document.querySelectorAll('.item');
const resultElement = document.querySelector('.result');
var resultCount=0;
resultCount=items.length;
resultElement.textContent=resultCount.toString();


// Gắn sự kiện click cho button tìm kiếm
searchButton.addEventListener('click', function() {
  const fromDate = new Date(fromDateInput.value);
  const toDate = new Date(toDateInput.value);
  let resultCount = 0; // Số lượng kết quả tìm kiếm

  // Lặp qua tất cả các phần tử .item để kiểm tra ngày
  items.forEach(function(item) {
    const dateAction = item.querySelector('.dateAction').textContent;
    const itemDate = new Date(dateAction.split('/').reverse().join('-'));

    // Kiểm tra nếu ngày của item nằm trong khoảng từ ngày đến ngày
    if (itemDate >= fromDate && itemDate <= toDate) {
      item.style.display = ''; // Hiển thị item
      resultCount++;
    } else {
      item.style.display = 'none'; // Ẩn item
    }
  });
  resultElement.textContent = resultCount.toString();
});



// Lấy các phần tử cần sử dụng
const bookButtons = document.querySelectorAll('.btn-datlich');

// Gắn sự kiện click cho tất cả các nút "Đặt lịch"

bookButtons.forEach(function(button) {
  button.addEventListener('click', function() {

    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    
    if(username!=='trieu' || password!=='123'){
      window.location.href = 'login/login_user.html';
    }else{
      const item = this.closest('.item'); // Lấy phần tử .item gần nhất
    const peoElement = item.querySelector('.peo'); // Lấy phần tử .peo
    const currentValue = parseInt(peoElement.textContent); // Lấy giá trị hiện tại của .peo
    const newValue = currentValue + 1; // Tăng giá trị lên 1
    peoElement.textContent = newValue; // Cập nhật giá trị mới vào .peo
    const itemContent = item.innerHTML; // Lấy nội dung HTML của phần tử .item
    // Lưu nội dung của item vào localStorage với key "bookedItem"
    localStorage.setItem('bookedItem', itemContent);
    //  window.location.href = 'dangdangky.html';
    }
  });
});

const logout = document.querySelector('.logout');
logout.addEventListener('click',function(){
  localStorage.removeItem('username');
  localStorage.removeItem('password');
})

document.addEventListener('DOMContentLoaded', function() {
  const sendButton = document.getElementById('sendButton');

  sendButton.addEventListener('click', function() {
    // Retrieve input values from index.html
    const tenBenhVien = document.getElementById('tenBenhVien').value;
    const nhomMau = document.getElementById('nhomMau').value;
    const ngayHienMau = document.getElementById('ngayHienMau').value;
    const hien = document.getElementById('hien').value;

    // Create a new row in check.html
    const table = document.getElementById('historyTable');
    const newRow = table.insertRow(-1); // Insert row at the end of the table

    // Insert cells with the retrieved input values
    const cell1 = newRow.insertCell(0);
    cell1.textContent = tenBenhVien;
    const cell2 = newRow.insertCell(1);
    cell2.textContent = nhomMau;
    const cell3 = newRow.insertCell(2);
    cell3.textContent = ngayHienMau;
    const cell4 = newRow.insertCell(3);
    cell4.textContent = hien;

    // Clear input values in index.html
    document.getElementById('tenBenhVien').value = '';
    document.getElementById('nhomMau').value = '';
    document.getElementById('ngayHienMau').value = '';
    document.getElementById('hien').value = '';
  });
});




