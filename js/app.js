


document.queryselector('#search').addEventListener('keyiup', userSearch);

function userSearch() {
    const caption = document.querySelectorAll ('a[data-caption]');
    let captionsList = [];

    for (let i=0; i<caption.length; i++){
        let captions = caption[i].getAttribute('data-caption');
        captions.push(captions.toLowerCase());

        let searchVar = document.querySelector('#search');
        searchVar = searchVar.ariaValueMax.toLowerCase();

    if(captionsList[i].indexOf(searchVar)>-1){
        captions[i].style.display='block';
    }
    else{
        caption[i].style.display='none';

        }
    }
}

console.log(userSearch());