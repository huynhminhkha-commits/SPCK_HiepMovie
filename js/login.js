let form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  // Ngặn chặn hành động load mặc định của trang web
  event.preventDefault();

  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  if(!email || !password){
    alert("Please enter email and password");
  } else {
    
    // --- THÊM ĐOẠN NÀY: Kiểm tra tài khoản admin cố định ---
    if (email === "HuynhTheHiepAdmin@gmail.com" && password === "HIEPad") {
      const adminSession = {
        email: email,
        username: "Hiep Admin",
        photoURL: "",
        phone: "",
        provider: "email",
        role_id: "admin",
      };
      localStorage.setItem("userSession", JSON.stringify(adminSession));
      localStorage.setItem("isLoggedIn", "true");
      alert("Đăng nhập thành công vào trang Quản trị!");
      window.location.href = "admin2.html"; // Chuyển sang trang admin bạn yêu cầu
      return; // Dừng lại không chạy tiếp Firebase bên dưới
    }
    // -----------------------------------------------------

    // --- CÁC TRƯỜNG HỢP CÒN LẠI: Giữ nguyên code Firebase cho player ---
    firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      const userSession = {
        email,
        username: user.displayName || "",
        photoURL: user.photoURL || "",
        phone:"",
        provider: "email",
        role_id: "user",
      };

      // Lưu phiên vào localStorage
      localStorage.setItem("userSession", JSON.stringify(userSession));
      localStorage.setItem("isLoggedIn", "true");
      window.location.href= "index.html"
      alert("Đăng nhập thành công");
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
    });
  }
});

const btnGoogle = document.querySelector("#google");
var provider = new firebase.auth.GoogleAuthProvider();

btnGoogle.addEventListener("click", (event) => {
  event.preventDefault();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      console.log(user)
      const userData = {
        email: user.email,
        username: user.displayName,
        image: user.photoURL,
        provider: "google",
        role_id: "user",
        phone:""
      };

      return firebase
        .firestore()
        .collection("users")
        .doc(user.uid)
        .set(
          {
            uid: user.uid,
            email: user.email,
            username: user.displayName || "",
            image: user.photoURL || "",
            provider: "google",
            updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
          },
          {
            merge: true,
          }
        )
        .then(() => {
          localStorage.setItem("user", JSON.stringify(userData));
          localStorage.setItem("isLoggedIn", "true");

          alert("Xin chào " + user.displayName);

          // Chuyển sang trang chính
          window.location.href = "index.html";
        });
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code  ;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      alert(errorMessage)
    });
});