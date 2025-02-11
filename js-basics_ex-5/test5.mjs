import { DataParser3 } from "./dataParser5.mjs";
 
let data = [
  ["Product", "Category", "Date", "Sales", "Quantity", "Discount"],
  ["Milkybar", "Chocolate", "2023-01-01", "300", "50", "10%"],
  ["Laptop", "Technology", "2023-01-02", null, "40", "15%"],
  ["Skirt", "Clothing", "2023-01-15", "450", "80", "17%"],
  ["Necklace", "Accessories", "2023-01-13", "150", null, "9%"],
  ["Earrings", "Accessories", "2023-01-14", "300", "75", "11%"],
  ["Dairy Milk", "Chocolate", "2023-01-03", "400", "30", "20%"],
  ["Pant", "Clothing", "2023-01-20", "600", null, "15%"],
  ["Speaker", "Technology", "2023-01-04", "450", "25", "5%"],
  ["Kurta", "Clothing", "2023-01-15", "450", "80", "17%"],
  ["Cadbury", "Chocolate", "2023-01-20", null, "40", "10%"],
  ["Bangles", "Accessories", "2023-01-12", "100", "10", "22%"],
  ["Computer", "Technology", "2023-01-05", "500", "20", "12%"],
  ["Kitkat", "Chocolate", "2023-01-06", "200", "60", "8%"],
  ["Hair clip", "Accessories", "2023-01-11", "250", "15", "3%"],
  ["Tab", "Technology", "2023-01-07", "550", "35", "18%"],
  ["Shirt", "Clothing", "2023-01-20", "600", "60", null],
  ["Snikkers", "Chocolate", "2023-01-08", "600", "45", "7%"],
  ["Dupatta", "Clothing", "2023-01-15", "450", "80", "17%"],
  ["Tripod", "Technology", "2023-01-09", "700", "55", "14%"],
  ["Watch", "Accessories", "2023-01-10", "800", "70", null],
];

 
let columnArray3 = [];
const dataParser = new DataParser3(data);
const result3 =  dataParser.callForAggregateFn(columnArray3);
console.log(result3);
 