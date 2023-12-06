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

