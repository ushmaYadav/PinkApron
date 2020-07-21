var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
 

}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].classList.add('abc');
    x[i].style.display = "none";  
   
  }
  x[slideIndex-1].classList.add('def');
  x[slideIndex-1].style.display = "block";  

}




function deepSort(key, order = 'asc'){
  return function innerSort(a, b){
      let x = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key];
      let y = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key];

      let comparison;

      if(x > y){
        comparison = 1;
      }
      else if(x < y){
        comparison = -1;
      }
      else{
        comparison = 0;
      }

      return (order === 'desc')? comparison * -1: comparison;
  }
}

const person = [
    { visitor: 'james' , age: 32, score: 100},
    { visitor: 'rose' , age: 29, score: 50},
    { visitor: 'john' , age: 34, score: 200}
]


person.sort(deepSort('age' , 'desc'));

person.sort(deepSort('visitor' , 'desc'));



let creditNumber = '1111 5672 7888 7883';

let arr = creditNumber.split('');


let outString = '';

for(let i = 0; i < arr.length; i++){

  if(i < 4 || i > (arr.length - 5) && arr[i] !=''){
    outString += arr[i];
  }

  else if(arr[i] == ''){
    outString += ' ';
  }

  else{
    outString += '*';
  }
}
















function deepSort(key, order = 'asc'){

  return function innerSort(a, b){

    for(let i = 0; i < key.length; i++){
      let x = a[key[i]];
      let y = b[key[i]];
      let comparison = 0;


      if(x > y){
        comparison = 1;
      }
      else if(x < y){
        comparison = -1;
      }
      else{
        comparison = 0;
      }
      return (order === 'desc')? comparison * -1: comparison;
      
    }
   
      
  }
}

let people = [
  {visitor: 'john' , age: 24, score: 500},
  {visitor: 'james' , age: 32, score: 100},
  {visitor: 'rose' , age: 40, score: 200},
]

console.log(people.sort(deepSort(['score' , 'age'], 'asc')));

const deepSort = (items, keys, order) => {

  let sortedKeys = [];
  for(let i =0; i< keys.length; i++){
    let key = keys[i];
    items = items.sort((a, b) => {

      if(checkCompare(a, b, sortedKeys)){
        let x = (typeof a[key] === 'string') ? a[key].toUpperCase(): a[key];
        let y = (typeof b[key] === 'string') ? b[key].toUpperCase(): b[key];
  
        if(x > y){
          comparison = 1;
        }
        else if(x < y){
          comparison = -1;
        }
        else{
          comparison = 0;
        }
  
        return (order === 'desc')? comparison * -1: comparison;
      }
      
    })
    sortedKeys.push(key);
  }
  return items;
}

function checkCompare(a, b, sortedKeys){
  let result = true;
  for(let i =0; i< sortedKeys.length; i++){
    if(a[sortedKeys[i]] !== b[sortedKeys[i]]){
      return false;
    }
  }
  return result;
}

deepSort([
  {visitor: 'john' , age: 24, score: 500},
  {visitor: 'james' , age: 32, score: 100},
  {visitor: 'rose' , age: 40, score: 200},
], ['visitor', 'age']);

deepSort[0].forEach(element => {
  console.log(element.age);
});

let people = [
  {visitor: 'john' , age: 24, score: 500},
  {visitor: 'james' , age: 32, score: 100},
  {visitor: 'rose' , age: 40, score: 200},
]