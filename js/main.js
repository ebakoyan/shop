    shop=document.querySelector(".shop");
    orderList=JSON.parse(localStorage.getItem('orderList'));
    for(i=0;i<orderList.length;i++){
        block=document.createElement("div");
        img=document.createElement('img');
        img.src=`./img/${orderList[i]}`;
        block.classList.add("block");
        block.id=`item${i+1}`;
        block.appendChild(img);
        block.setAttribute('onclick','setRed(this)')
        shop.appendChild(block);
    }
function setRed(block){
    block.classList.toggle("setRed");
}
function buy(){
    if(localStorage.getItem('selectedItem')!=null){
        localStorage.removeItem('selectedItem');
    }
    selectedItem=[];
    blockList=document.querySelectorAll(".block");
    for(i=0;i<blockList.length;i++){
        if(blockList[i].classList.contains("setRed")){
            selectedItem.push(blockList[i].id);
        }
    }
    if(selectedItem.length>0){
        localStorage.setItem('selectedItem',JSON.stringify(selectedItem));
        window.location.href="buy.html";
    }
    else alert("Select item");
}