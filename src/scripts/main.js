/*
    Define a function that returns an array containing
    all of the ip4 addresses. The function should accept
    the accounts array as input.
*/

const getIPAddresses = accountArray => {
    let ipAddresses = [];
    accountArray.forEach(element => {
        const currentAccount = element.last_login.ip4;
        ipAddresses.push(currentAccount);
    });
    return ipAddresses;
};

console.log(getIPAddresses(accounts));

/*
    Define a function that will return an array that contains
    all of the values of a particular key on each object in
    an array. The function should accept the accounts array
    as input.

    If you pass the string of "email" to this function as an
    argument value, you should get back an array containing
    all of the emails.
*/

const getKeyValues = (accountArray, key) => {
    let keyList = [];
    accountArray.forEach(element => {
        const currentKey = element[key];
        keyList.push(currentKey);
    });
    return keyList;
};

console.log(getKeyValues(accounts, "email"));

/*
    Define a function that counts how many email addresses
    exist at yahoo, outlook, hotmail, and gmail. Return an
    object that has a key for each type, and the number of
    each. The function should accept the accounts array as
    input.
    {
        "yahoo": 3,
        etc...
    }
*/

// const emailSites = (accountArray) => {
//     let emailList = [];
//     accountArray.forEach(element => {
//         const currentKey = element.email;
//         emailList.push(currentKey);
//     });
//     let sortedEmail = {};
//     let yahooNum = 0;
//     let outlookNum = 0;
//     let hotmailNum = 0;
//     let gmailNum = 0;
//     emailList.filter(
//         filterMe = element => {
//             element.split("@");
//             switch (element[1]) {
//                 case "yahoo.com":
//                     yahooNum++;
//                     break;
//                     case "hotmail.com":
//                     hotmailNum++;
//                     break;
//                     case "outlook.com":
//                     outlookNum++;
//                     break;
//                     case "gmail.com":
//                     gmailNum++;
//                     break;
//                     default:
//                     break;
//             };
//         }
//     );
// };

// hash table lookup

const emailAddresses = accountsArray => {
    const emailDomains = {};
    accountsArray.forEach(element => {
        const currentKey = element.email;
        const domain = currentKey.split("@")[1].split(".")[0];
        if (emailDomains.hasOwnProperty(domain)) {
            emailDomains[domain]++;
        } else {
            emailDomains[domain] = 1;
        };
    });
    return emailDomains;
};

console.log(emailAddresses(accounts));

/*
    Define a function that returns an array containing
    only female account holders. The function should
    accept the accounts array as input.
*/

const femaleAccounts = accountsArray => {
    const girlUsers = [];
    accountsArray.forEach(element => {
        const currentKey = element.gender;
        if (currentKey === "female") {
            girlUsers.push(element);
        } 
    });
    return girlUsers;
};

console.log(femaleAccounts(accounts));