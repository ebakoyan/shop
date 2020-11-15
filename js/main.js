shop=document.querySelector(".shop");
orderList=JSON.parse(localStorage.getItem('orderList'));
priceList=JSON.parse(localStorage.getItem("priceList"));
for(i=0;i<orderList.length;i++){
    block=document.createElement("div");
    img=document.createElement('img');
    img.src=`./img/${orderList[i]}`;
    block.classList.add("block");
    img.classList.add("wow");
    img.classList.add("tada");
    block.id=`item${i+1}`;
    block.appendChild(img);
    itemPrice=document.createElement('div');
    price=document.createElement('h2');
    price.innerHTML=`${priceList[i]}$`;
    itemPrice.appendChild(price);
    itemPrice.classList.add("shopItemPrice")
    block.appendChild(itemPrice);
    block.setAttribute('onclick','setRed(this)')
    shop.appendChild(block);
}
function shakeCart(){
    shopCart=document.querySelector('#cart');
    if(shopCart.style.transform=="rotate(360deg)")
        shopCart.style.transform="";
    else shopCart.style.transform="rotate(360deg)"

}
function setRed(block){
    block.classList.toggle("setRed")
    blockList=document.querySelectorAll(".block");
    s=0;
    for(i=0;i<blockList.length;i++){
        if(blockList[i].classList.contains("setRed"))
            s++;
    }
    document.querySelector('#itemCount').innerHTML=s;
    shakeCart();
}
function buy(){
    window.location.href="buy.html";
}
///////////////////

function myFunction(){
document.querySelector(".selectedItems").innerHTML="";
selectedItem=[];
blockList=document.querySelectorAll(".block");
for(i=0;i<blockList.length;i++)
    if(blockList[i].classList.contains("setRed"))
        selectedItem.push(blockList[i].id);
localStorage.setItem('selectedItem',JSON.stringify(selectedItem));
if(selectedItem.length>0){
    s=0;
    selectedItem=JSON.parse(localStorage.getItem('selectedItem'));
    priceList=JSON.parse(localStorage.getItem('priceList'));
    orderList=JSON.parse(localStorage.getItem('orderList'));
    parent=document.querySelector('.selectedItems');
    for(i=0;i<selectedItem.length;i++){
        child=document.createElement("div");
        child.classList.add('itemInfo');
        tempSelected=String(selectedItem[i]);
        tempPrice=0;
        for(j=0;j<orderList.length;j++)
            if(`${tempSelected}.webp`===orderList[j])
                tempPrice=priceList[j];
        tempText=document.createElement('h2');
        tempText.innerHTML=`${tempSelected} = ${tempPrice}$`;
        s+=tempPrice;
        child.appendChild(tempText);
        fontAwesome=document.createElement('i');
        fontAwesome.classList.add('fas');
        fontAwesome.classList.add('fa-times-circle')
        fontAwesome.classList.add('fa-2x')
        fontAwesome.setAttribute('onclick','removeItem(this)')
        child.appendChild(fontAwesome);
        parent.appendChild(child);
    }
    localStorage.setItem('total',s);
}
    document.querySelector(".checkParent").style.display='flex';
}
if(localStorage.getItem("selectedItem")!=null){
    selectedItem=JSON.parse( localStorage.getItem('selectedItem'));
    document.querySelector('#itemCount').innerHTML=selectedItem.length;
    blockList=document.querySelectorAll(".block");
    for(i=0;i<blockList.length;i++){
        for(j=0;j<selectedItem.length;j++){
            if(blockList[i].id==selectedItem[j])
                blockList[i].classList.add("setRed");
        }
    }
}
function myClose(){
    document.querySelector(".checkParent").style.display='none';
}
function removeItem(blockChild){
    block=blockChild.parentNode;
    item=block.querySelector('h2').innerHTML;
    item=item.slice(0,-6)
    selectedItem=JSON.parse(localStorage.getItem('selectedItem'));
    i=selectedItem.indexOf(item);
    selectedItem.splice(i,1)
    console.log(selectedItem);
    localStorage.setItem('selectedItem',JSON.stringify(selectedItem));
    block.parentNode.removeChild(block);
}