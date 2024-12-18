const form = document.querySelector(".contact-form");

const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEMail() {
    const bodyMessage = {
        fullName: fullName.value,
        email: email.value,
        phone: phone.value,
        subject: subject.value,
        message: message.value
    };

    // Use fetch to send data to the backend
    fetch("http://localhost:3000/send-email", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyMessage),
    })
    .then((response) => response.json())
    .then((data) => {
        if (data.message) {
            Swal.fire({
                title: "Success!",
                text: "Message has been sent successfully!",
                icon: "success"
            });
        } else {
            Swal.fire({
                title: "Error!",
                text: "Failed to send the message. Please try again.",
                icon: "error"
            });
        }
    })
    .catch((error) => {
        console.error("Error:", error);
        Swal.fire({
            title: "Error!",
            text: "An unexpected error occurred.",
            icon: "error"
        });
    });
}


//newsletter subscription
document.addEventListener("DOMContentLoaded", () => {
    const newsletterForm = document.getElementById("newsletter-form");
    const emailInput = document.getElementById("newsletter-email");
    const responseDiv = document.getElementById("newsletter-response");
  
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const email = emailInput.value;
  
      // Send email to the backend
      fetch("http://localhost:3000/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          responseDiv.innerHTML = `<p style="color: green;">${data.message}</p>`;
          emailInput.value = ""; 
        } else if (data.error) {
          responseDiv.innerHTML = `<p style="color: red;">${data.error}</p>`;
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        responseDiv.innerHTML = `<p style="color: red;">An unexpected error occurred. Please try again.</p>`;
      });
    });
  });





 function checkInput() {
    const items = document.querySelectorAll(".item");

    for (const item of items) {
        if (item.value == "") {
           item.classList.add("error");
           item.parentElement.classList.add("error");
        }
          
        if (items[1].value == "") {
            checkEmail();
        }

        items[1].addEventListener("keyup", () => {
            checkEmail();
        });

        item.addEventListener("keyup", () => {
           if (item.value != "") {
             item.classList.remove("error");
             item.parentElement.classList.remove("error");
           }
           else {
            item.classList.add("error");
            item.parentElement.classList.add("error");
           }
        });
    }
 }



  function checkEmail() {
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const errorTxtEmail = document.querySelector(".error-msg.email");

    if (!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if (email.value != "") {
            errorTxtEmail.innerText = "Enter a valid email address";
        }
        else {
            errorTxtEmail.innerText = "Email can't be empty";
        }
    }
    else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
  }

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInput();


    if (!fullName.classList.contains("error") &&
     !email.classList.contains("error") &&
      !phone.classList.contains("error") && 
      !subject.classList.contains("error") &&
       !message.classList.contains("error")) {
      
        sendEMail();

        form.reset();
        return false;  
    }
        
});