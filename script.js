// order section ####################### 

function changeImage(imageSrc, eventText) {
  document.getElementById('carImage').src = './Models images/' + imageSrc;
  document.getElementById('event1').innerHTML = eventText;
}

function changeToNewImage() {

  var imageElement = document.getElementById('carImage');


  imageElement.src = 'tms_color_blue_01_v2.png';
  imageElement.src = 'tms_color_gray_01_v2.png';
}



// emialer #########################


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
  




