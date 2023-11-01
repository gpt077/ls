 let CartSize={

  cart:[],
additem(itemName){

  this.cart.push(itemName)

}
,

deleteItem(ItemName){

const a=  this.cart.indexOf(ItemName)
if(a>=-1)
{

  this.cart.splice(a,1)

}
}
,
CartSize(){

return  this.cart.length;
}


}

CartSize.additem("mayur");
CartSize.additem('abhay');
CartSize.additem('dhruv');
CartSize.deleteItem('abhay');


console.log(CartSize.CartSize());

