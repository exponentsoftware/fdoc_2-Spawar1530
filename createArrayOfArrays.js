function createArrayOfArrays(arr){
   var newArr = arr.reduce((rows, key, index) => (index % 1 == 0 ? rows.push([key]) 
  : rows[rows.length-1].push(key)) && rows, []);

  var res;
  var total;

 newArr.map((country, index) => {
      country.map((thisCountry, index) => {
           res = thisCountry.substring(0, 3);
           total = String(thisCountry).length;
           country.push(res);
           country.push(total);
      })
  })

  return newArr;
}
const countries = [
    'ALBANIA',
    'BOLIVIA',
    'CANADA',
    'DENMARK',
    'ETHIOPIA',
    'FINLAND',
    'GERMANY',
    'HUNGARY',
    'IRELAND',
    'JAPAN',
    'KENYA'
  ]

console.log(createArrayOfArrays(countries));