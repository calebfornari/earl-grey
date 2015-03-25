
'use strict';require('earlgrey-runtime/6');let $targ$0;let $0$0;let __lt____lt____colon__$0;let $1$0;let accum_flags$0;let match_error$0;let Body$0;let named_statement_matcher$0;let flatmacro$0;let $2$0;let parse_clauses$0;let util$0;$0$0=require("../location");__lt____lt____colon__$0=getProperty($0$0,"<<:","../location");$1$0=require("./helpers");accum_flags$0=getProperty($1$0,"accum_flags","./helpers");match_error$0=getProperty($1$0,"match_error","./helpers");Body$0=getProperty($1$0,"Body","./helpers");named_statement_matcher$0=getProperty($1$0,"named_statement_matcher","./helpers");flatmacro$0=getProperty($1$0,"flatmacro","./helpers");$2$0=require("../pattern");parse_clauses$0=getProperty($2$0,"parse_clauses","../pattern");util$0=require("../util");$targ$0=(function(mac$0){let accum$0;let accum$1;let t0$3;let t1$2;let _elif$0;let _else$0;let t0$10;let t0$11;let t0$13;let t0$15;let t0$17;let t0$20;let t0$24;let t0$28;let MatchHandler$0;let $targ$1;let match_mac$0;let if_pattern$0;let $targ$2;let if_mac$0;let $targ$3;let else_mac$0;let $targ$4;let not_mac$0;let $targ$5;let and_mac$0;let $targ$6;let or_mac$0;let $targ$7;let when_mac$0;let $targ$8;let check_mac$0;let $targ$9;let project_mac$0;let exports$0;exports$0=({});MatchHandler$0=(function MatchHandler(){let $targ$10;let $it$0;if((!getChecker(MatchHandler$0)(this))){$it$0=Object.create(MatchHandler$0.prototype);}else{$it$0=this;}$targ$10=1;($it$0["wrapOrder"]=$targ$10);[];return $it$0;});(MatchHandler$0.prototype["expand"]=(function expand(info$0){let $targ$11;let $it$1;let self$0;$it$1=this;self$0=this;$targ$11=info$0.env.mark(["symbol",info$0.gensym("ph")]);($it$1["placeholder"]=$targ$11);[];return __lt____lt____colon__$0($it$1.placeholder,$it$1.location);}));(MatchHandler$0.prototype["wrap"]=(function wrap(expr$0,info$1,opt$0){let $it$2;let self$1;$it$2=this;self$1=this;return parse_clauses$0(info$1,$it$2.placeholder,Body$0(expr$0),__amp__(opt$0,({"wrap":null})));}));__amp____colon__(MatchHandler$0,__amp____colon__(((accum$0=({})),(accum$0["::name"]="MatchHandler"),accum$0),((accum$1=({})),(accum$1["::egclass"]=true),accum$1)));$targ$1=(function(ph$0$0,info$2,form$0,expr$1,flags$0){let x$0;let other$0;let t0$0;let m$0$0;let v$0;let b$1;let b$0;let $$10490$0;let $$10491$0;let t0$1;let t1$0;let t2$0;let t3$0;let m$1$0;let t0$2;let t1$1;let accum$2;let mbody$0;let opt$1;let to_match$0;let $targ$12;let value$0;let body$0;let other$1;if(((x$0=ph$0$0),((x$0 instanceof Array)&&(x$0[0]==="pattern")))){m$0$0=expr$1;if((Array.isArray(m$0$0)&&((t0$0=m$0$0.length),((t0$0===1)&&(m$0$0[0]==="void"))))){return __lt____lt____colon__$0(["special",__lt____lt____colon__$0(MatchHandler$0(),form$0)],form$0);}else{other$0=m$0$0;return ["all",__lt____lt____colon__$0(other$0,expr$1),__lt____lt____colon__$0(["special",__lt____lt____colon__$0(MatchHandler$0(),form$0)],form$0)];}}else{other$1=ph$0$0;opt$1=util$0.mkset(flags$0);to_match$0=__amp__(["symbol",info$2.gensym("m")],({"single_assignment":true}));m$1$0=expr$1;if((($$10490$0=Array.isArray(m$1$0))&&((t0$1=m$1$0.length),((t0$1===2)&&((m$1$0[0]==="data")&&((t1$0=getProjector(Body$0)(m$1$0[1])),(t1$0[0]&&((t2$0=t1$0[1]),(t3$0=t2$0.length),(t3$0>=0))))))))){b$0=Array.prototype.slice.call(t2$0,0);$targ$12=[["value",null],b$0];}else{if(($$10490$0&&((t0$1===3)&&((m$1$0[0]==="data")&&((v$0=m$1$0[1]),(t1$0=getProjector(Body$0)(m$1$0[2])),(t1$0[0]&&((t2$0=t1$0[1]),(t3$0=t2$0.length),(t3$0>=0)))))))){b$1=Array.prototype.slice.call(t2$0,0);$targ$12=[v$0,b$1];}else{$targ$12=___match_error(m$1$0);}}t0$2=$targ$12;if((Array.isArray(t0$2)&&((t1$1=t0$2.length),(t1$1===2)))){value$0=t0$2[0];body$0=t0$2[1];}else{___match_error($targ$12);}[value$0,body$0];__lt____lt____colon__$0(to_match$0,value$0);mbody$0=parse_clauses$0(info$2,to_match$0,body$0,__amp__(opt$1,__amp____colon__(((accum$2=({})),(accum$2["fallback"]=(function fallback(target$0){return match_error$0(target$0);})),accum$2),({"wrap":null}))));return ["send",["symbol","let"],["data",["send",["symbol","="],["data",to_match$0,value$0]],mbody$0]];}});t0$3=getProjector(accum_flags$0)($targ$1);if((t0$3[0]&&((t1$2=getProjector(mac$0("match"))(t0$3[1])),t1$2[0]))){match_mac$0=t1$2[1];}else{___match_error($targ$1);}_elif$0=named_statement_matcher$0("elif");_else$0=named_statement_matcher$0("else");if_pattern$0=["seq",["multiple",_elif$0],["multiple",_else$0,0,1]];$targ$2=(function(ctx$0,temp$0$0,form$1,ph$1$0){let t0$6;let m$2$0;let body$1;let a$2;let b$3;let a$1;let $$10599$0;let $$10600$0;let t0$5;let t1$4;let t2$2;let t3$2;let t4$1;let t5$0;let t6$0;let t7$0;let t8$0;let t9$0;let t10$0;let t11$0;let t12$0;let t13$0;let test$1;let ph$2$0;let test$0;let a$0;let b$2;let $$10601$0;let $$10602$0;let t0$4;let t1$3;let t2$1;let t3$1;let t4$0;t0$4=ph$1$0;t1$3=t0$4.length;if(((t1$3===4)&&(t0$4[0]==="data"))){test$0=t0$4[1];a$0=t0$4[2];b$2=t0$4[3];return ["if",test$0,a$0,b$2];}else{if(((t1$3===3)&&((t0$4[0]==="data")&&((test$1=t0$4[1]),(t2$1=getProjector(["multi"])(t0$4[2])),(t2$1[0]&&((t3$1=t2$1[1]),(t4$0=t3$1.length),((t4$0>=1)&&(t3$1[0]==="multi")))))))){ph$2$0=Array.prototype.slice.call(t3$1,1);t0$5=ph$2$0;t1$4=t0$5.length;if(((t1$4===1)&&((t2$2=t0$5[0]),(Array.isArray(t2$2)&&((t3$2=t2$2.length),((t3$2===3)&&((t2$2[0]==="send")&&((t4$1=t2$2[1]),(Array.isArray(t4$1)&&((t5$0=t4$1.length),((t5$0===2)&&((t4$1[0]==="symbol")&&((t4$1[1]==="then")&&((t6$0=t2$2[2]),(Array.isArray(t6$0)&&((t7$0=t6$0.length),((t7$0===2)&&(t6$0[0]==="data")))))))))))))))))){a$1=t6$0[1];return ["if",test$1,a$1,["value",undefined]];}else{if(((t1$4===2)&&((t2$2=t0$5[0]),(Array.isArray(t2$2)&&((t3$2=t2$2.length),((t3$2===3)&&((t2$2[0]==="send")&&((t4$1=t2$2[1]),(Array.isArray(t4$1)&&((t5$0=t4$1.length),((t5$0===2)&&((t4$1[0]==="symbol")&&((t4$1[1]==="then")&&((t6$0=t2$2[2]),(Array.isArray(t6$0)&&((t7$0=t6$0.length),((t7$0===2)&&((t6$0[0]==="data")&&((a$2=t6$0[1]),(t8$0=t0$5[1]),(Array.isArray(t8$0)&&((t9$0=t8$0.length),((t9$0===3)&&((t8$0[0]==="send")&&((t10$0=t8$0[1]),(Array.isArray(t10$0)&&((t11$0=t10$0.length),((t11$0===2)&&((t10$0[0]==="symbol")&&((t10$0[1]==="else")&&((t12$0=t8$0[2]),(Array.isArray(t12$0)&&((t13$0=t12$0.length),((t13$0===2)&&(t12$0[0]==="data")))))))))))))))))))))))))))))))))){b$3=t12$0[1];return ["if",test$1,a$2,b$3];}else{body$1=ph$2$0;m$2$0=ctx$0;if((Array.isArray(m$2$0)&&((t0$6=m$2$0.length),((t0$6===2)&&((m$2$0[0]==="expr")&&(m$2$0[1]==="multi")))))){return flatmacro$0(if_pattern$0,(function(temp$1$0){let t0$7;let t1$5;let t2$3;let t3$3;let t4$2;let t5$1;let m$3;let m$4;let rval$0;let elifs$0;let elses$0;t0$7=temp$1$0;if((Array.isArray(t0$7)&&((t1$5=t0$7.length),((t1$5===3)&&((t0$7[0]==="seq")&&((t2$3=t0$7[1]),(Array.isArray(t2$3)&&((t3$3=t2$3.length),((t3$3>=1)&&((t2$3[0]==="multiple")&&((elifs$0=Array.prototype.slice.call(t2$3,1)),(t4$2=t0$7[2]),(Array.isArray(t4$2)&&((t5$1=t4$2.length),((t5$1>=1)&&(t4$2[0]==="multiple"))))))))))))))){elses$0=Array.prototype.slice.call(t4$2,1);}else{___match_error(temp$1$0);}rval$0=["value",undefined];m$3=null;$4:for(m$3 of elses$0){let body$2;let t0$8;let t1$6;let t2$4;let t3$4;let t4$3;let t5$2;t0$8=m$3;if((Array.isArray(t0$8)&&((t1$6=t0$8.length),((t1$6===3)&&((t0$8[0]==="send")&&((t2$4=t0$8[1]),(Array.isArray(t2$4)&&((t3$4=t2$4.length),((t3$4===2)&&((t2$4[0]==="symbol")&&((t2$4[1]==="else")&&((t4$3=t0$8[2]),(Array.isArray(t4$3)&&((t5$2=t4$3.length),((t5$2===2)&&(t4$3[0]==="data")))))))))))))))){body$2=t4$3[1];rval$0=body$2;rval$0;}else{___match_error(m$3);}}m$4=null;$5:for(m$4 of elifs$0.reverse()){let cond$0;let body$3;let t0$9;let t1$7;let t2$5;let t3$5;let t4$4;let t5$3;t0$9=m$4;if((Array.isArray(t0$9)&&((t1$7=t0$9.length),((t1$7===3)&&((t0$9[0]==="send")&&((t2$5=t0$9[1]),(Array.isArray(t2$5)&&((t3$5=t2$5.length),((t3$5===2)&&((t2$5[0]==="symbol")&&((t2$5[1]==="elif")&&((t4$4=t0$9[2]),(Array.isArray(t4$4)&&((t5$3=t4$4.length),((t5$3===3)&&(t4$4[0]==="data")))))))))))))))){cond$0=t4$4[1];body$3=t4$4[2];rval$0=["if",cond$0,body$3,rval$0];rval$0;}else{___match_error(m$4);}}return ["if",test$1,["multi"].concat(body$1),rval$0];}));}else{return ["if",test$1,["multi"].concat(body$1),["value",undefined]];}}}}else{return ___match_error(ph$1$0);}}});t0$10=getProjector(mac$0("if"))($targ$2);if(t0$10[0]){if_mac$0=t0$10[1];}else{___match_error($targ$2);}$targ$3=(function(ph$3$0,temp$2$0,form$2,temp$3$0){let x$1;let msg$0;if(((x$1=ph$3$0),((x$1 instanceof Array)&&(x$1[0]==="pattern")))){return ["ignore"];}else{msg$0="'else' should be found inside an 'if' block";throw ErrorFactory(["syntax","else"]).create(msg$0,({"node":form$2}));}});t0$11=getProjector(mac$0("else"))($targ$3);if(t0$11[0]){else_mac$0=t0$11[1];}else{___match_error($targ$3);}$targ$4=(function(ph$4$0,temp$4$0,form$3,temp$5$0){let t0$12;let t1$8;let t2$6;let t3$6;let x$2;let x$3;let x$4;let other$2;let bridge$$10950$0;let rhs$0;let arg$0;t0$12=temp$5$0;if((Array.isArray(t0$12)&&((t1$8=t0$12.length),((t1$8===3)&&((t0$12[0]==="data")&&((t2$6=t0$12[1]),(Array.isArray(t2$6)&&((t3$6=t2$6.length),((t3$6===1)&&(t2$6[0]==="void")))))))))){rhs$0=t0$12[2];arg$0=t0$12;}else{___match_error(temp$5$0);}bridge$$10950$0=ph$4$0;if((((x$2=bridge$$10950$0),((x$2 instanceof Array)&&(x$2[0]==="check")))||((x$3=bridge$$10950$0),((x$3 instanceof Array)&&(x$3[0]==="project"))))){return ["nostep",form$3];}else{if(((x$4=ph$4$0),((x$4 instanceof Array)&&(x$4[0]==="pattern")))){return ["neg",rhs$0];}else{other$2=ph$4$0;return ["send",["variable","not"],arg$0];}}});t0$13=getProjector(mac$0("not"))($targ$4);if(t0$13[0]){not_mac$0=t0$13[1];}else{___match_error($targ$4);}$targ$5=(function(ph$5$0,temp$6$0,form$4,temp$7$0){let t0$14;let t1$9;let x$5;let x$6;let x$7;let other$3;let bridge$$11020$0;let lhs$0;let rhs$1;let arg$1;t0$14=temp$7$0;if((Array.isArray(t0$14)&&((t1$9=t0$14.length),((t1$9===3)&&(t0$14[0]==="data"))))){lhs$0=t0$14[1];rhs$1=t0$14[2];arg$1=t0$14;}else{___match_error(temp$7$0);}bridge$$11020$0=ph$5$0;if((((x$5=bridge$$11020$0),((x$5 instanceof Array)&&(x$5[0]==="check")))||((x$6=bridge$$11020$0),((x$6 instanceof Array)&&(x$6[0]==="project"))))){return ["nostep",form$4];}else{if(((x$7=ph$5$0),((x$7 instanceof Array)&&(x$7[0]==="pattern")))){return ["all",lhs$0,rhs$1];}else{other$3=ph$5$0;return ["send",["variable","and"],arg$1];}}});t0$15=getProjector(mac$0("and"))($targ$5);if(t0$15[0]){and_mac$0=t0$15[1];}else{___match_error($targ$5);}$targ$6=(function(ph$6$0,temp$8$0,form$5,temp$9$0){let t0$16;let t1$10;let x$8;let x$9;let x$10;let other$4;let bridge$$11080$0;let lhs$1;let rhs$2;let arg$2;t0$16=temp$9$0;if((Array.isArray(t0$16)&&((t1$10=t0$16.length),((t1$10===3)&&(t0$16[0]==="data"))))){lhs$1=t0$16[1];rhs$2=t0$16[2];arg$2=t0$16;}else{___match_error(temp$9$0);}bridge$$11080$0=ph$6$0;if((((x$8=bridge$$11080$0),((x$8 instanceof Array)&&(x$8[0]==="check")))||((x$9=bridge$$11080$0),((x$9 instanceof Array)&&(x$9[0]==="project"))))){return ["nostep",form$5];}else{if(((x$10=ph$6$0),((x$10 instanceof Array)&&(x$10[0]==="pattern")))){return ["any",lhs$1,rhs$2];}else{other$4=ph$6$0;return ["send",["variable","or"],arg$2];}}});t0$17=getProjector(mac$0("or"))($targ$6);if(t0$17[0]){or_mac$0=t0$17[1];}else{___match_error($targ$6);}$targ$7=(function(context$0,temp$10$0,form$6,temp$11$0){let t0$18;let t1$11;let other$5;let t0$19;let t1$12;let ph$7$0;let condition$0;t0$18=temp$11$0;if((Array.isArray(t0$18)&&((t1$11=t0$18.length),((t1$11===3)&&(t0$18[0]==="data"))))){ph$7$0=t0$18[1];condition$0=t0$18[2];}else{___match_error(temp$11$0);}t0$19=ph$7$0;t1$12=t0$19.length;if(((t1$12===1)&&(t0$19[0]==="void"))){return ["test",condition$0,["ignore"]];}else{other$5=ph$7$0;return ["test",condition$0,other$5];}});t0$20=getProjector(mac$0("when"))($targ$7);if(t0$20[0]){when_mac$0=t0$20[1];}else{___match_error($targ$7);}$targ$8=(function(temp$12$0,info$3,form$7,temp$13$0){let t0$21;let t0$22;let t1$13;let checker$1;let m$5$0;let x$11;let projector$0;let t0$23;let m$6$0;let subp$0;let other$6;let checker$0;let context$1;let ph$8$0;let chk$0;let target$1;t0$21=temp$12$0;context$1=t0$21;ph$8$0=t0$21;t0$22=temp$13$0;if((Array.isArray(t0$22)&&((t1$13=t0$22.length),((t1$13===3)&&(t0$22[0]==="data"))))){chk$0=t0$22[1];target$1=t0$22[2];}else{___match_error(temp$13$0);}m$5$0=info$3.step(["check",context$1],chk$0);if((m$5$0===chk$0)){checker$0=["send",["symbol","getChecker"],["data",chk$0]];}else{checker$1=m$5$0;checker$0=checker$1;}if(((x$11=ph$8$0),((x$11 instanceof Array)&&(x$11[0]==="pattern")))){if(equal(target$1,["void"])){subp$0=["ignore"];}else{subp$0=target$1;}m$6$0=checker$0;if((Array.isArray(m$6$0)&&((t0$23=m$6$0.length),((t0$23===2)&&(m$6$0[0]==="raw"))))){projector$0=m$6$0[1];return checker$0;}else{return ["check",checker$0,subp$0];}}else{if(equal(target$1,["void"])){return checker$0;}else{other$6=ph$8$0;return ["send",checker$0,["data",target$1]];}}});t0$24=getProjector(mac$0("?"))($targ$8);if(t0$24[0]){check_mac$0=t0$24[1];}else{___match_error($targ$8);}$targ$9=(function(temp$14$0,info$4,form$8,temp$15$0){let t0$25;let t0$26;let t1$14;let projector$2;let m$7$0;let x$12;let projector$4;let projector$3;let $$11334$0;let $$11335$0;let $$11336$0;let t0$27;let m$8$0;let subp$1;let other$7;let projector$1;let context$2;let ph$9$0;let proj$0;let target$2;t0$25=temp$14$0;context$2=t0$25;ph$9$0=t0$25;t0$26=temp$15$0;if((Array.isArray(t0$26)&&((t1$14=t0$26.length),((t1$14===3)&&(t0$26[0]==="data"))))){proj$0=t0$26[1];target$2=t0$26[2];}else{___match_error(temp$15$0);}m$7$0=info$4.step(["project",context$2],proj$0);if((m$7$0===proj$0)){projector$1=["send",["symbol","getProjector"],["data",proj$0]];}else{projector$2=m$7$0;projector$1=projector$2;}if(((x$12=ph$9$0),((x$12 instanceof Array)&&(x$12[0]==="pattern")))){if(equal(target$2,["void"])){subp$1=["ignore"];}else{subp$1=target$2;}m$8$0=projector$1;if((($$11334$0=Array.isArray(m$8$0))&&((t0$27=m$8$0.length),(($$11336$0=(t0$27===2))&&(m$8$0[0]==="raw"))))){projector$3=m$8$0[1];return projector$3;}else{if(($$11336$0&&(m$8$0[0]==="unconditional"))){projector$4=m$8$0[1];return ["project",projector$4,subp$1,true];}else{return ["project",projector$1,subp$1];}}}else{if(equal(target$2,["void"])){return ["send",["symbol","->"],["data",["data",["symbol","x"]],["send",["send",projector$1,["data",["symbol","x"]]],["value",1]]]];}else{other$7=ph$9$0;return ["send",["send",projector$1,["data",target$2]],["value",1]];}}});t0$28=getProjector(mac$0("!"))($targ$9);if(t0$28[0]){project_mac$0=t0$28[1];}else{___match_error($targ$9);}return exports$0;});(module["exports"]=$targ$0);[];
//# sourceMappingURL=logic.js.map

