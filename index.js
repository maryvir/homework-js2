// recursive sumFactorial

const recursiveSumFactorial = n => {
    if (n <= 0)
    return 0;
    return n + recursiveSumFactorial(n - 1);
};
console.log(recursiveSumFactorial(6));



// recursive fibonacci

const fib = n => 
{
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    const s = fib(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};
console.log(fib(12));



// square array
const array = [4, 5, 6];
const squareArray = array.map(element => element ** 2);
console.log(squareArray);


// prime numbers
const isPrime = n => {
    if(n === 2) return true;
    else if (n > 2){
        for(i = 2; i < n; i++){
            if(n % i !== 0) return true;
            else return false;
        }
    }
    else return false;
};
console.log(isPrime(23));


// index of substring in a string
function index(substring, string){
    const array = [];
    array.push(string.indexOf(substring));
    return array;
};
console.log(index('l', 'hello'));

