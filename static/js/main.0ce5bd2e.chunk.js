(this.webpackJsonpcredit=this.webpackJsonpcredit||[]).push([[0],{14:function(e,t,n){e.exports={main:"Credit_main__1XOk5",form:"Credit_form__1P5zC",input:"Credit_input__1Q7id",submit:"Credit_submit__3aJO4",first_pay_percent:"Credit_first_pay_percent__1-nBW"}},18:function(e,t,n){e.exports={main:"Information_main__96x1u",info:"Information_info__-LCEs",info_cart:"Information_info_cart__2fkpF",info_cart_lable:"Information_info_cart_lable__uuiz4",info_payment:"Information_info_payment__3UUuO",info_credit:"Information_info_credit__bAIJc"}},29:function(e,t,n){e.exports={pay_percent:"PercentButtons_pay_percent__3cXnW",pay_percent_select:"PercentButtons_pay_percent_select__1UI6X"}},37:function(e,t,n){e.exports={app:"App_app__3uv94"}},50:function(e,t,n){"use strict";n.r(t);var r=n(3),a=n(1),c=n(10),i=n.n(c),s=n(17),u=n.n(s),o=n(26),l=n(19),f=n(14),p=n.n(f),j=n(18),d=n.n(j),b=function(e){return e.toString().replace(/\s/g,"").replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1 ")},_=function(e){var t=e.value,n=e.title;return Object(r.jsxs)("div",{className:d.a.info_cart,children:[Object(r.jsx)("label",{className:d.a.info_cart_lable,children:n}),b(function(e){return isNaN(e)||e===1/0||e===-1/0||e<0?0:e}(t).toFixed(2))," \u20bd"]})},v=function(e){var t=e.price,n=e.firstPay,a=e.years,c=e.percent,i=function(e,t){return e-t}(t,n),s=function(e,t,n){var r=e/1200;return n*(r+r/(Math.pow(1+r,12*t)-1))}(c,a,i),u=function(e){return e/3*5}(s),o=function(e,t,n,r){return e*t*12-n+r}(s,a,t,n);return Object(r.jsx)("div",{className:d.a.main,children:Object(r.jsxs)("div",{className:d.a.info,children:[Object(r.jsxs)("div",{className:d.a.info_payment,children:[Object(r.jsx)(_,{value:s,title:"\u0415\u0436\u0435\u043c\u0435\u0441\u044f\u0447\u043d\u044b\u0439 \u043f\u043b\u0430\u0442\u0435\u0436"}),Object(r.jsx)(_,{value:u,title:"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0439 \u0434\u043e\u0445\u043e\u0434"})]}),Object(r.jsxs)("div",{className:d.a.info_credit,children:[Object(r.jsx)(_,{value:o,title:"\u041f\u0435\u0440\u0435\u043f\u043b\u0430\u0442\u0430"}),Object(r.jsx)(_,{value:i,title:"\u0422\u0435\u043b\u043e \u043a\u0440\u0435\u0434\u0438\u0442\u0430"})]})]})})},O=n(61),h=n(60),m=n(29),x=n.n(m),g=function(e){var t=e.firstPayPercents,n=e.firstPayPercent,a=e.changeFirstPayPercent;return t?t.map((function(e,t){return Object(r.jsx)("button",{className:e===n?x.a.pay_percent_select:x.a.pay_percent,value:e,onClick:a,children:"".concat(e," %")},t)})):null},y=function(e){return e.toString().replace(/\s/g,"")},P=n(20),C=Object(P.createValidator)((function(e){var t=+y(e.data.price);e.prop((function(e){return e.price}),(function(e){e.invalid((function(e){return!e}),"\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u043d\u0435\u0434\u0432\u0438\u0436\u0438\u043c\u043e\u0441\u0442\u0438 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0443\u043a\u0430\u0437\u0430\u043d\u0430","submit")})),e.prop((function(e){return e.firstPay}),(function(e){e.invalid((function(e){return!e}),"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043f\u0435\u0440\u0432\u043e\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u044b\u0439 \u0432\u0437\u043d\u043e\u0441","submit")})),e.prop((function(e){return e.firstPay}),(function(e){e.invalid((function(e){return+y(e)>t}),"\u041f\u0435\u0440\u0432\u043e\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u044b\u0439 \u0432\u0437\u043d\u043e\u0441 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u0438 \u043d\u0435\u0434\u0432\u0438\u0436\u0438\u043c\u043e\u0441\u0442\u0438","lostfocus")}))})),N={9:"[0-9 ]"},S=function(){var e=Object(a.useState)(0),t=Object(l.a)(e,2),n=t[0],c=t[1],i=function(){var e,t=null!==(e=JSON.parse(localStorage.getItem("creditInfo")))&&void 0!==e?e:{},n=t.price,r=void 0===n?"":n,a=t.firstPay,c=void 0===a?"":a,i=t.years,s=void 0===i?"":i,u=t.percent,o=void 0===u?"":u,l=t.firstPayPercent;return{price:r,firstPay:c,years:s,percent:o,firstPayPercent:void 0===l?0:l}}(),s=Object(a.useState)(i.price),f=Object(l.a)(s,2),j=f[0],d=f[1],_=Object(a.useState)(i.firstPayPercent),m=Object(l.a)(_,2),x=m[0],S=m[1],k=Object(a.useState)(i.firstPay),I=Object(l.a)(k,2),w=I[0],F=I[1],J=Object(a.useState)(i.years),V=Object(l.a)(J,2),R=V[0],z=V[1],B=Object(a.useState)(i.percent),W=Object(l.a)(B,2),E=W[0],M=W[1];Object(a.useEffect)((function(){if(""!==j&&0===n&&0!==x&&"0"!==x){var e=Math.round(+y(j)/100*x);F(b(e))}if(""!==w&&1===n&&0!==x&&"0"!==x){var t=Math.round(+y(w)/x*100);d(b(t))}""===j&&1===+y(w)&&0!==x&&F(""),""===w&&1===n&&0!==x&&d("")}),[x,j,w,n]);var U={price:j.toString(),firstPay:w.toString(),years:R.toString(),percent:E.toString(),firstPayPercent:x.toString()},X=function(){var e=Object(o.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(t=q.current)||void 0===t?void 0:t.validate();case 2:if(e.sent){e.next=4;break}return e.abrupt("return");case 4:localStorage.setItem("creditInfo",JSON.stringify(U));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=Object(a.useRef)(),L=Object(a.useRef)(),Q=function(){var e=Object(o.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.current.blur();case 2:return e.next=4,A.current.focus();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$=function(){var e=Object(o.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.current.blur();case 2:return e.next=4,L.current.focus();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=Object(a.useRef)(null),D=C({price:j,firstPay:w,years:R,percent:E});return Object(r.jsxs)("div",{className:p.a.main,children:[Object(r.jsx)(P.ValidationContainer,{ref:q,children:Object(r.jsxs)("div",{className:p.a.form,children:[Object(r.jsxs)("div",{className:p.a.input,children:[Object(r.jsx)("label",{children:"\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u043d\u0435\u0434\u0432\u0438\u0436\u0438\u043c\u043e\u0441\u0442\u0438"}),Object(r.jsx)(P.ValidationWrapper,{validationInfo:D.getNode((function(e){return e.price})).get(),children:Object(r.jsx)(O.a,{autoFocus:!0,ref:A,rightIcon:"\u20bd",type:"text",size:"small",mask:"99999999999",onChange:function(e){return function(e){c(0),+y(e.target.value)>+y(j)&&Q(),d(b(e.target.value))}(e)},value:j,maskChar:" ",formatChars:N,onFocus:function(e){return e.target.setSelectionRange(e.target.value.length,e.target.value.length)}})})]}),Object(r.jsxs)("div",{className:p.a.input,children:[Object(r.jsx)("label",{children:"\u041f\u0435\u0440\u0432\u043e\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u044b\u0439 \u0432\u0437\u043d\u043e\u0441"}),Object(r.jsx)(P.ValidationWrapper,{validationInfo:D.getNode((function(e){return e.firstPay})).get(),children:Object(r.jsx)(O.a,{ref:L,rightIcon:"\u20bd",type:"text",size:"small",mask:"9999999999",onChange:function(e){return function(e){c(1),+y(e.target.value)>+y(w)&&$(),F(b(e.target.value))}(e)},value:w,maskChar:" ",formatChars:N,onFocus:function(e){return e.target.setSelectionRange(e.target.value.length,e.target.value.length)}})})]}),Object(r.jsx)("div",{className:p.a.first_pay_percent,children:Object(r.jsx)(g,{firstPayPercents:[10,15,20,25,30],firstPayPercent:x,changeFirstPayPercent:function(e){var t=+e.target.value;S(x===t?0:t)}})}),Object(r.jsxs)("div",{className:p.a.input,children:[Object(r.jsx)("label",{children:"\u0421\u0440\u043e\u043a \u043a\u0440\u0435\u0434\u0438\u0442\u0430"}),Object(r.jsx)(O.a,{value:R,onValueChange:z,mask:"99",maskChar:" ",rightIcon:"\u041b\u0415\u0422"})]}),Object(r.jsxs)("div",{className:p.a.input,children:[Object(r.jsx)("label",{children:"\u041f\u0440\u043e\u0446\u0435\u043d\u0442\u043d\u0430\u044f \u0441\u0442\u0430\u0432\u043a\u0430"}),Object(r.jsx)(O.a,{value:E,onValueChange:M,rightIcon:"%",mask:"99",maskChar:" "})]}),Object(r.jsxs)("div",{className:p.a.submit,children:[Object(r.jsx)(h.a,{use:"success",onClick:X,width:"45%",children:"Save"}),Object(r.jsx)(h.a,{use:"default",onClick:function(e){return d(""),z(""),F(""),M(""),S(0),void localStorage.clear()},width:"45%",children:"Clear"})]})]})}),Object(r.jsx)(v,{price:+y(j),firstPay:+y(w),years:+y(R),percent:+y(E)})]})},k=n(37),I=n.n(k);var w=function(){return Object(r.jsx)("div",{className:I.a.app,children:Object(r.jsx)(S,{})})};i.a.render(Object(r.jsx)(w,{}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.0ce5bd2e.chunk.js.map