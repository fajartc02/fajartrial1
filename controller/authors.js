const ModelAuthor = require('../models')


class Author {
  static authorAdd(first_name, last_name, religion, gender, age) {
    ModelAuthor.Author.create(
      {
        first_name: first_name,
        last_name: last_name,
        religion: religion,
        gender: gender,
        age: age
      })
      .then((data) => {
        let result = data.get()
        console.log(`data
          ${result}
          berhasil di tambahkan`);
      })
      .catch((err) => {
        console.log(err)
      })
  }

  static authorReadOne() {
    console.log();
  }

  static authorReadAll() {
    // ModelAuthor
  }

  static authorUpdate() {

  }

  static authorDelete() {

  }
}

module.exports = Author
