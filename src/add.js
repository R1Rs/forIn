export default objectSort;

const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40}

function objectSort (obj, arrObj) {
  let arrayInput = [];    // для сортировки переданных в функцию значений
  let arrayOutSide = [];  // для хранения невошедших в аргумент значений
  for (let key in obj) {
    if (key === arrObj[0]) {
      arrayInput.push({key: key, value: obj[key]});
    } else if (key === arrObj[1]) {
      arrayInput.push({key: key, value: obj[key]});  
    } else {
      arrayOutSide.push({key: key, value: obj[key]});
    }
  }

  arrayOutSide.sort((a, b) => (a.key > b.key) ? 1 : -1); // сортируем невошедшие значения объекта

  let arrayTotal = arrayInput.concat(arrayOutSide); // складываем два отсортированных массива для получения итогового

  return arrayTotal;
}

objectSort(obj, ["name", "level"]);




