

const addingImages = () => {
    for (var i = 0; i <= 22; i++) {
        var div = document.createElement("div");
        div.setAttribute("class", "flower flower" + i)
        document.querySelector(".flowers-container").appendChild(div);
        
        var image = document.createElement("img")
        image.setAttribute("src","../img/flower"+ i +".jpg");
        
        document.querySelector(".flower" + i).appendChild(image);
   }
}  //Image gallery

addingImages();