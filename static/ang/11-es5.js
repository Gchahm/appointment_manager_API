!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function n(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{PgJR:function(e,i,o){"use strict";o.r(i),o.d(i,"EmployeeModule",(function(){return _}));var r,c=o("PCNd"),a=o("tyNb"),s=o("fXoL"),u=((r=function(){function e(){t(this,e)}return n(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(t){return new(t||r)},r.\u0275cmp=s.Kb({type:r,selectors:[["employee-home"]],decls:2,vars:0,template:function(t,e){1&t&&(s.Wb(0,"p"),s.Gc(1,"home works!"),s.Vb())},styles:[""]}),r),p=o("wd/R"),d=o("eJuo"),l=o("eIep"),m=o("lJxs"),b=o("vyqY"),f=o("YZpF"),h=o("kt0X"),y=o("ofXK"),v=o("Nls1"),D=o("Qu3c");function g(t,e){if(1&t){var n=s.Xb();s.Wb(0,"p"),s.Wb(1,"i",11),s.ec("click",(function(){return s.yc(n),s.ic().edit()})),s.Vb(),s.Vb()}}var k,w=((k=function(){function e(n){t(this,e),this.store=n}return n(e,[{key:"customerDetails",value:function(){return this.appointment.customer.email+"\n"+this.appointment.customer.phone}},{key:"edit",value:function(){this.store.dispatch(b.b.openAppointmentEventDialog({id:this.appointment.id,employeeMode:!0}))}}]),e}()).\u0275fac=function(t){return new(t||k)(s.Qb(h.h))},k.\u0275cmp=s.Kb({type:k,selectors:[["employee-schedule-appointment"]],inputs:{appointment:"appointment",showEdit:"showEdit"},decls:17,vars:7,consts:[[1,"schedule-appointment-container"],[1,"row"],[1,"col-2","text-center","m-auto","c-medium-gray"],[4,"ngIf"],[1,"col-6","m-auto"],[1,"m-auto"],[1,"col-4","c-medium-gray"],[1,"fa","fa-clock","c-primary","mr-2"],[1,"c-primary",3,"matTooltip","matTooltipClass"],[1,"fa","fa-address-card","mr-2"],[1,"col-12"],[1,"fa","fa-pen","c-primary","c-pointer",3,"click"]],template:function(t,e){1&t&&(s.Wb(0,"div",0),s.Wb(1,"div",1),s.Wb(2,"div",2),s.Gc(3),s.Ec(4,g,2,0,"p",3),s.Vb(),s.Wb(5,"div",4),s.Wb(6,"p",5),s.Gc(7),s.Vb(),s.Vb(),s.Wb(8,"div",6),s.Wb(9,"p"),s.Rb(10,"i",7),s.Gc(11),s.Vb(),s.Wb(12,"p",8),s.Rb(13,"i",9),s.Gc(14),s.Vb(),s.Vb(),s.Wb(15,"div",10),s.Rb(16,"hr"),s.Vb(),s.Vb(),s.Vb()),2&t&&(s.Db(3),s.Ic(" ",e.appointment.start.format("HH:mm")," "),s.Db(1),s.oc("ngIf",e.showEdit),s.Db(3),s.Ic(" ",e.appointment.service.name," "),s.Db(4),s.Ic(" ",e.appointment.service.duration," "),s.Db(1),s.oc("matTooltip",e.customerDetails())("matTooltipClass","tooltip-ws"),s.Db(2),s.Ic("",e.appointment.customer.name," "))},directives:[y.l,D.a],styles:[".schedule-appointment-container[_ngcontent-%COMP%]{font-weight:600;margin:0 15px}p[_ngcontent-%COMP%]{margin:0}"]}),k);function V(t,e){if(1&t){var n=s.Xb();s.Wb(0,"div",14),s.Wb(1,"p"),s.Gc(2),s.Vb(),s.Wb(3,"div",15),s.ec("click",(function(){s.yc(n);var t=e.$implicit;return s.ic().emitDate(t)})),s.Wb(4,"div",16),s.Gc(5),s.Vb(),s.Vb(),s.Vb()}if(2&t){var i=e.$implicit,o=s.ic();s.Db(2),s.Hc(i.format("ddd").toUpperCase()),s.Db(1),s.Hb("bg-primary",o.isCurrent(i)),s.Db(2),s.Ic(" ",i.format("DD")," ")}}function W(t,e){if(1&t){var n=s.Xb();s.Wb(0,"button",17),s.ec("click",(function(){s.yc(n);var t=s.ic();return t.add.emit(t.currentDate)})),s.Gc(1," New appointment "),s.Vb()}}function C(t,e){if(1&t&&s.Rb(0,"employee-schedule-appointment",18),2&t){var n=e.$implicit,i=s.ic();s.oc("appointment",n)("showEdit",i.permissions.change)}}var O,I=((O=function(){function e(){t(this,e),this.updateCurrent=new s.o,this.add=new s.o}return n(e,[{key:"dates",value:function(){for(var t=[],e=p.utc(this.startDate.toISOString());e.isBefore(this.endDate)||e.isSame(this.endDate);)t.push(p.utc(e.toISOString())),e=e.clone().add(1,"day");return t}},{key:"isCurrent",value:function(t){return this.currentDate.format("DDMMYYYY")===t.format("DDMMYYYY")}},{key:"emitDate",value:function(t){this.updateCurrent.emit(t)}},{key:"nextDay",value:function(){this.emitDate(this.currentDate.clone().add(1,"day"))}},{key:"previousDay",value:function(){this.emitDate(this.currentDate.clone().subtract(1,"day"))}},{key:"availability",value:function(){return Object(v.c)(this.employee.scheduleModel,this.currentDate).frames.map((function(t){return t.name})).reduce((function(t,e){return t+" | "+e}))}}]),e}()).\u0275fac=function(t){return new(t||O)},O.\u0275cmp=s.Kb({type:O,selectors:[["employee-schedule"]],inputs:{currentDate:"currentDate",startDate:"startDate",endDate:"endDate",appointments:"appointments",permissions:"permissions",employee:"employee"},outputs:{updateCurrent:"updateCurrent",add:"add"},decls:24,vars:7,consts:[[1,"schedule-container"],[1,"row"],[1,"col-12","h4","text-center"],[1,"col-12"],[1,"d-flex","c-primary","h3","text-center","mr-4","ml-4"],[1,"fa","fa-chevron-left","c-pointer",3,"click"],[1,"w-100"],[1,"fa","fa-chevron-right","c-pointer",3,"click"],[1,"d-flex","h4","text-center"],["class","date-box",4,"ngFor","ngForOf"],[1,"col-12","h5","text-center"],["class","btn btn-primary",3,"click",4,"ngIf"],[1,"pretty-scroll"],[3,"appointment","showEdit",4,"ngFor","ngForOf"],[1,"date-box"],[1,"day-round","c-pointer",3,"click"],[1,"inner"],[1,"btn","btn-primary",3,"click"],[3,"appointment","showEdit"]],template:function(t,e){1&t&&(s.Wb(0,"div",0),s.Wb(1,"div",1),s.Wb(2,"div",2),s.Gc(3),s.Vb(),s.Wb(4,"div",3),s.Wb(5,"div",4),s.Wb(6,"i",5),s.ec("click",(function(){return e.previousDay()})),s.Vb(),s.Wb(7,"span",6),s.Gc(8),s.Vb(),s.Wb(9,"i",7),s.ec("click",(function(){return e.nextDay()})),s.Vb(),s.Vb(),s.Vb(),s.Wb(10,"div",3),s.Wb(11,"div",8),s.Ec(12,V,6,4,"div",9),s.Vb(),s.Rb(13,"hr"),s.Vb(),s.Wb(14,"div",10),s.Gc(15),s.Rb(16,"hr"),s.Gc(17),s.Rb(18,"hr"),s.Ec(19,W,2,0,"button",11),s.Rb(20,"hr"),s.Vb(),s.Wb(21,"div",3),s.Wb(22,"div",12),s.Ec(23,C,1,2,"employee-schedule-appointment",13),s.Vb(),s.Vb(),s.Vb(),s.Vb()),2&t&&(s.Db(3),s.Ic(" ",e.employee.name," "),s.Db(5),s.Hc(e.currentDate.format("MMMM YYYY")),s.Db(4),s.oc("ngForOf",e.dates()),s.Db(3),s.Ic(" ",e.currentDate.format("dddd, DD MMMM YYYY")," "),s.Db(2),s.Ic(" ",e.availability()," "),s.Db(2),s.oc("ngIf",e.permissions.add),s.Db(4),s.oc("ngForOf",e.appointments))},directives:[y.k,y.l,w],styles:[".schedule-container[_ngcontent-%COMP%]{max-width:650px}.date-box[_ngcontent-%COMP%]{flex:1}.pretty-scroll[_ngcontent-%COMP%]{overflow-y:scroll;max-height:30rem}.day-round[_ngcontent-%COMP%]{position:relative;margin:auto;width:4rem;height:4rem;border-radius:2rem}.inner[_ngcontent-%COMP%]{margin:0;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}"]}),O);function M(t,e){if(1&t){var n=s.Xb();s.Wb(0,"div",1),s.Wb(1,"employee-schedule",2),s.ec("updateCurrent",(function(t){return s.yc(n),s.ic().updateCurrent(t)}))("add",(function(t){s.yc(n);var i=e.ngIf;return s.ic().openCreateDialog(t,i)})),s.jc(2,"async"),s.jc(3,"async"),s.jc(4,"async"),s.Vb(),s.Vb()}if(2&t){var i=e.ngIf,o=s.ic();s.Db(1),s.oc("currentDate",s.kc(2,6,o.currentDate$))("appointments",s.kc(3,8,o.appointments$))("permissions",s.kc(4,10,o.permissions$))("employee",i)("startDate",o.startDate)("endDate",o.endDate)}}var x,Y,E,j,G,$=((Y=function(){function e(n){t(this,e),this.store=n}return n(e,[{key:"ngOnInit",value:function(){var t=this;this.initialize(),this.employee$=this.store.select(f.s),this.appointments$=this.employee$.pipe(Object(l.a)((function(e){return t.store.select(b.d.selectCurrentDateEmployeeAppointments,{employeeId:e.id})}))),this.permissions$=this.store.select(f.q,{model:d.a.modelType}),this.currentDate$=this.store.select(b.d.selectCurrentDate).pipe(Object(m.a)((function(t){return p.utc(t)})))}},{key:"initialize",value:function(){this.updateCurrent(p().utc().startOf("day")),this.startDate=p().utc().startOf("day").subtract(3,"day"),this.endDate=p().utc().startOf("day").add(3,"day"),this.loadAppointments()}},{key:"updateCurrent",value:function(t){this.store.dispatch(b.b.setCurrentDate({date:t})),t.isAfter(this.endDate)&&(this.startDate=t,this.endDate=p.utc(t.toISOString()).add(6,"day")),t.isBefore(this.startDate)&&(this.startDate=p.utc(t.toISOString()).subtract(6,"day"),this.endDate=t),this.loadAppointments()}},{key:"loadAppointments",value:function(){this.store.dispatch(b.b.requestEntities({params:{fromDate:this.startDate,toDate:this.endDate}}))}},{key:"openCreateDialog",value:function(t,e){this.store.dispatch(b.b.openCreateAppointmentDialog({date:t,employee:e,employeeMode:!0}))}}]),e}()).\u0275fac=function(t){return new(t||Y)(s.Qb(h.h))},Y.\u0275cmp=s.Kb({type:Y,selectors:[["employee-schedule-page"]],decls:2,vars:3,consts:[["class","container mt-4",4,"ngIf"],[1,"container","mt-4"],[3,"currentDate","appointments","permissions","employee","startDate","endDate","updateCurrent","add"]],template:function(t,e){1&t&&(s.Ec(0,M,5,12,"div",0),s.jc(1,"async")),2&t&&s.oc("ngIf",s.kc(1,1,e.employee$))},directives:[y.l,I],pipes:[y.b],styles:[""],changeDetection:0}),Y),A=((x=function(){function e(n){t(this,e),this.store=n}return n(e,[{key:"canActivate",value:function(t,e){return this.store.pipe(f.j,Object(m.a)((function(t){return!!t.employee})))}}]),e}()).\u0275fac=function(t){return new(t||x)(s.ac(h.h))},x.\u0275prov=s.Mb({token:x,factory:x.\u0275fac,providedIn:"root"}),x),P=[{path:"home",icon:"home",component:u,canActivate:[A]},{path:"schedule",icon:"book",component:$,canActivate:[A]},{path:"",icon:"",component:$,canActivate:[A]}],R=o("7Qvi"),S=[{path:"",icon:"",component:(E=function e(){t(this,e),this.routes=P},E.\u0275fac=function(t){return new(t||E)},E.\u0275cmp=s.Kb({type:E,selectors:[["employee-dashboard"]],decls:2,vars:1,consts:[[3,"routes"]],template:function(t,e){1&t&&(s.Wb(0,"shared-dashboard-container-shell",0),s.Rb(1,"router-outlet"),s.Vb()),2&t&&s.oc("routes",e.routes)},directives:[R.a,a.g],styles:[""]}),E),children:P}],F=((j=function e(){t(this,e)}).\u0275mod=s.Ob({type:j}),j.\u0275inj=s.Nb({factory:function(t){return new(t||j)},imports:[[a.f.forChild(S)],a.f]}),j),X=o("QiP+"),_=((G=function e(){t(this,e)}).\u0275mod=s.Ob({type:G}),G.\u0275inj=s.Nb({factory:function(t){return new(t||G)},imports:[[c.a,F,X.a]]}),G)}}])}();