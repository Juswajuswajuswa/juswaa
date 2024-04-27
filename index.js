const notification = document.getElementById('notification');
const notification2 = document.getElementById('notification2');
const heartModal = document.getElementById('heart-modal');
const addCartModal = document.getElementById('add-cart-modal');
const payMentModal = document.getElementById('payment-modal-outer');
const nameInput = document.getElementById('name');
const socials = document.getElementById('socials-inner');
const modal = document.getElementById('contact-modal');


const cartContainer = document.getElementById('cart-container');

let notificationNumbers = 0 ;
let heartNotificationNumbers = 0;
let counter = 0;

let storedUser = localStorage.getItem("username")

console.log(storedUser)


const profileNameContent = document.getElementById("profile-name")

profileNameContent.textContent = `Welcome, ${storedUser}`

// localStorage.clear()

function myBody () {

    let usernameee = localStorage.getItem("username")
    let Statuss = sessionStorage.getItem("Status")

        if (Statuss !== usernameee) {
            alert("Please login first.")
            window.location.href = "login.html"
        }
}

// console.log(usernameee)

document.addEventListener('click', e => {
    // LOGOUT FUNCTION (TINAMAD)
    if (e.target.id === "login-btn") {
        sessionStorage.setItem("Status", "0")
       

        window.location.href = "login.html"
    }


    if (e.target.id === "user-profile") {
        window.location.href = "profile.html"
    }



    if (e.target.id === "add") {
        notificationNumbers++
        notification.textContent = notificationNumbers
        notification.style.display = 'block'

        addCartModal.style.bottom = "70px"

        setTimeout(() => {
            addCartModal.style.bottom = "-50px"
        }, 1500)

    }

    if (e.target.id === "heart-icon") {
        heartNotificationNumbers++
        notification2.textContent = heartNotificationNumbers
        notification2.style.display = 'block'

        heartModal.style.bottom = "10px"

        setTimeout(() => {
            heartModal.style.bottom = "-50px"
        }, 1500)

        
    }

    if (e.target.id === "buy") {
        payMentModal.style.display = 'block'

    }

    if (e.target.id === "close-btn-modal") {
        payMentModal.style.display = 'none'
    }

    // TO CLOSE THE SOCIALS MODAL
    socials.style.display = 'none'

    // TO OPEN THE SOCIALS
    if (e.target.id === "socials") {
        socials.style.display = 'block'
    }

    
    if (e.target.id === "pay-btn") {
        e.preventDefault()

        cartContainer.style.top = "-1000px"

        sucessBtn()

        notificationNumbers--
        notification.textContent = notificationNumbers

        
        notificationNumbers = 0
        if (notificationNumbers === 0) {
            notification.style.display = "none"
        }

        

        setTimeout(() => {
            hideModal()
        }, 1500)

    }
    


    if (e.target.id === "open-contact") {
        modal.style.display = 'block'
    }

    if (e.target.id === "close-contact") {
        modal.style.display = 'none'
    }

    // CHECKOUT BUTTON
    if (e.target.id === "check-out-button") {
        payMentModal.style.display = 'block'

        if (cart.length === 0) {
            payMentModal.style.display = 'none'
        }

    }



    // SUBSCRIBE FUNCTIONALITY
    // WHEN CLICKED THE VALUE THAT USER INPUT WILL BE CLEARED
    if (e.target.id === "subscribe-btn") {
        const email = document.getElementById('subscribe-input')
        email.value = ''
        console.log("clicked")
    }

})


const cartIcon = document.getElementById('cart-icon');


cartIcon.addEventListener('click', () => {
    cartContainer.classList.toggle('show-menu')
})


function sucessBtn () {
    
    payMentModal.innerHTML = `
        
        <div class="hello">

            <div class="check">
            <i class="fas fa-check-circle"></i>
            </div>

            <p class="sucess">THANK YOU <span class="user">${(nameInput.value).toUpperCase()}</span> FOR YOUR PURCHASE! <3</p>
        
        </div>
        `

}

function hideModal() {
    payMentModal.style.display = 'none'
} 


// CART FUNCTIONALITY 
const products = [
    {
        id: 1,
        name: 'ZIP UP JACKET',
        price: 15399,
        image: "/AVS CODE VERSION/images/jacket1.png"
    }, 
    {
        id: 2,
        name: 'Hooded Coat',
        price: 7499,
        image: "/AVS CODE VERSION/images/jacket2.png"
    }, 
    {
        id: 3,
        name: 'Black coat',
        price: 7300,
        image: "/AVS CODE VERSION/images/jacket3.png"
    }, 

    {
        id: 4,
        name: 'FrostCoat',
        price: 15500,
        image: "/AVS CODE VERSION/images/jacket4.png"
    }, 

    {
        id: 5,
        name: 'FROSTLUXURY',
        price: 16300,
        image: "/AVS CODE VERSION/images/jacket5.png"
    }, 

    // SHIRT AND PANTS SET SECTION

    {
        id: 6,
        name: 'PoloFlex Set',
        price: 4700,
        image: "/images/pair1.png"
    }, 
    {
        id: 7,
        name: 'Sporty Combo',
        price: 5500,
        image: "/images/pair2.png"
    }, 
    {
        id: 8,
        name: 'PoloDash Kit',
        price: 5800,
        image: "/images/pair3.png"
    }, 
    {
        id: 9,
        name: 'Styler Duo',
        price: 4500,
        image: "/images/pair4.png"
    }, 
    {
        id: 10,
        name: 'PoloLite',
        price: 4700,
        image: "/images/pair5.png"
    }, 



    // SHOES SECTION


    {
        id: 11,
        name: 'Baroque Deby',
        price: 9999,
        image: "/images/shoes11.png"
    }, 
    {
        id: 12,
        name: 'Opulenza',
        price: 7560,
        image: "/images/shoes15.png"
    }, 
    {
        id: 13,
        name: 'LuxeStride',
        price: 5333,
        image: "/images/shoes13.png"
    }, 
    {
        id: 14,
        name: 'EleganteSole',
        price: 10999,
        image: "/images/shoes14.png"
    }, 
    {
        id: 15,
        name: 'PrestigeStep',
        price: 6800,
        image: "/images/shoes12.png"
    }, 

]

const totalProductPrice = document.getElementById('total-product-price')

let cart = [];
let totalPrice = 0;


function addToCart(productId) {
    const targetProduct = products.find(product => {
        return product.id === productId
    })

    if (!cart.includes(targetProduct)) {
        cart.push(targetProduct)

        totalPrice += targetProduct.price
        totalProductPrice.textContent = totalPrice

       orderRender()

    }

}

function removeCartItem(productId) {
    const targetProduct = products.find(product => {

        return product.id === productId

    })


    if (cart.includes(targetProduct)) {
        let index = cart.indexOf(targetProduct)
        cart.splice(index, 1)

        totalPrice -= targetProduct.price
        totalProductPrice.textContent = totalPrice
        notificationNumbers--
        notification.textContent = notificationNumbers

        if (notificationNumbers === 0) {
            notification.style.display = "none"
        }

    }

    orderRender()

}

const cartItemContainer = document.getElementById('cart-body-container')

function renderOrder () {
    let orderHtml = ``

    cart.forEach(product => {

        orderHtml += `

        <div class="cart-item" id="cart-item">
            <div class="cart-img">
                <img src="${product.image}" alt="">
            </div>
        
            <div class="cart-data">
                <p class="cart-name">${product.name}</p>
            </div>
        
            <div class="cart-price-container">
                <p class="cart-price">${product.price}</p>
        
                <div class="cart-close">
                    <button onclick="removeCartItem(${product.id})">X</button>
                </div>
        
            </div>
        </div>
        `
    })
    return orderHtml
}


function orderRender() {
    cartItemContainer.innerHTML = renderOrder()
}



// console.log("hello world")