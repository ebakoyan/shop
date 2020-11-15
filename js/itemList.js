orderList=[];
priceList=[];
for(i=1;i<=5;i++){
    orderList.push(`item${i}.webp`);
    priceList.push(20*(i+1));
}
localStorage.setItem('orderList',JSON.stringify(orderList));
localStorage.setItem('priceList',JSON.stringify(priceList));
