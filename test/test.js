import findBy from "../src/add";

test ("test person", () => {
    let finder = findBy("name", "маг");

    const received = [
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

    const expected = [
      {
        name: "маг",
        type: "character",
        description: "Персонаж, обладающий магическими способностями"
      }
    ];

    expect(received).toEqual(expected);
})



