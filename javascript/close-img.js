document.querySelectorAll('.parent-container-open').forEach(n => n.addEventListener('click', () =>{
    const div = document.querySelector('.parent-container-open');
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }

    parentContainer.classList.remove('image-view');
    body.classList.remove('remove-scroll');
})); 