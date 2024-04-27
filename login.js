

let registerCon = document.getElementById("register")
let loginCon = document.getElementById("login")

// INPUTS



// BUTTONS

const registerSubb = document.getElementById("registerSubmit")
const loginSubb = document.getElementById("loginSubmit")

function registerB () {
    loginCon.style.left = "-510px";
    registerCon.style.right = "5px";
    loginCon.style.opacity = 0;
    registerCon.style.opacity = 1;
}

function loginB () {
    loginCon.style.left = "4px";
    registerCon.style.right = "-520px";
    loginCon.style.opacity = 1;
    registerCon.style.opacity = 0;
}

// function co
    

registerSubb.addEventListener("click", () => {
    
    let registerUser = document.getElementById("username").value
    let registerPass1 = document.getElementById("password1").value
    let registerPass2 = document.getElementById("password2").value
    let registerAddress = document.getElementById("address").value
    let registerEmail = document.getElementById("email").value
    
    
    localStorage.setItem("username", registerUser)
    localStorage.setItem("password", registerPass1)
    localStorage.setItem("password2", registerPass2)
    localStorage.setItem("address", registerAddress)
    localStorage.setItem("email", registerEmail)


    if (registerPass1 !== registerPass2) {
        alert("Password Does not match!")
        if (registerPass1 === "") {
            alert("Please input required information")
            registerPass1.style.border = "1px solid red"
        } else if (registerPass2 === "") {
            alert("Please provide a password in password2")
            registerPass2.style.border = "1px solid red"
        }
        
    } else if (registerAddress === "" || registerEmail === "" || registerUser === "") {
        alert("You did not input information in some required inputs")


        if (registerAddress === "") {
            registerAddress.style.border = "1px solid red"
        } else if (registerEmail === "") {
            registerEmail.style.border = "1px solid red"
        } else if (registerUser === "") {
            registerUser.style.border = "1px solid red"
        }

    } else {
        alert("Login Successfull")
        loginB()
    }

  
})

// console.log("tite")



// console.log(savedUsername, savedPassword)

let loginUserr = document.getElementById("login-user")
let loginPass = document.getElementById("login-pass")

loginSubb.addEventListener("click", e=> {
    e.preventDefault()

    let loginUser = document.getElementById("login-user")
    let loginPass = document.getElementById("login-pass")


    let savedUsername = localStorage.getItem("username")
    let savedPassword = localStorage.getItem("password")
    
   
    if (loginUser.value === savedUsername && loginPass.value === savedPassword) {
        sessionStorage.setItem("Status", savedUsername)
        loginUserr.style.border = "1px solid green"
        loginPass.style.border = "1px solid green"
        window.location.href = "index.html"
        alert("Login Successfully")
    } else {
        sessionStorage.setItem("Status", "0")
        loginUserr.style.border = "1px solid red"
        loginPass.style.border = "1px solid red "
        alert("invalid username or password. Please try again or do register again.")
    }

  
    console.log("login")

})


// localStorage.clear()

