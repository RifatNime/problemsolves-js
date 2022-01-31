
/////////////////////////////////number Showcase 1////////////////////////////////////var num = [2, 5, 3, 4, 6, 7,8]
var showElement = '';
for(var i = 0; i < num.length; i++)
{
showElement = showElement + num[i] +' ';
}
console.log(showElement);
/////////////////////////////////number Showcase 2////////////////////////////////////
var num = [2, 5, 3, 4, 6, 7,8]
var showElement;
for(var i = 0; i < num.length; i++)
{
showElement = showElement + num[i] +'\n';
}
console.log(showElement);
/////////////////////////////////number Showcase 3////////////////////////////////////
let items = "1,2,3";
items = items.split(",");

console.log(items); // ["1", "2", "3"]

for (let i = 0; i < items.length; i++) {
  items[i] = "- " + items[i] + "\n";
}

console.log(items); // ["- 1\n", "- 2\n", "- 3\n"]

items = items.join("");

console.log(items); // "- 1\n- 2\n- 3\n"
