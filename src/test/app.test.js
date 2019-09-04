import findBy from '../js/app';

test('for correct should return itself', () => {
  
  const finder = findBy('name', 'урон');
  const results = [
    {name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями'},
    {name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием'},
    {name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса'},
  ].filter(finder);

  const expected = [
    {name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса'}
  ];

  expect(results).toEqual(expected);
});

test('should return none if no such property', () => {
  
  const finder = findBy('nameSS', 'урон');
  const results = [
    {name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями'},
    {name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием'},
    {name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса'},
  ].filter(finder);

  const expected = [];

  expect(results).toEqual(expected);
});

test('should return none if no such value', () => {
  
  const finder = findBy('name', 'урон111');
  const results = [
    {name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями'},
    {name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием'},
    {name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса'},
  ].filter(finder);

  const expected = [];

  expect(results).toEqual(expected);
});
