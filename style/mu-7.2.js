/* v:'7.2' - build date : '2021-06-25T10:43:53+0200'*/
!function(t,e){for(var i in e)t[i]=e[i]}(window,function(t){var e={};function i(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";i.r(e),i.d(e,"eStatTag",(function(){return Z}));var n,s,o,r="INFO: Request sent : ",a="INFO: probe mode enabled",h="ERROR: the probe mode is not available for a timeshifting stream",u="WARNING: the maximum number of characters is limited to 256, the sent data will be truncated",p="WARNING: the notifyPlayer() cannot be called with play or pause in an automatic mode",c="ERROR: Invalid for support, you must use\n\nvar confStreamingAnalyticsMediametrie= {\n\tadInfos:{\n\t\tsupport:'banner||blog||email||link||search||social'...\n\t}\n}",l="ERROR: you must pass a JSON object as a parameter to the contructor \n\n1 - you have to create a JSON object \n\nvar mySettings = {\n\tserial:'monSerial',\n\t...,\n\tlevels:{\n\t\tlevel_1:'mon niveau1'\n\t}\n\t... \n}\n\n2 - Instantiate the measure object with your JSON object as parameter\n\n var monTag = new eStatTag(mySettings);",f="ERROR: you must specify the type of measure you want {measure:'streaming|page'}",g="ERROR: you must specify the serial number in which you want to send the measure {serial:XXXXXXX}",m="ERROR: you must specify the position callback",d="ERROR: you must specify the state callback",y="ERROR: you must specify the streaming informations\n\nvar confStreamingAnalyticsMediametrie = {\n\tstreaming:{\n\t\tdatas...\n\t}\n}",v="ERROR: you must specify the diffusion mode\n\nvar confStreamingAnalyticsMediametrie = {\n\tstreaming:{\n\t\tdiffusion:'live||replay||timeShift'...\n\t}\n}",b="ERROR: you must specify a name for your player\n\nvar confStreamingAnalyticsMediametrie= {\n\tstreaming{\n\t\tplayerName:'jwplayer|html5...'\n\t}\n}",w="ERROR: you must specify a name for your stream\n\nvar confStreamingAnalyticsMediametrie= {\n\tstreaming{\n\t\tstreamName:'myStream'\n\t}\n}",S="ERROR: your account is not allowed to send requests to our servers. Please contact our client service to change its rights",P="ERROR: the notifyPlayer() function only accept values play, pause or stop as first parameter",R="Page mode is not supported anymore",C="Origin is not correctly defined",O="ERROR: you must specify the type of measure you want {consentType:'optin|exempted|optout'}",_=new(function(){function t(){this.debugEnabled=!1}return t.prototype.err=function(t){console.error(t)},t.prototype.debug=function(t,e){this.debugEnabled&&(e?console.debug(t,e):console.debug(t))},t.prototype.setDebug=function(t){this.debugEnabled=t},t.prototype.isDebug=function(){return this.debugEnabled},t}());!function(t){t.page="page",t.streaming="streaming"}(n||(n={})),function(t){t.live="live",t.replay="replay",t.timeshifting="timeshifting"}(s||(s={})),function(t){t.optout="optout",t.optin="optin",t.exempted="exempted"}(o||(o={}));var I,T=function(){function t(){this.logger=_,this.schema={serial:{},measure:{},levels:{schema:{level_1:{hitName:"cmsS3"},level_2:{hitName:"cmsS2"},level_3:{hitName:"cmsS1"},level_4:{hitName:"cmsS4"},level_5:{hitName:"cmsS5"}}},streaming:{schema:{diffusion:{},streamName:{hitName:"cmsSN"},streamURL:{hitName:"cmsME"},streamGenre:{hitName:"cmsGR"},streamDuration:{hitName:"cmsDU"},playerName:{hitName:"cmsPL"},playerVersion:{hitName:"cmsPV"},pluginName:{hitName:"pn"},pluginVersion:{hitName:"pv"}}},newLevels:{schema:{newLevel_1:{hitName:"ml1"},newLevel_2:{hitName:"ml2"},newLevel_3:{hitName:"ml3"},newLevel_4:{hitName:"ml4"},newLevel_5:{hitName:"ml5"},newLevel_6:{hitName:"ml6"},newLevel_7:{hitName:"ml7"},newLevel_8:{hitName:"ml8"},newLevel_9:{hitName:"ml9"},newLevel_10:{hitName:"ml10"},newLevel_11:{hitName:"ml11"}}},mediaInfo:{schema:{mediaContentId:{hitName:"msCid"},mediaDiffMode:{hitName:"msDm"},mediaChannel:{hitName:"msCh"}}},netMeasurement:{hitName:"miCh"},firstParty:{hitName:"cfp"},consentType:{hitName:"ct"},consentString:{hitName:"cstr"}}}return t.prototype.validateConfiguration=function(t){var e=!0;return t?(t.hasOwnProperty("serial")&&t.serial||(this.logger.err(g),e=!1),t.hasOwnProperty("consentType")&&t.consentType in o||(this.logger.err(O),e=!1),t.hasOwnProperty("measure")&&t.measure in n||(this.logger.err(f),e=!1),"page"===t.measure&&(this.logger.err(R),e=!1),t.measure===n.streaming&&(t.hasOwnProperty("streaming")&&t.streaming?(t.streaming.hasOwnProperty("diffusion")&&t.streaming.diffusion in s||(this.logger.err(v),e=!1),t.streaming.hasOwnProperty("playerName")&&t.streaming.playerName||(this.logger.err(b),e=!1),t.streaming.hasOwnProperty("streamName")&&t.streaming.streamName||(this.logger.err(w),e=!1),t.streaming.diffusion===s.replay&&(t.streaming.hasOwnProperty("callbackPosition")&&t.streaming.callbackPosition||(this.logger.err(m),e=!1)),t.streaming.diffusion!==s.live||!t.streaming.probe||t.streaming.hasOwnProperty("callbackState")&&t.streaming.callbackState||(this.logger.err(d),e=!1)):(this.logger.err(y),e=!1))):(this.logger.err(l),e=!1),e},t.prototype.buildConfiguration=function(t){var e=this.defaultConfiguration();return this.mergeConfiguration(e,t,!1,!0),e.schema=this.schema,e},t.prototype.defaultConfiguration=function(){var t={firstParty:!1};return t},t.prototype.mergeConfiguration=function(t,e,i,n){for(var s in void 0===n&&(n=!1),e)if(e.hasOwnProperty(s))if(e[s]instanceof Object){for(var o in e[s])if(e[s].hasOwnProperty(o)){if(t[s]||(t[s]={}),i&&"streamName"===o)continue;t[s][o]=e[s][o]}}else(n||"measure"!==s&&"serial"!==s)&&(t[s]=e[s])},t}();!function(t){t[t.PLAY=5]="PLAY",t[t.PAUSE=7]="PAUSE",t[t.STOP=12]="STOP"}(I||(I={}));var L,N=function(){function t(t,e,i,n,s){this.argmap={},this.serial=t.serial,this.contextInfos=e,this.buildParameters(t,t.schema),this.argmap.n=Math.round(1e9*Math.random()),this.argmap.cmsPO=i,this.argmap.cmsPS=n,this.argmap.cmsEV=s,t.streaming&&t.streaming.callbackOffset&&(this.argmap.oft=Math.round(t.streaming.callbackOffset()))}return t.prototype.buildURL=function(){var t=this.contextInfos.getInfos();for(var e in this.argmap)this.argmap.hasOwnProperty(e)&&t.push([e,this.argmap[e]]);t.sort((function(t,e){return t[0].localeCompare(e[0])}));for(var i=this.collectUrl+this.serial,n="",s=0;s<t.length;s++)if("boolean"==typeof t[s][1])!0===t[s][1]&&(n+="&"+t[s][0]+"=1");else{var o=encodeURIComponent(t[s][1]);o.length>256&&_.debug(u),n+="&"+t[s][0]+"="+o.substring(0,256)}return i+(n="?"+n.substring(1))},t.prototype.set=function(t,e){this.argmap[t]=e},t.prototype.setCollectUrl=function(t){this.collectUrl=t},t.prototype.setSessionID=function(t){this.argmap.cmsVI=t},t.prototype.setSessionNumber=function(t){this.argmap.cmsRK=t},t.prototype.setOldPosition=function(t){this.argmap.cmsOP=t},t.prototype.getState=function(){return this.argmap.cmsPS},t.prototype.setState=function(t){this.argmap.cmsPS=t},t.prototype.getPosition=function(){return this.argmap.cmsPO},t.prototype.getLogObject=function(){var t={};return this.argmap.cmsEV===L.POLLING?t.event="polling":(t.event="state",t.eventType=I[this.argmap.cmsPS]),t.position=this.argmap.cmsPO,t.duration=this.argmap.cmsDU,t.casting=this.contextInfos.isCastingEnabled(),t.sessionID=this.argmap.cmsVI,t.rank=this.argmap.cmsRK,t},t.prototype.buildParameters=function(t,e){for(var i in e)e.hasOwnProperty(i)&&t.hasOwnProperty(i)&&(e[i].hitName?this.argmap[e[i].hitName]=t[i]:e[i].hasOwnProperty("schema")&&this.buildParameters(t[i],e[i].schema))},t}();!function(t){t.POLLING="polling",t.STATE="state"}(L||(L={}));var B,H,U=function(){function t(){this.timeout=[],this.status=I.STOP,this.started=!1}return t.prototype.notify=function(t,e){t!==q.play||this.started?t===q.stop&&this.started&&this.stopPolling():this.startPolling()},t.prototype.setStatus=function(t){this.status=t},t.prototype.configurationChange=function(t){this.info=t},t.prototype.stop=function(){this.stopPolling()},t.prototype.setSessionManager=function(t){this.sessionManager=t},t.prototype.snooze=function(){this.stop()},t.prototype.wakeup=function(){this.status===I.STOP||this.started||this.startPolling()},t.prototype.startPolling=function(){var t=this;this.started=!0,this.timeout[0]=window.setTimeout((function(){t.sendPollingHit()}),1e4),this.timeout[1]=window.setTimeout((function(){t.sendPollingHit()}),2e4),this.timeout[2]=window.setTimeout((function(){t.sendPollingHit()}),4e4),this.timeout[3]=window.setInterval((function(){t.sendPollingHit()}),6e4)},t.prototype.stopPolling=function(){for(var t=0;t<3;t++)window.clearTimeout(this.timeout[t]);window.clearInterval(this.timeout[3]),this.timeout=[],this.started=!1},t.prototype.sendPollingHit=function(){!this.info.streaming.diffusion||"live"!==this.info.streaming.diffusion&&"timeshifting"!==this.info.streaming.diffusion?this.sessionManager.send(this.status,this.info.streaming.callbackPosition(),L.POLLING):this.sessionManager.send(this.status,0,L.POLLING)},t}(),E=function(){function t(){this.status=I.STOP,this.pollingBehavior=new U}return t.prototype.configurationChange=function(t){this.pollingBehavior.configurationChange(t),this.configuration=t},t.prototype.stop=function(){this.pollingBehavior.stop()},t.prototype.setSessionManager=function(t){this.session=t,this.pollingBehavior.setSessionManager(t)},t.prototype.snooze=function(){this.pollingBehavior.snooze()},t.prototype.wakeup=function(){},t}(),k=(B=function(t,e){return(B=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}B(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),M=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return k(e,t),e.prototype.notify=function(t,e){switch(this.pollingBehavior.notify(t,e),t){case q.play:if(this.status===I.PLAY)return;this.status=I.PLAY;break;case q.pause:if(this.status===I.PAUSE)return;this.status=I.PAUSE;break;case q.stop:if(this.status===I.STOP)return;this.status=I.STOP}this.pollingBehavior.setStatus(this.status),this.session.send(this.status,0,L.STATE),this.status===I.STOP&&this.session.stopSession()},e.prototype.stop=function(){this.notify(q.stop,0),this.pollingBehavior.stop()},e}(E),D=function(){function t(){this.playing=!1,this.liveBehavior=new M;var t=this;this.probeHandle=window.setInterval((function(){return t.probe()}),1e3)}return t.prototype.setSessionManager=function(t){this.liveBehavior.setSessionManager(t)},t.prototype.notify=function(t,e){t===q.stop?(this.liveBehavior.notify(t,0),this.playing=!1):_.debug(p)},t.prototype.configurationChange=function(t){return this.configuration=t,this.liveBehavior.configurationChange(t),""},t.prototype.stop=function(){this.liveBehavior.stop(),window.clearInterval(this.probeHandle)},t.prototype.snooze=function(){this.liveBehavior.notify(q.stop,0),this.playing=!1,this.liveBehavior.snooze(),window.clearInterval(this.probeHandle)},t.prototype.wakeup=function(){this.liveBehavior.wakeup();var t=this;window.clearInterval(this.probeHandle),this.probeHandle=window.setInterval((function(){return t.probe()}),1e3)},t.prototype.probe=function(){if(this.configuration.streaming.callbackState){var t=this.configuration.streaming.callbackState();this.playing&&q.play!==t?(this.playing=!1,this.liveBehavior.notify(q.stop,0)):this.playing||q.play!==t||(this.playing=!0,this.liveBehavior.notify(q.play,0))}},t}(),A=function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}(),x=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return A(e,t),e.prototype.notify=function(t,e){switch(this.pollingBehavior.notify(t,e),t){case q.play:if(this.status===I.PLAY)return;this.status=I.PLAY;break;case q.pause:if(this.status===I.PAUSE)return;this.status=I.PAUSE;break;case q.stop:if(this.status===I.STOP)return;this.status=I.STOP}this.pollingBehavior.setStatus(this.status),this.session.send(this.status,e,L.STATE),this.status===I.STOP&&this.session.stopSession()},e.prototype.configurationChange=function(t){this.pollingBehavior.configurationChange(t),this.configuration=t},e.prototype.stop=function(){this.notify(q.stop,this.configuration.streaming.callbackPosition()),this.pollingBehavior.stop()},e.prototype.setSessionManager=function(t){this.session=t,this.pollingBehavior.setSessionManager(t)},e}(E),j=function(){function t(){this.replayBehavior=new x;var t=this;this.playing=!1,this.lastPos=0,this.lastCall=0,this.probeHandle=window.setInterval((function(){return t.probe()}),1e3)}return t.prototype.setSessionManager=function(t){this.sessionManager=t,this.replayBehavior.setSessionManager(t)},t.prototype.notify=function(t,e){t===q.stop?(this.lastPos=e,this.playing=!1,this.replayBehavior.notify(t,e)):_.debug(p)},t.prototype.configurationChange=function(t){this.info=t,this.replayBehavior.configurationChange(t)},t.prototype.stop=function(){window.clearInterval(this.probeHandle),this.replayBehavior.stop()},t.prototype.snooze=function(){this.replayBehavior.notify(q.pause,this.lastPos),this.playing=!1,this.replayBehavior.snooze(),window.clearInterval(this.probeHandle)},t.prototype.wakeup=function(){this.replayBehavior.wakeup();var t=this;window.clearInterval(this.probeHandle),this.probeHandle=window.setInterval((function(){return t.probe()}),1e3)},t.prototype.probe=function(){var t=this.lastPos,e=this.lastCall;this.lastPos=this.info.streaming.callbackPosition(),this.lastCall=(new Date).getTime();var i=1,n=0;0!==e&&(n=this.lastPos-t,i=(this.lastCall-e)/1e3),this.playing?n>i+.9||n<0?(this.replayBehavior.notify(q.pause,t),this.replayBehavior.notify(q.play,this.lastPos)):0===n&&(this.replayBehavior.notify(q.pause,this.lastPos),this.playing=!1):n>0&&n<=i+.9&&(this.replayBehavior.notify(q.play,t),this.playing=!0)},t}(),z=function(){function t(){this.liveMode=!0,this.playing=!1,this.liveBehavior=new M,this.replayBehavior=new x}return t.prototype.setSessionManager=function(t){this.liveBehavior.setSessionManager(t),this.replayBehavior.setSessionManager(t)},t.prototype.notify=function(t,e){this.liveMode?t===q.pause?(this.liveMode=!1,this.liveBehavior.notify(q.stop,e)):this.liveBehavior.notify(t,e):(t===q.stop&&(this.liveMode=!0),this.replayBehavior.notify(t,e))},t.prototype.configurationChange=function(t){return this.configuration=t,this.liveBehavior.configurationChange(t),this.replayBehavior.configurationChange(t),""},t.prototype.stop=function(){this.liveBehavior.stop(),this.replayBehavior.stop()},t.prototype.snooze=function(){this.liveBehavior.snooze(),this.replayBehavior.snooze()},t.prototype.wakeup=function(){this.liveBehavior.wakeup(),this.replayBehavior.wakeup()},t}(),V=function(t,e){void 0===e&&(e=null),this.hitname=t,this.value=e};!function(t){t.banner="banner",t.blog="blog",t.email="email",t.link="link",t.search="search",t.social="social"}(H||(H={}));var F,G=function(){function t(t,e,i){void 0===i&&(i=null),this.args={},this.isCasting=!1,this.casting="cs",this.userDomain=i,this.implementation=t,this.consentType=e,this.args.hitFormatVersion=new V("cmsMV","6"),this.args.domain=new V("dom"),this.args.encoding=new V("enc"),this.args.origin=new V("o"),this.args.screenColorDepth=new V("scp"),this.args.screenHeigth=new V("sch"),this.args.screenWidth=new V("scw"),this.args.tagName=new V("tn","TS"),this.args.version=new V("v","7.2.2"),this.args.viewportHeigth=new V("vh"),this.args.viewportWidth=new V("vw"),this.generateParams()}return t.prototype.getInfos=function(){var t=[];for(var e in this.isCasting?t.push([this.casting,"1"]):t.push([this.casting,"0"]),this.args)null!=this.args[e]&&null!==this.args[e].value&&""!==this.args[e].value&&this.args[e]instanceof V&&t.push([this.args[e].hitname,this.args[e].value]);return t},t.prototype.update=function(){return this.args.domain.value=this.getDomain(),this.args.origin.value=this.getOriginIfAllowed(),o.optin===this.consentType?this.extractCampaignInformation():this.forgetCampaignInformation(),this.getInfos()},t.prototype.setCast=function(t){this.isCasting=t},t.prototype.isCastingEnabled=function(){return this.isCasting},t.prototype.setImplementation=function(t){this.implementation=t},t.prototype.setConsentType=function(t){this.consentType=t},t.prototype.generateParams=function(){this.args.domain.value=this.getDomain(),this.args.encoding.value=document.characterSet||document.charset,this.args.origin.value=this.getOriginIfAllowed(),screen&&(screen.colorDepth&&(this.args.screenColorDepth.value=screen.colorDepth.toString()),screen.height&&(this.args.screenHeigth.value=screen.height.toString()),screen.width&&(this.args.screenWidth.value=screen.width.toString())),this.args.viewportHeigth.value=String(window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight||0),this.args.viewportWidth.value=String(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth||0).toString(),o.optin===this.consentType&&this.extractCampaignInformation()},t.prototype.getDomain=function(){return null!=this.userDomain&&""!==this.userDomain?this.userDomain:"frame"===this.implementation?this.getParentDomain():document.domain},t.prototype.getParentDomain=function(){var t="",e=(window.location!==window.parent.location?document.referrer:document.location).toString(),i=e.replace(/^https?:\/\//,"").split("/");e[0].match(/:/g)?t=i[0].split(":")[0]:t=i[0];return t},t.prototype.getOrigin=function(){var t,e=document.URL;switch(this.implementation){case"frame":e.match(/ifrmref=/g)?e.match(/ifrmref=([^&]+)/g)?t=decodeURIComponent(e.match(/ifrmref=([^&]+)/g)[0].split("=")[1]):(_.err(C),t=this.getParentDomain()):t=this.getParentDomain();break;case"redirection":t=this.getOriginRedirected();break;default:t=document.referrer}return this.extractFQDNFromGivenUrl(t)},t.prototype.getOriginIfAllowed=function(){return o.optin===this.consentType?this.getOrigin():null},t.prototype.extractFQDNFromGivenUrl=function(t){if(!t.startsWith("http://")&&!t.startsWith("https://"))return t.toString();var e=document.createElement("a");return e.href=t.toString(),e.hostname},t.prototype.getOriginRedirected=function(){for(var t="",e=document.cookie.split(":"),i=0;i<e.length;i++){var n=e[i].split("=");if("cks"===n[0]&&"-1"!==n[1])return t=e[i].substring(4),document.cookie="cks=-1;",t}var s=document.URL;return s.match(/__cks_=/g)&&(t=s.match(/__cks_=([^&]+)/g)[0].split("=")[1]),t||document.referrer},t.prototype.extractCampaignInformation=function(){var t="";t="frame"===this.implementation?document.referrer.toString():document.URL.toString();var e=this.getURLParameter("cmpsrc",t),i=this.getURLParameter("cmpspt",t),n=this.getURLParameter("cmpid",t);e&&i&&n&&(i in H?(this.args.source=new V("cmpsrc"),this.args.source.value=e,this.args.support=new V("cmpspt"),this.args.support.value=i,this.args.id=new V("cmpid"),this.args.id.value=n):_.err(c))},t.prototype.getURLParameter=function(t,e){var i=new RegExp("[\\?&]"+t+"=([^&#]*)").exec(e);return null===i?null:decodeURIComponent(i[1].replace(/\+/g," "))},t.prototype.forgetCampaignInformation=function(){delete this.args.source,delete this.args.support,delete this.args.id},t}(),W=function(){function t(t){t(this.resolve.bind(this),this.reject.bind(this))}return t.prototype.resolve=function(t){this.thenCb&&this.thenCb(t)},t.prototype.reject=function(t){this.catchCb&&this.catchCb(t)},t.prototype.then=function(t,e){return this.thenCb=t,e&&(this.catchCb=e),this},t.prototype.catch=function(t){return this.catchCb=t,this},t}(),X=function(){function t(e,i,n){this._access=F.FULL,this._cmsVI="0",this._serial=e,this._authURL=null!=i?i:t._DEFAULT_AUTH_URL,this._hitURL=null!=n?n:t._DEFAULT_HIT_URL}return t.prototype.getAccess=function(){return this._access},t.prototype.getEndpoint=function(){return this._hitURL},t.prototype.getCMSVI=function(){return this._cmsVI},t.prototype.authenticate=function(){var t=this,e=new W((function(e,i){t.requestValue(e,i)}));return e.catch((function(i){t._cmsVI=String(Math.floor(1e17*Math.random()%0x8db076000000000)),e.resolve("cmsVI initiliazed")}))},t.prototype.updateConfiguration=function(e){var i,n;e&&e.streaming&&(this._authURL=null!==(i=e.streaming.authUrl)&&void 0!==i?i:t._DEFAULT_AUTH_URL,this._hitURL=null!==(n=e.streaming.fallbackCollectUrl)&&void 0!==n?n:t._DEFAULT_HIT_URL)},t.prototype.requestValue=function(t,e){var i=new XMLHttpRequest;i.open("GET",this._authURL+this._serial),i.timeout=2e3;var n=this;i.onload=function(){200===i.status?n.parseResponse(i.responseText):401===i.status&&(n._access=F.DENIED,_.err(S)),t("status code "+i.status)},i.ontimeout=function(t){e("Timeout")},i.onerror=function(t){e("Cannot send request to "+n._authURL)},i.send()},t.prototype.parseResponse=function(t){var e=t.split("|");e[0]=e[0].split("=")[1],e[1]=e[1].split("=")[1],e[2]=e[2].split("=")[1],this._access=e[0],this._hitURL=e[1],this._cmsVI=e[2].replace(/"/g,"")},t._DEFAULT_HIT_URL="https://mesure.streaming.estat.com/m/web/",t._DEFAULT_AUTH_URL="https://auth.estat.com/",t}();!function(t){t.FULL="full",t.DENIED="denied",t.RESTRICTED="restricted"}(F||(F={}));var q,Y,J=function(){function t(){}return t.prototype.send=function(t){var e=document.createElement("img"),i=t.buildURL();e.src=i,_.debug(r,t.getLogObject())},t}(),K=function(){function t(t,e){this.previousPosition=0,this.sessionCount=0,this.sessionStarted=!1,this.hitReductionStarted=!1,this.waitingAuth=!0,this.hits=[],this.conf=t,this.hitSender=new J,this.initAuth(t),this.contextInfos=e,this.conf.consentType!==o.optout&&this.startSession()}return t.prototype.updateConfiguration=function(t){this.auth?this.auth.updateConfiguration(t):this.initAuth(t),this.conf=t,this.contextInfos.update()},t.prototype.send=function(t,e,i){if(this.conf.consentType!==o.optout)if(this.sessionStarted||this.startSession(),e=Math.round(e),i===L.POLLING)this.hitReductionStarted&&(t=this.firstHit.getState()),(n=this.buildHit(t,e,i)).setOldPosition(this.previousPosition),this.sendHit(n),this.previousPosition=e,this.sessionCount++;else if(t===I.STOP)this.sendHit(this.buildHit(t,e,i)),this.hitReductionStarted&&(window.clearTimeout(this.hitReductionCallback),this.hitReductionStarted=!1,this.lastHit=null);else if(this.hitReductionStarted)this.lastHit=new N(this.conf,this.contextInfos,e,t,i);else{var n;this.hitReductionStarted=!0,(n=this.buildHit(t,e,i)).setOldPosition(this.previousPosition),this.sendHit(n),this.previousPosition=e,this.sessionCount++,this.firstHit=n;var s=this;this.hitReductionCallback=window.setTimeout((function(){s.sendHitReduced()}),1e3)}},t.prototype.stopSession=function(){this.hitReductionStarted&&(window.clearTimeout(this.hitReductionCallback),this.hitReductionStarted=!1,this.lastHit=null),this.sessionStarted=!1,this.sessionCount=0},t.prototype.isSessionStarted=function(){return this.sessionStarted},t.prototype.sendHit=function(t){this.waitingAuth?this.hits.push(t):this.auth.getAccess()===F.FULL&&(t.setSessionID(this.auth.getCMSVI()),t.setCollectUrl(this.auth.getEndpoint()),this.hitSender.send(t))},t.prototype.sendRemainingHits=function(){this.waitingAuth=!1;for(var t=0;t<this.hits.length;t++)this.sendHit(this.hits[t]);this.hits=[]},t.prototype.startSession=function(){this.waitingAuth=!0,this.sessionStarted=!0,this.previousPosition=0;var t=this;this.auth.authenticate().then((function(){t.sendRemainingHits()}))},t.prototype.sendHitReduced=function(){this.hitReductionStarted=!1,this.lastHit&&this.lastHit.getState()!==this.firstHit.getState()?(this.lastHit.setOldPosition(this.previousPosition),this.lastHit.setSessionNumber(this.sessionCount),this.sendHit(this.lastHit),this.sessionCount++,this.lastHit=null):this.lastHit=null},t.prototype.buildHit=function(t,e,i){var n=new N(this.conf,this.contextInfos,e,t,i);return n.setSessionNumber(this.sessionCount),n.setOldPosition(this.previousPosition),n},t.prototype.initAuth=function(t){t.streaming?this.auth=new X(t.serial,t.streaming.authUrl,t.streaming.fallbackCollectUrl):this.auth=new X(t.serial)},t}(),Q=function(){function t(){this.enabled=!0,this.snoozed=!1}return t.prototype.setHitInfo=function(t){if(this.enabled&&!this.snoozed){this.info=t,this.contextInfosBuilder?(this.contextInfosBuilder.setImplementation(t.implementation),this.contextInfosBuilder.setConsentType(t.consentType)):this.contextInfosBuilder=new G(t.implementation,t.consentType,t.domain),this.sessionManager?this.sessionManager.updateConfiguration(t):this.sessionManager=new K(t,this.contextInfosBuilder);var e=t.streaming.probe;if(!this.behavior||t.streaming.diffusion!==this.diffusionType||e!==this.probeEnabled)switch(this.behavior&&this.behavior.stop(),this.probeEnabled=e,this.diffusionType=t.streaming.diffusion,t.streaming.diffusion){case"live":e?(this.behavior=new D,_.debug(a)):this.behavior=new M;break;case"replay":e?(this.behavior=new j,_.debug(a)):this.behavior=new x;break;case"timeshifting":this.behavior=new z,e&&_.err(h)}this.behavior.configurationChange(t),this.sessionManager&&this.behavior.setSessionManager(this.sessionManager)}},t.prototype.notify=function(t,e){this.enabled&&this.info.consentType!==o.optout&&(void 0===e&&this.info.streaming.callbackPosition?e=this.info.streaming.callbackPosition():void 0===e&&(e=0),this.behavior.notify(t,e))},t.prototype.isSessionStarted=function(){return!!this.sessionManager&&this.sessionManager.isSessionStarted()},t.prototype.disable=function(){this.enabled&&(this.enabled=!1,this.behavior&&this.behavior.stop())},t.prototype.snooze=function(){this.snoozed=!0,this.behavior&&this.enabled&&this.behavior.snooze()},t.prototype.wakeup=function(){this.snoozed=!1,this.behavior&&this.enabled&&this.behavior.wakeup()},t.prototype.setCast=function(t){this.contextInfosBuilder.setCast(t)},t.prototype.getConsentType=function(){return this.info.consentType},t}();!function(t){t.play="play",t.pause="pause",t.stop="stop"}(q||(q={})),function(t){t.replay="replay",t.live="live",t.timeshifting="timeshifting"}(Y||(Y={}));var Z=function(){function t(t){this.confBuilder=new T,this.orchestrator=new Q,this.configuration=this.confBuilder.buildConfiguration(t),this.valid=this.confBuilder.validateConfiguration(t),this.valid&&(_.setDebug(this.isDebug()),this.orchestrator.setHitInfo(this.configuration))}return t.prototype.set=function(t){this.confBuilder.mergeConfiguration(this.configuration,t,this.orchestrator.isSessionStarted()),this.valid=this.confBuilder.validateConfiguration(this.configuration),this.valid&&(_.setDebug(this.isDebug()),this.orchestrator.setHitInfo(this.configuration))},t.prototype.setDebug=function(t){_.setDebug(t),this.configuration.debug=t},t.prototype.notifyPlayer=function(t,e){this.valid&&(t in q?this.orchestrator.notify(t,e):_.err(P))},t.prototype.getConsentType=function(){return this.orchestrator.getConsentType()},t.prototype.setConsentType=function(t){if(t!==this.getConsentType()){this.orchestrator.isSessionStarted()&&this.orchestrator.notify(q.stop);var e={consentType:t};this.confBuilder.mergeConfiguration(this.configuration,e,this.orchestrator.isSessionStarted()),this.valid=this.confBuilder.validateConfiguration(this.configuration),this.valid&&(this.orchestrator.setHitInfo(this.configuration),t!==o.optout&&this.orchestrator.notify(q.play))}},t.prototype.disable=function(){this.orchestrator.disable()},t.prototype.snooze=function(){this.orchestrator.snooze()},t.prototype.wakeup=function(){this.orchestrator.wakeup()},t.prototype.setCast=function(t){this.orchestrator.setCast(t)},t.prototype.isDebug=function(){return!!this.configuration.debug&&("true"===this.configuration.debug||!0===this.configuration.debug)},t}()}]));