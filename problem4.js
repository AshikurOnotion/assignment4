  

   function findAddress(obj) {

    if (typeof obj !== 'object') {
        return "please provide me a valid address"

} else {
    const street = obj.street || "__"
    const house = obj.house || "__"
    const society = obj.society || "__"

    return street + "," + house + "," + society
 
 } 


   }

   const obj = {
    street : 10,
    house : "15A", 
    society : "Earth Perfect"
   }
   