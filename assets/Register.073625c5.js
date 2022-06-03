import{g as l,u as w,h as u,G as r,r as C,o as p,c as v,a as s,b as k,w as y,i as c,v as d,t as X,d as I,s as x,j as P,f as E}from"./index.ec19e11e.js";import{_ as R}from"./healthcare.154b7c27.js";const V={class:"container-fluid font-exo",id:"register"},W={class:"row registerColumn"},A={class:"col-lg-6 registerColumn"},G={class:"regisignNav navbar navbar-expand-lg navbar-light","aria-label":"Ninth navbar example"},H={class:"container-xl"},N=s("a",{class:"navbar-brand large-brand",href:"/"},"HRC.",-1),T=s("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarsExample07XL","aria-controls":"navbarsExample07XL","aria-expanded":"false","aria-label":"Toggle navigation"},[s("span",{class:"navbar-toggler-icon"})],-1),U={class:"collapse navbar-collapse",id:"navbarsExample07XL"},L=s("ul",{class:"navbar-nav me-auto mb-2 mb-lg-0"},null,-1),S=E("Log In"),B=s("hr",null,null,-1),j={class:"regisign"},D=s("h1",{class:"regisignHeader"},"Welcome to HRC.",-1),F=s("p",{class:"regisignP"}," We Appricieate your consideration of joining HRC. to fight for a cost to save lives! ",-1),M={class:"form-floating fluid-container regisignInput"},Y={class:"row"},q={class:"col-lg-6"},z=s("label",{for:"invitationCode"},"Invitation Code",-1),J={class:"col-lg-6"},K={class:"form-floating regisignInput"},O=s("label",{for:"floatingInput"},"Email address",-1),Q={class:"form-floating regisignInput"},Z=s("label",{for:"floatingPassword"},"Password",-1),$={key:0},ss=s("hr",null,null,-1),es=s("div",{class:"col-lg-6 blueGround"},[s("img",{class:"logo regisignLogo",src:R})],-1),ns={setup(os){const n=l(""),a=l(),i=l(""),g=w(),_=u(),m=new r,h=()=>x(_,m).then(e=>{r.credentialFromResult(e).accessToken,e.user,g.push("/HRCProvider")}).catch(e=>{e.code,e.message,e.email,r.credentialFromError(e)}),b=()=>{console.log("Registering"),P(u(),n.value,i.value).then(e=>{console.log("Succesfully registered!"),g.push("/HRCProvider")}).catch(e=>{switch(console.log(e.code),e.code){case"auth/invalid-email":a.value="Invalid email";break;case"auth/email-already-in-use":a.value="This Email Is Already Registered";break;case"auth/weak-password":a.value="Your Password Is Too Weak";break;default:a.value="Email or password was incorrect"}})};return(e,o)=>{const f=C("router-link");return p(),v("div",V,[s("div",W,[s("div",A,[s("nav",G,[s("div",H,[N,T,s("div",U,[L,k(f,{to:"/log-in",class:"nav-link regisignRoute text-black"},{default:y(()=>[S]),_:1})])])]),B,s("div",j,[D,F,s("div",M,[s("div",Y,[s("div",q,[z,c(s("input",{type:"search",class:"form-control w-100",id:"invitationCode",placeholder:"XXXX-XXXX-XXXX","onUpdate:modelValue":o[0]||(o[0]=t=>e.invitation=t)},null,512),[[d,e.invitation]])]),s("div",J,[s("button",{onClick:o[1]||(o[1]=(...t)=>e.invitation&&e.invitation(...t)),class:"w-100 btn btn-lg btn-yellow",type:"submit"}," Apply for Invitation Code ")])])]),s("div",K,[c(s("input",{type:"email",class:"form-control",id:"Email",placeholder:"name@example.com","onUpdate:modelValue":o[2]||(o[2]=t=>n.value=t)},null,512),[[d,n.value]]),O]),s("div",Q,[c(s("input",{type:"password",class:"form-control",id:"Password",placeholder:"Password","onUpdate:modelValue":o[3]||(o[3]=t=>i.value=t)},null,512),[[d,i.value]]),Z]),a.value?(p(),v("p",$,X(a.value),1)):I("",!0),s("button",{onClick:b,class:"w-100 btn btn-lg btn-blue regisignInput",type:"submit"}," Sign Up "),ss,s("button",{onClick:h,class:"w-100 btn btn-outline-primary btn-lg regisignInput regisignGoogle",type:"submit"}," Sign Up With Google ")])]),es])])}}};export{ns as default};
