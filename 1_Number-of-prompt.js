let input = parseFloat(prompt('Ввод данных'));

if (typeof input == 'number') {
  if (isNaN(input)) {
    console.log('Упс, вы ошиблись(');
  } else {
    if (input % 2 == 0) {
      console.log('Вы ввели чётное число')
    } else {
      console.log('Вы ввели нечётное число')
    }
  }
}
