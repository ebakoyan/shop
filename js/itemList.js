orderList=[];
for(i=1;i<=5;i++){
    orderList.push(`item${i}.webp`);
}
localStorage.setItem('orderList',JSON.stringify(orderList));