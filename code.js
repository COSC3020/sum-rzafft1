// simple change should fix this
// original code had 'var sum = a[0]'...
// this indicates that the variable sum wil be initialized to the value of the 
// ... first element in the array/list. This cant be right. 
// ... lets change the var sum to be initialized to 0. This should fix it

function sum(a) {
    var sum = 0;
    for(var i = 0; i < a.length; i++) {
        sum += a[i];
    }
    return sum;
}
