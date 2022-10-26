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
console.log(accountInfo);
 // ---

// IF NORMAL
if (accountInfo.numberOfFriends <= 150 && accountInfo.accountType == 'NORMAL') {
    object.addNewFriend();
    console.log('NumberONLY added: ' + object.getAllFriends());
} else if (accountInfo.numberOfFriends >= 150 && accountInfo.accountType == 'NORMAL'){
console.log('You have reached the limit of friends!')
}; 
// IF VIP
if (accountInfo.accountType == 'VIP') {
    object.addNewFriend();
    object.addNewFriend();
    console.log('You now have : ' + object.getAllFriends());
};
// --- 
// IF RESTRICTED
if (accountInfo.accountType == 'RESTRICTED' && accountInfo.numberOfFriends <= 49 ) {
    object.addNewFriend();
    console.log('NumberONLY added: ' + object.getAllFriends());
} else if (accountInfo.numberOfFriends >= 50 && accountInfo.accountType == 'RESTRICTED'){
    console.log('You have reached the limit of friend!')
    }; 

