function goToLogin() {

    window.location.href = "login.html";

}


function toggleFAQ(button) {

    const item = button.parentElement;

    const isActive =
        item.classList.contains("active");


    document
        .querySelectorAll(".faq-item")
        .forEach(function(element) {

            element.classList.remove("active");

            const icon =
                element.querySelector("button span");

            icon.textContent = "+";

        });


    if (!isActive) {

        item.classList.add("active");

        const icon =
            button.querySelector("span");

        icon.textContent = "−";

    }

}