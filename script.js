const form = document.querySelector("form"),
  statusTxt = form.querySelector(".button-area soan");

form.onsubmit = (e) => {
  e.preventDefault();
  statusTxt.style.color = "#0D6EFD";
  statusTxt.style.display = "block";

  //creating new xml obj
  let xhr = new XMLHttpRequest();
  //sending post request to php file
  xhr.open("POST", "message.php", true);
  //onload ajax
  xhr.onload = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      //storing ajax res in res variable
      let response = xhr.response;
      if (
        response.indexOf("Email and password field is required!") != -1 ||
        response.indexOf("Enter valid email address!") ||
        response.indexOf("Sorry! failed to send message!")
      ) {
        statusTxt.style.color = "red";
      } else {
        form.reset();
        setTimeout(() => {
          statusTxt.style.display = "none";
        }, 3000);
      }
      statusTxt.innerHTML = response;
    }
  };
  // creating new obj to send form data
  let formData = new FormData(form);
  //sending form data
  xhr.send(formData);
};
