(this.webpackJsonpscherma=this.webpackJsonpscherma||[]).push([[0],{104:function(e,t,a){},120:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(12),c=a.n(i),o=(a(104),a(20)),l=a.n(o),s=a(42),u=a(43),m=a(49),f=a(48),p=a(27),h=a(10),d=(a(66),a(85)),g=a(166),v=a(146),E=a(159),b=a(150),y=a(151),S=a(165),k=a(46),j=a.n(k),O=a(47),w=a.n(O),x=a(36),I=a.n(x),z=a(162),C=a(121),A=a(160),N=a(164),q=a(163),F=a(154),U=a(157),W=a(158),T=a(3),D=(a(68),a(69),a(53)),L=a.n(D),M=a(70),P=a(13),R=Object(v.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},formControl:{margin:e.spacing(1),minWidth:180}}}));function G(e){return r.a.createElement(z.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:e.open,autoHideDuration:5e3,onClose:e.handleClose,message:e.messaggio,action:r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{size:"small","aria-label":"close",color:"inherit",onClick:e.handleClose},r.a.createElement(I.a,{fontSize:"small"})))})}function _(e,t){return H.apply(this,arguments)}function H(){return(H=Object(p.a)(l.a.mark((function e(t,a){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==t){e.next=3;break}return console.log("UNDEFINED"),e.abrupt("return");case 3:if("caricamento..."===t[0]){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,T.firestore().collection(T.auth().currentUser.uid).get();case 7:n=e.sent,a([""].concat(n.docs.map((function(e){return e.id})).filter((function(e){return"c76ln8qXtrzFjQirovu1"!==e}))));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(){return(B=Object(p.a)(l.a.mark((function e(t,a,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("caricamento..."===t[0].testo&&""!==n){e.next=2;break}return e.abrupt("return",!1);case 2:return T.firestore().collection(T.auth().currentUser.uid).doc(n).get().then((function(e){return a(e.data().atleti.map((function(e,t){return{chiave:t,testo:e}})))})).catch((function(e){console.log(e),a([{chiave:0,testo:""}])})),e.abrupt("return",!0);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Q=function(e){var t=R(),a=Object(n.useState)(""),i=Object(h.a)(a,2),c=i[0],o=i[1],l=Object(n.useState)(!1),s=Object(h.a)(l,2),u=s[0],m=s[1],f=Object(n.useState)(""),p=Object(h.a)(f,2),d=p[0],g=p[1],v=Object(n.useState)(["caricamento..."]),E=Object(h.a)(v,2),k=E[0],O=E[1],x=Object(n.useState)(-1),I=Object(h.a)(x,2),z=I[0],C=I[1],U=Object(n.useState)([{chiave:0,testo:"caricamento..."}]),W=Object(h.a)(U,2),D=W[0],L=W[1],M=Object(n.useState)(!1),P=Object(h.a)(M,2),H=P[0],Q=P[1],V=function(e){m(!0),g(e)};return _(k,O),function(e,t,a){B.apply(this,arguments)}(D,L,c),-1===z&&"caricamento..."!==D[0].testo&&C(D.length),1!==k.length||""!==k[0]||H||(V("Prima di aggiungere atleti crea delle sequenze di azioni."),Q(!0)),r.a.createElement(r.a.Fragment,null,r.a.createElement(G,{open:u,messaggio:d,handleClose:function(e,t){"clickaway"!==t&&m(!1)}}),r.a.createElement(y.a,{container:!0,direction:"column",justify:"flex-start",alignItems:"center",style:{minHeight:"80vh"}},r.a.createElement(y.a,{item:!0,xs:12,alignItems:"center",style:{marginTop:"40px"}},r.a.createElement(q.a,{variant:"filled",className:t.formControl},r.a.createElement(N.a,{htmlFor:"filled-age-native-simple"},"Sequenze"),r.a.createElement(A.a,{native:!0,value:c,onChange:function(e){return function(e){o(e.target.value),L([{chiave:0,testo:"caricamento..."}]),C(-1)}(e)},inputProps:{name:"azioni",id:"filled-azini-native-simple"}},k.map((function(e){return r.a.createElement("option",{value:e},e)}))))),""!==c?r.a.createElement(y.a,{item:!0,xs:12,alignItems:"center",style:{marginTop:"40px"},key:c},r.a.createElement(y.a,{container:!0,direction:"column",justify:"center",alignItems:"center",key:"nuova"+c},Array(-1!==z?z:1).fill(1).map((function(e,t){return e+t-1})).map((function(e){return r.a.createElement(y.a,{item:!0,xs:9,alignItems:"center",key:"azione"+e.toString()},r.a.createElement(S.a,{id:"mailAtleta"+e.toString(),label:"Email atleta",onChange:function(t){return function(e,t){try{if(D.map((function(e){return e.chiave})).includes(e)){var a=D;a[e].testo=t,L(a)}else L(D.concat({chiave:e,testo:t}))}catch(n){console.log(n),L(D.concat({chiave:e,testo:t}))}}(e,t.target.value)},key:"mailAtleta"+e.toString()+D[e].testo,defaultValue:D[e].testo}))}))),r.a.createElement(y.a,{item:!0,xs:12,alignItems:"center",style:{marginTop:"20px"}},r.a.createElement(b.a,{color:"primary","aria-label":"aggiungi",onClick:function(){return C(z+1)}},r.a.createElement(j.a,null))),r.a.createElement(y.a,{item:!0,xs:12,alignItems:"center"},r.a.createElement(F.a,null),r.a.createElement(b.a,{color:"primary","aria-label":"save",onClick:function(){return function(){if(""!==c){var t={atleti:D.map((function(e){return e.testo}))};T.firestore().collection(T.auth().currentUser.uid).doc(c).collection("esercizi").doc().set(t,{merge:!0}),_(e.listaSequenze,e.setListaSequenze),V("Salvato.")}else V("Selezione una sequenza per salvare.")}()}},r.a.createElement(w.a,null)))):void 0))},V=Object(v.a)((function(e){return{select:{color:"white","&:before":{borderColor:"white"},"&:after":{borderColor:"white"}},icon:{fill:"white"},formControl:{margin:e.spacing(1),minWidth:180,color:"white",borderBottom:"3px solid white"},inputLabel:{color:"white",borderColor:"white",marginColor:"white"}}}));function X(){return(X=Object(p.a)(l.a.mark((function e(t,a){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==t){e.next=3;break}return console.log("UNDEFINED"),e.abrupt("return");case 3:if("caricamento..."===t[0]){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,T.firestore().collectionGroup("esercizi").where("atleti","array-contains",T.auth().currentUser.email).get();case 7:n=e.sent,console.log(n.docs.map((function(e){return e.id})).filter((function(e){return"c76ln8qXtrzFjQirovu1"!==e})));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(){var e=Object(n.useState)(""),t=Object(h.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)(["caricamento..."]),o=Object(h.a)(c,2),l=o[0],s=o[1],u=V();return function(e,t){X.apply(this,arguments)}(l,s),r.a.createElement(q.a,{variant:"standard",color:"secondary",className:u.formControl},r.a.createElement(N.a,{className:u.inputLabel,htmlFor:"standard-age-native-simple"},"Inviti"),r.a.createElement(A.a,{native:!0,value:a,onChange:function(e){return function(e){i(e.target.value)}(e)},className:u.select,inputProps:{name:"inviti",id:"filled-age-native-simple",classes:{icon:u.icon}}},r.a.createElement("option",{value:""}),r.a.createElement("option",{value:"test"},"Test")))}var K=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={isSignedIn:!1},e.uiConfig={signInFlow:"popup",signInOptions:[T.auth.GoogleAuthProvider.PROVIDER_ID],callbacks:{signInSuccessWithAuthResult:function(){return!1}}},e.chiudiFinestra=function(){e.setState({azioni:!1,atleti:!1})},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.unregisterAuthObserver=T.auth().onAuthStateChanged((function(t){return e.setState({isSignedIn:!!t})}))}},{key:"componentWillUnmount",value:function(){this.unregisterAuthObserver()}},{key:"render",value:function(){return this.state.isSignedIn?r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App-body"},r.a.createElement(y.a,{container:!0,direction:"column",justify:"center",alignItems:"center",style:{minHeight:"100vh",minWidth:"100vw"}},r.a.createElement(y.a,{item:!0,xs:12,sm:6,alignItems:"center"},r.a.createElement(J,null))))):r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(L.a,{uiConfig:this.uiConfig,firebaseAuth:T.auth()})))}}]),a}(r.a.Component),$=a(155),Y=a(156),Z=a(73),ee=a.n(Z),te=Object(v.a)((function(e){return{title:{flexGrow:1}}}));var ae=function(){var e=te(),t=Object(P.f)().pathname;return r.a.createElement($.a,{position:"fixed",color:"primary",elevation:0},r.a.createElement(Y.a,null,r.a.createElement(U.a,{href:"/",variant:"h6",className:e.title},"Azioni di scherma"),"/maestro"===t||"/atleta"===t?r.a.createElement(r.a.Fragment,null,r.a.createElement(W.a,{href:"/",style:{color:"white"}},"Home"),r.a.createElement(b.a,{style:{color:"white"},"aria-label":"logout",onClick:function(){T.auth().signOut()}},r.a.createElement(ee.a,null))):r.a.createElement(W.a,{href:"/maestro",style:{color:"white"}},"maestro")))};T.initializeApp({apiKey:"AIzaSyCe8mQ5RcM_tm7LPvM1kxbJ211Fq7G3fFA",authDomain:"scherma-d21ad.firebaseapp.com",databaseURL:"https://scherma-d21ad.firebaseio.com",projectId:"scherma-d21ad",storageBucket:"scherma-d21ad.appspot.com",messagingSenderId:"720411353134",appId:"1:720411353134:web:d7c17466ebf51edc34ffbf"}),T.firestore().enablePersistence().catch((function(e){"failed-precondition"===e.code||e.code}));var ne=Object(d.a)({palette:{background:{default:"#282c34"},primary:{main:"#282c34"},secondary:{main:"#ffffff"}},status:{danger:"orange"},typography:{h2:{color:"#fed111"},h1:{color:"#fed111"},h5:{color:"white"},h6:{color:"white"}}});ne=Object(g.a)(ne);var re=Object(v.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},formControl:{margin:e.spacing(1),minWidth:180}}}));function ie(e){return r.a.createElement(z.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:e.open,autoHideDuration:5e3,onClose:e.handleClose,message:e.messaggio,action:r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{size:"small","aria-label":"close",color:"inherit",onClick:e.handleClose},r.a.createElement(I.a,{fontSize:"small"})))})}function ce(e){var t=Object(n.useState)([]),a=Object(h.a)(t,2),i=a[0],c=a[1],o=Object(n.useState)([]),l=Object(h.a)(o,2),s=l[0],u=l[1],m=Object(n.useState)(""),f=Object(h.a)(m,2),p=f[0],d=f[1],g=Object(n.useState)(1),v=Object(h.a)(g,2),E=v[0],k=v[1];return r.a.createElement(y.a,{container:!0,direction:"column",justify:"center",alignItems:"center",key:"nuova"},r.a.createElement(y.a,{item:!0,xs:9,alignItems:"center",key:"nomenuova"},r.a.createElement(S.a,{id:"nomesequenza",label:"Nome sequenza",onChange:function(e){return d(e.target.value)}})),r.a.createElement(y.a,{item:!0,xs:9,alignItems:"center"},Array(E).fill(1).map((function(e,t){return e+t-1})).map((function(e){return r.a.createElement(y.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:1,key:"nuova"+e.toString()},r.a.createElement(y.a,{item:!0,xs:8,alignItems:"center",key:"azione"+e.toString()},r.a.createElement(S.a,{id:"azione_sel"+e.toString(),label:"Azione",onChange:function(t){return function(e,t){try{if(i.map((function(e){return e.chiave})).includes(e)){var a=i;a[e].testo=t,c(a)}else c(i.concat({chiave:e,testo:t}))}catch(n){c(i.concat({chiave:e,testo:t}))}}(e,t.target.value)},key:"azione_sel"+e.toString()})),r.a.createElement(y.a,{item:!0,xs:4,alignItems:"center",key:"tempo"+e.toString()},r.a.createElement(S.a,{id:"tempo_sel"+e.toString(),label:"Tempo",onChange:function(t){return function(e,t){try{if(s.map((function(e){return e.chiave})).includes(e)){var a=s;a[e].testo=t,u(a)}else u(s.concat({chiave:e,testo:t}))}catch(n){u(s.concat({chiave:e,testo:t}))}}(e,t.target.value)},key:"tempo_sel"+e.toString()})))}))),r.a.createElement(y.a,{item:!0,xs:3,alignItems:"center",style:{marginTop:"20px"}},r.a.createElement(b.a,{color:"primary","aria-label":"aggiungi",onClick:function(){return k(E+1)}},r.a.createElement(j.a,null))),r.a.createElement(y.a,{item:!0,xs:12,alignItems:"center"},r.a.createElement(F.a,null),r.a.createElement(b.a,{color:"primary","aria-label":"save",onClick:function(){return function(){if(""!==p)if(e.chiudiSnack(),i.length===s.length){var t={nome:T.auth().currentUser.displayName,mail:T.auth().currentUser.email},a={sequenza:i.map((function(e){return e.testo})),tempi:s.map((function(e){return e.testo}))},n=T.firestore().collection(T.auth().currentUser.uid);n.doc(p).set(a),n.doc("c76ln8qXtrzFjQirovu1").set(t),ue(e.listaSequenze,e.setListaSequenze),e.apriSnack("Salvato.")}else e.apriSnack("Mancano delle mosse o dei tempi.");else e.apriSnack("Inserisci il nome della sequenza per salvare.")}()}},r.a.createElement(w.a,null))))}function oe(){return(oe=Object(p.a)(l.a.mark((function e(t,a,n){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("caricamento..."===t[0].testo){e.next=2;break}return e.abrupt("return",!1);case 2:return(r=T.firestore().collection(T.auth().currentUser.uid).doc(n)).get().then((function(e){return console.log(e.data().sequenza.map((function(e,t){return{chiave:t,testo:e}})))})),r.get().then((function(e){return a(e.data().sequenza.map((function(e,t){return{chiave:t,testo:e}})))})),e.abrupt("return",!0);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function le(){return(le=Object(p.a)(l.a.mark((function e(t,a,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("caricamento..."===t[0].testo){e.next=2;break}return e.abrupt("return");case 2:T.firestore().collection(T.auth().currentUser.uid).doc(n).get().then((function(e){return a(e.data().tempi.map((function(e,t){return{chiave:t,testo:e}})))}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function se(e){var t=[e.listaMosse,e.setListaMosse],a=t[0],n=t[1],i=[e.listaTempi,e.setListaTempi],c=i[0],o=i[1],l=[e.numeroInput,e.setNumeroInput],s=l[0],u=l[1],m=e.nomeSequenza,f=function(e,t){try{if(a.map((function(e){return e.chiave})).includes(e)){var r=a;r[e].testo=t,n(r)}else n(a.concat({chiave:e,testo:t}))}catch(i){console.log(i),n(a.concat({chiave:e,testo:t}))}},p=function(e,t){try{if(c.map((function(e){return e.chiave})).includes(e)){var a=c;a[e].testo=t,o(a)}else o(c.concat({chiave:e,testo:t}))}catch(n){console.log(n),o(c.concat({chiave:e,testo:t}))}};return""===m?r.a.createElement("div",null,"Scegli una sequenza"):(function(e,t,a){oe.apply(this,arguments)}(a,n,m),function(e,t,a){le.apply(this,arguments)}(c,o,m),-1===s&&"caricamento..."!==a[0].testo&&"caricamento..."!==c[0].testo&&u(a.length),r.a.createElement(y.a,{container:!0,direction:"column",justify:"center",alignItems:"center",key:m},r.a.createElement(y.a,{item:!0,xs:9,alignItems:"center"},r.a.createElement(S.a,{id:"nomesequenza",label:"Nome sequenza",defaultValue:m,disabled:!0,key:m})),r.a.createElement(y.a,{item:!0,xs:9,alignItems:"center"},Array(-1!==s?s:1).fill(1).map((function(e,t){return e+t-1})).map((function(e){return r.a.createElement(y.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:1,key:a[0].testo+m+e.toString()},r.a.createElement(y.a,{item:!0,xs:8,alignItems:"center",key:a[e].testo+m+e.toString()},r.a.createElement(S.a,{key:a[e].testo+m+e.toString(),id:"azione_vecchia"+e.toString(),label:"Azione",defaultValue:a[e].testo,onChange:function(t){return f(e,t.target.value)}})),r.a.createElement(y.a,{item:!0,xs:4,alignItems:"center",key:c[e].testo+m+e.toString()},r.a.createElement(S.a,{key:c[e].testo+m+e.toString(),id:"tempo_vecchio"+e.toString(),label:"Tempo",defaultValue:c[e].testo,onChange:function(t){return p(e,t.target.value)}})))}))),r.a.createElement(y.a,{item:!0,xs:3,alignItems:"center",style:{marginTop:"20px"},key:"add"+m},r.a.createElement(b.a,{color:"primary","aria-label":"aggiungi",onClick:function(){u(s+1),f(s,""),p(s,"")}},r.a.createElement(j.a,null))),r.a.createElement(y.a,{item:!0,xs:12,alignItems:"center",key:"salva"+ +m},r.a.createElement(F.a,null),r.a.createElement(b.a,{color:"primary","aria-label":"save",onClick:function(){return function(){if(""!==m)if(e.chiudiSnack(),a.length===c.length){var t={nome:T.auth().currentUser.displayName,mail:T.auth().currentUser.email},n={sequenza:a.map((function(e){return e.testo})),tempi:c.map((function(e){return e.testo}))},r=T.firestore().collection(T.auth().currentUser.uid);r.doc(m).set(n),r.doc("c76ln8qXtrzFjQirovu1").set(t),ue(e.listaSequenze,e.setListaSequenze),e.apriSnack("Salvato.")}else e.apriSnack("Mancano delle mosse o dei tempi.");else e.apriSnack("Inserisci il nome della sequenza per salvare.")}()}},r.a.createElement(w.a,null)))))}function ue(e,t){return me.apply(this,arguments)}function me(){return(me=Object(p.a)(l.a.mark((function e(t,a){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==t){e.next=2;break}return e.abrupt("return");case 2:if("caricamento..."===t[0]){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,T.firestore().collection(T.auth().currentUser.uid).get();case 6:n=e.sent,a([""].concat(n.docs.map((function(e){return e.id})).filter((function(e){return"c76ln8qXtrzFjQirovu1"!==e}))));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function fe(e){var t=re(),a=Object(n.useState)([{chiave:0,testo:"caricamento..."}]),i=Object(h.a)(a,2),c=i[0],o=i[1],l=Object(n.useState)([{chiave:0,testo:"caricamento..."}]),s=Object(h.a)(l,2),u=s[0],m=s[1],f=Object(n.useState)(""),p=Object(h.a)(f,2),d=p[0],g=p[1],v=Object(n.useState)(!1),E=Object(h.a)(v,2),b=E[0],S=E[1],k=Object(n.useState)(!1),j=Object(h.a)(k,2),O=j[0],w=j[1],x=Object(n.useState)(""),I=Object(h.a)(x,2),z=I[0],C=I[1],U=Object(n.useState)(["caricamento..."]),W=Object(h.a)(U,2),T=W[0],D=W[1],L=Object(n.useState)(-1),M=Object(h.a)(L,2),P=M[0],R=M[1],G=function(e){console.log("apri snack"),w(!0),C(e)},_=function(e,t){"clickaway"!==t&&w(!1)};return ue(T,D),r.a.createElement(r.a.Fragment,null,r.a.createElement(ie,{open:O,messaggio:z,handleClose:_}),r.a.createElement(y.a,{container:!0,direction:"column",justify:"flex-start",alignItems:"center",style:{minHeight:"80vh"}},r.a.createElement(y.a,{item:!0,xs:12,alignItems:"center",style:{marginTop:"40px"}},r.a.createElement(q.a,{variant:"filled",className:t.formControl},r.a.createElement(N.a,{htmlFor:"filled-age-native-simple"},"Sequenze"),r.a.createElement(A.a,{native:!0,value:d,onChange:function(e){return function(e){g(e.target.value),o([{chiave:0,testo:"caricamento..."}]),m([{chiave:0,testo:"caricamento..."}]),R(-1),"creaNuova883745"===e.target.value?S(!0):S(!1)}(e)},inputProps:{name:"azioni",id:"filled-azini-native-simple"}},T.map((function(e){return r.a.createElement("option",{value:e},e)})),r.a.createElement(F.a,null),r.a.createElement("option",{value:"creaNuova883745"},"+ Crea nuova")))),b?r.a.createElement(ce,{apriSnack:G,chiudiSnack:_,listaSequenze:T,setListaSequenze:D}):"caricamento..."!==d?r.a.createElement(se,{apriSnack:G,chiudiSnack:_,nomeSequenza:d,listaMosse:c,setListaMosse:o,listaTempi:u,setListaTempi:m,numeroInput:P,setNumeroInput:R}):void 0))}function pe(e){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App-body"},r.a.createElement(C.a,{style:{margin:"50px",marginTop:"80px",minHeight:"80vh"}},r.a.createElement(b.a,{style:{color:"black",position:"fixed",right:"50px"},"aria-label":"logout",onClick:function(){e.chiudiFinestra()}},r.a.createElement(I.a,null)),"atleti"===e.cosa?r.a.createElement(Q,null):r.a.createElement(fe,null))))}var he=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={isSignedIn:!1,azioni:!1,atleti:!1},e.uiConfig={signInFlow:"popup",signInOptions:[T.auth.GoogleAuthProvider.PROVIDER_ID],callbacks:{signInSuccessWithAuthResult:function(){return!1}}},e.chiudiFinestra=function(){e.setState({azioni:!1,atleti:!1})},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.unregisterAuthObserver=T.auth().onAuthStateChanged((function(t){return e.setState({isSignedIn:!!t})}))}},{key:"componentWillUnmount",value:function(){this.unregisterAuthObserver()}},{key:"render",value:function(){var e=this;return this.state.azioni?r.a.createElement(pe,{cosa:"azioni",chiudiFinestra:this.chiudiFinestra}):this.state.atleti?r.a.createElement(pe,{cosa:"atleti",chiudiFinestra:this.chiudiFinestra}):this.state.isSignedIn?r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App-body"},r.a.createElement(y.a,{container:!0,direction:"column",justify:"center",alignItems:"center",style:{minHeight:"100vh",minWidth:"100vw"}},r.a.createElement(y.a,{item:!0,xs:12,sm:6,alignItems:"center"},r.a.createElement(U.a,{variant:"h4"},"Benvenuto ",T.auth().currentUser.displayName)),r.a.createElement(y.a,{item:!0,xs:3,alignItems:"center"},r.a.createElement("div",{style:{height:"40px"}})),r.a.createElement(y.a,{item:!0,xs:12,sm:6,alignItems:"center"},r.a.createElement(y.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:3},r.a.createElement(y.a,{item:!0,xs:6,alignItems:"center"},r.a.createElement(W.a,{variant:"contained",color:"secondary",size:"large",onClick:function(){return e.setState({azioni:!0})}},"Azioni")),r.a.createElement(y.a,{item:!0,xs:6,alignItems:"center"},r.a.createElement(W.a,{variant:"contained",color:"secondary",size:"large",onClick:function(){return e.setState({atleti:!0})}},"Atleti"))))))):r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(L.a,{uiConfig:this.uiConfig,firebaseAuth:T.auth()})))}}]),a}(r.a.Component),de=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){return e.setState({time:Date.now()})}),1500)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return r.a.createElement("p",null,this.props.mosse[Math.floor(Math.random()*this.props.mosse.length)])}}]),a}(r.a.Component);function ge(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(de,{mosse:["Passo avanti","Affondo","Passo indietro"]}),r.a.createElement(W.a,{href:"/atleta",variant:"contained",color:"secondary"},"Login atleta")))}var ve=function(){return r.a.createElement(E.a,{theme:ne},r.a.createElement(M.a,null,r.a.createElement("div",null,r.a.createElement(ae,null)),r.a.createElement(P.c,null,r.a.createElement(P.a,{path:"/maestro"},r.a.createElement(he,null)),r.a.createElement(P.a,{path:"/atleta"},r.a.createElement(K,null)),r.a.createElement(P.a,{exact:!0,path:"/"},r.a.createElement(ge,null)))))},Ee=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function be(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ve,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");Ee?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):be(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):be(t,e)}))}}()},66:function(e,t,a){},99:function(e,t,a){e.exports=a(120)}},[[99,1,2]]]);
//# sourceMappingURL=main.c08cb88c.chunk.js.map