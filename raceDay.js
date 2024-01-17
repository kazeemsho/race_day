const registration_timeline = {
    'adult runners' : 'over 18 years of age',
    'youth runners' : 'under 18',
    'registers_status' : ['Early', 'Late'], 
    runners_assignment(myKey)
    {   
        this.registers_status.forEach(e => 
        {
            let racenumber;
            if((myKey === 'adult runners') && (this.registers_status[0]) === e)
            {
                racenumber = Math.floor((Math.random()*1000) + 1000);               
                setTimeout(() =>
                    console.log(`Early adults run at 9:30am: Race Number is ${racenumber}`), 2000)                    
            }
            else if((myKey === 'adult runners') && (this.registers_status[1]) === e)
            {
                racenumber = Math.floor((Math.random()*1000));
                setTimeout(() =>
                console.log(`Late adults run at 11:00am : Race Number is ${racenumber}`), 3000)                                   
            }
            else if((myKey === 'youth runners'))  
            {
                racenumber = Math.floor((Math.random()*1000)); 
                setTimeout(() =>
                console.log(`Youth registrants run at 12:30 pm and : Race Number is ${racenumber}`), 4000)  
            }
            else 
            {   
                if(Array.from(myKey).includes('registers_status', 'runners_assignment')){}        
                console.log(`You are 18years, go to helpDesk`);
            }
        });
    }
};

for (const key in registration_timeline) 
{
registration_timeline.runners_assignment(key);
}
