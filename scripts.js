const form = document.getElementById("email-form");
const email = document.getElementById("email");
const emailWarning = document.getElementById("email-warning");
const icon = document.getElementById("error-icon");

form.addEventListener('submit', (e) => {
    e.preventDefault();
});


function formSubmit(fsumit) {
    
    
    if (email.value == " " || email.value ==  "" || email.value ==  null){
      console.log("hello there1")
        emailWarning.classList.remove("hidden");
        icon.classList.remove("hidden");
        emailWarning.innerHTML = "Please provide a valid email";
        email.classList.add('red_border');
        email.placeholder = "email@example.com";
        return false;
    } else {
      console.log("hello there2")
        emailWarning.classList.add("hidden");
        emailWarning.innerHTML = "";
        email.classList.remove('red_border');
        email.placeholder = "";
      };
        
     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
      {
        emailWarning.classList.add("hidden");
        icon.classList.add("hidden");
        emailWarning.innerHTML = "";
        email.classList.remove('red_border');
    
             
      } else {
          emailWarning.classList.remove("hidden");
          emailWarning.innerHTML = "Please provide a valid email";
          email.classList.add('red_border');
          email.value= "email@example.com";
          return false;
    
      };
    const msg = "welcome ";
      alert(msg);        
    }