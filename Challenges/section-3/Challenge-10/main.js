const timeTracker = function (times) {
  if (times.length === 7) {
    let totalHoures = 0
    let maxDayWorkHour = times[0]
    let maxDayWorkHourIndex = 0
    let workDays = 0
    let isFullTimeWeek = false

    for (let i = 0; i < times.length; i++) {
      totalHoures += times[i]
      if (times[i] > maxDayWorkHour) {
        maxDayWorkHour = times[i]
        maxDayWorkHourIndex = i
      }
      if (times[i] !== 0) workDays++
      if (totalHoures >= 35) isFullTimeWeek = true
    }

    switch (maxDayWorkHourIndex) {
      case 0:
        maxDayWorkHour = 'Mon'
        break
      case 1:
        maxDayWorkHour = 'Tue'
        break
      case 2:
        maxDayWorkHour = 'Wed'
        break
      case 3:
        maxDayWorkHour = 'Thu'
        break
      case 4:
        maxDayWorkHour = 'Fri'
        break
      case 5:
        maxDayWorkHour = 'Sat'
        break
      case 6:
        maxDayWorkHour = 'Sun'
        break
    }

    const avgHours = totalHoures / times.length

    return {
      totalHoures: totalHoures,
      avgHours: Math.round(avgHours),
      // avgHours: avgHours,
      maxDayWorkHour: maxDayWorkHour,
      workDays: workDays,
      isFullTimeWeek: isFullTimeWeek,
    }
  } else
    return `Please Provide All Datas of week days, currently you're ${7 - times.length} ${
      7 - times.length !== 1 ? 'days' : 'day'
    } short !`
}

const data1 = [7.5, 8, 6.5, 0, 8.5, 4, 0]
const data2 = [7.5, 6.5, 0, 8.5, 4, 0]
const data3 = [7.5, 6.5, 4, 0]
console.log(timeTracker(data2))
