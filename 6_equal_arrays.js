const arr = ['cat', 'cat', 'cat'];
let newArr = [];
let res;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === arr[0]) {
    newArr.push(arr[i]);
    if (newArr.length == arr.length) {
      res = true;
    } else {
      res = false;
    }
  }
}
console.log(res);
