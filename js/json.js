const user={id:11,name:'Gorib Amir',job:'actor'}

const stringified=JSON.stringify(user)
// console.log(stringified)
// console.log(user)

const shop={
    name:'Alia Store',
    address:'ranbir road',
    profit:1500,
    products:['laptop','mobile','pepsi'],
    owner:{
        name:'Alia bhutt',
        profession:'Actress'
    },
    isExpensive:false
}
const shopStringified=JSON.stringify(shop)
console.log(shop)
console.log(shopStringified)
const converted=JSON.parse(shopStringified)
console.log(converted)