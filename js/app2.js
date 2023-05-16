document.querySelector('#search').addEventListener('keyup', myFuntion);
baguetteBox.run('.gallery');

function myFuntion() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const galleryPhoto = document.getElementsByClassName('.photo');

    for (let i=0; i<galleryPhoto.length; i++) {
        let captionFilter = galleryPhoto[i].getAttribute('data-caption').toLowerCase();
        
        if (captionFilter.includes(searchInput)) {
            galleryPhoto[i].style.display = '';
        } else {
            galleryPhoto[i].style.display = 'none';

        }  
    }
}

