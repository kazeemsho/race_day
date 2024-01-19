const ActualHourSleptPerDay = 
{ 
    monday: 5, tuesday: 6, 
    wednesday: 8, thursday: 5,  
    friday : 7,  saturday: 5,   sunday : 4,
    getSleepHours: function(day)
    {
        switch(day)
        {
            case 'monday':
                console.log(day);
                return ActualHourSleptPerDay.day;
            case 'tuesday':
                return ActualHourSleptPerDay.day
            case 'wednesday':
                return ActualHourSleptPerDay.day;
            case 'thursday':
                return ActualHourSleptPerDay.day;
            case 'friday':
                return ActualHourSleptPerDay.day;
            case 'saturday':
                return ActualHourSleptPerDay.day;
            case 'sunday':
                return ActualHourSleptPerDay.day;
            default:
                console.log('Not a day of the weekm')
        }
   }//.bind(ActualHourSleptPerDay)
};

let sum = 0;
for (const key in ActualHourSleptPerDay)
{
    {
        // console.log(ActualHourSleptPerDay.getSleepHours.call(ActualHourSleptPerDay, key));
        console.log(ActualHourSleptPerDay.getSleepHours(key));
    }
}
// getActualSleepHours


//         getActualSleepHours(){
//             const getActualSleepHours = () => getSleepHours('Monday') +
// getSleepHours('Tuesday') + getSleepHours('Wednesday') + ...;
//         }
//         const getActualSleepHours = () => getSleepHours('Monday') +
// getSleepHours('Tuesday') + getSleepHours('Wednesday') + ...;


//     const getIdealSleepHours = () => {
//         const idealHours = 7.5;
//         return idealHours * 7;
//         };

//         getIdealSleepHoursPrefered(){}

//         const calculateSleepDebt = () => {
//             const actualSleepHours = getActualSleepHours();
//             const idealSleepHours = getIdealSleepHours();
//             };