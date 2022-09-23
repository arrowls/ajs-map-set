export default class ErrorRepository {
  constructor() {
    this.repository = new Map([
      [404, 'Not Found!'],
      [502, 'Bad Gateway!'],
      [2402, 'Huge Error!'],
      [1234, 'Some other error!'],
    ]);
  }

  translate(errorID) {
    if (this.repository.has(errorID)) {
      return this.repository.get(errorID);
    }
    return 'Unknown Error';
  }
}
