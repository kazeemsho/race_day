const ActualHourSleptPerDay = { monday: 5, tuesday: 6, wednesday: 8, thursday: 5,  friday : 7,  saturday: 5,   sunday : 4 };
const getSleepHours = day => 
{
    switch(day)
    {
        case 'monday':
            console.log(this.day);
            return this.day;
        case 'tuesday':
            return this.day
        case 'wednesday':
            return this.day;
        case 'thursday':
            return this.day;
        case 'friday':
            return this.day;
        case 'saturday':
            return this.day;
        case 'sunday':
            return this.day;
    }   
}
let sum = 0;
for (const key in ActualHourSleptPerDay)
{
    {
        // sum += getSleepHours(key); 
        bindedResult = getSleepHours.call(ActualHourSleptPerDay, key);
        // console.log(bindedResult(key));  
        // console.log(getSleepHours.bind(key)); 
        // console.log(getSleepHours(key));
        // console.log(key); 
        // console.log(getSleepHours(key), sum);       
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