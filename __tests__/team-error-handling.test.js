import Team from '../src/Team';

test('should throw an error if duplicate members were given', () => {
  const team = new Team();
  team.add('member1');
  expect(() => { team.add('member1'); }).toThrow('member already exists!');
});
