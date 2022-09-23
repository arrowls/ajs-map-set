export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(member) {
    if (this.members.has(member)) {
      throw new Error('member already exists!');
    }
    this.members.add(member);
  }

  addAll(...args) {
    [...args].forEach((member) => {
      this.members.add(member);
    });
  }

  toArray() {
    return [...this.members];
  }
}
