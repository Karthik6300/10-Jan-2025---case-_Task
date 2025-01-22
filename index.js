// ip=["html","css","JAVASCRIPT","react","ANGULAR"];

// op=["HTML","CSS","javascript","REACT","angular"];
/////////////////////////////////////////////////////////////////////////////////

let arr4 = ["html", "css", "JAVASCRIPT", "react", "ANGULAR"];
let op = arr4.map((item) => {
  if (item == item.toUpperCase()) {
    return item.toLowerCase();
  } else {
    return item.toUpperCase();
  }
});
console.log(op);
