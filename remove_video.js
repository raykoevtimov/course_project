const fs = require('fs');

const socialNetworkProcessor = require('./src/processor.js');
const normalObject = socialNetworkProcessor.initConfig(`${__dirname}/test_scenarious/normal/config.json`);
const vipObject = socialNetworkProcessor.initConfig(`${__dirname}/test_scenarious/vip/config.json`);
const restrictedObject = socialNetworkProcessor.initConfig(`${__dirname}/test_scenarious/restricted/config.json`)


//normalObject.addNewFriend();
//console.log(normalObject.getAllFriends());
//normalObject.removeExistingFriend();
//console.log(normalObject.getAllFriends());

var userType = process.argv[2];

if((userType == 'restricted')){
   object = restrictedObject
   }  else if (userType == 'vip')   { 
    object = vipObject
   } else {
    object = normalObject
   }

console.log(object.getAllFriends());
//object.removeExistingVideo();