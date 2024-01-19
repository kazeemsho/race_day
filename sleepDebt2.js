const ActualHourSleptPerDay = {
  monday: 5,
  tuesday: 6,
  wednesday: 8,
  thursday: 5,
  friday: 7,
  saturday: 5,
  sunday: 4,
};
const idealHours = {
  monday: 7.5,
  tuesday: 7.5,
  wednesday: 7.5,
  thursday: 7.5,
  friday: 7.5,
  saturday: 7.5,
  sunday: 7.5,
};
const idealHoursValues = Object.values(idealHours).reduce((a, b) => a + b);
function getSleepHours(day) {
  switch (day) {
    case "monday":
      return this.monday;
    case "tuesday":
      return this.tuesday;
    case "wednesday":
      return this.wednesday;
    case "thursday":
      return this.thursday;
    case "friday":
      return this.friday;
    case "saturday":
      return this.saturday;
    case "sunday":
      return this.sunday;
  }
}
let totalSleepHour = 0;
// for (const key in ActualHourSleptPerDay)
// {
//     {
//         totalSleepHour += getSleepHours.call(ActualHourSleptPerDay, key);
//     }
// }
function getActualSleepHours() {
  for (const key in ActualHourSleptPerDay) {
    totalSleepHour += getSleepHours.call(ActualHourSleptPerDay, key);
  }
  let ActualSleepHours = totalSleepHour;
  return ActualSleepHours;
}
function getIdealSleepHours() {
  // const idealHours = 7.5;
  const totalIdealHours = idealHoursValues;
  return totalIdealHours;
}

function calculateSleepDebt() {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  console.log("Total ideal sleep " + idealSleepHours);
  console.log("Total Actual sleep hour " + actualSleepHours);
  if (actualSleepHours === idealSleepHours) {
    console.log("user got the perfect amount of sleep");
  } else if (actualSleepHours > idealSleepHours) {
    console.log("user got more sleep than needed");
  } else if (actualSleepHours < idealSleepHours) {
    console.log("user should get some rest");
  } else {
    console.log("user should get some rest");
  }

  if (actualSleepHours < idealSleepHours) {
    console.log(
      "You got " +
        (idealSleepHours - actualSleepHours) +
        "hour(s) less sleep than you needed this week. Get some rest"
    );
  }
}
calculateSleepDebt();
