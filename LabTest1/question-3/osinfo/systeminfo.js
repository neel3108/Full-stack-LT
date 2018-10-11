var os = require('os');
exports.getSysteminfo = function(){
   return  'Sytem Info:\n'+
            ' CPU: '+os.cpus() +'\n'+
             'Hostname:' + os.hostname() +'\n'+
             'OS:' +os.EOL();

    
}

exports.getUserInfo = function(){
     return  'User Info:' + os.userInfo() +'\n'+
               'Username' + os.userInfo().username  +'\n'+
               'Home Directory' + os.userInfo().homedir;    
}
