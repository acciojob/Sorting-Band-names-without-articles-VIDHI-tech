//your code here
let arr = ["Virupaksha Temple" , "Victoria Memorial" , "Tajmahal"]
let updatedList = arr.map((element) => {
	// ["The" , "Virupaksha" , "Temple"]
	let words = element.split(" ");
    let updatedString words.reduce((prev, current, index) =>{
		if(current != "The" && current != "a" && current != "an"){
			return prev + " " + current;
		}
	    return prev;
	}, "")
		
	return updatedString;
}) ;

let mp = {} ; //{"Virupaksha Temple" : "The Virupaksha Temple"}
updatedList.forEach( (element, index) => {
	mp[element] = arr[i] ;
});
//["Virupaksha Temple" , "Victoria Memorial" , "Tajmahal"]

updatedList.sort();

let finalAns = updatedList.map((element) => {
	return mp[element];
})

console.log(finalAns);
