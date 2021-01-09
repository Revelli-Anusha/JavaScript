// Strings 
console.log("---------------Strings---------------");

var s = "Anusha is a good girl";
// String length()
var len = s.length;
console.log('string length is',len);
// lastIndexOf()
var last_Index_Of = s.lastIndexOf('l');
console.log('LastIndexOf() of a char',last_Index_Of)
console.log('LastIndexOf() of a substring',s.lastIndexOf('Good'))
// indexOf()
var index_of = s.indexOf('i');
console.log('indexOf() of i:',index_of)
console.log('indexOf() of Anu:',s.indexOf('anu'))
// search()
var Search = s.search('a');
console.log('searching a char "a" in string',Search);
console.log('searching a substring in str',s.search('god')); 
 

// slice()
var Slice= s.slice(2,6);
console.log('Slicing ',Slice);

console.log('slicing',s.slice(8,11,1));
  
// substring(start,end) 
var Sub_String = s.substring(0,7);
console.log('substring',Sub_String);
console.log('another substring',s.substring(8,-1));
 

// substr(start,length)
var sub_str = s.substr(0,9);
console.log('substr',sub_str);

console.log('substr :'+s.substr(7,3)); 

// replace()
var Replace = s.replace('is a','- not always');
console.log('replace',Replace);

// toUpper()
var upper = s.toUpperCase();
console.log('converting string to upper case:- '+upper);

// toLower()
var lower = s.toLowerCase();
console.log('converting string to lower case elements:- '+ lower );

//concat()
var s1 = "sai";
var s2 = "Aditya" ;
var str_concat = s1.concat(" ",s2);
console.log('string concantate ',str_concat);

// trim() - removes spaces
var na = "        Doll    " ;
var Trim = na.trim();
console.log('Trim :- ' + Trim);

// split()
var c = 'Hello';
var d= c.split("");
console.log("split:- " + d);


//charAt()
var str = "JavaScript";
var char_At = str.charAt(4);
console.log('CharAt:- ' + char_At);

// padstart(no of items to be included-1, value)
var abc = '5';
var Pad_Start = abc.padStart(5,0);
console.log('padStart:-  '+ Pad_Start);

// padEnd()
var abc = '5';
var Pad_End = abc.padEnd(5,0);
console.log('padStart:-  '+ Pad_End);

console.log("-------------------------------------------");


// -----------------------------------------------------------------------------
// Assignment operator 
var  r = '5';
var res = 5;
if(r==res){
    console.log("'==' operator:- " + "True")
}
if(r===res){
    console.log("'===' operator:- " + "True")
}else{
    console.log("'===' operator:- " + "False")
}

//---------------------------------------------------------------------------------
// forEach()
var arr = [1,5,6,8,9,10,12];
var sum = 0;
arr.forEach(function Function(ele){
    sum = sum + ele;
    console.log("forEach:- " + sum);
});














