(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{100:function(e,t,a){e.exports={container:"Chart_container__h5aYm"}},101:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__38d_J"}},117:function(e,t,a){var n={"./cplusplus.svg":118,"./python.svg":119,"./react.svg":120};function r(e){var t=c(e);return a(t)}function c(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=c,e.exports=r,r.id=117},118:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/cplusplus.2441702d.svg"},119:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/python.6a8b2999.svg"},120:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/react.6ce24c58.svg"},235:function(e,t,a){e.exports={App:"App_App__16ZpL","App-logo":"App_App-logo__25k4o","App-logo-spin":"App_App-logo-spin__1e7sv","App-header":"App_App-header__xLkWl","App-link":"App_App-link__3FsH9"}},236:function(e,t,a){},240:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),c=a.n(r),i=a(91),s=a.n(i),o=a(6),l=a(18),d=function(){return Object(n.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary",role:"navigation",children:[Object(n.jsx)(l.b,{className:"navbar-brand",to:"/",children:"SM"}),Object(n.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(n.jsx)("span",{className:"navbar-toggler-icon"})}),Object(n.jsx)("div",{className:"collapse navbar-collapse justify-content-end",id:"navbarNav"})]})},u=a(24),m=a(15),p=a(26),b=a(25),j=a.p+"static/media/SantiagoMedinaResume.25017bb5.pdf",h=a.p+"static/media/Vision.f03beada.png",v=a(13),f=a.n(v),g=a(34),O=a.n(g),x=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"center",children:[Object(n.jsx)("h1",{className:"center-text m-4",children:"Hi I am Santiago Medina,"}),Object(n.jsx)("p",{className:"center-text",children:"a student at the University of Michigan--Ann Arbor pursuing a bachelor's degree in Computer Science."}),Object(n.jsx)("center",{children:Object(n.jsx)("a",{href:j,className:"btn btn-primary",download:!0,children:"Resume"})})]}),Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"col",children:[Object(n.jsx)("div",{className:f()("row",O.a.cardstyle),children:Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"About me"}),Object(n.jsx)("p",{children:"Born and raised in Barranquilla, Colombia, I decided to attend college in the United States with the hope of exploring my passion in the technology industry and to encounter opportunities that will help me further develop my vision of making a positive impact on the world through technological advancements."})]})}),Object(n.jsxs)("div",{className:f()("row",O.a.cardstyle),children:[Object(n.jsx)("h2",{children:"Skills and Technologies"}),Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"row",children:["cplusplus-plain","python-plain-wordmark","javascript-plain","html5-plain-wordmark","react-plain-wordmark","bootstrap-plain-wordmark","git-plain-wordmark"].map((function(e,t){return Object(n.jsx)("i",{className:f()("devicon-".concat(e),O.a.devIcon)},t)}))})}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h5",{style:{marginTop:"20px"},children:"Currently learning..."}),Object(n.jsx)("div",{style:{marginBottom:"20px"},className:"row",children:["nodejs-plain","mongodb-plain-wordmark","express-original"].map((function(e,t){return Object(n.jsx)("i",{className:f()("devicon-".concat(e),O.a.devIcon)},t)}))})]})]})]}),Object(n.jsx)("div",{className:"col",children:Object(n.jsx)("img",{src:h,alt:"Vision.png",className:O.a.image})})]})})]})}}]),a}(r.Component),_=a(49),y=a(92),N=a.n(y),C=a(27),k=a.n(C),w=a(28),I=a(19),S=a(93),D=a(3),A=function(e){var t=e.name,a=e.label,r=e.error,c=e.input,i=Object(D.a)(e,["name","label","error","input"]);return Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:t,children:a}),c?Object(n.jsx)("input",Object(w.a)(Object(w.a)({},i),{},{name:t,id:t,className:"form-control"})):Object(n.jsx)("textarea",Object(w.a)(Object(w.a)({},i),{},{name:t,id:t,className:"form-control"})),r&&Object(n.jsx)("div",{className:"alert alert-danger m-1",children:r})]})},E=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{name:"",email:"",subject:"",message:""},errors:{}},e.schema={name:k.a.string().required().label("Username"),email:k.a.string().email().required().label("Email"),subject:k.a.string().required().label("Subject"),message:k.a.string().required().label("Message")},e.doSubmit=function(){var t=e.state.data,a=t.name,n=t.email,r={from_name:n,reply_to:n,sender_name:a,to_name:"santiagm@umich.edu",subject:t.subject,message_html:t.message};N.a.send(_.SERVICE_ID,_.TEMPLATE_ID,r,_.USER_ID).then((function(e){console.log("Email sent successfully!",e.status,e.text),alert("Email sent successfully!")})).catch((function(e){return console.error("Email sending failed",e)})),e.resetForm()},e.resetForm=function(){e.setState({data:{name:"",email:"",subject:"",message:""},errors:{}})},e}return Object(m.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"center",children:[Object(n.jsx)("h1",{className:"center-text m-4",children:"Contact Me!"}),Object(n.jsxs)("form",{onSubmit:this.handleSubmit,children:[this.renderInput("name","Name"),this.renderInput("email","Email"),this.renderInput("subject","Subject"),this.renderInput("message","Message",!1),this.renderButton("Submit")]})]})}}]),a}(function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},errors:{}},e.validate=function(){var t=k.a.validate(e.state.data,e.schema,{abortEarly:!1}).error;if(!t)return null;var a,n={},r=Object(S.a)(t.details);try{for(r.s();!(a=r.n()).done;){var c=a.value;n[c.path[0]]=c.message}}catch(i){r.e(i)}finally{r.f()}return n},e.validateProperty=function(t){var a=t.name,n=t.value,r=Object(I.a)({},a,n),c=Object(I.a)({},a,e.schema[a]),i=k.a.validate(r,c).error;return i?i.details[0].message:null},e.handleSubmit=function(t){t.preventDefault();var a=e.validate();e.setState({errors:a||{}}),a||e.doSubmit()},e.handleChange=function(t){var a=t.currentTarget,n=Object(w.a)({},e.state.errors),r=e.validateProperty(a);r?n[a.name]=r:delete n[a.name];var c=Object(w.a)({},e.state.data);c[a.name]=a.value,e.setState({data:c,errors:n})},e}return Object(m.a)(a,[{key:"renderButton",value:function(e){return Object(n.jsx)("button",{disabled:this.validate(),className:"btn btn-primary",children:e})}},{key:"renderInput",value:function(e,t){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"text",c=this.state,i=c.data,s=c.errors;return Object(n.jsx)(A,{type:r,name:e,value:i[e],label:t,onChange:this.handleChange,input:a,error:s[e]})}}]),a}(r.Component)),P=a(33),M=a(41),V=a.n(M),U=function(e){var t=e.icon,r=e.title,c=e.caption,i=e.git,s=e.hc,o=e.liveDemo;return Object(n.jsxs)("div",{className:f()("card m-3",V.a.container,V.a.card),children:[Object(n.jsx)("img",{src:a(117)("./".concat(t,".svg")).default,className:f()("card-img-top center",V.a.image),alt:"Not found"}),Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h5",{className:"card-title",children:r}),Object(n.jsx)("p",{className:"card-text",children:c}),s?Object(n.jsx)(l.b,{className:"btn btn-primary",to:"/contact",children:"Contact Me"}):Object(n.jsx)("a",{href:i,className:"btn btn-primary",children:"GitHub Link"}),Object(n.jsx)(l.b,{to:o,className:f()("btn btn-primary ".concat(o?"":"disabled"),V.a.button),children:"Live Demo"})]})]})},B=a(96),F=function(){var e=Object(r.useState)([]),t=Object(P.a)(e,2),a=t[0],i=t[1];return Object(r.useEffect)((function(){i(B)}),[]),Object(n.jsxs)(c.a.Fragment,{children:[Object(n.jsx)("h1",{className:"center-text m-3",children:"Projects"}),Object(n.jsxs)("p",{className:"center",children:[Object(n.jsx)("b",{children:"Note:"})," For reasons regarding the University of Michigan's College of Engineering's Honor Code, I cannot provide the source code of every project in this page. If you are not involved with the College of Engineering, or think you are eligible to receive more information, contact me to learn more about a specific project."]}),Object(n.jsx)("div",{className:"row",children:a.map((function(e){var t=e._id,a=e.img,r=e.title,c=e.caption,i=e.git,s=e.hc,o=e.liveDemo;return Object(n.jsx)("div",{className:"col-sm-4",children:Object(n.jsx)(U,{icon:a,title:r,caption:c,git:i,hc:s,liveDemo:o})},t)}))})]})},T=a(50),R=a.n(T),L=function(){return Object(n.jsxs)(c.a.Fragment,{children:[Object(n.jsx)("div",{className:R.a.container,children:Object(n.jsx)(x,{})}),Object(n.jsx)("div",{className:R.a.container,children:Object(n.jsx)(F,{})}),Object(n.jsx)("div",{className:R.a.container,children:Object(n.jsx)(E,{})})]})},J=function(){return Object(n.jsx)("h1",{className:"center m-5",children:"Not Found"})},q=a(10),H=a.n(q),z=a(23),W=a(258),G=a(262),K=a(259),X=a(260),Y=a(97),Z=a.n(Y),Q=a(39),$=a.n(Q),ee=function(e){var t=e.title,a=e.label,r=e.type,c=e.caption,i=e.lastUpdate;return Object(n.jsx)(W.a,{item:!0,component:G.a,xs:12,md:3,className:f()($.a.card,$.a[a]),children:Object(n.jsxs)(K.a,{children:[Object(n.jsx)(X.a,{color:"textSecondary",gutterBottom:!0,children:t}),Object(n.jsx)(X.a,{variant:"h5",children:Object(n.jsx)(Z.a,{start:0,end:r.value,duration:2.5,separator:","})}),Object(n.jsx)(X.a,{color:"textSecondary",children:new Date(i).toDateString()}),Object(n.jsx)(X.a,{variant:"body2",children:c})]})})},te=function(e){var t=e.data,a=t.confirmed,r=t.recovered,c=t.deaths,i=t.lastUpdate;if(!a)return"Loading...";var s=[{title:"Infected",label:"infected",type:a,caption:"Number of reported cases of COVID-19"},{title:"Recovered",label:"recovered",type:r,caption:"Number of recoveries from COVID-19"},{title:"Deaths",label:"deaths",type:c,caption:"Number of deaths caused by COVID-19"}];return Object(n.jsx)("div",{className:$.a.container,children:Object(n.jsx)(W.a,{container:!0,spacing:3,justify:"center",children:s.map((function(e){return Object(n.jsx)(ee,{title:e.title,label:e.label,type:e.type,caption:e.caption,lastUpdate:i},e.label)}))})})},ae=a(99),ne=a(100),re=a.n(ne),ce=function(e){var t=e.data,a=t.confirmed,r=t.deaths,c=t.recovered,i=e.country,s=a?Object(n.jsx)(ae.Bar,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,c.value,r.value]}]},options:{legend:{display:!1},title:{display:!0,text:"COVID-19 in ".concat(i)}}}):null;return Object(n.jsx)("div",{className:re.a.container,children:s})},ie=a(263),se=a(261),oe=a(101),le=a.n(oe),de=a(51),ue=a.n(de),me="https://covid19.mathdro.id/api",pe=function(){var e=Object(z.a)(H.a.mark((function e(t){var a,n,r,c,i,s,o;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=me,t&&(a="".concat(me,"/countries/").concat(t)),e.prev=2,e.next=5,ue.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,i=r.recovered,s=r.deaths,o=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:i,deaths:s,lastUpdate:o});case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),be=function(){var e=Object(z.a)(H.a.mark((function e(){var t,a;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ue.a.get("".concat(me,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),je=function(e){var t=e.handleCountryChange,a=Object(r.useState)([]),c=Object(P.a)(a,2),i=c[0],s=c[1];return Object(r.useEffect)((function(){(function(){var e=Object(z.a)(H.a.mark((function e(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,be();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]),Object(n.jsx)(ie.a,{className:le.a.formControl,children:Object(n.jsxs)(se.a,{defaultValue:"",onChange:function(e){return t(e.target.value)},children:[Object(n.jsx)("option",{value:"",children:"Global"}),i.map((function(e,t){return Object(n.jsx)("option",{value:e,children:e},t)}))]})})},he=a.p+"static/media/image.9e5d4fc7.png",ve=a(52),fe=a.n(ve),ge=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(z.a)(H.a.mark((function t(a){var n;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,pe(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(z.a)(H.a.mark((function e(){var t;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,pe();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return Object(n.jsxs)("div",{className:fe.a.container,children:[Object(n.jsx)(l.b,{to:"/home",className:f()("btn btn-secondary",fe.a.backbtn),children:"Back"}),Object(n.jsx)("img",{className:fe.a.image,src:he,alt:"COVID-19"}),Object(n.jsx)(te,{data:t}),Object(n.jsx)(je,{handleCountryChange:this.handleCountryChange}),Object(n.jsx)(ce,{data:t,country:a})]})}}]),a}(r.Component);a(235);var Oe=function(){return Object(n.jsxs)(c.a.Fragment,{children:[Object(n.jsx)(d,{}),Object(n.jsx)("main",{className:"container",children:Object(n.jsxs)(o.d,{children:[Object(n.jsx)(o.b,{path:"/home",component:L}),Object(n.jsx)(o.b,{path:"/covid-tracker-demo",component:ge}),Object(n.jsx)(o.b,{path:"/not-found",component:J}),Object(n.jsx)(o.a,{from:"/",exact:!0,to:"/home"}),Object(n.jsx)(o.a,{from:"/santiago-portfolio",exact:!0,to:"/home"}),Object(n.jsx)(o.a,{to:"/not-found"})]})})]})},xe=(a(236),a(237),a(238),a(239),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,264)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))});s.a.render(Object(n.jsx)(l.a,{children:Object(n.jsx)(Oe,{})}),document.getElementById("root")),xe()},34:function(e,t,a){e.exports={image:"About_image__sOw_H",cardstyle:"About_cardstyle__1n4f5",devIcon:"About_devIcon__g_Xjg"}},39:function(e,t,a){e.exports={container:"Cards_container__3qO5C",card:"Cards_card__3Nm05",infected:"Cards_infected__1d4w6",recovered:"Cards_recovered__1tIyU",deaths:"Cards_deaths__VlPiP"}},41:function(e,t,a){e.exports={container:"Project_container__3K1qO",card:"Project_card__WDTxP",button:"Project_button__1IE1h",image:"Project_image__3kvhp"}},49:function(e){e.exports=JSON.parse('{"SERVICE_ID":"default_service","TEMPLATE_ID":"template_v77ww29","USER_ID":"user_30A4NVPt8HzUgnv14iGb4"}')},50:function(e,t,a){e.exports={container:"Home_container__1ukFy"}},52:function(e,t,a){e.exports={container:"App_container__19Thb",image:"App_image__2TyPK",backbtn:"App_backbtn__3UJal"}},96:function(e){e.exports=JSON.parse('[{"_id":"1","img":"python","title":"RENO Virtual Assistant","caption":"Virtual assistant built with Python. Utilizes Python modules to recognize speech and perform simple tasks.","git":"https://github.com/santiagomed/reno-voice-assistant","hc":false,"liveDemo":false},{"_id":"2","img":"cplusplus","title":"Euchre","caption":"Euchre virtual card game simulator built with C++ for single and multiplayer play on the terminal.","git":"","hc":true,"liveDemo":false},{"_id":"3","img":"cplusplus","title":"ML Classifier","caption":"Built a Machine Learning Classifier using a simplified version of a \\"Multi-Variate Bernoulli Naive Bayes Classifier\\".","git":"","hc":true,"liveDemo":false},{"_id":"4","img":"react","title":"Vidly","caption":"Built movie management service based on the CodeWithMosh ReactJS course (\\"Mastering React\\").","git":"https://github.com/santiagomed/vidly-codewithmosh","hc":false,"liveDemo":false},{"_id":"5","img":"react","title":"COVID-19 Tracker","caption":"COVID-19 infected, recovered, and deaths live tracker built using ReactJS. Includes visualizations. Information fetched from an API.","git":"https://github.com/santiagomed/covid-tracker","hc":false,"liveDemo":"/covid-tracker-demo"},{"_id":"6","img":"react","title":"Portfolio ReactJS Website","caption":"Built a portfolio website with ReactJS and Bootstrap. Developed contact form, styling, routing, etc.","git":"https://github.com/santiagomed/santiago_portfolio","hc":false,"liveDemo":"/home"}]')}},[[240,1,2]]]);
//# sourceMappingURL=main.dc7368a4.chunk.js.map