var $43509=(function(type$43512){var f$43516;(f$43516=type$43512["::check"]);if((f$43516===(void 0))){return (function(value$43522){return (value$43522 instanceof type$43512);});}else{return (function(value$43526){return f$43516.call(type$43512,value$43526);});}});
var $43528=(function(dest$43531,values$43532){var k$43537;(k$43537=null);$43535:for(k$43537 in values$43532){if(values$43532.hasOwnProperty(k$43537)){(dest$43531[k$43537]=values$43532[k$43537]);}}return dest$43531;});
var $43545=(function(o,m){if(typeof(m)==='string'||typeof(m)==='number'){return o[m];}else{return o['::send'](m);}});
var $43546=(function($43548$43551){var ph$43557;(ph$43557=$43548$43551);var $43553$43563;($43553$43563=ph$43557);var bridge$43555$43568;var x$43572;(bridge$43555$43568=$43553$43563);if((((typeof(bridge$43555$43568)==="string")&&((x$43572=bridge$43555$43568),true))||((typeof(bridge$43555$43568)==="number")&&((x$43572=bridge$43555$43568),true)))){return ["value",x$43572];}else{var other$43583;(other$43583=$43553$43563);return other$43583["::serialize_ast"]();}});
var $43585=(function(obj$43588){var results$43593;(results$43593=[]);var k$43598;(k$43598=null);$43592:for(k$43598 in obj$43588){if(Object.prototype.hasOwnProperty.call(obj$43588,k$43598)){results$43593.push([k$43598,$43545(obj$43588,k$43598)]);}}return results$43593;});
var $43854=(function(arr$43857){var results$43863;var l$43864;(results$43863=[]);(l$43864=arr$43857.length);var i$43873;(i$43873=0);$43862:for(;(i$43873<l$43864);(i$43873++)){results$43863.push([i$43873,$43545(arr$43857,i$43873)]);}return results$43863;});
var $43621=(function(){var $43622$43628;($43622$43628=(function(tags$43633){var it$0$43636;(it$0$43636=(function(){if((!$43509($43622$43628)(this))){return Object.create($43622$43628.prototype);}else{return this;}})());(it$0$43636["tags"]=tags$43633);return it$0$43636;}));($43622$43628.prototype["create"]=(function(){var it$0$43656;var self$43657;(it$0$43656=this);(self$43657=this);var $43654$43666;($43654$43666=arguments);var t0$43671;var message$43675;var args$43676;(t0$43671=$43654$43666.length);if((t0$43671>=0)){(message$43675=(function(){if((0>=t0$43671)){return "";}else{return $43654$43666[0];}})());(args$43676=Array.prototype.slice.call($43654$43666,1));var e$43689;(e$43689=Error(message$43675));(e$43689["::tags"]=it$0$43656.tags);(e$43689["args"]=args$43676);var temp$43705;(temp$43705=$43854(args$43676));var $length$43711;($length$43711=temp$43705.length);var $index$43717;($index$43717=0);$43690:for(;($index$43717<$length$43711);($index$43717++)){var m$43726;(m$43726=temp$43705[$index$43717]);var t0$43731;var t1$43732;var i$43736;var arg$43737;(t0$43731=m$43726);if(((t0$43731 instanceof Array)&&(((t1$43732=t0$43731.length)),(t1$43732===2)))){(i$43736=t0$43731[0]);(arg$43737=t0$43731[1]);(e$43689[i$43736]=arg$43737);}else{$43602(m$43726);}}(e$43689["length"]=args$43676.length);(e$43689["name"]=["E"].concat(it$0$43656.tags).join("."));return e$43689;}else{$43602($43654$43666);}}));($43622$43628.prototype["::check"]=(function(e$43767){var it$0$43771;var self$43772;(it$0$43771=this);(self$43772=this);var tags$43782;if(((!e$43767)||(!$43509(Error)(e$43767)))){return false;}(tags$43782=(e$43767["::tags"]||[]));var temp$43793;(temp$43793=it$0$43771.tags);var $length$43799;($length$43799=temp$43793.length);var $index$43805;($index$43805=0);$43783:for(;($index$43805<$length$43799);($index$43805++)){var m$43814;(m$43814=temp$43793[$index$43805]);var tag$43822;(tag$43822=m$43814);if((tags$43782.indexOf(tag$43822)===-1)){return false;}else{false;}}return true;}));($43622$43628.prototype["::deconstruct"]=(function(e$43831){var it$0$43835;var self$43836;(it$0$43835=this);(self$43836=this);return e$43831.args;}));$43528($43622$43628,$43528((function(){var accum$43847;(accum$43847=({}));(accum$43847["::name"]="$43622");return accum$43847;})(),(function(){var accum$43851;(accum$43851=({}));(accum$43851["::egclass"]=true);return accum$43851;})()));return $43622$43628;})();
var $43602=(function(value$43605,url$43606,start$43607,end$43608){var err$43612;(err$43612=$43621(["match"]).create("Could not find a match for value",({"value":value$43605})));if(url$43606){(err$43612["location"]=["location",url$43606,start$43607,end$43608]);}throw err$43612;});
var send$43154;var __array_methods$43155;var __re_methods$43156;(send$43154=(function(obj$43169,$43166$43170){var ph$43176;var msg$43177;var t0$43179;(t0$43179=$43166$43170);(msg$43177=t0$43179);(ph$43176=t0$43179);var $43172$43188;($43172$43188=ph$43176);var bridge$43174$43193;(bridge$43174$43193=$43172$43188);if(((typeof(bridge$43174$43193)==="string")||(typeof(bridge$43174$43193)==="number"))){return obj$43169[msg$43177];}else{var other$43205;(other$43205=$43172$43188);return obj$43169["::send"](msg$43177);}}));(Array[":::project"]=(function($43211$43214){var ph$43219;var value$43220;var t0$43222;(t0$43222=$43211$43214);(value$43220=t0$43222);(ph$43219=t0$43222);var $43216$43231;($43216$43231=ph$43219);if($43509(Array)($43216$43231)){return [true,value$43220];}else{$43216$43231;return [true,[value$43220]];}}));(__array_methods$43155=$43528((function(){var accum$43252;(accum$43252=({}));(accum$43252["::check"]=(function(value$43257){if((value$43257 instanceof Array)){var i$43263;(i$43263=0);$43260:for(;(i$43263<this.length);(i$43263++)){if(($43545(this,i$43263)!==$43545(value$43257,i$43263))){return false;}}return true;}else{return false;}}));return accum$43252;})(),$43528((function(){var accum$43272;(accum$43272=({}));(accum$43272["::clone"]=(function(){return $43528(this.slice(0),this);}));return accum$43272;})(),$43528((function(){var accum$43279;(accum$43279=({}));(accum$43279[":::project"]=(function(value$43284){if((value$43284 instanceof Array)){var i$43290;(i$43290=0);$43287:for(;(i$43290<this.length);(i$43290++)){if(($43545(this,i$43290)!==$43545(value$43284,i$43290))){return [true,this.concat([value$43284])];}}return [true,value$43284];}else{return [true,this.concat([value$43284])];}}));return accum$43279;})(),(function(){var accum$43299;(accum$43299=({}));(accum$43299["::serialize_ast"]=(function(){return ["array"].concat(this.map($43546));}));return accum$43299;})()))));var temp$43309;(temp$43309=$43585(__array_methods$43155));var $length$43315;($length$43315=temp$43309.length);var $index$43321;($index$43321=0);$43157:for(;($index$43321<$length$43315);($index$43321++)){var m$43330;(m$43330=temp$43309[$index$43321]);var t0$43335;var t1$43336;var k$43340;var v$43341;(t0$43335=m$43330);if(((t0$43335 instanceof Array)&&(((t1$43336=t0$43335.length)),(t1$43336===2)))){(k$43340=t0$43335[0]);(v$43341=t0$43335[1]);if((!$43545(Array.prototype,k$43340))){Object.defineProperty(Array.prototype,k$43340,({"enumerable":false,"value":v$43341}));}}else{$43602(m$43330);}}(__re_methods$43156=$43528((function(){var accum$43361;(accum$43361=({}));(accum$43361["::check"]=(function($43365$43368){var ph$43373;(ph$43373=$43365$43368);var $43370$43379;($43370$43379=ph$43373);var value$43387;if((typeof($43370$43379)==="string")){(value$43387=$43370$43379);if(value$43387.match(this)){return true;}else{return false;}}else{var other$43392;(other$43392=$43370$43379);return false;}}));return accum$43361;})(),(function(){var accum$43395;(accum$43395=({}));(accum$43395[":::project"]=(function($43399$43402){var ph$43407;(ph$43407=$43399$43402);var $43404$43413;($43404$43413=ph$43407);var value$43421;if((typeof($43404$43413)==="string")){(value$43421=$43404$43413);var $43424$43429;($43424$43429=value$43421.match(this));var m$43437;if(($43424$43429===null)){(m$43437=$43424$43429);return [false,null];}else{var m$43442;(m$43442=$43424$43429);return [true,m$43442];}}else{var other$43446;(other$43446=$43404$43413);return [false,null];}}));return accum$43395;})()));var temp$43452;(temp$43452=$43585(__re_methods$43156));var $length$43458;($length$43458=temp$43452.length);var $index$43464;($index$43464=0);$43160:for(;($index$43464<$length$43458);($index$43464++)){var m$43473;(m$43473=temp$43452[$index$43464]);var t0$43478;var t1$43479;var k$43483;var v$43484;(t0$43478=m$43473);if(((t0$43478 instanceof Array)&&(((t1$43479=t0$43478.length)),(t1$43479===2)))){(k$43483=t0$43478[0]);(v$43484=t0$43478[1]);if((!$43545(RegExp.prototype,k$43483))){Object.defineProperty(RegExp.prototype,k$43483,({"enumerable":false,"value":v$43484}));}}else{$43602(m$43473);}}if((!Function.prototype["::send"])){Object.defineProperty(Function.prototype,"::send",$43528(({"enumerable":false}),(function(){var accum$43502;(accum$43502=({}));(accum$43502["value"]=(function(args$43507){return this.apply(this,args$43507);}));return accum$43502;})()));}
var $44643=(function($44645$44648){var ph$44656;(ph$44656=$44645$44648);var $44650$44662;($44650$44662=ph$44656);var t0$44667;var $44654$44669;var $44655$44670;if((($44654$44669=($44650$44662 instanceof Array))&&(((t0$44667=$44650$44662.length)),(t0$44667===0)))){return [];}else{var x$44682;if(($44654$44669&&(t0$44667===1))){(x$44682=$44650$44662[0]);return [];}else{var x$44687;var y$44688;var rest$44689;if(($44654$44669&&(t0$44667>=2))){(x$44687=$44650$44662[0]);(y$44688=$44650$44662[1]);(rest$44689=Array.prototype.slice.call($44650$44662,2));return [[x$44687,y$44688]].concat($44643([y$44688].concat(rest$44689)));}else{$43602($44650$44662);}}}});var GenSym$43894;var gensym$43895;var identity$43896;var binsearch$43897;var classify$43898;var classify_contiguous$43899;var partition$43900;var product$43901;var construct$43902;var mkset$43903;var Body$43904;(GenSym$43894=(function(prefix$43909){var id$43914;(id$43914=0);return (function(){var r$43941;var pfx$43932;var t0$43928;var $43919$43923;($43919$43923=arguments);(t0$43928=$43919$43923.length);if(((t0$43928>=0)&&(t0$43928<=1))){(pfx$43932=(function(){if((0>=t0$43928)){return "";}else{return $43919$43923[0];}})());(r$43941=((pfx$43932+prefix$43909)+[true,String(id$43914)][1]));(id$43914++);return r$43941;}else{$43602($43919$43923);}});}));(gensym$43895=GenSym$43894("$"));(identity$43896=(function(x$43955){return x$43955;}));(binsearch$43897=(function(xs$43962,x$43963){var lo$43968;var hi$43969;(lo$43968=0);(hi$43969=(xs$43962.length-1));$43976:while((lo$43968<=hi$43969)){var $43982$43996;var mid$43986;var v$43987;(mid$43986=(lo$43968+((hi$43969-lo$43968)>>1)));(v$43987=$43545(xs$43962,mid$43986));($43982$43996=$43545(xs$43962,mid$43986));if(($43982$43996<x$43963)){(lo$43968=(mid$43986+1));}else{if(($43982$43996>x$43963)){(hi$43969=(mid$43986-1));}else{$43982$43996;return (mid$43986+1);}}}return lo$43968;}));(classify$43898=(function(){var $index$44071;var $length$44065;var temp$44059;var results$44049;var classes$44039;var xs$44040;var t0$44035;var $44026$44030;($44026$44030=arguments);(t0$44035=$44026$44030.length);if((t0$44035>=1)){(classes$44039=Array.prototype.slice.call($44026$44030,0,-1));(xs$44040=$44026$44030[(t0$44035-1)]);(results$44049=({"rest":[]}));(temp$44059=classes$44039);($length$44065=temp$44059.length);($index$44071=0);$44050:for(;($index$44071<$length$44065);($index$44071++)){var cls$44088;var m$44080;(m$44080=temp$44059[$index$44071]);(cls$44088=m$44080);(results$44049[cls$44088]=[]);}$44094:while(xs$44040.length){var x$44130;var other$44150;var cls$44137;var x$44138;var newxs$44113;var t0$44109;var $44097$44104;($44097$44104=xs$44040.shift());if((($44097$44104 instanceof Array)&&(((t0$44109=$44097$44104.length)),((t0$44109>=1)&&($44097$44104[0]==="splice"))))){(newxs$44113=Array.prototype.slice.call($44097$44104,1));(xs$44040=newxs$44113.concat(xs$44040));}else{if((((x$44130=$44097$44104)),((x$44130 instanceof Array)&&(x$44130[0]==="ignore")))){null;}else{if((($44097$44104 instanceof Array)&&(((t0$44109=$44097$44104.length)),((t0$44109===2)&&((cls$44137=$44097$44104[0]),((x$44138=$44097$44104[1]),$43545(results$44049,cls$44137))))))){$43545(results$44049,cls$44137).push(x$44138);}else{(other$44150=$44097$44104);results$44049.rest.push(other$44150);}}}}return results$44049;}else{$43602($44026$44030);}}));(classify_contiguous$43899=(function(xs$44159,classifier$44160){var $index$44196;var $length$44190;var temp$44184;var groups$44166;var currcls$44167;var curr$44168;(groups$44166=[]);(currcls$44167=null);(curr$44168=null);(temp$44184=xs$44159);($length$44190=temp$44184.length);($index$44196=0);$44169:for(;($index$44196<$length$44190);($index$44196++)){var cls$44217;var x$44213;var m$44205;(m$44205=temp$44184[$index$44196]);(x$44213=m$44205);(cls$44217=classifier$44160(x$44213));if((cls$44217===currcls$44167)){curr$44168.push(x$44213);}else{if(curr$44168){groups$44166.push(curr$44168);}(curr$44168=[cls$44217,x$44213]);(currcls$44167=cls$44217);}}if(curr$44168){groups$44166.push(curr$44168);}return groups$44166;}));($44643=(function($44236$44239){var x$44278;var y$44279;var rest$44280;var x$44273;var $44245$44260;var $44246$44261;var t0$44258;var $44241$44253;var ph$44247;(ph$44247=$44236$44239);($44241$44253=ph$44247);if((($44245$44260=($44241$44253 instanceof Array))&&(((t0$44258=$44241$44253.length)),(t0$44258===0)))){return [];}else{if(($44245$44260&&(t0$44258===1))){(x$44273=$44241$44253[0]);return [];}else{if(($44245$44260&&(t0$44258>=2))){(x$44278=$44241$44253[0]);(y$44279=$44241$44253[1]);(rest$44280=Array.prototype.slice.call($44241$44253,2));return [[x$44278,y$44279]].concat($44643([y$44279].concat(rest$44280)));}else{$43602($44241$44253);}}}}));(partition$43900=(function(xs$44290,predicate$44291){var $index$44323;var $length$44317;var temp$44311;var t$44296;var f$44297;(t$44296=[]);(f$44297=[]);(temp$44311=xs$44290);($length$44317=temp$44311.length);($index$44323=0);$44298:for(;($index$44323<$length$44317);($index$44323++)){var x$44345;var x$44340;var m$44332;(m$44332=temp$44311[$index$44323]);(x$44340=m$44332);if(predicate$44291(x$44340)){t$44296.push(x$44340);}else{(x$44345=m$44332);f$44297.push(x$44345);}}return [t$44296,f$44297];}));(product$43901=(function(a$44352,b$44353){var $index$44379;var $length$44373;var temp$44367;var results$44357;(results$44357=[]);(temp$44367=a$44352);($length$44373=temp$44367.length);($index$44379=0);$44358:for(;($index$44379<$length$44373);($index$44379++)){var $index$44421;var $length$44415;var temp$44409;var acc$44403;var x$44396;var m$44388;(m$44388=temp$44367[$index$44379]);(x$44396=m$44388);(results$44357=results$44357.concat((((acc$44403=[])),(((temp$44409=b$44353)),((($length$44415=temp$44409.length)),((($index$44421=0)),(function(){$44398:for(;($index$44421<$length$44415);($index$44421++)){var y$44438;var m$44430;(m$44430=temp$44409[$index$44421]);(y$44438=m$44430);acc$44403.push([x$44396,y$44438]);}})()))),acc$44403)));}return results$44357;}));(construct$43902=(function($44445$44448,fn$44449,zero$44450){var x$44489;var rest$44490;var x$44484;var $44456$44471;var $44457$44472;var t0$44469;var $44452$44464;var ph$44458;(ph$44458=$44445$44448);($44452$44464=ph$44458);if((($44456$44471=($44452$44464 instanceof Array))&&(((t0$44469=$44452$44464.length)),(t0$44469===0)))){return zero$44450;}else{if(($44456$44471&&(t0$44469===1))){(x$44484=$44452$44464[0]);return x$44484;}else{if(($44456$44471&&(t0$44469>=1))){(x$44489=$44452$44464[0]);(rest$44490=Array.prototype.slice.call($44452$44464,1));return fn$44449(x$44489,construct$43902(rest$44490,fn$44449,zero$44450));}else{$43602($44452$44464);}}}}));(mkset$43903=(function(xs$44500){var $index$44526;var $length$44520;var temp$44514;var rval$44504;(rval$44504=({}));(temp$44514=xs$44500);($length$44520=temp$44514.length);($index$44526=0);$44505:for(;($index$44526<$length$44520);($index$44526++)){var x$44543;var m$44535;(m$44535=temp$44514[$index$44526]);(x$44543=m$44535);(rval$44504[x$44543]=true);}return rval$44504;}));(Body$43904=(function($44553$44556){var t0$44564;var xs$44582;var t0$44578;var $44558$44573;var ph$44561;var x$44562;(t0$44564=$44553$44556);(x$44562=t0$44564);(ph$44561=t0$44564);($44558$44573=ph$44561);if((($44558$44573 instanceof Array)&&(((t0$44578=$44558$44573.length)),((t0$44578>=1)&&($44558$44573[0]==="multi"))))){(xs$44582=Array.prototype.slice.call($44558$44573,1));return xs$44582;}else{$44558$44573;return [x$44562];}}));(exports["GenSym"]=GenSym$43894);(exports["gensym"]=gensym$43895);(exports["identity"]=identity$43896);(exports["binsearch"]=binsearch$43897);(exports["classify"]=classify$43898);(exports["classify_contiguous"]=classify_contiguous$43899);(exports["neighbours"]=$44643);(exports["partition"]=partition$43900);(exports["construct"]=construct$43902);(exports["mkset"]=mkset$43903);(exports["product"]=product$43901);(exports["Body"]=Body$43904);