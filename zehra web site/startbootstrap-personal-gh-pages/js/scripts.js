(() => {
    "use strict";
    const contactForm=document.getElementById("contactForm");
    const nameInput=document.getElementById("name");
    const phoneInput=document.getElementById("phone");
    const emailInput=document.getElementById("email");
    const messageInput=document.getElementById("email");
    const submitSuccessMessage=document.getElementById("submitSuccessMessage");
    const submitErrorMessage=document.getElementById("submitErrorMessage");
    
    contactForm.addEventListener('submit',event=> {
        nameInput.setCustomValidity("");
        phoneInput.setCustomValidity("");
        emailInput.setCustomValidity("");
        messageInput.setCustomValidity("");
    
 if(/\d/.test(nameInput.value)){
    nameInput.setCustomValidity("Name should not contain numbers.");
}
if(!/^\+?\d{10,15}$/.test(phoneInput.value)){
    phoneInput.setCustomValidity("Phone number is not valid.");
}
if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)){
    emailInput.setCustomValidity("Email is not valid.");
}
    if(messageInput.value.trim() === ""){
        messageInput.setCustomValidity("Message cannot be empty.");
    } else if(messageInput.value.length < 10){
        messageInput.setCustomValidity("Message should be at least 10 characters long.");
    }
if(!contactForm.checkValidity()){
    event.preventDefault();
    event.stopPropagation();
}
else{
    event.preventDefault();

emailjs.sendForm("service_um45l1t","template_wlo5l15","#contactForm")
.then((Response)=>{
        submitSuccessMessage.style.display="block";
        contactForm.reset();
        contactForm.classList.remove("was-validated");
        setTimeout(function(){
            submitSuccessMessage.style.display="none";
        },3000);
        console.log("success!",Response.status,Response.text);
    },
    (error)=>{
     submitErrorMessage.style.display="block";
     setTimeout(function(){
        submitErrorMessage.style.display="none";
},3000);
console.log("Failed....",error);
}
);
    }
contactForm.classList.add("was-validated");
},
false
);
})();
