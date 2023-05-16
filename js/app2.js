
baguetteBox.run('.gallery');

const gallerySearch = document.getElementById('search');
gallerySearch.addEventListener('keyup', e => {
        let currentValue = e.target.value.toLowerCase();
        let gallery = document.querySelectorAll('[data-caption]');
        gallery.forEach(gallery => {
            let caption = gallery.getAttribute('data-caption').toLowerCase();
            if (gallery.textContent.toLowerCase().includes(currentValue)) {
                gallery.parentNode.style.display = "block";
            } else {
                gallery.parentNode.style.display = "none";
            }
        });
    });