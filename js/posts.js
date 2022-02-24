function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>displayPost(data))
}
loadPosts()
function displayPost(d){
    const post=document.getElementById('posts')
    for(const i of d){
       const div=document.createElement('div')
       div.classList.add('posts')
       div.innerHTML=`
       <h3>${i.title}</h3>
       <p>${i.body}</p>
       ` 
       post.appendChild(div)
        console.log(i.title)
    }
}

function addApost(){
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        body:JSON.stringify({
            title:'My new post',
            body:'this is my post',
            userId:1,

        }),
        headers:{
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
    
}