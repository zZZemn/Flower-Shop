let flowerNames = [
    "Mother's Day Pink Peonies Bouquet",
    "Delicate Pink Cherry Blossoms Bouquet",
    "Enchanting Blue Delphiniums Bouquet",
    "Citrus Burst Orange and Yellow Bouquet",
    "Timeless White Roses and Greenery Bouquet",
    "Bold and Beautiful white and Purple Bouquet",
    "Refreshing Mint Green and White Bouquet",
    "Congrats Grad Bouquet",
    "Modern and Edgy Dark Bouquet",
    "Red and Pink Delight Bouquet",
    "Pink Paradise Bouquet",
    "Sun-Kissed Bouquet",
    "Modern Muse Bouquet",
    "Sunflower Sprinkles Bouquet",
    "Fresh Meadows Bouquet",
    "Rosy Delight Bouquet",
    "Pink Paradise Bouquet",
    "Deep Purple Dreams Bouquet",
    "Pink Blossom Bouquet",
    "Pretty in Pink Bouquet",
    "Pink Dazzler Bouquet"
  ];
  

const addingImages = () => {
    for (var i = 0; i <= 20; i++) {
        var div = document.createElement("div");
        div.setAttribute("class", "flower flower" + i)
        document.querySelector(".flowers-container").appendChild(div);
        
        var image = document.createElement("img")
        image.setAttribute("src","../img/flower"+ i +".jpg");

        var text = document.createElement("p")
        text.setAttribute("class", "flower-name");
        text.textContent = flowerNames[i];
        
        document.querySelector(".flower" + i).appendChild(image);
        document.querySelector(".flower" + i).appendChild(text);
   }
}  //Image gallery

addingImages();