document.queryselector('search').addEventListener('keyiup', userSearch);

function myFuntion() {
    const searchInput = document.getElementById('seach').value.toLowerCase();
    const galleryPhoto = document.getElementsByClassName('gallery-photo');

    for (let i=0; i<galleryPhoto.length; i++) {
        let captionFilter = galleryPhoto[i].getAttribute('data-caption').toLowerCase;
        
        if (captionFilter.includes(searchInput)){

        } else {
            galleryPhoto[i].style.display='none';

        }  
    }
}

console.log(userSearch());