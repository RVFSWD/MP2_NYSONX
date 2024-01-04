// order section ##############################################

// change image ####################

function changeImage(imagePath) {
  document.getElementById('carImage').src = imagePath;
}

function changeInteriorImage(imagePath) {
  document.getElementById('interiorImage').src = imagePath;
}

function changeWheelsImage(imagePath) {
  document.getElementById('wheelsImage').src = imagePath;
}

// order variant buttons ###############

function selectOption(button, type) {
  
  const buttons = document.querySelectorAll(`.btn-${type}`);
  buttons.forEach((btn) => {
      btn.classList.remove('active');
  });


  button.classList.add('active');
}

// paint buttons ###################

function selectPaintOption(button) {
 
  const buttons = document.querySelectorAll('.paint-colors button');
  buttons.forEach((btn) => {
      btn.classList.remove('active');
  });

  
  button.classList.add('active');
}

// interior buttons ################### 

function selectInteriorOption(button) {
  
  const buttons = document.querySelectorAll('.interior-colors button');
  buttons.forEach((btn) => {
      btn.classList.remove('active');
  });

  
  button.classList.add('active');
}

// wheels buttons ####################

function selectWheelsOption(button) {
  
  const buttons = document.querySelectorAll('.wheels-colors button');
  buttons.forEach((btn) => {
      btn.classList.remove('active');
  });

  
  button.classList.add('active');
}

// payment page ##############################################

// function selectPaymentOption(button, paymentType) {
  
//   const buttons = document.querySelectorAll('.cash-btn button');
//   buttons.forEach((btn) => {
//       btn.classList.remove('active');
//   });

  
//   button.classList.add('active');

  
//   console.log(`Selected Payment Type: ${paymentType}`);
 
// }


// emailer #########################


    function saveEmail() {
      
      var emailInput = document.getElementById('email');
      var email = emailInput.value;

     
      if (email.trim() !== "") {
        
        localStorage.setItem('userEmail', email);

        
        alert('Email saved successfully!');
        
        
        emailInput.value = "";
      } else {
        alert('Please enter a valid email address.');
      }
    }
  


