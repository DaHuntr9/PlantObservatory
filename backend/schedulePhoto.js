/**
 * This section of code is directed exclusivly for the 30 Min timers. 
 */
const PiCamera = require('pi-camera');
const schedule = require('node-schedule');

const photoName
const myCamera

// Create a Timer observer that checks to ensure that the time is in 30 min invervals. 
var rule = new schedule.RecurrenceRule();
rule.minute = [0,30,59];
var scheduleJob = schedule.scheduleJob(rule, function(){
    console.log('Automatic Photo taken at' + Date.now());
    // Call functions to take photo and perhaps post somthing to a discord bot later. 
    takePhotoScheduled(photoName,myCamera);
});

// takePhotoScheduled function to take photos based on a 30 min interval. 
function takePhotoScheduled(photoName,myCamera){
    // reCreate objects to perform photo taking and file saving.
    photoName = Date.now();
    myCamera = new PiCamera({
        mode: 'photo',
        output: `${ __dirname }/${photoName}.jpg`,
        width: 1920,
        height: 1080,
        nopreview: true,
      });
      
    // Photo Taking command. 
    myCamera.snap().then((result) => {
        console.log("The server took a photo!")
        console.log('Photo taken as:'+photoName+'.jpg')
    })
    .catch((error) => {
        console.log(error)
        console.log('Photo was not taken please check server console.')
    });
}
