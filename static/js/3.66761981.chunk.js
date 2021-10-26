(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[3],{101:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n(34);function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],a=!0,r=!1,i=void 0;try{for(var c,o=t[Symbol.iterator]();!(a=(c=o.next()).done)&&(n.push(c.value),!e||n.length!==e);a=!0);}catch(s){r=!0,i=s}finally{try{a||null==o.return||o.return()}finally{if(r)throw i}}return n}}(t,e)||Object(a.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},102:function(t,e,n){t.exports={input:"Filter_input__3V5WF",text:"Filter_text__I9iT7"}},103:function(t,e,n){t.exports={title:"Contacts_title__34IlY",text:"Contacts_text__1h6Ah",item:"Contacts_item__3Pb7_",button:"Contacts_button__3Mv5y"}},104:function(t,e,n){t.exports={signin:"Form_signin__3_K4Z",signinInput:"Form_signinInput__3KE6L",signinButton:"Form_signinButton__QXIP8",signinIinput:"Form_signinIinput__2S5Rh",signinText:"Form_signinText__2Rwql",title:"Form_title__2kam6"}},108:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return g}));var a=n(101),r=n(0),i=n(7),c=function(t){return t.filter},o=n(45),s=n(102),u=n.n(s),l=n(2),b=function(){var t=Object(i.e)(c),e=Object(i.d)();return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("label",{className:u.a.text,children:["Find contacts by name",Object(l.jsx)("input",{className:u.a.input,type:"text",name:"filter",value:t,onChange:function(t){return e(Object(o.b)(t.target.value))}})]})})},d=n(25),j=n(103),m=n.n(j),h=function(t){var e=t.onDelete,n=t.deleting,a=Object(d.d)().data,r=Object(i.e)((function(t){return c(t)})),o=null===a||void 0===a?void 0:a.filter((function(t){return t.name.toLowerCase().includes(r.toLowerCase())}));return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h2",{className:m.a.title,children:"Contacts"}),Object(l.jsx)("ul",{children:a&&o.map((function(t){return Object(l.jsxs)("li",{className:m.a.item,children:[Object(l.jsxs)("p",{className:m.a.text,children:[t.name,": ",t.number]}),Object(l.jsx)("button",{className:m.a.button,onClick:function(){return e(t.id)},type:"button",children:n?"Deleting...":"Delete"})]},t.id)}))})]})},f=n(104),p=n.n(f);function _(){var t=Object(r.useState)(""),e=Object(a.a)(t,2),n=e[0],i=e[1],c=Object(r.useState)(""),o=Object(a.a)(c,2),s=o[0],u=o[1],b=Object(d.b)(),j=Object(a.a)(b,2),m=j[0],h=j[1].isLoading,f=Object(d.d)().data,_=function(t){var e=t.currentTarget,n=e.name,a=e.value;switch(n){case"name":i(a);break;case"number":u(a);break;default:return}};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:p.a.title,children:"Phonebook"}),Object(l.jsxs)("form",{onSubmit:function(t){return t.preventDefault(),f.some((function(t){return t.name.toLowerCase()===n.toLowerCase()}))?alert("".concat(n," is already exists in contact list")):""===n||""===s?alert("fill out the form"):(m({name:n,number:s}),i(""),void u(""))},className:p.a.signin,children:[Object(l.jsx)("input",{className:p.a.signinInput,type:"text",name:"name",value:n,onChange:_,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,placeholder:"name"}),Object(l.jsx)("input",{className:p.a.signinInput,type:"tel",name:"number",value:s,onChange:_,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,placeholder:"number"}),Object(l.jsx)("button",{className:p.a.signinButton,type:"submit",disabled:h,children:"Add contact"})]})]})}var O=n(46),x=n.n(O);function g(){var t=Object(d.d)(),e=t.data,n=t.isFetching,r=Object(d.c)(),i=Object(a.a)(r,2),c=i[0],o=i[1].isLoading;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(_,{}),Object(l.jsx)(b,{}),n&&Object(l.jsx)(x.a,{type:"Circles",color:"#00BFFF",height:100,width:100,timeout:3e3}),e&&Object(l.jsx)(h,{contacts:e,onDelete:c,deleting:o})]})}}}]);
//# sourceMappingURL=3.66761981.chunk.js.map