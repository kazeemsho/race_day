let adult_runner, youth_runners,  registration_status, category;
registration_status = ['Early', 'Late', 'Exact 18'];

const RUNNUERS = {
    "adult": "over 18 years of age",
    "youth": "under 18",
    "exact_18" : "Exact 18"
};
function startRace()
{
        for(const key in RUNNUERS) 
        {
            if (key ==='adult') 
            {
                adult_function();
            }
            else if(key === 'youth')
            {
                youth_function();
            }
            else
            {
                middle_class();
            }
        }
}
function adult_function()
{
    registration_status.forEach(element =>
        {
            if(element ==='Early')
            {
                let racenumber = Math.floor(Math.random() * 1000 + 1000);
                setTimeout(() =>
                    { 
                        console.log(`Early adults run at 9:30am: Race Number is ${racenumber}`)
                    }, 1000);

                // console.log(`Early adults run at 9:30am: Race Number is ${racenumber}`)
            }
            else if(element ==='Late')
            {
                let racenumber = Math.floor(Math.random() * 1000);
                setTimeout(() =>
                    { 
                        console.log(`Late adults run at 11:00am : Race Number is ${racenumber}`);
                    }, 2000);
                // console.log(`Late adults run at 11:00am : Race Number is ${racenumber}`)
            }
            else(element ==='Exact 18')
            {
                let racenumber = Math.floor(Math.random() * 1000);
                setTimeout(() =>
                    { 
                        console.log(`You are 18years, go to helpDesk`);
                    }, 3000);
                // console.log(`You are 18years, go to helpDesk`);
            }            
        })
}   
function youth_function(){
    registration_status.forEach(element =>
        {
            if(element.includes('Early' || 'Late') )
            {
                let  racenumber = Math.floor(Math.random() * 1000);
                setTimeout(() =>
                    { 
                        console.log(`Youth registrants run at 12:30 pm and : Race Number is ${racenumber}`);
                    }, 4000);
            }
        })
}
function middle_class()
            {
                let racenumber = Math.floor(Math.random() * 1000);
                setTimeout(() =>
                    { 
                        console.log(`You are 18years, go to helpDesk`);
                    }, 5000);
            }
startRace();


