/*! Built with http://stenciljs.com */

window['ionic-site-components'].loadStyles("ionic-newsletter-signup","ionic-newsletter-signup form{position:relative;display:flex;border-collapse:separate;width:100%}\@media (max-width:991px){ionic-newsletter-signup form{max-width:calc(100% - 340px)}}\@media (max-width:767px){ionic-newsletter-signup form{float:none;max-width:100%;margin-top:15px}}ionic-newsletter-signup form.dark input{color:#fff}ionic-newsletter-signup form.dark input::placeholder{color:#bbceef}ionic-newsletter-signup form.dark ionic-button button{font-weight:500}ionic-newsletter-signup input{border:none;background:rgba(255,255,255,.2);border-radius:4px 0 0 4px;font-size:13px;color:#24282e;box-shadow:none;font-weight:500;height:40px;outline:0;flex-grow:1;padding:1px 16px 0;transition:.2s background,.2s box-shadow}ionic-newsletter-signup input:hover{box-shadow:0 1px 3px rgba(0,0,0,.15)}ionic-newsletter-signup input:focus{box-shadow:none;background:rgba(255,255,255,.25)}ionic-newsletter-signup input::placeholder{padding-left:0;color:#a1a9b6}ionic-newsletter-signup ionic-button button{border-top-left-radius:0;border-bottom-left-radius:0;font-weight:400;font-size:14px;padding:11px 13px 10px}\nionic-newsletter-signup.hydrated{visibility:inherit}");
window["ionic-site-components"].loadComponents("h9fi1ysk",function(e,t,i,s){"use strict";class a{constructor(){this.placeholder="Email address",this.buttonText="Subscribe",this.darkMode=!1,this.isLoading=!1,this.hasSubmitted=!1,this.email=null}handleEmailChange(e){this.email=e.target.value}handleSubmit(e){e.preventDefault(),this.isLoading=!0;var t=new XMLHttpRequest;t.open("POST","/api/v1/newsletter"),t.setRequestHeader("Content-Type","application/json;charset=UTF-8"),t.onreadystatechange=(()=>{if(console.log(t),4===t.readyState&&200===t.status){this.isLoading=!1;var e=JSON.parse(t.responseText);this.hasSubmitted=e.ok}}),t.send(JSON.stringify({email:this.email}))}render(){return t("form",{onSubmit:e=>this.handleSubmit(e),class:this.darkMode?"dark":null},t("input",{name:"email",type:"email",value:this.email,onInput:()=>this.handleEmailChange(event),disabled:this.isLoading,placeholder:this.placeholder,required:!0}),t("ionic-button",{color:this.darkMode?"white":"default",type:"submit",disabled:this.isLoading||this.hasSubmitted},this.hasSubmitted?"Added!":this.buttonText))}}e["ionic-newsletter-signup"]=a},["ionic-newsletter-signup",[["buttonText",1,1,2],["darkMode",1,1,3],["email",5,0,1],["hasSubmitted",5,0,1],["isLoading",5,0,1],["placeholder",1,1,2]],{}]);;