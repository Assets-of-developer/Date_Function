# Date_Function

//calculate different date between two dates 

let startDate = '2024-11-01 18:30:00' // UTC

let endDate = '2024-11-03 18:30:00' // UTC

let differDates = new Date(endDate).getTime() - new Date(startDate).getTime()

let differentDatesCalc = differDates/(1000*60*60*24)  // O.P => 2

