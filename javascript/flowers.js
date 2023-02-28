let flowerNames = [
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

  let flowerPrices = [20.99, 15.49, 12.99, 18.75, 9.99, 24.99, 13.99, 16.50, 22.00, 14.99, 19.99, 11.99, 17.99, 27.50, 8.99, 21.00, 23.75, 10.99, 12.49, 18.00, 26.99, 7.99];

  

const addingImages = () => {
    for (var i = 0; i <= 20; i++) {
        var div = document.createElement("div");
        div.setAttribute("class", "flower flower" + i)
        document.querySelector(".flowers-container").appendChild(div);
        
        var image = document.createElement("img")
        image.setAttribute("src","../img/flower"+ i +".jpg");
        image.setAttribute("class", "img" + " " + i + " " + "img" + i);

        var name = document.createElement("h5")
        name.setAttribute("class", "flower-name");
        name.textContent = flowerNames[i];

        var price = document.createElement("p")
        price.setAttribute("class", "price");
        price.textContent = "$" + flowerPrices[i];
        
        document.querySelector(".flower" + i).appendChild(image);
        document.querySelector(".flower" + i).appendChild(name);
        document.querySelector(".flower" + i).appendChild(price);
   }
}  //Image gallery

addingImages();