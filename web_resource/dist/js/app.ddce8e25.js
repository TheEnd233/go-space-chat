(function(t){function e(e){for(var r,a,s=e[0],u=e[1],l=e[2],d=0,g=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&g.push(n[a][0]),n[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);p&&p(e);while(g.length)g.shift()();return i.push.apply(i,l||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],r=!0,s=1;s<o.length;s++){var u=o[s];0!==n[u]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=o[0]))}return t}var r={},n={app:0},i=[];function a(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=r,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(o,r,function(e){return t[e]}.bind(null,r));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var p=u;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var r=o("85ec"),n=o.n(r);n.a},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var r=o("2b0e"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("Donghua")],1)},i=[],a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("canvas",{attrs:{id:"test"}})},s=[],u=(o("cb29"),o("b0c0"),o("d3b7"),o("25f0"),o("498a"),o("8513"),o("9d58"),null),l=null,p=[],d=200,g={x:0,y:0,z:10},c=3,f={up:87,down:83,left:65,right:68,talk:32,send:13},h={x:0,y:0},b={x:{min:0,max:2e3},y:{min:0,max:2e3},z:{min:0,max:10}},y=2,x={up:!1,down:!1,left:!1,right:!1},m=[.5,0,0],S=!0,v=0,w=0,R={x:0,y:0},M={x:0,y:0},F=null,_=!1,q=null,E=null,k={x:0,y:0,e_x:0,e_y:0,r_x:0,r_y:0,bot_id:"",name:"",gender:0},z={},B=!1,P={x:0,y:0},W={},O={},A=document.createElement("div");function C(){l=document.getElementById("test"),l.width=window.innerWidth,l.height=window.innerHeight,u=l.getContext("2d"),u.shadowColor="white",u.shadowBlur=10,h={x:l.width/2,y:l.height/2},g.x=l.width/2,g.y=l.height/2,b.x.max=l.width,b.y.max=l.height,p=T(),k.bot_id=Math.random().toString(36).substr(2),I()}function D(){u.clearRect(0,0,l.width,l.height),u.fillStyle="rgb(20,7,34)",u.fillRect(0,0,l.width,l.height),L(),p=N(p,m),G(u,p),st(),k.x=g.x,k.y=g.y,dt(),et(),window.requestAnimationFrame(D)}function I(){setInterval((function(){S&&(m=[Math.random()-.5,Math.random()-.5,0])}),5e3)}function L(){v&&(m=[Math.random()-.5,Math.random()-.5,0],v=0)}function T(){for(var t=b.x.max-b.x.min,e=b.y.max-b.y.min,o=[],r=0;r<d;r++){var n=j(R.x+t,R.x),i=j(R.y+e,R.y),a=j(b.z.max,b.z.min),s=X(a),u=Y(a);o.push({x:n,y:i,z:a,c:s,s:u})}return o.sort((function(t,e){return t.z-e.z})),o}function N(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[0,0,0];for(var o in t){var r=t[o];r.x+=e[0],r.y+=e[1],r.z+=e[2],r.x>l.width?r.x-=l.width:r.x<0&&(r.x+=l.width),r.y>l.height?r.y-=l.height:r.y<0&&(r.y+=l.height),t[o]=r}return t}function j(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Math.floor(Math.random()*(t-e))+e}function X(t){var e=Math.floor(155*t/(b.z.max-b.z.min))+100;return"rgb("+e+","+e+","+e+")"}function Y(t){return t*c/g.z}function G(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];for(var o in e){var r=H(e[o].x,e[o].y,e[o].z,e[o].c,e[o].s);(r.x<l.width||r.y<l.height)&&$(t,r.x,r.y,r.c,r.s)}}function H(t,e,o,r,n){var i={x:(t-g.x)*g.z/(g.z-o)+g.x,y:(e-g.y)*g.z/(g.z-o)+g.y,c:r,s:n};return i}function $(t,e,o,r,n){t.beginPath(),t.arc(e,o,n,0,2*Math.PI),t.fillStyle=r,t.fill()}function J(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.width/2,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l.height/2;u.beginPath(),t+=5,e+=5,u.arc(t,e,8,0,2*Math.PI),k.gender===proto.botStatusRequest.gender_type.WOMAN?u.fillStyle="rgb(255,20,147)":u.fillStyle="rgb(0,191,255)",u.fill(),u.beginPath();var o=V(t,e,8);k.e_x=o[0],k.e_y=o[1],u.arc(o[0],o[1],4,0,2*Math.PI),u.fillStyle="rgb(255,255,255)",u.fill(),u.font="12px Arial",k.gender===proto.botStatusRequest.gender_type.WOMAN?u.fillStyle="rgb(255,20,147)":u.fillStyle="rgb(0,191,255)",u.fillText(k.name,t-8,e+20)}function U(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.width/2,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l.height/2,o=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,n=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0;u.beginPath(),t+=5,e+=5,u.arc(t,e,8,0,2*Math.PI),i===proto.botStatusRequest.gender_type.WOMAN?u.fillStyle="rgb(255,20,147)":u.fillStyle="rgb(0,191,255)",u.fill(),u.beginPath(),u.arc(o,r,4,0,2*Math.PI),u.fillStyle="rgb(255,255,255)",u.fill(),u.font="12px Arial",i===proto.botStatusRequest.gender_type.WOMAN?u.fillStyle="rgb(255,20,147)":u.fillStyle="rgb(0,191,255)",u.fillText(n,t-8,e+20)}function V(t,e,o){var r=5,n=(t-M.x)*(o-r)/Math.sqrt(Math.pow(t-M.x,2)+Math.pow(e-M.y,2)),i=(e-M.y)*(o-r)/Math.sqrt(Math.pow(t-M.x,2)+Math.pow(e-M.y,2));x.up?(n=0,i=o-r):x.down&&(n=0,i=-(o-r)),x.left?(n=o-r,i=0):x.right&&(n=-(o-r),i=0);var a=Math.sqrt(Math.pow(o-r,2)/2);return x.up&&x.left?(n=a,i=a):x.up&&x.right?(n=-a,i=a):x.down&&x.left?(n=a,i=-a):x.down&&x.right&&(n=-a,i=-a),[t-n,e-i]}function K(){window.addEventListener("keydown",(function(t){if(_&&t.keyCode!=f.send)return!1;switch(t.keyCode){case f.up:x.up=!0,x.down=!1;break;case f.down:x.up=!1,x.down=!0;break;case f.right:x.right=!0,x.left=!1;break;case f.left:x.left=!0,x.right=!1;break;case f.talk:Q();break;case f.send:Z();break}})),window.addEventListener("keyup",(function(t){switch(t.keyCode){case f.up:x.up=!1;break;case f.down:x.down=!1;break;case f.right:x.right=!1;break;case f.left:x.left=!1;break}t.keyCode!=f.up&&t.keyCode!=f.down&&t.keyCode!=f.left&&t.keyCode!=f.right||(S=!0,v=1)})),window.addEventListener("mousemove",(function(t){M={x:t.x,y:t.y}})),document.body.addEventListener("touchmove",(function(t){t.preventDefault()}))}function Q(){if(null!=F)return!1;_=!0,F=document.createElement("input"),F.setAttribute("style","position:fixed;left:"+g.x+"px;top:"+(g.y+30)+"px;background-color:rgba(200,200,200,0.2);border:1px solid rgba(200,200,200,0.2);border-radius:10px;padding:5px;outline:none;width:150px;color:white;font-size:12px"),F.setAttribute("maxlength",50),document.body.appendChild(F),F.addEventListener("focus",(function(){})),F.addEventListener("blur",(function(){document.body.removeChild(F),F=null,_=!1})),F.focus()}function Z(){if(!F||!F.value)return!1;var t=F.value;F.blur(),null==q&&(q=document.createElement("div"),q.setAttribute("style","position:fixed;left:"+g.x+"px;bottom:"+(l.height-g.y+20)+"px;color:white;font-size:12px"),document.body.appendChild(q)),tt(t),dt(t)}function tt(t){var e=document.createElement("p");e.innerHTML="<span style='padding:0 5px;margin:5px 0;display:inline-block;background-color:rgba(200,200,200,0.2);border:1px solid rgba(200,200,200,0.2);border-radius:10px;'>"+t+"</span>",q.appendChild(e),setTimeout((function(){q.removeChild(e)}),8e3)}function et(){for(var t in W)t!==k.bot_id&&ot(W[t].r_x+W[t].x-P.x,W[t].r_y+W[t].y-P.y)&&(U(W[t].r_x+W[t].x-P.x,W[t].r_y+W[t].y-P.y,W[t].r_x+W[t].e_x-P.x,W[t].r_y+W[t].e_y-P.y,W[t].name,W[t].gender),rt(t),W[t].msg&&(nt(t,W[t].msg),W[t].msg=""),it(t))}function ot(t,e){return!(t<0)&&(!(e<0)&&(!(t>l.width)&&!(e>l.height)))}function rt(t){O[t]||(O[t]=document.createElement("div"),O[t].setAttribute("style","position:fixed;left:"+(W[t].x+W[t].r_x-P.x)+"px;bottom:"+(l.height-(W[t].y+W[t].r_y-P.y)+20)+"px;color:white;font-size:12px"),document.body.appendChild(O[t]))}function nt(t,e){W[t];var o=O[t],r=document.createElement("p");r.innerHTML="<span style='padding:0 5px;margin:5px 0;display:inline-block;background-color:rgba(200,200,200,0.2);border:1px solid rgba(200,200,200,0.2);border-radius:10px;'>"+e+"</span>",o.appendChild(r),setTimeout((function(){o.removeChild(r)}),15e3)}function it(t){var e=W[t],o=O[t];o.setAttribute("style","position:fixed;left:"+(e.x+e.r_x-P.x)+"px;bottom:"+(l.height-(e.y+e.r_y-P.y)+20)+"px;color:white;font-size:12px")}function at(){null!=q&&q.setAttribute("style","position:fixed;left:"+g.x+"px;bottom:"+(l.height-g.y+20)+"px;color:white;font-size:12px")}function st(){var t=h.y,e=h.x,o=0,r=0;if(x.up?(t=h.y-y,r=-y):x.down&&(t=h.y+y,r=y),x.left?(e=h.x-y,o=-y):x.right&&(e=h.x+y,o=y),o||r){ut("far");var n=100;lt(e,t,l.width/2,l.height/2)>=n?(S=!1,v=0,m=[-o,-r,0],P.x+=o,P.y+=r,k.r_x=P.x,k.r_y=P.y):(h.y=t,h.x=e)}else ut("near");g.x=h.x,g.y=h.y,at(),J(h.x,h.y)}function ut(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"far",e=.1,o=5,r=1;"far"==t?w<Math.PI&&(w+=e,g.z=g.z+r*Math.sin(w)/o):"near"==t&&w>0&&(w-=e,g.z=g.z-r*Math.sin(w)/o)}function lt(t,e,o,r){return Math.sqrt(Math.pow(t-o,2)+Math.pow(e-r,2))}function pt(){E=new WebSocket("ws://"+location.hostname+":9000/ws"),E.binaryType="arraybuffer",E.onopen=function(){console.info("ws open"),B=!0},E.onmessage=function(t){var e=proto.botStatusResponse.deserializeBinary(t.data),o=e.getBotStatusList();for(var r in o)o[r].getStatus()!==proto.botStatusRequest.status_type.CLOSE?(W[o[r].getBotId()]={x:o[r].getX(),y:o[r].getY(),e_x:o[r].getEyeX(),e_y:o[r].getEyeY(),r_x:o[r].getRealX(),r_y:o[r].getRealY(),msg:o[r].getMsg(),name:o[r].getName(),gender:o[r].getGender()},yt(o[r].getName(),o[r].getMsg())):delete W[o[r].getBotId()]},E.onclose=function(){console.info("ws close")}}function dt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(!B)return!1;var e=!1;if(z)for(var o in k)k[o]!==z[o]&&(e=!0);else e=!0;if(e||t){var r=new proto.botStatusRequest;r.setBotId(k.bot_id),r.setX(g.x),r.setY(g.y),r.setEyeX(k.e_x),r.setEyeY(k.e_y),r.setRealX(P.x),r.setRealY(P.y),r.setMsg(t),r.setName(k.name),r.setGender(k.gender),E.send(r.serializeBinary()),Object.assign(z,k),yt(k.name,t)}}function gt(){var t=localStorage.getItem("star_name");k.name=null!==t&&""!==t?t:"guest"+Math.random().toString(36);var e=localStorage.getItem("star_gender");k.gender=null!==e?parseInt(e):proto.botStatusRequest.gender_type.MAN}function ct(){var t=document.createElement("div");t.setAttribute("style","position:fixed;text-align:center;left:5px;top:50px;width:30px;height:200px;background-color:rgba(0,0,0,0.5);border:1px solid rgba(0,0,0,0.5);border-radius:5px;"),document.body.appendChild(t);var e=ft(t,"image/human.png","点我修改昵称"),o=null;e.addEventListener("click",(function(t){if(o)return!1;o=document.createElement("input"),o.setAttribute("style","position:fixed;left:50px;top:50px;background-color:white;border:1px solid white;border-radius:5px;padding:5px;outline:none;width:150px;font-size:12px"),o.setAttribute("placeholder","请输入昵称，长度10"),o.setAttribute("maxlength",10),document.body.appendChild(o),o.focus(),o.addEventListener("blur",(function(){""!==o.value&&(k.name=o.value,localStorage.setItem("star_name",k.name)),document.body.removeChild(o),o=null}))}));var r=ft(t,"image/m.png","男生");r.addEventListener("click",(function(t){k.gender=proto.botStatusRequest.gender_type.MAN,localStorage.setItem("star_gender",k.gender)}));var n=ft(t,"image/w.png","女生");n.addEventListener("click",(function(t){k.gender=proto.botStatusRequest.gender_type.WOMAN,localStorage.setItem("star_gender",k.gender)}))}function ft(t,e){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=document.createElement("img");return r.setAttribute("style","width:25px;height:25px;border:1px solid rgba(200,200,0,0.5);color:white;cursor:default;border-radius:5px;"),r.setAttribute("src",e),r.setAttribute("title",o),t.appendChild(r),r}function ht(){var t=document.createElement("div");t.setAttribute("style","position:fixed;left:5px;bottom:0px;width:500px;height:50;color:rgba(200,200,200,0.8);cursor:default;border-radius:5px;"),t.innerHTML="<p>欢迎进入游戏</p><p>概念来自EVE游戏，以及蝌蚪聊天室，不过该游戏代码都是全新实现的</p><p>操作方式：</p><p>1. W A S D进行上下左右</p><p>2. 空格开启聊天框，回车发送消息</p><p>3. 左上角修改昵称，点击空白修改成功</p><p>作者GIT：<a href='https://github.com/sunshinev/go-space-chat' style='color:rgba(200,200,200,0.8)'>https://github.com/sunshinev/go-space-chat</a></p><p>前端 Vue+canvas+websocket+protobuf</p><p>后端 Golang+websocket+protobuf+goroutine</p>",document.body.appendChild(t)}function bt(){A.setAttribute("style","position:fixed;right:5px;bottom:0px;width:400px;height:70%;color:rgba(200,200,200,0.8);border:1px solid rgba(200,200,200,0.8);cursor:default;overflow-y:auto;border-radius:5px;"),document.body.appendChild(A)}function yt(t,e){if(""!==str.trim(e)){var o=document.createElement("div");o.setAttribute("style","margin:2px;"),o.innerHTML="<div><span style='color: darkgreen'>"+t+"：</span>"+e,A.appendChild(o),A.scrollTop=A.scrollHeight}}var xt=function(){ht(),bt(),C(),K(),ct(),gt(),pt(),window.requestAnimationFrame(D)},mt={data:function(){return{}},methods:{},mounted:function(){xt()}},St=mt,vt=o("2877"),wt=Object(vt["a"])(St,a,s,!1,null,null,null),Rt=wt.exports,Mt={name:"App",components:{Donghua:Rt}},Ft=Mt,_t=(o("034f"),Object(vt["a"])(Ft,n,i,!1,null,null,null)),qt=_t.exports;new r["a"]({render:function(t){return t(qt)}}).$mount("#app")},"85ec":function(t,e,o){},"9d58":function(t,e,o){var r=o("8513"),n=r,i=Function("return this")();n.exportSymbol("proto.botStatusRequest",null,i),n.exportSymbol("proto.botStatusRequest.gender_type",null,i),n.exportSymbol("proto.botStatusRequest.status_type",null,i),n.exportSymbol("proto.botStatusResponse",null,i),proto.botStatusRequest=function(t){r.Message.initialize(this,t,0,-1,null,null)},n.inherits(proto.botStatusRequest,r.Message),n.DEBUG&&!COMPILED&&(proto.botStatusRequest.displayName="proto.botStatusRequest"),proto.botStatusResponse=function(t){r.Message.initialize(this,t,0,-1,proto.botStatusResponse.repeatedFields_,null)},n.inherits(proto.botStatusResponse,r.Message),n.DEBUG&&!COMPILED&&(proto.botStatusResponse.displayName="proto.botStatusResponse"),r.Message.GENERATE_TO_OBJECT&&(proto.botStatusRequest.prototype.toObject=function(t){return proto.botStatusRequest.toObject(t,this)},proto.botStatusRequest.toObject=function(t,e){var o={botId:r.Message.getFieldWithDefault(e,1,""),x:r.Message.getFloatingPointFieldWithDefault(e,2,0),y:r.Message.getFloatingPointFieldWithDefault(e,3,0),eyeX:r.Message.getFloatingPointFieldWithDefault(e,4,0),eyeY:r.Message.getFloatingPointFieldWithDefault(e,5,0),msg:r.Message.getFieldWithDefault(e,6,""),realX:r.Message.getFloatingPointFieldWithDefault(e,7,0),realY:r.Message.getFloatingPointFieldWithDefault(e,8,0),status:r.Message.getFieldWithDefault(e,9,0),name:r.Message.getFieldWithDefault(e,10,""),gender:r.Message.getFieldWithDefault(e,11,0)};return t&&(o.$jspbMessageInstance=e),o}),proto.botStatusRequest.deserializeBinary=function(t){var e=new r.BinaryReader(t),o=new proto.botStatusRequest;return proto.botStatusRequest.deserializeBinaryFromReader(o,e)},proto.botStatusRequest.deserializeBinaryFromReader=function(t,e){while(e.nextField()){if(e.isEndGroup())break;var o=e.getFieldNumber();switch(o){case 1:var r=e.readString();t.setBotId(r);break;case 2:r=e.readFloat();t.setX(r);break;case 3:r=e.readFloat();t.setY(r);break;case 4:r=e.readFloat();t.setEyeX(r);break;case 5:r=e.readFloat();t.setEyeY(r);break;case 6:r=e.readString();t.setMsg(r);break;case 7:r=e.readFloat();t.setRealX(r);break;case 8:r=e.readFloat();t.setRealY(r);break;case 9:r=e.readEnum();t.setStatus(r);break;case 10:r=e.readString();t.setName(r);break;case 11:r=e.readEnum();t.setGender(r);break;default:e.skipField();break}}return t},proto.botStatusRequest.prototype.serializeBinary=function(){var t=new r.BinaryWriter;return proto.botStatusRequest.serializeBinaryToWriter(this,t),t.getResultBuffer()},proto.botStatusRequest.serializeBinaryToWriter=function(t,e){var o=void 0;o=t.getBotId(),o.length>0&&e.writeString(1,o),o=t.getX(),0!==o&&e.writeFloat(2,o),o=t.getY(),0!==o&&e.writeFloat(3,o),o=t.getEyeX(),0!==o&&e.writeFloat(4,o),o=t.getEyeY(),0!==o&&e.writeFloat(5,o),o=t.getMsg(),o.length>0&&e.writeString(6,o),o=t.getRealX(),0!==o&&e.writeFloat(7,o),o=t.getRealY(),0!==o&&e.writeFloat(8,o),o=t.getStatus(),0!==o&&e.writeEnum(9,o),o=t.getName(),o.length>0&&e.writeString(10,o),o=t.getGender(),0!==o&&e.writeEnum(11,o)},proto.botStatusRequest.status_type={WAITING:0,CONNECTING:1,CLOSE:2},proto.botStatusRequest.gender_type={MAN:0,WOMAN:1},proto.botStatusRequest.prototype.getBotId=function(){return r.Message.getFieldWithDefault(this,1,"")},proto.botStatusRequest.prototype.setBotId=function(t){return r.Message.setProto3StringField(this,1,t)},proto.botStatusRequest.prototype.getX=function(){return r.Message.getFloatingPointFieldWithDefault(this,2,0)},proto.botStatusRequest.prototype.setX=function(t){return r.Message.setProto3FloatField(this,2,t)},proto.botStatusRequest.prototype.getY=function(){return r.Message.getFloatingPointFieldWithDefault(this,3,0)},proto.botStatusRequest.prototype.setY=function(t){return r.Message.setProto3FloatField(this,3,t)},proto.botStatusRequest.prototype.getEyeX=function(){return r.Message.getFloatingPointFieldWithDefault(this,4,0)},proto.botStatusRequest.prototype.setEyeX=function(t){return r.Message.setProto3FloatField(this,4,t)},proto.botStatusRequest.prototype.getEyeY=function(){return r.Message.getFloatingPointFieldWithDefault(this,5,0)},proto.botStatusRequest.prototype.setEyeY=function(t){return r.Message.setProto3FloatField(this,5,t)},proto.botStatusRequest.prototype.getMsg=function(){return r.Message.getFieldWithDefault(this,6,"")},proto.botStatusRequest.prototype.setMsg=function(t){return r.Message.setProto3StringField(this,6,t)},proto.botStatusRequest.prototype.getRealX=function(){return r.Message.getFloatingPointFieldWithDefault(this,7,0)},proto.botStatusRequest.prototype.setRealX=function(t){return r.Message.setProto3FloatField(this,7,t)},proto.botStatusRequest.prototype.getRealY=function(){return r.Message.getFloatingPointFieldWithDefault(this,8,0)},proto.botStatusRequest.prototype.setRealY=function(t){return r.Message.setProto3FloatField(this,8,t)},proto.botStatusRequest.prototype.getStatus=function(){return r.Message.getFieldWithDefault(this,9,0)},proto.botStatusRequest.prototype.setStatus=function(t){return r.Message.setProto3EnumField(this,9,t)},proto.botStatusRequest.prototype.getName=function(){return r.Message.getFieldWithDefault(this,10,"")},proto.botStatusRequest.prototype.setName=function(t){return r.Message.setProto3StringField(this,10,t)},proto.botStatusRequest.prototype.getGender=function(){return r.Message.getFieldWithDefault(this,11,0)},proto.botStatusRequest.prototype.setGender=function(t){return r.Message.setProto3EnumField(this,11,t)},proto.botStatusResponse.repeatedFields_=[1],r.Message.GENERATE_TO_OBJECT&&(proto.botStatusResponse.prototype.toObject=function(t){return proto.botStatusResponse.toObject(t,this)},proto.botStatusResponse.toObject=function(t,e){var o={botStatusList:r.Message.toObjectList(e.getBotStatusList(),proto.botStatusRequest.toObject,t)};return t&&(o.$jspbMessageInstance=e),o}),proto.botStatusResponse.deserializeBinary=function(t){var e=new r.BinaryReader(t),o=new proto.botStatusResponse;return proto.botStatusResponse.deserializeBinaryFromReader(o,e)},proto.botStatusResponse.deserializeBinaryFromReader=function(t,e){while(e.nextField()){if(e.isEndGroup())break;var o=e.getFieldNumber();switch(o){case 1:var r=new proto.botStatusRequest;e.readMessage(r,proto.botStatusRequest.deserializeBinaryFromReader),t.addBotStatus(r);break;default:e.skipField();break}}return t},proto.botStatusResponse.prototype.serializeBinary=function(){var t=new r.BinaryWriter;return proto.botStatusResponse.serializeBinaryToWriter(this,t),t.getResultBuffer()},proto.botStatusResponse.serializeBinaryToWriter=function(t,e){var o=void 0;o=t.getBotStatusList(),o.length>0&&e.writeRepeatedMessage(1,o,proto.botStatusRequest.serializeBinaryToWriter)},proto.botStatusResponse.prototype.getBotStatusList=function(){return r.Message.getRepeatedWrapperField(this,proto.botStatusRequest,1)},proto.botStatusResponse.prototype.setBotStatusList=function(t){return r.Message.setRepeatedWrapperField(this,1,t)},proto.botStatusResponse.prototype.addBotStatus=function(t,e){return r.Message.addToRepeatedWrapperField(this,1,t,proto.botStatusRequest,e)},proto.botStatusResponse.prototype.clearBotStatusList=function(){return this.setBotStatusList([])},n.object.extend(e,proto)}});
//# sourceMappingURL=app.ddce8e25.js.map