(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[13],{143:function(e,t,n){"use strict";n(2);var a=n(3);t.a=function(){return Object(a.jsx)("div",{class:"loader"})}},145:function(e,t,n){"use strict";n.d(t,"e",(function(){return u})),n.d(t,"d",(function(){return m})),n.d(t,"b",(function(){return p})),n.d(t,"f",(function(){return f})),n.d(t,"c",(function(){return j})),n.d(t,"a",(function(){return b}));var a=n(28),r=n(20),s=n(36),c=n(18),o=n(34),i=n(35),l=function(){return function(e){e({type:a.h})}},d=function(){return function(e){e({type:a.d})}},u=function(){return Object(r.a)({url:"https://lavado.ae/api/services/all",successType:a.f,errorType:a.g,startReload:l,finishedReload:d,headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","x-access-token":localStorage.getItem("token")}})},m=function(e){return Object(s.a)({url:"https://lavado.ae/api/services/",successType:a.e,errorType:a.g,startReload:l,finishedReload:d,id:e,headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","x-access-token":localStorage.getItem("token")}})},p=function(e){return Object(c.a)({url:"https://lavado.ae/api/services/",successType:a.b,errorType:a.g,startReload:l,finishedReload:d,title:"Services",formData:e,headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","x-access-token":localStorage.getItem("token")}})},f=function(e){return Object(o.a)({url:"https://lavado.ae/api/services",successType:a.i,errorType:a.g,startReload:l,finishedReload:d,title:"Services",formData:e,id:e._id,headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","x-access-token":localStorage.getItem("token")}})},j=function(e){return Object(i.a)({url:"https://lavado.ae/api/services/",successType:a.c,errorType:a.g,startReload:l,finishedReload:d,title:"Services",id:e,headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","x-access-token":localStorage.getItem("token")}})},b=function(){return function(e){e({type:a.a})}}},238:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var a=n(12),r=n.n(a),s=n(21),c=n(22),o=n(1),i=n(13),l=n(59),d=n(2),u=n(16),m=n(145),p=(n(60),n(44)),f=n(143),j=n(3);function b(e){var t=e.history,n=e.match,a=Object(u.c)(),b=Object(u.d)((function(e){return e.servicesReducer})),h=Object(d.useState)({}),x=Object(i.a)(h,2),v=x[0],O=(x[1],Object(d.useState)({name:"",label:"",price:"",note:"",description:""})),g=Object(i.a)(O,2),y=g[0],w=g[1],N=function(e){e.preventDefault(),w(Object(o.a)(Object(o.a)({},y),{},Object(c.a)({},e.target.name,e.target.value)))};console.log(y.description),Object(d.useEffect)((function(){n.params.id&&a(Object(m.d)(n.params.id)).then((function(e){w(Object(o.a)(Object(o.a)({},y),e.data.data)),console.log({res:e.data.data})})).catch((function(e){}))}),[n.params.id]),Object(d.useEffect)((function(){a(Object(m.e)())}),[]);var C=function(){var e=Object(s.a)(r.a.mark((function e(s){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s.preventDefault(),n.params.id?n.params.id?a(Object(m.f)({_id:n.params.id,name:y.name,label:y.label,price:y.price,note:y.note,description:y.description})).then((function(e){return t.push("/admin/services")})):console.log("error"):a(Object(m.b)({name:y.name,label:y.label,price:y.price,note:y.note,description:y.description})).then((function(e){return t.push("/admin/services")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return b.loading?Object(j.jsx)(l.a,{children:Object(j.jsx)("div",{className:"flex items-center justify-center h-screen",children:Object(j.jsx)(f.a,{})})}):Object(j.jsx)(l.a,{parentClassName:" ",children:Object(j.jsxs)("div",{style:{backgroundColor:"#F8F8F8"},className:"w-full h-full p-10 transition-all",children:[Object(j.jsx)("div",{className:"flex flex-wrap items-center justify-between w-full transition-all select-none",children:Object(j.jsxs)("div",{className:"flex-grow my-10 text-4xl font-normal text-left text-gray-500 transition-all ",children:["Services",Object(j.jsxs)("div",{className:"flex items-center w-full mt-4 text-sm text-left text-gray-500 transition-all",children:[Object(j.jsx)("div",{className:"font-medium transition-all duration-100 transform cursor-pointer hover:text-gray-600 hover:scale-110",children:"Dashboard"}),Object(j.jsx)("div",{className:"px-3 font-medium",children:"->"}),Object(j.jsx)("div",{className:"font-medium transition-all duration-100 transform cursor-pointer hover:text-gray-600 hover:scale-110",children:"Services"}),Object(j.jsx)("div",{className:"px-3 font-medium",children:"->"}),Object(j.jsx)("div",{className:"font-medium transition-all duration-100 transform cursor-pointer hover:text-gray-600 hover:scale-110",children:"New service"})]})]})}),Object(j.jsxs)("div",{className:"py-16 bg-white border rounded shadow-md hover:shadow-lg px-14 ",children:[Object(j.jsxs)("div",{className:"my-5",children:[Object(j.jsx)("input",{placeholder:"Name",value:y.name,type:"text",name:"name",onChange:function(e){N(e)},className:"w-full p-4 font-normal text-gray-600 border rounded-md shadow outline-none focus:outline-none"}),Object(j.jsx)("small",{className:"text-red-600"})]}),Object(j.jsxs)("div",{className:"my-5",children:[Object(j.jsx)("input",{name:"label",value:y.label,type:"email",placeholder:"Label",onChange:function(e){N(e)},className:"w-full p-4 font-normal text-gray-600 border rounded-md shadow outline-none focus:outline-none"}),Object(j.jsx)("small",{className:"text-red-600"})]}),Object(j.jsxs)("div",{className:"my-5",children:[Object(j.jsx)("input",{name:"description",value:y.description,type:"text",placeholder:"Description",onChange:function(e){N(e)},className:"w-full p-4 font-normal text-gray-600 border rounded-md shadow outline-none focus:outline-none"}),Object(j.jsx)("small",{className:"text-red-600"})]}),Object(j.jsxs)("div",{className:"my-5",children:[Object(j.jsx)("input",{type:"text",name:"price",value:y.price,placeholder:"Price",onChange:function(e){N(e)},className:"w-full p-4 font-normal text-gray-600 border rounded-md shadow outline-none focus:outline-none"}),Object(j.jsx)("small",{className:"text-red-600"})]}),Object(j.jsxs)("div",{className:"my-5",children:[Object(j.jsx)("input",{type:"text",name:"note",value:y.note,placeholder:"Note",onChange:function(e){N(e)},className:"w-full p-4 font-normal text-gray-600 border rounded-md shadow outline-none focus:outline-none"}),Object(j.jsx)("small",{className:"text-red-600"})]}),Object(j.jsx)("div",{className:"flex items-center justify-center w-full",children:Object(j.jsxs)("div",{onClick:function(e){return C(e)},style:{backgroundColor:Object(p.a)(v)?"#666":"#212121",borderColor:"#212121"},className:" ".concat(b.loading?"animate-pulse":""," \n               \n                  w-full text-white py-3 px-4 text-center font-medium rounded-lg mt-16 cursor-pointer hover:bg-black "),children:[b.loading?Object(j.jsx)("svg",{className:"absolute w-5 h-5 mr-3 border-r-2 border-white rounded-full animate-spin left-3",viewBox:"0 0 24 24"}):"","Save"]})})]})]})})}}}]);
//# sourceMappingURL=13.4dd19faf.chunk.js.map