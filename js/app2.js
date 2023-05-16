
baguetteBox.run('.gallery');

const gallerySearch = document.getElementById('gallerySearch');
gallerySearch.addEventListener('keyup', e => {
        let currentValue = e.target.value.toLowerCase();
        let gallery = document.querySelectorAll('data-caption');
        gallery.forEach(gallery => {
            if (gallery.textContent.toLowerCase().includes(currentVaulue)) {
                gallery.parentNode.style.display = "block";
            } else {
                gallery.parentNode.style.display = "none";
            }
        });
    });