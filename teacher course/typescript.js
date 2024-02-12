var a = 10;
var b = "Hello";
var c = true;
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));
var p = { id: 1, name: "John" };
console.log(p);
var y;
y = 10;
console.log(y);
var z;
z = "Red";
console.log(z);
var data;
data = 'something';
console.log(data);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var color = Color.Red;
console.log(color);
