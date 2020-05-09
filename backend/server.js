const express = require('express')
const app = express()
const port = 3001
const PiCamera = require('pi-camera');

/**
 * This section of code is directed exclusivly for the 30 Min timers. 
 */

const schedule = require('node-schedule');


// Create a Timer observer that checks to ensure that the time is in 30 min invervals. 
var rule = new schedule.RecurrenceRule();
rule.minute = [0,30,59];
var scheduleJob = schedule.scheduleJob(rule, function(){
    console.log('Automatic Photo taken at' + Date.now());
    // Call functions to take photo and perhaps post somthing to a discord bot later. 
    takePhotoScheduled();
});

// takePhotoScheduled function to take photos based on a 30 min interval. 
function takePhotoScheduled(){
    // Create objects to perform photo taking and file saving.
    const photoName = Date.now();
    const myCamera = new PiCamera({
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





/**
 * The following code is to handle the post requests that are directed at the server from the react website. 
 */

app.get('/', (req, res) => res.send('Hello World!'))

// Handles post request for ensuring that the photo is taken. 
app.post('/photo', takePhotoRequest(req, res));

// takePhoto function to process photos being taken from the react website commands. 
function takePhotoRequest(req, res){
    const photoName = Date.now();
    const myCamera = new PiCamera({
        mode: 'photo',
        output: `${ __dirname }/${photoName}.jpg`,
        width: 1920,
        height: 1080,
        nopreview: true,
      });
    // Photo Taking command. 
    myCamera.snap().then((result) => {
        console.log("The server took a photo!")
        res.send('Photo taken as:'+photoName+'.jpg')
    })
    .catch((error) => {
        console.log(error)
        res.send('Photo was not taken please check server console.')
    });
}

// Starts the server listener. 
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))