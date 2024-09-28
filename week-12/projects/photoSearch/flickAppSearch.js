const photoContainer = document.querySelector('.photo-container');
const searchBar = document.querySelector('#search-bar');
function displayImages(photoArray){
    photoArray.forEach((photo)=>{
        const farm_id = photo.farm
        const server_id = photo.server;
        const photo_id = photo.id;
        const secret = photo.secret;
        const url = `https://farm${farm_id}.staticflickr.com/${server_id}/${photo_id}_${secret}.jpg`;
        const img = document.createElement('img');
        img.src = url;
        photoContainer.appendChild(img)
    });
    
}
async function searchPics(query){
    const apiKey = '980f6a80f8ddfaec421a2d291ecda515';
    const res = await fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${query}&format=json&nojsoncallback=1`);
    const data = await res.json();
    const photoArray = data.photos.photo;
    displayImages(photoArray);
};
searchBar.addEventListener('input',(e)=>{
    e.preventDefault();
    searchPics(searchBar.value);
});