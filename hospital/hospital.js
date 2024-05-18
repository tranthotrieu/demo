document.addEventListener('DOMContentLoaded', function() {
  const themAction = document.getElementById("btn-hdhienmau");
  const them = document.querySelector(".btn-them");
  const huy = document.querySelector(".btn-huy");
  const modal = document.querySelector(".modal");
  const nameHospitalInput = document.getElementById('nameHospital');
  const addressInput = document.getElementById('address');
  const timeActionInput = document.getElementById('timeAcction');
  const timeBloodInput = document.getElementById('timeBlood');
  const action = document.querySelector('.action');
  const sudal = document.querySelector('.sudal');
  const dsHienMau = document.querySelectorAll('.btn-xemDS');
  const sudalOverlay = document.querySelector('.sudal__overlay');

  themAction.addEventListener('click', function(event) {
    modal.style.display = 'block';
  });

  huy.addEventListener('click', function(event) {
    modal.style.display = 'none';
  });

  them.addEventListener('click', function() {
    const newItem = document.createElement('div');
    newItem.classList.add('item');
    newItem.innerHTML = `
      <div class="item-img">
        <img width="50%" src="https://static.giotmauvang.org.vn/ihpstatic/LOGO/CTD.png" alt="CTD">
      </div>
      <div class="item-contex">
        <div class="item-contex1">
          <h2>${nameHospitalInput.value}</h2>
          <p>Địa chỉ : <span>${addressInput.value}</span></p>
          <p>Thời gian hoạt động: <span><span class="dateAction">${timeActionInput.value}</span>- Từ 07:00 đến 11:30</span></p>
          <p>Thời than hiến máu: <span>${timeBloodInput.value}</span></p>
        </div>
        <div class="item-contex2">
          <p>Số lượng đăng ký</p>
          <p class="vio"><span class="peo">5</span>/ <span class="peo">200</span> Người</p>
          <button class="btn-xemDS">xem danh sách</button>
        </div>
      </div>
    `;

    // Add event listener to the newly created 'Xem danh sách' button
    const btnXemDS = newItem.querySelector('.btn-xemDS');
    btnXemDS.addEventListener('click', function() {
      sudal.style.display = 'block';
    });

    action.appendChild(newItem);
    nameHospitalInput.value = '';
    addressInput.value = '';
    timeActionInput.value = '';
    timeBloodInput.value = '';
    modal.style.display = 'none';
  });

  dsHienMau.forEach(function(btn) {
    btn.addEventListener('click', function() {
      sudal.style.display = 'block';
    });
  });

  sudalOverlay.addEventListener('click', function() {
    sudal.style.display = 'none';
  });

  const chapNhan = document.querySelectorAll('.btn-cn');
  const tuChoi = document.querySelectorAll('.btn-tc');
  const vadal = document.querySelector('.vadal');
  chapNhan.forEach(function(cn){
    cn.addEventListener('click',function(){
      vadal.style.display = 'block';
    });
  });

  tuChoi.forEach(function(tc){
    tc.addEventListener('click',function(){
      const row=tc.closest('tr');
      if (row) {
        row.remove(); // Remove the row from the table
      }
    });
  });
  
    const send = document.getElementById('sendButton');
    send.addEventListener('click', function() {
      const tenBenhVien = document.getElementById('tenBenhVien').value;
      const nhomMau = document.getElementById('nhomMau').value;
      const ngayHienMau = document.getElementById('ngayHienMau').value;
      const hien = document.getElementById('hien').value;
    
      // Format the date as "dd/mm/yyyy"
      const inputDate = new Date(ngayHienMau);
      const day = inputDate.getDate().toString().padStart(2, '0');
      const month = (inputDate.getMonth() + 1).toString().padStart(2, '0');
      const year = inputDate.getFullYear();
      const formattedDate = `${day}/${month}/${year}`;
    
      var historyData = {
        tenBenhVien: tenBenhVien,
        nhomMau: nhomMau,
        ngayHienMau: formattedDate,
        hien: hien
      };
      localStorage.setItem("historyData", JSON.stringify(historyData));
    
      // Access the blood items in index.html
      const bloodItems = document.querySelectorAll('.blood-item');
    
      // Loop through each blood item
      bloodItems.forEach(function(bloodItem) {
        const mau = bloodItem.querySelector('.mau').textContent;
        const congElement = bloodItem.querySelector('.cong');
        
        // Compare nhomMau with mau
        if (nhomMau === mau) {
          // Add the value of hien to cong
          const currentValue = parseInt(congElement.textContent);
          const newValue = currentValue + parseInt(hien);
          congElement.textContent = newValue;
        }
      });
    
      // Hide the modal
    
      vadal.style.display = 'none';
    });
    const huySend = document.getElementById('huySend');
    huySend.addEventListener('click',function(){
      vadal.style.display = 'none';
    });
  
  
});