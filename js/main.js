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
        // input.setAttribute("onclick","set(this)")
        if(sessionStorage.getItem('order')!=null){
            myList=sessionStorage.getItem('order');
        
        for(j=0;j<myList.length;j++){
            if(myList[j]!=','){
                if(myList[j]==i)
                input.checked=true;
            }
        }
        }
        block.appendChild(label);
        block.appendChild(input);
        shop.appendChild(block);
    }
}
orderList=[];
// function set(a){
//     if(a[i])
//     orderList.push(Number(a.name));
// }
function buy(){


    blockList=document.getElementsByClassName("block");
    for(i=0;i<blockList.length;i++){
        if(blockList[i].getElementsByTagName("input")[0].checked==true)
            orderList.push(blockList[i].getElementsByTagName('input')[0].name);
    }
  
    sessionStorage.setItem('order',orderList);
    window.location.href="buy.html"
}