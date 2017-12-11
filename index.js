'use strict';

const moment = require('moment');

module.exports = (options, callback) => {
  const { d, p } = options;
  const dateFormat = 'MMMM D, YYYY';
  const lastSunday = getLastSunday(d, dateFormat);
  const planWithDates = createPlan(lastSunday, p, dateFormat);
  callback(null, formatPlan(planWithDates));
}

const getLastSunday = (date, dateFormat) => {
  const dayOfWeek = moment(date, 'YYYY-MM-DD').weekday();
  const offset = dayOfWeek === 0 ? 7 : dayOfWeek;
  const result = moment(date).subtract(offset, 'days');
  return moment(date).subtract(offset, 'days').format(dateFormat);
}

const createPlan = (lastSunday, planType, dateFormat) => {
  let planJson;
  try {
    planJson = require(`./programs/${planType}.json`);
  } catch(err) {
    throw new Error(`./programs${planType}.json does not exist!`);
  }
  const mapped = [];
  for (var i = 12; i > 0; i--) {
    const week = {};
    week[lastSunday] = planJson[i];
    mapped.push(week);
    lastSunday = moment(lastSunday, dateFormat).subtract(7, 'days').format(dateFormat);
  }
  return mapped.reverse();
}

const formatPlan = (plan) => {
  let result = '\n';
  plan.forEach(week => {
    const date = Object.keys(week)[0];
    result += `**Week of ${date}** \n`;
    Object.keys(week[date]).forEach(day => {
      const distance = week[date][day];
      result += `- [ ] **${day}**: ${distance} \n`;
    });
    result += '\n';
  });
  return result;
}
