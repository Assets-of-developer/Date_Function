//calculate different date between two dates 

let startDate = '2024-11-01 18:30:00' // UTC

let endDate = '2024-11-01 19:30:00' // UTC

let timeStampResult = new Date(endDate).getTime() - new Date(startDate).getTime()


let diffMins = Math.floor(timeStampResult/(1000*60))
let diffHours = Math.floor(timeStampResult/(1000*60*60))
let diffDays = Math.floor(timeStampResult/(1000*60*60*24))
let diffMonths =  Math.floor(timeStampResult/(1000*60*60*24*30))
let diffYears = Math.floor(timeStampResult/(1000*60*60*24*30*12))

let data = 2
let oneDayMs = 1000*60*60*24  
let addDate = new Date(startDate).getTime() + (oneDayMs * data)
let oneMinuteMs = 1000*60
let addMins = new Date(startDate).getTime() + (oneMinuteMs * data)



console.log(new Date(addDate),"addDate")
console.log(new Date(addMins),"addMins")


console.log(diffDays,"diffDays")
console.log(diffMonths,"diffMonths")
console.log(diffYears,"diffYears")
console.log(diffHours,"diffHours")
console.log(diffMins,"diffMins  ")


