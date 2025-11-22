welcomeMessage();

/// Function to prompt user for their name and display a welcome message
function welcomeMessage() {
    /// Prompt the user to enter their name
    let userName = prompt("Please enter your name:");

    /// If the user did not enter a name, default to "Guest"
    if (userName === '' || userName === null) {
        userName = "Guest";
    }

    /// Update the welcome message on the webpage
    document.getElementById("welcome-speech").innerText = "Welcome, " + userName + "!";
}

/// Function to validate the message form (to be implemented)
function validateForm() {

}

// UI Design
document.getElementById("open-ui").addEventListener("click", function () {
    document.getElementById("ui-design-page").classList.remove("hidden");
    window.location.href = "#ui-design-page";
});
document.getElementById("close-ui").addEventListener("click", function () {
    document.getElementById("ui-design-page").classList.add("hidden");
});


// Web Development
document.getElementById("open-webdev").addEventListener("click", function () {
    document.getElementById("webdev-page").classList.remove("hidden");
    window.location.href = "#webdev-page";
});
document.getElementById("close-webdev").addEventListener("click", function () {
    document.getElementById("webdev-page").classList.add("hidden");
});


// Branding
document.getElementById("open-branding").addEventListener("click", function () {
    document.getElementById("branding-page").classList.remove("hidden");
    window.location.href = "#branding-page";
});
document.getElementById("close-branding").addEventListener("click", function () {
    document.getElementById("branding-page").classList.add("hidden");
});

// ------- FUNCTION ANIMATION -------
function openSection(sectionId) {
    const section = document.getElementById(sectionId);

    section.classList.remove("hidden");

    setTimeout(() => {
        section.classList.remove("opacity-0", "translate-y-5");
        section.classList.add("opacity-100", "translate-y-0");
    }, 10);

    window.location.href = "#" + sectionId;
}

function closeSection(sectionId) {
    const section = document.getElementById(sectionId);

    // animasi fade out
    section.classList.add("opacity-0", "translate-y-5");
    section.classList.remove("opacity-100", "translate-y-0");

    // setelah animasi selesai
    setTimeout(() => {
        section.classList.add("hidden");

        // scroll balik ke portfolio page
        document.getElementById("portfolio-page").scrollIntoView({
            behavior: "smooth"
        });

    }, 500); // sesuai durasi animasi
}



// ------- UI DESIGN -------
document.getElementById("open-ui").addEventListener("click", function () {
    openSection("ui-design-page");
});
document.getElementById("close-ui").addEventListener("click", function () {
    closeSection("ui-design-page");
});


// ------- WEB DEVELOPMENT -------
document.getElementById("open-webdev").addEventListener("click", function () {
    openSection("webdev-page");
});
document.getElementById("close-webdev").addEventListener("click", function () {
    closeSection("webdev-page");
});


// ------- BRANDING -------
document.getElementById("open-branding").addEventListener("click", function () {
    openSection("branding-page");
});
document.getElementById("close-branding").addEventListener("click", function () {
    closeSection("branding-page");
});
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const gender = document.getElementById("gender").value;
    const message = document.getElementById("message").value;

    // TAMPILKAN KE OUTPUT BOX
    document.getElementById("output-name").textContent = name;
    document.getElementById("output-email").textContent = email;
    document.getElementById("output-gender").textContent = gender;
    document.getElementById("output-message").textContent = message;

    // MUNCULKAN BOX
    document.getElementById("output-box").classList.remove("hidden");

    // AUTO SCROLL TURUN
    document.getElementById("output-box").scrollIntoView({
        behavior: "smooth"
    });
});

