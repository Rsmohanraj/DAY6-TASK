/*
I did a function within function. I know it’s not efficient, but was playing around.  The function of uberRate(customerCity, index), I'm gaining access to uberRate's array index by passing in the same index as customerCity.  It works until one day someone adds more cities and/or more rates, or some cities share same rate.
*/
 
let baseFee = 8
let cities = ["gendi", "thabaram", "paris", ]
let uberRates = [5, 10, 15]

let customerName = "mohan" 
let customerCity = "gendi" 
console.log("Hello", customerName+ ", welcome to the Uber Rate Program")
function getRate(customerCity) {
  function uberRate(customerCity, index) {
    let finalRate = (uberRates[index]) * baseFee
    return finalRate
  }

  console.log(customerCity, "rate is:", uberRate(customerCity, cities.indexOf(customerCity)))
}

getRate(customerCity)
