const login = (e) => {
  let email = document.getElementById("email-id").value;
  let password = document.getElementById("pass-id").value;
  console.log(email);
  let formData = JSON.parse(localStorage.getItem("formData")) || [];
  let exist =
    formData.length &&
    JSON.parse(localStorage.getItem("formData")).some(
      (data) =>
        data.email.toLowerCase() === email &&
        data.password.toLowerCase() === password
    );
  if (!exist) {
    location.replace("/");
    alert("hello");
  } else {
    location.replace("/");
    alert("ollll");
  }
  e.preventDefault();
};
