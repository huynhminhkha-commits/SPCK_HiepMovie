let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  // Ngặn chặn hành động load mặc định của sever
  event.preventDefault();

  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  // Regex kiểm tra kí tự 
  let lowerCaseLetter = /[a-z]/g;
  // let upperCaseLetter = /[A-Z]/g;
  // let numbers = /[0-9]/g;

    if (password.length < 5) {
    alert("Password must be at least 8 characters");
    // Kiểm tra password có kí tự viết thường không
  } else if (!password.match(lowerCaseLetter)) {
    alert("Password must  contain a lowercase letter");
    // Kiểm tra password có kí tự viết hoa không
  } else {
    firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      let userData = {
                username:"",
                phone:"",
                email,
                password,
                provider: "email",
                role_id: "user",
            }
        db.collection("users").add(userData)
                .then((docRef) => {
                    alert("Đăng ký thành công");
                    window.location.href = "login.html";
                    console.log("Document written with ID: ", docRef.id);
                })
                .catch((error) => {
                    alert("Đăng ký thất bại");
                    console.error("Error adding document: ", error);
                });
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage)
    });
  
  
  }
});
