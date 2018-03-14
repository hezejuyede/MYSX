import axios from 'axios'

export function addCart(index, img, title, price, id) {

  if (sessionStorage.getItem("userInfo") == null) {
    let utils = {
      setParam: function (name, value) {
        localStorage.setItem(name, value)
      },
      getParam: function (name) {
        return localStorage.getItem(name)
      }
    };
    let product = {
      img: img,
      title: title,
      price: price,
      id: id,
      num: 1,
      index: index
    };
    let ShoppingCart = localStorage.getItem("ShoppingCart");
    if (ShoppingCart == null || ShoppingCart == "") {

      let jsonstr = {
        "productlist": [{
          "img": product.img,
          "title": product.title,
          "num": product.num,
          "id": product.id,
          "price": product.price,
          "index": index
        }],
        "totalNumber": product.num,
        "totalAmount": (product.price * product.num)
      };

      utils.setParam("ShoppingCart", "'" + JSON.stringify(jsonstr));
    }
    else {
      let jsonstr = JSON.parse(ShoppingCart.substr(1, ShoppingCart.length));
      let productlist = jsonstr.productlist;
      let result = false;
      for (let i in productlist) {
        if (productlist[i].id == product.id) {
          productlist[i].num = parseInt(productlist[i].num) + parseInt(product.num);
          result = true;
        }
      }
      if (!result) {

        productlist.push({
          "img": product.img,
          "title": product.title,
          "num": product.num,
          "id": product.id,
          "price": product.price,
          "index": index
        });
      }
      jsonstr.totalNumber = parseInt(jsonstr.totalNumber) + parseInt(product.num);
      jsonstr.totalAmount = parseFloat(jsonstr.totalAmount) + (parseInt(product.num) * parseFloat(product.price));
      utils.setParam("ShoppingCart", "'" + JSON.stringify(jsonstr));
    }
  }
  //如果登录，则保存到数据库里
  else {
    let utils = {
      setParam: function (name, value) {
        localStorage.setItem(name, value)
      },
      getParam: function (name) {
        return localStorage.getItem(name)
      }
    };
    let product = {
      img: img,
      title: title,
      price: price,
      id: id,
      num: 1,
      index: index
    };
    let ShoppingCart = localStorage.getItem("ShoppingCart");
    if (ShoppingCart == null || ShoppingCart == "") {

      let jsonstr = {
        "productlist": [{
          "img": product.img,
          "title": product.title,
          "num": product.num,
          "id": product.id,
          "price": product.price,
          "index": index
        }],
        "totalNumber": product.num,
        "totalAmount": (product.price * product.num)
      };

      utils.setParam("ShoppingCart", "'" + JSON.stringify(jsonstr));
    }
    else {
      let jsonstr = JSON.parse(ShoppingCart.substr(1, ShoppingCart.length));
      let productlist = jsonstr.productlist;
      let result = false;
      for (let i in productlist) {
        if (productlist[i].id == product.id) {
          productlist[i].num = parseInt(productlist[i].num) + parseInt(product.num);
          result = true;
        }
      }
      if (!result) {

        productlist.push({
          "img": product.img,
          "title": product.title,
          "num": product.num,
          "id": product.id,
          "price": product.price,
          "index": index
        });
      }
      jsonstr.totalNumber = parseInt(jsonstr.totalNumber) + parseInt(product.num);
      jsonstr.totalAmount = parseFloat(jsonstr.totalAmount) + (parseInt(product.num) * parseFloat(product.price));
      utils.setParam("ShoppingCart", "'" + JSON.stringify(jsonstr));
    }
    let shoppingCart = utils.getParam("ShoppingCart");
    shoppingCart=JSON.parse(shoppingCart.substr(1, shoppingCart.length));
    axios.post("/api/MobileUserAddProduct", {
      shoppingCart: shoppingCart
    })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })

  }


}


export function getUserShoppingCart() {
  let shoppingCart = localStorage.getItem("ShoppingCart");
  shoppingCart = JSON.parse(shoppingCart.substr(1, shoppingCart.length));
  axios.post("/api/MobileUserAddProduct", {
    shoppingCart: shoppingCart
  })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    });
}


