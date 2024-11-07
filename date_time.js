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

//how to add hours and minutes Ex:I will going to add 5 hours and 30 minutes

let addHours = new Date(startDate).getTime() + (1000*60*60*5)
let addMins = addHours + (1000*60*30)
let hoursAndMins = date_time_format(addMins) 
console.log(hoursAndMins,"hoursAndMins") // O.P => 2024-10-02 00:00:00

function date_time_format(formatDate){
    let date = new Date(formatDate).getFullYear() + '-' +  (0 + new Date(formatDate).getMonth().toString()).slice(-2) + '-' + (0 + new Date(formatDate).getDate().toString()).slice(-2)
    let time = (0 + new Date(formatDate).getHours().toString()).slice(-2) + ':' +  (0 + new Date(formatDate).getMinutes().toString()).slice(-2) + ':' + (0 + new Date(formatDate).getSeconds().toString()).slice(-2)
    return date + " " + time
}



