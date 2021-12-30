localStorage.setItem('name', '{1,2,3,4}')/*use JSON.stringify() to store an object in string form*/
console.log(localStorage.getItem('name'))/*use JSON.parsa() to use string as an object*/
// localStorage.removeItem('name')

sessionStorage.setItem('name', 'prasad')
console.log(sessionStorage.getItem('name'))
// sessionStorage.removeItem('name')

document.cookie = "username=John Doe"/*I don't know*/