const register = (e) => {
  let email = document.getElementById("email-id").value;
  let password = document.getElementById("pass-id").value;

  let formData = JSON.parse(localStorage.getItem("formData")) || [];
  console.log(formData);

  let exist =
    formData.lenghth &&
    JSON.parse(localStorage.getItem("formData")).some(
      (data) =>
        data.email.toLowerCase() === email.toLowerCase() &&
        data.password.toLowerCase() === password.toLowerCase()
    );
  console.log(exist);
  if (!exist) {
    formData.push({ email, password });
    localStorage.setItem("formData", JSON.stringify(formData));
    document.querySelector("form").reset();
    location.replace("../html/sign.html");
  } else {
    location.replace("/index.html");
  }
  e.preventDefault();
};
