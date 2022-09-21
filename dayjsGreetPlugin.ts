import dayjs from 'dayjs'

declare module 'dayjs' {
  interface Dayjs {
    greet(): string
  }
}

export default (option: any, dayjsClass: any, dayjsFactory: any) => {
  function getGreet(date: dayjs.Dayjs) {
    const hour = Number(date.format('H'))
    // const day = date.day()

    const splitAfternoon = 12 //24hr time to split the afternoon
    const splitEvening = 18 //24hr time to split the evening

    const isMorning = 5 <= hour && hour < splitAfternoon
    const isAfternoon = splitAfternoon <= hour && hour < splitEvening

    // const isFridayAfternoon = day === 5 && (isAfternoon || isEvening)
    // const isSaturdayMorning = day === 6 && isMorning

    // if (isFridayAfternoon || isSaturdayMorning) {
    //     return 'Have a good weekend';
    //   } else
    if (isMorning) {
      return 'Good morning'
    } else if (isAfternoon) {
      return 'Good afternoon'
    }

    return 'Good evening'
  }
  // extend dayjs()
  // e.g. add dayjs().isSameOrBefore()
  dayjsClass.prototype.greet = function () {
    return getGreet(this)
  }

  // extend dayjs
  // e.g. add dayjs.utc()
  dayjsFactory.greet = function() {
    return getGreet(dayjs.utc())
  }
}
