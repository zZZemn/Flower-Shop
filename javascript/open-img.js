const image = document.querySelectorAll('.img');
const parentContainer = document.querySelector('.parent-container-open');
const body = document.querySelector('body');


const imageView = () => {
    image.forEach((img) => {
        img.addEventListener('click', () => {
                var div = document.createElement("div")
                div.setAttribute("class", "open-flower-container");
                document.querySelector(".parent-container-open").appendChild(div);
                
                var image1 = document.createElement("img")
                image1.setAttribute("src","../img/flower5.jpg");
                image1.setAttribute("class","opened-img");
                document.querySelector(".open-flower-container").appendChild(image1);

                var priceNameContainer = document.createElement("div")
                priceNameContainer.setAttribute("class", "price-name-container");
                document.querySelector(".open-flower-container").appendChild(priceNameContainer);

                var flowerName = document.createElement("h1")
                flowerName.setAttribute("class", "flower-name-opened")
                flowerName.textContent = "FlowerName";
                document.querySelector(".price-name-container").appendChild(flowerName);
                
                var flowerPrice = document.createElement("p")
                flowerPrice.setAttribute("class", "flower-price-opened")
                flowerPrice.textContent = "$100";
                document.querySelector(".price-name-container").appendChild(flowerPrice);
                
                var cart = document.createElement("a")
                cart.setAttribute("class", "cart");
                cart.setAttribute("href", "#");
                document.querySelector(".price-name-container").appendChild(cart);

                var varIcon = document.createElement("i")
                varIcon.setAttribute("class", "fa-solid fa-cart-shopping");
                document.querySelector(".cart").appendChild(varIcon);
                //adding

            parentContainer.classList.add('image-view');
            body.classList.add("remove-scroll");
        });
    });
}

document.querySelectorAll('.parent-container-open').forEach(n => n.addEventListener('click', () =>{
    const div = document.querySelector('.parent-container-open');
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }

    parentContainer.classList.remove('image-view');
    body.classList.remove('remove-scroll');
}));

imageView();


