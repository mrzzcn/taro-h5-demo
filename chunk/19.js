(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"49":function(t,e,n){"use strict";n.r(e),n.d(e,"taro_audio_core",(function(){return i}));var o=n(20),i=function(){function Audio(t){Object(o.g)(this,t),this.controls=!0,this.autoplay=!1,this.loop=!1,this.muted=!1,this.onError=Object(o.d)(this,"error",7),this.onPlay=Object(o.d)(this,"play",7),this.onPause=Object(o.d)(this,"pause",7),this.onTimeUpdate=Object(o.d)(this,"timeupdate",7),this.onEnded=Object(o.d)(this,"ended",7)}return Audio.prototype.bindevent=function(){var t=this;this.audio.addEventListener("timeupdate",(function(e){t.onTimeUpdate.emit({"duration":e.srcElement.duration,"currentTime":e.srcElement.duration})})),this.audio.addEventListener("ended",(function(){t.onEnded.emit()})),this.audio.addEventListener("play",(function(){t.onPlay.emit()})),this.audio.addEventListener("pause",(function(e){t.onPause.emit(e)})),this.audio.addEventListener("error",(function(e){var n;t.onError.emit({"errMsg":null===(n=e.srcElement.error)||void 0===n?void 0:n.code})}))},Audio.prototype.componentDidLoad=function(){this.bindevent()},Audio.prototype.render=function(){var t=this,e=this,n=e.src,i=e.controls,d=e.autoplay,r=e.loop,u=e.muted;return Object(o.f)("audio",{"src":n,"controls":i,"autoplay":d,"loop":r,"muted":u,"ref":function(e){t.audio=e}})},Object.defineProperty(Audio,"style",{"get":function(){return"audio{max-width:100%;outline:none}"},"enumerable":!0,"configurable":!0}),Audio}()}}]);