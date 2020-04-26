/* конфигурация */
const carousel = document.querySelector('.carousel');
let width = 185; // ширина картинки
let count = 1; // видимое количество изображений

let list = carousel; 
let listElems = carousel.querySelectorAll('.product-img');
let position = 0; // положение ленты прокрутки

document.querySelector('.prev').onclick = function () {
  // сдвиг влево
  position += width * count;
  // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
  position = Math.min(position, 0)
  list.style.marginLeft = position + 'px';
};

document.querySelector('.next').onclick = function () {
  // сдвиг вправо
  position -= width * count;
  // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + 'px';
}

const products = [
  {
    price: 10,
    name: 'jam1',
    id: 1,
    amount: 0,
  },
  {
    price: 10,
    name: 'jam2',
    id: 2,
    amount: 0,

  },
  {
    price: 10,
    name: 'jam3',
    id: 3,
    amount: 0,

  },
  {
    price: 10,
    name: 'jam4',
    id: 4,
    amount: 0,

  },
];
let add1 = products.find(item =>item.id ==1)
let li1 = carousel.querySelector('.ones'); 
li1.onclick = function () { 
  console.log(products)
  products.add1.amount=5
  };

let quantity = document.querySelector('.add-button');
quantity.innerHTML = '0 Bottle' 

/*добавление в корзину*/
/*

  let li2 = carousel.querySelector('.twos')
li2.onclick = function () {
  cartArray2.push(li2.id)
  let sum2 = cartArray1.length + cartArray2.length + cartArray3.length + cartArray4.length;
  console.log(cartArray1.concat(cartArray2, cartArray3, cartArray4))
  console.log (sum2)
  let cb2 = carousel.querySelector('.two');
  cb2.style.display = 'inline-block';
  quantity.innerHTML = sum2 + ' Bottle';
};

let li3 = carousel.querySelector('.threes')
li3.onclick = function () {
  cartArray3.push(li3.id)
  let sum3 = cartArray1.length + cartArray2.length + cartArray3.length + cartArray4.length;
  console.log(cartArray1.concat(cartArray2, cartArray3, cartArray4))
  console.log (sum3)
  let cb3 = carousel.querySelector('.three');
  cb3.style.display = 'inline-block';
  quantity.innerHTML = sum3 + ' Bottle';
}
let li4 = carousel.querySelector('.fours')
li4.onclick = function () {
  cartArray4.push(li4.id)
  let sum4 = cartArray1.length + cartArray2.length + cartArray3.length + cartArray4.length;
  console.log(cartArray1.concat(cartArray2, cartArray3, cartArray4))
  console.log (sum4)
  let cb4 = carousel.querySelector('.four');
  cb4.style.display = 'inline-block';
  quantity.innerHTML = sum4 + ' Bottle';
};


let cartArray1 =[];
let cartArray2 =[];
let cartArray3 =[];
let cartArray4 =[];


/*удаление*/
/*let db1 = carousel.querySelector('.db1');
db1.onclick = function () {
  if (db1.style.display == 'inline-block') {
    db1.style.display = 'none';
    cartArray1 = [];
  };

};
let db2 = carousel.querySelector('.db2');
db2.onclick = function () {
  if (db2.style.display == 'inline-block') {
    db2.style.display = 'none';
    cartArray2 = [];
  };
};
let db3 = carousel.querySelector('.db3');
db3.onclick = function () {
  if (db3.style.display == 'inline-block') {
    db3.style.display = 'none';
    cartArray3 = [];
  };
};
let db4 = carousel.querySelector('.db4');
db4.onclick = function () {
  if (db4.style.display == 'inline-block') {
    db4.style.display = 'none';
    cartArray4 = [];
  };
};
*/








