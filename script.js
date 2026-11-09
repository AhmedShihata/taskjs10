

// Register
let register = document.getElementById("register")
register.addEventListener("submit", function (e) {
    e.preventDefault()

    let name = document.getElementById("name")
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    localStorage.setItem("name", name.value)
    localStorage.setItem("email", email.value)
    localStorage.setItem("password", password.value)


    alert("The Operation Was Completed Successfully.")
    setTimeout(function () {
        window.location.href = "login.html"
    }, 2000)
})

// Login
let logmsg = document.getElementById("logmsg")
let log = document.getElementById("login")

log.addEventListener("submit", function (e) {
    e.preventDefault()

    let mail = document.getElementById("email")
    let pass = document.getElementById("password")

    // let fullName = localStorage.getItem("name")
    let storedmail = localStorage.getItem("email")
    let storedpass = localStorage.getItem("password")

    if (mail.value === storedmail && pass.value === storedpass) {
        setTimeout(function () {
            window.location.href = "index.html"
        }, 2000);
    }
    else {
        sessionStorage.setItem("failcount");
        logmsg.textContent = "Incorrect email or password. Attempt:"
        logmsg.style.color = "red"
    }

})