const schedule = require('node-schedule');



// takePhoto function to process photos being taken from the react website commands. 
function takePhoto(){
    const photoName = Date.now();
    console.log("The server took a photo!")
    console.log('Photo taken as:'+photoName+'.jpg')
}

// Create a Timer observer that checks to ensure that the time is in 30 min invervals. 
var rule = new schedule.RecurrenceRule();
rule.minute = [0,30,59];
// Create a Timer observer that checks to ensure that the time is in 30 min invervals. 
var scheduleJob = schedule.scheduleJob(rule, function(){
    console.log('Automatic Photo taken at' + Date.now());
    takePhoto();
});
