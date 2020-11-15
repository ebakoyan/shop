if(localStorage.getItem('selectedItem')!=null){
    shop=document.querySelector(".shop");
    selectedItem=JSON.parse(localStorage.getItem('selectedItem'));
    for(i=0;i<selectedItem.length;i++){
        block=document.createElement("div");
        img=document.createElement('img');
        img.src=`./img/${selectedItem[i]}.webp`;
        block.classList.add("block");
        block.appendChild(img);
        block.style.border="3px solid red"
        shop.appendChild(block);
    }
    document.getElementById('money').innerHTML=`Total ${localStorage.getItem('total')}$`;

}
else{
    window.location.href="index.html";
}