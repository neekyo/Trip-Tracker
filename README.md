# Trip Tracker

Track your trips & destinations on your phone with this React Native app

<div align="center">
<img height="100px" width="150px" src="https://codersera.com/blog/wp-content/uploads/2019/07/unnamed.png">
<img height="100px" width="150px" src="https://miro.medium.com/max/600/1*UniTjL05TA-vkvMXJFRdFg.png">
<img height="100px" width="150px" src="https://codr1.files.wordpress.com/2018/02/ngrok.png?w=500">
</div>



### Pre-requisites 

[Expo](https://expo.io/)
<br>
[MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
<br>
[ngrok](https://ngrok.com/)

### Clone

- Clone this repo to your local machine using `https://github.com/neekyo/Trip-Tracker.git`
- You will also need to clone my custom track server using `https://github.com/neekyo/Track-Server.git`

### Setup

- Install dependencies with npm install for both repos

```shell
$ npm install
```

#### Mongo
- Set up a MongoDB Cluster & Collection and link it to the Trip-Tracker app in order to save User tracks
- Creat a 'config/keys.js' file in the track server app and add your mongo URI

```
module.exports = {
	mongoURI: 'redacted'
};
```

#### Ngrok
- Follow [ngrok instructions](https://ngrok.com/download) and start up an HTTP tunnel set to port 3004 (not 80)
- Once the tunnel is running, you can grab your "Forwarding http" ex: ```http://31e236a7.ngrok.io``` (Expires every 8 hours & will need to be updated again)
- Use this to replace the baseURL instance in the './src/api/track.js' file in Trip-Tracker app 

#### Expo 
- Download the Expo app on your phone / Alternatively you can run the iOS/Android Simulator in the browser

#### Change Location
- I have the default location set to Apple HQ in California using a mock location, you will need to comment out this file in './src/components/TrackCreateScreen.js' to use your current location (lat/long)

### Getting Started
- After configuring the pre-requisites, open up 3 seperate terminal shells
1. Where you installed ngrok, run the command ```./ngrok http 3004``` and remember to replace the baseURL
2. In the track-server directory, run ```npm run dev``` to get your Mongo instance running
3. In the trip-track directory, run ```npm start``` where Expo should open in the browser 
4. With LAN selected, scan the QR code in the bottom left of the browser with your phone camera
5. Click the Expo pop up at the top of your phone, sign up, and you're ready to track!

### Preview
<img height="600px" width="350px" src="https://github.com/neekyo/Trip-Tracker/blob/cfb2c8a79f9e781c7f80ee7f50fad9eb6d8cc3f0/src/assets/trackPrev1.png"><img height="600px" width="350px" src="https://github.com/neekyo/Trip-Tracker/blob/cfb2c8a79f9e781c7f80ee7f50fad9eb6d8cc3f0/src/assets/trackPrev2.png">

### Trip-Tracker Built With
JS, HTML5, CSS3, Node, React, React Native, Expo

### Track-Server Built With
JS, HTML5, CSS3, Node, Express, Bcrypt, Mongoose
