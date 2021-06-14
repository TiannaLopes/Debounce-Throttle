const throttle = (fn, delay) => {
    return (...args) => {
      let last = 0;
      const now = new Date().getTime();
      if(now-last < delay){
        return;
      }
      last = now;
      return fn(...args);
    }
  }
  
  document.getElementById('myid').addEventListener('click', throttle((e) => {
    console.log('clicked');
  }, 5000));
  