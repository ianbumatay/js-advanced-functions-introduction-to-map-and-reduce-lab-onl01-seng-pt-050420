// Your code here  

sourceArray = [1, 2, 3, -9]

function mapToNegativize(sourceArray){
  return sourceArray.map(x => x * -1)
} 

function mapToNoChange (dune) {
  return dune.map( x => x)
} 

function mapToDouble(sourceArray) {
    return sourceArray.map(x => x * 2)
}

function mapToSquare(sourceArray) {
    return sourceArray.map(x => x * x) //multiply it by itself
} 

//reduce method 

function reduceToTotal(sourceArray, startingPoint = 0){
    const reducer = function(accumulator, currentValue) {
        return accumulator + currentValue
    } 
    return sourceArray.reduce(reducer, startingPoint)
} 

function reduceToAllTrue(sourceArray){

    const reducer = function(accumulator, currentValue){  
        if(!!accumulator == true && !!currentValue == true){
            return true;
        } else {
            return false;
        }
    }
    return sourceArray.reduce(reducer, true)
}

   
function reduceToAnyTrue(sourceArray){
    const reducer = function(accumulator, currentValue){  
        if(accumulator == true){
            return true
        } else {
            return !!currentValue
        } 
    }
    return sourceArray.reduce(reducer, false) 
}