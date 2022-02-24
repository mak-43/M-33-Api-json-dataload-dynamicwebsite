function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}
function loadUsers(){
    
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=>res.json())
  .then(data=>console.log(data))
}
function post(){
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res=>res.json())
  .then(data=>display(data))
}
function display(d){
  const ul=document.getElementById('users')
  for(const i of d){
    const li=document.createElement('li')
    li.innerText=`${i.id}`
    ul.appendChild(li)
    //console.log(i.id)
  }
}