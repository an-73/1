const objectA = {
    a: 20,
    b: true,
};
const copyOfA = objectA;
console.log(objectA.a, objectA.b);
console.log(copyOfA.a, copyOfA.b);
objectA.a = -5;
objectA.b = false;
console.log(copyOfA.a, copyOfA.b);
