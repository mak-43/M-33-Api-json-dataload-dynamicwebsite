function loadAlbums(){
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res=>res.json())
    .then(data=>displayAlbums(data))
}
loadAlbums()
function displayAlbums(a){
    console.log(a)
   const albumContainer=document.getElementById('albu')
    for(const i of a){
        const p=document.createElement('p')
        p.style.textAlign='center'
        p.innerText=i.title
       
        albumContainer.appendChild(p)
        console.log(p)
    }
}
