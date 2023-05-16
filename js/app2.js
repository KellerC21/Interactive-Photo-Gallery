
baguetteBox.run('.gallery');

const gallerySearch = document.getElementById('search');
gallerySearch.addEventListener('keyup', e => {
        let currentValue = e.target.value.toLowerCase();
        let gallery = document.querySelectorAll('[data-caption]');
        gallery.forEach(gallery => {
            let caption = gallery.getAttribute('data-caption').toLowerCase();
            if (caption.includes(currentValue)) {
                gallery.parentNode.style.display = '';
            } else {
                gallery.parentNode.style.display = 'none';
            }
        });
    });