(this["webpackJsonpcorona-data"]=this["webpackJsonpcorona-data"]||[]).push([[0],{87:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a(0),c=a(11),o=a.n(c),i=(a(87),a(16)),s=a(30),l=a.n(s),d=a(41),u=a(12),p=a(72),j=a(154),h="".concat("https://covid-19-tracking.p.rapidapi.com/v1").concat("?rapidapi-key=").concat("ac9eadc223mshe07074815823f0fp176a07jsn425000616066");function b(){return(b=Object(d.a)(l.a.mark((function e(t){var a,n,r,c,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.url,n=t.method,r=t.body,c=r?{body:JSON.stringify(r)||"",headers:{"Content-Type":"application/json"},method:n}:{method:n},e.next=4,fetch(a,c);case 4:return o=e.sent,e.abrupt("return",o.json());case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var m={getCoronaData:function(){return function(e){return b.apply(this,arguments)}({url:h,method:"GET"})}},f=a.p+"static/media/corona-logo_260x260.0d91d905.png",x=[{checked:!0,name:"newCases",title:"New cases"},{checked:!1,name:"newDeaths",title:"New deaths"},{checked:!1,name:"activeCases",title:"Active cases"},{checked:!0,name:"updateDate",title:"Last updated"}],g=x[0].name,O=x[1].name,C=(x[2].name,x[3].name,"darkMode"),v="filters",w="selectedCountries",y={src:f,title:"logo"},S="N/A",k="Data for selected country",N="Data for selected countries",W=function(e){return Array.isArray(e)&&e.length>2?e.slice(1,-1).map((function(e){return{name:e.Country_text}})):e},D=a(70),T=Object(D.a)({border:{borderRadius:{base:"".concat(4,"px")}},cardWidth:"".concat(282,"px"),color:{backgroundColor:"#ffffff",cardBackgroundColor:"#F5F5F5",newCasesBackgroundColor:"#FFEEAA",newCasesTextColor:"#212121",newDeathBackgroundColor:"#FF0000",newDeathTextColor:"#ffffff",textColor:"#191919"},customSpacing:{xSmall:"".concat(16/2.66,"px"),small:"".concat(8,"px"),base:"".concat(16,"px"),large:"".concat(32,"px"),xLarge:"".concat(48,"px")},logoSize:"".concat(40,"px")}),A=Object(D.a)(Object(i.a)(Object(i.a)({},T),{},{palette:{type:"dark",background:{paper:"#212121"}},color:Object(i.a)(Object(i.a)({},T.color),{},{backgroundColor:"#333333",cardBackgroundColor:"#2d2d2d",textColor:"#ffffff"})})),I=a(156),F=a(142),B=a(157),E=a(64),z=a.n(E),L=a(66),_=a.n(L),R=a(155),J=a(96),M=a(138),H=Object(M.a)((function(e){return{dropdownContainer:{display:"flex",alignItems:"center",flexDirection:"column",marginTop:e.customSpacing.base,padding:"0 ".concat(e.customSpacing.small," ").concat(e.customSpacing.large)},dropdownTitleWrapper:{textAlign:"center"},dropdownWrapper:{display:"flex",justifyContent:"center",marginTop:e.customSpacing.base,width:"90%","@media only screen and (min-width: 600px)":{width:"60%"},"@media only screen and (min-width: 768px)":{width:"50%"},"@media only screen and (min-width: 992px)":{width:"40%"}},dropdown:{width:"100%"},buttonWrapper:{marginTop:e.customSpacing.base}}}));var q=function(e){var t=e.countries,a=e.handleCountrySelect,r=e.handleShow,c=e.selectedCountries,o=H(),s=Object(n.jsx)(z.a,{fontSize:"small"}),l=Object(n.jsx)(_.a,{fontSize:"small"});return Object(n.jsxs)("div",{className:o.dropdownContainer,children:[Object(n.jsx)("div",{className:o.dropdownTitleWrapper,children:Object(n.jsx)(J.a,{variant:"h5",children:"Select at least one country"})}),Object(n.jsx)("div",{className:o.dropdownWrapper,children:Object(n.jsx)(I.a,{autoHighlight:!0,className:o.dropdown,disableCloseOnSelect:!0,getOptionLabel:function(e){return e.name},getOptionSelected:function(e,t){return e.name===t.name},multiple:!0,onChange:function(e,t){return a(t)},options:t,renderInput:function(e){return Object(n.jsx)(R.a,Object(i.a)(Object(i.a)({},e),{},{label:"Countries",placeholder:"Favorites",variant:"outlined"}))},renderOption:function(e,t){var a=t.selected;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(B.a,{checked:a,checkedIcon:s,icon:l,style:{marginRight:8}}),e.name]})},value:c})}),Object(n.jsx)("div",{className:o.buttonWrapper,children:Object(n.jsx)(F.a,{color:"primary",disabled:!c.length,onClick:function(e){return r(e)},variant:"contained",children:"Save & Show"})})]})},G=a(143),U=a(145),K=a(146),P=a(141),Q=a(144),V=Object(M.a)((function(e){return{header:{backgroundColor:e.color.backgroundColor,color:e.color.textColor},logoIconContainer:{display:"flex",justifyContent:"space-between",width:"100%"},logoTitleWrapper:{display:"flex",alignItems:"center"},logoWrapper:{display:"flex"},logo:{height:e.logoSize,width:e.logoSize},titleWrapper:{marginLeft:e.customSpacing.base},icon:{color:e.color.textColor}}}));var X=function(e){var t=e.darkMode,a=e.handleDarkMode,r=V();return Object(n.jsx)("div",{children:Object(n.jsx)(G.a,{className:r.header,position:"static",children:Object(n.jsx)(Q.a,{children:Object(n.jsxs)("div",{className:r.logoIconContainer,children:[Object(n.jsxs)("div",{className:r.logoTitleWrapper,children:[Object(n.jsx)("div",{className:r.logoWrapper,children:Object(n.jsx)("img",{alt:y.title,className:r.logo,src:y.src})}),Object(n.jsx)("div",{className:r.titleWrapper,children:Object(n.jsx)(J.a,{variant:"h6",children:"Corona Data"})})]}),Object(n.jsx)("div",{children:t?Object(n.jsx)(P.a,{className:r.icon,onClick:a,children:Object(n.jsx)(U.a,{})}):Object(n.jsx)(P.a,{className:r.icon,onClick:a,children:Object(n.jsx)(K.a,{})})})]})})})})},Y=a(147),Z=Object(M.a)({loaderContainer:{textAlign:"center",marginTop:"35vh",minHeight:200}});var $=function(){var e=Z();return Object(n.jsx)("div",{className:e.loaderContainer,children:Object(n.jsx)(Y.a,{size:60,thickness:4})})},ee=function(e){try{var t=localStorage.getItem(e);if(null===t)return;return JSON.parse(t)}catch(a){return}},te=function(e,t){try{var a=JSON.stringify(t);localStorage.setItem(e,a)}catch(n){throw new Error("Can't save changes in local storage")}},ae=function(e){if(e){var t=e.split(" "),a=t[0].split("-"),n="".concat(a[2],"/").concat(a[1],"/").concat(a[0]);return"".concat(t[1]," ").concat(n)}return e},ne=a(69),re=a.n(ne),ce=a(151),oe=a(150),ie=a(152),se=a(153),le=a(148),de=a(149),ue=function(e){return e?Number.isInteger(+e[e.length-1]):e},pe=Object(M.a)((function(e){return{cardContainer:{backgroundColor:e.color.cardBackgroundColor,margin:e.customSpacing.small,minWidth:e.cardWidth},caseWrapper:{display:"flex",alignItems:"center",marginLeft:e.customSpacing.base,marginTop:e.customSpacing.small},dataWrapper:{marginLeft:e.customSpacing.base},newCasesWrapper:{backgroundColor:e.color.newCasesBackgroundColor,borderRadius:e.border.borderRadius.base,color:e.color.newCasesTextColor,padding:"0 ".concat(e.customSpacing.xSmall)},deathDataWrapper:{backgroundColor:e.color.newDeathBackgroundColor,borderRadius:e.border.borderRadius.base,color:e.color.newDeathTextColor,padding:"0 ".concat(e.customSpacing.xSmall)}}}));var je=function(e){var t=e.country,a=e.filterData,r=pe();return Object(n.jsx)(le.a,{className:r.cardContainer,variant:"outlined",children:Object(n.jsxs)(de.a,{children:[Object(n.jsx)("div",{children:Object(n.jsx)(J.a,{variant:"h6",children:t.name})}),a.map((function(e){return e.checked?Object(n.jsxs)("div",{className:r.caseWrapper,children:[Object(n.jsx)("div",{children:Object(n.jsx)(J.a,{variant:"subtitle2",children:"".concat(e.title,":")})}),Object(n.jsx)("div",{className:"".concat(r.dataWrapper," ").concat(e.name===g&&ue(t[e.name])?r.newCasesWrapper:""," ").concat(e.name===O&&ue(t[e.name])?r.deathDataWrapper:""),children:Object(n.jsx)(J.a,{variant:"subtitle1",children:t[e.name]})})]},e.name):null}))]})})},he=Object(M.a)((function(e){return{showDataContainer:{display:"flex",flexDirection:"column",marginTop:e.customSpacing.base,padding:"0 ".concat(e.customSpacing.small," ").concat(e.customSpacing.large)},showDataTitleWrapper:{textAlign:"center"},filtersIconWrapper:{display:"flex",justifyContent:"space-around",marginTop:e.customSpacing.base},dataWrapper:{display:"flex",justifyContent:"center",marginTop:e.customSpacing.base},cardWrapper:{display:"flex",flexFlow:"wrap",justifyContent:"space-around"}}}));var be=function(e){var t=e.countriesToShow,a=e.filterData,r=e.handleCheckboxChange,c=e.handleShow,o=he();return Object(n.jsxs)("div",{className:o.showDataContainer,children:[Object(n.jsx)("div",{className:o.showDataTitleWrapper,children:Object(n.jsx)(J.a,{variant:"h5",children:t.length>1?N:k})}),Object(n.jsxs)("div",{className:o.filtersIconWrapper,children:[Object(n.jsx)("div",{children:Object(n.jsx)(oe.a,{row:!0,children:a.map((function(e){return Object(n.jsx)(ce.a,{control:Object(n.jsx)(B.a,{checked:e.checked,onChange:function(){return r(e.name)},size:"small"}),label:e.title},e.name)}))})}),Object(n.jsx)("div",{children:Object(n.jsx)(ie.a,{title:"Edit countries",TransitionComponent:se.a,children:Object(n.jsx)(P.a,{onClick:c,children:Object(n.jsx)(re.a,{})})})})]}),Object(n.jsx)("div",{className:o.dataWrapper,children:Object(n.jsx)("div",{className:o.cardWrapper,children:t.map((function(e){return Object(n.jsx)(je,{country:e,filterData:a},e.name)}))})})]})},me=a(19),fe=function(e){return Array.isArray(e)&&e.length>1?Object(me.a)(e).sort((function(e,t){return e.name<t.name?-1:e.name>t.name?1:0})):e},xe=Object(M.a)({paper:{cursor:"default",minHeight:"100vh"}});var ge=function(){var e,t=xe(),a=Object(r.useState)(ee(C)||!1),c=Object(u.a)(a,2),o=c[0],s=c[1],h=o?A:T,b=Object(r.useState)([]),f=Object(u.a)(b,2),g=f[0],O=f[1],y=Object(r.useState)([]),k=Object(u.a)(y,2),N=k[0],D=k[1],I=Object(r.useState)([]),F=Object(u.a)(I,2),B=F[0],E=F[1],z=Object(r.useState)(!0),L=Object(u.a)(z,2),_=L[0],R=L[1],J=Object(r.useState)(!0),M=Object(u.a)(J,2),H=M[0],G=M[1],U=ee(v),K=(e=U,Array.isArray(e)&&e.length?e.map((function(e,t){return e.title===x[t].title&&e.name===x[t].name?e:x[t]})):x),P=Object(r.useState)(K),Q=Object(u.a)(P,2),V=Q[0],Y=Q[1],Z=Object(r.useState)([]),ne=Object(u.a)(Z,2),re=ne[0],ce=ne[1],oe=function(){var e=Object(d.a)(l.a.mark((function e(){var t,a,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.getCoronaData();case 3:return t=e.sent,e.next=6,W(t);case 6:a=e.sent,n=fe(a),O(n),D(t),(r=ee(w))&&r.length&&(ce(r),R(!_)),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),G(!1);case 17:return e.prev=17,G(!1),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[0,14,17,20]])})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){oe()}),[]),Object(r.useEffect)((function(){var e,t,a=function(e){return Array.isArray(e)&&e.length?e.map((function(e){return{activeCases:e["Active Cases_text"]||S,name:e.Country_text||S,newCases:e["New Cases_text"]||S,newDeaths:e["New Deaths_text"]||S,updateDate:ae(e["Last Update"])||S}})):e}((e=re,t=N,Array.isArray(e)&&Array.isArray(t)&&e.length&&t.length?e.map((function(e){return t.find((function(t){return t.Country_text===e.name}))})):[]));E(a)}),[re]);var ie=function(e){e.preventDefault(),R(!_)};return Object(n.jsx)(j.a,{theme:h,children:Object(n.jsxs)(p.a,{className:t.paper,square:!0,children:[Object(n.jsx)(X,{darkMode:o,handleDarkMode:function(){s(!o),te(C,!o)}}),H?Object(n.jsx)($,{}):Object(n.jsx)("div",{children:_?Object(n.jsx)(q,{countries:g,handleCountrySelect:function(e){ce(e),te(w,e)},handleShow:ie,selectedCountries:re}):Object(n.jsx)(be,{countriesToShow:B,filterData:V,handleCheckboxChange:function(e){var t=V.map((function(t){return t.name===e?Object(i.a)(Object(i.a)({},t),{},{checked:!t.checked}):t}));Y(t),te(v,t)},handleShow:ie})})]})})};o.a.render(Object(n.jsx)(ge,{}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.44229f6f.chunk.js.map