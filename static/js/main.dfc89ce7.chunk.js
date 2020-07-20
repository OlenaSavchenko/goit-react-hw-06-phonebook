(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{17:function(e,t,n){e.exports={item:"ContactListItem_item__3MtRK",btn:"ContactListItem_btn__2B8bS"}},18:function(e,t,n){e.exports={title:"Filter_title__eLsmm",input:"Filter_input__2uLAY"}},25:function(e,t,n){e.exports={Container:"Container_Container__1zhO5"}},26:function(e,t,n){e.exports={title:"Section_title__t1jFp"}},28:function(e,t,n){e.exports={list:"ContactList_list__2iDFu"}},30:function(e,t,n){e.exports=n(52)},5:function(e,t,n){e.exports={form:"ContactForm_form__iwafZ",formLabel:"ContactForm_formLabel__2iZ03",formInput:"ContactForm_formInput__1DPYk",btn:"ContactForm_btn__2xOgg"}},51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),o=n(8),l=n.n(o),i=n(4),u=n(22),m=n(11),s=n(2),b=n(3),f=n(23),d=n.n(f),p=n(24),h=n.n(p),C=n(6),v=n(1),_={addContact:Object(s.b)("contacts/addContact"),deleteContact:Object(s.b)("contacts/deleteContact"),changeFilter:Object(s.b)("contacts/changeFilter")},g=Object(s.c)([],(a={},Object(C.a)(a,_.addContact,(function(e,t){var n=t.payload;return[].concat(Object(m.a)(e),[n])})),Object(C.a)(a,_.deleteContact,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),a)),E=Object(s.c)("",Object(C.a)({},_.changeFilter,(function(e,t){return t.payload}))),O=Object(v.c)({items:g,filter:E}),j=[].concat(Object(m.a)(Object(s.d)({serializableCheck:{ignoredActions:[b.a,b.f,b.b,b.c,b.d,b.e]}})),[h.a]),F={key:"contacts",storage:d.a,blacklist:["filter"]},y=Object(b.g)(F,O),N=Object(s.a)({reducer:y,devTools:!1,middleware:j}),k={store:N,persistor:Object(b.h)(N)},L=n(9),x=n(10),w=n(13),I=n(12),S=n(25),D=n.n(S),A=function(e){var t=e.children;return c.a.createElement("div",{className:D.a.Container},t)},z=n(26),B=n.n(z),J=function(e){var t=e.title,n=e.children;return c.a.createElement("section",null,c.a.createElement("h2",{className:B.a.title},t),n)},M=function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))},P=n(5),T=n.n(P),Y=n(27),Z=n.n(Y),K=function(e){Object(w.a)(n,e);var t=Object(I.a)(n);function n(){var e;Object(L.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleChange=function(t){var n=t.currentTarget,a=n.name,r=n.value;e.setState(Object(C.a)({},a,r))},e.handleFormFill=function(){var t=Z.a.generate(),n=e.state,a=n.name,r=n.number,c=e.props.existingContactsName.includes(a.toLowerCase()),o=!a||!r,l=a.length<3;return c?alert("".concat(a," is already in contacts")):o?alert("Fill the form"):l?alert("Name should have more than 3 letters"):void e.props.onSubmit({name:a,number:r,id:t})},e.reset=function(){e.setState({name:"",number:""})},e.handleSubmit=function(t){t.preventDefault(),e.handleFormFill(),e.reset()},e}return Object(x.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return c.a.createElement("form",{onSubmit:this.handleSubmit,className:T.a.form},c.a.createElement("label",{htmlFor:this.nameInputId,className:T.a.formLabel},"Name",c.a.createElement("input",{type:"text",name:"name",value:t,onChange:this.handleChange,className:T.a.formInput})),c.a.createElement("br",null),c.a.createElement("label",{htmlFor:this.numberInputId,className:T.a.formLabel},"Number",c.a.createElement("input",{type:"tel",name:"number",value:n,onChange:this.handleChange,className:T.a.formInput})),c.a.createElement("button",{type:"submit",className:T.a.btn},"Add contact"))}}]),n}(r.Component);console.log(v.b);var R=Object(i.b)((function(e){var t,n=e.items;return{existingContactsName:(t=n,t.map((function(e){return e.name.toLowerCase()})))}}),(function(e){return{onSubmit:function(t){return e(_.addContact(t))}}}))(K),q=n(29),G=n(17),H=n.n(G),Q=function(e){var t=e.contact,n=e.onDeleteContact,a=t.name,r=t.number;return c.a.createElement("li",{className:H.a.item},c.a.createElement("span",null,a,":"),c.a.createElement("span",null," ",r),c.a.createElement("button",{type:"button",onClick:n,className:H.a.btn},"Delete"))},U=n(28),V=n.n(U),W=function(e){var t=e.contacts,n=e.deleteContact;return c.a.createElement("ul",{className:V.a.list},t.map((function(e){var t=e.id,a=Object(q.a)(e,["id"]);return c.a.createElement(Q,{key:t,contact:a,onDeleteContact:function(){return n(t)}})})))},X=Object(i.b)((function(e){var t=e.items,n=e.filter;return{contacts:M(t,n)}}),(function(e){return{deleteContact:function(t){return e(_.deleteContact(t))}}}))(W),$=n(18),ee=n.n($),te=function(e){var t=e.value,n=e.onChange;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",{className:ee.a.title},"Find contacts by name"),c.a.createElement("input",{type:"text",value:t,onChange:n,className:ee.a.input}))},ne=Object(i.b)((function(e){return{value:e.filter}}),(function(e){return{onChange:function(t){return e(_.changeFilter(t.target.value))}}}))(te),ae=function(e){Object(w.a)(n,e);var t=Object(I.a)(n);function n(){return Object(L.a)(this,n),t.apply(this,arguments)}return Object(x.a)(n,[{key:"render",value:function(){return c.a.createElement(A,null,c.a.createElement(J,{title:"Phonebook"},c.a.createElement(R,null)),c.a.createElement(J,{title:"Contacts"},c.a.createElement(ne,null),c.a.createElement(X,null)))}}]),n}(r.Component);n(50),n(51);l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(i.a,{store:k.store},c.a.createElement(u.a,{loading:"loading",persistor:k.persistor},c.a.createElement(ae,null)))),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.dfc89ce7.chunk.js.map