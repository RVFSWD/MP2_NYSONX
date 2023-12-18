document.querySelector('#datatable-search-input').addEventListener('input', filterList);

  function filterList() {
    const searchInput = document.querySelector('#datatable-search-input');
    const filter = searchInput.value.toLowerCase();
    const listItems = document.querySelectorAll('.fw-normal, fw-bold, text-muted'); 

    

    listItems.forEach((item) => {
      let text = item.textContent;
      if (text.toLowerCase().includes(filter)) {
        item.closest('tr').style.display = ''; 
      } else {
        item.closest('tr').style.display = 'none'; 
      }
    });
  }
  document.addEventListener('DOMContentLoaded', (event) => {

    document.querySelectorAll('#shipped').forEach((btn) => {
    btn.addEventListener('click', function() {
      let tr = btn.closest('tr');
      tr.querySelector('#status-payments').textContent = 'Shipped';
    });
  });

  document.querySelectorAll('#out').forEach((btn) => {
    btn.addEventListener('click', function() {
      let tr = btn.closest('tr');
      tr.querySelector('#status-payments').textContent = 'Out-of-stock';
    });
  });

  document.querySelectorAll('#pending').forEach((btn) => {
    btn.addEventListener('click', function() {
      let tr = btn.closest('tr');
      tr.querySelector('#status-payments').textContent = 'Pending';
    });
  });


  });
  document.addEventListener('DOMContentLoaded', (event) => {

    document.querySelectorAll('.remove-btn').forEach((btn) => {
    btn.addEventListener('click', function() {
      let tr = btn.closest('tr');
      tr.remove();
    });
  });

  });
const dataList = document.getElementById('data-list');

window.onload = function() {
    if (localStorage.length === 0) {
        dataList.innerHTML = '<p>No data found in local storage.</p>';
        return;
    }

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        const listItem = document.createElement('li');
        listItem.textContent = `Key: ${key}, Value: ${value}`;
        dataList.appendChild(listItem);
    }
};

function addOrder(key, value) {
    localStorage.setItem(key, value);
    const listItem = document.createElement('li');
    listItem.textContent = `Key: ${key}, Value: ${value}`;
    dataList.appendChild(listItem);
}
  
let sidebarOpen = false;
const sidebar = document.getElementById('sidebar');

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
  }
}
