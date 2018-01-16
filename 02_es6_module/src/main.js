//默认导入
//import defaultObj from '.cal.js';
//console.log(defaultObj);

// 声明式导入（按需加载）
/*import {obj1, obj2, obj4} from './cal.js';
console.log(obj1, obj2, obj4);*/

// import和export必须在顶层作用域
/*
function test() {
    import {obj1, obj2, obj4} from './cal.js';
    console.log(obj1, obj2, obj4);
}

test();*/

import * as obj from './cal.js';
console.log(obj)
