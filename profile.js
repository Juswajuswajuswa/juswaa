const profileUser = document.getElementById("profile-user")
const profilePass = document.getElementById("profile-password")
const profileAddress = document.getElementById("profile-address")
const profileEmail = document.getElementById("profile-email")


let oldUser = localStorage.getItem("username")
let oldPass = localStorage.getItem("password")
let oldEmail = localStorage.getItem("email")
let oldAddress = localStorage.getItem("address")


const validationModal = document.getElementById("validation-modal")
const cancelUserBtn = document.getElementById("cancel-user")
// const cancelPassBtn = document.getElementById("cancel-pass")
const cancelAddressBtn = document.getElementById("cancel-address")
const cancelEmailBtn = document.getElementById("cancel-email")
const newPassModal = document.getElementById("new-pass-change-modal")

const updateModal = document.getElementById("update-modal")

// console.log(oldUser, oldPass, oldEmail, oldAddress)



profileUser.value = oldUser
profilePass.value = oldPass
profileAddress.value = oldAddress
profileEmail.value = oldEmail



let count = 0;


document.addEventListener('click', e => {

    if (e.target.id === "user-change") {
       validationModal.style.display = "block"

        document.addEventListener('click', e => {
            if (e.target.id === "yes") {
                count++ 
                profileUser.disabled = false
                validationModal.style.display = "none"
                newPassModal.style.display = "none"
                cancelUserBtn.style.display = "block"
                cancelAddressBtn.style.display = "none"
                console.log(count)

                document.addEventListener('click', e => {
                    if (e.target.id === "cancel-user") {
                        count = count - count 
                        console.log(count)
                        profileUser.disabled = true
                        cancelUserBtn.style.display = "none"

                        profileUser.value = oldUser

                    }
                })

            } else if (e.target.id === "no"){
                profileUser.disabled = true
                validationModal.style.display = "none"
                cancelUserBtn.style.display = "none"
            }
        })

    } 
       

})

document.addEventListener('click', e=> {
    if (e.target.id === "pass-change") {
        
        validationModal.style.display = "block"

        document.addEventListener("click", e => {
            if (e.target.id === "yes") {
                newPassModal.style.display = "block"
                validationModal.style.display = "none"
                cancelUserBtn.style.display = "none"
                profileUser.disabled = true

               document.addEventListener('click', e=> {

                let oldPassword = document.getElementById("oldpass")
                let newPassword = document.getElementById("newpass")

                    if (e.target.id === "confirm") {
                        count++
                        console.log(count)
                        if (oldPassword.value === oldPass) {
                            profilePass.value = newPassword.value
                            newPassModal.style.display = "none"
                        }
                    } else if (e.target.id === "newpass-cancel") {
                        count = count - count
                        console.log(count)
                        newPassModal.style.display = "none"
                        oldPassword.value = ""
                        newPassword.value = ""
                    }
               })

            } else if (e.target.id === "no") {
                newPassModal.style.display = "none"
                validationModal.style.display = "none"
            }
        })
    }
})





document.addEventListener('click', e => {

    if (e.target.id === "address-change") {

        validationModal.style.display = "block"

        document.addEventListener('click', e => {
            if (e.target.id === "yes") {
                count++
                console.log(count)
                profileAddress.disabled = false
                validationModal.style.display = "none"
                newPassModal.style.display = "none"
                cancelUserBtn.style.display = "none"
                cancelAddressBtn.style.display = "block"

                document.addEventListener('click', e => {
                    if (e.target.id === "cancel-address") {
                        count = count - count 
                        console.log(count)
                        profileAddress.disabled = true
                        cancelAddressBtn.style.display = "none"

                        profileAddress.value = oldAddress
                    }
                })

            } else if (e.target.id === "no"){
                profileUser.disabled = true
                validationModal.style.display = "none"
                cancelUserBtn.style.display = "none"
            }
        })


    }

})


function updatedUser () {
    location.reload()
    console.log(count)
}


document.addEventListener('click', e => {
    if (e.target.id === "email-change") {

        validationModal.style.display = "block"

        document.addEventListener('click', e => {
            if (e.target.id === "yes") {
                count++
                console.log(count)
                profileEmail.disabled = false
                validationModal.style.display = "none"
                newPassModal.style.display = "none"
                cancelUserBtn.style.display = "none"
                cancelAddressBtn.style.display = "none"
                cancelEmailBtn.style.display = "block"

                document.addEventListener('click', e => {
                    if (e.target.id === "cancel-email") {
                        count = count - count
                        console.log(count)
                        profileEmail.disabled = true
                        cancelEmailBtn.style.display = "none"
                        profileEmail.value = oldEmail
                    }
                })

            } else if (e.target.id === "no"){
                profileUser.disabled = true
                validationModal.style.display = "none"
                cancelEmailBtn.style.display = "none"
            }
        })

    }
})



document.addEventListener("click", e => {

    if (e.target.id === "update-btn") {

        let newProfileUser = document.getElementById("profile-user")
        let newProfilePass = document.getElementById("profile-password")
        let newProfileAddress = document.getElementById("profile-address")
        let newProfileEmail = document.getElementById("profile-email")
       
        if (count >= 1) {
            updateModal.style.display = "block"

            document.addEventListener("click", e => {
                if (e.target.id === "update-yes") {
                    profileUser.value = newProfileUser.value
                    profilePass.value = newProfilePass.value
                    profileAddress.value = newProfileAddress.value
                    profileEmail.value = newProfileEmail.value
                    
                    localStorage.setItem("username", profileUser.value)
                    localStorage.setItem("password", profilePass.value)
                    localStorage.setItem("address", profileAddress.value)
                    localStorage.setItem("email", profileEmail.value)

                    updateModal.style.display = "none"

                    updatedUser()
                    window.location.href = "login.html"

                } else if (e.target.id === "update-no") {
                    updateModal.style.display = "none"
                    updatedUser()
                }
            })

        } else {
            alert("You havent changed anything.")
        
        }


    
        
        // 
        
        
    }

})