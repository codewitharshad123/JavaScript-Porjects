const APIURL="https://api.github.com/users/"
const getUser=async(username)=>{
const response=await fetch(APIURL+username)
const data=await response.json()
console.log(data)
}

getUser("taylorotwell")