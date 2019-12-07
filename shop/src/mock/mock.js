import Mock from 'mockjs'

let Random =Mock.Random;
let productData1 = () => {
    let productList = []; // 存放农机信息的数组
    for(let i=0; i<20; i++){
        let product = {
            name: Random.ctitle(5, 20),
            img: Random.dataImage('125x125', 'shop' + Random.integer(1, 100)),
            price: Random.integer(1000, 10000),
            company:Random.cname(),
            city:Random.province()
        };
        productList.push(product);
    }
    return productList;
};
let productData2 = () => {
    let productList = []; // 存放农机信息的数组
    for(let i=0; i<15; i++){
        let product = {
            name: Random.ctitle(5, 20),
            img: Random.dataImage('125x125', 'shop' + Random.integer(1, 100)),
            price: Random.integer(1000, 10000),
            company:Random.cname(),
            city:Random.province()
            //owner: Random.cname()
        };
        productList.push(product);
    }
    return productList;
};
let productData3 = () => {
    let productList = []; // 存放农机信息的数组
    for(let i=0; i<5; i++){
        let product = {
            name: Random.ctitle(5, 20),
            imgSrc: Random.dataImage('125x125', 'shop' + Random.integer(1, 100)),
            //price: Random.integer(1000, 10000),
            //owner: Random.cname()
        };
        productList.push(product);
    }
    return productList;
};
Mock.mock('http://www.zypeng.com/getVarietyItem', productData1);
Mock.mock('http://www.zypeng.com/getHotProducts', productData2);
Mock.mock('http://www.zypeng.com/getCarouseItem', productData3);


