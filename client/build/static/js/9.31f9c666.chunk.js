(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[9],{143:function(e,t,n){"use strict";n(2);var a=n(3);t.a=function(){return Object(a.jsx)("div",{class:"loader"})}},145:function(e,t,n){"use strict";n.d(t,"e",(function(){return d})),n.d(t,"d",(function(){return p})),n.d(t,"b",(function(){return f})),n.d(t,"f",(function(){return m})),n.d(t,"c",(function(){return j})),n.d(t,"a",(function(){return b}));var a=n(28),r=n(20),s=n(36),c=n(18),o=n(34),l=n(35),i=function(){return function(e){e({type:a.h})}},u=function(){return function(e){e({type:a.d})}},d=function(){return Object(r.a)({url:"https://lavado.ae/api/services/all",successType:a.f,errorType:a.g,startReload:i,finishedReload:u,headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","x-access-token":localStorage.getItem("token")}})},p=function(e){return Object(s.a)({url:"https://lavado.ae/api/services/",successType:a.e,errorType:a.g,startReload:i,finishedReload:u,id:e,headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","x-access-token":localStorage.getItem("token")}})},f=function(e){return Object(c.a)({url:"https://lavado.ae/api/services/",successType:a.b,errorType:a.g,startReload:i,finishedReload:u,title:"Services",formData:e,headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","x-access-token":localStorage.getItem("token")}})},m=function(e){return Object(o.a)({url:"https://lavado.ae/api/services",successType:a.i,errorType:a.g,startReload:i,finishedReload:u,title:"Services",formData:e,id:e._id,headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","x-access-token":localStorage.getItem("token")}})},j=function(e){return Object(l.a)({url:"https://lavado.ae/api/services/",successType:a.c,errorType:a.g,startReload:i,finishedReload:u,title:"Services",id:e,headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","x-access-token":localStorage.getItem("token")}})},b=function(){return function(e){e({type:a.a})}}},150:function(e,t,n){"use strict";n.d(t,"e",(function(){return d})),n.d(t,"d",(function(){return p})),n.d(t,"b",(function(){return f})),n.d(t,"f",(function(){return m})),n.d(t,"c",(function(){return j})),n.d(t,"a",(function(){return b}));var a=n(30),r=n(20),s=n(36),c=n(18),o=n(34),l=n(35),i=function(){return function(e){e({type:a.h})}},u=function(){return function(e){e({type:a.d})}},d=function(){return Object(r.a)({url:"https://lavado.ae/api/plans/all",successType:a.g,errorType:a.e,startReload:i,finishedReload:u,headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","x-access-token":localStorage.getItem("token")}})},p=function(e){return Object(s.a)({url:"https://lavado.ae/api/Plans/",successType:a.f,errorType:a.e,startReload:i,finishedReload:u,id:e,headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","x-access-token":localStorage.getItem("token")}})},f=function(e){return Object(c.a)({url:"https://lavado.ae/api/Plans/",successType:a.b,errorType:a.e,startReload:i,finishedReload:u,title:"Plans",formData:e,headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","x-access-token":localStorage.getItem("token")}})},m=function(e){return Object(o.a)({url:"https://lavado.ae/api/Plans",successType:a.i,errorType:a.e,startReload:i,finishedReload:u,title:"Plans",formData:e,id:e._id,headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","x-access-token":localStorage.getItem("token")}})},j=function(e){return Object(l.a)({url:"https://lavado.ae/api/Plans/",successType:a.c,errorType:a.e,startReload:i,finishedReload:u,title:"Plans",id:e,headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","x-access-token":localStorage.getItem("token")}})},b=function(){return function(e){e({type:a.a})}}},240:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return v}));var a=n(5),r=n(12),s=n.n(r),c=n(21),o=n(22),l=n(1),i=n(13),u=n(59),d=n(2),p=n(16),f=n(150),m=(n(60),n(44)),j=n(145),b=n(51),h=n(143),x=n(3);function v(e){var t=e.history,n=e.match,r=Object(p.c)(),v=Object(p.d)((function(e){return e.plansReducer})),O=Object(p.d)((function(e){return e.servicesReducer})),g=Object(d.useState)({}),y=Object(i.a)(g,2),w=y[0],N=(y[1],Object(d.useState)({name:"",label:"",price:"",note:"",period:"",services:[]})),C=Object(i.a)(N,2),T=C[0],k=C[1],R=Object(d.useState)({count:"",service:""}),A=Object(i.a)(R,2),S=A[0],P=A[1],I=function(e){e.preventDefault(),k(Object(l.a)(Object(l.a)({},T),{},Object(o.a)({},e.target.name,e.target.value)))};Object(d.useEffect)((function(){n.params.id&&r(Object(f.d)(n.params.id)).then((function(e){k(Object(l.a)(Object(l.a)({},T),e.data.data)),console.log({res:e.data})})).catch((function(e){}))}),[n.params.id]),Object(d.useEffect)((function(){r(Object(f.e)()),r(Object(j.e)())}),[]),console.log({formData:T});var D=function(){var e=Object(c.a)(s.a.mark((function e(a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),n.params.id?n.params.id?r(Object(f.f)({_id:n.params.id,name:T.name,label:T.label,price:T.price,note:T.note,services:T.services,period:T.period})).then((function(e){return t.push("/admin/plans")})):console.log("error"):r(Object(f.b)({name:T.name,label:T.label,price:T.price,note:T.note,services:T.services,period:T.period})).then((function(e){return t.push("/admin/plans")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return v.loading?Object(x.jsx)(u.a,{children:Object(x.jsx)("div",{className:"flex items-center justify-center h-screen",children:Object(x.jsx)(h.a,{})})}):Object(x.jsx)(u.a,{parentClassName:" ",children:Object(x.jsxs)("div",{style:{backgroundColor:"#F8F8F8"},className:"w-full h-full p-10 transition-all",children:[Object(x.jsx)("div",{className:"flex flex-wrap items-center justify-between w-full transition-all select-none",children:Object(x.jsxs)("div",{className:"flex-grow my-10 text-4xl font-normal text-left text-gray-500 transition-all ",children:["Plans",Object(x.jsxs)("div",{className:"flex items-center w-full mt-4 text-sm text-left text-gray-500 transition-all",children:[Object(x.jsx)("div",{className:"font-medium transition-all duration-100 transform cursor-pointer hover:text-gray-600 hover:scale-110",children:"Dashboard"}),Object(x.jsx)("div",{className:"px-3 font-medium",children:"->"}),Object(x.jsx)("div",{className:"font-medium transition-all duration-100 transform cursor-pointer hover:text-gray-600 hover:scale-110",children:"Plans"}),Object(x.jsx)("div",{className:"px-3 font-medium",children:"->"}),Object(x.jsx)("div",{className:"font-medium transition-all duration-100 transform cursor-pointer hover:text-gray-600 hover:scale-110",children:"New Plan"})]})]})}),Object(x.jsxs)("div",{className:"py-16 bg-white border rounded shadow-md hover:shadow-lg px-14 ",children:[Object(x.jsxs)("div",{className:"my-5",children:[Object(x.jsx)("input",{placeholder:"Name",value:T.name,type:"text",name:"name",onChange:function(e){I(e)},className:"w-full p-4 font-normal text-gray-600 border rounded-md shadow outline-none focus:outline-none"}),Object(x.jsx)("small",{className:"text-red-600"})]}),Object(x.jsxs)("div",{className:"my-5",children:[Object(x.jsx)("input",{name:"label",value:T.label,type:"email",placeholder:"Label",onChange:function(e){I(e)},className:"w-full p-4 font-normal text-gray-600 border rounded-md shadow outline-none focus:outline-none"}),Object(x.jsx)("small",{className:"text-red-600"})]}),Object(x.jsxs)("div",{className:"my-5",children:[Object(x.jsx)("input",{type:"text",name:"price",value:T.price,placeholder:"Price",onChange:function(e){I(e)},className:"w-full p-4 font-normal text-gray-600 border rounded-md shadow outline-none focus:outline-none"}),Object(x.jsx)("small",{className:"text-red-600"})]}),Object(x.jsxs)("div",{className:"my-5",children:[Object(x.jsx)("input",{type:"text",name:"period",value:T.period,placeholder:"Period",onChange:function(e){I(e)},className:"w-full p-4 font-normal text-gray-600 border rounded-md shadow outline-none focus:outline-none"}),Object(x.jsx)("small",{className:"text-red-600"})]}),Object(x.jsxs)("div",{className:"flex my-5",children:[Object(x.jsx)("input",{type:"text",name:"note",value:T.note,placeholder:"Note",onChange:function(e){I(e)},className:"w-full p-4 font-normal text-gray-600 border rounded-md shadow outline-none focus:outline-none"}),Object(x.jsx)("small",{className:"text-red-600"})]}),Object(x.jsxs)("div",{className:"flex flex-wrap justify-between my-5",children:[Object(x.jsxs)("div",{className:"flex flex-grow my-1 ",children:[Object(x.jsxs)("select",{name:"service",value:S.service,placeholder:"Service",onChange:function(e){P(Object(l.a)(Object(l.a)({},S),{},{service:e.target.value}))},className:"w-full p-4 mr-1 font-normal text-gray-600 border rounded-md shadow outline-none sm:w-6/12 focus:outline-none",children:[Object(x.jsx)("option",{value:"",children:"Select Service"}),O.services.map((function(e){return Object(x.jsx)("option",{value:e._id,children:e.name})}))]}),Object(x.jsx)("input",{type:"number",name:"count",value:S.count,placeholder:"Count",onChange:function(e){P(Object(l.a)(Object(l.a)({},S),{},{count:e.target.value}))},className:"w-full p-4 ml-1 font-normal text-center text-gray-600 border rounded-md shadow outline-none sm:w-6/12 md:mr-2 focus:outline-none sm:text-left"})]}),Object(x.jsx)("div",{onClick:function(e){return k(Object(l.a)(Object(l.a)({},T),{},{services:[].concat(Object(a.a)(T.services),[S])}))},className:"w-full flex items-center justify-center md:w-5/12 text-white py-3 px-4 text-center font-medium rounded-md cursor-pointer bg-blue-600 hover:bg-blue-700 my-1",children:"Add"})]}),Object(x.jsx)("div",{className:"flex flex-wrap w-full",children:T.services.map((function(e){return Object(x.jsxs)("div",{className:"relative px-3 py-3 pr-6 my-2 mr-2 text-xs text-white bg-blue-500 rounded cursor-pointer hover:bg-blue-600",children:[Object(x.jsxs)("span",{className:"mx-2",children:["name:",O.services.find((function(t){return t._id===e.service}))?O.services.find((function(t){return t._id===e.service})).name:""," "]}),Object(x.jsxs)("span",{className:"mx-2",children:["count: ",e.count]}),Object(x.jsx)("div",{className:"absolute text-xl top-1 right-1",onClick:function(){return k(Object(l.a)(Object(l.a)({},T),{},{services:T.services.filter((function(t){return t.service!==e.service}))}))},children:Object(x.jsx)(b.a,{className:"text-white"})})]})}))}),Object(x.jsx)("div",{className:"flex items-center justify-center w-full",children:Object(x.jsxs)("div",{onClick:function(e){return D(e)},style:{backgroundColor:Object(m.a)(w)?"#666":"#212121",borderColor:"#212121"},className:" ".concat(v.loading?"animate-pulse":""," \n               \n                  w-full text-white py-3 px-4 text-center font-medium rounded-lg mt-16 cursor-pointer hover:bg-black "),children:[v.loading?Object(x.jsx)("svg",{className:"absolute w-5 h-5 mr-3 border-r-2 border-white rounded-full animate-spin left-3",viewBox:"0 0 24 24"}):"","Save"]})})]})]})})}}}]);
//# sourceMappingURL=9.31f9c666.chunk.js.map