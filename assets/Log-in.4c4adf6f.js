import{G as i,h as d,g as r,u as w,r as k,o as u,c as g,a as s,b as x,w as y,i as p,v as m,t as C,d as I,s as P,k as E,f as N}from"./index.ec19e11e.js";import{_ as R}from"./healthcare.154b7c27.js";const G={class:"container-fluid font-exo",id:"register"},S={class:"row registerColumn"},T={class:"col-lg-6 registerColumn"},V={class:"regisignNav navbar navbar-expand-lg navbar-light","aria-label":"Ninth navbar example"},H={class:"container-xl"},W=s("a",{class:"navbar-brand large-brand",href:"/"},"HRC.",-1),B=s("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarsExample07XL","aria-controls":"navbarsExample07XL","aria-expanded":"false","aria-label":"Toggle navigation"},[s("span",{class:"navbar-toggler-icon"})],-1),L={class:"collapse navbar-collapse",id:"navbarsExample07XL"},A=s("ul",{class:"navbar-nav me-auto mb-2 mb-lg-0"},null,-1),U=N("Sign Up"),X=s("hr",null,null,-1),D={class:"regisign"},F=s("h1",{class:"regisignHeader"},"Welcome Back!",-1),M=s("p",{class:"regisignP"}," Thank you for being a member of HRC. The Community is growing stronger because of you! ",-1),j={class:"form-floating regisignInput"},q=s("label",{for:"floatingInput"},"Email address",-1),z={class:"form-floating regisignInput"},J=s("label",{for:"floatingPassword"},"Password",-1),K={key:0},O=s("hr",null,null,-1),Q=s("div",{class:"col-lg-6 yellowGround"},[s("img",{class:"regisignLogo",src:R})],-1),ss={setup(Y){const _=new i,h=d(),v=()=>P(h,_).then(e=>{i.credentialFromResult(e).accessToken,e.user,c.push("/HRCProvider")}).catch(e=>{e.code,e.message,e.email,i.credentialFromError(e)}),t=r(""),n=r(""),a=r(),c=w(),b=()=>{E(d(),t.value,n.value).then(e=>{console.log("Succesfully Signin!"),c.push("/HRCProvider")}).catch(e=>{switch(console.log(e.code),e.code){case"auth/invalid-email":a.value="Invalid email";break;case"auth/user-not-found":a.value="No account with that email was found";break;case"auth/wrong-password":a.value="Incorrect password";break;default:a.value="Email or password was incorrect"}})};return(e,o)=>{const f=k("router-link");return u(),g("div",G,[s("div",S,[s("div",T,[s("nav",V,[s("div",H,[W,B,s("div",L,[A,x(f,{to:"/register",class:"nav-link regisignRoute text-black"},{default:y(()=>[U]),_:1})])])]),X,s("div",D,[F,M,s("div",j,[p(s("input",{type:"email",class:"form-control",id:"Email",placeholder:"name@example.com","onUpdate:modelValue":o[0]||(o[0]=l=>t.value=l)},null,512),[[m,t.value]]),q]),s("div",z,[p(s("input",{type:"password",class:"form-control",id:"Password",placeholder:"Password","onUpdate:modelValue":o[1]||(o[1]=l=>n.value=l)},null,512),[[m,n.value]]),J]),a.value?(u(),g("p",K,C(a.value),1)):I("",!0),s("button",{onClick:b,class:"w-100 btn btn-lg btn-ye regisignInput",type:"submit"}," Sign In "),O,s("button",{onClick:v,class:"w-100 btn btn-outline-primary btn-lg regisignInput regilogGoogle",type:"submit"}," Sign In With Google ")])]),Q])])}}};export{ss as default};
