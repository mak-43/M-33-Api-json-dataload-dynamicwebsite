function loadComments(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res=>res.json())
    .then(data=>displayComments(data))

}
loadComments()
function displayComments(comment){
    const cmnt=document.getElementById('comment')
    for(const i of comment){
        const p=document.createElement('p')
        p.innerText=i.email
        cmnt.appendChild(p)
        console.log(p)
    }
    
}