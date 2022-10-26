const fs = require('fs');


const socialNetworkProcessor = require('./src/processor.js');
const normalObject = socialNetworkProcessor.initConfig(`${__dirname}/test_scenarious/normal/config.json`);
const vipObject = socialNetworkProcessor.initConfig(`${__dirname}/test_scenarious/vip/config.json`);
const restrictedObject = socialNetworkProcessor.initConfig(`${__dirname}/test_scenarious/restricted/config.json`)

// Account type validation
let accountType = process.argv[2];
if((accountType == 'NORMAL')){
    object = normalObject
    } else if (accountType == 'VIP')   { 
     object = vipObject
    } else {
     object = restrictedObject
    };

    const accountInfo = object.accountInfo();
 // ---

// IF NORMAL
if (accountInfo.numberOfPhotos <= 150 && accountInfo.accountType == 'NORMAL') {
    object.addNewVideo();
    console.log(object.getAllVideos());
} else if (accountInfo.numberOfPhotos >= 150 && accountInfo.accountType == 'NORMAL'){
console.log('You have reached the limit of videos !')
}; 
// IF VIP
if (accountInfo.accountType == 'VIP') {
    object.addNewVideo();
    console.log(object.getAllVideos());
};
// --- 
// IF RESTRICTED
if (accountInfo.accountType == 'RESTRICTED') {
    console.log('You cannot add videos');
};
