(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"57":function(e,t,n){"use strict";n.r(t),n.d(t,"taro_form_core",(function(){return r}));var o=n(20),r=function(){function Form(e){Object(o.g)(this,e),this.value={},this.onSubmit=Object(o.d)(this,"submit",7)}return Form.prototype.onButtonSubmit=function(e){e.stopPropagation(),this.value=this.getFormValue(),this.onSubmit.emit({"value":this.value})},Form.prototype.onButtonReset=function(e){e.stopPropagation(),this.form.reset()},Form.prototype.componentDidLoad=function(){var e=this;this.value=this.getFormValue(),Object.defineProperty(this.el,"value",{"get":function(){return e.value},"configurable":!0})},Form.prototype.getFormValue=function(){for(var e=this.el,t=[],n=e.getElementsByTagName("input"),o=0;o<n.length;o++)t.push(n[o]);var r={},a={};t.forEach((function(e){-1===e.className.indexOf("weui-switch")?"radio"!==e.type?"checkbox"!==e.type?r[e.name]=e.value:e.checked?a[e.name]?r[e.name].push(e.value):(a[e.name]=!0,r[e.name]=[e.value]):a[e.name]||(r[e.name]=[]):e.checked?(a[e.name]=!0,r[e.name]=e.value):a[e.name]||(r[e.name]=""):r[e.name]=e.checked}));for(var u=e.getElementsByTagName("textarea"),i=[],c=0;c<u.length;c++)i.push(u[c]);return i.forEach((function(e){r[e.name]=e.value})),r},Form.prototype.render=function(){var e=this;return Object(o.f)("form",{"ref":function(t){t&&(e.form=t)}},Object(o.f)("slot",null))},Object.defineProperty(Form.prototype,"el",{"get":function(){return Object(o.e)(this)},"enumerable":!0,"configurable":!0}),Form}()}}]);