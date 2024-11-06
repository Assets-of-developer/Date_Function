let startDate = '2024-11-01 18:30:00' // UTC
let endDate = '2024-11-01 19:30:00' // UTC

let timeStampResult = new Date(endDate).getTime() - new Date(startDate).getTime()

let diffMins = Math.floor(timeStampResult/(1000*60))
let diffHours = Math.floor(timeStampResult/(1000*60*60))
let diffDays = Math.floor(timeStampResult/(1000*60*60*24))
let diffMonths =  Math.floor(timeStampResult/(1000*60*60*24*30))
let diffYears = Math.floor(timeStampResult/(1000*60*60*24*30*12))

console.log(diffHours,"diffHours")  //O.P => 1
console.log(diffMins,"diffMins") // O.P => 60 
console.log(diffDays,"diffDays")      //O.P => 0 
console.log(diffMonths,"diffMonths") // O.P => 0
console.log(diffYears,"diffYears")   // O.P => 0 


