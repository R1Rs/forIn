export default findBy;

function findBy(key, value) {
  return person => person[key] === value;
}

let finder = findBy("name", "маг");

const results = [
  {
    name: "маг",
    type: "character",
    description: "Персонаж, обладающий магическими способностями"
  },
  {
    name: "заклинание",
    type: "attack",
    description: "Атака магическим заклинанием"
  },
  {
    name: "урон",
    type: "help",
    description: "Страница описания элемента интерфейса"
  }
].filter(finder);

console.log(results);
