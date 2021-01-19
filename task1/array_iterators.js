//---------------------------------------------------------------------------------
// forEach()
var arr = [1,5,6,8,9,10,12];
var sum = 0;
arr.forEach(function Function(ele){
    sum = sum + ele;
});
console.log("forEach:- " + sum);

//map()
var arr = [1, 2, 3, 4];
var arr1 = [];
var arr1 = arr.map((val, i, arr) => {
    return val + 5;
  });
console.log("map function",arr1);


// lastIndexOf
var lst = ["tom","jerry","doraemon","red","blue","black"];
var last_Index_Of = lst.lastIndexOf("black");
var last_Index_Of_1 = lst.lastIndexOf("blue");
console.log("lastIndexOf black :-  ",last_Index_Of);
console.log("lastIndexOf blue : - ",last_Index_Of_1);
 
//filter
var filter_array = [14,56,75,26,28,95,55];
function large_no(val){
  return val>=50;
}
var filtered = filter_array.filter(large_no);
console.log("filter() : - ", filtered);


// find()

var fruits = ["Apple","Mango","Banana","Orange","Jack Fruit"];
function isMango(f,fruits){
  if(f === "Mango"){
    
    return "Mango is found"
  }
}
var result = fruits.find(isMango);
console.log("find() :- " ,result);


//findIndexOf()

var num = [256,365,598,364,259,246,4851,56.384];
function num_index(f,index){
  return (f%index==1);


}
var found_index = num.findIndex(num_index);
console.log("findIndex() : - ",found_index);


//reduce()

var number_list = [1,2,3,4,5,6,7,8,9,10];
function getSum(total,number_list){
  return total+number_list
}
var sum = number_list.reduce(getSum);
console.log("reduce():- ", sum);

//reduceRight(accumulator,current value,index,arr)

var arr=[21,2,1,4];  
var calc=arr.reduceRight(function(x,y){  
return (x+y);  
});   
console.log("reduceRight() : -",calc);

//some()

var phones = ["Realme","Redmi","Nokia","Samsung","iphone"];
var res_phones = phones.some(function(e,index){
  return (e=="iphone");
});
console.log("some():-  ",res_phones);








