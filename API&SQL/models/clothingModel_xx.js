const db = require('../utils/database');

const Clothing = class Clothing {
  constructor(id, name, cat_id, price, remote_url, local_url) {
    this.id = id;
    this.name = title;
    this.cat_id = cat_id;
    this.price = date;
    this.remote_url = article;
    this.local_url = article;
  }

  static fetchHomepage() {
    return db.execute('select * from clothing where cat_id = 0');
  }

  static fetchProductsByCategory(cid) {
    return db.execute('select * from clothing where cat_id = ?', [cid]);
  }
};

// test
const testFetchHomepage = async (req, res) => {
  try {
    await Clothing.fetchHomepage().then(([rows]) => {
      console.log('testFetchAll', JSON.stringify(rows));
    });
  } catch (err) {
    console.log(err);
  }
};

const testFetchProductsByCategory = async (req, res) => {
  try {
    await Clothing.fetchProductsByCategory(5).then(([rows]) => {
      console.log('testFetchProductsByCategory', JSON.stringify(rows));
    });
  } catch (err) {
    console.log(err);
  }
};

// testFetchHomepage();

// testFetchProductsByCategory();

module.exports = Clothing;
