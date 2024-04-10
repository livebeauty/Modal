let btn = document.querySelector(".btn-open");

let modal = document.querySelector(".modal")

let close = document.querySelector(".close")
function openModal() {
    modal.style.display = "block"
}


function closeModal() {
    modal.style.display = "none"
}

// When the user clicks on <span>
btn.addEventListener("click",openModal)
close.addEventListener("click",closeModal)


// When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  // Handle form submission
  let login = document.querySelector("#loginForm");
  login.addEventListener("submit",submit)

  function submit() {
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;
     // Here you can add your login logic
     console.log("Username:", username);
     console.log("Password:", password);
     closeModal(); // Close modal after login attempt
  }

  submit()