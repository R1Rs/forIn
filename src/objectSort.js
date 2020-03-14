export default objectSort;

const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40}

function objectSort (obj, arrObj) {
  let arrayInput = [];    // для сортировки переданных в функцию значений
  let arrayOutSide = [];  // для хранения невошедших в аргумент значений

  for (let key in obj) {
    if (arrObj.includes(key)) {
      arrayInput.push({key, value: obj[key]}); //если ключ объекта есть в массиве, то добавляем в один массив
    }  else {
      arrayOutSide.push({key, value: obj[key]}); // если нет в массиве - то в другой
    }
  }

  arrayOutSide.sort((a, b) => (a.key > b.key) ? 1 : -1); // сортируем невошедшие значения объекта

  return [ ...arrayInput, ...arrayOutSide ];
}

objectSort(obj, ["name", "level", "health"]);




