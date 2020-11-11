orderList=sessionStorage.getItem("order")

shop=document.querySelector(".shop");
for(i=0;i<orderList.length;i++){
    if(orderList[i]!=','){
        block=document.createElement("div");
        img=document.createElement("img");
        b=orderList[i];
        img.src=`./img/item${b}.webp`;
        block.classList.add("block");
        block.appendChild(img);

        shop.appendChild(block);
    }
}
console.log(orderList[0]);