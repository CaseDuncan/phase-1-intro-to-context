// Your code here
const createEmployeeRecord = function(info){
    return {
        firstName: info[0],
        familyName: info[1],
        title: row[2],
        payPerHour: info[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

const createEmployeeRecords = function(employeeinfo) {
    return employeeinfo.map(function(info){
        return createEmployeeRecord(info)
    })
}

// const createTimeInEvent = function(employee, date){
//    const [date, hour] = date.split(' ')

//     employee.timeInEvents.push({
//         type: "TimeIn",
//         hour: parseInt(hour, 10),
//         date,
//     })

//     return employee
// }

const createTimeOutEvent = function(employee, date){
    let [date, hour] = date.split(' ')

    employee.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })

    return employee
}

const hoursWorkedOnDate = function(employee, date){
    let inEvent = employee.timeInEvents.find(function(e){
        return e.date === date
    })

    const outEvent = employee.timeOutEvents.find(function(e){
        return e.date === date
    })

    return (outEvent.hour - inEvent.hour) / 100
}

const wagesEarnedOnDate = function(employee, date){
    const wage = hoursWorkedOnDate(employee, date)
        * employee.amount_paid
    return parseFloat(wage.toString())
}