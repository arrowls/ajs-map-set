import Team from '../src/Team';

test('should add members with no errors', () => {
  const team = new Team();
  team.add('member1');
  team.add('member2');
  team.add('member3');
  expect(team.toArray()).toEqual(['member1', 'member2', 'member3']);
});

test('should add all the members correctly', () => {
  const team = new Team();
  team.addAll('member1', 'member2', 'member3');
  expect(team.toArray()).toEqual(['member1', 'member2', 'member3']);
});
