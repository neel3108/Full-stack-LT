exports.multiplyTwoNumbers = function(x, y){
        if(!Number.isInteger(x) || !Number.isInteger(y)){
            return 'Not an Integer.';
        }
        else{
            return(x*y);
        }
}

exports.evenDoubler = function(x){
    if(Number.isInteger(x)){
        if(x%2 == 0){
            return (x*x);
        }
        else if(x%2 != 0){
            return 0;
        }
    }
    else{
        return 'Not an Integer.'; 
    }
}