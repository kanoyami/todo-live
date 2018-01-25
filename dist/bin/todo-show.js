#!/usr/bin/env node
!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=20)}([function(module,exports,__webpack_require__){"use strict";var __extends=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),__awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function u(e){try{a(r.next(e))}catch(e){i(e)}}function s(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(u,s)}a((r=r.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){function n(e){return function(t){return r([e,t])}}function r(n){if(o)throw new TypeError("Generator is already executing.");for(;a;)try{if(o=1,i&&(u=i[2&n[0]?"return":n[0]?"throw":"next"])&&!(u=u.call(i,n[1])).done)return u;switch(i=0,u&&(n=[0,u.value]),n[0]){case 0:case 1:u=n;break;case 4:return a.label++,{value:n[1],done:!1};case 5:a.label++,i=n[1],n=[0];continue;case 7:n=a.ops.pop(),a.trys.pop();continue;default:if(u=a.trys,!(u=u.length>0&&u[u.length-1])&&(6===n[0]||2===n[0])){a=0;continue}if(3===n[0]&&(!u||n[1]>u[0]&&n[1]<u[3])){a.label=n[1];break}if(6===n[0]&&a.label<u[1]){a.label=u[1],u=n;break}if(u&&a.label<u[2]){a.label=u[2],a.ops.push(n);break}u[2]&&a.ops.pop(),a.trys.pop();continue}n=t.call(e,a)}catch(e){n=[6,e],i=0}finally{o=u=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,i,u,s,a={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return s={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s};Object.defineProperty(exports,"__esModule",{value:!0});var store_base_1=__webpack_require__(4),Store=function(_super){function Store(e){return void 0===e&&(e="test"),_super.call(this,e)||this}return __extends(Store,_super),Store.IDGenerator=function(){return Math.random().toString(16).slice(-12)},Store.prototype.find=function(e){return __awaiter(this,void 0,void 0,function(){var t,n;return __generator(this,function(r){switch(r.label){case 0:return[4,this.getFile()];case 1:return(t=r.sent())&&t.length?(n=this.parseQuery(e),n?[2,t.filter(function(e){return n.every(function(t){return t(e)})})]:[2,t]):[2,[]]}})})},Store.prototype.update=function(e,t){return __awaiter(this,void 0,void 0,function(){var n,r,o,i;return __generator(this,function(u){switch(u.label){case 0:return[4,this.findOne(e)];case 1:return(n=u.sent())?(r=Object.assign({},n,t),[4,this.findAll()]):[2];case 2:return o=u.sent(),i=o.map(function(e){return e._id===r._id?r:e}),[4,this.setAll(i)];case 3:return u.sent(),[2]}})})},Store.prototype.remove=function(e){return __awaiter(this,void 0,void 0,function(){var t,n,r;return __generator(this,function(o){switch(o.label){case 0:return[4,this.getFile()];case 1:return(t=o.sent())&&t.length&&(n=this.parseQuery(e))?(r=t.map(function(e){return n.every(function(t){return t(e)})?null:e}).filter(function(e){return e}),[4,this.setAll(r)]):[2];case 2:return o.sent(),[2]}})})},Store.prototype.removeAll=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return[4,this.setAll([])];case 1:return e.sent(),[2]}})})},Store.prototype.findAll=function(){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(t){switch(t.label){case 0:return[4,this.getFile()];case 1:return e=t.sent(),e&&e.length?[2,e]:[2,[]]}})})},Store.prototype.count=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return[4,this.countReg()];case 1:return[2,e.sent()]}})})},Store.prototype.findOne=function(e){return __awaiter(this,void 0,void 0,function(){var t,n,r;return __generator(this,function(o){switch(o.label){case 0:return[4,this.getFile()];case 1:return(t=o.sent())&&t.length?(n=this.parseQuery(e))?(r=t.find(function(e){return n.every(function(t){return t(e)})}),[2,r||{}]):[2,t[0]]:[2,{}]}})})},Store.prototype.save=function(e){return void 0===e&&(e=null),__awaiter(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return e?(e._id=e._id||Store.IDGenerator(),[4,this.setOne(e)]):[2];case 1:return t.sent(),[2]}})})},Store.prototype.saveAll=function(e){return void 0===e&&(e=[]),__awaiter(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return e&&e.length?(e.forEach(function(e){e._id=e._id||Store.IDGenerator()}),[4,this.setAll(e)]):[2];case 1:return t.sent(),[2]}})})},Store.prototype.parseQuery=function(query){void 0===query&&(query={});var queryKeys=Object.keys(query);if(!queryKeys.length)return null;var queryVal,type;return queryKeys.map(function(key){if(queryVal=query[key],"object"!==(type=typeof queryVal))return function(e){return e[key]&&e[key]===queryVal};var operKey=Object.keys(queryVal||{})[0],oper=store_base_1.StoreBase.queryOperator(operKey);return function(v){return v[key]&&eval(v[key]+" "+oper+" "+queryVal[operKey])}})},Store}(store_base_1.StoreBase);exports.Store=Store},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DEFAULT_DATABASE="todo_list",t.ARCHIVE_DATABASE="todo_archive";!function(e){e.unsolved="unsolved",e.solving="solving",e.solved="solved",e.archived="archived",e.default="unsolved"}(t.DEFAULT_TODO_STATUS_GROUP||(t.DEFAULT_TODO_STATUS_GROUP={})),t.DEFAULT_TODO_LEVEL_GROUP=["plan","normal","urgent","instant","exe"],t.DEFAULT_TODO_LEVEL="normal",t.DEFAULT_TODO_LEVEL_COLORS={plan:"#8F99AC",normal:"#EEF2F4",urgent:"#DC3C44",instant:"#C72A39"}},function(e,t){e.exports=require("child_process")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e.replace(/\\/g,"/")},o=function(e,t){return e.length<=t?e:e.substr(0,t)+"..."};t.default={path:r,strEllipsis:o}},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function u(e){try{a(r.next(e))}catch(e){i(e)}}function s(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(u,s)}a((r=r.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){function n(e){return function(t){return r([e,t])}}function r(n){if(o)throw new TypeError("Generator is already executing.");for(;a;)try{if(o=1,i&&(u=i[2&n[0]?"return":n[0]?"throw":"next"])&&!(u=u.call(i,n[1])).done)return u;switch(i=0,u&&(n=[0,u.value]),n[0]){case 0:case 1:u=n;break;case 4:return a.label++,{value:n[1],done:!1};case 5:a.label++,i=n[1],n=[0];continue;case 7:n=a.ops.pop(),a.trys.pop();continue;default:if(u=a.trys,!(u=u.length>0&&u[u.length-1])&&(6===n[0]||2===n[0])){a=0;continue}if(3===n[0]&&(!u||n[1]>u[0]&&n[1]<u[3])){a.label=n[1];break}if(6===n[0]&&a.label<u[1]){a.label=u[1],u=n;break}if(u&&a.label<u[2]){a.label=u[2],a.ops.push(n);break}u[2]&&a.ops.pop(),a.trys.pop();continue}n=t.call(e,a)}catch(e){n=[6,e],i=0}finally{o=u=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,i,u,s,a={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return s={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s};Object.defineProperty(t,"__esModule",{value:!0});var i=n(5),u=n(3),s=function(){function e(t){this.root=u.default.path(n(9).homedir()+"/.storage"),this.database="list",e.CheckWorkEnv(this.root),this.use(t)}return e.CheckWorkEnv=function(e){!i.default.existsSync(e)&&i.default.spawnSync("mkdir",[e])},e.queryOperator=function(e){return{$lt:"<",$lte:"<=",$gt:">",$gte:">=",$ne:"!=="}[e]},e.prototype.implode=function(e){void 0===e&&(e=this.database);var t=this.makeBasePath();i.default.existsSync(t)&&i.default.spawnSync("rm",["-rf",t])},e.prototype.use=function(e){return this.database=e,this.init(),this},e.prototype.countReg=function(){return r(this,void 0,void 0,function(){var e,t;return o(this,function(n){switch(n.label){case 0:return[4,i.default.readFile(this.url,"utf-8")];case 1:return e=n.sent(),t=e.match(/\"\_id\":/g),t?[2,t.length]:[2,0]}})})},e.prototype.getFile=function(){return r(this,void 0,void 0,function(){var e,t,n;return o(this,function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,i.default.readFile(this.url,"utf-8")];case 1:return e=r.sent(),t=JSON.parse(e||"[]"),[2,t];case 2:return n=r.sent(),[2,[]];case 3:return[2]}})})},e.prototype.setOne=function(e){return void 0===e&&(e={}),r(this,void 0,void 0,function(){var t,n,r;return o(this,function(o){switch(o.label){case 0:return o.trys.push([0,3,,4]),[4,this.getFile()];case 1:return t=o.sent(),n=JSON.stringify(t.concat(e)),[4,i.default.writeFile(this.url,n,"utf-8")];case 2:return o.sent(),[3,4];case 3:return r=o.sent(),[3,4];case 4:return[2]}})})},e.prototype.setAll=function(e){return r(this,void 0,void 0,function(){var t,n;return o(this,function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),t=JSON.stringify(e),[4,i.default.writeFile(this.url,t,"utf-8")];case 1:return r.sent(),[3,3];case 2:return n=r.sent(),[3,3];case 3:return[2]}})})},e.prototype.init=function(){var e=this.makeBasePath();if(i.default.existsSync(e))return void(this.url=e);i.default.spawnSync("touch",[e]),this.url=e},e.prototype.makeBasePath=function(){return u.default.path(this.root+"/todo_live_"+this.database+".json")},e}();t.StoreBase=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=n(6),i=n(7),u=function(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return new Promise(function(n){e.apply(void 0,t.concat([function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return n.apply(void 0,e)}]))})}},s=function(){var e=n(8).promisify;return e&&"function"==typeof e?e:u}();t.default={readdir:i(o.readdir),mkdir:i(o.mkdir),readFile:i(o.readFile),writeFile:i(o.writeFile),exists:s(o.exists),existsSync:o.existsSync,stat:i(o.stat),spawnSync:r.spawnSync,exec:i(r.exec)}},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("util.promisify")},function(e,t){e.exports=require("util")},function(e,t){e.exports=require("os")},function(e,t){e.exports=require("commander")},function(e,t){e.exports=require("chalk")},function(e,t){e.exports=require("inquirer")},,,,,,,,function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function u(e){try{a(r.next(e))}catch(e){i(e)}}function s(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(u,s)}a((r=r.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){function n(e){return function(t){return r([e,t])}}function r(n){if(o)throw new TypeError("Generator is already executing.");for(;a;)try{if(o=1,i&&(u=i[2&n[0]?"return":n[0]?"throw":"next"])&&!(u=u.call(i,n[1])).done)return u;switch(i=0,u&&(n=[0,u.value]),n[0]){case 0:case 1:u=n;break;case 4:return a.label++,{value:n[1],done:!1};case 5:a.label++,i=n[1],n=[0];continue;case 7:n=a.ops.pop(),a.trys.pop();continue;default:if(u=a.trys,!(u=u.length>0&&u[u.length-1])&&(6===n[0]||2===n[0])){a=0;continue}if(3===n[0]&&(!u||n[1]>u[0]&&n[1]<u[3])){a.label=n[1];break}if(6===n[0]&&a.label<u[1]){a.label=u[1],u=n;break}if(u&&a.label<u[2]){a.label=u[2],a.ops.push(n);break}u[2]&&a.ops.pop(),a.trys.pop();continue}n=t.call(e,a)}catch(e){n=[6,e],i=0}finally{o=u=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,i,u,s,a={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return s={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s},i=this;Object.defineProperty(t,"__esModule",{value:!0});var u=n(11),s=n(10),a=n(12),c=n(3),l=n(0),f=n(1),p=new l.Store(f.DEFAULT_DATABASE);s.option("-e, --edit","edit task").parse(process.argv);var h=s.edit||!1,d=s.args&&s.args.length&&s.args[0],y=function(e){return[{type:"input",name:"title",message:"title of the task: ",default:e.title,suffix:"(press enter to skip)",validate:function(e){return!!e}},{type:"editor",default:e.description,name:"description",message:"description of the task: "}]},_=function(){return r(i,void 0,void 0,function(){return o(this,function(e){return[2,console.log("Nothing needs to do.\n")]})})},v=function(e){return r(i,void 0,void 0,function(){var t,n,r,i;return o(this,function(o){switch(o.label){case 0:return console.log(" "),[4,p.findOne({index:e})];case 1:return t=o.sent(),n=y(t),[4,a.prompt(n)];case 2:return r=o.sent(),r.description&&(console.log(r.description),r.description=r.description.replace(/\n/g,". ")),i=Object.assign({},t,r),[4,p.update({_id:t._id},i)];case 3:return o.sent(),console.log("task updated.\n"),[2]}})})},b=function(e){return r(i,void 0,void 0,function(){var t,n,r,i,s;return o(this,function(o){switch(o.label){case 0:return o.trys.push([0,4,,6]),[4,p.findOne({index:e})];case 1:return t=o.sent(),t&&t._id?[3,3]:[4,_()];case 2:return[2,o.sent()];case 3:return n=u.default.hex("#E79627")("TASK ["+e+"] ("+t.status+"):"),r="unsolved"===t.status?"⚬":"●",i=u.default.hex(f.DEFAULT_TODO_LEVEL_COLORS[t.level])(r+" "+t.title),console.log(n),console.log(i),console.log("  "+t.description),t.notes&&t.notes.length&&(console.log(u.default.hex("#E79627")("TASK NOTES:")),t.notes.forEach(function(e){return console.log("  "+e)})),console.log(" "),[3,6];case 4:return s=o.sent(),[4,_()];case 5:return[2,o.sent()];case 6:return[2]}})})};!function(){r(i,void 0,void 0,function(){var e;return o(this,function(t){switch(t.label){case 0:return[4,p.find({})];case 1:return e=t.sent(),e&&e.length?[3,3]:[4,_()];case 2:return[2,t.sent()];case 3:return h&&d?[4,v(+d)]:[3,5];case 4:return[2,t.sent()];case 5:return d?[4,b(+d)]:[3,7];case 6:return[2,t.sent()];case 7:return console.log("↓"),e.forEach(function(e){var t="unsolved"===e.status?"⚬":"●",n=u.default.hex(f.DEFAULT_TODO_LEVEL_COLORS[e.level]),r=n(t+" "+e.index+" "+c.default.strEllipsis(e.title,50));console.log(""+r),e.description&&console.log("    - "+c.default.strEllipsis(e.description,80))}),console.log(" "),[2]}})})}()}]);