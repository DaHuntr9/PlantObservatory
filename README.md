# PlantObservatory
This is a project to observe a plants growth via a Raspberry Pi and create time-lapses of the photos. 

## /plantobservatory
This directory is the location of the React website that will be commuicating with the back end server that will handle all file and device controls. 
This website will provide a basic UI to controll and monitor the Raspberry Pi from and reset parameters such as the timers and check progress. <br>

## /backend
This directory is the location of the back end server that will directly interact with the Raspberry Pi Camera. This utilizes node-sheduler inorder to take photos at 30 min invervals. 
Additional features will be added later on such as <br>
Intial Goals: <br>
[x] Take photos at a given interval. (30 mins) <br>
[] Send photos do discord bot server a given interval. (30 mins) <br>

<br>
Extra Goals: <br>
[] Take a 360 video at a given interval. (30 mins) <br>
[] Combine Photos into a time lapse at the end of the month. <br>
[] Take photos upon a HTTP request. (On click on the react website.) <br>
[] Send photos for user to view upon a HTTP request. (On click on the react website.) <br>
