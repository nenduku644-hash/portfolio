const form = document.getElementById("contactForm");

const statusBox = document.getElementById("status");

/* CONTACT FORM SUBMIT */

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    /* GET VALUES */

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const message = document.getElementById("message").value.trim();

    /* VALIDATION */

    if (!name || !email || !phone || !message) {

        statusBox.innerText = "Please fill all fields";

        statusBox.style.color = "red";

        return;

    }

    /* PHONE VALIDATION */

    if (phone.length < 10) {

        statusBox.innerText =
            "Enter valid mobile number";

        statusBox.style.color = "red";

        return;

    }

    /* EMAIL VALIDATION */

    if (!email.includes("@")) {

        statusBox.innerText =
            "Enter valid email address";

        statusBox.style.color = "red";

        return;

    }

    /* LOADING */

    statusBox.innerText = "Sending Message...";

    statusBox.style.color = "#00ffff";

    try {

        const response = await fetch("https://backend-barr.onrender.com/send", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({

                name,
                email,
                phone,
                message

            })

        });

        const data = await response.json();

        /* SUCCESS */

        if (response.ok) {

            statusBox.innerText =
                "Message Sent Successfully 🚀";

            statusBox.style.color = "#00ffff";

            form.reset();

        }

        /* FAILED */

        else {

            statusBox.innerText =
                "Failed To Send Message";

            statusBox.style.color = "red";

        }

    }

    catch (error) {

        console.log(error);

        statusBox.innerText =
            "Server Error";

        statusBox.style.color = "red";

    }

});

/* SMOOTH SCROLL NAVIGATION */

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", (e) => {

        e.preventDefault();

        const targetId = link.getAttribute("href");

        const targetSection = document.querySelector(targetId);

        window.scrollTo({

            top: targetSection.offsetTop - 70,

            behavior: "smooth"

        });

    });

});

/* NAVBAR BACKGROUND ON SCROLL */

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(0,0,0,0.8)";

    }

    else {

        navbar.style.background =
            "rgba(0,0,0,0.3)";

    }

});

/* FLOATING SKILL ANIMATION */

const skillCards = document.querySelectorAll(".skill-card");

skillCards.forEach((card, index) => {

    card.style.animation =
        `floatSkill 3s ease-in-out ${index * 0.2}s infinite`;

});

/* TYPEWRITER EFFECT */

const text =
    "AI Developer | MERN Stack Developer | UI Designer";

let index = 0;

const typingElement =
    document.querySelector(".hero-left h3");

typingElement.innerHTML = "";

function typeEffect() {

    if (index < text.length) {

        typingElement.innerHTML +=
            text.charAt(index);

        index++;

        setTimeout(typeEffect, 70);

    }

}

typeEffect();

/* GLOW EFFECT ON BUTTONS */

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.boxShadow =
            "0 0 20px #00ffff";

    });

    button.addEventListener("mouseleave", () => {

        button.style.boxShadow = "none";

    });

});

/* PROJECT CARD EFFECT */

const projectCards =
    document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0px) scale(1)";

    });

});

/* PARALLAX EFFECT */

window.addEventListener("mousemove", (e) => {

    const profile =
        document.querySelector(".profile-card");

    let x =
        (window.innerWidth / 2 - e.pageX) / 30;

    let y =
        (window.innerHeight / 2 - e.pageY) / 30;

    profile.style.transform =
        `rotateY(${x}deg) rotateX(${y}deg)`;

});