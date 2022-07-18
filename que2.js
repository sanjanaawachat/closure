//que2

let count = 0;
(function immediate() {
    if (count === 0) {
      let count = 1;
      console.log(count); // What is logged?//1
    }
    console.log(count); // What is logged?//0
  })();


  //ans:

 // 1
  //0