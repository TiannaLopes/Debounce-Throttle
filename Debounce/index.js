const debounce = (fn, delay) => {

  let timeoutID;
  return function(...args){
    if(timeoutID){
      clearTimeout(timeoutID);
    }
   timeoutID = setTimeout(() => {
      fn(...args);
    },delay);
  }
}

document.getElementById('myid').addEventListener("click", debounce(e =>{
  console.log('clicked');
}, 2000))