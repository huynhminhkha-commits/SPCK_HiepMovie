let form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let ConfirmPassword = document
    .getElementById("ConfirmPassword")
    .value.trim();

  if (password !== ConfirmPassword) {
    alert("Vui lòng nhập mật khẩu giống nhau");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  let user = users.findIndex((account) => {
    return account.email === email;
  });

  if (user !== -1) {
    users[user].password = password;

    localStorage.setItem("users", JSON.stringify(users));

    alert("Đổi mật khẩu thành công");
  } else {
    alert("Email không tồn tại");
  }
});