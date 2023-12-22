
function registerUser() {
  const name = document.getElementById('recipient-name').value;
  const email = document.getElementById('useremail').value;
  const contact = document.getElementById('contact').value;
  const address = document.getElementById('address').value;
  const status = document.getElementById('status').value;

  const userData = {
    name: name,
    email: email,
    contact: contact,
    address: address,
    status: status
  };

  localStorage.setItem("accountDetails", JSON.stringify(accountData));

  const table = document.querySelector('.users');
  const newRow = table.insertRow(-1);
  const cellName = newRow.insertCell(0);
  const cellEmail = newRow.insertCell(1);
  const cellContact = newRow.insertCell(2);
  const cellAddress = newRow.insertCell(3);
  const cellStatus = newRow.insertCell(4);
  const cellEdit = newRow.insertCell(5);
  cellName.innerHTML = name;
  cellEmail.innerHTML = email;
  cellContact.innerHTML = contact;
  cellAddress.innerHTML = address;
  cellStatus.innerHTML = status;
  cellEdit.innerHTML = '<div class="dropdown" id="settingseach">' +
    '<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">' +
    '<i class="bi bi-gear"></i>' +
    '</button>' +
    '<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">' +
    '<li><a class="dropdown-item"  onclick="outofstock()">Out-of-stock</a></li>' +
    '<li><a class="dropdown-item" onclick="fullypaid()">Fully Paid</a></li>' +
    '<li><a class="dropdown-item disableaccount" onclick="removeorders()">Remove Orders</a></li>' +
    '</ul>' +
    '</div>';
}



// document.querySelector('#datatable-search-input').addEventListener('input', filterList);

//   function filterList() {
//     const searchInput = document.querySelector('#datatable-search-input');
//     const filter = searchInput.value.toLowerCase();
//     const listItems = document.querySelectorAll('.fw-normal, fw-bold, text-muted'); 

    

//     listItems.forEach((item) => {
//       let text = item.textContent;
//       if (text.toLowerCase().includes(filter)) {
//         item.closest('tr').style.display = ''; 
//       } else {
//         item.closest('tr').style.display = 'none'; 
//       }
//     });
//   }
//   document.addEventListener('DOMContentLoaded', (event) => {

//     document.querySelectorAll('#shipped').forEach((btn) => {
//     btn.addEventListener('click', function() {
//       let tr = btn.closest('tr');
//       tr.querySelector('#status-payments').textContent = 'Shipped';
//     });
//   });

//   document.querySelectorAll('#out').forEach((btn) => {
//     btn.addEventListener('click', function() {
//       let tr = btn.closest('tr');
//       tr.querySelector('#status-payments').textContent = 'Out-of-stock';
//     });
//   });

//   document.querySelectorAll('#pending').forEach((btn) => {
//     btn.addEventListener('click', function() {
//       let tr = btn.closest('tr');
//       tr.querySelector('#status-payments').textContent = 'Pending';
//     });
//   });


//   });
//   document.addEventListener('DOMContentLoaded', (event) => {

//     document.querySelectorAll('.remove-btn').forEach((btn) => {
//     btn.addEventListener('click', function() {
//       let tr = btn.closest('tr');
//       tr.remove();
//     });
//   });

//   });
// const dataList = document.getElementById('data-list');

// window.onload = function() {
//     if (localStorage.length === 0) {
//         dataList.innerHTML = '<p>No data found in local storage.</p>';
//         return;
//     }

//     for (let i = 0; i < localStorage.length; i++) {
//         const key = localStorage.key(i);
//         const value = localStorage.getItem(key);
//         const listItem = document.createElement('li');
//         listItem.textContent = `Key: ${key}, Value: ${value}`;
//         dataList.appendChild(listItem);
//     }
// };

// function addOrder(key, value) {
//     localStorage.setItem(key, value);
//     const listItem = document.createElement('li');
//     listItem.textContent = `Key: ${key}, Value: ${value}`;
//     dataList.appendChild(listItem);
// }
  
// let sidebarOpen = false;
// const sidebar = document.getElementById('sidebar');

// function openSidebar() {
//   if (!sidebarOpen) {
//     sidebar.classList.add('sidebar-responsive');
//     sidebarOpen = true;
//   }
// }

// function closeSidebar() {
//   if (sidebarOpen) {
//     sidebar.classList.remove('sidebar-responsive');
//     sidebarOpen = false;
//   }
// }
