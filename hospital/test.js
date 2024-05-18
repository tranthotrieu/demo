document.addEventListener('DOMContentLoaded', function() {
    var sendButton = document.getElementById('sendButton');
    sendButton.addEventListener('click', handleFormSubmission);

    function handleFormSubmission(event) {
        event.preventDefault();

        const bloodItems = document.querySelectorAll(".blood-item"); // Update selector to target .blood-item
        console.log('length', bloodItems.length);
        
        var nhomMau = document.getElementById('nhomMau').value.trim();
        console.log(nhomMau);

        var hien = parseInt(document.getElementById('hien').value);

        var bloodItemFound = false;

        for (var i = 0; i < bloodItems.length; i++) {
            var bloodType = bloodItems[i].querySelector(".mau").textContent.trim(); // Update to get bloodType from .mau
            if (nhomMau === bloodType) {
                bloodItemFound = true;

                var bloodQuantityElement = bloodItems[i].querySelector('.cong');
                var bloodQuantity = parseInt(bloodQuantityElement.textContent);
                var newBloodQuantity = bloodQuantity + hien;
                
                bloodQuantityElement.textContent = newBloodQuantity;
                break;
            }
        }

        if (!bloodItemFound) {
            var container = document.querySelector('.container');

            var newBloodItem = document.createElement('div');
            newBloodItem.classList.add('blood-item');

            var newBloodItemStyle1 = document.createElement('div');
            newBloodItemStyle1.classList.add('blood-item--style1');

            var newBloodType = document.createElement('span');
            newBloodType.classList.add('mau');
            newBloodType.textContent = nhomMau;

            var newBloodDroplet = document.createElement('i');
            newBloodDroplet.classList.add('fa-solid', 'fa-droplet');

            var newBloodItemStyle2 = document.createElement('div');
            newBloodItemStyle2.classList.add('blood-item--style2');

            var newBloodQuantity = document.createElement('span');
            newBloodQuantity.classList.add('cong');
            newBloodQuantity.textContent = hien;

            newBloodItemStyle1.appendChild(newBloodType);
            newBloodItemStyle1.appendChild(newBloodDroplet);
            newBloodItemStyle2.appendChild(newBloodQuantity);

            newBloodItem.appendChild(newBloodItemStyle1);
            newBloodItem.appendChild(newBloodItemStyle2);

            container.appendChild(newBloodItem);
        }

        document.getElementById('tenBenhVien').value = '';
        document.getElementById('nhomMau').value = '';
        document.getElementById('ngayHienMau').value = '';
        document.getElementById('hien').value = '';
    }
});