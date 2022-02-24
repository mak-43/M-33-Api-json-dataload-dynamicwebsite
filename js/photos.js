function loadPhotos(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res=>res.json())
    .then(data=>display(data))

}
function display(photos){
    const p=document.getElementById('photos')
    for(const i of photos){
        const im=document.createElement('img')
       
        im.src=i.url
        p.appendChild(im)
        console.log(im)
    }
}