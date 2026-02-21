// ===== YOUR ORIGINAL CODE (unchanged) =====
function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform  = "translateY(0px)"
}
function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform  = "translateY(-500px)"
}

// Typewriter effect
const texts = [
    "DEVELOPER",
    "VIBE CODER",
    "CS STUDENT",
    "AWS ENTHUSIAST",
]

let speed = 100;
const textElements = document.querySelector(".typewriter-text")
let textIndex = 0;
let charcterIndex = 0;

function typeWriter() {
    if(charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed); 
    }
    else{
        setTimeout(eraseText, 1000)
    }
}

function eraseText() {
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1)
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter,500)
    }
}

// ===== NEW: CV DOWNLOAD =====
function downloadCV() {
    const link = document.createElement("a");
    link.href = "Bhavya_Final_Resume.pdf";
    link.download = "Annabattula_Sai_Bhavya_Sri_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// ===== NEW: SKILL BARS ANIMATE ON SCROLL =====
function animateSkillBars() {
    const fills = document.querySelectorAll(".fill");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fill = entry.target;
                fill.style.width = fill.getAttribute("data-width") + "%";
                observer.unobserve(fill);
            }
        });
    }, { threshold: 0.4 });
    fills.forEach(fill => observer.observe(fill));
}

// ===== NEW: CONTACT FORM =====
function sendMessage(e) {
    e.preventDefault();
    const btn = document.querySelector(".send-btn");
    const successMsg = document.getElementById("form-success");

    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
    btn.disabled = true;

    setTimeout(() => {
        btn.innerHTML = 'Send Message &nbsp;<i class="fa-solid fa-paper-plane"></i>';
        btn.disabled = false;
        successMsg.style.display = "block";

        document.getElementById("c-name").value = "";
        document.getElementById("c-email").value = "";
        document.getElementById("c-subject").value = "";
        document.getElementById("c-message").value = "";

        setTimeout(() => { successMsg.style.display = "none"; }, 4000);
    }, 1500);
}

// ===== NEW: SCROLL TO TOP =====
window.addEventListener("scroll", () => {
    const btn = document.getElementById("scrollTopBtn");
    if (window.scrollY > 400) btn.classList.add("show");
    else btn.classList.remove("show");
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// ===== INIT =====
window.onload = function() {
    typeWriter();
    animateSkillBars();
}