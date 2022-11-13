let cred = JSON.parse(localStorage.getItem("cred"));
let x = document.getElementById("login_form");
console.log(x.action);
function ok(data, em, ps) {
  let success = false;
  data.forEach((element) => {
    let { email, password } = element;
    if (email == em && password == ps) {
      success = true;
    }
  });
  if (success) {
    alert("Login success");
    x.action = "index.html";
  } else {
    alert("Wrong credential");
  }
}
function signin() {
  let email_inp = document.getElementById("email").value;
  let pass_inp = document.getElementById("password").value;
  ok(cred, email_inp, pass_inp);
}
