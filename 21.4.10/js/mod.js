// console.log(`1被导入成功`);
// export const a = 1;
// export const b = 1;
// export const c = 1;

// const a = 1;
// const b = 1;
// const c = 1;
// export {
//     a as aaa,
//     b as bb,
//     c
// }
// export default 12;

// const a = 12;
// const b = 5;
// const sum = () => {
//     console.log("sum");
//     return a + b;
// }
// const show = () => {
//     console.log('show');
//     return 1;
// }

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     showName() {
//         return `我的名字是${this.name}`;
//     }
// }
// export {
//     a,
//     b,
//     sum,
//     show
// }
// export default {
//     Person
// }
console.log("mod1被执行");
let a = 1;
let b = 2;

setTimeout(() => {
    a = 12;
}, 2000)

export { a, b };