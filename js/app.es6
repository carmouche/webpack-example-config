// require('./login');
import {login} from "./login"

require('../css/app.scss');

login('admin', 'radical');

document.write("<h1>Welcome to Big Hair!!</h1>");

console.log('App loaded');
