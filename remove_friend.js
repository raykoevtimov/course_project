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

if (userType == 'vip'){
    object = vipObject
} ;
if (userType == 'normal'){
    object = normalObject
} ;
if (userType == 'restricted'){
    object = restrictedObject
} ;

object.removeExistingFriend();
console.log(object.removeExistingFriend());
    
    
//console.log('after IF ' + userPass);
//console.log('normal ' + object.getAllFriends());


//object.addNewFriend();
//console.log(object.getAllFriends());
//object.removeExistingFriend();
//console.log(object.getAllFriends());
