
//Factory function
function createCircle(radius) {
    return {
        radius,// variable, will set value outside function
            draw: function(){
                console.log('draw');
            }
    };
}

const circle = createCircle(1);
//console.log(circle);
//console.log('test');

//Constructor function
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}
const another = new Circle(1); //If i dont use "new" the variable becomes global = bad 
const hej = hej; 