//Write a code to calculate area of a rectangle using inner function.
// In this case outer function should accept parameter length and inner function 
//should accept parameter breadth.


function area_rectangle(){
    
       let l=10;
            function innerFunc(){
                 let b=20;
                let area=l * b;
                console.log(area);
         }
             innerFunc()
         }
         area_rectangle();