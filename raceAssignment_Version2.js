const registration_timeline = {
  "adult runners": "over 18 years of age",
  "youth runners": "under 18",
  registers_status: ["Early", "Late"],

  registers: function (status) {
    if (this.registers_status.includes("Early" || "Late")) {
      for (let i = 0; i < this.registers_status.length; i++) {
        switch (this.registers_status[i]) {
          case this.registers_status[0]:
            status = this.registers_status[0];
            return status;
          case this.registers_status[1]:
            status = this.registers_status[1];
            return status;
        }
      }
    } else {
      console.log("status not found");
    }
  },
  runners_assignment(myKey) {
    let racenumber, ObjIterator;
    ObjIterator = registration_timeline.registers_status;
    ObjIterator.forEach(
      function (indexKey) {
        if (myKey === "adult runners" && this.registers(indexKey) === "Early") {
          racenumber = Math.floor(Math.random() * 1000 + 1000);
          console.log(
            `Early adults run at 9:30am: Race Number is ${racenumber}: Race Number is ${racenumber}`
          );
        } else if (
          myKey === "adult runners" &&
          this.registers(indexKey) === "Late"
        ) {
          racenumber = Math.floor(Math.random() * 1000);
          console.log(
            `Late adults run at 11:00am : Race Number is ${racenumber}`
          );
        } else if (myKey === "youth runners") {
          racenumber = Math.floor(Math.random() * 1000);
          console.log(
            `Youth registrants run at 12:30 pm and : Race Number is ${racenumber}`
          );
        } else {
          if (
            Array.from(myKey).includes("registers_status", "runners_assignment")
          ) {
          }
          console.log(`You are 18years, go to helpDesk`);
        }
      }.bind(registration_timeline)
    );
  },
};

for (const key in registration_timeline) {
  registration_timeline.runners_assignment(key);
}




// middle_class = [18];

// let addult = middle_class.reduce((e, a) => 
//                         {
//                             e = e + a;
//                             return e > ...middle_class ;
//                             // return true;
//                             // e  > toString(middle_class );
//                             // if((e + a) > toString(middle_class ))
//                             // {
//                             //     return (e + a) > toString(middle_class );
//                             // }
//                         }, 4);
// console.log(addult);