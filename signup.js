if (localStorage.getItem("cred") === null) {
  localStorage.setItem("cred", JSON.stringify([]));
}

function signup() {
  let cred = JSON.parse(localStorage.getItem("cred"));

  let user = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };
  cred.push(user);
  localStorage.setItem("cred", JSON.stringify(cred));
  alert("Account Created");
}
