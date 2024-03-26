import 'reflect-metadata';
// import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

// import _ from 'lodash';
// declare var GLOBAL: string;
// console.log(_.shuffle([1, 2, 3])); //
// console.log(GLOBAL); // ต้องใช้ declare

import { Product } from './product.model';

// ถ้าในกรณีที่มีการดึงข้อมูลจาก server หรือ db มันอาจจะยุ่งยากที่ต้องมา instantiate แต่ละ object เช่น
// const products = [{ title: 'A Carpet', price: 29.99 }, { title: 'A Book', price: 19.99 }];

const newProd = new Product('', -5.99);
validate(newProd).then(errors => {
  if (errors.length > 0) {
    console.log('VALIDATION ERRORS!');
    console.log(errors);
  } else {

    console.log(newProd)
  }
});

// const loadedProducts = products.map(prod => {
//   return new Product(prod.title, prod.price);
// });

// การใช้ class-transformer
// const loadedProducts = plainToClass(Product, products);

// for (const prod of loadedProducts) {
//   console.log(prod.getInformation());
// }

// const p1 = new Product('A Book', 12.99);
// console.log(p1);