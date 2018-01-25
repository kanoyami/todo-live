#!/usr/bin/env node
!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=19)}([function(module,exports,__webpack_require__){"use strict";var __extends=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),__awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(o,i){function u(e){try{s(n.next(e))}catch(e){i(e)}}function a(e){try{s(n.throw(e))}catch(e){i(e)}}function s(e){e.done?o(e.value):new r(function(t){t(e.value)}).then(u,a)}s((n=n.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){function r(e){return function(t){return n([e,t])}}function n(r){if(o)throw new TypeError("Generator is already executing.");for(;s;)try{if(o=1,i&&(u=i[2&r[0]?"return":r[0]?"throw":"next"])&&!(u=u.call(i,r[1])).done)return u;switch(i=0,u&&(r=[0,u.value]),r[0]){case 0:case 1:u=r;break;case 4:return s.label++,{value:r[1],done:!1};case 5:s.label++,i=r[1],r=[0];continue;case 7:r=s.ops.pop(),s.trys.pop();continue;default:if(u=s.trys,!(u=u.length>0&&u[u.length-1])&&(6===r[0]||2===r[0])){s=0;continue}if(3===r[0]&&(!u||r[1]>u[0]&&r[1]<u[3])){s.label=r[1];break}if(6===r[0]&&s.label<u[1]){s.label=u[1],u=r;break}if(u&&s.label<u[2]){s.label=u[2],s.ops.push(r);break}u[2]&&s.ops.pop(),s.trys.pop();continue}r=t.call(e,s)}catch(e){r=[6,e],i=0}finally{o=u=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}var o,i,u,a,s={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return a={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a};Object.defineProperty(exports,"__esModule",{value:!0});var store_base_1=__webpack_require__(4),Store=function(_super){function Store(e){return void 0===e&&(e="test"),_super.call(this,e)||this}return __extends(Store,_super),Store.IDGenerator=function(){return Math.random().toString(16).slice(-12)},Store.prototype.find=function(e){return __awaiter(this,void 0,void 0,function(){var t,r;return __generator(this,function(n){switch(n.label){case 0:return[4,this.getFile()];case 1:return(t=n.sent())&&t.length?(r=this.parseQuery(e),r?[2,t.filter(function(e){return r.every(function(t){return t(e)})})]:[2,t]):[2,[]]}})})},Store.prototype.update=function(e,t){return __awaiter(this,void 0,void 0,function(){var r,n,o,i;return __generator(this,function(u){switch(u.label){case 0:return[4,this.findOne(e)];case 1:return(r=u.sent())?(n=Object.assign({},r,t),[4,this.findAll()]):[2];case 2:return o=u.sent(),i=o.map(function(e){return e._id===n._id?n:e}),[4,this.setAll(i)];case 3:return u.sent(),[2]}})})},Store.prototype.remove=function(e){return __awaiter(this,void 0,void 0,function(){var t,r,n;return __generator(this,function(o){switch(o.label){case 0:return[4,this.getFile()];case 1:return(t=o.sent())&&t.length&&(r=this.parseQuery(e))?(n=t.map(function(e){return r.every(function(t){return t(e)})?null:e}).filter(function(e){return e}),[4,this.setAll(n)]):[2];case 2:return o.sent(),[2]}})})},Store.prototype.removeAll=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return[4,this.setAll([])];case 1:return e.sent(),[2]}})})},Store.prototype.findAll=function(){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(t){switch(t.label){case 0:return[4,this.getFile()];case 1:return e=t.sent(),e&&e.length?[2,e]:[2,[]]}})})},Store.prototype.count=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return[4,this.countReg()];case 1:return[2,e.sent()]}})})},Store.prototype.findOne=function(e){return __awaiter(this,void 0,void 0,function(){var t,r,n;return __generator(this,function(o){switch(o.label){case 0:return[4,this.getFile()];case 1:return(t=o.sent())&&t.length?(r=this.parseQuery(e))?(n=t.find(function(e){return r.every(function(t){return t(e)})}),[2,n||{}]):[2,t[0]]:[2,{}]}})})},Store.prototype.save=function(e){return void 0===e&&(e=null),__awaiter(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return e?(e._id=e._id||Store.IDGenerator(),[4,this.setOne(e)]):[2];case 1:return t.sent(),[2]}})})},Store.prototype.saveAll=function(e){return void 0===e&&(e=[]),__awaiter(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return e&&e.length?(e.forEach(function(e){e._id=e._id||Store.IDGenerator()}),[4,this.setAll(e)]):[2];case 1:return t.sent(),[2]}})})},Store.prototype.parseQuery=function(query){void 0===query&&(query={});var queryKeys=Object.keys(query);if(!queryKeys.length)return null;var queryVal,type;return queryKeys.map(function(key){if(queryVal=query[key],"object"!==(type=typeof queryVal))return function(e){return e[key]&&e[key]===queryVal};var operKey=Object.keys(queryVal||{})[0],oper=store_base_1.StoreBase.queryOperator(operKey);return function(v){return v[key]&&eval(v[key]+" "+oper+" "+queryVal[operKey])}})},Store}(store_base_1.StoreBase);exports.Store=Store},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DEFAULT_DATABASE="todo_list",t.ARCHIVE_DATABASE="todo_archive";!function(e){e.unsolved="unsolved",e.solving="solving",e.solved="solved",e.archived="archived",e.default="unsolved"}(t.DEFAULT_TODO_STATUS_GROUP||(t.DEFAULT_TODO_STATUS_GROUP={})),t.DEFAULT_TODO_LEVEL_GROUP=["plan","normal","urgent","instant","exe"],t.DEFAULT_TODO_LEVEL="normal",t.DEFAULT_TODO_LEVEL_COLORS={plan:"#8F99AC",normal:"#EEF2F4",urgent:"#DC3C44",instant:"#C72A39"}},function(e,t){e.exports=require("child_process")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e.replace(/\\/g,"/")},o=function(e,t){return e.length<=t?e:e.substr(0,t)+"..."};t.default={path:n,strEllipsis:o}},function(e,t,r){"use strict";var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(o,i){function u(e){try{s(n.next(e))}catch(e){i(e)}}function a(e){try{s(n.throw(e))}catch(e){i(e)}}function s(e){e.done?o(e.value):new r(function(t){t(e.value)}).then(u,a)}s((n=n.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){function r(e){return function(t){return n([e,t])}}function n(r){if(o)throw new TypeError("Generator is already executing.");for(;s;)try{if(o=1,i&&(u=i[2&r[0]?"return":r[0]?"throw":"next"])&&!(u=u.call(i,r[1])).done)return u;switch(i=0,u&&(r=[0,u.value]),r[0]){case 0:case 1:u=r;break;case 4:return s.label++,{value:r[1],done:!1};case 5:s.label++,i=r[1],r=[0];continue;case 7:r=s.ops.pop(),s.trys.pop();continue;default:if(u=s.trys,!(u=u.length>0&&u[u.length-1])&&(6===r[0]||2===r[0])){s=0;continue}if(3===r[0]&&(!u||r[1]>u[0]&&r[1]<u[3])){s.label=r[1];break}if(6===r[0]&&s.label<u[1]){s.label=u[1],u=r;break}if(u&&s.label<u[2]){s.label=u[2],s.ops.push(r);break}u[2]&&s.ops.pop(),s.trys.pop();continue}r=t.call(e,s)}catch(e){r=[6,e],i=0}finally{o=u=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}var o,i,u,a,s={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return a={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a};Object.defineProperty(t,"__esModule",{value:!0});var i=r(5),u=r(3),a=function(){function e(t){this.root=u.default.path(r(9).homedir()+"/.storage"),this.database="list",e.CheckWorkEnv(this.root),this.use(t)}return e.CheckWorkEnv=function(e){!i.default.existsSync(e)&&i.default.spawnSync("mkdir",[e])},e.queryOperator=function(e){return{$lt:"<",$lte:"<=",$gt:">",$gte:">=",$ne:"!=="}[e]},e.prototype.implode=function(e){void 0===e&&(e=this.database);var t=this.makeBasePath();i.default.existsSync(t)&&i.default.spawnSync("rm",["-rf",t])},e.prototype.use=function(e){return this.database=e,this.init(),this},e.prototype.countReg=function(){return n(this,void 0,void 0,function(){var e,t;return o(this,function(r){switch(r.label){case 0:return[4,i.default.readFile(this.url,"utf-8")];case 1:return e=r.sent(),t=e.match(/\"\_id\":/g),t?[2,t.length]:[2,0]}})})},e.prototype.getFile=function(){return n(this,void 0,void 0,function(){var e,t,r;return o(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,i.default.readFile(this.url,"utf-8")];case 1:return e=n.sent(),t=JSON.parse(e||"[]"),[2,t];case 2:return r=n.sent(),[2,[]];case 3:return[2]}})})},e.prototype.setOne=function(e){return void 0===e&&(e={}),n(this,void 0,void 0,function(){var t,r,n;return o(this,function(o){switch(o.label){case 0:return o.trys.push([0,3,,4]),[4,this.getFile()];case 1:return t=o.sent(),r=JSON.stringify(t.concat(e)),[4,i.default.writeFile(this.url,r,"utf-8")];case 2:return o.sent(),[3,4];case 3:return n=o.sent(),[3,4];case 4:return[2]}})})},e.prototype.setAll=function(e){return n(this,void 0,void 0,function(){var t,r;return o(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),t=JSON.stringify(e),[4,i.default.writeFile(this.url,t,"utf-8")];case 1:return n.sent(),[3,3];case 2:return r=n.sent(),[3,3];case 3:return[2]}})})},e.prototype.init=function(){var e=this.makeBasePath();if(i.default.existsSync(e))return void(this.url=e);i.default.spawnSync("touch",[e]),this.url=e},e.prototype.makeBasePath=function(){return u.default.path(this.root+"/todo_live_"+this.database+".json")},e}();t.StoreBase=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(2),o=r(6),i=r(7),u=function(e){return function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return new Promise(function(r){e.apply(void 0,t.concat([function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return r.apply(void 0,e)}]))})}},a=function(){var e=r(8).promisify;return e&&"function"==typeof e?e:u}();t.default={readdir:i(o.readdir),mkdir:i(o.mkdir),readFile:i(o.readFile),writeFile:i(o.writeFile),exists:a(o.exists),existsSync:o.existsSync,stat:i(o.stat),spawnSync:n.spawnSync,exec:i(n.exec)}},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("util.promisify")},function(e,t){e.exports=require("util")},function(e,t){e.exports=require("os")},function(e,t){e.exports=require("commander")},,,,function(e,t,r){"use strict";var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(o,i){function u(e){try{s(n.next(e))}catch(e){i(e)}}function a(e){try{s(n.throw(e))}catch(e){i(e)}}function s(e){e.done?o(e.value):new r(function(t){t(e.value)}).then(u,a)}s((n=n.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){function r(e){return function(t){return n([e,t])}}function n(r){if(o)throw new TypeError("Generator is already executing.");for(;s;)try{if(o=1,i&&(u=i[2&r[0]?"return":r[0]?"throw":"next"])&&!(u=u.call(i,r[1])).done)return u;switch(i=0,u&&(r=[0,u.value]),r[0]){case 0:case 1:u=r;break;case 4:return s.label++,{value:r[1],done:!1};case 5:s.label++,i=r[1],r=[0];continue;case 7:r=s.ops.pop(),s.trys.pop();continue;default:if(u=s.trys,!(u=u.length>0&&u[u.length-1])&&(6===r[0]||2===r[0])){s=0;continue}if(3===r[0]&&(!u||r[1]>u[0]&&r[1]<u[3])){s.label=r[1];break}if(6===r[0]&&s.label<u[1]){s.label=u[1],u=r;break}if(u&&s.label<u[2]){s.label=u[2],s.ops.push(r);break}u[2]&&s.ops.pop(),s.trys.pop();continue}r=t.call(e,s)}catch(e){r=[6,e],i=0}finally{o=u=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}var o,i,u,a,s={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return a={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a},i=this;Object.defineProperty(t,"__esModule",{value:!0});var u=r(1),a=r(0);t.removeAndRearrangeTask=function(e){return n(i,void 0,void 0,function(){var t,r;return o(this,function(n){switch(n.label){case 0:return t=new a.Store(u.DEFAULT_DATABASE),[4,t.remove({_id:e})];case 1:return n.sent(),[4,t.findAll()];case 2:return r=n.sent(),[4,t.removeAll()];case 3:return n.sent(),[4,t.saveAll(r.map(function(e,t){return Object.assign(e,{index:t+1})}))];case 4:return n.sent(),[2]}})})}},,,,,function(e,t,r){"use strict";var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(o,i){function u(e){try{s(n.next(e))}catch(e){i(e)}}function a(e){try{s(n.throw(e))}catch(e){i(e)}}function s(e){e.done?o(e.value):new r(function(t){t(e.value)}).then(u,a)}s((n=n.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){function r(e){return function(t){return n([e,t])}}function n(r){if(o)throw new TypeError("Generator is already executing.");for(;s;)try{if(o=1,i&&(u=i[2&r[0]?"return":r[0]?"throw":"next"])&&!(u=u.call(i,r[1])).done)return u;switch(i=0,u&&(r=[0,u.value]),r[0]){case 0:case 1:u=r;break;case 4:return s.label++,{value:r[1],done:!1};case 5:s.label++,i=r[1],r=[0];continue;case 7:r=s.ops.pop(),s.trys.pop();continue;default:if(u=s.trys,!(u=u.length>0&&u[u.length-1])&&(6===r[0]||2===r[0])){s=0;continue}if(3===r[0]&&(!u||r[1]>u[0]&&r[1]<u[3])){s.label=r[1];break}if(6===r[0]&&s.label<u[1]){s.label=u[1],u=r;break}if(u&&s.label<u[2]){s.label=u[2],s.ops.push(r);break}u[2]&&s.ops.pop(),s.trys.pop();continue}r=t.call(e,s)}catch(e){r=[6,e],i=0}finally{o=u=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}var o,i,u,a,s={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return a={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a},i=this;Object.defineProperty(t,"__esModule",{value:!0});var u=r(10),a=r(1),s=r(0),c=r(14),l=new s.Store(a.DEFAULT_DATABASE);u.option("-a, --all","remove all tasks").parse(process.argv);var f=u.all||!1,h=u.args&&u.args.length&&u.args[0];!function(){n(i,void 0,void 0,function(){var e;return o(this,function(t){switch(t.label){case 0:return f?[4,l.removeAll()]:[3,2];case 1:return t.sent(),[2,console.log("All tasks have been deleted.\n")];case 2:return h?[4,l.findOne({index:+h})]:[2,console.log("commander [todo rm] need task id, like: [todo rm 1].\n")];case 3:return e=t.sent(),e&&e._id?[4,c.removeAndRearrangeTask(e._id)]:[2,console.log("not found task "+h+"!\n")];case 4:return t.sent(),console.log("TASK "+h+" has been deleted.\n"),[2]}})})}()}]);