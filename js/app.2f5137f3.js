(function(e){function t(t){for(var n,i,s=t[0],l=t[1],c=t[2],u=0,m=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&m.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(m.length)m.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={app:0},o=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"015c":function(e,t,a){"use strict";var n=a("4a06"),r=a.n(n);r.a},"034f":function(e,t,a){"use strict";var n=a("85ec"),r=a.n(n);r.a},"1e5a":function(e,t,a){e.exports=a.p+"img/images_common_card_01a.8ffb1099.png"},2876:function(e,t,a){e.exports=a.p+"img/images_common_card_06a.1bf23fb5.png"},"31ae":function(e,t,a){e.exports=a.p+"img/images_common_card_04a.d0cfc5f3.png"},"4a06":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("link",{attrs:{rel:"stylesheet",href:"//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons"}}),a("AppTitle",{attrs:{titleText:e.titleText}}),a("div",{staticClass:"viewport"},[a("md-toolbar",{attrs:{"md-elevation":1}},[a("span",{staticClass:"md-title"},[e._v("にゅうりょく")])]),a("md-list",{staticClass:"md-double-line"},[a("md-list-item",[a("md-field",[a("label",{attrs:{for:"backgroundImage"}},[e._v("背景イメージ")]),a("md-select",{attrs:{name:"baseImageTitle"},on:{"md-selected":function(t){return e.updateBaseImageTitle(e.baseImageTitle)}},model:{value:e.baseImageTitle,callback:function(t){e.baseImageTitle=t},expression:"baseImageTitle"}},[a("md-option",{attrs:{value:"ヘリオス"}},[e._v("ヘリオス")]),a("md-option",{attrs:{value:"アリーチェ"}},[e._v("アリーチェ")]),a("md-option",{attrs:{value:"エシャル"}},[e._v("エシャル")]),a("md-option",{attrs:{value:"セレステ"}},[e._v("セレステ")]),a("md-option",{attrs:{value:"アマツ"}},[e._v("アマツ")]),a("md-option",{attrs:{value:"つかむ"}},[e._v("つかむ")])],1)],1)],1),a("md-list-item",[a("md-field",[a("label",[e._v("名前")]),a("md-input",{attrs:{placeholder:"名前"},model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}})],1)],1),a("md-list-item",[a("md-field",[a("label",[e._v("フレンドID")]),a("md-input",{attrs:{placeholder:"フレンドID"},model:{value:e.friendID,callback:function(t){e.friendID=t},expression:"friendID"}})],1)],1),a("md-list-item",[a("md-field",[a("label",[e._v("キャラクタ名")]),a("md-input",{attrs:{placeholder:"キャラクタ名"},model:{value:e.charactorName,callback:function(t){e.charactorName=t},expression:"charactorName"}})],1)],1),a("md-list-item",[a("md-field",[a("label",[e._v("メッセージ")]),a("md-textarea",{attrs:{placeholder:"メッセージ(３行まで)"},model:{value:e.messageText,callback:function(t){e.messageText=t},expression:"messageText"}})],1)],1),a("md-list-item",[a("label",[e._v("文字色変更")]),a("compact-picker",{on:{input:e.updateTextColor},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}})],1)],1)],1),a("div",{staticClass:"viewport"},[a("md-toolbar",{attrs:{"md-elevation":1}},[a("span",{staticClass:"md-title"},[e._v("プレビュー")])]),a("md-list",{staticClass:"md-double-line"},[a("md-list-item",[a("ProfileCanvas",{attrs:{height:650,width:1075,userPhotoStartX:e.userPhotoStartX,userPhotoStartY:e.userPhotoStartY,fontSize:parseInt(e.fontSize),textFont:e.textFont,textColor:e.textColor,baseImage:e.baseImage,userName:e.userName,friendID:e.friendID,twitterName:e.twitterName,charactorName:e.charactorName,messageText:e.messageText,profileImage:e.profileImage},on:{updated:function(t){return e.updateDataURL(t)}}})],1),a("Upload",{on:{updated:function(t){return e.updateProfileImage(t)}}}),a("md-card-header",[a("div",{staticClass:"md-title"},[e._v("画像位置調整")])]),a("md-card-content",[a("md-button",{staticClass:"md-raised md-primary",on:{click:function(t){return e.updateProfilePosX(10)}}},[e._v("→")]),a("md-button",{staticClass:"md-raised md-primary",on:{click:function(t){return e.updateProfilePosX(-10)}}},[e._v("←")]),a("md-button",{staticClass:"md-raised md-primary",on:{click:function(t){return e.updateProfilePosY(10)}}},[e._v("↓")]),a("md-button",{staticClass:"md-raised md-primary",on:{click:function(t){return e.updateProfilePosY(-10)}}},[e._v("↑")]),a("md-button",{staticClass:"md-raised md-primary",on:{click:function(t){return e.resetProfilePos()}}},[e._v("reset")])],1),a("DownloadButton",{attrs:{labelText:e.dlButtonLabel,dataURL:e.dataURL}})],1)],1),e._m(0)],1)},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a",{attrs:{href:"https://github.com/chainchroprof/prof7th",target:"_blank"}},[e._v("source code(github)")]),a("br"),a("a",{attrs:{href:"https://twitter.com/datsuns",target:"_blank"}},[e._v("by @datsuns")])])}],i=(a("7db0"),a("b0c0"),a("51de"),a("e094"),a("43f9")),s=a.n(i),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("canvas",{attrs:{id:"cv",height:e.height,width:e.width}}),a("div",{attrs:{hidden:""}},[e._v(" "+e._s(e.textFont)+" "+e._s(e.textColor)+" "+e._s(e.userPhotoStartX)+" "+e._s(e.userPhotoStartY)+" "+e._s(e.baseImage)+" "+e._s(e.userName)+" "+e._s(e.friendID)+" "+e._s(e.twitterName)+" "+e._s(e.charactorName)+" "+e._s(e.messageText)+" "+e._s(e.profileImage)+" ")])])},c=[],d=(a("fb6a"),a("a9e3"),a("d3b7"),a("ac1f"),a("3ca3"),a("5319"),a("1276"),a("5cc6"),a("9a8c"),a("a975"),a("735e"),a("c1ac"),a("d139"),a("3a7b"),a("d5d6"),a("82f8"),a("e91f"),a("60bd"),a("5f96"),a("3280"),a("3fcc"),a("ca91"),a("25a1"),a("cd26"),a("3c5d"),a("2954"),a("649e"),a("219c"),a("170b"),a("b39a"),a("72f7"),a("ddb0"),a("2b3d"),a("96cf"),a("1da1")),u=a("fbd1"),m=a.n(u),f={name:"ProfileCanvas",props:{height:Number,width:Number,userPhotoStartX:Number,userPhotoStartY:Number,textFont:String,textColor:String,baseImage:String,userName:String,friendID:String,twitterName:String,charactorName:String,messageText:String,profileImage:String},mounted:function(){console.log("mounted"),this.draw(),this.emitDataURL()},updated:function(){console.log("updated"),console.log(this.textColor),this.draw(),this.emitDataURL()},methods:{draw:function(){null!=this.profileImage?this.resizeImage(this.profileImage,500,800).then(this.drawBaseImage):this.drawBaseImage(null)},loadImage:function(e){return new Promise((function(t,a){var n=new Image;n.onload=function(){return t(n)},n.onerror=function(e){return a(e)},n.src=e}))},resizeImage:function(e,t,a){var n=this;return console.log("resize start"),new Promise((function(r){m.a.parseMetaData(e,(function(){var o={maxHeight:t,maxWidth:a,canvas:!0};m()(e,function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(a){var o,i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:o=a.toDataURL(e.type),i=n.base64ToBlob(o,e.type),s=window.URL.createObjectURL(i),console.log("resize done"),r(s);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o)}))}))},drawBaseImageMain:function(e){var t=this;console.log("draw"),console.log(this.baseImage),this.loadImage(this.baseImage).then((function(a){e.font=t.fontSize+"px "+t.textFont,e.drawImage(a,0,0),t.writeUserName(e,t.userName),t.writeFriendID(e,t.friendID),t.writeCharactorName(e,t.charactorName),t.writeMessageText(e,t.messageText),t.emitDataURL()})).catch((function(e){console.log("onload error",e)}))},clearImageArea:function(e){var t=e.fillStyle;e.fillStyle="#ffffff",e.fillRect(0,0,this.width,this.height),e.fillStyle=t},drawBaseImage:function(e){console.log("drawBaseImage");var t=document.getElementById("cv"),a=t.getContext("2d");if(this.clearImageArea(a),null==e)this.drawBaseImageMain(a);else{var n=this.userPhotoStartX,r=this.userPhotoStartY;this.drawUserPhoto(a,e,n,r).then(this.drawBaseImageMain)}},writeSimpleText:function(e,t,a,n){var r=e.fillStyle;e.fillStyle=this.textColor,e.fillText(t,a,n),e.fillStyle=r},writeUserName:function(e,t){var a=50,n=730,r=250;e.font=a+"px "+this.textFont,this.writeSimpleText(e,t.slice(0,6),n,r)},writeFriendID:function(e,t){var a=40,n=730,r=340;e.font=a+"px "+this.textFont,this.writeSimpleText(e,t,n,r)},writeCharactorName:function(e,t){var a,n,r;t.length<=6?(n=710,r=430,a=50):(n=530,r=432,a=25),e.font=a+"px "+this.textFont,this.writeSimpleText(e,t,n,r)},writeMessageText:function(e,t){var a=30,n=530,r=[530,565,600],o=16,i=t.split("\n");e.font=a+"px "+this.textFont,i.length>=1&&this.writeSimpleText(e,i[0].slice(0,o),n,r[0]),i.length>=2&&this.writeSimpleText(e,i[1].slice(0,o),n,r[1]),i.length>=3&&this.writeSimpleText(e,i[2].slice(0,o),n,r[2])},drawUserPhoto:function(e,t,a,n){var r=this;return new Promise((function(o){r.loadImage(t).then((function(t){e.drawImage(t,a,n),o(e)})).catch((function(e){console.log("onload error",e)}))}))},drawCheckBox:function(e,t){var a=250,n=815,r=e.fillStyle;e.fillStyle="#ff0000",t&&e.fillText("✔",a,n),e.fillStyle=r},base64ToBlob:function(e,t){for(var a=atob(e.replace(/^.*,/,"")),n=new Uint8Array(a.length),r=0;r<a.length;r++)n[r]=a.charCodeAt(r);return new Blob([n.buffer],{type:t||"image/png"})},emitDataURL:function(){var e=document.getElementById("cv").toDataURL("image/png");this.$emit("updated",e)}}},p=f,g=(a("7600"),a("2877")),h=Object(g["a"])(p,l,c,!1,null,"563b4da8",null),v=h.exports,b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("md-card",[a("md-card-header",[a("div",{staticClass:"md-title"},[e._v("プロフィール画像をUpload")])]),a("md-card-content",[a("md-field",[a("label",[e._v("画像を選択")]),a("md-file",{on:{"md-change":function(t){return e.onFileChange(e.uploadedImage)}},model:{value:e.uploadedImage,callback:function(t){e.uploadedImage=t},expression:"uploadedImage"}})],1)],1)],1)},x=[],_={components:{},data:function(){return{uploadedImage:""}},methods:{onFileChange:function(e){var t=e.target.files||e.dataTransfer.files;this.createImage(t[0])},createImage:function(e){var t=this;console.log(e);var a=new FileReader;a.onload=function(e){t.$emit("updated",e.target.result)},a.readAsDataURL(e)},remove:function(){this.uploadedImage=!1}}},I=_,w=Object(g["a"])(I,b,x,!1,null,null,null),S=w.exports,P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("md-button",{staticClass:"md-raised md-primary",attrs:{type:"button"},on:{click:e.onclick}},[e._v(" "+e._s(e.labelText)+" ")]),a("div",{attrs:{hidden:""}},[e._v(" "+e._s(e.dataURL)+" ")])],1)},T=[],y={name:"DownloadButton",props:{labelText:String,dataURL:String},methods:{onclick:function(){var e=document.createElement("a");e.href=this.dataURL,e.download="image.png",e.click()}}},C=y,N=(a("d709"),Object(g["a"])(C,P,T,!1,null,"36228fb8",null)),k=N.exports,D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("md-content",{staticClass:"md-primary"},[e._v(e._s(e.titleText))])],1)},U=[],R={name:"",props:{titleText:String}},B=R,L=(a("015c"),Object(g["a"])(B,D,U,!1,null,"dbe288f6",null)),O=L.exports,j=a("1e5a"),F=a.n(j),M=a("be08"),X=a.n(M),Y=a("e877"),A=a.n(Y),E=a("31ae"),$=a.n(E),z=a("fe2b"),J=a.n(z),H=a("2876"),W=a.n(H),q=a("c345");n["default"].use(s.a);var G={name:"App",components:{ProfileCanvas:v,Upload:S,DownloadButton:k,AppTitle:O,"compact-picker":q["Compact"]},data:function(){return{titleText:"チェンクロぷろふぃーる",textFont:"Avenir",fontSize:30,userPhotoStartX:45,userPhotoStartY:45,dlButtonLabel:"画像ダウンロード",userName:"",friendID:"",twitterName:"",charactorName:"",messageText:"",baseImage:F.a,baseImageTitle:"ヘリオス",dataURL:"",profileImage:null,textColor:"#000000",colors:{hex:"#000000"},baseImages:[{name:"ヘリオス",img:F.a},{name:"アリーチェ",img:X.a},{name:"エシャル",img:A.a},{name:"セレステ",img:$.a},{name:"アマツ",img:J.a},{name:"つかむ",img:W.a}]}},methods:{updateDataURL:function(e){this.dataURL=e},updateProfileImage:function(e){console.log("updateProfileImage:"+e),this.profileImage=e},updateBaseImage:function(e){var t=this.baseImages.find((function(t){return t.name===e}));console.log("updateBaseImage"),this.baseImage=t.img},updateBaseImageTitle:function(e){var t=this.baseImages.find((function(t){return t.name===e}));this.baseImage=t.img},updateTextColor:function(){this.textColor=this.colors.hex},updateProfilePosX:function(e){this.userPhotoStartX+=e},updateProfilePosY:function(e){this.userPhotoStartY+=e},resetProfilePos:function(){this.userPhotoStartX=45,this.userPhotoStartY=45}}},K=G,Q=(a("034f"),Object(g["a"])(K,r,o,!1,null,null,null)),V=Q.exports;n["default"].config.productionTip=!1,new n["default"]({render:function(e){return e(V)}}).$mount("#app")},7600:function(e,t,a){"use strict";var n=a("b413"),r=a.n(n);r.a},"85ec":function(e,t,a){},8845:function(e,t,a){},b413:function(e,t,a){},be08:function(e,t,a){e.exports=a.p+"img/images_common_card_02a.89ef213f.png"},d709:function(e,t,a){"use strict";var n=a("8845"),r=a.n(n);r.a},e877:function(e,t,a){e.exports=a.p+"img/images_common_card_03a.fb140969.png"},fe2b:function(e,t,a){e.exports=a.p+"img/images_common_card_05a.d4147146.png"}});
//# sourceMappingURL=app.2f5137f3.js.map