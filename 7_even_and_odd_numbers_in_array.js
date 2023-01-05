let arr = [0, 2, 4, 1, 3, 5, null, null];
let even = 0;
let odd = 0;

for (let i = 0; i < arr.length; i++) {
  if (typeof(arr[i]) == 'number') {
    if (arr[i] % 2 == 0) {
      even++;
    } else if (arr[i] % 2 != 0){
      odd++;
    } 
  } else if (arr[i] == null) {
    console.log(arr[i]);
  }
}
console.log('Кол-во чётных чисел:' + even, 'Кол-во нечётных чисел:' + odd);
