/**
 * This section of code is directed exclusively for the 30 Min timers. 
 */
const PiCamera = require('pi-camera');
const schedule = require('node-schedule');

const fileName
const myCamera

// Create a Timer observer that checks to ensure that the time is in 30 min intervals. 
var rule = new schedule.RecurrenceRule();
rule.minute = [0,30,59];
var scheduleJob = schedule.scheduleJob(rule, function(){
    console.log('Automatic Photo taken at' + Date.now());
    // Call functions to take photo and perhaps post something to a discord bot later. 
    takePhotoScheduled(fileName,myCamera);
    //takeVideoScheduled(fileName,myCamera);
});

// takePhotoScheduled function to take photos based on a 30 min interval. 
function takePhotoScheduled(fileName,myCamera){
    // reCreate objects to perform photo taking and file saving.
    fileName = Date.now();
    myCamera = new PiCamera({
        mode: 'photo',
        output: `${ __dirname }/${fileName}.jpg`,
        width: 1920,
        height: 1080,
        nopreview: true,
      });
      
    // Photo Taking command. 
    myCamera.snap().then((result) => {
        console.log("The server took a photo!")
        console.log('Photo taken as:'+fileName+'.jpg')
    })
    .catch((error) => {
        console.log(error)
        console.log('Photo was not taken please check server console.')
    });
}


/**
 * Below are the functions to create a time lapse. 
 */

function takeVideoScheduled(fileName,myCamera){
    // reCreate objects to perform photo taking and file saving.
    fileName = Date.now();
    const myCamera = new PiCamera({
        mode: 'video',
        output: `${ __dirname }/${fileName}.h264`,
        width: 1920,
        height: 1080,
        timeout: 5000, // Record for 5 seconds
        nopreview: true,
      });
    
    // Photo Taking command. 
    myCamera.record().then((result) => {
        console.log("The server took a photo!")
        console.log('Photo taken as:'+fileName+'.jpg')
    })
    .catch((error) => {
        console.log(error)
        console.log('Photo was not taken please check server console.')
    });
}

/**
 * The following function is to conduct the rotation of the platform in which the camera is operating on.
 * This will act simultaneously with the video recording so that a moving time lapse can be built of the plant.
 * 
 * Requires: 
 * onoff which is only able to be installed on linux systems. 
 *              npm install onoff 
 */

// TODO create function to handle RP IO pins with servo. 
//  function rotateCamera(){

//  }
