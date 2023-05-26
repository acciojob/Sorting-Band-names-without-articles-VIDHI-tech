let arr = ["Virupaksha Temple", "Victoria Memorial", "Tajmahal"];

let updatedList = arr.map((element) => {
  let words = element.split(" ");
  let updatedString = words.reduce((prev, current) => {
    if (current !== "The" && current !== "a" && current !== "an") {
      return prev + " " + current;
    }
    return prev;
  }, "");

  return updatedString.trim();
});

let mp = {};

updatedList.forEach((element, index) => {
  mp[element] = arr[index];
});

updatedList.sort();

let finalAns = updatedList.map((element) => {
  return mp[element];
});

console.log(finalAns);


