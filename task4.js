let i = 0;
const intervalId = setInterval(function (one, two) {
    if (one + i > two) {
        i = 0;
        clearInterval(intervalId);
    } else {
      console.log(one + i);
      i++;
    }
    
 
 }, 1000, 5,  15);
 
 