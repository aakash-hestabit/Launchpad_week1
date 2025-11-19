const os = require('os');
const userdetails = JSON.stringify(os.userInfo());
console.log(`       ${userdetails}`);
