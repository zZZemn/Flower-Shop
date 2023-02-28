let flowerList = [
    "Pink Peonies Bouquet",
    "Cherry Blossoms Bouquet",
    "Delphiniums Bouquet",
    "Citrus Burst Bouquet",
    "Timeless Bouquet",
    "Bold and Beautiful Bouquet",
    "Mint Green Bouquet",
    "Congrats Grad Bouquet",
    "Edgy Dark Bouquet",
    "Red Delight Bouquet",
    "Pink Paradise Bouquet",
    "Sun-Kissed Bouquet",
    "Modern Muse Bouquet",
    "Sunflower Sprinkles Bouquet",
    "Fresh Meadows Bouquet",
    "Rosy Delight Bouquet",
    "Pink Paradise Bouquet",
    "Deep Purple Bouquet",
    "Pink Blossom Bouquet",
    "Pretty in Pink Bouquet",
    "Pink Dazzler Bouquet"
  ];

  let PriceList = [20.99, 15.49, 12.99, 18.75, 9.99, 24.99, 13.99, 16.50, 22.00, 14.99, 19.99, 11.99, 17.99, 27.50, 8.99, 21.00, 23.75, 10.99, 12.49, 18.00, 26.99, 7.99];

const image = document.querySelectorAll('.img');
const parentContainer = document.querySelector('.parent-container-open');
const body = document.querySelector('body');


const imageView = () => {
    image.forEach((img) => {
        img.addEventListener('click', () => {

            const imageSelected = img; // Replace 'first-class-name' with your actual class name
            const secondClassName = imageSelected.classList[1];

                var div = document.createElement("div")
                div.setAttribute("class", "open-flower-container");
                document.querySelector(".parent-container-open").appendChild(div);

                var btnClose = document.createElement("i")
                btnClose.setAttribute("class", "fa-regular fa-rectangle-xmark btn-close");
                document.querySelector(".open-flower-container").appendChild(btnClose);

                var image1 = document.createElement("img")
                image1.setAttribute("src","../img/flower" + secondClassName + ".jpg");
                image1.setAttribute("class","opened-img");
                document.querySelector(".open-flower-container").appendChild(image1);
                
                var priceNameContainer = document.createElement("div")
                priceNameContainer.setAttribute("class", "price-name-container");
                document.querySelector(".open-flower-container").appendChild(priceNameContainer);
                
                var flowerName = document.createElement("h1")
                flowerName.setAttribute("class", "flower-name-opened")
                flowerName.textContent = flowerList[secondClassName];
                document.querySelector(".price-name-container").appendChild(flowerName);
                
                var flowerPrice = document.createElement("p")
                flowerPrice.setAttribute("class", "flower-price-opened")
                flowerPrice.textContent = "$" + " " + PriceList[secondClassName];
                document.querySelector(".price-name-container").appendChild(flowerPrice);
                
                var cart = document.createElement("a")
                cart.setAttribute("class", "cart");
                cart.setAttribute("href", "#");
                document.querySelector(".price-name-container").appendChild(cart);

                var varIcon = document.createElement("i")
                varIcon.setAttribute("class", "fa-solid fa-cart-shopping");
                document.querySelector(".cart").appendChild(varIcon);
                

            parentContainer.classList.add('image-view');
            body.classList.add("remove-scroll");
        });
    });
}


imageView();

