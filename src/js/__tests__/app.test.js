import {
  Character,
  Bowman,
  Swordsman,
  Magician,
  Daemon,
  Undead,
  Zombie
} from '../app';
test("Должен запрещать создание неправильного персонажа", () => {
  const expr = () => new Character("Yoda", "Ork");
  expect(expr).toThrow(Error);
});

test("Должен выбрасывать ошибку, если создан персонаж с неправильным именем", () => {
  const character = () => new Character("I", "Bowman");
  expect(character).toThrow(Error);
});
test("Проверка конструктора Character", () => {
  const character = new Character("name", "Swordsman");
  expect(character.name).toBe("name");
  expect(character.type).toBe("Swordsman");
  expect(character.level).toBe(1);
  expect(character.health).toBe(100);
});
test("Должен выбрасывать ошибку, если персонаж мёртв", () => {
  const character = new Bowman("Yoda");
  character.health = 0;
  const expr = () => character.levelUp();
  expect(expr).toThrow(Error);
});

test("Должен ранить Bowman", () => {
  const character = new Bowman("Yoda");
  character.damage(15);
  expect(character.health).toBe(88.75);
});

test("Не должен ранить Bowman, потому что он мёртв", () => {
  const character = new Bowman("Yoda");
  character.health = -1;
  character.damage(15);
  expect(character.health).toBe(-1);
});

test("Должен levelUp Bowman", () => {
  const character = new Bowman("Yoda");
  const newAttack = character.attack + character.attack * 0.2;
  const newDefence = character.defence + character.defence * 0.2;
  character.levelUp();
  expect(character.level).toBe(2);
  expect(character.attack).toBe(newAttack);
  expect(character.defence).toBe(newDefence);
});

test("Должен создать Bowman", () => {
  const character = new Bowman("Yoda");
  expect(character.level).toBe(1);
  expect(character.health).toBe(100);
  expect(character.name).toBe("Yoda");
  expect(character.type).toBe("Bowman");
  expect(character.attack).toBe(25);
  expect(character.defence).toBe(25);
});

test("Должен создать Swordsman", () => {
  const character = new Swordsman("Yoda");
  expect(character.level).toBe(1);
  expect(character.health).toBe(100);
  expect(character.name).toBe("Yoda");
  expect(character.type).toBe("Swordsman");
  expect(character.attack).toBe(40);
  expect(character.defence).toBe(10);
});

test("Должен создать Magician", () => {
  const character = new Magician("Yoda");
  expect(character.level).toBe(1);
  expect(character.health).toBe(100);
  expect(character.name).toBe("Yoda");
  expect(character.type).toBe("Magician");
  expect(character.attack).toBe(10);
  expect(character.defence).toBe(40);
});

test("Должен создать Daemon", () => {
  const character = new Daemon("Yoda");
  expect(character.level).toBe(1);
  expect(character.health).toBe(100);
  expect(character.name).toBe("Yoda");
  expect(character.type).toBe("Daemon");
  expect(character.attack).toBe(10);
  expect(character.defence).toBe(40);
});

test("Должен создать Undead", () => {
  const character = new Undead("Yoda");
  expect(character.level).toBe(1);
  expect(character.health).toBe(100);
  expect(character.name).toBe("Yoda");
  expect(character.type).toBe("Undead");
  expect(character.attack).toBe(25);
  expect(character.defence).toBe(25);
});

test("Должен создать Zombie", () => {
  const character = new Zombie("Yoda");
  expect(character.level).toBe(1);
  expect(character.health).toBe(100);
  expect(character.name).toBe("Yoda");
  expect(character.type).toBe("Zombie");
  expect(character.attack).toBe(40);
  expect(character.defence).toBe(10);
});
