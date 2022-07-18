   function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());

//ans:
// var counter = counter();
// alert(counter());
// alert(counter());
// alert(counter());
// alert(counter());
// output will be
// 1
// 2
// 3
// 4