let cart = Array.from(document.getElementsByClassName('cart'))
let img = Array.from(document.getElementsByClassName('img'))
let names = Array.from(document.getElementsByClassName('names'))
let prices = Array.from(document.getElementsByClassName('prices'))
let cartButton = Array.from(document.getElementsByClassName('cartButton'))
let numberOfPiece = Array.from(document.getElementsByClassName('numberOfPiece'))
let total = document.querySelector('.total')
let image= document.querySelector('.image')
let orderPage= document.querySelector('.orderPage')
let nav =Array.from(document.getElementsByClassName('nav'))
let footer=document.querySelector('.footer')
let hotPizza=document.querySelector('.hotPizza')
let container=document.querySelector('.container')
let TastyTreat=document.querySelector('.TastyTreat')
let card=document.querySelector('.card')
let checkOut=document.querySelector('.checkOut')
let Exit=document.querySelector('.Exit')


let orders=[]

image.onclick=function(){
    orderPage.style.display='block'
}
Exit.onclick=function(){
    orderPage.style.display='none'
    
}

for(let i=0;i<cart.length;i++){
    var z=numberOfPiece[i].innerHTML
    var numOfPiece=parseInt(z)

    cartButton[i].onclick=function(){
        let newOrder={
            img:img[i].src,
            Name:names[i].innerHTML,
            Price:prices[i].innerHTML,
            num:numOfPiece,
        }
        orders.push(newOrder)
        showOrder()
        getTotal()
    }
}

function showOrder(){
    let order=''
    for(let i=0;i<orders.length;i++){
        order+=`
        <img class="theImg" src="${orders[i].img}" class="img">
        <p class="theNumber">${orders[i].num}</p>
        <h3 class="names">${orders[i].Name}</h3>
        <p class="prices">${orders[i].Price}</p>
        <p onclick="increaseOne(${i})" class="increase">+</p>
        <p onclick="decreaseOne(${i})" class="decrease">-</p>
        <button onclick="Delete(${i})" class="delete">X</button>
        `
    }
    document.querySelector('.orderCart').innerHTML=order
}

let Total =+total.innerHTML
function getTotal(){
    Total+= +(orders[orders.length-1].Price)
    total.innerHTML=Total
}

function increaseOne(i){
    Total+=+(orders[i].Price)
    orders[i].num+=1
    total.innerHTML=Total   
    numberOfPiece[i].innerHTML=orders[i].num
    showOrder()
}

function decreaseOne(i){
    orders[i].num-=1
    numberOfPiece[i].innerHTML=orders[i].num
    if(orders[i].num<1){
        orders[i].num=1
    }
    else{
        Total-=+(orders[i].Price)
    }
    total.innerHTML=Total
    showOrder()
}

function Delete(i){
    Total-=+orders[i].Price*(orders[i].num)
    total.innerHTML=Total
    orders.splice(i,1)
    showOrder()
}
checkOut.onclick= function (){
    if(total.innerHTML==0){
        alert(`No item added to the cart` )
    }
    else {
        alert(`The Total is ${total.innerHTML}`)
    }
}

