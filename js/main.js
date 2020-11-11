shop=document.querySelector(".shop");
function myFunction(){
    for(i=1;i<=5;i++){
        block=document.createElement("div");
        img=document.createElement("img");
        img.src=`./img/item${i}.webp`;
        block.classList.add("block");
        block.appendChild(img);
      


        label=document.createElement("label");
        label.setAttribute("for",`item${i}`)
        label.innerHTML="Select"
        input=document.createElement("input")
        input.setAttribute("type","checkbox");
        input.setAttribute("name",`${i}`)
        input.setAttribute("onclick","set(this)")
        block.appendChild(label);
        block.appendChild(input);
        shop.appendChild(block);
    }
}
orderList=[];
function set(a){
    orderList.push(Number(a.name));
}
function buy(){
    sessionStorage.clear();
    sessionStorage.setItem('order',orderList);
    window.location.href="./buy.html"
}