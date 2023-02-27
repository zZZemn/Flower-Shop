const image = document.querySelectorAll('.img');
const parentContainer = document.querySelector('.parent-container-open');
const body = document.querySelector('body');


const imageView = () => {
    image.forEach((img) => {
        img.addEventListener('click', () => {
            parentContainer.classList.add('image-view');
            body.classList.add("remove-scroll");

            //adding
            
        });
    });
}

document.querySelectorAll('.parent-container-open').forEach(n => n.addEventListener('click', () =>{
    parentContainer.classList.remove('image-view');
    body.classList.remove('remove-scroll');
}));

imageView();


