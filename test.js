import moment from 'moment'
const start = moment().startOf('day')

const times = 24 * 4 // 24 hours * 15 mins in an hour

for (let i = 0; i < times; i++) {
  const toPrint = moment(start)
    .add(15 * i, 'minutes')
    .format('hh:mm A')

  console.log(toPrint)
}
