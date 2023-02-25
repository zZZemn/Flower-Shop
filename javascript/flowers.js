const addingImages = () => {
    for (var i = 0; i <= 22; i++) {
        var div = document.createElement("div");
        div.setAttribute("class", "flower")
        div.setAttribute("height", "400px");
        div.setAttribute("width", "300px");

        var image = document.createElement("img")
        image.setAttribute("src","../img/flower"+ i +".jpg");

        document.querySelector(".flower").appendChild(image);
        document.querySelector(".flowers-container").appendChild(div);
   }
}  //Image gallery

addingImages();