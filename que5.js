//que5

//Take a variable in outer function and create an inner function to increase 
//the counter every time it is called

function counter(){
    var counter = 0;
  
    function IncreaseCounter() {
        return counter += 1;
    };
  
    return IncreaseCounter;
  }
  
  var counter = counter();
  console.log(counter());
  console.log(counter());
  console.log(counter());
  console.log(counter());
  // output will be
  // 1
  // 2
  // 3
  // 4