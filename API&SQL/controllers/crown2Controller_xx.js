const Clothing = require('../models/clothingModel_xx');

exports.getHomepage = async (req, res) => {
  let data = {};
  try {
    await Clothing.fetchHomepage().then(([rows]) => {
      // console.log('getDashboard', JSON.stringify(rows));
      data.clothing = rows;
      // res.json(rows);
    });

    res.render('crown2_xx', { title: 'Homepage', data: data.clothing });
  } catch (err) {
    console.log(err);
  }
};

exports.getProductsByCategory = async (req, res) => {
  let data = {};
  data.cid = 0;
  console.log('req.params.product', req.params.product);
  try {
    if (req.params.product === 'hats') data.cid = 1;
    else if (req.params.product === 'jackets') data.cid = 2;
    else if (req.params.product === 'sneakers') data.cid = 3;
    else if (req.params.product === 'womens') data.cid = 4;
    else if (req.params.product === 'mens') data.cid = 5;
    await Clothing.fetchProductsByCategory(data.cid).then(([rows]) => {
      data.products = rows;
      // res.json(data);
    });

    res.render('products2_xx', {
      title: req.params.product,
      data: data.products,
    });
  } catch (err) {
    console.log(err);
  }
};
