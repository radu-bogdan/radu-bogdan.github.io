import{r as Tc,g as Ac}from"./plotly-DWhyBWoV.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();class Ta{constructor(e){this.tokens=e,this.idx=0}static fromText(e){const t=[],i=e.split(/\r?\n/);for(let s=0;s<i.length;s++){const a=i[s].split(/\s+/).filter(o=>o.length>0);for(const o of a)t.push({token:o,lineNumber:s})}return new Ta(t)}next(){if(this.idx>=this.tokens.length)throw new Error(`Unexpected end of tokens at position ${this.idx}`);return this.tokens[this.idx++].token}tryNext(){if(!(this.idx>=this.tokens.length))return this.tokens[this.idx++].token}peek(){if(!(this.idx>=this.tokens.length))return this.tokens[this.idx].token}remaining(){return this.tokens.length-this.idx}position(){return this.idx}currentLine(){if(!(this.idx>=this.tokens.length))return this.tokens[this.idx].lineNumber}isNextTokenOnNewLine(){if(this.idx>=this.tokens.length-1)return!1;const e=this.tokens[this.idx].lineNumber;return this.tokens[this.idx+1].lineNumber>e}skipToNextLine(){if(this.idx>=this.tokens.length)return 0;const e=this.idx>0?this.tokens[this.idx-1].lineNumber:this.tokens[this.idx].lineNumber;let t=0;for(;this.idx<this.tokens.length&&this.tokens[this.idx].lineNumber===e;)this.idx++,t++;return t}}function Y(n,e){const t=Number(n);if(!Number.isFinite(t))throw new Error(`Expected number for ${e}, got '${n}'`);return t|0}function _e(n,e){const t=Number(n);if(!Number.isFinite(t))throw new Error(`Expected float for ${e}, got '${n}'`);return t}function Bs(n,e,t,i=null,s=!1){try{const r=i??Y(n.next(),e+".size"),a=[];if(s)for(let o=0;o<r;o++)n.next();else for(let o=0;o<r;o++){const l=n.next(),c=Number(l);a.push(Number.isFinite(c)?c:NaN)}return{size:r,data:a}}catch(r){return t.push("tinyVector read failed: "+r.message+" ("+e+")"),{size:0,data:[]}}}function ks(n,e,t){try{return t()}catch(i){n.push(e+": "+i.message);return}}function gi(n,e){for(let t=0;t<e;t++)n.next()}const ns=20,is=50,Ft=2,Al=2e3,Pc=60,Rc=15,Lc=20,Ka={legacy:12,withIndex:13},Nc={maxVectorSize:128,maxPasses:50,maxPointsPerPass:0,collectPassPoints:!1},Dc={maxVectorSize:512,maxPasses:Al,maxPointsPerPass:1e4,collectPassPoints:!0},Pl=33,Ic=20,Fc=27,Oc=17;function Rl(n){return n>=36?83:81}function Uc(n){const t=(n.mode??"full")==="full"?Dc:Nc,i=(c,h)=>{if(!Number.isFinite(c))return h;const d=Math.floor(c);return Math.max(h,d)},s=i(n.maxVectorSize??t.maxVectorSize,1),r=i(n.maxPasses??t.maxPasses,1),a=n.maxPointsPerPass??t.maxPointsPerPass,o=Number.isFinite(a)?Math.max(0,Math.floor(a)):t.maxPointsPerPass,l=n.collectPassPoints??t.collectPassPoints;return{maxVectorSize:s,maxPasses:r,maxPointsPerPass:o,collectPassPoints:l}}function Bc(n){return typeof n.log=="function"?n.log:n.debug?(...e)=>console.log(...e):()=>{}}const kc=["al","as","b","c","ca","ce","co","cr","cu","fe","mg","mn","mo","n","nb","ni","o","p","pb","s","se","si","sn","ti","v","w","zn","zr","hsla"];function Ll(n){const e={};for(const t of kc){const i=n.next(),s=Number(i);e[t]=Number.isFinite(s)?s:NaN}return{m_c:e.c,m_si:e.si,m_mn:e.mn,m_cr:e.cr,m_ni:e.ni,m_cu:e.cu,m_hsla:e.hsla,extra:e}}function zc(n,e,t){const i=[],s=(f,E)=>{try{return E()}catch(S){return i.push(`Failed to parse ${f}: ${S.message}`),NaN}},r=s("fileVersion",()=>Y(n.next(),"fileVersion")),a=s("isInTracking",()=>Y(n.next(),"isInTracking")),o=s("finishedPasses",()=>Y(n.next(),"finishedPasses")),l=s("startedPasses",()=>Y(n.next(),"startedPasses"));t(`[parseSinglePlate] Plate fileVersion=${r}, isInTracking=${a}, finishedPasses=${o}, startedPasses=${l}`),n.remaining()>=Ft?gi(n,Ft):i.push("Not enough tokens for dummy header fields");let c=null;try{const f=n.next(),E=n.next(),S=_e(n.next(),"isSimulated"),v=_e(n.next(),"usePfcResults"),L=_e(n.next(),"useProfileAdaptation"),w=_e(n.next(),"offset4InternalTarget");c={plateId:f,alloyCode:E,isSimulated:S,usePfcResults:v,useProfileAdaptation:L,offset4InternalTarget:w};const A={targetPrOffset:_e(n.next(),"lti.targetPrOffset"),spare:_e(n.next(),"lti.spare"),targetCrKink:_e(n.next(),"lti.targetCrKink"),isValid:Y(n.next(),"lti.isValid"),errorFlag:Y(n.next(),"lti.errorFlag"),lastAdaptationTime:{seconds:Y(n.next(),"lti.lastAdaptation.seconds"),mSecs:Y(n.next(),"lti.lastAdaptation.mSecs")},lastTrainingTime:{seconds:Y(n.next(),"lti.lastTraining.seconds"),mSecs:Y(n.next(),"lti.lastTraining.mSecs")}};c.lti=A,c.chemistry=r>Pl?Ll(n):{m_c:_e(n.next(),"chem.c"),m_si:_e(n.next(),"chem.si"),m_mn:_e(n.next(),"chem.mn"),m_cr:_e(n.next(),"chem.cr"),m_ni:_e(n.next(),"chem.ni"),m_cu:_e(n.next(),"chem.cu"),m_hsla:_e(n.next(),"chem.hsla")};const N={m_length:_e(n.next(),"slab.length"),m_temperature:_e(n.next(),"slab.temperature"),m_thickness:_e(n.next(),"slab.thickness"),m_width:_e(n.next(),"slab.width")};r>35&&ks(i,"slab.contour",()=>Bs(n,"slab.contour",i)),c.slab=N;const y={m_flatness:_e(n.next(),"targets.flatness"),m_profile:_e(n.next(),"targets.profile")};if(r>34&&ks(i,"targets.contour",()=>Bs(n,"targets.contour",i)),r>26){y.m_lowerLimitProfile=_e(n.next(),"targets.lowerLimitProfile"),y.m_upperLimitProfile=_e(n.next(),"targets.upperLimitProfile");try{n.next(),n.next()}catch{i.push("Incomplete targets.alternativeProfile")}}if(y.m_thickness=_e(n.next(),"targets.thickness"),y.m_width=_e(n.next(),"targets.width"),r>26)try{n.next()}catch{}if(r>27)try{n.next()}catch{}if(r>28)try{n.next()}catch{}r>34&&(y.m_edgeDistance=s("targets.edgeDistance",()=>_e(n.next(),"targets.edgeDistance")),y.m_edgeExclusion=s("targets.edgeExclusion",()=>_e(n.next(),"targets.edgeExclusion"))),c.targets=y;const _=_e(n.next(),"opInputs.flatnessCorrection");if(r<21)try{const R=Y(n.next(),"legacyOpInputsSize");for(let I=0;I<R;I++)n.next()}catch{i.push("Legacy operator inputs dummy read failed")}const P=_e(n.next(),"opInputs.profileCorrection"),T=[];if(r>20)try{const R=Y(n.next(),"opInputs.sequenceCount");for(let I=0;I<R;I++){const V=Y(n.next(),"opInputs.sequence.stands"),H=[];for(let J=0;J<V;J++)H.push({m_offsetDummyPassScrewdown:_e(n.next(),"stand.offsetDummyPassScrewdown"),m_offsetDummyPassScrewdownLastPass:_e(n.next(),"stand.offsetDummyPassScrewdownLastPass"),m_shiftStrategy:_e(n.next(),"stand.shiftStrategy")});T.push({stands:H})}}catch(R){i.push("OperatorInputs.sequences truncated: "+R.message)}if(c.operatorInputs={m_flatnessCorrection:_,m_profileCorrection:P,sequences:T},r>Oc)try{const R=Y(n.next(),"cyclicShifting.count");c.cyclicShifting=[];for(let I=0;I<R;I++)c.cyclicShifting.push(Dl(n,r,i))}catch(R){i.push("CyclicShifting parse failed: "+R.message)}try{const R=Y(n.next(),"passes.count"),I=Il(n,r,i,e,R);c.passes=I.passes}catch(R){i.push("Could not parse passes inside preCalc: "+R.message)}}catch(f){i.push(`Stopped early parsing preCalc: ${f.message}`)}n.remaining()>=Ft?gi(n,Ft):i.push("Missing dummy tokens after preCalc");const h=ch(n,r,i,{},c?.plateId||"");n.remaining()>=Ft?gi(n,Ft):i.push("Missing dummy tokens after stands");let d=null;try{d=Gc(n,r,i,e)}catch(f){i.push("postCalc parse failed: "+f.message)}if(n.remaining()>=Ft)for(let f=0;f<Ft;f++)t("next token:",n.peek()),n.next();else i.push("Missing dummy tokens after postCalc");let u=null;try{u=Vc(n,r,t)}catch(f){i.push("measured parse failed: "+f.message)}n.remaining()>=Ft?gi(n,Ft):i.push("Missing dummy tokens after measured");let p=null;try{p=Qc(n,r)}catch(f){i.push("inheritance parsing failed: "+f.message)}n.remaining()>=Ft?gi(n,Ft):i.push("Missing dummy tokens after inheritance");let g=null;try{g=sh(n,r)}catch(f){i.push("limiter parsing failed: "+f.message)}let x;const m=Rl(r);if(r>Ic&&n.remaining()>=m){t(`[parseSinglePlate] Attempting CalcOptions parse, tokens=${n.remaining()}`);try{x=ih(n,r,t),t(`[parseSinglePlate] CalcOptions parsed successfully (${m} values)`)}catch(f){console.warn("[parseSinglePlate] CalcOptions parsing failed:",f.message),i.push("calcOptions parsing failed: "+f.message)}}else t(`[parseSinglePlate] Skipping CalcOptions (version=${r}, tokens=${n.remaining()})`);return{plate:{header:{fileVersion:r,isInTracking:a,finishedPasses:o,startedPasses:l},preCalc:c,stands:h.stands,standsCount:h.count,postCalc:d,measured:u,inheritance:p,limiter:g,calcOptions:x},warnings:i}}function Nl(n,e={}){const t=typeof performance<"u"?performance.now():Date.now(),i=Uc(e),s=Bc(e),r=Ta.fromText(n),a=[],o=[];let l=0;const c=r.remaining();for(s(`[loadDataPlate] Starting to parse plates, total tokens=${c}`);r.remaining()>=is&&l<ns;){const u=r.remaining(),p=((c-u)/c*100).toFixed(1);s(`[loadDataPlate] Parsing plate ${l}, tokens remaining: ${u} (${p}% complete)`);try{const{plate:g,warnings:x}=zc(r,i,s);o.push(g),a.push(...x.map(m=>`[Plate ${l}] ${m}`)),s(`[loadDataPlate] Plate ${l} parsed successfully, tokens remaining: ${r.remaining()}`),l++}catch(g){console.error(`[loadDataPlate] Plate ${l} failed:`,g.message),a.push(`[Plate ${l}] Failed to parse plate: ${g.message}`);break}}l>=ns&&(console.warn(`[loadDataPlate] Hit MAX_PLATES safety limit (${ns}), ${r.remaining()} tokens remaining`),a.push(`Hit maximum plate limit (${ns}) - this is a safety limit. Increase MAX_PLATES_TO_LOAD constant if needed.`)),r.remaining()>0&&r.remaining()<is&&s(`[loadDataPlate] Stopped: ${r.remaining()} tokens remaining (less than minimum ${is} for a plate)`);const h=r.remaining(),d=h<is;return s(`[loadDataPlate] Parsing complete: ${o.length} plates, ${h} tokens remaining, reachedEOF=${d}`),{plates:o,warnings:a,elapsedMs:(typeof performance<"u"?performance.now():Date.now())-t,totalPlates:o.length,tokensRemaining:h,reachedEOF:d}}function Dl(n,e,t){const i={m_targetShiftPosition:0,m_counter:0,m_targetDirection:0,m_isValid:0};try{i.m_targetShiftPosition=Number(n.next()),e>27&&(i.m_step=Number(n.next())),i.m_counter=Number(n.next()),e>20&&(i.m_stepIndex=Number(n.next())),i.m_targetDirection=Number(n.next()),e>27&&(i.m_shiftLimitReached=Number(n.next())),i.m_isValid=Number(n.next())}catch(s){t.push("CyclicShifting entry parse failed: "+s.message)}return i}function Gc(n,e,t,i){const s={plateId:"",alloyCode:"",isSimulated:0,usePfcResults:0,useProfileAdaptation:0,offset4InternalTarget:0};try{s.plateId=n.next(),s.alloyCode=n.next(),s.isSimulated=_e(n.next(),"postCalc.isSimulated"),s.usePfcResults=_e(n.next(),"postCalc.usePfcResults"),s.useProfileAdaptation=_e(n.next(),"postCalc.useProfileAdaptation"),s.offset4InternalTarget=_e(n.next(),"postCalc.offset4InternalTarget");const r={targetPrOffset:_e(n.next(),"postCalc.lti.targetPrOffset"),spare:_e(n.next(),"postCalc.lti.spare"),targetCrKink:_e(n.next(),"postCalc.lti.targetCrKink"),isValid:Y(n.next(),"postCalc.lti.isValid"),errorFlag:Y(n.next(),"postCalc.lti.errorFlag"),lastAdaptationTime:{seconds:Y(n.next(),"postCalc.lti.lastAdaptation.seconds"),mSecs:Y(n.next(),"postCalc.lti.lastAdaptation.mSecs")},lastTrainingTime:{seconds:Y(n.next(),"postCalc.lti.lastTraining.seconds"),mSecs:Y(n.next(),"postCalc.lti.lastTraining.mSecs")}};s.lti=r,s.chemistry=e>Pl?Ll(n):{m_c:_e(n.next(),"postCalc.chem.c"),m_si:_e(n.next(),"postCalc.chem.si"),m_mn:_e(n.next(),"postCalc.chem.mn"),m_cr:_e(n.next(),"postCalc.chem.cr"),m_ni:_e(n.next(),"postCalc.chem.ni"),m_cu:_e(n.next(),"postCalc.chem.cu"),m_hsla:_e(n.next(),"postCalc.chem.hsla")};const a={m_length:_e(n.next(),"postCalc.slab.length"),m_temperature:_e(n.next(),"postCalc.slab.temperature"),m_thickness:_e(n.next(),"postCalc.slab.thickness"),m_width:_e(n.next(),"postCalc.slab.width")};e>35&&ks(t,"postCalc.slab.contour",()=>Bs(n,"postCalc.slab.contour",t)),s.slab=a;const o={m_flatness:_e(n.next(),"postCalc.targets.flatness"),m_profile:_e(n.next(),"postCalc.targets.profile")};if(e>34&&ks(t,"postCalc.targets.contour",()=>Bs(n,"postCalc.targets.contour",t)),e>26){o.m_lowerLimitProfile=_e(n.next(),"postCalc.targets.lowerLimitProfile"),o.m_upperLimitProfile=_e(n.next(),"postCalc.targets.upperLimitProfile");try{n.next(),n.next()}catch{t.push("Incomplete postCalc.targets.alternativeProfile")}}if(o.m_thickness=_e(n.next(),"postCalc.targets.thickness"),o.m_width=_e(n.next(),"postCalc.targets.width"),e>26)try{n.next()}catch{}if(e>27)try{n.next()}catch{}if(e>28)try{n.next()}catch{}e>34&&(o.m_edgeDistance=_e(n.next(),"postCalc.targets.edgeDistance"),o.m_edgeExclusion=_e(n.next(),"postCalc.targets.edgeExclusion")),s.targets=o;const l=_e(n.next(),"postCalc.opInputs.flatnessCorrection");if(e<21)try{const d=Y(n.next(),"postCalc.legacyOpInputsSize");for(let u=0;u<d;u++)n.next()}catch{t.push("Legacy postCalc operator inputs dummy read failed")}const c=_e(n.next(),"postCalc.opInputs.profileCorrection"),h=[];if(e>20)try{const d=Y(n.next(),"postCalc.opInputs.sequenceCount");for(let u=0;u<d;u++){const p=Y(n.next(),"postCalc.opInputs.sequence.stands"),g=[];for(let x=0;x<p;x++)g.push({m_offsetDummyPassScrewdown:_e(n.next(),"postCalc.stand.offsetDummyPassScrewdown"),m_offsetDummyPassScrewdownLastPass:_e(n.next(),"postCalc.stand.offsetDummyPassScrewdownLastPass"),m_shiftStrategy:_e(n.next(),"postCalc.stand.shiftStrategy")});h.push({stands:g})}}catch(d){t.push("postCalc.OperatorInputs.sequences truncated: "+d.message)}if(s.operatorInputs={m_flatnessCorrection:l,m_profileCorrection:c,sequences:h},e>17)try{const d=Y(n.next(),"postCalc.cyclicShifting.count");s.cyclicShifting=[];for(let u=0;u<d;u++)s.cyclicShifting.push(Dl(n,e,t))}catch(d){t.push("postCalc.CyclicShifting parse failed: "+d.message)}try{const d=Y(n.next(),"postCalc.passes.count"),u=Il(n,e,t,i,d);s.passes=u.passes}catch(d){t.push("Could not parse passes inside postCalc: "+d.message)}}catch(r){t.push("postCalc section parse failed: "+r.message)}return s}function Il(n,e,t,i,s){const r=[];if(s<0||s>Al)return t.push("passes.count out of range -> skip"),{passes:r};let a=!1;for(let o=0;o<s;o++){if(o>=i.maxPasses){a=!0,t.push(`Pass list truncated at ${i.maxPasses}`);for(let l=o;l<s;l++)Hc(n,e,t);break}r.push(yh(n,e,t,i))}return{passes:r,truncated:a}}function Hc(n,e,t){try{const i=e>Fc?Ka.withIndex:Ka.legacy;gi(n,i),eo(n),e>=21&&(eo(n),uh(n));const s=Y(n.next(),"pass.pointsCount");for(let r=0;r<s;r++)fh(n,e,t);ph(n),mh(n,e,t)}catch(i){t.push("skipOnePass failed: "+i.message)}}function Vc(n,e,t){const i={passes:[],profileScans:[],flatnessScans:[],segmentData:[]};t("meas.passCount:",n.peek());const s=Y(n.next(),"meas.passCount");for(let r=0;r<s;r++)i.passes.push(Wc(n,e,t));if(e>10){const r=Y(n.next(),"meas.profileScanCount");for(let a=0;a<r;a++)i.profileScans.push(qc(n,e))}if(e>20){const r=Y(n.next(),"meas.flatnessScansCount");for(let o=0;o<r;o++)i.flatnessScans.push(Yc(n,e));const a=Y(n.next(),"meas.segmentDataCount");for(let o=0;o<a;o++)i.segmentData.push(jc(n,e))}return e>30&&(i.indexAdaptSegment=Y(n.next(),"meas.indexAdaptSegment")),e>29&&(i.inbarControls=Zc(n)),i}function Wc(n,e,t){const i={points:[],profiles:[]};t("meas.pointCount:",n.peek());const s=Y(n.next(),"measPass.pointCount");for(let a=0;a<s;a++)i.points.push(Xc(n,e));t("meas.profCount:",n.peek());const r=Y(n.next(),"measPass.profCount");for(let a=0;a<r;a++)i.profiles.push($c(n,e));return i.isValid=Y(n.next(),"measPass.isValid"),e>20&&(i.measuredFlatness=Number(n.next())),i.measuredProfile=Number(n.next()),i.measuredWedge=Number(n.next()),e>25&&(i.measuredAnomaly=Fl(n,e)),e>12&&e<26&&n.next(),e>23&&(i.activeFlatnessGauge=Number(n.next()),i.activeProfileGauge=Number(n.next()),i.quart=Number(n.next()),i.quartSize=Number(n.next())),i}function Xc(n,e){const t={};return t.position=Number(n.next()),t.forceDS=Number(n.next()),t.forceOS=Number(n.next()),t.torqueTop=Number(n.next()),t.torqueBot=Number(n.next()),e<35?(t.bendingTop={size:1,data:[Number(n.next())]},t.bendingBot={size:1,data:[Number(n.next())]}):(t.bendingTop=pe(n,"measPoint.bendingTop"),t.bendingBot=pe(n,"measPoint.bendingBot")),t.speed=Number(n.next()),e<35?(t.shiftPositionTop={size:1,data:[Number(n.next())]},t.shiftPositionBot={size:1,data:[Number(n.next())]}):(t.shiftPositionTop=pe(n,"measPoint.shiftPositionTop"),t.shiftPositionBot=pe(n,"measPoint.shiftPositionBot")),e>35&&(t.additionalShiftingByMAI=pe(n,"measPoint.additionalShiftingByMAI")),e>23&&(t.pairCrossAngleTop=Number(n.next()),t.pairCrossAngleBot=Number(n.next())),t.screwDownDS=Number(n.next()),t.screwDownOS=Number(n.next()),e>12&&(t.displacement=Number(n.next())),t.manualInterventionBending=Number(n.next()),t.bearingFloatation=Number(n.next()),t.gapCorrectionThicknessMonitor=Number(n.next()),t.gapCorrectionThermalCrown=Number(n.next()),e>24&&(t.additionalBendingByDPC=Number(n.next()),t.additionalBendingByFLC=Number(n.next()),t.additionalBendingByPRC=Number(n.next()),t.additionalBendingByTCC=Number(n.next())),t}function $c(n,e){const t={};return t.isValid=Y(n.next(),"profile.isValid"),t.position=Number(n.next()),t.centerLineThickness=Number(n.next()),t.driveSideThickness=Number(n.next()),t.operatorSideThickness=Number(n.next()),t.driveSideHeadPosition=Number(n.next()),t.operatorSideHeadPosition=Number(n.next()),e>25&&(t.profile=Number(n.next()),t.wedge=Number(n.next()),t.gaugeIndex=Number(n.next())),t}function Fl(n,e){const t={};return t.defectX2=Number(n.next()),t.defectX6=Number(n.next()),e>29&&(t.defectConvexMax=Number(n.next())),t.defectConvexRms=Number(n.next()),e>28&&(t.deviationToTarget=Number(n.next()),t.deviationToCorrectedTarget=Number(n.next())),t.os=Ja(n,e),t.ds=Ja(n,e),t}function Ja(n,e){const t={};return t.thickEdge=Number(n.next()),t.dogBone=Number(n.next()),t.edgeDrop=Number(n.next()),e>28&&(t.thickEdgePos=Number(n.next()),t.dogBonePos=Number(n.next())),t}function qc(n,e){const t={measuredValues:[],points:[]};if(t.apprError=Number(n.next()),t.scannedWidth=Number(n.next()),e>18&&(t.centerBlankoutWidth=Number(n.next())),e>28&&(t.centerLineDeviation=Number(n.next())),t.edgeDist=Number(n.next()),t.edgeProfile=Number(n.next()),t.fitValid=Y(n.next(),"profileScan.fitValid"),e>21&&(t.gaugeIndex=Number(n.next())),t.measuredPoly=to(n,"profileScan.measuredPoly"),e>19&&(t.measuredProfile=Number(n.next()),t.measuredWedge=Number(n.next())),e>30){const r=Y(n.next(),"profileScan.measuredValuesCount");for(let a=0;a<r;a++)t.measuredValues.push({edgeDist:Number(n.next()),profile:Number(n.next()),wedge:Number(n.next())})}t.passIndex=Number(n.next()),t.plateCenter=Number(n.next()),t.plateId=String(n.next()),t.polyDegree=Number(n.next()),t.profile=to(n,"profileScan.profile"),t.scanNumber=Number(n.next()),t.startTime={seconds:Number(n.next()),mSecs:Number(n.next())},t.stopTime={seconds:Number(n.next()),mSecs:Number(n.next())},t.startLength=Number(n.next()),t.stopLength=Number(n.next()),t.wedge=Number(n.next()),t.precalcWidth=Number(n.next()),e>23?(t.measuredWidth=Number(n.next()),t.temperatureConversion=Number(n.next())):t.measuredWidth=t.precalcWidth,t.xmax=Number(n.next()),t.xmin=Number(n.next());const i=Y(n.next(),"profileScan.pointCount");for(let r=0;r<i;r++){const a={x:Number(n.next()),y:Number(n.next())};e>29&&(a.isValid=Y(n.next(),"profileScan.point.isValid")),t.points.push(a)}t.anomaly=Fl(n,e);const s=n.skipToNextLine();return s>0&&console.warn(`WARNING: Skipped ${s} extra token(s) at end of profile scan line. Some DMM files output additional data that is not part of the standard format.`),t}function Yc(n,e){const t={points:{distance:[],elongation:[],amplitude:[]}};let i=Y(n.next(),"flatnessScan.numTraces1");for(let s=0;s<i;s++)t.points.distance.push(Number(n.next()));i=Y(n.next(),"flatnessScan.numTraces2");for(let s=0;s<i;s++)t.points.elongation.push(Number(n.next()));i=Y(n.next(),"flatnessScan.numTraces3");for(let s=0;s<i;s++)t.points.amplitude.push(Number(n.next()));return t.accumulatedLength=Number(n.next()),t.actualWidth=Number(n.next()),t.asymmetricFlatness=Number(n.next()),t.centerLineDeviation=Number(n.next()),t.fitValid=Y(n.next(),"flatnessScan.fitValid"),t.flatnessDeg2=pe(n,"flatnessScan.flatnessDeg2"),t.flatnessDeg4=pe(n,"flatnessScan.flatnessDeg4"),t.flatnessDeg6=pe(n,"flatnessScan.flatnessDeg6"),t.gaugeIndex=Number(n.next()),t.iu=Number(n.next()),e>34&&(t.passIndex=Number(n.next())),t.measuredPoly=pe(n,"flatnessScan.measuredPoly"),t.plateId=String(n.next()),t.polyDegree=Number(n.next()),t.positionOffset=Number(n.next()),t.setpointWidth=Number(n.next()),t.stripMiddle=Number(n.next()),t.symmetricFlatness=Number(n.next()),t.width=Number(n.next()),e>34&&(t.correctionDistance=Number(n.next())),t}function jc(n,e){const t={timeStamp:[],bendingForces:[],shiftPositions:[],additionalShiftingByMAI:[],twData:[]};if(t.segmentNumber=Number(n.next()),t.segmentStart=Number(n.next()),t.segmentEnd=Number(n.next()),e>28){const s=Y(n.next(),"segment.timeStampCount");for(let r=0;r<s;r++)t.timeStamp.push({seconds:Number(n.next()),mSecs:Number(n.next())})}if(t.backTension=pe(n,"segment.backTension"),t.forwTension=pe(n,"segment.forwTension"),e<35){const s=Y(n.next(),"segment.dummyCount");t.bendingForces=[];for(let r=0;r<s;r++)t.bendingForces.push({size:1,data:[Number(n.next())]})}else{const s=Y(n.next(),"segment.bendingForcesCount");for(let r=0;r<s;r++)t.bendingForces.push(pe(n,"segment.bendingForces["+r+"]"))}if(e>29&&(t.bendingAtLowerLimit=pe(n,"segment.bendingAtLowerLimit"),t.bendingAtUpperLimit=pe(n,"segment.bendingAtUpperLimit")),e>24&&(t.additionalBendingByDPC=pe(n,"segment.additionalBendingByDPC"),t.additionalBendingByFLC=pe(n,"segment.additionalBendingByFLC"),t.additionalBendingByPRC=pe(n,"segment.additionalBendingByPRC"),t.additionalBendingByTCC=pe(n,"segment.additionalBendingByTCC")),t.manualInterventionBending=pe(n,"segment.manualInterventionBending"),t.pairCross=pe(n,"segment.pairCross"),t.rollingForceDS=pe(n,"segment.rollingForceDS"),t.rollingForceOS=pe(n,"segment.rollingForceOS"),t.screwDownDS=pe(n,"segment.screwDownDS"),t.screwDownOS=pe(n,"segment.screwDownOS"),e<35){const s=Y(n.next(),"segment.dummyShiftCount");t.shiftPositions=[];for(let r=0;r<s;r++)t.shiftPositions.push({size:1,data:[Number(n.next())]})}else{const s=Y(n.next(),"segment.shiftPositionsCount");for(let r=0;r<s;r++)t.shiftPositions.push(pe(n,"segment.shiftPositions["+r+"]"))}if(e>35){const s=Y(n.next(),"segment.additionalShiftingByMAICount");for(let r=0;r<s;r++)t.additionalShiftingByMAI.push(pe(n,"segment.additionalShiftingByMAI["+r+"]"))}t.speed=pe(n,"segment.speed"),t.stripThickness=pe(n,"segment.stripThickness"),e>26&&(t.temperatureConversionFactor=pe(n,"segment.temperatureConversionFactor")),t.width=Number(n.next());const i=Y(n.next(),"segment.twDataCount");for(let s=0;s<i;s++)t.twData.push(Ul(n));return t}function Zc(n){return{fccFlcAsymBlocked:Y(n.next(),"inbar.fccFlcAsymBlocked"),fccFlcSymBlocked:Y(n.next(),"inbar.fccFlcSymBlocked"),fccWpcAsymBlocked:Y(n.next(),"inbar.fccWpcAsymBlocked"),fccWpcSymBlocked:Y(n.next(),"inbar.fccWpcSymBlocked")}}function Ol(n,e){const t={};return e>33?(t.al=Number(n.next()),t.as=Number(n.next()),t.b=Number(n.next()),t.c=Number(n.next()),t.ca=Number(n.next()),t.ce=Number(n.next()),t.co=Number(n.next()),t.cr=Number(n.next()),t.cu=Number(n.next()),t.fe=Number(n.next()),t.mg=Number(n.next()),t.mn=Number(n.next()),t.mo=Number(n.next()),t.n=Number(n.next()),t.nb=Number(n.next()),t.ni=Number(n.next()),t.o=Number(n.next()),t.p=Number(n.next()),t.pb=Number(n.next()),t.s=Number(n.next()),t.se=Number(n.next()),t.si=Number(n.next()),t.sn=Number(n.next()),t.ti=Number(n.next()),t.v=Number(n.next()),t.w=Number(n.next()),t.zn=Number(n.next()),t.zr=Number(n.next())):(t.c=Number(n.next()),t.si=Number(n.next()),t.mn=Number(n.next()),t.cr=Number(n.next()),t.ni=Number(n.next()),t.cu=Number(n.next())),t.hsla=Number(n.next()),t}function Kc(n,e){const t={};return e<35?t.bendingForces={size:1,data:[Number(n.next())]}:t.bendingForces=pe(n,"inhPass.bendingForces"),e>36&&(t.additionalBendingByMAI=pe(n,"inhPass.additionalBendingByMAI")),t.entryProfile=pe(n,"inhPass.entryProfile"),t.exitProfile=pe(n,"inhPass.exitProfile"),e>21&&(t.edgeDistance=Number(n.next())),t.entryThickness=Number(n.next()),t.exitThickness=Number(n.next()),t.flatness=Number(n.next()),t.measuredFlatness=Number(n.next()),t.measuredProfile=Number(n.next()),e>21&&(t.observedUnflatness=Number(n.next())),t.standIndex=Number(n.next()),t.rollForce=Number(n.next()),e<35?t.shiftPositions={size:1,data:[Number(n.next())]}:t.shiftPositions=pe(n,"inhPass.shiftPositions"),e>23&&(t.pairCrossAngle=Number(n.next())),t.width=Number(n.next()),e>26&&(t.influenceOfShiftOnCrown=Number(n.next())),e>29&&(e<35?t.dFbdFr={size:1,data:[Number(n.next())]}:t.dFbdFr=pe(n,"inhPass.dFbdFr")),t}function Jc(n,e){const t={};return t.profile=Kc(n,e),e>26&&(t.passFlags=Y(n.next(),"inhPass.flags")),t}function Qc(n,e){const t={},i=Y(n.next(),"inheritance.type");switch(i){case 0:t.type="LongTerm";break;case 1:t.type="ExactF";break;case 2:t.type="Exact";break;case 3:t.type="Similar";break;default:t.type=`Unknown(${i})`}t.isValid=Y(n.next(),"inheritance.isValid"),t.plateId=String(n.next()),t.calctime={seconds:Number(n.next()),mSecs:Number(n.next())},t.inherId=String(n.next()),e<21&&(n.next(),n.next(),n.next()),t.target={targetFlatness:Number(n.next()),targetProfile:Number(n.next()),targetThickness:Number(n.next())},e>27&&(t.target.isCheckerPlate=Y(n.next(),"inheritance.target.isCheckerPlate")),e>22&&(t.offset4InternalTarget=Number(n.next())),e>21&&(t.operatorInputs={flatnessCorrection:Number(n.next()),profileCorrection:Number(n.next())}),t.chemistry=Ol(n,e);const s=Y(n.next(),"inheritance.passCount");t.passes=[];for(let r=0;r<s;r++)t.passes.push(Jc(n,e));return t}function Oi(n,e){const t={};t.xmax=Number(n.next());const i=Y(n.next(),e+".N");if(t.N=i,t.data=[],i>=0)for(let s=0;s<i;s++)t.data.push(Number(n.next()));return t}function eh(n,e){const t={};return t.flatness=Number(n.next()),t.profile=Number(n.next()),e>34&&(t.contour=pe(n,"targets.contour")),e>26&&(t.lowerLimitProfile=Number(n.next()),t.upperLimitProfile=Number(n.next()),t.alternativeProfile=[Number(n.next()),Number(n.next())]),t.thickness=Number(n.next()),t.width=Number(n.next()),e>26&&(t.isCheckerPlate=Y(n.next(),"targets.isCheckerPlate")),e>27&&(t.endlessFlags=Y(n.next(),"targets.endlessFlags")),e>28&&(t.isBoxProfile=Y(n.next(),"targets.isBoxProfile")),e>34&&(t.edgeDistance=Number(n.next()),t.edgeExclusion=Number(n.next())),t}function th(n,e){const t={};if(t.rollForce=Number(n.next()),e>12&&(t.rollForceDelta=Number(n.next())),e<35?t.bendingForces={size:1,data:[Number(n.next())]}:t.bendingForces=pe(n,"bmRes.bendingForces"),e>12&&(t.bendingForceDelta=Number(n.next())),t.rollLength=Number(n.next()),e<35?t.shiftPositions={size:1,data:[Number(n.next())]}:t.shiftPositions=pe(n,"bmRes.shiftPositions"),e>12&&(t.displacement=Number(n.next())),t.RdistPointBM=Number(n.next()),t.RfrShunt=Number(n.next()),t.Rdsb=Number(n.next()),t.RdsbPart=pe(n,"bmRes.RdsbPart"),t.Rdsb_dFr=Number(n.next()),e>12&&(t.Rdsb_dFrDelta=Number(n.next()),t.Rdsb_ddisp=Number(n.next())),t.Rdsb_dFb_wr=Number(n.next()),t.Rdsb_dSr_wr=Number(n.next()),e>10&&(t.Rdsb2=Number(n.next()),t.Rdsb2_dFr=Number(n.next()),e>12&&(t.Rdsb2_dFrDelta=Number(n.next()),t.Rdsb2_ddisp=Number(n.next())),t.Rdsb2_dFb_wr=Number(n.next()),t.Rdsb2_dSr_wr=Number(n.next())),e<35){const i=Y(n.next(),"bmRes.dFb_dFr.size");t.dFb_dFr={size:i,data:[]};for(let s=0;s<i;s++)t.dFb_dFr.data.push(Number(n.next()))}else t.dFb_dFr=pe(n,"bmRes.dFb_dFr");if(t.dFb_dsr=Number(n.next()),e>28&&(t.dFb_dcr=Number(n.next())),e>30&&(t.dFb_dpc2=Number(n.next())),e>12&&(t.Rwedge=Number(n.next()),t.RdWedge_dFr=Number(n.next()),t.RdWedge_dFrDelta=Number(n.next()),t.RdWedge_ddisp=Number(n.next()),t.RdWedge_dFb=Number(n.next()),t.RdWedge_wr=Number(n.next())),t.RnoPointKaw=Number(n.next()),t.bending=Oi(n,"bmRes.bending"),e<35)t.sensben=[Oi(n,"bmRes.sensben")];else{const i=Y(n.next(),"bmRes.sensbenCount");t.sensben=[];for(let s=0;s<i;s++)t.sensben.push(Oi(n,`bmRes.sensben[${s}]`))}if(t.senscvc=Oi(n,"bmRes.senscvc"),t.sensfr=Oi(n,"bmRes.sensfr"),e>34){const i=Y(n.next(),"bmRes.lineloadCount");t.lineloads=[];for(let s=0;s<i;s++)t.lineloads.push(pe(n,`bmRes.lineload[${s}]`))}return t.isValid=Y(n.next(),"bmRes.isValid"),t}function Qa(n){return{flatness:Number(n.next()),profile:Number(n.next()),thickness:Number(n.next())}}function nh(n,e){const t={};return t.isModified=Y(n.next(),"limPass.isModified"),t.bendingForce=Number(n.next()),t.criticalThickness=Number(n.next()),t.dFrdh1=Number(n.next()),t.entryProfile=Number(n.next()),t.exitProfile=Number(n.next()),t.entryThickness=Number(n.next()),t.exitThickness=Number(n.next()),t.temperature=Number(n.next()),t.rollForce=Number(n.next()),t.width=Number(n.next()),t.sequenceNumber=Number(n.next()),t.sequenceType=Number(n.next()),t.standIndex=Number(n.next()),t.passInfo=Number(n.next()),t.proposedThickness=Number(n.next()),t.flatnessCorrection=Number(n.next()),t.maxCr=Number(n.next()),t.minCr=Number(n.next()),t.currentLimits=Qa(n),e>20&&(t.limits=Qa(n)),t.proposedForce=Number(n.next()),t.proposedProfile=Number(n.next()),t.reducedReductionForce=Number(n.next()),e>12&&(t.screwDown=Number(n.next()),t.dsb=Number(n.next()),t.g=Number(n.next()),t.s0kt=Number(n.next()),t.s0kw=Number(n.next()),t.dsdFr=Number(n.next()),t.dsdFb=Number(n.next()),t.dsdsr=Number(n.next()),t.d2gd2Fr=Number(n.next()),t.flattening=Number(n.next()),t.s0=Number(n.next()),t.bmRes=th(n,e)),t}function ih(n,e,t){const i=[],s=Rl(e);if(n.remaining()<s)throw console.warn(`[CalcOptions] Not enough tokens: expected ${s}, have ${n.remaining()}`),new Error(`Not enough tokens for CalcOptions: expected ${s}, have ${n.remaining()}`);t(`[CalcOptions] Parsing ${s} values (fileVersion=${e}), tokens remaining: ${n.remaining()}`);for(let r=0;r<s;r++)i.push(Number(n.next()));return t(`[CalcOptions] Successfully parsed ${i.length} values`),i}function sh(n,e){const t={};t.slab={thickness:Number(n.next()),width:Number(n.next()),id:String(n.next())},t.chemistry=Ol(n,e),t.targets=eh(n,e);const i=Y(n.next(),"limiter.passCount");t.passes=[];for(let s=0;s<i;s++)t.passes.push(nh(n,e));return t}function rh(n){switch(n){case 0:return"WorkRoll";case 1:return"Intermediate";case 2:return"BackupRoll";default:return"Unknown"}}function ah(n){switch(n){case 1:return"Linear";case 2:return"Quadratic";case 5:return"Tapered";case 7:return"BiQuadratic";case 8:return"QuadraticLinear";default:return"Unknown"}}function oh(n){switch(n){case 1:return"Polynomial";case 2:return"SmartCrown";case 3:return"Cosine";case 4:return"Osrt";default:return"Unknown"}}function lh(n){switch(n){case 1:return"PairCross";case 2:return"RollShift";case 3:return"NoShift";case 4:return"ShiftFixForceActPoint";case 7:return"MDSShiftMode";default:return"Unknown"}}function ch(n,e,t,i,s){const r=[];if(n.remaining()<5)return{stands:r};try{const a=Y(n.next(),"stands.count");try{const c=Y(n.next(),"standsIDs.size");for(let h=0;h<c;h++)n.next()}catch{t.push("standsIDs vector incomplete")}let o=0;const l=Lc;for(;o<l&&n.remaining()>0&&n.peek()!==void 0;)try{if(n.peek()===s)break;const d=hh(n,e,t);r.push(d),o++}catch(h){if(n.peek()===s)break;if(n.remaining()>=Ft){const u=n.next();if(n.peek()===s)break;if(n.remaining()>=1){const g=n.next();if(n.peek()===s)break}}t.push(`Stand ${o} parse failed: ${h.message}`);break}return o>=l&&t.push(`Stands parsing stopped at safety limit (${l})`),a!==o&&t.push(`Stands count mismatch: declared=${a}, actual parsed=${o}`),{stands:r,count:o}}catch(a){return t.push("Stands parse aborted: "+a.message),{stands:r}}}function hh(n,e,t){const i=[];let s=0,r="Unknown",a,o;try{const l=Y(n.next(),"stand.rollCount");for(let c=0;c<l;c++)i.push(dh(n,e,t));s=Y(n.next(),"stand.shiftMode"),r=lh(s);try{n.next(),e>=35&&n.next()}catch{}if(e<35)a=[Number(n.next())];else{const c=Y(n.next(),"balancing.size");a=[];for(let h=0;h<c;h++)a.push(Number(n.next()))}if(e>=21){o=n.next();try{const c=Y(n.next(),"cyclicShift.strategy");let h=1;e>31&&(h=Y(n.next(),"cyclicShift.lowerCount"));for(let p=0;p<h;p++)n.next();let d=1;e>31&&(d=Y(n.next(),"cyclicShift.upperCount"));for(let p=0;p<d;p++)n.next();n.next();const u=Y(n.next(),"cyclicShift.steps");for(let p=0;p<u;p++)n.next()}catch{t.push("cyclicShift skip failed")}if(e>25)try{n.next(),n.next(),e>36&&n.next()}catch{}try{if(e<35)n.next(),n.next();else{const c=Y(n.next(),"mech.lowerB.size");for(let d=0;d<c;d++)n.next();const h=Y(n.next(),"mech.upperB.size");for(let d=0;d<h;d++)n.next()}if(n.next(),n.next(),e<21&&(n.next(),n.next()),n.next(),n.next(),e<21&&(n.next(),n.next()),e<35){const c=Number(n.next());if(Number.isInteger(c)&&c>=0&&c<50)for(let h=0;h<c;h++)n.next()}else{const c=Y(n.next(),"mech.deltaShift.size");for(let h=0;h<c;h++)n.next()}if(e<21&&(n.next(),n.next()),e<35)n.next(),n.next();else{const c=Y(n.next(),"mech.lowerShift.size");for(let d=0;d<c;d++)n.next();const h=Y(n.next(),"mech.upperShift.size");for(let d=0;d<h;d++)n.next()}e>20&&(n.next(),n.next())}catch{t.push("mechLimits skip failed")}}}catch(l){t.push("stand parse failed: "+l.message)}return{shiftMode:s,shiftModeString:r,balancingForces:a,standId:o,rolls:i}}function dh(n,e,t){let i=0,s=0,r=0,a,o,l,c,h,d,u,p,g,x,m,f,E,S,v,L,w,A,N,y;try{i=Y(n.next(),"roll.type")}catch{t.push("rollType missing")}try{s=Y(n.next(),"roll.coneType")}catch{}try{r=Y(n.next(),"roll.grindType")}catch{}try{if(e>34)g=[Number(n.next()),Number(n.next())];else{const T=Number(n.next());g=[T,T]}}catch{}try{o=Number(n.next())}catch{}try{l=Number(n.next())}catch{}try{c=Number(n.next())}catch{}try{h=Number(n.next())}catch{}try{u=Y(n.next(),"roll.shape.size");const T=128;d=[];for(let R=0;R<u;R++){const I=n.next();R<T&&d.push(Number(I))}u>T&&(p=1)}catch{}let _;if(e>28)try{_=Ir(n,"customShape")}catch{}if(e>21)try{x=Number(n.next())}catch{}if(e>28)try{m=Number(n.next())}catch{}if(e>27)try{f=Number(n.next())}catch{}try{E=Number(n.next())}catch{}try{S=Number(n.next())}catch{}try{v=Number(n.next())}catch{}try{L=Number(n.next())}catch{}try{w=[Number(n.next()),Number(n.next())]}catch{}try{A=[Number(n.next()),Number(n.next())]}catch{}try{N=[Number(n.next()),Number(n.next())]}catch{}try{y=[Number(n.next()),Number(n.next())]}catch{}try{a=n.next()}catch{}const P={rollType:i,rollTypeString:rh(i),coneType:s,coneTypeString:ah(s),grindType:r,grindTypeString:oh(r),rollId:a,radius:o,length:l,neckLength:c,neckRadius:h,shape:d,shapeSize:u,grindDistance:g,grindingCorrection:x,taperCorrection:m,shapeCode:f,shapeCorrection:E,emodi:S,emodo:v,pcap:L,coneLength:w,coneHeight:A,coneDist:N,rCone:y,customShape:_};return p===1&&(P.shapeTruncated=p),P}function eo(n){for(let e=0;e<40&&n.remaining()!==0;e++){const t=n.peek();if(t===void 0||!/^[-+]?\d+(?:\.\d+)?$/.test(t))break;n.next()}}function uh(n){for(let e=0;e<Rc&&n.remaining()!==0;e++){const t=n.peek();if(t===void 0||!/^[-+]?\d+$/.test(t))break;n.next()}}function fh(n,e,t){for(let i=0;i<Pc;i++){if(n.remaining()===0)return;const s=n.peek();if(s===void 0||!/^[-+]?\d+(?:\.\d+)?$/.test(s))return;n.next()}}function ph(n){try{const e=Y(n.next(),"twData.count");for(let t=0;t<e;t++){n.next(),n.next();const i=Y(n.next(),"twData.tCrown.dataSize");for(let r=0;r<i;r++)n.next();n.next(),n.next();const s=Y(n.next(),"twData.wCrown.dataSize");for(let r=0;r<s;r++)n.next()}}catch{}}function mh(n,e,t){for(let i=0;i<15;i++){if(n.remaining()===0)return;const s=n.peek();if(s===void 0||!/^[-+]?\d+(?:\.\d+)?$/.test(s))break;n.next()}if(e>26&&n.remaining()>0){const i=n.peek();if(i!==void 0&&/^\d+$/.test(i)){const s=Y(n.next(),"profile.spline.size");for(let r=0;r<s&&n.remaining()>0;r++)n.next()}}}function pe(n,e){const t=Y(n.next(),e+".size"),i=[];for(let s=0;s<t;s++)i.push(Number(n.next()));return{size:t,data:i}}function to(n,e){const t=Y(n.next(),e+".degree"),i=[];for(let s=0;s<t+1;s++)i.push(Number(n.next()));return{degree:t,coeff:i}}function vn(n,e){const t=Number(n.next())!==0,i=pe(n,e+".x"),s=pe(n,e+".y");return{changed:t,x:i,y:s}}function ss(n,e){const t=Number(n.next()),i=Y(n.next(),e+".N"),s=[];for(let r=0;r<i;r++)s.push(Number(n.next()));return{xmax:t,N:i,data:s}}function Ir(n,e){const t=Number(n.next()),i=Number(n.next()),s=Y(n.next(),e+".dataSize"),r=[];for(let a=0;a<s;a++)r.push(Number(n.next()));return{xmin:t,xmax:i,dataSize:s,data:r}}function gh(n,e){const t={};if(t.rollForce=Number(n.next()),e>12&&(t.rollForceDelta=Number(n.next())),e<35?t.bendingForces=Number(n.next()):t.bendingForces=pe(n,"bmRes.bendingForces"),e>12&&(t.bendingForceDelta=Number(n.next())),t.rollLength=Number(n.next()),e<35?t.shiftPositions=Number(n.next()):t.shiftPositions=pe(n,"bmRes.shiftPositions"),e>12&&(t.displacement=Number(n.next())),t.RdistPointBM=Number(n.next()),t.RfrShunt=Number(n.next()),t.Rdsb=Number(n.next()),t.RdsbPart=pe(n,"bmRes.RdsbPart"),t.Rdsb_dFr=Number(n.next()),e>12&&(t.Rdsb_dFrDelta=Number(n.next()),t.Rdsb_ddisp=Number(n.next())),t.Rdsb_dFb_wr=Number(n.next()),t.Rdsb_dSr_wr=Number(n.next()),e>10&&(t.Rdsb2=Number(n.next()),t.Rdsb2_dFr=Number(n.next()),e>12&&(t.Rdsb2_dFrDelta=Number(n.next()),t.Rdsb2_ddisp=Number(n.next())),t.Rdsb2_dFb_wr=Number(n.next()),t.Rdsb2_dSr_wr=Number(n.next())),e<35){const i=Y(n.next(),"bmRes.dFb_dFr.size"),s=[];for(let r=0;r<i;r++)s.push(Number(n.next()));t.dFb_dFr={size:i,data:s}}else t.dFb_dFr=pe(n,"bmRes.dFb_dFr");if(t.dFb_dsr=Number(n.next()),e>28&&(t.dFb_dcr=Number(n.next())),e>30&&(t.dFb_dpc2=Number(n.next())),e>12&&(t.Rwedge=Number(n.next()),t.RdWedge_dFr=Number(n.next()),t.RdWedge_dFrDelta=Number(n.next()),t.RdWedge_ddisp=Number(n.next()),t.RdWedge_dFb=Number(n.next()),t.RdWedge_wr=Number(n.next())),t.RnoPointKaw=Number(n.next()),t.bending=ss(n,"bmRes.bending"),e<35)t.sensben=[pe(n,"bmRes.sensben")];else{const i=Y(n.next(),"bmRes.sensben.count");t.sensben=[];for(let s=0;s<i;s++)t.sensben.push(ss(n,"bmRes.sensben["+s+"]"))}if(t.senscvc=ss(n,"bmRes.senscvc"),t.sensfr=ss(n,"bmRes.sensfr"),e>34){const i=Y(n.next(),"bmRes.lineloads.count");t.lineloads=[];for(let s=0;s<i;s++)t.lineloads.push(pe(n,"bmRes.lineloads["+s+"]"))}return t.isValid=Y(n.next(),"bmRes.isValid"),t}function Ul(n){const e={tCrown:[],wCrown:[]},t=Y(n.next(),"twData.count");for(let i=0;i<t;i++)e.tCrown.push(Ir(n,"twData.tCrown["+i+"]")),e.wCrown.push(Ir(n,"twData.wCrown["+i+"]"));return e}function xh(n){return{lowerLimitGap:Number(n.next()),upperLimitGap:Number(n.next()),lowerLimitProfile:Number(n.next()),upperLimitProfile:Number(n.next()),lowerLimitProfileNet:Number(n.next()),upperLimitProfileNet:Number(n.next())}}function _h(n,e){const t={};return t.isValid=Y(n.next(),"profile.isValid"),e<35?t.desiredRollForce=Number(n.next()):t.bendingForces=pe(n,"profile.bendingForces"),e>34&&(t.desiredRollForce=Number(n.next())),t.bmRes=gh(n,e),e>32&&(t.flatteningProfile=vn(n,"profile.flatteningProfile")),e>20&&(t.dFbdFrFlattening=Number(n.next())),e>21&&(t.dFbdIU=Number(n.next())),t.edgeDist=Number(n.next()),e>11&&(t.edgeExclusion=Number(n.next())),t.entryThickness=Number(n.next()),t.exitThickness=Number(n.next()),t.entryFlatnessPolynomial=pe(n,"profile.entryFlatnessPolynomial"),t.entryFlatnessSpline=vn(n,"profile.entryFlatnessSpline"),t.entryProfilePolynomial=pe(n,"profile.entryProfilePolynomial"),t.entryProfileSpline=vn(n,"profile.entryProfileSpline"),t.flatnessSpline=vn(n,"profile.flatnessSpline"),t.gapSpline=vn(n,"profile.gapSpline"),t.gapPolynomial=pe(n,"profile.gapPolynomial"),t.limits=xh(n),t.dampDFbdFr=Number(n.next()),t.spare=Number(n.next()),e>24&&(t.observedUnflatness=Number(n.next())),t.profile=Number(n.next()),t.profileSpline=vn(n,"profile.profileSpline"),t.profilePolynomial=pe(n,"profile.profilePolynomial"),e>28&&(t.profileSplinePre=vn(n,"profile.profileSplinePre")),t.rollForce=Number(n.next()),t.s0kt=Number(n.next()),t.s0kw=Number(n.next()),e<35?t.shiftPositions=Number(n.next()):t.shiftPositions=pe(n,"profile.shiftPositions"),e>23&&(t.pairCrossAngle=Number(n.next())),t.standIndex=Number(n.next()),t.targetProfile=Number(n.next()),e>26&&(t.targetProfileSpline=vn(n,"profile.targetProfileSpline")),t.width=Number(n.next()),e>25&&(t.noIterations=Number(n.next())),e>26&&(t.influenceOfShiftOnCrown=Number(n.next())),t}function Sh(n,e){const t={};if(e<35){const i=Number(n.next());t.manualValuesBending=i===1e99?null:i;const s=Number(n.next());t.manualValuePairCross=s===1e99?null:s;const r=Number(n.next());t.manualValuesShift=r===1e99?null:r}else t.manualValuesBending=pe(n,"opInputs.manualValuesBending"),Y(n.next(),"opInputs.hasPairCross")&&(t.manualValuePairCross=Number(n.next())),t.manualValuesShift=pe(n,"opInputs.manualValuesShift");return t.observedUnflatness=Number(n.next()),t}function vh(n,e){const t={};return e<35?t.bendingForces=Number(n.next()):t.bendingForces=pe(n,"point.bendingForces"),e>12&&(t.bendingForceDelta=Number(n.next())),e>24&&(t.additionalBendingByDPC=Number(n.next()),t.additionalBendingByFLC=Number(n.next()),t.additionalBendingByPRC=Number(n.next()),t.additionalBendingByTCC=Number(n.next())),e>27&&(t.manualInterventionBending=Number(n.next())),e>34&&(t.desiredRollForce=Number(n.next())),t.entryFlatness=Number(n.next()),t.exitFlatness=Number(n.next()),t.entryProfile=Number(n.next()),t.exitProfile=Number(n.next()),t.entryTemperature=Number(n.next()),t.exitTemperature=Number(n.next()),t.yieldStress=Number(n.next()),t.entryThickness=Number(n.next()),t.exitThickness=Number(n.next()),e>25&&(t.exitWedge=Number(n.next()),t.exitCurvature=Number(n.next()),t.length=Number(n.next())),e<35?t.shiftPositions=Number(n.next()):t.shiftPositions=pe(n,"point.shiftPositions"),e>27&&(t.additionalShiftingByMAI=pe(n,"point.additionalShiftingByMAI")),e>23&&(t.pairCrossAngle=Number(n.next())),t.rollForce=Number(n.next()),e>12&&(t.rollForceDelta=Number(n.next())),t.time=Number(n.next()),t.width=Number(n.next()),e>12&&(t.displacement=Number(n.next())),t.screwdown=Number(n.next()),e>12&&(t.screwdownDelta=Number(n.next())),t.dsdFr=Number(n.next()),t.dsdFb=Number(n.next()),t.dsdsr=Number(n.next()),t.d2gd2Fr=Number(n.next()),e<35?t.dFbdFr=Number(n.next()):t.dFbdFr=pe(n,"point.dFbdFr"),t.dFbdsr=Number(n.next()),e>30&&(t.dFbdpc2=Number(n.next())),e>21&&(t.dFbdIU=Number(n.next())),t.dsb=Number(n.next()),t.g=Number(n.next()),t.flattening=Number(n.next()),t.s0kt=Number(n.next()),t.s0kw=Number(n.next()),t.s0=Number(n.next()),t.zpc=Number(n.next()),e>12&&(t.zpcWedge=Number(n.next()),t.wedgeTransferFactor=Number(n.next())),e>12&&e<28&&(n.next(),n.next()),t.temperatureConversionFactor=Number(n.next()),t.gapCorrection=Number(n.next()),t.shiftCorrection=Number(n.next()),e>15&&(t.dPrdFr=Number(n.next())),t}function no(n,e){const t={};return e<35?(t.lowerLimitsBending=[Number(n.next())],t.upperLimitsBending=[Number(n.next())]):(t.lowerLimitsBending=pe(n,"limits.lowerLimitsBending"),t.upperLimitsBending=pe(n,"limits.upperLimitsBending")),t.lowerLimitForce=Number(n.next()),t.upperLimitForce=Number(n.next()),e<21&&(n.next(),n.next()),t.lowerLimitExitThickness=Number(n.next()),t.upperLimitExitThickness=Number(n.next()),e<21&&(n.next(),n.next()),e<35,t.deltaShift=pe(n,"limits.deltaShift"),e<21&&(n.next(),n.next()),e<35?(t.lowerLimitsShift=[Number(n.next())],t.upperLimitsShift=[Number(n.next())]):(t.lowerLimitsShift=pe(n,"limits.lowerLimitsShift"),t.upperLimitsShift=pe(n,"limits.upperLimitsShift")),e>20&&(t.lowerLimitPairCross=Number(n.next()),t.upperLimitPairCross=Number(n.next())),t}function yh(n,e,t,i){const s={};s.calctime={seconds:Number(n.next()),mSecs:Number(n.next())},s.isValid=Y(n.next(),"pass.isValid"),e>27&&(s.passIndex=Y(n.next(),"pass.passIndex")),n.next(),s.sequenceNumber=Y(n.next(),"pass.sequenceNumber"),n.next(),s.standIndex=Y(n.next(),"pass.standIndex"),n.next(),n.next(),n.next(),s.currentLimits=no(n,e),e<21?s.initialLimits=s.currentLimits:(s.initialLimits=no(n,e),Sh(n,e));const r=Y(n.next(),"pass.pointsCount"),a=i.collectPassPoints&&i.maxPointsPerPass!==0,o=i.maxPointsPerPass>0?i.maxPointsPerPass:Number.POSITIVE_INFINITY;let l=!1,c;a&&(c=[]);for(let h=0;h<r;h++){const d=vh(n,e);a&&(h<o?c.push(d):l||(t.push(`Points truncated at ${i.maxPointsPerPass}`),l=!0))}return a&&(s.points=c),s.twData=Ul(n),s.profile=_h(n,e),s}const bh="0.2.0",Eh={version:bh},Mh=1e3,Ch=300,wh="notification",Th="notification--success",Ah="notification--error",Ph="is-leaving",Rh=Eh.version,Js=16,io=18,Lh=50,so="rgba(0, 0, 0, 0.85)",Nh=2,Wt=400,Rn={bgcolor:"rgba(255, 255, 255, 0.88)",bordercolor:"rgba(11, 19, 35, 0.18)",font:{color:"#0b1323",size:11}};class ro{constructor(e){this.collapsedPaths=new Set,this.renderCount=0,this.maxDepth=Lh,this.container=e}render(e){this.data=e,this.renderCount=0,this.collapsedPaths.size===0&&this.collapseEverything(e,"",0),this.container.innerHTML="",this.renderNode(e,null,0,"")}collapseEverything(e,t,i){const s=this.getType(e);if(s==="object"||s==="array"){if(t!==""){this.collapsedPaths.add(t);return}s==="array"?e.forEach((r,a)=>{const o=`[${a}]`;this.collapsedPaths.add(o)}):Object.keys(e).forEach(r=>{this.collapsedPaths.add(r)})}}renderNode(e,t,i,s){if(this.renderCount++,i>this.maxDepth){console.warn(`[JSONTree] Max depth ${this.maxDepth} exceeded at path:`,s);const l=document.createElement("div");l.className="json-line",l.style.color="var(--color-error-solid)",l.textContent="[Max depth exceeded]",this.container.appendChild(l);return}const r=this.getType(e);let a=s;t&&(t.startsWith("[")?a=s+t:a=s===""?t:`${s}.${t}`);const o=this.collapsedPaths.has(a);r==="object"||r==="array"?this.renderComplexNode(e,t,i,a,r,o):this.renderPrimitiveNode(e,t,i)}renderComplexNode(e,t,i,s,r,a){const o=document.createElement("div");o.className="json-line",o.setAttribute("data-path",s);const l=this.createIndent(i);o.appendChild(l);const c=document.createElement("span");if(c.className=`json-toggle ${a?"collapsed":"expanded"}`,c.textContent=a?">":"v",c.style.cursor="pointer",c.style.userSelect="none",c.addEventListener("click",d=>{d.stopPropagation(),this.toggleNode(s)}),o.appendChild(c),t!==null){const d=document.createElement("span");d.className="json-key",d.textContent=`"${t}"`,o.appendChild(d);const u=document.createElement("span");u.textContent=": ",o.appendChild(u)}const h=document.createElement("span");if(h.className="json-bracket",h.textContent=r==="array"?"[":"{",o.appendChild(h),a){const d=r==="array"?e.length:Object.keys(e).length,u=this.calculateByteSize(e),p=document.createElement("span");p.className="json-item-count",p.textContent=`${d} ${r==="array"?"items":"keys"}, ${this.formatByteSize(u)}`,o.appendChild(p);const g=document.createElement("span");g.className="json-bracket",g.textContent=r==="array"?"]":"}",o.appendChild(g),this.container.appendChild(o)}else{if(this.container.appendChild(o),document.createDocumentFragment(),r==="array")for(let p=0;p<e.length;p++){const g=e[p];this.renderNode(g,`[${p}]`,i+1,s)}else Object.entries(e).forEach(([g,x],m)=>{this.renderNode(x,g,i+1,s)});const d=document.createElement("div");d.className="json-line",d.appendChild(this.createIndent(i));const u=document.createElement("span");u.className="json-bracket",u.textContent=r==="array"?"]":"}",d.appendChild(u),this.container.appendChild(d)}}renderPrimitiveNode(e,t,i){const s=document.createElement("div");s.className="json-line";const r=this.createIndent(i);s.appendChild(r);const a=document.createElement("span");if(a.style.display="inline-block",a.style.width=`${io}px`,s.appendChild(a),t!==null){const c=document.createElement("span");c.className="json-key",c.textContent=`"${t}"`,s.appendChild(c);const h=document.createElement("span");h.textContent=": ",s.appendChild(h)}const o=document.createElement("span"),l=typeof e;e===null?(o.className="json-null",o.textContent="null"):l==="string"?(o.className="json-string",o.textContent=`"${e}"`):l==="number"?(o.className="json-number",o.textContent=String(e)):(l==="boolean"&&(o.className="json-boolean"),o.textContent=String(e)),s.appendChild(o),this.container.appendChild(s)}renderComma(e){const t=document.createElement("div");t.className="json-line",t.style.height="0",t.style.overflow="visible";const i=document.createElement("span");i.className="json-comma",i.textContent=",",i.style.marginLeft=`${e*Js+io}px`,t.appendChild(i),this.container.appendChild(t)}createIndent(e){const t=document.createElement("span");return t.className="json-indent",t.style.width=`${e*Js}px`,t}getType(e){return e===null?"primitive":Array.isArray(e)?"array":typeof e=="object"?"object":"primitive"}toggleNode(e){this.collapsedPaths.has(e)?this.collapsedPaths.delete(e):this.collapsedPaths.add(e),this.updateNodeInPlace(e)}updateNodeInPlace(e){const t=this.container.querySelector(`[data-path="${e}"]`);if(!t){console.warn("[JSONTree] Could not find element for path:",e),this.render(this.data);return}const i=this.collapsedPaths.has(e),s=t.querySelector(".json-toggle");if(s&&(s.className=`json-toggle ${i?"collapsed":"expanded"}`,s.textContent=i?">":"v"),i){let r=t.nextElementSibling;const a=this.getElementLevel(t),o=[];for(;r;){const m=this.getElementLevel(r);if(m===a){r.querySelector(".json-bracket")&&r.textContent?.trim().match(/^[}\]]$/)&&o.push(r);break}if(m>a)o.push(r);else break;r=r.nextElementSibling}o.forEach(m=>m.remove());const l=this.getValueAtPath(e),c=this.getType(l),h=c==="array"?l.length:Object.keys(l).length,d=this.calculateByteSize(l),u=t.querySelector(".json-item-count"),p=t.querySelectorAll(".json-bracket")[1];u&&u.remove(),p&&p.remove();const g=document.createElement("span");g.className="json-item-count",g.textContent=`${h} ${c==="array"?"items":"keys"}, ${this.formatByteSize(d)}`,t.appendChild(g);const x=document.createElement("span");x.className="json-bracket",x.textContent=c==="array"?"]":"}",t.appendChild(x)}else{const r=this.getValueAtPath(e),a=this.getType(r),o=this.getElementLevel(t),l=t.querySelector(".json-item-count"),c=t.querySelectorAll(".json-bracket");l&&l.remove(),c.length>1&&c[1].remove();const h=document.createElement("div"),d=this.container;if(this.container=h,a==="array")for(let m=0;m<r.length;m++){const f=e?`${e}[${m}]`:`[${m}]`,E=r[m],S=this.getType(E);(S==="object"||S==="array")&&this.collapsedPaths.add(f),this.renderNode(r[m],`[${m}]`,o+1,e)}else Object.entries(r).forEach(([m,f])=>{const E=e?`${e}.${m}`:m,S=this.getType(f);(S==="object"||S==="array")&&this.collapsedPaths.add(E),this.renderNode(f,m,o+1,e)});const u=document.createElement("div");u.className="json-line",u.appendChild(this.createIndent(o));const p=document.createElement("span");p.className="json-bracket",p.textContent=a==="array"?"]":"}",u.appendChild(p),h.appendChild(u);const g=Array.from(h.children);let x=t;g.forEach(m=>{x.insertAdjacentElement("afterend",m),x=m}),this.container=d}}getElementLevel(e){const t=e.querySelector(".json-indent");return t?(parseInt(t.style.width)||0)/Js:0}getValueAtPath(e){if(!e)return this.data;let t=this.data,i=e;for(;i.length>0;){if(i.startsWith("[")){const s=i.indexOf("]");if(s===-1)break;const r=parseInt(i.slice(1,s));t=t[r],i=i.slice(s+1),i.startsWith(".")&&(i=i.slice(1))}else{const s=i.indexOf("."),r=i.indexOf("[");let a;s===-1&&r===-1?a=i.length:s===-1?a=r:r===-1?a=s:a=Math.min(s,r);const o=i.slice(0,a);t=t[o],i=i.slice(a),i.startsWith(".")&&(i=i.slice(1))}if(t==null)return console.warn("[JSONTree] getValueAtPath: undefined/null at path:",e,"remaining:",i),null}return t}calculateByteSize(e){let t=0;if(e==null)return 4;const i=typeof e;if(i==="boolean")return 4;if(i==="number")return 8;if(i==="string")return e.length*2;if(Array.isArray(e)){for(let s=0;s<e.length;s++)t+=this.calculateByteSize(e[s]);return t}if(i==="object"){for(const s in e)e.hasOwnProperty(s)&&(t+=this.calculateByteSize(e[s]));return t}return 0}formatByteSize(e){return e<1024?`${e}B`:e<1024*1024?`${(e/1024).toFixed(1)}KB`:e<1024*1024*1024?`${(e/(1024*1024)).toFixed(1)}MB`:`${(e/(1024*1024*1024)).toFixed(1)}GB`}expandAll(){this.collapsedPaths.clear(),this.render(this.data)}collapseAll(){this.collapseRecursive(this.data,""),this.render(this.data)}collapseRecursive(e,t){const i=this.getType(e);(i==="object"||i==="array")&&(this.collapsedPaths.add(t),i==="array"?e.forEach((s,r)=>{this.collapseRecursive(s,`${t}.[${r}]`)}):Object.entries(e).forEach(([s,r])=>{this.collapseRecursive(r,`${t}.${s}`)}))}}class Dh{constructor(){this.jsonTree=null,this.currentTree=null,this.currentPlates=[],this.parsedDiv=document.getElementById("parsed"),this.currentDiv=document.getElementById("current"),this.parsedCard=document.getElementById("parsedCard"),this.currentCard=document.getElementById("currentCard"),this.expandAllBtn=document.getElementById("expandAllBtn"),this.collapseAllBtn=document.getElementById("collapseAllBtn"),this.expandCurrentBtn=document.getElementById("expandCurrentBtn"),this.collapseCurrentBtn=document.getElementById("collapseCurrentBtn"),this.plateDropdown=document.getElementById("plateDropdown"),this.platePrevBtn=document.getElementById("platePrev"),this.plateNextBtn=document.getElementById("plateNext"),this.toggleCurrent=document.getElementById("toggleCurrent"),this.toggleAll=document.getElementById("toggleAll"),this.initializeTrees(),this.setupEventHandlers()}initializeTrees(){this.jsonTree=new ro(this.parsedDiv),this.currentTree=new ro(this.currentDiv)}setupEventHandlers(){this.expandAllBtn.addEventListener("click",()=>{this.jsonTree&&this.jsonTree.expandAll()}),this.collapseAllBtn.addEventListener("click",()=>{this.jsonTree&&this.jsonTree.collapseAll()}),this.expandCurrentBtn.addEventListener("click",()=>{this.currentTree&&this.currentTree.expandAll()}),this.collapseCurrentBtn.addEventListener("click",()=>{this.currentTree&&this.currentTree.collapseAll()}),this.plateDropdown.addEventListener("change",()=>{this.onPlateSelectionChanged()}),this.platePrevBtn.addEventListener("click",()=>{this.cyclePlate(-1)}),this.plateNextBtn.addEventListener("click",()=>{this.cyclePlate(1)})}onPlateSelectionChanged(){const e=parseInt(this.plateDropdown.value);if(isNaN(e)||e<0||e>=this.currentPlates.length){this.currentCard.style.display="none";return}const t=this.currentPlates[e];this.currentTree&&(this.currentTree.render(t),this.currentCard.style.display=this.toggleCurrent.classList.contains("active")?"block":"none");const i=new CustomEvent("plateSelected",{detail:{plate:t,index:e}});document.dispatchEvent(i)}cyclePlate(e){if(this.currentPlates.length===0)return;const i=((parseInt(this.plateDropdown.value)||0)+e+this.currentPlates.length)%this.currentPlates.length;this.plateDropdown.value=i.toString(),this.onPlateSelectionChanged()}renderAllPlates(e,t){this.jsonTree&&this.jsonTree.render({plates:e,totalPlates:t}),this.currentPlates=e,this.plateDropdown.innerHTML="",e.forEach((i,s)=>{const a=i.preCalc?.plateId||`Plate ${s+1}`,o=document.createElement("option");o.value=s.toString(),o.textContent=a,this.plateDropdown.appendChild(o)}),e.length>0&&(this.plateDropdown.value="0",this.onPlateSelectionChanged()),this.parsedCard.style.display=this.toggleAll.classList.contains("active")?"block":"none"}reset(){this.parsedCard.style.display="none",this.currentCard.style.display="none",this.plateDropdown.value="",this.currentPlates=[]}}var Ih=Tc();const Me=Ac(Ih);class Fh{constructor(){this.PREFIX="dmmreader_",this.YEARS=5,this.MIGRATION_FLAG=this.PREFIX+"migrated_v1",this.dbPromise=null,this.localAvailable=this.testLocalStorage(),this.localAvailable&&this.migrateCookiesOnce(),this.initIndexedDB()}initIndexedDB(){window.indexedDB&&(this.dbPromise=new Promise((e,t)=>{const i=window.indexedDB.open("DmmReaderStorage",1);i.onerror=()=>{console.warn("IndexedDB not available, falling back to localStorage"),e(null)},i.onsuccess=()=>e(i.result),i.onupgradeneeded=s=>{const r=s.target.result;r.objectStoreNames.contains("files")||r.createObjectStore("files")}}))}testLocalStorage(){try{const e="__dmmreader_test__";return window.localStorage.setItem(e,"1"),window.localStorage.removeItem(e),!0}catch{return!1}}setCookie(e,t){const i=new Date;i.setFullYear(i.getFullYear()+this.YEARS),document.cookie=`${this.PREFIX}${e}=${encodeURIComponent(t)}; expires=${i.toUTCString()}; path=/; SameSite=Strict`}getCookie(e){const t=`${this.PREFIX}${e}=`;return document.cookie.split(";").map(i=>i.trim()).find(i=>i.startsWith(t))?.slice(t.length)??null}deleteCookie(e){document.cookie=`${this.PREFIX}${e}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; SameSite=Strict`}migrateCookiesOnce(){try{if(window.localStorage.getItem(this.MIGRATION_FLAG))return;const e=this.PREFIX;document.cookie.split(";").map(i=>i.trim()).forEach(i=>{if(!i.startsWith(e))return;const s=i.indexOf("=");if(s===-1)return;const r=i.slice(0,s),a=i.slice(s+1),o=r.slice(e.length);if(o){if(window.localStorage.getItem(r)===null&&window.localStorage.getItem(e+o)===null)try{this.set(o,decodeURIComponent(a))}catch{}this.deleteCookie(o)}}),window.localStorage.setItem(this.MIGRATION_FLAG,"1")}catch{}}set(e,t){const i=this.PREFIX+e;if(this.localAvailable)try{window.localStorage.setItem(i,t);return}catch{}this.setCookie(e,t)}get(e){const t=this.PREFIX+e;if(this.localAvailable)try{const s=window.localStorage.getItem(t);if(s!==null)return s}catch{}const i=this.getCookie(e);return i?decodeURIComponent(i):null}setJSON(e,t){try{this.set(e,JSON.stringify(t))}catch{}}getJSON(e,t=null){const i=this.get(e);if(!i)return t;try{return JSON.parse(i)}catch{return t}}getBoolean(e,t=!1){const i=this.get(e);return i===null?t:i==="true"}setBoolean(e,t){this.set(e,t?"true":"false")}async setLargeContent(e,t){if(this.dbPromise)try{const i=await this.dbPromise;if(i){const r=i.transaction(["files"],"readwrite").objectStore("files");await new Promise((a,o)=>{const l=r.put(t,e);l.onsuccess=()=>a(),l.onerror=()=>o(l.error)});return}}catch{console.warn("IndexedDB storage failed, falling back to localStorage")}try{this.set(e,t)}catch(i){console.warn("Failed to store large content:",i)}}async getLargeContent(e){if(this.dbPromise)try{const t=await this.dbPromise;if(t){const s=t.transaction(["files"],"readonly").objectStore("files");return await new Promise((a,o)=>{const l=s.get(e);l.onsuccess=()=>a(l.result||null),l.onerror=()=>o(l.error)})}}catch{console.warn("IndexedDB retrieval failed, falling back to localStorage")}return this.get(e)}}const ue=new Fh,ie={TOGGLE_CURRENT:"toggle_current_v1",TOGGLE_ALL:"toggle_all_v1",TOGGLE_MEASUREMENTS:"toggle_measurements_v1",TOGGLE_PROFILE:"toggle_profile_v1",TOGGLE_SETPOINTS:"toggle_setpoints_v1",TOGGLE_ROLL:"toggle_roll_v1",TOGGLE_SEGMENTS:"toggle_segments_v1",TOGGLE_TWM:"toggle_twm_v1",TOGGLE_BMRES:"toggle_bmres_v1",FLATNESS_SHOW_GRID:"flatness_show_grid_v1",FLATNESS_DIVERGING_COLOR:"flatness_diverging_color_v1",FLATNESS_MARKER_MODE:"flatness_marker_mode_v1",FLATNESS_FIXED_SCALE:"flatness_fixed_scale_v1",FLATNESS_SYNC_SCALE:"flatness_sync_scale_v1",PROFILE_CENTERLINE_MODE:"profile_centerline_mode_v1",PROFILE_P0_MODE:"profile_p0_mode_v1",PROFILE_SHOW_GRID:"profile_show_grid_v1",PROFILE_DIVERGING_COLOR:"profile_diverging_color_v1",PROFILE_COMPOSITE_MODE:"profile_composite_mode_v1",PROFILE_HOVER_MODE:"profile_hover_mode_v1",PROFILE_STATS_MODE:"profile_stats_mode_v1",PROFILE_SHOW_CROSS_SECTION_LINE:"profile_show_cross_section_line_v1",SEGMENTS_ACTIVE_SIGNALS:"segments_active_signals_v1",SEGMENTS_Y2_AXIS_SIGNALS:"segments_y2_axis_signals_v1",SEGMENTS_Y3_AXIS_SIGNALS:"segments_y3_axis_signals_v1",SEGMENTS_CUSTOM_COLORS:"segments_custom_colors_v1",SEGMENTS_AUTO_SYNC:"segments_auto_sync_v1",SEGMENTS_INHERITANCE_VISIBLE:"segments_inheritance_visible_v1",SEGMENTS_USE_SEGMENT_START_FOR_X:"segments_use_segment_start_for_x_v1",SEGMENTS_CONSOLE_DEFINITIONS:"segments_console_definitions_v1",SEGMENTS_CONSOLE_HISTORY:"segments_console_history_v1",TWM_DIFFERENTIAL_MODE:"twm_differential_mode_v1",LAST_OPENED_FILE:"last_opened_file_v1",LAST_OPENED_FILE_CONTENT:"last_opened_file_content_v1",ROLL_PLOT_MODE:"roll_plot_mode_v1",ROLL_AUTO_SYNC:"roll_auto_sync_v1",GLOBAL_STAND_INDEX:"global_stand_index_v1",GLOBAL_PASS_INDEX:"global_pass_index_v1"};class Oh{constructor(){this.currentPlateForFlatness=null,this.flatnessPlotDivs=new Map,this.plotCache=new Map,this.scaleSourceGaugeIndex=null,this.gaugeRanges=new Map,this.flatnessCard=document.getElementById("flatnessCard"),this.flatnessPlotContainer=document.getElementById("flatnessPlotContainer"),this.flatnessMarkerMode=document.getElementById("flatnessMarkerMode"),this.flatnessShowGrid=document.getElementById("flatnessShowGrid"),this.flatnessDivergingColor=document.getElementById("flatnessDivergingColor"),this.flatnessFixedScale=document.getElementById("flatnessFixedScale"),this.flatnessSyncScale=document.getElementById("flatnessSyncScale"),this.toggleMeasurements=document.getElementById("toggleMeasurements"),this.restoreSavedSettings(),this.setupEventHandlers()}restoreSavedSettings(){ue.getBoolean(ie.FLATNESS_SHOW_GRID,!1)&&this.flatnessShowGrid.classList.add("active"),ue.getBoolean(ie.FLATNESS_DIVERGING_COLOR,!0)&&this.flatnessDivergingColor.classList.add("active"),ue.getBoolean(ie.FLATNESS_FIXED_SCALE,!1)&&this.flatnessFixedScale.classList.add("active"),ue.getBoolean(ie.FLATNESS_SYNC_SCALE,!1)&&this.flatnessSyncScale.classList.add("active");const r=ue.get(ie.FLATNESS_MARKER_MODE);(r==="amplitude"||r==="elongation")&&(this.flatnessMarkerMode.value=r),this.updateScaleButtonLabels()}setupEventHandlers(){this.flatnessMarkerMode.addEventListener("change",()=>{ue.set(ie.FLATNESS_MARKER_MODE,this.flatnessMarkerMode.value),this.currentPlateForFlatness&&this.populateFlatnessMeasurements(this.currentPlateForFlatness)}),this.flatnessShowGrid.addEventListener("click",()=>{this.flatnessShowGrid.classList.toggle("active");const e=this.flatnessShowGrid.classList.contains("active");ue.setBoolean(ie.FLATNESS_SHOW_GRID,e),this.currentPlateForFlatness&&this.flatnessPlotDivs.size>0&&this.updateFlatnessPlots()}),this.flatnessDivergingColor.addEventListener("click",()=>{this.flatnessDivergingColor.classList.toggle("active");const e=this.flatnessDivergingColor.classList.contains("active");ue.setBoolean(ie.FLATNESS_DIVERGING_COLOR,e),this.currentPlateForFlatness&&this.flatnessPlotDivs.size>0&&this.updateFlatnessPlots()}),this.flatnessFixedScale.addEventListener("click",()=>{this.flatnessFixedScale.classList.toggle("active");const e=this.flatnessFixedScale.classList.contains("active");ue.setBoolean(ie.FLATNESS_FIXED_SCALE,e),this.updateScaleButtonLabels(),this.applyScaleUpdate()}),this.flatnessSyncScale.addEventListener("click",()=>{this.flatnessSyncScale.classList.toggle("active");const e=this.flatnessSyncScale.classList.contains("active");if(ue.setBoolean(ie.FLATNESS_SYNC_SCALE,e),e){const t=Array.from(this.flatnessPlotDivs.keys()).sort((i,s)=>i-s);this.ensureScaleSourceGaugeIndex(t)}this.updateScaleButtonLabels(),this.applyScaleUpdate()}),document.addEventListener("plateSelected",(e=>{this.populateFlatnessMeasurements(e.detail.plate)})),document.addEventListener("flatnessVisible",(()=>{this.resizePlots()}))}updateFlatnessPlots(){if(!this.currentPlateForFlatness)return;const t=this.currentPlateForFlatness?.measured?.flatnessScans;if(!t||!Array.isArray(t))return;const i=this.flatnessMarkerMode.value,s=this.groupScansByGauge(t),r=this.prepareGaugeData(s,i),a=Array.from(r.keys()).sort((o,l)=>o-l);this.ensureScaleSourceGaugeIndex(a),this.refreshGaugeRangesFromData(r),a.forEach(o=>{const l=this.flatnessPlotDivs.get(o),c=r.get(o);if(!l||!c)return;const h=this.getEffectiveRangeForGauge(o,c.baseRange),d=this.sanitizeRange(h.min,h.max),{colorscale:u,zmin:p,zmax:g}=this.calculateColorscale(d.min,d.max),x=this.resolveZBounds(p,g,d,this.isScaleOverrideActive()),m={colorscale:[u],z:[c.zMatrix],zmin:[x.zmin===null?null:x.zmin],zmax:[x.zmax===null?null:x.zmax]};Me.restyle(l,m,0);const f=this.flatnessShowGrid.classList.contains("active")?c.uniqueX.map(E=>({type:"line",x0:E,x1:E,y0:0,y1:1,yref:"paper",line:{color:"rgba(0, 0, 0, 0.3)",width:1,dash:"dot"}})):[];Me.relayout(l,{shapes:f})}),this.updateScaleButtonLabels()}extractScanData(e){let t=0;for(const l of e){const c=l?.points;if(!c||!c.distance||!c.amplitude||!c.elongation)continue;const h=c.distance,d=c.amplitude,u=c.elongation;!Array.isArray(h)||!Array.isArray(d)||!Array.isArray(u)||(t+=Math.min(h.length,d.length,u.length))}const i=new Array(t),s=new Array(t),r=new Array(t),a=new Array(t);let o=0;for(const l of e){const c=l?.points,h=l?.accumulatedLength??0;if(!c||!c.distance||!c.amplitude||!c.elongation)continue;const d=c.distance,u=c.amplitude,p=c.elongation;if(!Array.isArray(d)||!Array.isArray(u)||!Array.isArray(p))continue;const g=Math.min(d.length,u.length,p.length);for(let x=0;x<g;x++)i[o]=h,s[o]=d[x],r[o]=u[x],a[o]=p[x],o++}return{xData:i,yData:s,amplitudeData:r,elongationData:a}}buildZMatrix(e,t,i,s,r){const a=new Map;for(let l=0;l<i.length;l++){const c=`${i[l].toFixed(4)},${s[l].toFixed(4)}`;a.set(c,r[l])}const o=[];for(let l=0;l<t.length;l++){const c=[];for(let h=0;h<e.length;h++){const d=`${e[h].toFixed(4)},${t[l].toFixed(4)}`,u=a.get(d)??null;c.push(u)}o.push(c)}return o}calculateColorscale(e,t){let i,s,r;const a=o=>Math.min(Math.max(o,0),1);if(this.flatnessDivergingColor.classList.contains("active")&&e<-1){const c=Math.max(e,-100),h=Math.max(t-c,1e-9),d=0,u=a((-1-c)/h),p=a((0-c)/h);i=[[d,"rgb(0, 0, 0)"],[u,"rgb(100, 100, 100)"],[p,"rgb(0, 200, 0)"],[p+(1-p)*.5,"rgb(255, 255, 0)"],[1,"rgb(255, 0, 0)"]],s=c,r=t}else if(this.flatnessDivergingColor.classList.contains("active")&&e<0){const o=Math.max(t-e,1e-9),l=a((0-e)/o);i=[[0,"rgb(100, 100, 100)"],[l,"rgb(0, 200, 0)"],[l+(1-l)*.5,"rgb(255, 255, 0)"],[1,"rgb(255, 0, 0)"]],s=e,r=t}else i=[[0,"rgb(0, 200, 0)"],[.5,"rgb(255, 255, 0)"],[1,"rgb(255, 0, 0)"]],s=void 0,r=void 0;return{colorscale:i,zmin:s,zmax:r}}groupScansByGauge(e){const t=new Map;return e.forEach(i=>{const s=i?.gaugeIndex??0;t.has(s)||t.set(s,[]),t.get(s).push(i)}),t}prepareGaugeData(e,t){const i=new Map;return e.forEach((s,r)=>{if(!Array.isArray(s)||s.length===0)return;const{xData:a,yData:o,amplitudeData:l,elongationData:c}=this.extractScanData(s),h=Array.from(new Set(a)).sort((E,S)=>E-S),d=Array.from(new Set(o)).sort((E,S)=>E-S),u=t==="amplitude"?l:c,p=this.buildZMatrix(h,d,a,o,u),g=p.flat().filter(E=>E!==null),x=g.length>0?Math.min(...g):0,m=g.length>0?Math.max(...g):x,f=this.sanitizeRange(x,m);i.set(r,{uniqueX:h,uniqueY:d,zMatrix:p,baseRange:f,plateId:s[0]?.plateId})}),i}refreshGaugeRangesFromData(e){this.gaugeRanges.clear(),e.forEach((t,i)=>{this.gaugeRanges.set(i,this.sanitizeRange(t.baseRange.min,t.baseRange.max))})}ensureScaleSourceGaugeIndex(e){if(e.length===0){this.scaleSourceGaugeIndex=null;return}(this.scaleSourceGaugeIndex===null||!e.includes(this.scaleSourceGaugeIndex))&&(this.scaleSourceGaugeIndex=e[0])}sanitizeRange(e,t){let i=Number.isFinite(e)?e:0,s=Number.isFinite(t)?t:i;if(s<i){const r=i;i=s,s=r}if(s-i<1e-9){const r=Math.max(Math.abs(i),Math.abs(s),1)*.001;s=i+r}return{min:i,max:s}}getEffectiveRangeForGauge(e,t){if(this.isFixedScaleActive())return this.flatnessDivergingColor.classList.contains("active")&&t.min<0?{min:t.min,max:100}:{min:0,max:100};if(this.isSyncScaleActive()){const i=this.scaleSourceGaugeIndex;if(i!==null){const s=this.gaugeRanges.get(i);if(s)return{min:s.min,max:s.max}}}return{min:t.min,max:t.max}}resolveZBounds(e,t,i,s){if(s)return{zmin:i.min,zmax:i.max};const r=Number.isFinite(e)?e:null,a=Number.isFinite(t)?t:null;if(r!==null&&a!==null&&a<=r){const o=Math.max(Math.abs(r),1)*.001;return{zmin:r,zmax:r+o}}return{zmin:r,zmax:a}}isFixedScaleActive(){return this.flatnessFixedScale?.classList.contains("active")??!1}isSyncScaleActive(){return this.flatnessSyncScale?.classList.contains("active")??!1}isScaleOverrideActive(){return this.isFixedScaleActive()||this.isSyncScaleActive()}applyScaleUpdate(){this.currentPlateForFlatness&&this.flatnessPlotDivs.size>0?this.updateFlatnessPlots():this.updateScaleButtonLabels()}updateScaleButtonLabels(){const e=this.flatnessShowGrid.classList.contains("active");this.flatnessShowGrid.textContent="G",this.flatnessShowGrid.classList.toggle("strikeout",!e);const t=this.flatnessDivergingColor.classList.contains("active");if(this.flatnessDivergingColor.textContent="DC",this.flatnessDivergingColor.classList.toggle("strikeout",!t),this.flatnessFixedScale){const i=this.flatnessFixedScale.classList.contains("active");this.flatnessFixedScale.textContent="0-100",this.flatnessFixedScale.classList.toggle("strikeout",!i),this.flatnessFixedScale.title=i?"Using fixed 0-100 colorscale for all scans":"Force all scans to use a 0-100 colorscale"}if(this.flatnessSyncScale){const i=this.flatnessSyncScale.classList.contains("active"),s=this.scaleSourceGaugeIndex!==null?`gauge ${this.scaleSourceGaugeIndex}`:"first gauge";this.flatnessSyncScale.textContent="S",this.flatnessSyncScale.classList.toggle("strikeout",!i),this.flatnessSyncScale.title=i?`Applying ${s} scale to all scans`:`Sync colorscale to ${s} across all scans`}}setScaleSourceGaugeIndex(e){this.scaleSourceGaugeIndex!==e&&(this.scaleSourceGaugeIndex=e,this.isSyncScaleActive()&&this.currentPlateForFlatness&&this.flatnessPlotDivs.size>0?this.updateFlatnessPlots():this.updateScaleButtonLabels())}attachScaleSourceHandlers(e,t){const i=()=>this.setScaleSourceGaugeIndex(t);e.addEventListener("click",i),e.addEventListener("mouseenter",i),e.addEventListener("focusin",i),e.addEventListener("touchstart",i,{passive:!0})}populateFlatnessMeasurements(e){this.currentPlateForFlatness=e;const i=e?.measured?.flatnessScans;if(!i||!Array.isArray(i)||i.length===0){this.flatnessCard.style.display="none",this.flatnessPlotContainer.innerHTML="",this.flatnessPlotDivs.clear(),this.gaugeRanges.clear(),this.scaleSourceGaugeIndex=null,this.updateScaleButtonLabels();return}const s=e?.preCalc?.plateId??`plate_${Math.random()}`,r=this.flatnessMarkerMode.value,a=`${s}_${r}`,o=this.groupScansByGauge(i),l=this.prepareGaugeData(o,r),c=Array.from(l.keys()).sort((u,p)=>u-p);if(c.length===0){this.flatnessCard.style.display="none",this.flatnessPlotContainer.innerHTML="",this.flatnessPlotDivs.clear(),this.gaugeRanges.clear(),this.scaleSourceGaugeIndex=null,this.updateScaleButtonLabels();return}if(this.ensureScaleSourceGaugeIndex(c),this.refreshGaugeRangesFromData(l),this.plotCache.has(a)){const u=this.plotCache.get(a);this.flatnessPlotContainer.innerHTML="",this.flatnessPlotDivs=new Map(u),u.forEach((g,x)=>{this.flatnessPlotContainer.appendChild(g)});const p=this.toggleMeasurements.classList.contains("active");this.flatnessCard.style.display="block",this.flatnessCard.style.visibility="visible",requestAnimationFrame(()=>{this.updateFlatnessPlots(),this.resizePlots(),p||(this.flatnessCard.style.display="none")}),this.updateScaleButtonLabels();return}this.flatnessPlotDivs.clear();const h=this.toggleMeasurements.classList.contains("active");this.flatnessCard.style.display="block",this.flatnessCard.style.visibility="visible",this.flatnessPlotContainer.innerHTML="",this.flatnessPlotContainer.style.width="100%";const d=new Map;c.forEach(u=>{const p=document.createElement("div");p.style.cssText="width:100%;height:350px;min-height:350px;background:var(--surface-subtle);border:1px solid var(--color-border);border-radius:var(--radius-sm)",this.flatnessPlotContainer.appendChild(p),d.set(u,p)}),c.forEach(u=>{const p=d.get(u),g=l.get(u);!p||!g||this.createPlot(u,g,p,r)}),this.plotCache.set(a,new Map(this.flatnessPlotDivs)),h||(this.flatnessCard.style.display="none"),this.updateScaleButtonLabels()}createPlot(e,t,i,s){const r=this.sanitizeRange(t.baseRange.min,t.baseRange.max);this.gaugeRanges.set(e,r);const a=this.getEffectiveRangeForGauge(e,r),o=this.sanitizeRange(a.min,a.max),{colorscale:l,zmin:c,zmax:h}=this.calculateColorscale(o.min,o.max),d=this.resolveZBounds(c,h,o,this.isScaleOverrideActive()),u={x:t.uniqueX,y:t.uniqueY,z:t.zMatrix,type:"contour",colorscale:l,contours:{coloring:"heatmap",showlines:!1,showlabels:!1},showscale:!0,line:{width:0},colorbar:{title:{text:s==="amplitude"?"Amplitude":"Elongation",font:{size:11}},titleside:"right",tickfont:{size:10},len:1.05,thickness:20,outlinewidth:0},hovertemplate:"Accumulated Length: %{x:.4f}<br>Distance: %{y:.4f}<br>"+(s==="amplitude"?"Amplitude":"Elongation")+": %{z:.6f}<extra></extra>"};d.zmin===null?delete u.zmin:u.zmin=d.zmin,d.zmax===null?delete u.zmax:u.zmax=d.zmax;const p=t.plateId,g=this.flatnessPlotContainer.clientWidth||this.flatnessPlotContainer.offsetWidth,f={width:g>0?g:800,height:350,title:{text:`Flatness measurement. plateId: ${p}, gauge ${e}`,font:{family:'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',size:13,weight:600},x:.5,xanchor:"center",y:.93,yanchor:"top",pad:{t:5,b:2}},xaxis:{title:{text:"Accumulated Length",font:{size:11}},tickfont:{size:10},gridcolor:"#d0d0d0",showgrid:!0,gridwidth:1},yaxis:{title:{text:"Distance",font:{size:11}},tickfont:{size:10},gridcolor:"#d0d0d0",showgrid:!0,gridwidth:1},plot_bgcolor:"#ffffff",paper_bgcolor:"#ffffff",margin:{l:50,r:30,t:50,b:50},hovermode:"closest",showlegend:!1,autosize:!1,hoverlabel:Rn};this.flatnessShowGrid.classList.contains("active")&&(f.shapes=t.uniqueX.map(E=>({type:"line",x0:E,x1:E,y0:0,y1:1,yref:"paper",line:{color:"rgba(0, 0, 0, 0.3)",width:1,dash:"dot"}}))),Me.newPlot(i,[u],f,{responsive:!1,displayModeBar:!1}),i.on("plotly_doubleclick",()=>(Me.relayout(i,{"xaxis.autorange":!0,"yaxis.autorange":!0}),!1)),this.flatnessPlotDivs.set(e,i),this.attachScaleSourceHandlers(i,e)}reset(){this.flatnessCard.style.display="none",this.flatnessPlotContainer.innerHTML="",this.flatnessPlotDivs.clear(),this.plotCache.clear(),this.currentPlateForFlatness=null,this.gaugeRanges.clear(),this.scaleSourceGaugeIndex=null,this.updateScaleButtonLabels()}resizePlots(){this.flatnessPlotDivs.size>0&&requestAnimationFrame(()=>{this.flatnessPlotDivs.forEach(e=>{if(typeof Me<"u"&&Me?.relayout){const t=e.clientWidth,i=e.clientHeight;if(t>0&&i>0)try{Me.relayout(e,{width:t,height:i})}catch{}}})})}}function Fr(n,e){if(n.length===0)return 0;if(n.length===1)return n[0];const t=e/100*(n.length-1),i=Math.floor(t),s=Math.ceil(t),r=t-i;return s>=n.length?n[n.length-1]:n[i]*(1-r)+n[s]*r}function Or(n){if(n.length===0)return 0;const e=[...n].sort((t,i)=>t-i);return Fr(e,50)}function Uh(n){if(n.length===0)return 0;const e=Or(n),t=n.map(i=>Math.abs(i-e));return Or(t)}function Bh(n,e=3.5){if(n.length===0)return[];if(n.length<=2)return n;const t=Or(n),i=Uh(n);if(i===0)return n;const s=n.filter(r=>.6745*Math.abs(r-t)/i<=e);return s.length<n.length*.5?n:s}function ao(n,e=3.5,t=2.5,i=97.5){if(n.length===0)return{minZ:0,maxZ:0};if(n.length===1)return{minZ:n[0],maxZ:n[0]};const r=[...Bh(n,e)].sort((l,c)=>l-c),a=Fr(r,t),o=Fr(r,i);return{minZ:a,maxZ:o}}class kh{constructor(){this.NUM_Y_POINTS=100,this.MAD_THRESHOLD=3.5,this.LOWER_PERCENTILE=.1,this.UPPER_PERCENTILE=99.9,this.profileCrossSectionLineToggle=null,this.currentPlateForProfile=null,this.profilePlotDivs=new Map,this.plotToGaugeIndex=new WeakMap,this.crossSectionPlotDivs=new Map,this.plotCache=new Map,this.crossSectionCache=new Map,this.currentScansByGauge=new Map,this.selectedXPositions=new Map,this.statsContainers=new Map,this.updatePlotsTimeout=null,this.baseShapesByGauge=new Map,this.initialAxisRanges=new WeakMap,this.profileCard=document.getElementById("profileCard"),this.profilePlotContainer=document.getElementById("profilePlotContainer"),this.profileCenterlineMode=document.getElementById("profileCenterlineMode"),this.profileP0Mode=document.getElementById("profileP0Mode"),this.profileShowGrid=document.getElementById("profileShowGrid"),this.profileDivergingColor=document.getElementById("profileDivergingColor"),this.profileCompositeMode=document.getElementById("profileCompositeMode"),this.profileHoverMode=document.getElementById("profileHoverMode"),this.profileStatsMode=document.getElementById("profileStatsMode"),this.toggleProfile=document.getElementById("toggleProfile"),this.profileCrossSectionLineToggle=document.getElementById("profileCrossSectionLine"),this.restoreSavedSettings(),this.setupEventHandlers(),this.initializeCrossSectionLineToggle(),this.updateButtonLabels()}restoreSavedSettings(){ue.getBoolean(ie.PROFILE_CENTERLINE_MODE,!1)&&this.profileCenterlineMode.classList.add("active"),ue.getBoolean(ie.PROFILE_P0_MODE,!1)&&this.profileP0Mode.classList.add("active"),ue.getBoolean(ie.PROFILE_SHOW_GRID,!1)&&this.profileShowGrid.classList.add("active"),ue.getBoolean(ie.PROFILE_DIVERGING_COLOR,!0)&&this.profileDivergingColor.classList.add("active"),ue.getBoolean(ie.PROFILE_COMPOSITE_MODE,!1)&&this.profileCompositeMode.classList.add("active"),ue.getBoolean(ie.PROFILE_HOVER_MODE,!1)&&this.profileHoverMode.classList.add("active"),ue.getBoolean(ie.PROFILE_STATS_MODE,!1)&&this.profileStatsMode.classList.add("active");const l=ue.getBoolean(ie.PROFILE_SHOW_CROSS_SECTION_LINE,!0);this.profileCrossSectionLineToggle&&!l&&this.profileCrossSectionLineToggle.classList.add("strikeout")}setupEventHandlers(){this.profileCenterlineMode.addEventListener("click",()=>{this.profileCenterlineMode.classList.toggle("active");const e=this.profileCenterlineMode.classList.contains("active");ue.setBoolean(ie.PROFILE_CENTERLINE_MODE,e),this.updateButtonLabels(),this.currentPlateForProfile&&this.profilePlotDivs.size>0&&this.updateProfilePlots()}),this.profileP0Mode.addEventListener("click",()=>{this.profileP0Mode.classList.toggle("active");const e=this.profileP0Mode.classList.contains("active");ue.setBoolean(ie.PROFILE_P0_MODE,e),this.updateButtonLabels(),this.currentPlateForProfile&&this.profilePlotDivs.size>0&&this.updateProfilePlots()}),this.profileShowGrid.addEventListener("click",()=>{this.profileShowGrid.classList.toggle("active");const e=this.profileShowGrid.classList.contains("active");ue.setBoolean(ie.PROFILE_SHOW_GRID,e),this.currentPlateForProfile&&this.profilePlotDivs.size>0&&this.refreshGridOverlay(),this.updateButtonLabels()}),this.profileDivergingColor.addEventListener("click",()=>{this.profileDivergingColor.classList.toggle("active");const e=this.profileDivergingColor.classList.contains("active");ue.setBoolean(ie.PROFILE_DIVERGING_COLOR,e),this.currentPlateForProfile&&this.profilePlotDivs.size>0&&this.updateProfilePlots(),this.updateButtonLabels()}),this.profileCompositeMode.addEventListener("click",()=>{this.profileCompositeMode.classList.toggle("active");const e=this.profileCompositeMode.classList.contains("active");ue.setBoolean(ie.PROFILE_COMPOSITE_MODE,e),this.currentPlateForProfile&&this.crossSectionPlotDivs.size>0&&Array.from(this.crossSectionPlotDivs.keys()).sort((i,s)=>i-s).forEach(i=>{const s=this.currentScansByGauge.get(i),r=this.crossSectionPlotDivs.get(i),a=this.selectedXPositions.get(i);s&&r&&a!==void 0&&this.updateCrossSection(i,s,r,a)}),this.updateButtonLabels()}),this.profileHoverMode.addEventListener("click",()=>{this.profileHoverMode.classList.toggle("active");const e=this.profileHoverMode.classList.contains("active");ue.setBoolean(ie.PROFILE_HOVER_MODE,e),this.updateButtonLabels()}),this.profileStatsMode.addEventListener("click",()=>{this.profileStatsMode.classList.toggle("active");const e=this.profileStatsMode.classList.contains("active");ue.setBoolean(ie.PROFILE_STATS_MODE,e),this.toggleStatsVisibility(e),this.updateButtonLabels()}),document.addEventListener("plateSelected",(e=>{this.populateProfileMeasurements(e.detail.plate)})),document.addEventListener("profileVisible",(()=>{this.resizePlots()}))}toggleStatsVisibility(e){this.statsContainers.forEach(t=>{t.style.display=e?"block":"none"})}initializeCrossSectionLineToggle(){if(!this.profileCrossSectionLineToggle)return;ue.getBoolean(ie.PROFILE_SHOW_CROSS_SECTION_LINE,!0)||this.profileCrossSectionLineToggle.classList.add("strikeout"),this.profileCrossSectionLineToggle.addEventListener("click",()=>{const i=!this.profileCrossSectionLineToggle.classList.toggle("strikeout");ue.setBoolean(ie.PROFILE_SHOW_CROSS_SECTION_LINE,i),this.profilePlotDivs.forEach((s,r)=>{const a=this.selectedXPositions.get(r);a!==void 0&&this.updateCrossSectionMarker(r,a,!0)}),this.updateButtonLabels()})}updateButtonLabels(){const e=this.profileCenterlineMode.classList.contains("active");this.profileCenterlineMode.textContent=e?"C":"H";const t=this.profileP0Mode.classList.contains("active");this.profileP0Mode.textContent=t?"P0":"P1";const i=this.profileShowGrid.classList.contains("active");this.profileShowGrid.textContent="G",this.profileShowGrid.classList.toggle("strikeout",!i);const s=this.profileDivergingColor.classList.contains("active");this.profileDivergingColor.textContent="DC",this.profileDivergingColor.classList.toggle("strikeout",!s);const r=this.profileCompositeMode.classList.contains("active");this.profileCompositeMode.textContent=r?"C":"S";const a=this.profileHoverMode.classList.contains("active");this.profileHoverMode.textContent="H",this.profileHoverMode.classList.toggle("strikeout",!a);const o=this.profileStatsMode.classList.contains("active");this.profileStatsMode.textContent="S",this.profileStatsMode.classList.toggle("strikeout",!o),this.profileCrossSectionLineToggle&&(this.profileCrossSectionLineToggle.textContent="BL")}captureInitialAxisRanges(e){requestAnimationFrame(()=>{const t=e?._fullLayout;if(!t)return;const i={};Object.keys(t).forEach(s=>{if(/^(x|y)axis\d*$/.test(s)){const a=t[s]?.range;Array.isArray(a)&&a.length===2&&(i[s]=[a[0],a[1]])}}),Object.keys(i).length>0&&this.initialAxisRanges.set(e,i)})}resetPlotZoom(e){const t=this.initialAxisRanges.get(e);if(t&&Object.keys(t).length>0){const i={};return Object.entries(t).forEach(([s,r])=>{i[`${s}.range`]=Array.isArray(r)?[...r]:r,i[`${s}.autorange`]=!1}),Me.relayout(e,i).then(()=>{}).catch(()=>this.performAutoRangeFallback(e))}return this.performAutoRangeFallback(e)}performAutoRangeFallback(e){const t=Me,i=t?.Plots?.zoomOut2d?t.Plots.zoomOut2d(e):Me.relayout(e,{"xaxis.autorange":!0,"yaxis.autorange":!0});return Promise.resolve(i).then(()=>{}).catch(()=>{})}attachDoubleClickReset(e){const t=e;if(t._dblResetAttached)return;this.initialAxisRanges.has(e)||this.captureInitialAxisRanges(e);const i=s=>(s&&(s.preventDefault(),s.stopPropagation()),this.resetPlotZoom(e).then(()=>{const r=this.plotToGaugeIndex.get(e);if(r===void 0)return;const a=this.selectedXPositions.get(r);if(a!==void 0)this.updateCrossSectionMarker(r,a,!0);else{const o=this.baseShapesByGauge.get(r);o&&Me.relayout(e,{shapes:this.cloneShapes(o)})}}).catch(()=>{}));typeof t.on=="function"&&t.on("plotly_doubleclick",()=>(i(),!1)),e.addEventListener("dblclick",s=>{i(s)},{capture:!0,passive:!1}),t._dblResetAttached=!0}createStatsContainer(e,t){const i=document.createElement("div");i.style.cssText="padding:12px;background:var(--surface-subtle);border:1px solid var(--color-border);border-radius:var(--radius-sm);margin-top:8px;font-size:12px;display:none;";const s=this.profileStatsMode.classList.contains("active");i.style.display=s?"block":"none";const r=document.createElement("h4");r.textContent=`Gauge ${e} - Scan Statistics`,r.style.cssText="margin:0 0 8px 0;font-size:13px;font-weight:600;",i.appendChild(r);const a=document.createElement("dl");a.style.cssText="margin:0;display:grid;grid-template-columns:auto 1fr;gap:4px 12px;";const o=t[0];return o&&[{label:"Plate ID",value:o.plateId},{label:"Gauge Index",value:o.gaugeIndex},{label:"Start Length",value:o.startLength},{label:"Plate Center",value:o.plateCenter},{label:"Measured Profile",value:o.measuredProfile},{label:"Profile Degree",value:o.profile?.degree},{label:"Profile Coefficients",value:o.profile?.coeff?.length?`[${o.profile.coeff.map(c=>c.toFixed(6)).join(", ")}]`:"N/A"},{label:"Measured Poly Degree",value:o.measuredPoly?.degree},{label:"Measured Poly Coefficients",value:o.measuredPoly?.coeff?.length?`[${o.measuredPoly.coeff.map(c=>c.toFixed(6)).join(", ")}]`:"N/A"},{label:"Total Points",value:o.points?.length},{label:"Scan Count",value:t.length}].forEach(({label:c,value:h})=>{const d=document.createElement("dt");d.textContent=c+":",d.style.cssText="font-weight:600;color:#666;";const u=document.createElement("dd");u.textContent=h!=null?String(h):"N/A",u.style.cssText="margin:0;color:#333;font-family:monospace;",a.appendChild(d),a.appendChild(u)}),i.appendChild(a),i}updateProfilePlots(){this.currentPlateForProfile&&(this.updatePlotsTimeout!==null&&clearTimeout(this.updatePlotsTimeout),this.updatePlotsTimeout=window.setTimeout(()=>{this.updatePlotsTimeout=null;const t=this.currentPlateForProfile?.measured?.profileScans;if(!t||!Array.isArray(t))return;const i=new Map;t.forEach(s=>{const r=s?.gaugeIndex??0;i.has(r)||i.set(r,[]),i.get(r).push(s)}),requestAnimationFrame(()=>{Array.from(i.keys()).sort((r,a)=>r-a).forEach(r=>{const a=this.profilePlotDivs.get(r),o=this.crossSectionPlotDivs.get(r);if(!a||!o)return;const l=i.get(r);this.createPlot(r,l,a,o)})})},50))}extractScanData(e){let t=0;for(const o of e){const l=o?.points;if(!(!l||!Array.isArray(l)))for(const c of l)c&&typeof c.x=="number"&&typeof c.y=="number"&&t++}const i=new Array(t),s=new Array(t),r=new Array(t);let a=0;for(const o of e){const l=o?.points,c=o?.startLength??0;if(!(!l||!Array.isArray(l)))for(const h of l)h&&typeof h.x=="number"&&typeof h.y=="number"&&(i[a]=c,s[a]=h.x,r[a]=h.y,a++)}return{xData:i,yData:s,zValues:r}}resampleScansWithSpline(e,t){let i=1/0,s=-1/0,r=0;for(const h of e){const d=h?.points;if(!d||!Array.isArray(d))continue;for(const p of d)typeof p.x=="number"&&(i=Math.min(i,p.x),s=Math.max(s,p.x));d.some(p=>typeof p.x=="number"&&typeof p.y=="number")&&r++}const a=new Array(t),o=new Array(r),l=s-i;for(let h=0;h<t;h++)a[h]=i+l*h/(t-1);let c=0;for(const h of e){const d=h?.points;if(!d||!Array.isArray(d)||d.length===0){o[c]=new Array(t).fill(null),c++;continue}const u=d.filter(g=>typeof g.x=="number"&&typeof g.y=="number").sort((g,x)=>g.x-x.x);if(u.length<2){o[c]=new Array(t).fill(null),c++;continue}const p=new Array(t);for(let g=0;g<t;g++){const x=a[g];p[g]=this.linearInterpolate(u,x)}o[c]=p,c++}return{resampledData:o,yPositions:a}}linearInterpolate(e,t){for(let i=0;i<e.length-1;i++){const s=e[i],r=e[i+1];if(s.x<=t&&t<=r.x){const a=(t-s.x)/(r.x-s.x);return s.y+a*(r.y-s.y)}}return t<e[0].x?e[0].y:t>e[e.length-1].x?e[e.length-1].y:null}calculateColorscale(e,t){let i,s,r;if(this.profileDivergingColor.classList.contains("active")&&e<-1){const l=Math.max(e,-100),c=t-l,h=0,d=(-1-l)/c,u=(0-l)/c;i=[[h,"rgb(0, 0, 0)"],[d,"rgb(100, 100, 100)"],[u,"rgb(0, 200, 0)"],[u+(1-u)*.5,"rgb(255, 255, 0)"],[1,"rgb(255, 0, 0)"]],s=l,r=t}else if(this.profileDivergingColor.classList.contains("active")&&e<0){const a=t-e,o=(0-e)/a;i=[[0,"rgb(100, 100, 100)"],[o,"rgb(0, 200, 0)"],[o+(1-o)*.5,"rgb(255, 255, 0)"],[1,"rgb(255, 0, 0)"]],s=e,r=t}else i=[[0,"rgb(0, 200, 0)"],[.5,"rgb(255, 255, 0)"],[1,"rgb(255, 0, 0)"]],s=e,r=t;return{colorscale:i,zmin:s,zmax:r}}populateProfileMeasurements(e){this.currentPlateForProfile=e;const i=e?.measured?.profileScans;if(!i||!Array.isArray(i)||i.length===0){this.profileCard.style.display="none";return}const s=e?.preCalc?.plateId??`plate_${Math.random()}`,r=this.profileP0Mode.classList.contains("active"),a=this.profileCenterlineMode.classList.contains("active"),o=this.profileShowGrid.classList.contains("active"),l=this.profileDivergingColor.classList.contains("active"),c=this.profileCompositeMode.classList.contains("active"),h=`${s}_p0:${r}_cl:${a}_grid:${o}_div:${l}_comp:${c}`;if(this.plotCache.has(h)&&this.crossSectionCache.has(h)){const E=this.plotCache.get(h),S=this.crossSectionCache.get(h);this.profilePlotContainer.innerHTML="",this.profilePlotDivs=new Map(E),this.crossSectionPlotDivs=new Map(S),this.baseShapesByGauge.clear(),E.forEach((w,A)=>{const N=S.get(A),y=this.statsContainers.get(A);this.baseShapesByGauge.set(A,this.captureShapesFromPlot(w));const _=document.createElement("div");_.style.cssText="display:flex;flex-direction:column;width:100%;";const P=document.createElement("div");P.style.cssText="display:flex;gap:12px;width:100%;",P.appendChild(w),N&&P.appendChild(N),_.appendChild(P),y&&_.appendChild(y),this.profilePlotContainer.appendChild(_)});const v=new Map;i.forEach(w=>{const A=w?.gaugeIndex??0;v.has(A)||v.set(A,[]),v.get(A).push(w)}),this.currentScansByGauge=v;const L=this.toggleProfile.classList.contains("active");this.profileCard.style.display="block",this.profileCard.style.visibility="visible",requestAnimationFrame(()=>{this.resizePlots(),L||(this.profileCard.style.display="none")});return}const d=new Map;i.forEach(E=>{const S=E?.gaugeIndex??0;d.has(S)||d.set(S,[]),d.get(S).push(E)}),this.currentScansByGauge=d,this.profilePlotDivs.clear(),this.crossSectionPlotDivs.clear(),this.statsContainers.clear(),this.baseShapesByGauge.clear();const u=this.toggleProfile.classList.contains("active");this.profileCard.style.display="block",this.profileCard.style.visibility="visible",this.profilePlotContainer.innerHTML="",this.profilePlotContainer.style.width="100%";const p=document.createDocumentFragment(),g=Array.from(d.keys()).sort((E,S)=>E-S),x=new Map,m=new Map;g.forEach(E=>{const S=document.createElement("div");S.style.cssText="display:flex;flex-direction:column;width:100%;";const v=document.createElement("div");v.style.cssText="display:flex;gap:12px;width:100%;";const L=document.createElement("div");L.id=`profile-plot-gauge-${E}`,L.style.cssText="flex:1;height:350px;min-height:350px;background:var(--surface-subtle);border:1px solid var(--color-border);border-radius:var(--radius-sm)";const w=document.createElement("div");w.id=`cross-section-plot-gauge-${E}`,w.style.cssText="width:350px;height:350px;min-height:350px;background:var(--surface-subtle);border:1px solid var(--color-border);border-radius:var(--radius-sm)",v.appendChild(L),v.appendChild(w);const A=d.get(E),N=this.createStatsContainer(E,A);this.statsContainers.set(E,N),S.appendChild(v),S.appendChild(N),p.appendChild(S),x.set(E,L),m.set(E,w)}),this.profilePlotContainer.appendChild(p),g.forEach(E=>{this.createPlot(E,d.get(E),x.get(E),m.get(E))});const f=`${s}_p0:${r}_cl:${a}`;this.plotCache.set(f,new Map(this.profilePlotDivs)),this.crossSectionCache.set(f,new Map(this.crossSectionPlotDivs)),u||(this.profileCard.style.display="none")}createPlot(e,t,i,s){this.profileCenterlineMode.classList.contains("active")?this.createCenterlinePlot(e,t,i,s):this.createHeatmapPlot(e,t,i,s)}createCenterlinePlot(e,t,i,s){const r=[],a=[],o=[];if(t.forEach(g=>{if(g.startLength===void 0||g.plateCenter===void 0)return;const x=g.profile?.coeff;if(!x||!Array.isArray(x))return;let m=0;for(let f=x.length-1;f>=0;f--)m=m*g.plateCenter+x[f];r.push(g.startLength),a.push(m),g.measuredProfile!==void 0&&g.measuredProfile!==null?o.push(g.measuredProfile):o.push(null)}),r.length===0){Me.newPlot(i,[],{title:{text:`Gauge ${e}: No centerline data`,font:{size:13}},width:i.clientWidth||600,height:350},{responsive:!1,displayModeBar:!1}),this.captureInitialAxisRanges(i),this.attachDoubleClickReset(i);return}const l=t[0]?.plateId,c=[];c.push({x:r,y:o,type:"scatter",mode:"lines+markers",name:"Measured Profile",line:{color:"rgb(244, 109, 30)",width:2,dash:"solid"},marker:{size:5,color:"rgb(244, 109, 30)"},hovertemplate:"Start Length: %{x:.4f}<br>Measured Profile: %{y:.6f}<extra></extra>",yaxis:"y"}),c.push({x:r,y:a,type:"scatter",mode:"lines+markers",name:"Centerline Thickness",line:{color:"rgb(0, 0, 0)",width:2},marker:{size:6,color:"rgb(0, 0, 0)"},hovertemplate:"Start Length: %{x:.4f}<br>Centerline Thickness: %{y:.6f}<extra></extra>",yaxis:"y2"});const h=this.currentPlateForProfile?.preCalc?.targets?.m_profile;h!=null&&!isNaN(h)&&c.push({x:[Math.min(...r),Math.max(...r)],y:[h,h],type:"scatter",mode:"lines",name:"Target Profile",line:{color:"rgb(244, 109, 30)",width:2,dash:"dot"},hovertemplate:`Target Profile: ${h.toFixed(6)}<extra></extra>`,yaxis:"y",showlegend:!1});const d={width:i.clientWidth||600,height:350,title:{text:`Centerline Thickness - plateId: ${l}, gauge ${e}`,font:{family:'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',size:13,weight:600},x:.5,xanchor:"center",y:.93,yanchor:"top",pad:{t:5,b:2}},xaxis:{title:{text:"Start Length",font:{size:11}},tickfont:{size:10},gridcolor:"#d0d0d0",showgrid:!0,gridwidth:1},yaxis:{title:{text:"Measured Profile",font:{size:11,color:"rgb(244, 109, 30)"}},tickfont:{size:10,color:"rgb(244, 109, 30)"},gridcolor:"#d0d0d0",showgrid:!0,gridwidth:1,side:"left"},plot_bgcolor:"#ffffff",paper_bgcolor:"#ffffff",margin:{l:60,r:60,t:50,b:50},hovermode:"closest",showlegend:!1,autosize:!1,hoverlabel:Rn};d.yaxis2={title:{text:"Centerline Thickness",font:{size:11,color:"rgb(0, 0, 0)"}},tickfont:{size:10,color:"rgb(0, 0, 0)"},overlaying:"y",side:"right",showgrid:!1},Me.newPlot(i,c,d,{responsive:!1,displayModeBar:!1}),this.captureInitialAxisRanges(i),this.setBaseShapesForGauge(e,d.shapes),this.attachDoubleClickReset(i);const u=this.selectedXPositions.get(e);u!==void 0&&this.updateCrossSectionMarker(e,u),i.on("plotly_click",g=>{if(g.points&&g.points.length>0){const x=g.points[0].x;this.selectedXPositions.set(e,x),this.updateAllCrossSections(x)}}),i.on("plotly_hover",g=>{if(this.profileHoverMode.classList.contains("active")&&g.points&&g.points.length>0){const x=g.points[0].x;this.updateAllCrossSections(x)}}),i.on("plotly_unhover",()=>{if(!this.profileHoverMode.classList.contains("active"))return;const g=this.selectedXPositions.get(e);g!==void 0&&this.updateAllCrossSections(g)}),this.profilePlotDivs.set(e,i),this.plotToGaugeIndex.set(i,e),this.crossSectionPlotDivs.set(e,s),s.style.display="block";const p=r[Math.floor(r.length/2)];this.selectedXPositions.set(e,p),this.updateCrossSection(e,t,s,p)}createHeatmapPlot(e,t,i,s){this.profileP0Mode.classList.contains("active")?this.createP0Heatmap(e,t,i,s):this.createContinuousHeatmap(e,t,i,s)}createP0Heatmap(e,t,i,s){s.style.display="block";const r=200,{resampledData:a,yPositions:o}=this.resampleScansWithSpline(t,r),l=t.length*2,c=new Array(l),h=new Array(r);for(let T=0;T<t.length;T++){const R=t[T];c[T*2]=R.startLength,c[T*2+1]=R.stopLength}for(let T=0;T<r;T++){const R=new Array(l);for(let I=0;I<t.length;I++){const V=a[I][T];R[I*2]=V,R[I*2+1]=V}h[T]=R}const d=r*l,u=new Array(d);let p=0;for(let T=0;T<r;T++){const R=h[T];for(let I=0;I<l;I++){const V=R[I];V!==null&&typeof V=="number"&&(u[p++]=V)}}if(u.length=p,u.length===0){Me.newPlot(i,[],{title:{text:`Gauge ${e}: No P0 heatmap data`,font:{size:13}},width:i.clientWidth||600,height:350},{responsive:!1,displayModeBar:!1}),this.captureInitialAxisRanges(i),this.attachDoubleClickReset(i);return}const{minZ:g,maxZ:x}=ao(u,this.MAD_THRESHOLD,this.LOWER_PERCENTILE,this.UPPER_PERCENTILE),{colorscale:m,zmin:f,zmax:E}=this.calculateColorscale(g,x),S=t[0]?.plateId,v=this.profilePlotContainer.clientWidth||this.profilePlotContainer.offsetWidth,L=v>0?v-350-12:450,w=350,A={x:c,y:o,z:h,type:"heatmap",colorscale:m,zmin:f,zmax:E,showscale:!0,colorbar:{title:{text:"Thickness",font:{size:11}},titleside:"right",tickfont:{size:10},len:1.05,thickness:20,outlinewidth:0},hovertemplate:"Start Length: %{x:.4f}<br>Barrel pos.: %{y:.4f}<br>Thickness: %{z:.6f}<extra></extra>"},N={width:L,height:w,title:{text:`Profile measurement. plateId: ${S}, gauge ${e}`,font:{family:'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',size:13,weight:600},x:.5,xanchor:"center",y:.93,yanchor:"top",pad:{t:5,b:2}},xaxis:{title:{text:"Start Length",font:{size:11}},tickfont:{size:10},showgrid:!1,showline:!1,zeroline:!1},yaxis:{title:{text:"Barrel Position",font:{size:11}},tickfont:{size:10},showgrid:!1,showline:!1,zeroline:!1},plot_bgcolor:"#ffffff",paper_bgcolor:"#ffffff",margin:{l:50,r:30,t:50,b:50},hovermode:"closest",showlegend:!1,autosize:!1,hoverlabel:Rn};this.profileShowGrid.classList.contains("active")&&(N.shapes=t.map(T=>({type:"line",x0:T.startLength,x1:T.startLength,y0:0,y1:1,yref:"paper",line:{color:"rgba(0, 0, 0, 0.3)",width:1,dash:"dot"}}))),Me.newPlot(i,[A],N,{responsive:!1,displayModeBar:!1}),this.captureInitialAxisRanges(i),this.setBaseShapesForGauge(e,N.shapes),this.attachDoubleClickReset(i);const y=this.selectedXPositions.get(e);y!==void 0&&this.updateCrossSectionMarker(e,y),i.on("plotly_click",T=>{if(T.points&&T.points.length>0){const R=T.points[0].x;this.selectedXPositions.set(e,R),this.updateAllCrossSections(R)}}),i.on("plotly_hover",T=>{this.profileHoverMode.classList.contains("active")&&T.points&&T.points.length>0&&this.updateAllCrossSections(T.points[0].x)}),i.on("plotly_unhover",()=>{if(!this.profileHoverMode.classList.contains("active"))return;const T=this.selectedXPositions.get(e);T!==void 0&&this.updateAllCrossSections(T)}),this.profilePlotDivs.set(e,i),this.plotToGaugeIndex.set(i,e),this.crossSectionPlotDivs.set(e,s),this.currentScansByGauge.set(e,t);const _=t.map(T=>T.startLength).sort((T,R)=>T-R),P=_[Math.floor(_.length/2)];this.selectedXPositions.set(e,P),this.updateCrossSection(e,t,s,P)}getColorFromScale(e,t){e=Math.max(0,Math.min(1,e));let i=0;for(let g=0;g<t.length-1;g++)if(e>=t[g][0]&&e<=t[g+1][0]){i=g;break}const s=t[i][1],r=t[Math.min(i+1,t.length-1)][1],a=t[i][0],o=t[Math.min(i+1,t.length-1)][0],l=o>a?(e-a)/(o-a):0,c=this.parseColor(s),h=this.parseColor(r),d=Math.round(c.r+(h.r-c.r)*l),u=Math.round(c.g+(h.g-c.g)*l),p=Math.round(c.b+(h.b-c.b)*l);return`rgb(${d}, ${u}, ${p})`}parseColor(e){if(e.startsWith("rgb(")){const t=e.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);if(t)return{r:parseInt(t[1]),g:parseInt(t[2]),b:parseInt(t[3])}}return{r:0,g:0,b:0}}cloneShapes(e){return!e||!Array.isArray(e)?[]:e.map(t=>({...t,line:t?.line?{...t.line}:void 0}))}captureShapesFromPlot(e){const t=e?.layout;return this.cloneShapes(t?.shapes).filter(s=>s?.line?.color!==so)}buildGridShapesForGauge(e){const t=this.currentScansByGauge.get(e);if(!t||!Array.isArray(t))return[];const i=this.profileP0Mode.classList.contains("active"),s=new Set;return t.forEach(r=>{typeof r.startLength=="number"&&s.add(r.startLength),i&&typeof r.stopLength=="number"&&s.add(r.stopLength)}),Array.from(s).sort((r,a)=>r-a).map(r=>({type:"line",x0:r,x1:r,y0:0,y1:1,yref:"paper",line:{color:"rgba(0, 0, 0, 0.3)",width:1,dash:"dot"}}))}refreshGridOverlay(){const e=this.profileShowGrid.classList.contains("active"),t=this.profileCenterlineMode.classList.contains("active");this.profilePlotDivs.forEach((i,s)=>{let r=[];!t&&e&&(r=this.buildGridShapesForGauge(s)),this.baseShapesByGauge.set(s,r),Me.relayout(i,{shapes:r});const a=this.selectedXPositions.get(s);a!==void 0&&this.updateCrossSectionMarker(s,a)})}setBaseShapesForGauge(e,t){this.baseShapesByGauge.set(e,this.cloneShapes(t))}updateCrossSectionMarker(e,t,i=!1){const s=this.profilePlotDivs.get(e);if(!s)return;this.baseShapesByGauge.has(e)||this.baseShapesByGauge.set(e,this.captureShapesFromPlot(s));const r=this.baseShapesByGauge.get(e)??[],a=this.cloneShapes(r);ue.getBoolean(ie.PROFILE_SHOW_CROSS_SECTION_LINE,!0)&&a.push({type:"line",x0:t,x1:t,y0:0,y1:1,yref:"paper",line:{color:so,width:Nh}}),Me.relayout(s,{shapes:a})}createContinuousHeatmap(e,t,i,s){s.style.display="block";const r=200,{resampledData:a,yPositions:o}=this.resampleScansWithSpline(t,r),l=t.length,c=new Array(l),h=new Array(r);for(let T=0;T<l;T++)c[T]=t[T].startLength;for(let T=0;T<r;T++){const R=new Array(l);for(let I=0;I<l;I++)R[I]=a[I][T];h[T]=R}const d=r*l,u=new Array(d);let p=0;for(let T=0;T<r;T++){const R=h[T];for(let I=0;I<l;I++){const V=R[I];V!==null&&typeof V=="number"&&(u[p++]=V)}}if(u.length=p,u.length===0){Me.newPlot(i,[],{title:{text:`Gauge ${e}: No continuous heatmap data`,font:{size:13}},width:i.clientWidth||600,height:350},{responsive:!1,displayModeBar:!1}),this.captureInitialAxisRanges(i),this.attachDoubleClickReset(i);return}const{minZ:g,maxZ:x}=ao(u,this.MAD_THRESHOLD,this.LOWER_PERCENTILE,this.UPPER_PERCENTILE),{colorscale:m,zmin:f,zmax:E}=this.calculateColorscale(g,x),S=t[0]?.plateId,v=this.profilePlotContainer.clientWidth||this.profilePlotContainer.offsetWidth,L=v>0?v-350-12:450,w=350,A={x:c,y:o,z:h,type:"contour",colorscale:m,zmin:f,zmax:E,contours:{coloring:"heatmap",showlines:!1,showlabels:!1},showscale:!0,line:{width:0},colorbar:{title:{text:"Thickness",font:{size:11}},titleside:"right",tickfont:{size:10},len:1.05,thickness:20,outlinewidth:0},hovertemplate:"Start Length: %{x:.4f}<br>Barrel pos.: %{y:.4f}<br>Thickness: %{z:.6f}<extra></extra>"},N={width:L,height:w,title:{text:`Profile measurement. plateId: ${S}, gauge ${e}`,font:{family:'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',size:13,weight:600},x:.5,xanchor:"center",y:.93,yanchor:"top",pad:{t:5,b:2}},xaxis:{title:{text:"Start Length",font:{size:11}},tickfont:{size:10},showgrid:!1,showline:!1,zeroline:!1},yaxis:{title:{text:"Barrel Position",font:{size:11}},tickfont:{size:10},showgrid:!1,showline:!1,zeroline:!1},plot_bgcolor:"#ffffff",paper_bgcolor:"#ffffff",margin:{l:50,r:30,t:50,b:50},hovermode:"closest",showlegend:!1,autosize:!1,hoverlabel:Rn};this.profileShowGrid.classList.contains("active")&&(N.shapes=c.map(T=>({type:"line",x0:T,x1:T,y0:0,y1:1,yref:"paper",line:{color:"rgba(0, 0, 0, 0.3)",width:1,dash:"dot"}}))),Me.newPlot(i,[A],N,{responsive:!1,displayModeBar:!1}),this.captureInitialAxisRanges(i),this.setBaseShapesForGauge(e,N.shapes),this.attachDoubleClickReset(i);const y=this.selectedXPositions.get(e);y!==void 0&&this.updateCrossSectionMarker(e,y),i.on("plotly_click",T=>{if(T.points&&T.points.length>0){const R=T.points[0].x;this.selectedXPositions.set(e,R),this.updateAllCrossSections(R)}}),i.on("plotly_hover",T=>{this.profileHoverMode.classList.contains("active")&&T.points&&T.points.length>0&&this.updateAllCrossSections(T.points[0].x)}),i.on("plotly_unhover",()=>{if(!this.profileHoverMode.classList.contains("active"))return;const T=this.selectedXPositions.get(e);T!==void 0&&this.updateAllCrossSections(T)}),this.profilePlotDivs.set(e,i),this.plotToGaugeIndex.set(i,e),this.crossSectionPlotDivs.set(e,s),this.currentScansByGauge.set(e,t);const _=c.slice().sort((T,R)=>T-R),P=_[Math.floor(_.length/2)];this.selectedXPositions.set(e,P),this.updateCrossSection(e,t,s,P)}updateAllCrossSections(e){const t=Array.from(this.currentScansByGauge.keys()).sort((s,r)=>s-r),i=this.profileCompositeMode.classList.contains("active");t.forEach(s=>{const r=this.currentScansByGauge.get(s),a=this.crossSectionPlotDivs.get(s);if(r&&a)if(i)this.updateCrossSection(s,r,a,e);else{const o=r.reduce((l,c)=>{const h=Math.abs(l.startLength-e);return Math.abs(c.startLength-e)<h?c:l});this.updateCrossSection(s,r,a,o.startLength)}})}updateCrossSection(e,t,i,s){const r=this.profileCompositeMode.classList.contains("active"),a=t.reduce((m,f)=>{const E=Math.abs(m.startLength-s);return Math.abs(f.startLength-s)<E?f:m}),o=a.startLength;t[0]?.plateId;let l=o;if(r){const m=Array.from(this.currentScansByGauge.keys()).sort((E,S)=>E-S),f=this.currentScansByGauge.get(m[0]);f&&(l=f.reduce((S,v)=>{const L=Math.abs(S.startLength-s);return Math.abs(v.startLength-s)<L?v:S}).startLength)}const c=r?l:o;this.selectedXPositions.set(e,c);const h=[];if(r){const m=Array.from(this.currentScansByGauge.keys()).sort((S,v)=>S-v),f=e===m[0],E=["rgb(244, 109, 30)","rgb(31, 119, 180)","rgb(229, 93, 15)","rgb(65, 140, 200)","rgb(200, 80, 10)","rgb(50, 160, 220)","rgb(255, 130, 50)","rgb(20, 100, 160)","rgb(220, 100, 25)","rgb(80, 180, 240)"];m.forEach(S=>{const v=this.currentScansByGauge.get(S);if(!v)return;const L=v.reduce((y,_)=>{const P=Math.abs(y.startLength-l);return Math.abs(_.startLength-l)<P?_:y}),w=L.points||[],A=[],N=[];if(w.forEach(y=>{y&&typeof y.x=="number"&&typeof y.y=="number"&&(A.push(y.x),N.push(y.y))}),A.length>0){const y=E[S%E.length],_=Math.min(...A),P=Math.max(...A),T=A.map(R=>P===_?0:-1+2*(R-_)/(P-_));if(f&&h.push({x:T,y:N,type:"scatter",mode:"lines+markers",name:`Gauge ${S}`,line:{color:y,width:2},marker:{size:4,color:y},hovertemplate:`Gauge ${S}<br>Barrel pos.: %{x:.4f}<br>Thickness: %{y:.6f}<extra></extra>`}),!f&&L.profile?.coeff&&Array.isArray(L.profile.coeff)){const R=L.profile.coeff,I=-1,V=1,H=200,J=[],W=[];for(let se=0;se<H;se++){const fe=I+(V-I)*se/(H-1);let be=0;for(let Fe=R.length-1;Fe>=0;Fe--)be=be*fe+R[Fe];J.push(fe),W.push(be)}J.length>0&&h.push({x:J,y:W,type:"scatter",mode:"lines",name:`Gauge ${S} Polynomial`,line:{color:y,width:3,dash:"solid"},hovertemplate:`Gauge ${S} Polynomial<br>Barrel pos.: %{x:.4f}<br>Thickness: %{y:.6f}<extra></extra>`})}if(!f&&L.plateCenter!==void 0&&L.profile?.coeff){const R=L.profile.coeff,I=P===_?0:-1+2*(L.plateCenter-_)/(P-_);let V=0;for(let H=R.length-1;H>=0;H--)V=V*I+R[H];h.push({x:[I],y:[V],type:"scatter",mode:"markers",name:`Gauge ${S} Centerline`,marker:{size:8,color:y,symbol:"circle",line:{color:"rgb(255, 255, 255)",width:1}},hovertemplate:`<b>Gauge ${S} Centerline</b><br>Barrel pos.: ${I.toFixed(4)}<br>Thickness: ${V.toFixed(6)}<extra></extra>`})}}})}else{const m=a.points||[],f=[],E=[];if(m.forEach(w=>{w&&typeof w.x=="number"&&typeof w.y=="number"&&(f.push(w.x),E.push(w.y))}),f.length===0){Me.newPlot(i,[],{title:{text:"No Data",font:{size:11}},width:350,height:350,margin:{l:50,r:20,t:50,b:50}},{responsive:!1,displayModeBar:!1}),this.captureInitialAxisRanges(i),this.updateCrossSectionMarker(e,c);return}const S=Math.min(...f),v=Math.max(...f),L=f.map(w=>v===S?0:-1+2*(w-S)/(v-S));if(h.push({x:L,y:E,type:"scatter",mode:"lines+markers",name:"Cross-section",line:{color:"rgb(244, 109, 30)",width:2},marker:{size:4,color:"rgb(244, 109, 30)"},hovertemplate:"<b>Barrel pos.</b>: %{x:.4f}<br><b>Thickness</b>: %{y:.6f}<extra></extra>"}),a.profile?.coeff&&Array.isArray(a.profile.coeff)){const w=a.profile.coeff,A=-1,N=1,y=200,_=[],P=[];for(let T=0;T<y;T++){const R=A+(N-A)*T/(y-1);let I=0;for(let V=w.length-1;V>=0;V--)I=I*R+w[V];_.push(R),P.push(I)}if(_.length>0&&h.push({x:_,y:P,type:"scatter",mode:"lines",name:"Polynomial Fit",line:{color:"rgb(0, 0, 0)",width:3,dash:"solid"},hoverinfo:"skip",showlegend:!1}),a.plateCenter!==void 0){const T=v===S?0:-1+2*(a.plateCenter-S)/(v-S);let R=0;for(let I=w.length-1;I>=0;I--)R=R*T+w[I];h.push({x:[T],y:[R],type:"scatter",mode:"markers",name:"Centerline",marker:{size:8,color:"rgb(0, 0, 0)",symbol:"circle",line:{color:"rgb(255, 255, 255)",width:1}},hovertemplate:`<b>Centerline</b><br>Barrel pos.: ${T.toFixed(4)}<br>Thickness: ${R.toFixed(6)}<extra></extra>`})}}}const d=`Cross-section at X=${o.toFixed(4)}`,u=a.points||[],p=[];u.forEach(m=>{m&&typeof m.x=="number"&&p.push(m.x)});let g="";if(p.length>0){const m=Math.min(...p),f=Math.max(...p);g=`Original range:
[${m.toFixed(4)}, ${f.toFixed(4)}]`}const x={width:350,height:350,title:{text:d,font:{family:'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',size:11,weight:600},x:.5,xanchor:"center",y:.95,yanchor:"top",pad:{t:5,b:2}},xaxis:{title:{text:"OS -> DS",font:{size:10}},tickfont:{size:9},gridcolor:"#e0e0e0",showgrid:!0,gridwidth:1},yaxis:{title:{text:"Thickness",font:{size:10}},tickfont:{size:9},gridcolor:"#e0e0e0",showgrid:!0,gridwidth:1},plot_bgcolor:"#ffffff",paper_bgcolor:"#ffffff",margin:{l:50,r:20,t:60,b:50},hovermode:"closest",showlegend:!1,autosize:!1,hoverlabel:Rn,annotations:[]};g&&x.annotations.push({text:"ⓘ",x:1,y:1,xref:"paper",yref:"paper",xanchor:"right",yanchor:"top",showarrow:!1,font:{size:16,color:"rgba(80, 80, 80, 0.6)"},bgcolor:"rgba(255, 255, 255, 0)",bordercolor:"rgba(0, 0, 0, 0)",borderwidth:0,borderpad:2,hovertext:g,hoverlabel:{bgcolor:"rgba(255, 255, 255, 0.95)",bordercolor:"rgba(0, 0, 0, 0.3)",font:{size:11,family:"monospace",color:"rgb(0, 0, 0)"},align:"left"}}),Me.newPlot(i,h,x,{responsive:!1,displayModeBar:!1}),this.captureInitialAxisRanges(i),this.updateCrossSectionMarker(e,c)}reset(){this.profileCard.style.display="none",this.profilePlotContainer.innerHTML="",this.profilePlotDivs.clear(),this.crossSectionPlotDivs.clear(),this.plotCache.clear(),this.crossSectionCache.clear(),this.currentScansByGauge.clear(),this.selectedXPositions.clear(),this.statsContainers.clear(),this.baseShapesByGauge.clear(),this.currentPlateForProfile=null}resizePlots(){this.profilePlotDivs.size>0&&requestAnimationFrame(()=>{this.profilePlotDivs.forEach(e=>{if(typeof Me<"u"&&Me?.relayout){const t=e.clientWidth,i=e.clientHeight;if(t>0&&i>0)try{Me.relayout(e,{width:t,height:i})}catch{}}}),this.crossSectionPlotDivs.forEach(e=>{if(typeof Me<"u"&&Me?.relayout){const t=e.clientWidth,i=e.clientHeight;if(t>0&&i>0)try{Me.relayout(e,{width:t,height:i})}catch{}}})})}}class zh{constructor(){this.currentPlate=null,this.file=null,this.result=null,this.metaDiv=document.getElementById("meta"),this.setupEventHandlers()}setupEventHandlers(){document.addEventListener("plateSelected",(e=>{this.currentPlate=e.detail.plate,this.updateDisplay()}))}display(e,t){this.file=e,this.result=t,t.plates.length>0&&(this.currentPlate=t.plates[0]),this.updateDisplay()}updateDisplay(){if(!this.file||!this.result)return;const e=[];if(e.push(`<span class="meta__item"><strong>File:</strong> ${this.file.name} (${(this.file.size/1024/1024).toFixed(1)} MB)</span>`),this.currentPlate){e.push(`<span class="meta__item"><strong>Version:</strong> ${this.currentPlate.header.fileVersion}</span>`);const t=this.currentPlate.preCalc?.plateId;e.push(`<span class="meta__item"><strong>Plate ID:</strong> ${t||"Unknown"}</span>`);const i=this.currentPlate.measured?.indexAdaptSegment;if(i!==void 0&&e.push(`<span class="meta__item"><strong>Inher. Segment:</strong> ${i}</span>`),this.currentPlate.preCalc?.passes?.length>0&&this.currentPlate.preCalc.passes[0]?.calctime){const s=this.currentPlate.preCalc.passes[0].calctime,r=new Date(s.seconds*1e3+s.mSecs),a=r.toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})+", "+r.toLocaleTimeString("en-GB",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit"})+"."+s.mSecs.toString().padStart(3,"0");e.push(`<span class="meta__item"><strong>Calc Time:</strong> ${a}</span>`)}}if(this.result.warnings.length>0){const t=this.result.warnings.slice(0,10).map((r,a)=>`${a+1}. ${r}`).join(`
`),i=this.result.warnings.length>10?`
... and ${this.result.warnings.length-10} more`:"",s=t+i;e.push(`<span class="meta__item meta__warning warnings-hover" data-tooltip="${s.replace(/"/g,"&quot;")}"><strong>Warnings:</strong> ${this.result.warnings.length} total</span>`),console.group(`📋 Parser Warnings (${this.result.warnings.length} total)`),this.result.warnings.forEach((r,a)=>{console.warn(`${a+1}. ${r}`)}),console.groupEnd()}e.push(`<span class="meta__item meta__item--right">v${Rh}</span>`),this.metaDiv.innerHTML=e.join(' <span class="meta__separator">•</span> '),this.metaDiv.style.display="flex"}hide(){this.metaDiv.style.display="none"}}class Gh{constructor(e={}){this.deferred=!!e.deferred,this.toggleCurrent=document.getElementById("toggleCurrent"),this.toggleAll=document.getElementById("toggleAll"),this.toggleMeasurements=document.getElementById("toggleMeasurements"),this.toggleProfile=document.getElementById("toggleProfile"),this.toggleSetpoints=document.getElementById("toggleSetpoints"),this.toggleRoll=document.getElementById("toggleRoll"),this.toggleSegments=document.getElementById("toggleSegments"),this.toggleTwm=document.getElementById("toggleTwm"),this.toggleBmRes=document.getElementById("toggleBmRes"),this.currentCard=document.getElementById("currentCard"),this.parsedCard=document.getElementById("parsedCard"),this.flatnessCard=document.getElementById("flatnessCard"),this.profileCard=document.getElementById("profileCard"),this.setpointsCard=document.getElementById("setpointsCard"),this.rollCard=document.getElementById("rollCard"),this.segmentsCard=document.getElementById("segmentsCard"),this.twmCard=document.getElementById("twmCard"),this.bmResCard=document.getElementById("bmResCard"),this.deferred?([this.currentCard,this.parsedCard,this.flatnessCard,this.profileCard,this.setpointsCard,this.rollCard,this.segmentsCard,this.twmCard,this.bmResCard].forEach(t=>{t&&(t.style.display="none")}),[this.toggleCurrent,this.toggleAll,this.toggleMeasurements,this.toggleProfile,this.toggleSetpoints,this.toggleRoll,this.toggleSegments,this.toggleTwm,this.toggleBmRes].forEach(t=>t.classList.remove("active"))):this.restoreSavedStates(),this.setupToggleHandlers()}restoreSavedStates(){[{btn:this.toggleCurrent,card:this.currentCard,key:ie.TOGGLE_CURRENT,defaultActive:!0},{btn:this.toggleAll,card:this.parsedCard,key:ie.TOGGLE_ALL,defaultActive:!1},{btn:this.toggleMeasurements,card:this.flatnessCard,key:ie.TOGGLE_MEASUREMENTS,defaultActive:!1},{btn:this.toggleProfile,card:this.profileCard,key:ie.TOGGLE_PROFILE,defaultActive:!1},{btn:this.toggleSetpoints,card:this.setpointsCard,key:ie.TOGGLE_SETPOINTS,defaultActive:!1},{btn:this.toggleRoll,card:this.rollCard,key:ie.TOGGLE_ROLL,defaultActive:!1},{btn:this.toggleSegments,card:this.segmentsCard,key:ie.TOGGLE_SEGMENTS,defaultActive:!1},{btn:this.toggleTwm,card:this.twmCard,key:ie.TOGGLE_TWM,defaultActive:!1},{btn:this.toggleBmRes,card:this.bmResCard,key:ie.TOGGLE_BMRES,defaultActive:!1}].forEach(({btn:t,card:i,key:s,defaultActive:r})=>{ue.getBoolean(s,r)?(t.classList.add("active"),i.style.display="block"):(t.classList.remove("active"),i.style.display="none")})}setupToggleHandlers(){const e=[{btn:this.toggleCurrent,key:ie.TOGGLE_CURRENT,card:this.currentCard},{btn:this.toggleAll,key:ie.TOGGLE_ALL,card:this.parsedCard},{btn:this.toggleMeasurements,key:ie.TOGGLE_MEASUREMENTS,card:this.flatnessCard},{btn:this.toggleProfile,key:ie.TOGGLE_PROFILE,card:this.profileCard},{btn:this.toggleSetpoints,key:ie.TOGGLE_SETPOINTS,card:this.setpointsCard},{btn:this.toggleRoll,key:ie.TOGGLE_ROLL,card:this.rollCard},{btn:this.toggleSegments,key:ie.TOGGLE_SEGMENTS,card:this.segmentsCard},{btn:this.toggleTwm,key:ie.TOGGLE_TWM,card:this.twmCard},{btn:this.toggleBmRes,key:ie.TOGGLE_BMRES,card:this.bmResCard}];e.forEach(({btn:t,key:i,card:s})=>{t.addEventListener("click",()=>{const r=t.dataset.target;if(!r)return;const a=document.getElementById(r);if(!a)return;const o=t.classList.contains("active");if(e.forEach(({btn:l,key:c,card:h})=>{l!==t&&(l.classList.remove("active"),h.style.display="none",h.style.visibility="visible",ue.setBoolean(c,!1))}),!o){if(t.classList.add("active"),r==="flatnessCard"||r==="profileCard"||r==="twmCard"||r==="bmResCard"?(a.style.display="block",a.style.visibility="hidden",requestAnimationFrame(()=>{a.style.visibility="visible"})):a.style.display="block",ue.setBoolean(i,!0),r==="flatnessCard"){const l=new CustomEvent("flatnessVisible");document.dispatchEvent(l)}else if(r==="profileCard"){const l=new CustomEvent("profileVisible");document.dispatchEvent(l)}else if(r==="rollCard"){const l=new CustomEvent("rollVisible");document.dispatchEvent(l)}else if(r==="segmentsCard"){console.log("ViewToggles: Dispatching segmentsVisible event");const l=new CustomEvent("segmentsVisible");document.dispatchEvent(l)}else if(r==="twmCard"){const l=new CustomEvent("twmVisible");document.dispatchEvent(l)}else if(r==="bmResCard"){const l=new CustomEvent("bmResVisible");document.dispatchEvent(l)}}})}),document.addEventListener("flatnessVisible",(()=>{})),document.addEventListener("profileVisible",(()=>{}))}applySavedStates(){this.restoreSavedStates()}}function zs(n){return typeof n=="number"&&Number.isFinite(n)}function Hh(n){if(n==null)return"N/A";if(typeof n=="string"){const e=n.toLowerCase();if(e==="yes"||e==="no")return n}return Number(n)===0?"no":"yes"}function Lt(n){if(n!=null){if(typeof n=="number")return Number.isFinite(n)?n:void 0;if(Array.isArray(n)){const e=n.find(t=>typeof t=="number"&&Number.isFinite(t));return typeof e=="number"?e:void 0}if(typeof n=="object"){if(typeof n.size=="number"&&Array.isArray(n.data)){const e=n.data.find(t=>typeof t=="number"&&Number.isFinite(t));return typeof e=="number"?e:void 0}if("value"in n&&typeof n.value=="number"){const e=n.value;return Number.isFinite(e)?e:void 0}}}}function Vh(n){return zs(n)?Math.round(n).toString():"N/A"}function oo(n,e,t=!1){return{text:n,tooltip:e,isPlaceholder:t}}function Wh(n,e={}){const{dashWhenMissing:t=!1,unit:i="auto",suffix:s}=e;if(n===1e99)return{display:"-----",raw:"1e99",isPlaceholder:!0};if(!zs(n))return{display:t?"-----":"N/A",raw:null,isPlaceholder:!0};const r=n.toString(),a=o=>{const l=Math.round(o*100)/100;return Number.isInteger(l)?l.toString():l.toFixed(2)};if(i==="mili"){const o=n/.001;return{display:`${a(o)}m`,raw:r,isPlaceholder:!1}}if(i==="mega"){const o=n/1e6;return{display:`${a(o)}M`,raw:r,isPlaceholder:!1}}if(i==="micro"){const o=n/1e-6;return{display:`${a(o)}µ`,raw:r,isPlaceholder:!1}}if(i==="suffix"){const o=s??"";return{display:`${a(n)}${o}`,raw:r,isPlaceholder:!1}}return{display:Xh(n),raw:r,isPlaceholder:!1}}function Xh(n){if(!Number.isFinite(n))return"N/A";if(n===0)return"0";const e=Math.abs(n);let t=n,i="";const s=[{factor:1e12,symbol:"T"},{factor:1e9,symbol:"G"},{factor:1e6,symbol:"M"},{factor:1e3,symbol:"k"}];for(const o of s){const l=e/o.factor;if(l>=.1&&l<1e3){t=n/o.factor,i=o.symbol;break}}if(i===""&&e>0&&e<.1){const o=[{factor:1e-12,symbol:"p"},{factor:1e-9,symbol:"n"},{factor:1e-6,symbol:"µ"},{factor:.001,symbol:"m"}];for(let l=o.length-1;l>=0;l--){const c=o[l],h=e/c.factor;if(h>=.1&&h<1e3){t=n/c.factor,i=c.symbol;break}}if(i===""){const l=o.find(c=>e/c.factor>=1e3);l&&(t=n/l.factor,i=l.symbol)}}const r=Math.round(t*100)/100;return`${Number.isInteger(r)?r.toString():r.toFixed(2)}${i}`}const $h=[{label:"pass",path:n=>`preCalc.passes[${n}].passIndex`,accessor:(n,e)=>n?.passIndex??e,format:"integer"},{label:"sequence",path:n=>`preCalc.passes[${n}].sequenceNumber`,accessor:n=>n?.sequenceNumber,format:"integer"},{label:"active",path:n=>`preCalc.passes[${n}].isValid`,accessor:n=>n?.isValid,format:"integer"},{label:"standInd",path:n=>`preCalc.passes[${n}].standIndex`,accessor:n=>n?.standIndex,format:"integer"},{label:"x4Fit",path:n=>`preCalc.passes[${n}].profile.x4Fit`,format:"placeholder"},{label:"h0",path:n=>`preCalc.passes[${n}].profile.entryThickness`,accessor:n=>n?.profile?.entryThickness,options:{unit:"mili"}},{label:"h1",path:n=>`preCalc.passes[${n}].profile.exitThickness`,accessor:n=>n?.profile?.exitThickness,options:{unit:"mili"}},{label:"w1",path:n=>`preCalc.passes[${n}].profile.width`,accessor:n=>n?.profile?.width},{label:"FrMin",path:n=>`preCalc.passes[${n}].currentLimits.lowerLimitForce`,accessor:n=>n?.currentLimits?.lowerLimitForce,options:{unit:"mega"}},{label:"FrMax",path:n=>`preCalc.passes[${n}].currentLimits.upperLimitForce`,accessor:n=>n?.currentLimits?.upperLimitForce,options:{unit:"mega"}},{label:"Fr",path:n=>`preCalc.passes[${n}].profile.rollForce`,accessor:n=>n?.profile?.rollForce,options:{unit:"mega"}},{label:"FrDesired",path:n=>`preCalc.passes[${n}].profile.desiredRollForce`,accessor:n=>n?.profile?.desiredRollForce,options:{unit:"mega"}},{label:"Fb[0]",path:n=>`preCalc.passes[${n}].profile.bendingForces`,accessor:n=>Lt(n?.profile?.bendingForces),options:{unit:"mega"}},{label:"FbManInt",path:n=>`preCalc.passes[${n}].operatorInputs.manualValuesBending`,accessor:n=>Lt(n?.operatorInputs?.manualValuesBending),options:{unit:"mega",dashWhenMissing:!0}},{label:"sr[0]",path:n=>`preCalc.passes[${n}].profile.shiftPositions`,accessor:n=>Lt(n?.profile?.shiftPositions),options:{unit:"mili"}},{label:"srManInt[0]",path:n=>`preCalc.passes[${n}].operatorInputs.manualValuesShift`,accessor:n=>Lt(n?.operatorInputs?.manualValuesShift),options:{unit:"mili",dashWhenMissing:!0}},{label:"pc",path:n=>`preCalc.passes[${n}].profile.pairCrossAngle`,accessor:n=>n?.profile?.pairCrossAngle},{label:"pr",path:n=>`preCalc.passes[${n}].profile.profile`,accessor:n=>n?.profile?.profile,options:{unit:"micro"}},{label:"prEn",path:n=>`preCalc.passes[${n}].profile.profileEntry`,format:"placeholder",options:{unit:"micro"}},{label:"cr",path:n=>`preCalc.passes[${n}].profile.crown`,format:"placeholder"},{label:"crEn",path:n=>`preCalc.passes[${n}].profile.crownEntry`,format:"placeholder"},{label:"fl",path:n=>`preCalc.passes[${n}].profile.observedUnflatness`,accessor:n=>n?.profile?.observedUnflatness},{label:"flEn",path:n=>`preCalc.passes[${n}].profile.flatnessEntry`,format:"placeholder"},{label:"obsUnfl",path:n=>`preCalc.passes[${n}].operatorInputs.observedUnflatness`,accessor:n=>n?.operatorInputs?.observedUnflatness,options:{dashWhenMissing:!0}},{label:"FbOp[0]",path:n=>`preCalc.passes[${n}].operatorInputs.manualValuesBendingOp`,format:"placeholder"},{label:"Fbal[0]",path:n=>`preCalc.passes[${n}].profile.bmRes.Rdsb`,accessor:n=>n?.profile?.bmRes?.Rdsb,options:{unit:"mega"}},{label:"Fbl[0]Init",path:n=>`preCalc.passes[${n}].initialLimits.lowerLimitsBending`,accessor:n=>Lt(n?.initialLimits?.lowerLimitsBending),options:{unit:"mega"}},{label:"Fbu[0]Init",path:n=>`preCalc.passes[${n}].initialLimits.upperLimitsBending`,accessor:n=>Lt(n?.initialLimits?.upperLimitsBending),options:{unit:"mega"}},{label:"Fbl[0]Curr",path:n=>`preCalc.passes[${n}].currentLimits.lowerLimitsBending`,accessor:n=>Lt(n?.currentLimits?.lowerLimitsBending),options:{unit:"mega"}},{label:"Fbu[0]Curr",path:n=>`preCalc.passes[${n}].currentLimits.upperLimitsBending`,accessor:n=>Lt(n?.currentLimits?.upperLimitsBending),options:{unit:"mega"}},{label:"Fbl[0]Mech",path:n=>`preCalc.passes[${n}].profile.bmRes.bendingLowerMechanical`,format:"placeholder"},{label:"Fbu[0]Mech",path:n=>`preCalc.passes[${n}].profile.bmRes.bendingUpperMechanical`,format:"placeholder"},{label:"srOp[0]",path:n=>`preCalc.passes[${n}].operatorInputs.manualValuesShiftOp`,format:"placeholder"},{label:"srl[0]Init",path:n=>`preCalc.passes[${n}].initialLimits.lowerLimitsShift`,accessor:n=>Lt(n?.initialLimits?.lowerLimitsShift),options:{unit:"mili"}},{label:"sru[0]Init",path:n=>`preCalc.passes[${n}].initialLimits.upperLimitsShift`,accessor:n=>Lt(n?.initialLimits?.upperLimitsShift),options:{unit:"mili"}},{label:"srl[0]Curr",path:n=>`preCalc.passes[${n}].currentLimits.lowerLimitsShift`,accessor:n=>Lt(n?.currentLimits?.lowerLimitsShift),options:{unit:"mili"}},{label:"sru[0]Curr",path:n=>`preCalc.passes[${n}].currentLimits.upperLimitsShift`,accessor:n=>Lt(n?.currentLimits?.upperLimitsShift),options:{unit:"mili"}},{label:"srl[0]Mech",path:n=>`preCalc.passes[${n}].profile.mechanicalShiftLower`,format:"placeholder",options:{unit:"mili"}},{label:"sru[0]Mech",path:n=>`preCalc.passes[${n}].profile.mechanicalShiftUpper`,format:"placeholder",options:{unit:"mili"}},{label:"pcOp[0]",path:n=>`preCalc.passes[${n}].operatorInputs.manualValuePairCross`,accessor:n=>n?.operatorInputs?.manualValuePairCross,options:{dashWhenMissing:!0}},{label:"pcl[0]Init",path:n=>`preCalc.passes[${n}].initialLimits.lowerLimitPairCross`,accessor:n=>n?.initialLimits?.lowerLimitPairCross},{label:"pcu[0]Init",path:n=>`preCalc.passes[${n}].initialLimits.upperLimitPairCross`,accessor:n=>n?.initialLimits?.upperLimitPairCross},{label:"pclCurr",path:n=>`preCalc.passes[${n}].currentLimits.lowerLimitPairCross`,accessor:n=>n?.currentLimits?.lowerLimitPairCross},{label:"pcuCurr",path:n=>`preCalc.passes[${n}].currentLimits.upperLimitPairCross`,accessor:n=>n?.currentLimits?.upperLimitPairCross},{label:"pclMech",path:n=>`preCalc.passes[${n}].profile.pairCrossLowerMechanical`,format:"placeholder"},{label:"pcuMech",path:n=>`preCalc.passes[${n}].profile.pairCrossUpperMechanical`,format:"placeholder"},{label:"dFbdFr",path:n=>`preCalc.passes[${n}].profile.bmRes.dFb_dFr`,accessor:n=>Lt(n?.profile?.bmRes?.dFb_dFr)},{label:"dmpDFbdFr",path:n=>`preCalc.passes[${n}].profile.dampDFbdFr`,accessor:n=>n?.profile?.dampDFbdFr},{label:"dFbdsr",path:n=>`preCalc.passes[${n}].profile.bmRes.dFb_dsr`,accessor:n=>n?.profile?.bmRes?.dFb_dsr},{label:"dFbdcr",path:n=>`preCalc.passes[${n}].profile.bmRes.dFb_dcr`,accessor:n=>n?.profile?.bmRes?.dFb_dcr},{label:"tCrCxx[0]",path:n=>`preCalc.passes[${n}].profile.thermalCrownCxx`,format:"placeholder"},{label:"wCrCxx[0]",path:n=>`preCalc.passes[${n}].profile.workCrownCxx`,format:"placeholder"},{label:"tCrCxx[1]",path:n=>`preCalc.passes[${n}].profile.thermalCrownCxx[1]`,format:"placeholder"},{label:"wCrCxx[1]",path:n=>`preCalc.passes[${n}].profile.workCrownCxx[1]`,format:"placeholder"},{label:"tCrCL[0]",path:n=>`preCalc.passes[${n}].profile.thermalCrownCL`,format:"placeholder"},{label:"wCrCL[0]",path:n=>`preCalc.passes[${n}].profile.workCrownCL`,format:"placeholder"},{label:"tCrCL[1]",path:n=>`preCalc.passes[${n}].profile.thermalCrownCL[1]`,format:"placeholder"},{label:"wCrCL[1]",path:n=>`preCalc.passes[${n}].profile.workCrownCL[1]`,format:"placeholder"}];class qh{constructor(){this.currentPlate=null,this.output=document.getElementById("setpointsOutput"),document.addEventListener("plateSelected",(e=>{this.currentPlate=e.detail.plate,this.render(e.detail.plate)}))}reset(){this.currentPlate=null,this.output&&(this.output.textContent="Load a plate to view pre-calculation setpoints.")}render(e){if(!this.output)return;if(this.output.replaceChildren(),!e||!e.preCalc){this.output.textContent="Load a plate to view pre-calculation setpoints.";return}const t=document.createDocumentFragment(),{header:i,preCalc:s}=e,r=Array.isArray(s.passes)?s.passes:[],a=e.inheritance??null;this.addCompactHeader(t,i,s,r,a),this.addTargetsSection(t,s),this.addLTISection(t,s);const o=this.buildPassGrid(r);o&&t.appendChild(o),this.output.appendChild(t)}addCompactHeader(e,t,i,s,r){const a=document.createElement("div");a.className="setpoints-island-row";const o=document.createElement("div");o.className="setpoints-island-title",o.textContent="Info:",a.appendChild(o);const l=document.createElement("div");l.className="setpoints-islands-container";const c=document.createElement("div");c.className="setpoints-variable-island";const h=document.createElement("span");h.className="setpoints-variable-label",h.textContent="Status:",c.appendChild(h);const d=document.createElement("span");d.className="setpoints-variable-value";const u=this.yesNoSegment(t?.isInTracking,"plate.header.isInTracking");d.textContent=u.text,this.applySegmentMeta(d,u),c.appendChild(d),l.appendChild(c);const p=document.createElement("div");p.className="setpoints-variable-island";const g=document.createElement("span");g.className="setpoints-variable-label",g.textContent="ID:",p.appendChild(g);const x=document.createElement("span");x.className="setpoints-variable-value";const m=this.textSegment(i.plateId??"N/A","preCalc.plateId",i.plateId==null,i.plateId);x.textContent=m.text,this.applySegmentMeta(x,m),p.appendChild(x),l.appendChild(p);const f=document.createElement("div");f.className="setpoints-variable-island";const E=document.createElement("span");E.className="setpoints-variable-label",E.textContent="Alloy:",f.appendChild(E);const S=document.createElement("span");S.className="setpoints-variable-value";const v=this.textSegment(i.alloyCode??"N/A","preCalc.alloyCode",i.alloyCode==null,i.alloyCode);S.textContent=v.text,this.applySegmentMeta(S,v),f.appendChild(S),l.appendChild(f);const L=document.createElement("div");L.className="setpoints-variable-island";const w=document.createElement("span");w.className="setpoints-variable-label",w.textContent="Passes:",L.appendChild(w);const A=document.createElement("span");A.className="setpoints-variable-value";const N=s.length,y=this.integerSegment(N,"preCalc.passes.length");A.textContent=y.text,this.applySegmentMeta(A,y),L.appendChild(A),l.appendChild(L);const _=s.map(T=>T?.sequenceNumber).filter(T=>Number.isFinite(T)),P=_.length>0?Math.max(..._):void 0;if(P!==void 0){const T=document.createElement("div");T.className="setpoints-variable-island";const R=document.createElement("span");R.className="setpoints-variable-label",R.textContent="Seq:",T.appendChild(R);const I=document.createElement("span");I.className="setpoints-variable-value";const V=this.integerSegment(P,"preCalc.passes[*].sequenceNumber (max)");I.textContent=V.text,this.applySegmentMeta(I,V),T.appendChild(I),l.appendChild(T)}if(r){const T=document.createElement("div");T.className="setpoints-variable-island";const R=document.createElement("span");R.className="setpoints-variable-label",R.textContent="Inherit:",T.appendChild(R);const I=document.createElement("span");I.className="setpoints-variable-value";const V=this.textSegment(r.type??"N/A","inheritance.type",r.type==null,r.type),H=this.valueSegment(r.isValid,"inheritance.isValid");I.textContent=`${V.text} (${H.text})`,this.applySegmentMeta(I,H),T.appendChild(I),l.appendChild(T)}a.appendChild(l),e.appendChild(a)}addTargetsSection(e,t){const i=t.targets??{},s=t.operatorInputs??{},r=Array.isArray(i.m_alternativeProfile)?i.m_alternativeProfile:void 0,a=r&&zs(r[0])?r[0]:void 0,o=r&&r.length>1?r[1]:void 0,l=[{label:"prTarget",value:this.valueSegment(i.m_profile,"preCalc.targets.m_profile",{unit:"micro"})},{label:"prOffsetOp",value:this.valueSegment(s.m_profileCorrection,"preCalc.operatorInputs.m_profileCorrection",{unit:"micro"})},{label:"fLTarget",value:this.valueSegment(i.m_flatness,"preCalc.targets.m_flatness")},{label:"altTarget",value:this.valueSegment(a,"preCalc.targets.m_alternativeProfile[0]",{unit:"micro"})},{label:"altAllowed",value:this.yesNoSegment(o,"preCalc.targets.m_alternativeProfile[1]")},{label:"edgeDistance",value:this.valueSegment(i.m_edgeDistance,"preCalc.targets.m_edgeDistance")},{label:"edgeExclusion",value:this.valueSegment(i.m_edgeExclusion,"preCalc.targets.m_edgeExclusion")},{label:"hTarget",value:this.valueSegment(i.m_thickness,"preCalc.targets.m_thickness",{unit:"mili"})},{label:"wTarget",value:this.valueSegment(i.m_width,"preCalc.targets.m_width")}];this.appendIslandRow(e,"Targets",l)}addLTISection(e,t){const i=t.lti??{},s=[{label:"prOffset",value:this.valueSegment(i.targetPrOffset,"preCalc.lti.targetPrOffset",{unit:"micro"})},{label:"crKink",value:this.valueSegment(i.targetCrKink,"preCalc.lti.targetCrKink")},{label:"offsetInternal",value:this.valueSegment(t.offset4InternalTarget,"preCalc.offset4InternalTarget",{unit:"micro"})}];this.appendIslandRow(e,"LTI",s)}appendIslandRow(e,t,i){const s=document.createElement("div");s.className="setpoints-island-row";const r=document.createElement("div");r.className="setpoints-island-title",r.textContent=t+":",s.appendChild(r);const a=document.createElement("div");a.className="setpoints-islands-container",i.forEach(o=>{const l=document.createElement("div");l.className="setpoints-variable-island";const c=document.createElement("span");c.className="setpoints-variable-label",c.textContent=o.label+":",l.appendChild(c);const h=document.createElement("span");h.className="setpoints-variable-value",h.textContent=o.value.text,this.applySegmentMeta(h,o.value),l.appendChild(h),a.appendChild(l)}),s.appendChild(a),e.appendChild(s)}buildPassGrid(e){if(!Array.isArray(e)||e.length===0)return null;const t=document.createElement("div");t.className="setpoints-grid";const i=["minmax(max-content, max-content)"];for(let s=0;s<e.length;s+=1)i.push("max-content");return t.style.gridTemplateColumns=i.join(" "),$h.forEach(s=>{const r=document.createElement("span");r.className="setpoints-grid-label",r.textContent=s.label,t.appendChild(r),e.forEach((a,o)=>{const l=this.segmentForField(s,a,o);t.appendChild(this.createGridCell(l))})}),t}createSegmentNode(e){if(typeof e=="string")return document.createTextNode(e);const t=document.createElement("span");return t.textContent=e.text,this.applySegmentMeta(t,e),t}createGridCell(e){const t=document.createElement("span");return t.className="setpoints-grid-cell",t.textContent=e.text,this.applySegmentMeta(t,e),t}applySegmentMeta(e,t){t.tooltip&&(e.dataset.tooltip=t.tooltip,e.classList.add("setpoints-tooltip")),t.isPlaceholder?e.classList.add("setpoints-placeholder"):e.classList.add("setpoints-value")}valueSegment(e,t,i={}){const s=Wh(e,i),r=[];s.raw!==null&&r.push(`value: ${s.raw}`),t&&r.push(`source: ${t}`);const a=r.length>0?r.join(`
`):void 0;return oo(s.display,a,s.isPlaceholder)}textSegment(e,t,i=!1,s){const r=[];s!=null&&s!==""&&r.push(`value: ${s}`),t&&r.push(`source: ${t}`);const a=r.length>0?r.join(`
`):void 0;return oo(e,a,i||e==="N/A"||e==="-----")}yesNoSegment(e,t){const i=this.valueSegment(e,t),s=Hh(e);return i.text=s,s==="N/A"&&(i.isPlaceholder=!0),i}placeholderSegment(e){return this.textSegment("N/A",e,!0)}integerSegment(e,t){if(e===1e99)return this.textSegment("-----",t,!0,"1e99");if(!zs(e))return this.textSegment("N/A",t,!0);const i=Vh(e);return this.textSegment(i,t,i==="N/A",e)}segmentForField(e,t,i){const s=e.format??"value",r=e.path(i),a=e.accessor?e.accessor(t,i):void 0;switch(s){case"placeholder":return this.placeholderSegment(r);case"integer":return this.integerSegment(a,r);case"yesno":return this.yesNoSegment(a,r);default:return this.valueSegment(a,r,e.options)}}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Aa="170",vi={ROTATE:0,DOLLY:1,PAN:2},_i={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Yh=0,lo=1,jh=2,Bl=1,Zh=2,un=3,Dn=0,At=1,fn=2,Ln=0,yi=1,co=2,ho=3,uo=4,Kh=5,Vn=100,Jh=101,Qh=102,ed=103,td=104,nd=200,id=201,sd=202,rd=203,Ur=204,Br=205,ad=206,od=207,ld=208,cd=209,hd=210,dd=211,ud=212,fd=213,pd=214,kr=0,zr=1,Gr=2,Ci=3,Hr=4,Vr=5,Wr=6,Xr=7,kl=0,md=1,gd=2,Nn=0,xd=1,_d=2,Sd=3,vd=4,yd=5,bd=6,Ed=7,zl=300,wi=301,Ti=302,$r=303,qr=304,$s=306,Yr=1e3,$n=1001,jr=1002,Zt=1003,Md=1004,rs=1005,en=1006,Qs=1007,qn=1008,xn=1009,Gl=1010,Hl=1011,Zi=1012,Pa=1013,Yn=1014,pn=1015,Ki=1016,Ra=1017,La=1018,Ai=1020,Vl=35902,Wl=1021,Xl=1022,jt=1023,$l=1024,ql=1025,bi=1026,Pi=1027,Yl=1028,Na=1029,jl=1030,Da=1031,Ia=1033,Ls=33776,Ns=33777,Ds=33778,Is=33779,Zr=35840,Kr=35841,Jr=35842,Qr=35843,ea=36196,ta=37492,na=37496,ia=37808,sa=37809,ra=37810,aa=37811,oa=37812,la=37813,ca=37814,ha=37815,da=37816,ua=37817,fa=37818,pa=37819,ma=37820,ga=37821,Fs=36492,xa=36494,_a=36495,Zl=36283,Sa=36284,va=36285,ya=36286,Cd=3200,wd=3201,Kl=0,Td=1,An="",zt="srgb",Li="srgb-linear",qs="linear",Qe="srgb",ei=7680,fo=519,Ad=512,Pd=513,Rd=514,Jl=515,Ld=516,Nd=517,Dd=518,Id=519,po=35044,mo="300 es",mn=2e3,Gs=2001;class Jn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const St=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Os=Math.PI/180,ba=180/Math.PI;function Ji(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(St[n&255]+St[n>>8&255]+St[n>>16&255]+St[n>>24&255]+"-"+St[e&255]+St[e>>8&255]+"-"+St[e>>16&15|64]+St[e>>24&255]+"-"+St[t&63|128]+St[t>>8&255]+"-"+St[t>>16&255]+St[t>>24&255]+St[i&255]+St[i>>8&255]+St[i>>16&255]+St[i>>24&255]).toLowerCase()}function bt(n,e,t){return Math.max(e,Math.min(t,n))}function Fd(n,e){return(n%e+e)%e}function er(n,e,t){return(1-t)*n+t*e}function Ui(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ct(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Od={DEG2RAD:Os};class De{constructor(e=0,t=0){De.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,t,i,s,r,a,o,l,c){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],p=i[5],g=i[8],x=s[0],m=s[3],f=s[6],E=s[1],S=s[4],v=s[7],L=s[2],w=s[5],A=s[8];return r[0]=a*x+o*E+l*L,r[3]=a*m+o*S+l*w,r[6]=a*f+o*v+l*A,r[1]=c*x+h*E+d*L,r[4]=c*m+h*S+d*w,r[7]=c*f+h*v+d*A,r[2]=u*x+p*E+g*L,r[5]=u*m+p*S+g*w,r[8]=u*f+p*v+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,p=c*r-a*l,g=t*d+i*u+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=d*x,e[1]=(s*c-h*i)*x,e[2]=(o*i-s*a)*x,e[3]=u*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=p*x,e[7]=(i*l-c*t)*x,e[8]=(a*t-i*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(tr.makeScale(e,t)),this}rotate(e){return this.premultiply(tr.makeRotation(-e)),this}translate(e,t){return this.premultiply(tr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const tr=new Be;function Ql(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Hs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ud(){const n=Hs("canvas");return n.style.display="block",n}const go={};function $i(n){n in go||(go[n]=!0,console.warn(n))}function Bd(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function kd(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function zd(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const qe={enabled:!0,workingColorSpace:Li,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Qe&&(n.r=gn(n.r),n.g=gn(n.g),n.b=gn(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Qe&&(n.r=Ei(n.r),n.g=Ei(n.g),n.b=Ei(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===An?qs:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function gn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ei(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const xo=[.64,.33,.3,.6,.15,.06],_o=[.2126,.7152,.0722],So=[.3127,.329],vo=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yo=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);qe.define({[Li]:{primaries:xo,whitePoint:So,transfer:qs,toXYZ:vo,fromXYZ:yo,luminanceCoefficients:_o,workingColorSpaceConfig:{unpackColorSpace:zt},outputColorSpaceConfig:{drawingBufferColorSpace:zt}},[zt]:{primaries:xo,whitePoint:So,transfer:Qe,toXYZ:vo,fromXYZ:yo,luminanceCoefficients:_o,outputColorSpaceConfig:{drawingBufferColorSpace:zt}}});let ti;class Gd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ti===void 0&&(ti=Hs("canvas")),ti.width=e.width,ti.height=e.height;const i=ti.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ti}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Hs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=gn(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(gn(t[i]/255)*255):t[i]=gn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Hd=0;class ec{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=Ji(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(nr(s[a].image)):r.push(nr(s[a]))}else r=nr(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function nr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Gd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Vd=0;class Pt extends Jn{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,i=$n,s=$n,r=en,a=qn,o=jt,l=xn,c=Pt.DEFAULT_ANISOTROPY,h=An){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=Ji(),this.name="",this.source=new ec(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yr:e.x=e.x-Math.floor(e.x);break;case $n:e.x=e.x<0?0:1;break;case jr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yr:e.y=e.y-Math.floor(e.y);break;case $n:e.y=e.y<0?0:1;break;case jr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=zl;Pt.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,i=0,s=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],g=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,v=(p+1)/2,L=(f+1)/2,w=(h+u)/4,A=(d+x)/4,N=(g+m)/4;return S>v&&S>L?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=w/i,r=A/i):v>L?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=w/s,r=N/s):L<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),i=A/r,s=N/r),this.set(i,s,r,t),this}let E=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(d-x)/E,this.z=(u-h)/E,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wd extends Jn{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Pt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ec(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jn extends Wd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class tc extends Pt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Xd extends Pt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zn{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3];const u=r[a+0],p=r[a+1],g=r[a+2],x=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(d!==x||l!==u||c!==p||h!==g){let m=1-o;const f=l*u+c*p+h*g+d*x,E=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){const L=Math.sqrt(S),w=Math.atan2(L,f*E);m=Math.sin(m*w)/L,o=Math.sin(o*w)/L}const v=o*E;if(l=l*m+u*v,c=c*m+p*v,h=h*m+g*v,d=d*m+x*v,m===1-o){const L=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=L,c*=L,h*=L,d*=L}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[a],u=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+h*d+l*p-c*u,e[t+1]=l*g+h*u+c*d-o*p,e[t+2]=c*g+h*p+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),d=o(r/2),u=l(i/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"YZX":this._x=u*h*d+c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d-u*p*g;break;case"XZY":this._x=u*h*d-c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+o+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=a*d+this._w*u,this._x=i*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),d=2*(r*i-a*t);return this.x=t+l*c+a*d-o*h,this.y=i+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ir.copy(this).projectOnVector(e),this.sub(ir)}reflect(e){return this.sub(ir.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ir=new B,bo=new Zn;class Kn{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Xt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Xt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Xt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Xt):Xt.fromBufferAttribute(r,a),Xt.applyMatrix4(e.matrixWorld),this.expandByPoint(Xt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),as.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),as.copy(i.boundingBox)),as.applyMatrix4(e.matrixWorld),this.union(as)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xt),Xt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bi),os.subVectors(this.max,Bi),ni.subVectors(e.a,Bi),ii.subVectors(e.b,Bi),si.subVectors(e.c,Bi),yn.subVectors(ii,ni),bn.subVectors(si,ii),On.subVectors(ni,si);let t=[0,-yn.z,yn.y,0,-bn.z,bn.y,0,-On.z,On.y,yn.z,0,-yn.x,bn.z,0,-bn.x,On.z,0,-On.x,-yn.y,yn.x,0,-bn.y,bn.x,0,-On.y,On.x,0];return!sr(t,ni,ii,si,os)||(t=[1,0,0,0,1,0,0,0,1],!sr(t,ni,ii,si,os))?!1:(ls.crossVectors(yn,bn),t=[ls.x,ls.y,ls.z],sr(t,ni,ii,si,os))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(on[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),on[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),on[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),on[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),on[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),on[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),on[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),on[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(on),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const on=[new B,new B,new B,new B,new B,new B,new B,new B],Xt=new B,as=new Kn,ni=new B,ii=new B,si=new B,yn=new B,bn=new B,On=new B,Bi=new B,os=new B,ls=new B,Un=new B;function sr(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Un.fromArray(n,r);const o=s.x*Math.abs(Un.x)+s.y*Math.abs(Un.y)+s.z*Math.abs(Un.z),l=e.dot(Un),c=t.dot(Un),h=i.dot(Un);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const $d=new Kn,ki=new B,rr=new B;class Ys{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):$d.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ki.subVectors(e,this.center);const t=ki.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ki,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ki.copy(e.center).add(rr)),this.expandByPoint(ki.copy(e.center).sub(rr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ln=new B,ar=new B,cs=new B,En=new B,or=new B,hs=new B,lr=new B;class Fa{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ln)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ln.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ln.copy(this.origin).addScaledVector(this.direction,t),ln.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ar.copy(e).add(t).multiplyScalar(.5),cs.copy(t).sub(e).normalize(),En.copy(this.origin).sub(ar);const r=e.distanceTo(t)*.5,a=-this.direction.dot(cs),o=En.dot(this.direction),l=-En.dot(cs),c=En.lengthSq(),h=Math.abs(1-a*a);let d,u,p,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){const x=1/h;d*=x,u*=x,p=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ar).addScaledVector(cs,u),p}intersectSphere(e,t){ln.subVectors(e.center,this.origin);const i=ln.dot(this.direction),s=ln.dot(ln)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ln)!==null}intersectTriangle(e,t,i,s,r){or.subVectors(t,e),hs.subVectors(i,e),lr.crossVectors(or,hs);let a=this.direction.dot(lr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;En.subVectors(this.origin,e);const l=o*this.direction.dot(hs.crossVectors(En,hs));if(l<0)return null;const c=o*this.direction.dot(or.cross(En));if(c<0||l+c>a)return null;const h=-o*En.dot(lr);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,t,i,s,r,a,o,l,c,h,d,u,p,g,x,m){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,d,u,p,g,x,m)}set(e,t,i,s,r,a,o,l,c,h,d,u,p,g,x,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/ri.setFromMatrixColumn(e,0).length(),r=1/ri.setFromMatrixColumn(e,1).length(),a=1/ri.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=a*h,p=a*d,g=o*h,x=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=u-x*c,t[9]=-o*l,t[2]=x-u*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,p=l*d,g=c*h,x=c*d;t[0]=u+x*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=x+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,p=l*d,g=c*h,x=c*d;t[0]=u-x*o,t[4]=-a*d,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=x-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,p=a*d,g=o*h,x=o*d;t[0]=l*h,t[4]=g*c-p,t[8]=u*c+x,t[1]=l*d,t[5]=x*c+u,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,p=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=x-u*d,t[8]=g*d+p,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*d+g,t[10]=u-x*d}else if(e.order==="XZY"){const u=a*l,p=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+x,t[5]=a*h,t[9]=p*d-g,t[2]=g*d-p,t[6]=o*h,t[10]=x*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qd,e,Yd)}lookAt(e,t,i){const s=this.elements;return Nt.subVectors(e,t),Nt.lengthSq()===0&&(Nt.z=1),Nt.normalize(),Mn.crossVectors(i,Nt),Mn.lengthSq()===0&&(Math.abs(i.z)===1?Nt.x+=1e-4:Nt.z+=1e-4,Nt.normalize(),Mn.crossVectors(i,Nt)),Mn.normalize(),ds.crossVectors(Nt,Mn),s[0]=Mn.x,s[4]=ds.x,s[8]=Nt.x,s[1]=Mn.y,s[5]=ds.y,s[9]=Nt.y,s[2]=Mn.z,s[6]=ds.z,s[10]=Nt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],p=i[13],g=i[2],x=i[6],m=i[10],f=i[14],E=i[3],S=i[7],v=i[11],L=i[15],w=s[0],A=s[4],N=s[8],y=s[12],_=s[1],P=s[5],T=s[9],R=s[13],I=s[2],V=s[6],H=s[10],J=s[14],W=s[3],se=s[7],fe=s[11],be=s[15];return r[0]=a*w+o*_+l*I+c*W,r[4]=a*A+o*P+l*V+c*se,r[8]=a*N+o*T+l*H+c*fe,r[12]=a*y+o*R+l*J+c*be,r[1]=h*w+d*_+u*I+p*W,r[5]=h*A+d*P+u*V+p*se,r[9]=h*N+d*T+u*H+p*fe,r[13]=h*y+d*R+u*J+p*be,r[2]=g*w+x*_+m*I+f*W,r[6]=g*A+x*P+m*V+f*se,r[10]=g*N+x*T+m*H+f*fe,r[14]=g*y+x*R+m*J+f*be,r[3]=E*w+S*_+v*I+L*W,r[7]=E*A+S*P+v*V+L*se,r[11]=E*N+S*T+v*H+L*fe,r[15]=E*y+S*R+v*J+L*be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],p=e[14],g=e[3],x=e[7],m=e[11],f=e[15];return g*(+r*l*d-s*c*d-r*o*u+i*c*u+s*o*p-i*l*p)+x*(+t*l*p-t*c*u+r*a*u-s*a*p+s*c*h-r*l*h)+m*(+t*c*d-t*o*p-r*a*d+i*a*p+r*o*h-i*c*h)+f*(-s*o*h-t*l*d+t*o*u+s*a*d-i*a*u+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],p=e[11],g=e[12],x=e[13],m=e[14],f=e[15],E=d*m*c-x*u*c+x*l*p-o*m*p-d*l*f+o*u*f,S=g*u*c-h*m*c-g*l*p+a*m*p+h*l*f-a*u*f,v=h*x*c-g*d*c+g*o*p-a*x*p-h*o*f+a*d*f,L=g*d*l-h*x*l-g*o*u+a*x*u+h*o*m-a*d*m,w=t*E+i*S+s*v+r*L;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=E*A,e[1]=(x*u*r-d*m*r-x*s*p+i*m*p+d*s*f-i*u*f)*A,e[2]=(o*m*r-x*l*r+x*s*c-i*m*c-o*s*f+i*l*f)*A,e[3]=(d*l*r-o*u*r-d*s*c+i*u*c+o*s*p-i*l*p)*A,e[4]=S*A,e[5]=(h*m*r-g*u*r+g*s*p-t*m*p-h*s*f+t*u*f)*A,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*f-t*l*f)*A,e[7]=(a*u*r-h*l*r+h*s*c-t*u*c-a*s*p+t*l*p)*A,e[8]=v*A,e[9]=(g*d*r-h*x*r-g*i*p+t*x*p+h*i*f-t*d*f)*A,e[10]=(a*x*r-g*o*r+g*i*c-t*x*c-a*i*f+t*o*f)*A,e[11]=(h*o*r-a*d*r-h*i*c+t*d*c+a*i*p-t*o*p)*A,e[12]=L*A,e[13]=(h*x*s-g*d*s+g*i*u-t*x*u-h*i*m+t*d*m)*A,e[14]=(g*o*s-a*x*s-g*i*l+t*x*l+a*i*m-t*o*m)*A,e[15]=(a*d*s-h*o*s+h*i*l-t*d*l-a*i*u+t*o*u)*A,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,p=r*h,g=r*d,x=a*h,m=a*d,f=o*d,E=l*c,S=l*h,v=l*d,L=i.x,w=i.y,A=i.z;return s[0]=(1-(x+f))*L,s[1]=(p+v)*L,s[2]=(g-S)*L,s[3]=0,s[4]=(p-v)*w,s[5]=(1-(u+f))*w,s[6]=(m+E)*w,s[7]=0,s[8]=(g+S)*A,s[9]=(m-E)*A,s[10]=(1-(u+x))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=ri.set(s[0],s[1],s[2]).length();const a=ri.set(s[4],s[5],s[6]).length(),o=ri.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],$t.copy(this);const c=1/r,h=1/a,d=1/o;return $t.elements[0]*=c,$t.elements[1]*=c,$t.elements[2]*=c,$t.elements[4]*=h,$t.elements[5]*=h,$t.elements[6]*=h,$t.elements[8]*=d,$t.elements[9]*=d,$t.elements[10]*=d,t.setFromRotationMatrix($t),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=mn){const l=this.elements,c=2*r/(t-e),h=2*r/(i-s),d=(t+e)/(t-e),u=(i+s)/(i-s);let p,g;if(o===mn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Gs)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=mn){const l=this.elements,c=1/(t-e),h=1/(i-s),d=1/(a-r),u=(t+e)*c,p=(i+s)*h;let g,x;if(o===mn)g=(a+r)*d,x=-2*d;else if(o===Gs)g=r*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ri=new B,$t=new ot,qd=new B(0,0,0),Yd=new B(1,1,1),Mn=new B,ds=new B,Nt=new B,Eo=new ot,Mo=new Zn;class nn{constructor(e=0,t=0,i=0,s=nn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(bt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-bt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Eo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Eo,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mo.setFromEuler(this),this.setFromQuaternion(Mo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}nn.DEFAULT_ORDER="XYZ";class nc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jd=0;const Co=new B,ai=new Zn,cn=new ot,us=new B,zi=new B,Zd=new B,Kd=new Zn,wo=new B(1,0,0),To=new B(0,1,0),Ao=new B(0,0,1),Po={type:"added"},Jd={type:"removed"},oi={type:"childadded",child:null},cr={type:"childremoved",child:null};class xt extends Jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=Ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xt.DEFAULT_UP.clone();const e=new B,t=new nn,i=new Zn,s=new B(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ot},normalMatrix:{value:new Be}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ai.setFromAxisAngle(e,t),this.quaternion.multiply(ai),this}rotateOnWorldAxis(e,t){return ai.setFromAxisAngle(e,t),this.quaternion.premultiply(ai),this}rotateX(e){return this.rotateOnAxis(wo,e)}rotateY(e){return this.rotateOnAxis(To,e)}rotateZ(e){return this.rotateOnAxis(Ao,e)}translateOnAxis(e,t){return Co.copy(e).applyQuaternion(this.quaternion),this.position.add(Co.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wo,e)}translateY(e){return this.translateOnAxis(To,e)}translateZ(e){return this.translateOnAxis(Ao,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(cn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?us.copy(e):us.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),zi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cn.lookAt(zi,us,this.up):cn.lookAt(us,zi,this.up),this.quaternion.setFromRotationMatrix(cn),s&&(cn.extractRotation(s.matrixWorld),ai.setFromRotationMatrix(cn),this.quaternion.premultiply(ai.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Po),oi.child=e,this.dispatchEvent(oi),oi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jd),cr.child=e,this.dispatchEvent(cr),cr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(cn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Po),oi.child=e,this.dispatchEvent(oi),oi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zi,e,Zd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zi,Kd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}xt.DEFAULT_UP=new B(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qt=new B,hn=new B,hr=new B,dn=new B,li=new B,ci=new B,Ro=new B,dr=new B,ur=new B,fr=new B,pr=new ht,mr=new ht,gr=new ht;class Yt{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),qt.subVectors(e,t),s.cross(qt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){qt.subVectors(s,t),hn.subVectors(i,t),hr.subVectors(e,t);const a=qt.dot(qt),o=qt.dot(hn),l=qt.dot(hr),c=hn.dot(hn),h=hn.dot(hr),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,p=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,dn)===null?!1:dn.x>=0&&dn.y>=0&&dn.x+dn.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,dn.x),l.addScaledVector(a,dn.y),l.addScaledVector(o,dn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return pr.setScalar(0),mr.setScalar(0),gr.setScalar(0),pr.fromBufferAttribute(e,t),mr.fromBufferAttribute(e,i),gr.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(pr,r.x),a.addScaledVector(mr,r.y),a.addScaledVector(gr,r.z),a}static isFrontFacing(e,t,i,s){return qt.subVectors(i,t),hn.subVectors(e,t),qt.cross(hn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qt.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),qt.cross(hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Yt.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Yt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;li.subVectors(s,i),ci.subVectors(r,i),dr.subVectors(e,i);const l=li.dot(dr),c=ci.dot(dr);if(l<=0&&c<=0)return t.copy(i);ur.subVectors(e,s);const h=li.dot(ur),d=ci.dot(ur);if(h>=0&&d<=h)return t.copy(s);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(li,a);fr.subVectors(e,r);const p=li.dot(fr),g=ci.dot(fr);if(g>=0&&p<=g)return t.copy(r);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(ci,o);const m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return Ro.subVectors(r,s),o=(d-h)/(d-h+(p-g)),t.copy(s).addScaledVector(Ro,o);const f=1/(m+x+u);return a=x*f,o=u*f,t.copy(i).addScaledVector(li,a).addScaledVector(ci,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ic={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cn={h:0,s:0,l:0},fs={h:0,s:0,l:0};function xr(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ye{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,qe.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=qe.workingColorSpace){if(e=Fd(e,1),t=bt(t,0,1),i=bt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=xr(a,r,e+1/3),this.g=xr(a,r,e),this.b=xr(a,r,e-1/3)}return qe.toWorkingColorSpace(this,s),this}setStyle(e,t=zt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){const i=ic[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gn(e.r),this.g=gn(e.g),this.b=gn(e.b),this}copyLinearToSRGB(e){return this.r=Ei(e.r),this.g=Ei(e.g),this.b=Ei(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return qe.fromWorkingColorSpace(vt.copy(this),e),Math.round(bt(vt.r*255,0,255))*65536+Math.round(bt(vt.g*255,0,255))*256+Math.round(bt(vt.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.fromWorkingColorSpace(vt.copy(this),t);const i=vt.r,s=vt.g,r=vt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=qe.workingColorSpace){return qe.fromWorkingColorSpace(vt.copy(this),t),e.r=vt.r,e.g=vt.g,e.b=vt.b,e}getStyle(e=zt){qe.fromWorkingColorSpace(vt.copy(this),e);const t=vt.r,i=vt.g,s=vt.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Cn),this.setHSL(Cn.h+e,Cn.s+t,Cn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Cn),e.getHSL(fs);const i=er(Cn.h,fs.h,t),s=er(Cn.s,fs.s,t),r=er(Cn.l,fs.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vt=new Ye;Ye.NAMES=ic;let Qd=0;class Ni extends Jn{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=Ji(),this.name="",this.blending=yi,this.side=Dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ur,this.blendDst=Br,this.blendEquation=Vn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Ci,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ei,this.stencilZFail=ei,this.stencilZPass=ei,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==yi&&(i.blending=this.blending),this.side!==Dn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ur&&(i.blendSrc=this.blendSrc),this.blendDst!==Br&&(i.blendDst=this.blendDst),this.blendEquation!==Vn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ci&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fo&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ei&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ei&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ei&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class sc extends Ni{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=kl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ut=new B,ps=new De;class tn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=po,this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ps.fromBufferAttribute(this,t),ps.applyMatrix3(e),this.setXY(t,ps.x,ps.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ui(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ct(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ui(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ui(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ui(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ui(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),s=Ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),s=Ct(s,this.array),r=Ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==po&&(e.usage=this.usage),e}}class rc extends tn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ac extends tn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Gt extends tn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let eu=0;const Bt=new ot,_r=new xt,hi=new B,Dt=new Kn,Gi=new Kn,gt=new B;class sn extends Jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eu++}),this.uuid=Ji(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ql(e)?ac:rc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Be().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bt.makeRotationFromQuaternion(e),this.applyMatrix4(Bt),this}rotateX(e){return Bt.makeRotationX(e),this.applyMatrix4(Bt),this}rotateY(e){return Bt.makeRotationY(e),this.applyMatrix4(Bt),this}rotateZ(e){return Bt.makeRotationZ(e),this.applyMatrix4(Bt),this}translate(e,t,i){return Bt.makeTranslation(e,t,i),this.applyMatrix4(Bt),this}scale(e,t,i){return Bt.makeScale(e,t,i),this.applyMatrix4(Bt),this}lookAt(e){return _r.lookAt(e),_r.updateMatrix(),this.applyMatrix4(_r.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hi).negate(),this.translate(hi.x,hi.y,hi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Gt(i,3))}else{for(let i=0,s=t.count;i<s;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Dt.setFromBufferAttribute(r),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,Dt.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,Dt.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(Dt.min),this.boundingBox.expandByPoint(Dt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ys);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(Dt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Gi.setFromBufferAttribute(o),this.morphTargetsRelative?(gt.addVectors(Dt.min,Gi.min),Dt.expandByPoint(gt),gt.addVectors(Dt.max,Gi.max),Dt.expandByPoint(gt)):(Dt.expandByPoint(Gi.min),Dt.expandByPoint(Gi.max))}Dt.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)gt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(gt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)gt.fromBufferAttribute(o,c),l&&(hi.fromBufferAttribute(e,c),gt.add(hi)),s=Math.max(s,i.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<i.count;N++)o[N]=new B,l[N]=new B;const c=new B,h=new B,d=new B,u=new De,p=new De,g=new De,x=new B,m=new B;function f(N,y,_){c.fromBufferAttribute(i,N),h.fromBufferAttribute(i,y),d.fromBufferAttribute(i,_),u.fromBufferAttribute(r,N),p.fromBufferAttribute(r,y),g.fromBufferAttribute(r,_),h.sub(c),d.sub(c),p.sub(u),g.sub(u);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(P),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),o[N].add(x),o[y].add(x),o[_].add(x),l[N].add(m),l[y].add(m),l[_].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let N=0,y=E.length;N<y;++N){const _=E[N],P=_.start,T=_.count;for(let R=P,I=P+T;R<I;R+=3)f(e.getX(R+0),e.getX(R+1),e.getX(R+2))}const S=new B,v=new B,L=new B,w=new B;function A(N){L.fromBufferAttribute(s,N),w.copy(L);const y=o[N];S.copy(y),S.sub(L.multiplyScalar(L.dot(y))).normalize(),v.crossVectors(w,y);const P=v.dot(l[N])<0?-1:1;a.setXYZW(N,S.x,S.y,S.z,P)}for(let N=0,y=E.length;N<y;++N){const _=E[N],P=_.start,T=_.count;for(let R=P,I=P+T;R<I;R+=3)A(e.getX(R+0)),A(e.getX(R+1)),A(e.getX(R+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new tn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const s=new B,r=new B,a=new B,o=new B,l=new B,c=new B,h=new B,d=new B;if(e)for(let u=0,p=e.count;u<p;u+=3){const g=e.getX(u+0),x=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)gt.fromBufferAttribute(e,t),gt.normalize(),e.setXYZ(t,gt.x,gt.y,gt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*h;for(let f=0;f<h;f++)u[g++]=c[p++]}return new tn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new sn,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],p=e(u,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lo=new ot,Bn=new Fa,ms=new Ys,No=new B,gs=new B,xs=new B,_s=new B,Sr=new B,Ss=new B,Do=new B,vs=new B;class Tt extends xt{constructor(e=new sn,t=new sc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Ss.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(Sr.fromBufferAttribute(d,e),a?Ss.addScaledVector(Sr,h):Ss.addScaledVector(Sr.sub(t),h))}t.add(Ss)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ms.copy(i.boundingSphere),ms.applyMatrix4(r),Bn.copy(e.ray).recast(e.near),!(ms.containsPoint(Bn.origin)===!1&&(Bn.intersectSphere(ms,No)===null||Bn.origin.distanceToSquared(No)>(e.far-e.near)**2))&&(Lo.copy(r).invert(),Bn.copy(e.ray).applyMatrix4(Lo),!(i.boundingBox!==null&&Bn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Bn)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){const m=u[g],f=a[m.materialIndex],E=Math.max(m.start,p.start),S=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=E,L=S;v<L;v+=3){const w=o.getX(v),A=o.getX(v+1),N=o.getX(v+2);s=ys(this,f,e,i,c,h,d,w,A,N),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const E=o.getX(m),S=o.getX(m+1),v=o.getX(m+2);s=ys(this,a,e,i,c,h,d,E,S,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){const m=u[g],f=a[m.materialIndex],E=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=E,L=S;v<L;v+=3){const w=v,A=v+1,N=v+2;s=ys(this,f,e,i,c,h,d,w,A,N),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const E=m,S=m+1,v=m+2;s=ys(this,a,e,i,c,h,d,E,S,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function tu(n,e,t,i,s,r,a,o){let l;if(e.side===At?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Dn,o),l===null)return null;vs.copy(o),vs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(vs);return c<t.near||c>t.far?null:{distance:c,point:vs.clone(),object:n}}function ys(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,gs),n.getVertexPosition(l,xs),n.getVertexPosition(c,_s);const h=tu(n,e,t,i,gs,xs,_s,Do);if(h){const d=new B;Yt.getBarycoord(Do,gs,xs,_s,d),s&&(h.uv=Yt.getInterpolatedAttribute(s,o,l,c,d,new De)),r&&(h.uv1=Yt.getInterpolatedAttribute(r,o,l,c,d,new De)),a&&(h.normal=Yt.getInterpolatedAttribute(a,o,l,c,d,new B),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new B,materialIndex:0};Yt.getNormal(gs,xs,_s,u.normal),h.face=u,h.barycoord=d}return h}class Qi extends sn{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,p=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Gt(c,3)),this.setAttribute("normal",new Gt(h,3)),this.setAttribute("uv",new Gt(d,2));function g(x,m,f,E,S,v,L,w,A,N,y){const _=v/A,P=L/N,T=v/2,R=L/2,I=w/2,V=A+1,H=N+1;let J=0,W=0;const se=new B;for(let fe=0;fe<H;fe++){const be=fe*P-R;for(let Fe=0;Fe<V;Fe++){const tt=Fe*_-T;se[x]=tt*E,se[m]=be*S,se[f]=I,c.push(se.x,se.y,se.z),se[x]=0,se[m]=0,se[f]=w>0?1:-1,h.push(se.x,se.y,se.z),d.push(Fe/A),d.push(1-fe/N),J+=1}}for(let fe=0;fe<N;fe++)for(let be=0;be<A;be++){const Fe=u+be+V*fe,tt=u+be+V*(fe+1),q=u+(be+1)+V*(fe+1),ne=u+(be+1)+V*fe;l.push(Fe,tt,ne),l.push(tt,q,ne),W+=6}o.addGroup(p,W,y),p+=W,u+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ri(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function yt(n){const e={};for(let t=0;t<n.length;t++){const i=Ri(n[t]);for(const s in i)e[s]=i[s]}return e}function nu(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function oc(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const iu={clone:Ri,merge:yt};var su=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ru=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class In extends Ni{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=su,this.fragmentShader=ru,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ri(e.uniforms),this.uniformsGroups=nu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class lc extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=mn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wn=new B,Io=new De,Fo=new De;class Et extends lc{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ba*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Os*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ba*2*Math.atan(Math.tan(Os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wn.x,wn.y).multiplyScalar(-e/wn.z),wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(wn.x,wn.y).multiplyScalar(-e/wn.z)}getViewSize(e,t){return this.getViewBounds(e,Io,Fo),t.subVectors(Fo,Io)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Os*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const di=-90,ui=1;class au extends xt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Et(di,ui,e,t);s.layers=this.layers,this.add(s);const r=new Et(di,ui,e,t);r.layers=this.layers,this.add(r);const a=new Et(di,ui,e,t);a.layers=this.layers,this.add(a);const o=new Et(di,ui,e,t);o.layers=this.layers,this.add(o);const l=new Et(di,ui,e,t);l.layers=this.layers,this.add(l);const c=new Et(di,ui,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===mn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Gs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class cc extends Pt{constructor(e,t,i,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:wi,super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ou extends jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new cc(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:en}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Qi(5,5,5),r=new In({name:"CubemapFromEquirect",uniforms:Ri(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:At,blending:Ln});r.uniforms.tEquirect.value=t;const a=new Tt(s,r),o=t.minFilter;return t.minFilter===qn&&(t.minFilter=en),new au(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}const vr=new B,lu=new B,cu=new Be;class Tn{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=vr.subVectors(i,t).cross(lu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(vr),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||cu.getNormalMatrix(e),s=this.coplanarPoint(vr).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kn=new Ys,bs=new B;class Oa{constructor(e=new Tn,t=new Tn,i=new Tn,s=new Tn,r=new Tn,a=new Tn){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=mn){const i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],p=s[8],g=s[9],x=s[10],m=s[11],f=s[12],E=s[13],S=s[14],v=s[15];if(i[0].setComponents(l-r,u-c,m-p,v-f).normalize(),i[1].setComponents(l+r,u+c,m+p,v+f).normalize(),i[2].setComponents(l+a,u+h,m+g,v+E).normalize(),i[3].setComponents(l-a,u-h,m-g,v-E).normalize(),i[4].setComponents(l-o,u-d,m-x,v-S).normalize(),t===mn)i[5].setComponents(l+o,u+d,m+x,v+S).normalize();else if(t===Gs)i[5].setComponents(o,d,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),kn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),kn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(kn)}intersectsSprite(e){return kn.center.set(0,0,0),kn.radius=.7071067811865476,kn.applyMatrix4(e.matrixWorld),this.intersectsSphere(kn)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(bs.x=s.normal.x>0?e.max.x:e.min.x,bs.y=s.normal.y>0?e.max.y:e.min.y,bs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(bs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function hc(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function hu(n){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const h=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){const g=d[u],x=d[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,d[u]=x)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){const x=d[p];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class js extends sn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,d=e/o,u=t/l,p=[],g=[],x=[],m=[];for(let f=0;f<h;f++){const E=f*u-a;for(let S=0;S<c;S++){const v=S*d-r;g.push(v,-E,0),x.push(0,0,1),m.push(S/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<o;E++){const S=E+c*f,v=E+c*(f+1),L=E+1+c*(f+1),w=E+1+c*f;p.push(S,v,w),p.push(v,L,w)}this.setIndex(p),this.setAttribute("position",new Gt(g,3)),this.setAttribute("normal",new Gt(x,3)),this.setAttribute("uv",new Gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new js(e.width,e.height,e.widthSegments,e.heightSegments)}}var du=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,fu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_u=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Su=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,vu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Eu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Mu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Cu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Tu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Au=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ru=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Du=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Iu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Fu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ou=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Uu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ku=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Wu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$u=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Yu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ju=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ku=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ju=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Qu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ef=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,sf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,rf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,af=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,of=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,hf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,df=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,uf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ff=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_f=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ef=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Af=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Rf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Lf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Df=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,If=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ff=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Of=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Uf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Gf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$f=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Yf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Zf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Kf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Qf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ep=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,tp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,np=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ip=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,rp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ap=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,hp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,up=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_p=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Sp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,vp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ep=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,wp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ap=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Rp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Np=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Dp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ip=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Op=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Up=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:du,alphahash_pars_fragment:uu,alphamap_fragment:fu,alphamap_pars_fragment:pu,alphatest_fragment:mu,alphatest_pars_fragment:gu,aomap_fragment:xu,aomap_pars_fragment:_u,batching_pars_vertex:Su,batching_vertex:vu,begin_vertex:yu,beginnormal_vertex:bu,bsdfs:Eu,iridescence_fragment:Mu,bumpmap_pars_fragment:Cu,clipping_planes_fragment:wu,clipping_planes_pars_fragment:Tu,clipping_planes_pars_vertex:Au,clipping_planes_vertex:Pu,color_fragment:Ru,color_pars_fragment:Lu,color_pars_vertex:Nu,color_vertex:Du,common:Iu,cube_uv_reflection_fragment:Fu,defaultnormal_vertex:Ou,displacementmap_pars_vertex:Uu,displacementmap_vertex:Bu,emissivemap_fragment:ku,emissivemap_pars_fragment:zu,colorspace_fragment:Gu,colorspace_pars_fragment:Hu,envmap_fragment:Vu,envmap_common_pars_fragment:Wu,envmap_pars_fragment:Xu,envmap_pars_vertex:$u,envmap_physical_pars_fragment:sf,envmap_vertex:qu,fog_vertex:Yu,fog_pars_vertex:ju,fog_fragment:Zu,fog_pars_fragment:Ku,gradientmap_pars_fragment:Ju,lightmap_pars_fragment:Qu,lights_lambert_fragment:ef,lights_lambert_pars_fragment:tf,lights_pars_begin:nf,lights_toon_fragment:rf,lights_toon_pars_fragment:af,lights_phong_fragment:of,lights_phong_pars_fragment:lf,lights_physical_fragment:cf,lights_physical_pars_fragment:hf,lights_fragment_begin:df,lights_fragment_maps:uf,lights_fragment_end:ff,logdepthbuf_fragment:pf,logdepthbuf_pars_fragment:mf,logdepthbuf_pars_vertex:gf,logdepthbuf_vertex:xf,map_fragment:_f,map_pars_fragment:Sf,map_particle_fragment:vf,map_particle_pars_fragment:yf,metalnessmap_fragment:bf,metalnessmap_pars_fragment:Ef,morphinstance_vertex:Mf,morphcolor_vertex:Cf,morphnormal_vertex:wf,morphtarget_pars_vertex:Tf,morphtarget_vertex:Af,normal_fragment_begin:Pf,normal_fragment_maps:Rf,normal_pars_fragment:Lf,normal_pars_vertex:Nf,normal_vertex:Df,normalmap_pars_fragment:If,clearcoat_normal_fragment_begin:Ff,clearcoat_normal_fragment_maps:Of,clearcoat_pars_fragment:Uf,iridescence_pars_fragment:Bf,opaque_fragment:kf,packing:zf,premultiplied_alpha_fragment:Gf,project_vertex:Hf,dithering_fragment:Vf,dithering_pars_fragment:Wf,roughnessmap_fragment:Xf,roughnessmap_pars_fragment:$f,shadowmap_pars_fragment:qf,shadowmap_pars_vertex:Yf,shadowmap_vertex:jf,shadowmask_pars_fragment:Zf,skinbase_vertex:Kf,skinning_pars_vertex:Jf,skinning_vertex:Qf,skinnormal_vertex:ep,specularmap_fragment:tp,specularmap_pars_fragment:np,tonemapping_fragment:ip,tonemapping_pars_fragment:sp,transmission_fragment:rp,transmission_pars_fragment:ap,uv_pars_fragment:op,uv_pars_vertex:lp,uv_vertex:cp,worldpos_vertex:hp,background_vert:dp,background_frag:up,backgroundCube_vert:fp,backgroundCube_frag:pp,cube_vert:mp,cube_frag:gp,depth_vert:xp,depth_frag:_p,distanceRGBA_vert:Sp,distanceRGBA_frag:vp,equirect_vert:yp,equirect_frag:bp,linedashed_vert:Ep,linedashed_frag:Mp,meshbasic_vert:Cp,meshbasic_frag:wp,meshlambert_vert:Tp,meshlambert_frag:Ap,meshmatcap_vert:Pp,meshmatcap_frag:Rp,meshnormal_vert:Lp,meshnormal_frag:Np,meshphong_vert:Dp,meshphong_frag:Ip,meshphysical_vert:Fp,meshphysical_frag:Op,meshtoon_vert:Up,meshtoon_frag:Bp,points_vert:kp,points_frag:zp,shadow_vert:Gp,shadow_frag:Hp,sprite_vert:Vp,sprite_frag:Wp},re={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Qt={basic:{uniforms:yt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:yt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ye(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:yt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:yt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:yt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Ye(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:yt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:yt([re.points,re.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:yt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:yt([re.common,re.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:yt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:yt([re.sprite,re.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:yt([re.common,re.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:yt([re.lights,re.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Qt.physical={uniforms:yt([Qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Es={r:0,b:0,g:0},zn=new nn,Xp=new ot;function $p(n,e,t,i,s,r,a){const o=new Ye(0);let l=r===!0?0:1,c,h,d=null,u=0,p=null;function g(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?t:e).get(S)),S}function x(E){let S=!1;const v=g(E);v===null?f(o,l):v&&v.isColor&&(f(v,1),S=!0);const L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(E,S){const v=g(S);v&&(v.isCubeTexture||v.mapping===$s)?(h===void 0&&(h=new Tt(new Qi(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:Ri(Qt.backgroundCube.uniforms),vertexShader:Qt.backgroundCube.vertexShader,fragmentShader:Qt.backgroundCube.fragmentShader,side:At,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),zn.copy(S.backgroundRotation),zn.x*=-1,zn.y*=-1,zn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(zn.y*=-1,zn.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Xp.makeRotationFromEuler(zn)),h.material.toneMapped=qe.getTransfer(v.colorSpace)!==Qe,(d!==v||u!==v.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,d=v,u=v.version,p=n.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Tt(new js(2,2),new In({name:"BackgroundMaterial",uniforms:Ri(Qt.background.uniforms),vertexShader:Qt.background.vertexShader,fragmentShader:Qt.background.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=qe.getTransfer(v.colorSpace)!==Qe,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||u!==v.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=v,u=v.version,p=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function f(E,S){E.getRGB(Es,oc(n)),i.buffers.color.setClear(Es.r,Es.g,Es.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(E,S=1){o.set(E),l=S,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,f(o,l)},render:x,addToRenderList:m}}function qp(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null);let r=s,a=!1;function o(_,P,T,R,I){let V=!1;const H=d(R,T,P);r!==H&&(r=H,c(r.object)),V=p(_,R,T,I),V&&g(_,R,T,I),I!==null&&e.update(I,n.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,v(_,P,T,R),I!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function l(){return n.createVertexArray()}function c(_){return n.bindVertexArray(_)}function h(_){return n.deleteVertexArray(_)}function d(_,P,T){const R=T.wireframe===!0;let I=i[_.id];I===void 0&&(I={},i[_.id]=I);let V=I[P.id];V===void 0&&(V={},I[P.id]=V);let H=V[R];return H===void 0&&(H=u(l()),V[R]=H),H}function u(_){const P=[],T=[],R=[];for(let I=0;I<t;I++)P[I]=0,T[I]=0,R[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:T,attributeDivisors:R,object:_,attributes:{},index:null}}function p(_,P,T,R){const I=r.attributes,V=P.attributes;let H=0;const J=T.getAttributes();for(const W in J)if(J[W].location>=0){const fe=I[W];let be=V[W];if(be===void 0&&(W==="instanceMatrix"&&_.instanceMatrix&&(be=_.instanceMatrix),W==="instanceColor"&&_.instanceColor&&(be=_.instanceColor)),fe===void 0||fe.attribute!==be||be&&fe.data!==be.data)return!0;H++}return r.attributesNum!==H||r.index!==R}function g(_,P,T,R){const I={},V=P.attributes;let H=0;const J=T.getAttributes();for(const W in J)if(J[W].location>=0){let fe=V[W];fe===void 0&&(W==="instanceMatrix"&&_.instanceMatrix&&(fe=_.instanceMatrix),W==="instanceColor"&&_.instanceColor&&(fe=_.instanceColor));const be={};be.attribute=fe,fe&&fe.data&&(be.data=fe.data),I[W]=be,H++}r.attributes=I,r.attributesNum=H,r.index=R}function x(){const _=r.newAttributes;for(let P=0,T=_.length;P<T;P++)_[P]=0}function m(_){f(_,0)}function f(_,P){const T=r.newAttributes,R=r.enabledAttributes,I=r.attributeDivisors;T[_]=1,R[_]===0&&(n.enableVertexAttribArray(_),R[_]=1),I[_]!==P&&(n.vertexAttribDivisor(_,P),I[_]=P)}function E(){const _=r.newAttributes,P=r.enabledAttributes;for(let T=0,R=P.length;T<R;T++)P[T]!==_[T]&&(n.disableVertexAttribArray(T),P[T]=0)}function S(_,P,T,R,I,V,H){H===!0?n.vertexAttribIPointer(_,P,T,I,V):n.vertexAttribPointer(_,P,T,R,I,V)}function v(_,P,T,R){x();const I=R.attributes,V=T.getAttributes(),H=P.defaultAttributeValues;for(const J in V){const W=V[J];if(W.location>=0){let se=I[J];if(se===void 0&&(J==="instanceMatrix"&&_.instanceMatrix&&(se=_.instanceMatrix),J==="instanceColor"&&_.instanceColor&&(se=_.instanceColor)),se!==void 0){const fe=se.normalized,be=se.itemSize,Fe=e.get(se);if(Fe===void 0)continue;const tt=Fe.buffer,q=Fe.type,ne=Fe.bytesPerElement,Ee=q===n.INT||q===n.UNSIGNED_INT||se.gpuType===Pa;if(se.isInterleavedBufferAttribute){const oe=se.data,Re=oe.stride,Ie=se.offset;if(oe.isInstancedInterleavedBuffer){for(let Ge=0;Ge<W.locationSize;Ge++)f(W.location+Ge,oe.meshPerAttribute);_.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ge=0;Ge<W.locationSize;Ge++)m(W.location+Ge);n.bindBuffer(n.ARRAY_BUFFER,tt);for(let Ge=0;Ge<W.locationSize;Ge++)S(W.location+Ge,be/W.locationSize,q,fe,Re*ne,(Ie+be/W.locationSize*Ge)*ne,Ee)}else{if(se.isInstancedBufferAttribute){for(let oe=0;oe<W.locationSize;oe++)f(W.location+oe,se.meshPerAttribute);_.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let oe=0;oe<W.locationSize;oe++)m(W.location+oe);n.bindBuffer(n.ARRAY_BUFFER,tt);for(let oe=0;oe<W.locationSize;oe++)S(W.location+oe,be/W.locationSize,q,fe,be*ne,be/W.locationSize*oe*ne,Ee)}}else if(H!==void 0){const fe=H[J];if(fe!==void 0)switch(fe.length){case 2:n.vertexAttrib2fv(W.location,fe);break;case 3:n.vertexAttrib3fv(W.location,fe);break;case 4:n.vertexAttrib4fv(W.location,fe);break;default:n.vertexAttrib1fv(W.location,fe)}}}}E()}function L(){N();for(const _ in i){const P=i[_];for(const T in P){const R=P[T];for(const I in R)h(R[I].object),delete R[I];delete P[T]}delete i[_]}}function w(_){if(i[_.id]===void 0)return;const P=i[_.id];for(const T in P){const R=P[T];for(const I in R)h(R[I].object),delete R[I];delete P[T]}delete i[_.id]}function A(_){for(const P in i){const T=i[P];if(T[_.id]===void 0)continue;const R=T[_.id];for(const I in R)h(R[I].object),delete R[I];delete T[_.id]}}function N(){y(),a=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:y,dispose:L,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:E}}function Yp(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,d){d!==0&&(n.drawArraysInstanced(i,c,h,d),t.update(h,i,d))}function o(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];t.update(p,i,1)}function l(c,h,d,u){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=h[x]*u[x];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function jp(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==jt&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const N=A===Ki&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==xn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==pn&&!N)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:E,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:L,maxSamples:w}}function Zp(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new Tn,o=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||i!==0||s;return s=u,i=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,p){const g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const E=r?0:i,S=E*4;let v=f.clippingState||null;l.value=v,v=h(g,u,S,p);for(let L=0;L!==S;++L)v[L]=t[L];f.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,p,g){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const f=p+x*4,E=u.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<f)&&(m=new Float32Array(f));for(let S=0,v=p;S!==x;++S,v+=4)a.copy(d[S]).applyMatrix4(E,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Kp(n){let e=new WeakMap;function t(a,o){return o===$r?a.mapping=wi:o===qr&&(a.mapping=Ti),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===$r||o===qr)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new ou(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class Jt extends lc{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Si=4,Oo=[.125,.215,.35,.446,.526,.582],Wn=20,yr=new Jt,Uo=new Ye;let br=null,Er=0,Mr=0,Cr=!1;const Hn=(1+Math.sqrt(5))/2,fi=1/Hn,Bo=[new B(-Hn,fi,0),new B(Hn,fi,0),new B(-fi,0,Hn),new B(fi,0,Hn),new B(0,Hn,-fi),new B(0,Hn,fi),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class ko{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){br=this._renderer.getRenderTarget(),Er=this._renderer.getActiveCubeFace(),Mr=this._renderer.getActiveMipmapLevel(),Cr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ho(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Go(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(br,Er,Mr),this._renderer.xr.enabled=Cr,e.scissorTest=!1,Ms(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===wi||e.mapping===Ti?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),br=this._renderer.getRenderTarget(),Er=this._renderer.getActiveCubeFace(),Mr=this._renderer.getActiveMipmapLevel(),Cr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:en,minFilter:en,generateMipmaps:!1,type:Ki,format:jt,colorSpace:Li,depthBuffer:!1},s=zo(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zo(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jp(r)),this._blurMaterial=Qp(r,e,t)}return s}_compileMaterial(e){const t=new Tt(this._lodPlanes[0],e);this._renderer.compile(t,yr)}_sceneToCubeUV(e,t,i,s){const o=new Et(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Uo),h.toneMapping=Nn,h.autoClear=!1;const p=new sc({name:"PMREM.Background",side:At,depthWrite:!1,depthTest:!1}),g=new Tt(new Qi,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(Uo),x=!0);for(let f=0;f<6;f++){const E=f%3;E===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):E===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const S=this._cubeSize;Ms(s,E*S,f>2?S:0,S,S),h.setRenderTarget(s),x&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===wi||e.mapping===Ti;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ho()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Go());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Tt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Ms(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,yr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Bo[(s-r-1)%Bo.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Tt(this._lodPlanes[s],c),u=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Wn-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Wn;m>Wn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Wn}`);const f=[];let E=0;for(let A=0;A<Wn;++A){const N=A/x,y=Math.exp(-N*N/2);f.push(y),A===0?E+=y:A<m&&(E+=2*y)}for(let A=0;A<f.length;A++)f[A]=f[A]/E;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:S}=this;u.dTheta.value=g,u.mipInt.value=S-i;const v=this._sizeLods[s],L=3*v*(s>S-Si?s-S+Si:0),w=4*(this._cubeSize-v);Ms(t,L,w,3*v,2*v),l.setRenderTarget(t),l.render(d,yr)}}function Jp(n){const e=[],t=[],i=[];let s=n;const r=n-Si+1+Oo.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>n-Si?l=Oo[a-n+Si-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,x=3,m=2,f=1,E=new Float32Array(x*g*p),S=new Float32Array(m*g*p),v=new Float32Array(f*g*p);for(let w=0;w<p;w++){const A=w%3*2/3-1,N=w>2?0:-1,y=[A,N,0,A+2/3,N,0,A+2/3,N+1,0,A,N,0,A+2/3,N+1,0,A,N+1,0];E.set(y,x*g*w),S.set(u,m*g*w);const _=[w,w,w,w,w,w];v.set(_,f*g*w)}const L=new sn;L.setAttribute("position",new tn(E,x)),L.setAttribute("uv",new tn(S,m)),L.setAttribute("faceIndex",new tn(v,f)),e.push(L),s>Si&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function zo(n,e,t){const i=new jn(n,e,t);return i.texture.mapping=$s,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ms(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Qp(n,e,t){const i=new Float32Array(Wn),s=new B(0,1,0);return new In({name:"SphericalGaussianBlur",defines:{n:Wn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Go(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Ho(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Ua(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function em(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===$r||l===qr,h=l===wi||l===Ti;if(c||h){let d=e.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new ko(n)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new ko(n)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function tm(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&$i("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function nm(n,e,t,i){const s={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const x=u.morphAttributes[g];for(let m=0,f=x.length;m<f;m++)e.remove(x[m])}u.removeEventListener("dispose",a),delete s[u.id];const p=r.get(u);p&&(e.remove(p),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)e.update(u[g],n.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const x=p[g];for(let m=0,f=x.length;m<f;m++)e.update(x[m],n.ARRAY_BUFFER)}}function c(d){const u=[],p=d.index,g=d.attributes.position;let x=0;if(p!==null){const E=p.array;x=p.version;for(let S=0,v=E.length;S<v;S+=3){const L=E[S+0],w=E[S+1],A=E[S+2];u.push(L,w,w,A,A,L)}}else if(g!==void 0){const E=g.array;x=g.version;for(let S=0,v=E.length/3-1;S<v;S+=3){const L=S+0,w=S+1,A=S+2;u.push(L,w,w,A,A,L)}}else return;const m=new(Ql(u)?ac:rc)(u,1);m.version=x;const f=r.get(d);f&&e.remove(f),r.set(d,m)}function h(d){const u=r.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function im(n,e,t){let i;function s(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,p){n.drawElements(i,p,r,u*a),t.update(p,i,1)}function c(u,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,u*a,g),t.update(p,i,g))}function h(u,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,u,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,i,1)}function d(u,p,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)c(u[f]/a,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,u,0,x,0,g);let f=0;for(let E=0;E<g;E++)f+=p[E]*x[E];t.update(f,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function sm(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function rm(n,e,t){const i=new WeakMap,s=new ht;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==d){let y=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",y)};u!==void 0&&u.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let S=0;p===!0&&(S=1),g===!0&&(S=2),x===!0&&(S=3);let v=o.attributes.position.count*S,L=1;v>e.maxTextureSize&&(L=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const w=new Float32Array(v*L*4*d),A=new tc(w,v,L,d);A.type=pn,A.needsUpdate=!0;const N=S*4;for(let _=0;_<d;_++){const P=m[_],T=f[_],R=E[_],I=v*L*4*_;for(let V=0;V<P.count;V++){const H=V*N;p===!0&&(s.fromBufferAttribute(P,V),w[I+H+0]=s.x,w[I+H+1]=s.y,w[I+H+2]=s.z,w[I+H+3]=0),g===!0&&(s.fromBufferAttribute(T,V),w[I+H+4]=s.x,w[I+H+5]=s.y,w[I+H+6]=s.z,w[I+H+7]=0),x===!0&&(s.fromBufferAttribute(R,V),w[I+H+8]=s.x,w[I+H+9]=s.y,w[I+H+10]=s.z,w[I+H+11]=R.itemSize===4?s.w:1)}}u={count:d,texture:A,size:new De(v,L)},i.set(o,u),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];const g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function am(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class dc extends Pt{constructor(e,t,i,s,r,a,o,l,c,h=bi){if(h!==bi&&h!==Pi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===bi&&(i=Yn),i===void 0&&h===Pi&&(i=Ai),super(null,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Zt,this.minFilter=l!==void 0?l:Zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const uc=new Pt,Vo=new dc(1,1),fc=new tc,pc=new Xd,mc=new cc,Wo=[],Xo=[],$o=new Float32Array(16),qo=new Float32Array(9),Yo=new Float32Array(4);function Di(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Wo[s];if(r===void 0&&(r=new Float32Array(s),Wo[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function pt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function mt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Zs(n,e){let t=Xo[e];t===void 0&&(t=new Int32Array(e),Xo[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function om(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function lm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;n.uniform2fv(this.addr,e),mt(t,e)}}function cm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pt(t,e))return;n.uniform3fv(this.addr,e),mt(t,e)}}function hm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;n.uniform4fv(this.addr,e),mt(t,e)}}function dm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,i))return;Yo.set(i),n.uniformMatrix2fv(this.addr,!1,Yo),mt(t,i)}}function um(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,i))return;qo.set(i),n.uniformMatrix3fv(this.addr,!1,qo),mt(t,i)}}function fm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,i))return;$o.set(i),n.uniformMatrix4fv(this.addr,!1,$o),mt(t,i)}}function pm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function mm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;n.uniform2iv(this.addr,e),mt(t,e)}}function gm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;n.uniform3iv(this.addr,e),mt(t,e)}}function xm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;n.uniform4iv(this.addr,e),mt(t,e)}}function _m(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Sm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;n.uniform2uiv(this.addr,e),mt(t,e)}}function vm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;n.uniform3uiv(this.addr,e),mt(t,e)}}function ym(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;n.uniform4uiv(this.addr,e),mt(t,e)}}function bm(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Vo.compareFunction=Jl,r=Vo):r=uc,t.setTexture2D(e||r,s)}function Em(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||pc,s)}function Mm(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||mc,s)}function Cm(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||fc,s)}function wm(n){switch(n){case 5126:return om;case 35664:return lm;case 35665:return cm;case 35666:return hm;case 35674:return dm;case 35675:return um;case 35676:return fm;case 5124:case 35670:return pm;case 35667:case 35671:return mm;case 35668:case 35672:return gm;case 35669:case 35673:return xm;case 5125:return _m;case 36294:return Sm;case 36295:return vm;case 36296:return ym;case 35678:case 36198:case 36298:case 36306:case 35682:return bm;case 35679:case 36299:case 36307:return Em;case 35680:case 36300:case 36308:case 36293:return Mm;case 36289:case 36303:case 36311:case 36292:return Cm}}function Tm(n,e){n.uniform1fv(this.addr,e)}function Am(n,e){const t=Di(e,this.size,2);n.uniform2fv(this.addr,t)}function Pm(n,e){const t=Di(e,this.size,3);n.uniform3fv(this.addr,t)}function Rm(n,e){const t=Di(e,this.size,4);n.uniform4fv(this.addr,t)}function Lm(n,e){const t=Di(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Nm(n,e){const t=Di(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Dm(n,e){const t=Di(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Im(n,e){n.uniform1iv(this.addr,e)}function Fm(n,e){n.uniform2iv(this.addr,e)}function Om(n,e){n.uniform3iv(this.addr,e)}function Um(n,e){n.uniform4iv(this.addr,e)}function Bm(n,e){n.uniform1uiv(this.addr,e)}function km(n,e){n.uniform2uiv(this.addr,e)}function zm(n,e){n.uniform3uiv(this.addr,e)}function Gm(n,e){n.uniform4uiv(this.addr,e)}function Hm(n,e,t){const i=this.cache,s=e.length,r=Zs(t,s);pt(i,r)||(n.uniform1iv(this.addr,r),mt(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||uc,r[a])}function Vm(n,e,t){const i=this.cache,s=e.length,r=Zs(t,s);pt(i,r)||(n.uniform1iv(this.addr,r),mt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||pc,r[a])}function Wm(n,e,t){const i=this.cache,s=e.length,r=Zs(t,s);pt(i,r)||(n.uniform1iv(this.addr,r),mt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||mc,r[a])}function Xm(n,e,t){const i=this.cache,s=e.length,r=Zs(t,s);pt(i,r)||(n.uniform1iv(this.addr,r),mt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||fc,r[a])}function $m(n){switch(n){case 5126:return Tm;case 35664:return Am;case 35665:return Pm;case 35666:return Rm;case 35674:return Lm;case 35675:return Nm;case 35676:return Dm;case 5124:case 35670:return Im;case 35667:case 35671:return Fm;case 35668:case 35672:return Om;case 35669:case 35673:return Um;case 5125:return Bm;case 36294:return km;case 36295:return zm;case 36296:return Gm;case 35678:case 36198:case 36298:case 36306:case 35682:return Hm;case 35679:case 36299:case 36307:return Vm;case 35680:case 36300:case 36308:case 36293:return Wm;case 36289:case 36303:case 36311:case 36292:return Xm}}class qm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=wm(t.type)}}class Ym{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$m(t.type)}}class jm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const wr=/(\w+)(\])?(\[|\.)?/g;function jo(n,e){n.seq.push(e),n.map[e.id]=e}function Zm(n,e,t){const i=n.name,s=i.length;for(wr.lastIndex=0;;){const r=wr.exec(i),a=wr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){jo(t,c===void 0?new qm(o,n,e):new Ym(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new jm(o),jo(t,d)),t=d}}}class Us{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Zm(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function Zo(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Km=37297;let Jm=0;function Qm(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Ko=new Be;function eg(n){qe._getMatrix(Ko,qe.workingColorSpace,n);const e=`mat3( ${Ko.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(n)){case qs:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Jo(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Qm(n.getShaderSource(e),a)}else return s}function tg(n,e){const t=eg(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function ng(n,e){let t;switch(e){case xd:t="Linear";break;case _d:t="Reinhard";break;case Sd:t="Cineon";break;case vd:t="ACESFilmic";break;case bd:t="AgX";break;case Ed:t="Neutral";break;case yd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Cs=new B;function ig(){qe.getLuminanceCoefficients(Cs);const n=Cs.x.toFixed(4),e=Cs.y.toFixed(4),t=Cs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qi).join(`
`)}function rg(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ag(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function qi(n){return n!==""}function Qo(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function el(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const og=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ea(n){return n.replace(og,cg)}const lg=new Map;function cg(n,e){let t=ze[e];if(t===void 0){const i=lg.get(e);if(i!==void 0)t=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ea(t)}const hg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tl(n){return n.replace(hg,dg)}function dg(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function nl(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ug(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Bl?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Zh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===un&&(e="SHADOWMAP_TYPE_VSM"),e}function fg(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case wi:case Ti:e="ENVMAP_TYPE_CUBE";break;case $s:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pg(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ti:e="ENVMAP_MODE_REFRACTION";break}return e}function mg(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case kl:e="ENVMAP_BLENDING_MULTIPLY";break;case md:e="ENVMAP_BLENDING_MIX";break;case gd:e="ENVMAP_BLENDING_ADD";break}return e}function gg(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function xg(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=ug(t),c=fg(t),h=pg(t),d=mg(t),u=gg(t),p=sg(t),g=rg(r),x=s.createProgram();let m,f,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qi).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qi).join(`
`),f.length>0&&(f+=`
`)):(m=[nl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qi).join(`
`),f=[nl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Nn?"#define TONE_MAPPING":"",t.toneMapping!==Nn?ze.tonemapping_pars_fragment:"",t.toneMapping!==Nn?ng("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,tg("linearToOutputTexel",t.outputColorSpace),ig(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qi).join(`
`)),a=Ea(a),a=Qo(a,t),a=el(a,t),o=Ea(o),o=Qo(o,t),o=el(o,t),a=tl(a),o=tl(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===mo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const S=E+m+a,v=E+f+o,L=Zo(s,s.VERTEX_SHADER,S),w=Zo(s,s.FRAGMENT_SHADER,v);s.attachShader(x,L),s.attachShader(x,w),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(P){if(n.debug.checkShaderErrors){const T=s.getProgramInfoLog(x).trim(),R=s.getShaderInfoLog(L).trim(),I=s.getShaderInfoLog(w).trim();let V=!0,H=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,L,w);else{const J=Jo(s,L,"vertex"),W=Jo(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+T+`
`+J+`
`+W)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(R===""||I==="")&&(H=!1);H&&(P.diagnostics={runnable:V,programLog:T,vertexShader:{log:R,prefix:m},fragmentShader:{log:I,prefix:f}})}s.deleteShader(L),s.deleteShader(w),N=new Us(s,x),y=ag(s,x)}let N;this.getUniforms=function(){return N===void 0&&A(this),N};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(x,Km)),_},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Jm++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=L,this.fragmentShader=w,this}let _g=0;class Sg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new vg(e),t.set(e,i)),i}}class vg{constructor(e){this.id=_g++,this.code=e,this.usedTimes=0}}function yg(n,e,t,i,s,r,a){const o=new nc,l=new Sg,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,_,P,T,R){const I=T.fog,V=R.geometry,H=y.isMeshStandardMaterial?T.environment:null,J=(y.isMeshStandardMaterial?t:e).get(y.envMap||H),W=J&&J.mapping===$s?J.image.height:null,se=g[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const fe=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,be=fe!==void 0?fe.length:0;let Fe=0;V.morphAttributes.position!==void 0&&(Fe=1),V.morphAttributes.normal!==void 0&&(Fe=2),V.morphAttributes.color!==void 0&&(Fe=3);let tt,q,ne,Ee;if(se){const Je=Qt[se];tt=Je.vertexShader,q=Je.fragmentShader}else tt=y.vertexShader,q=y.fragmentShader,l.update(y),ne=l.getVertexShaderID(y),Ee=l.getFragmentShaderID(y);const oe=n.getRenderTarget(),Re=n.state.buffers.depth.getReversed(),Ie=R.isInstancedMesh===!0,Ge=R.isBatchedMesh===!0,lt=!!y.map,Xe=!!y.matcap,dt=!!J,U=!!y.aoMap,Ot=!!y.lightMap,He=!!y.bumpMap,Ve=!!y.normalMap,Ae=!!y.displacementMap,st=!!y.emissiveMap,Te=!!y.metalnessMap,C=!!y.roughnessMap,b=y.anisotropy>0,k=y.clearcoat>0,j=y.dispersion>0,K=y.iridescence>0,$=y.sheen>0,Ce=y.transmission>0,le=b&&!!y.anisotropyMap,me=k&&!!y.clearcoatMap,$e=k&&!!y.clearcoatNormalMap,Q=k&&!!y.clearcoatRoughnessMap,ge=K&&!!y.iridescenceMap,Pe=K&&!!y.iridescenceThicknessMap,Le=$&&!!y.sheenColorMap,xe=$&&!!y.sheenRoughnessMap,We=!!y.specularMap,ke=!!y.specularColorMap,nt=!!y.specularIntensityMap,D=Ce&&!!y.transmissionMap,ae=Ce&&!!y.thicknessMap,X=!!y.gradientMap,Z=!!y.alphaMap,de=y.alphaTest>0,ce=!!y.alphaHash,Oe=!!y.extensions;let ct=Nn;y.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(ct=n.toneMapping);const _t={shaderID:se,shaderType:y.type,shaderName:y.name,vertexShader:tt,fragmentShader:q,defines:y.defines,customVertexShaderID:ne,customFragmentShaderID:Ee,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Ge,batchingColor:Ge&&R._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&R.instanceColor!==null,instancingMorph:Ie&&R.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:oe===null?n.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Li,alphaToCoverage:!!y.alphaToCoverage,map:lt,matcap:Xe,envMap:dt,envMapMode:dt&&J.mapping,envMapCubeUVHeight:W,aoMap:U,lightMap:Ot,bumpMap:He,normalMap:Ve,displacementMap:u&&Ae,emissiveMap:st,normalMapObjectSpace:Ve&&y.normalMapType===Td,normalMapTangentSpace:Ve&&y.normalMapType===Kl,metalnessMap:Te,roughnessMap:C,anisotropy:b,anisotropyMap:le,clearcoat:k,clearcoatMap:me,clearcoatNormalMap:$e,clearcoatRoughnessMap:Q,dispersion:j,iridescence:K,iridescenceMap:ge,iridescenceThicknessMap:Pe,sheen:$,sheenColorMap:Le,sheenRoughnessMap:xe,specularMap:We,specularColorMap:ke,specularIntensityMap:nt,transmission:Ce,transmissionMap:D,thicknessMap:ae,gradientMap:X,opaque:y.transparent===!1&&y.blending===yi&&y.alphaToCoverage===!1,alphaMap:Z,alphaTest:de,alphaHash:ce,combine:y.combine,mapUv:lt&&x(y.map.channel),aoMapUv:U&&x(y.aoMap.channel),lightMapUv:Ot&&x(y.lightMap.channel),bumpMapUv:He&&x(y.bumpMap.channel),normalMapUv:Ve&&x(y.normalMap.channel),displacementMapUv:Ae&&x(y.displacementMap.channel),emissiveMapUv:st&&x(y.emissiveMap.channel),metalnessMapUv:Te&&x(y.metalnessMap.channel),roughnessMapUv:C&&x(y.roughnessMap.channel),anisotropyMapUv:le&&x(y.anisotropyMap.channel),clearcoatMapUv:me&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:$e&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:xe&&x(y.sheenRoughnessMap.channel),specularMapUv:We&&x(y.specularMap.channel),specularColorMapUv:ke&&x(y.specularColorMap.channel),specularIntensityMapUv:nt&&x(y.specularIntensityMap.channel),transmissionMapUv:D&&x(y.transmissionMap.channel),thicknessMapUv:ae&&x(y.thicknessMap.channel),alphaMapUv:Z&&x(y.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Ve||b),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!V.attributes.uv&&(lt||Z),fog:!!I,useFog:y.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Re,skinning:R.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:Fe,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:ct,decodeVideoTexture:lt&&y.map.isVideoTexture===!0&&qe.getTransfer(y.map.colorSpace)===Qe,decodeVideoTextureEmissive:st&&y.emissiveMap.isVideoTexture===!0&&qe.getTransfer(y.emissiveMap.colorSpace)===Qe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===fn,flipSided:y.side===At,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Oe&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&y.extensions.multiDraw===!0||Ge)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return _t.vertexUv1s=c.has(1),_t.vertexUv2s=c.has(2),_t.vertexUv3s=c.has(3),c.clear(),_t}function f(y){const _=[];if(y.shaderID?_.push(y.shaderID):(_.push(y.customVertexShaderID),_.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)_.push(P),_.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(E(_,y),S(_,y),_.push(n.outputColorSpace)),_.push(y.customProgramCacheKey),_.join()}function E(y,_){y.push(_.precision),y.push(_.outputColorSpace),y.push(_.envMapMode),y.push(_.envMapCubeUVHeight),y.push(_.mapUv),y.push(_.alphaMapUv),y.push(_.lightMapUv),y.push(_.aoMapUv),y.push(_.bumpMapUv),y.push(_.normalMapUv),y.push(_.displacementMapUv),y.push(_.emissiveMapUv),y.push(_.metalnessMapUv),y.push(_.roughnessMapUv),y.push(_.anisotropyMapUv),y.push(_.clearcoatMapUv),y.push(_.clearcoatNormalMapUv),y.push(_.clearcoatRoughnessMapUv),y.push(_.iridescenceMapUv),y.push(_.iridescenceThicknessMapUv),y.push(_.sheenColorMapUv),y.push(_.sheenRoughnessMapUv),y.push(_.specularMapUv),y.push(_.specularColorMapUv),y.push(_.specularIntensityMapUv),y.push(_.transmissionMapUv),y.push(_.thicknessMapUv),y.push(_.combine),y.push(_.fogExp2),y.push(_.sizeAttenuation),y.push(_.morphTargetsCount),y.push(_.morphAttributeCount),y.push(_.numDirLights),y.push(_.numPointLights),y.push(_.numSpotLights),y.push(_.numSpotLightMaps),y.push(_.numHemiLights),y.push(_.numRectAreaLights),y.push(_.numDirLightShadows),y.push(_.numPointLightShadows),y.push(_.numSpotLightShadows),y.push(_.numSpotLightShadowsWithMaps),y.push(_.numLightProbes),y.push(_.shadowMapType),y.push(_.toneMapping),y.push(_.numClippingPlanes),y.push(_.numClipIntersection),y.push(_.depthPacking)}function S(y,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reverseDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),y.push(o.mask)}function v(y){const _=g[y.type];let P;if(_){const T=Qt[_];P=iu.clone(T.uniforms)}else P=y.uniforms;return P}function L(y,_){let P;for(let T=0,R=h.length;T<R;T++){const I=h[T];if(I.cacheKey===_){P=I,++P.usedTimes;break}}return P===void 0&&(P=new xg(n,_,y,r),h.push(P)),P}function w(y){if(--y.usedTimes===0){const _=h.indexOf(y);h[_]=h[h.length-1],h.pop(),y.destroy()}}function A(y){l.remove(y)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:L,releaseProgram:w,releaseShaderCache:A,programs:h,dispose:N}}function bg(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Eg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function il(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function sl(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(d,u,p,g,x,m){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},n[e]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=x,f.group=m),e++,f}function o(d,u,p,g,x,m){const f=a(d,u,p,g,x,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(d,u,p,g,x,m){const f=a(d,u,p,g,x,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(d,u){t.length>1&&t.sort(d||Eg),i.length>1&&i.sort(u||il),s.length>1&&s.sort(u||il)}function h(){for(let d=e,u=n.length;d<u;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Mg(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new sl,n.set(i,[a])):s>=r.length?(a=new sl,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Cg(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Ye};break;case"SpotLight":t={position:new B,direction:new B,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function wg(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Tg=0;function Ag(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Pg(n){const e=new Cg,t=wg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);const s=new B,r=new ot,a=new ot;function o(c){let h=0,d=0,u=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let p=0,g=0,x=0,m=0,f=0,E=0,S=0,v=0,L=0,w=0,A=0;c.sort(Ag);for(let y=0,_=c.length;y<_;y++){const P=c[y],T=P.color,R=P.intensity,I=P.distance,V=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=T.r*R,d+=T.g*R,u+=T.b*R;else if(P.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(P.sh.coefficients[H],R);A++}else if(P.isDirectionalLight){const H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const J=P.shadow,W=t.get(P);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,i.directionalShadow[p]=W,i.directionalShadowMap[p]=V,i.directionalShadowMatrix[p]=P.shadow.matrix,E++}i.directional[p]=H,p++}else if(P.isSpotLight){const H=e.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(T).multiplyScalar(R),H.distance=I,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,i.spot[x]=H;const J=P.shadow;if(P.map&&(i.spotLightMap[L]=P.map,L++,J.updateMatrices(P),P.castShadow&&w++),i.spotLightMatrix[x]=J.matrix,P.castShadow){const W=t.get(P);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,i.spotShadow[x]=W,i.spotShadowMap[x]=V,v++}x++}else if(P.isRectAreaLight){const H=e.get(P);H.color.copy(T).multiplyScalar(R),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=H,m++}else if(P.isPointLight){const H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){const J=P.shadow,W=t.get(P);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,W.shadowCameraNear=J.camera.near,W.shadowCameraFar=J.camera.far,i.pointShadow[g]=W,i.pointShadowMap[g]=V,i.pointShadowMatrix[g]=P.shadow.matrix,S++}i.point[g]=H,g++}else if(P.isHemisphereLight){const H=e.get(P);H.skyColor.copy(P.color).multiplyScalar(R),H.groundColor.copy(P.groundColor).multiplyScalar(R),i.hemi[f]=H,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const N=i.hash;(N.directionalLength!==p||N.pointLength!==g||N.spotLength!==x||N.rectAreaLength!==m||N.hemiLength!==f||N.numDirectionalShadows!==E||N.numPointShadows!==S||N.numSpotShadows!==v||N.numSpotMaps!==L||N.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=v+L-w,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=A,N.directionalLength=p,N.pointLength=g,N.spotLength=x,N.rectAreaLength=m,N.hemiLength=f,N.numDirectionalShadows=E,N.numPointShadows=S,N.numSpotShadows=v,N.numSpotMaps=L,N.numLightProbes=A,i.version=Tg++)}function l(c,h){let d=0,u=0,p=0,g=0,x=0;const m=h.matrixWorldInverse;for(let f=0,E=c.length;f<E;f++){const S=c[f];if(S.isDirectionalLight){const v=i.directional[d];v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(S.isSpotLight){const v=i.spot[p];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),p++}else if(S.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const v=i.point[u];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),u++}else if(S.isHemisphereLight){const v=i.hemi[x];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:i}}function rl(n){const e=new Pg(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Rg(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new rl(n),e.set(s,[o])):r>=a.length?(o=new rl(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class Lg extends Ni{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Cd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ng extends Ni{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Dg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ig=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Fg(n,e,t){let i=new Oa;const s=new De,r=new De,a=new ht,o=new Lg({depthPacking:wd}),l=new Ng,c={},h=t.maxTextureSize,d={[Dn]:At,[At]:Dn,[fn]:fn},u=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:Dg,fragmentShader:Ig}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new sn;g.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Tt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bl;let f=this.type;this.render=function(w,A,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const y=n.getRenderTarget(),_=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),T=n.state;T.setBlending(Ln),T.buffers.color.setClear(1,1,1,1),T.buffers.depth.setTest(!0),T.setScissorTest(!1);const R=f!==un&&this.type===un,I=f===un&&this.type!==un;for(let V=0,H=w.length;V<H;V++){const J=w[V],W=J.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const se=W.getFrameExtents();if(s.multiply(se),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/se.x),s.x=r.x*se.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/se.y),s.y=r.y*se.y,W.mapSize.y=r.y)),W.map===null||R===!0||I===!0){const be=this.type!==un?{minFilter:Zt,magFilter:Zt}:{};W.map!==null&&W.map.dispose(),W.map=new jn(s.x,s.y,be),W.map.texture.name=J.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const fe=W.getViewportCount();for(let be=0;be<fe;be++){const Fe=W.getViewport(be);a.set(r.x*Fe.x,r.y*Fe.y,r.x*Fe.z,r.y*Fe.w),T.viewport(a),W.updateMatrices(J,be),i=W.getFrustum(),v(A,N,W.camera,J,this.type)}W.isPointLightShadow!==!0&&this.type===un&&E(W,N),W.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(y,_,P)};function E(w,A){const N=e.update(x);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new jn(s.x,s.y)),u.uniforms.shadow_pass.value=w.map.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(A,null,N,u,x,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(A,null,N,p,x,null)}function S(w,A,N,y){let _=null;const P=N.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)_=P;else if(_=N.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const T=_.uuid,R=A.uuid;let I=c[T];I===void 0&&(I={},c[T]=I);let V=I[R];V===void 0&&(V=_.clone(),I[R]=V,A.addEventListener("dispose",L)),_=V}if(_.visible=A.visible,_.wireframe=A.wireframe,y===un?_.side=A.shadowSide!==null?A.shadowSide:A.side:_.side=A.shadowSide!==null?A.shadowSide:d[A.side],_.alphaMap=A.alphaMap,_.alphaTest=A.alphaTest,_.map=A.map,_.clipShadows=A.clipShadows,_.clippingPlanes=A.clippingPlanes,_.clipIntersection=A.clipIntersection,_.displacementMap=A.displacementMap,_.displacementScale=A.displacementScale,_.displacementBias=A.displacementBias,_.wireframeLinewidth=A.wireframeLinewidth,_.linewidth=A.linewidth,N.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const T=n.properties.get(_);T.light=N}return _}function v(w,A,N,y,_){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&_===un)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,w.matrixWorld);const R=e.update(w),I=w.material;if(Array.isArray(I)){const V=R.groups;for(let H=0,J=V.length;H<J;H++){const W=V[H],se=I[W.materialIndex];if(se&&se.visible){const fe=S(w,se,y,_);w.onBeforeShadow(n,w,A,N,R,fe,W),n.renderBufferDirect(N,null,R,fe,w,W),w.onAfterShadow(n,w,A,N,R,fe,W)}}}else if(I.visible){const V=S(w,I,y,_);w.onBeforeShadow(n,w,A,N,R,V,null),n.renderBufferDirect(N,null,R,V,w,null),w.onAfterShadow(n,w,A,N,R,V,null)}}const T=w.children;for(let R=0,I=T.length;R<I;R++)v(T[R],A,N,y,_)}function L(w){w.target.removeEventListener("dispose",L);for(const N in c){const y=c[N],_=w.target.uuid;_ in y&&(y[_].dispose(),delete y[_])}}}const Og={[kr]:zr,[Gr]:Wr,[Hr]:Xr,[Ci]:Vr,[zr]:kr,[Wr]:Gr,[Xr]:Hr,[Vr]:Ci};function Ug(n,e){function t(){let D=!1;const ae=new ht;let X=null;const Z=new ht(0,0,0,0);return{setMask:function(de){X!==de&&!D&&(n.colorMask(de,de,de,de),X=de)},setLocked:function(de){D=de},setClear:function(de,ce,Oe,ct,_t){_t===!0&&(de*=ct,ce*=ct,Oe*=ct),ae.set(de,ce,Oe,ct),Z.equals(ae)===!1&&(n.clearColor(de,ce,Oe,ct),Z.copy(ae))},reset:function(){D=!1,X=null,Z.set(-1,0,0,0)}}}function i(){let D=!1,ae=!1,X=null,Z=null,de=null;return{setReversed:function(ce){if(ae!==ce){const Oe=e.get("EXT_clip_control");ae?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT);const ct=de;de=null,this.setClear(ct)}ae=ce},getReversed:function(){return ae},setTest:function(ce){ce?oe(n.DEPTH_TEST):Re(n.DEPTH_TEST)},setMask:function(ce){X!==ce&&!D&&(n.depthMask(ce),X=ce)},setFunc:function(ce){if(ae&&(ce=Og[ce]),Z!==ce){switch(ce){case kr:n.depthFunc(n.NEVER);break;case zr:n.depthFunc(n.ALWAYS);break;case Gr:n.depthFunc(n.LESS);break;case Ci:n.depthFunc(n.LEQUAL);break;case Hr:n.depthFunc(n.EQUAL);break;case Vr:n.depthFunc(n.GEQUAL);break;case Wr:n.depthFunc(n.GREATER);break;case Xr:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Z=ce}},setLocked:function(ce){D=ce},setClear:function(ce){de!==ce&&(ae&&(ce=1-ce),n.clearDepth(ce),de=ce)},reset:function(){D=!1,X=null,Z=null,de=null,ae=!1}}}function s(){let D=!1,ae=null,X=null,Z=null,de=null,ce=null,Oe=null,ct=null,_t=null;return{setTest:function(Je){D||(Je?oe(n.STENCIL_TEST):Re(n.STENCIL_TEST))},setMask:function(Je){ae!==Je&&!D&&(n.stencilMask(Je),ae=Je)},setFunc:function(Je,Ht,rn){(X!==Je||Z!==Ht||de!==rn)&&(n.stencilFunc(Je,Ht,rn),X=Je,Z=Ht,de=rn)},setOp:function(Je,Ht,rn){(ce!==Je||Oe!==Ht||ct!==rn)&&(n.stencilOp(Je,Ht,rn),ce=Je,Oe=Ht,ct=rn)},setLocked:function(Je){D=Je},setClear:function(Je){_t!==Je&&(n.clearStencil(Je),_t=Je)},reset:function(){D=!1,ae=null,X=null,Z=null,de=null,ce=null,Oe=null,ct=null,_t=null}}}const r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,p=[],g=null,x=!1,m=null,f=null,E=null,S=null,v=null,L=null,w=null,A=new Ye(0,0,0),N=0,y=!1,_=null,P=null,T=null,R=null,I=null;const V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,J=0;const W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(W)[1]),H=J>=1):W.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),H=J>=2);let se=null,fe={};const be=n.getParameter(n.SCISSOR_BOX),Fe=n.getParameter(n.VIEWPORT),tt=new ht().fromArray(be),q=new ht().fromArray(Fe);function ne(D,ae,X,Z){const de=new Uint8Array(4),ce=n.createTexture();n.bindTexture(D,ce),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Oe=0;Oe<X;Oe++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(ae,0,n.RGBA,1,1,Z,0,n.RGBA,n.UNSIGNED_BYTE,de):n.texImage2D(ae+Oe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,de);return ce}const Ee={};Ee[n.TEXTURE_2D]=ne(n.TEXTURE_2D,n.TEXTURE_2D,1),Ee[n.TEXTURE_CUBE_MAP]=ne(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[n.TEXTURE_2D_ARRAY]=ne(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ee[n.TEXTURE_3D]=ne(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),oe(n.DEPTH_TEST),a.setFunc(Ci),He(!1),Ve(lo),oe(n.CULL_FACE),U(Ln);function oe(D){h[D]!==!0&&(n.enable(D),h[D]=!0)}function Re(D){h[D]!==!1&&(n.disable(D),h[D]=!1)}function Ie(D,ae){return d[D]!==ae?(n.bindFramebuffer(D,ae),d[D]=ae,D===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ae),D===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ae),!0):!1}function Ge(D,ae){let X=p,Z=!1;if(D){X=u.get(ae),X===void 0&&(X=[],u.set(ae,X));const de=D.textures;if(X.length!==de.length||X[0]!==n.COLOR_ATTACHMENT0){for(let ce=0,Oe=de.length;ce<Oe;ce++)X[ce]=n.COLOR_ATTACHMENT0+ce;X.length=de.length,Z=!0}}else X[0]!==n.BACK&&(X[0]=n.BACK,Z=!0);Z&&n.drawBuffers(X)}function lt(D){return g!==D?(n.useProgram(D),g=D,!0):!1}const Xe={[Vn]:n.FUNC_ADD,[Jh]:n.FUNC_SUBTRACT,[Qh]:n.FUNC_REVERSE_SUBTRACT};Xe[ed]=n.MIN,Xe[td]=n.MAX;const dt={[nd]:n.ZERO,[id]:n.ONE,[sd]:n.SRC_COLOR,[Ur]:n.SRC_ALPHA,[hd]:n.SRC_ALPHA_SATURATE,[ld]:n.DST_COLOR,[ad]:n.DST_ALPHA,[rd]:n.ONE_MINUS_SRC_COLOR,[Br]:n.ONE_MINUS_SRC_ALPHA,[cd]:n.ONE_MINUS_DST_COLOR,[od]:n.ONE_MINUS_DST_ALPHA,[dd]:n.CONSTANT_COLOR,[ud]:n.ONE_MINUS_CONSTANT_COLOR,[fd]:n.CONSTANT_ALPHA,[pd]:n.ONE_MINUS_CONSTANT_ALPHA};function U(D,ae,X,Z,de,ce,Oe,ct,_t,Je){if(D===Ln){x===!0&&(Re(n.BLEND),x=!1);return}if(x===!1&&(oe(n.BLEND),x=!0),D!==Kh){if(D!==m||Je!==y){if((f!==Vn||v!==Vn)&&(n.blendEquation(n.FUNC_ADD),f=Vn,v=Vn),Je)switch(D){case yi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case co:n.blendFunc(n.ONE,n.ONE);break;case ho:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case uo:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case yi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case co:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ho:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case uo:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}E=null,S=null,L=null,w=null,A.set(0,0,0),N=0,m=D,y=Je}return}de=de||ae,ce=ce||X,Oe=Oe||Z,(ae!==f||de!==v)&&(n.blendEquationSeparate(Xe[ae],Xe[de]),f=ae,v=de),(X!==E||Z!==S||ce!==L||Oe!==w)&&(n.blendFuncSeparate(dt[X],dt[Z],dt[ce],dt[Oe]),E=X,S=Z,L=ce,w=Oe),(ct.equals(A)===!1||_t!==N)&&(n.blendColor(ct.r,ct.g,ct.b,_t),A.copy(ct),N=_t),m=D,y=!1}function Ot(D,ae){D.side===fn?Re(n.CULL_FACE):oe(n.CULL_FACE);let X=D.side===At;ae&&(X=!X),He(X),D.blending===yi&&D.transparent===!1?U(Ln):U(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const Z=D.stencilWrite;o.setTest(Z),Z&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),st(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?oe(n.SAMPLE_ALPHA_TO_COVERAGE):Re(n.SAMPLE_ALPHA_TO_COVERAGE)}function He(D){_!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),_=D)}function Ve(D){D!==Yh?(oe(n.CULL_FACE),D!==P&&(D===lo?n.cullFace(n.BACK):D===jh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Re(n.CULL_FACE),P=D}function Ae(D){D!==T&&(H&&n.lineWidth(D),T=D)}function st(D,ae,X){D?(oe(n.POLYGON_OFFSET_FILL),(R!==ae||I!==X)&&(n.polygonOffset(ae,X),R=ae,I=X)):Re(n.POLYGON_OFFSET_FILL)}function Te(D){D?oe(n.SCISSOR_TEST):Re(n.SCISSOR_TEST)}function C(D){D===void 0&&(D=n.TEXTURE0+V-1),se!==D&&(n.activeTexture(D),se=D)}function b(D,ae,X){X===void 0&&(se===null?X=n.TEXTURE0+V-1:X=se);let Z=fe[X];Z===void 0&&(Z={type:void 0,texture:void 0},fe[X]=Z),(Z.type!==D||Z.texture!==ae)&&(se!==X&&(n.activeTexture(X),se=X),n.bindTexture(D,ae||Ee[D]),Z.type=D,Z.texture=ae)}function k(){const D=fe[se];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function j(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ce(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $e(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pe(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Le(D){tt.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),tt.copy(D))}function xe(D){q.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),q.copy(D))}function We(D,ae){let X=c.get(ae);X===void 0&&(X=new WeakMap,c.set(ae,X));let Z=X.get(D);Z===void 0&&(Z=n.getUniformBlockIndex(ae,D.name),X.set(D,Z))}function ke(D,ae){const Z=c.get(ae).get(D);l.get(ae)!==Z&&(n.uniformBlockBinding(ae,Z,D.__bindingPointIndex),l.set(ae,Z))}function nt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},se=null,fe={},d={},u=new WeakMap,p=[],g=null,x=!1,m=null,f=null,E=null,S=null,v=null,L=null,w=null,A=new Ye(0,0,0),N=0,y=!1,_=null,P=null,T=null,R=null,I=null,tt.set(0,0,n.canvas.width,n.canvas.height),q.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:oe,disable:Re,bindFramebuffer:Ie,drawBuffers:Ge,useProgram:lt,setBlending:U,setMaterial:Ot,setFlipSided:He,setCullFace:Ve,setLineWidth:Ae,setPolygonOffset:st,setScissorTest:Te,activeTexture:C,bindTexture:b,unbindTexture:k,compressedTexImage2D:j,compressedTexImage3D:K,texImage2D:ge,texImage3D:Pe,updateUBOMapping:We,uniformBlockBinding:ke,texStorage2D:$e,texStorage3D:Q,texSubImage2D:$,texSubImage3D:Ce,compressedTexSubImage2D:le,compressedTexSubImage3D:me,scissor:Le,viewport:xe,reset:nt}}function al(n,e,t,i){const s=Bg(i);switch(t){case Wl:return n*e;case $l:return n*e;case ql:return n*e*2;case Yl:return n*e/s.components*s.byteLength;case Na:return n*e/s.components*s.byteLength;case jl:return n*e*2/s.components*s.byteLength;case Da:return n*e*2/s.components*s.byteLength;case Xl:return n*e*3/s.components*s.byteLength;case jt:return n*e*4/s.components*s.byteLength;case Ia:return n*e*4/s.components*s.byteLength;case Ls:case Ns:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ds:case Is:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Kr:case Qr:return Math.max(n,16)*Math.max(e,8)/4;case Zr:case Jr:return Math.max(n,8)*Math.max(e,8)/2;case ea:case ta:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case na:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ia:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case sa:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ra:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case aa:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case oa:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case la:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ca:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ha:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case da:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ua:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case fa:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case pa:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ma:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ga:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Fs:case xa:case _a:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Zl:case Sa:return Math.ceil(n/4)*Math.ceil(e/4)*8;case va:case ya:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Bg(n){switch(n){case xn:case Gl:return{byteLength:1,components:1};case Zi:case Hl:case Ki:return{byteLength:2,components:1};case Ra:case La:return{byteLength:2,components:4};case Yn:case Pa:case pn:return{byteLength:4,components:1};case Vl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function kg(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new De,h=new WeakMap;let d;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,b){return p?new OffscreenCanvas(C,b):Hs("canvas")}function x(C,b,k){let j=1;const K=Te(C);if((K.width>k||K.height>k)&&(j=k/Math.max(K.width,K.height)),j<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const $=Math.floor(j*K.width),Ce=Math.floor(j*K.height);d===void 0&&(d=g($,Ce));const le=b?g($,Ce):d;return le.width=$,le.height=Ce,le.getContext("2d").drawImage(C,0,0,$,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+$+"x"+Ce+")."),le}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),C;return C}function m(C){return C.generateMipmaps}function f(C){n.generateMipmap(C)}function E(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(C,b,k,j,K=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let $=b;if(b===n.RED&&(k===n.FLOAT&&($=n.R32F),k===n.HALF_FLOAT&&($=n.R16F),k===n.UNSIGNED_BYTE&&($=n.R8)),b===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&($=n.R8UI),k===n.UNSIGNED_SHORT&&($=n.R16UI),k===n.UNSIGNED_INT&&($=n.R32UI),k===n.BYTE&&($=n.R8I),k===n.SHORT&&($=n.R16I),k===n.INT&&($=n.R32I)),b===n.RG&&(k===n.FLOAT&&($=n.RG32F),k===n.HALF_FLOAT&&($=n.RG16F),k===n.UNSIGNED_BYTE&&($=n.RG8)),b===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&($=n.RG8UI),k===n.UNSIGNED_SHORT&&($=n.RG16UI),k===n.UNSIGNED_INT&&($=n.RG32UI),k===n.BYTE&&($=n.RG8I),k===n.SHORT&&($=n.RG16I),k===n.INT&&($=n.RG32I)),b===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&($=n.RGB8UI),k===n.UNSIGNED_SHORT&&($=n.RGB16UI),k===n.UNSIGNED_INT&&($=n.RGB32UI),k===n.BYTE&&($=n.RGB8I),k===n.SHORT&&($=n.RGB16I),k===n.INT&&($=n.RGB32I)),b===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&($=n.RGBA8UI),k===n.UNSIGNED_SHORT&&($=n.RGBA16UI),k===n.UNSIGNED_INT&&($=n.RGBA32UI),k===n.BYTE&&($=n.RGBA8I),k===n.SHORT&&($=n.RGBA16I),k===n.INT&&($=n.RGBA32I)),b===n.RGB&&k===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),b===n.RGBA){const Ce=K?qs:qe.getTransfer(j);k===n.FLOAT&&($=n.RGBA32F),k===n.HALF_FLOAT&&($=n.RGBA16F),k===n.UNSIGNED_BYTE&&($=Ce===Qe?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function v(C,b){let k;return C?b===null||b===Yn||b===Ai?k=n.DEPTH24_STENCIL8:b===pn?k=n.DEPTH32F_STENCIL8:b===Zi&&(k=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Yn||b===Ai?k=n.DEPTH_COMPONENT24:b===pn?k=n.DEPTH_COMPONENT32F:b===Zi&&(k=n.DEPTH_COMPONENT16),k}function L(C,b){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Zt&&C.minFilter!==en?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function w(C){const b=C.target;b.removeEventListener("dispose",w),N(b),b.isVideoTexture&&h.delete(b)}function A(C){const b=C.target;b.removeEventListener("dispose",A),_(b)}function N(C){const b=i.get(C);if(b.__webglInit===void 0)return;const k=C.source,j=u.get(k);if(j){const K=j[b.__cacheKey];K.usedTimes--,K.usedTimes===0&&y(C),Object.keys(j).length===0&&u.delete(k)}i.remove(C)}function y(C){const b=i.get(C);n.deleteTexture(b.__webglTexture);const k=C.source,j=u.get(k);delete j[b.__cacheKey],a.memory.textures--}function _(C){const b=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(b.__webglFramebuffer[j]))for(let K=0;K<b.__webglFramebuffer[j].length;K++)n.deleteFramebuffer(b.__webglFramebuffer[j][K]);else n.deleteFramebuffer(b.__webglFramebuffer[j]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[j])}else{if(Array.isArray(b.__webglFramebuffer))for(let j=0;j<b.__webglFramebuffer.length;j++)n.deleteFramebuffer(b.__webglFramebuffer[j]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let j=0;j<b.__webglColorRenderbuffer.length;j++)b.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[j]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const k=C.textures;for(let j=0,K=k.length;j<K;j++){const $=i.get(k[j]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),a.memory.textures--),i.remove(k[j])}i.remove(C)}let P=0;function T(){P=0}function R(){const C=P;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),P+=1,C}function I(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function V(C,b){const k=i.get(C);if(C.isVideoTexture&&Ae(C),C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){const j=C.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(k,C,b);return}}t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+b)}function H(C,b){const k=i.get(C);if(C.version>0&&k.__version!==C.version){q(k,C,b);return}t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+b)}function J(C,b){const k=i.get(C);if(C.version>0&&k.__version!==C.version){q(k,C,b);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+b)}function W(C,b){const k=i.get(C);if(C.version>0&&k.__version!==C.version){ne(k,C,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+b)}const se={[Yr]:n.REPEAT,[$n]:n.CLAMP_TO_EDGE,[jr]:n.MIRRORED_REPEAT},fe={[Zt]:n.NEAREST,[Md]:n.NEAREST_MIPMAP_NEAREST,[rs]:n.NEAREST_MIPMAP_LINEAR,[en]:n.LINEAR,[Qs]:n.LINEAR_MIPMAP_NEAREST,[qn]:n.LINEAR_MIPMAP_LINEAR},be={[Ad]:n.NEVER,[Id]:n.ALWAYS,[Pd]:n.LESS,[Jl]:n.LEQUAL,[Rd]:n.EQUAL,[Dd]:n.GEQUAL,[Ld]:n.GREATER,[Nd]:n.NOTEQUAL};function Fe(C,b){if(b.type===pn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===en||b.magFilter===Qs||b.magFilter===rs||b.magFilter===qn||b.minFilter===en||b.minFilter===Qs||b.minFilter===rs||b.minFilter===qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,se[b.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,se[b.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,se[b.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,fe[b.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,fe[b.minFilter]),b.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,be[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Zt||b.minFilter!==rs&&b.minFilter!==qn||b.type===pn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function tt(C,b){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",w));const j=b.source;let K=u.get(j);K===void 0&&(K={},u.set(j,K));const $=I(b);if($!==C.__cacheKey){K[$]===void 0&&(K[$]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,k=!0),K[$].usedTimes++;const Ce=K[C.__cacheKey];Ce!==void 0&&(K[C.__cacheKey].usedTimes--,Ce.usedTimes===0&&y(b)),C.__cacheKey=$,C.__webglTexture=K[$].texture}return k}function q(C,b,k){let j=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(j=n.TEXTURE_3D);const K=tt(C,b),$=b.source;t.bindTexture(j,C.__webglTexture,n.TEXTURE0+k);const Ce=i.get($);if($.version!==Ce.__version||K===!0){t.activeTexture(n.TEXTURE0+k);const le=qe.getPrimaries(qe.workingColorSpace),me=b.colorSpace===An?null:qe.getPrimaries(b.colorSpace),$e=b.colorSpace===An||le===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let Q=x(b.image,!1,s.maxTextureSize);Q=st(b,Q);const ge=r.convert(b.format,b.colorSpace),Pe=r.convert(b.type);let Le=S(b.internalFormat,ge,Pe,b.colorSpace,b.isVideoTexture);Fe(j,b);let xe;const We=b.mipmaps,ke=b.isVideoTexture!==!0,nt=Ce.__version===void 0||K===!0,D=$.dataReady,ae=L(b,Q);if(b.isDepthTexture)Le=v(b.format===Pi,b.type),nt&&(ke?t.texStorage2D(n.TEXTURE_2D,1,Le,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,Le,Q.width,Q.height,0,ge,Pe,null));else if(b.isDataTexture)if(We.length>0){ke&&nt&&t.texStorage2D(n.TEXTURE_2D,ae,Le,We[0].width,We[0].height);for(let X=0,Z=We.length;X<Z;X++)xe=We[X],ke?D&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,xe.width,xe.height,ge,Pe,xe.data):t.texImage2D(n.TEXTURE_2D,X,Le,xe.width,xe.height,0,ge,Pe,xe.data);b.generateMipmaps=!1}else ke?(nt&&t.texStorage2D(n.TEXTURE_2D,ae,Le,Q.width,Q.height),D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Q.width,Q.height,ge,Pe,Q.data)):t.texImage2D(n.TEXTURE_2D,0,Le,Q.width,Q.height,0,ge,Pe,Q.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ke&&nt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ae,Le,We[0].width,We[0].height,Q.depth);for(let X=0,Z=We.length;X<Z;X++)if(xe=We[X],b.format!==jt)if(ge!==null)if(ke){if(D)if(b.layerUpdates.size>0){const de=al(xe.width,xe.height,b.format,b.type);for(const ce of b.layerUpdates){const Oe=xe.data.subarray(ce*de/xe.data.BYTES_PER_ELEMENT,(ce+1)*de/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,ce,xe.width,xe.height,1,ge,Oe)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,xe.width,xe.height,Q.depth,ge,xe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,X,Le,xe.width,xe.height,Q.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?D&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,xe.width,xe.height,Q.depth,ge,Pe,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,X,Le,xe.width,xe.height,Q.depth,0,ge,Pe,xe.data)}else{ke&&nt&&t.texStorage2D(n.TEXTURE_2D,ae,Le,We[0].width,We[0].height);for(let X=0,Z=We.length;X<Z;X++)xe=We[X],b.format!==jt?ge!==null?ke?D&&t.compressedTexSubImage2D(n.TEXTURE_2D,X,0,0,xe.width,xe.height,ge,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,X,Le,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?D&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,xe.width,xe.height,ge,Pe,xe.data):t.texImage2D(n.TEXTURE_2D,X,Le,xe.width,xe.height,0,ge,Pe,xe.data)}else if(b.isDataArrayTexture)if(ke){if(nt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ae,Le,Q.width,Q.height,Q.depth),D)if(b.layerUpdates.size>0){const X=al(Q.width,Q.height,b.format,b.type);for(const Z of b.layerUpdates){const de=Q.data.subarray(Z*X/Q.data.BYTES_PER_ELEMENT,(Z+1)*X/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Z,Q.width,Q.height,1,ge,Pe,de)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ge,Pe,Q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Le,Q.width,Q.height,Q.depth,0,ge,Pe,Q.data);else if(b.isData3DTexture)ke?(nt&&t.texStorage3D(n.TEXTURE_3D,ae,Le,Q.width,Q.height,Q.depth),D&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ge,Pe,Q.data)):t.texImage3D(n.TEXTURE_3D,0,Le,Q.width,Q.height,Q.depth,0,ge,Pe,Q.data);else if(b.isFramebufferTexture){if(nt)if(ke)t.texStorage2D(n.TEXTURE_2D,ae,Le,Q.width,Q.height);else{let X=Q.width,Z=Q.height;for(let de=0;de<ae;de++)t.texImage2D(n.TEXTURE_2D,de,Le,X,Z,0,ge,Pe,null),X>>=1,Z>>=1}}else if(We.length>0){if(ke&&nt){const X=Te(We[0]);t.texStorage2D(n.TEXTURE_2D,ae,Le,X.width,X.height)}for(let X=0,Z=We.length;X<Z;X++)xe=We[X],ke?D&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,ge,Pe,xe):t.texImage2D(n.TEXTURE_2D,X,Le,ge,Pe,xe);b.generateMipmaps=!1}else if(ke){if(nt){const X=Te(Q);t.texStorage2D(n.TEXTURE_2D,ae,Le,X.width,X.height)}D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge,Pe,Q)}else t.texImage2D(n.TEXTURE_2D,0,Le,ge,Pe,Q);m(b)&&f(j),Ce.__version=$.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function ne(C,b,k){if(b.image.length!==6)return;const j=tt(C,b),K=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+k);const $=i.get(K);if(K.version!==$.__version||j===!0){t.activeTexture(n.TEXTURE0+k);const Ce=qe.getPrimaries(qe.workingColorSpace),le=b.colorSpace===An?null:qe.getPrimaries(b.colorSpace),me=b.colorSpace===An||Ce===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const $e=b.isCompressedTexture||b.image[0].isCompressedTexture,Q=b.image[0]&&b.image[0].isDataTexture,ge=[];for(let Z=0;Z<6;Z++)!$e&&!Q?ge[Z]=x(b.image[Z],!0,s.maxCubemapSize):ge[Z]=Q?b.image[Z].image:b.image[Z],ge[Z]=st(b,ge[Z]);const Pe=ge[0],Le=r.convert(b.format,b.colorSpace),xe=r.convert(b.type),We=S(b.internalFormat,Le,xe,b.colorSpace),ke=b.isVideoTexture!==!0,nt=$.__version===void 0||j===!0,D=K.dataReady;let ae=L(b,Pe);Fe(n.TEXTURE_CUBE_MAP,b);let X;if($e){ke&&nt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ae,We,Pe.width,Pe.height);for(let Z=0;Z<6;Z++){X=ge[Z].mipmaps;for(let de=0;de<X.length;de++){const ce=X[de];b.format!==jt?Le!==null?ke?D&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de,0,0,ce.width,ce.height,Le,ce.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de,We,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de,0,0,ce.width,ce.height,Le,xe,ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de,We,ce.width,ce.height,0,Le,xe,ce.data)}}}else{if(X=b.mipmaps,ke&&nt){X.length>0&&ae++;const Z=Te(ge[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ae,We,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(Q){ke?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ge[Z].width,ge[Z].height,Le,xe,ge[Z].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,We,ge[Z].width,ge[Z].height,0,Le,xe,ge[Z].data);for(let de=0;de<X.length;de++){const Oe=X[de].image[Z].image;ke?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de+1,0,0,Oe.width,Oe.height,Le,xe,Oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de+1,We,Oe.width,Oe.height,0,Le,xe,Oe.data)}}else{ke?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Le,xe,ge[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,We,Le,xe,ge[Z]);for(let de=0;de<X.length;de++){const ce=X[de];ke?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de+1,0,0,Le,xe,ce.image[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de+1,We,Le,xe,ce.image[Z])}}}m(b)&&f(n.TEXTURE_CUBE_MAP),$.__version=K.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Ee(C,b,k,j,K,$){const Ce=r.convert(k.format,k.colorSpace),le=r.convert(k.type),me=S(k.internalFormat,Ce,le,k.colorSpace),$e=i.get(b),Q=i.get(k);if(Q.__renderTarget=b,!$e.__hasExternalTextures){const ge=Math.max(1,b.width>>$),Pe=Math.max(1,b.height>>$);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,$,me,ge,Pe,b.depth,0,Ce,le,null):t.texImage2D(K,$,me,ge,Pe,0,Ce,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),Ve(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,K,Q.__webglTexture,0,He(b)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,K,Q.__webglTexture,$),t.bindFramebuffer(n.FRAMEBUFFER,null)}function oe(C,b,k){if(n.bindRenderbuffer(n.RENDERBUFFER,C),b.depthBuffer){const j=b.depthTexture,K=j&&j.isDepthTexture?j.type:null,$=v(b.stencilBuffer,K),Ce=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=He(b);Ve(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,$,b.width,b.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,$,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,$,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ce,n.RENDERBUFFER,C)}else{const j=b.textures;for(let K=0;K<j.length;K++){const $=j[K],Ce=r.convert($.format,$.colorSpace),le=r.convert($.type),me=S($.internalFormat,Ce,le,$.colorSpace),$e=He(b);k&&Ve(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,$e,me,b.width,b.height):Ve(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,$e,me,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,me,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Re(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=i.get(b.depthTexture);j.__renderTarget=b,(!j.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),V(b.depthTexture,0);const K=j.__webglTexture,$=He(b);if(b.depthTexture.format===bi)Ve(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0);else if(b.depthTexture.format===Pi)Ve(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Ie(C){const b=i.get(C),k=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){const j=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),j){const K=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,j.removeEventListener("dispose",K)};j.addEventListener("dispose",K),b.__depthDisposeCallback=K}b.__boundDepthTexture=j}if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Re(b.__webglFramebuffer,C)}else if(k){b.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[j]),b.__webglDepthbuffer[j]===void 0)b.__webglDepthbuffer[j]=n.createRenderbuffer(),oe(b.__webglDepthbuffer[j],C,!1);else{const K=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=b.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,$)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),oe(b.__webglDepthbuffer,C,!1);else{const j=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,K)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ge(C,b,k){const j=i.get(C);b!==void 0&&Ee(j.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&Ie(C)}function lt(C){const b=C.texture,k=i.get(C),j=i.get(b);C.addEventListener("dispose",A);const K=C.textures,$=C.isWebGLCubeRenderTarget===!0,Ce=K.length>1;if(Ce||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=b.version,a.memory.textures++),$){k.__webglFramebuffer=[];for(let le=0;le<6;le++)if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer[le]=[];for(let me=0;me<b.mipmaps.length;me++)k.__webglFramebuffer[le][me]=n.createFramebuffer()}else k.__webglFramebuffer[le]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer=[];for(let le=0;le<b.mipmaps.length;le++)k.__webglFramebuffer[le]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(Ce)for(let le=0,me=K.length;le<me;le++){const $e=i.get(K[le]);$e.__webglTexture===void 0&&($e.__webglTexture=n.createTexture(),a.memory.textures++)}if(C.samples>0&&Ve(C)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let le=0;le<K.length;le++){const me=K[le];k.__webglColorRenderbuffer[le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[le]);const $e=r.convert(me.format,me.colorSpace),Q=r.convert(me.type),ge=S(me.internalFormat,$e,Q,me.colorSpace,C.isXRRenderTarget===!0),Pe=He(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,ge,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,k.__webglColorRenderbuffer[le])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),oe(k.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),Fe(n.TEXTURE_CUBE_MAP,b);for(let le=0;le<6;le++)if(b.mipmaps&&b.mipmaps.length>0)for(let me=0;me<b.mipmaps.length;me++)Ee(k.__webglFramebuffer[le][me],C,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,me);else Ee(k.__webglFramebuffer[le],C,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(b)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let le=0,me=K.length;le<me;le++){const $e=K[le],Q=i.get($e);t.bindTexture(n.TEXTURE_2D,Q.__webglTexture),Fe(n.TEXTURE_2D,$e),Ee(k.__webglFramebuffer,C,$e,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,0),m($e)&&f(n.TEXTURE_2D)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(le=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,j.__webglTexture),Fe(le,b),b.mipmaps&&b.mipmaps.length>0)for(let me=0;me<b.mipmaps.length;me++)Ee(k.__webglFramebuffer[me],C,b,n.COLOR_ATTACHMENT0,le,me);else Ee(k.__webglFramebuffer,C,b,n.COLOR_ATTACHMENT0,le,0);m(b)&&f(le),t.unbindTexture()}C.depthBuffer&&Ie(C)}function Xe(C){const b=C.textures;for(let k=0,j=b.length;k<j;k++){const K=b[k];if(m(K)){const $=E(C),Ce=i.get(K).__webglTexture;t.bindTexture($,Ce),f($),t.unbindTexture()}}}const dt=[],U=[];function Ot(C){if(C.samples>0){if(Ve(C)===!1){const b=C.textures,k=C.width,j=C.height;let K=n.COLOR_BUFFER_BIT;const $=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ce=i.get(C),le=b.length>1;if(le)for(let me=0;me<b.length;me++)t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let me=0;me<b.length;me++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),le){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[me]);const $e=i.get(b[me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,$e,0)}n.blitFramebuffer(0,0,k,j,0,0,k,j,K,n.NEAREST),l===!0&&(dt.length=0,U.length=0,dt.push(n.COLOR_ATTACHMENT0+me),C.depthBuffer&&C.resolveDepthBuffer===!1&&(dt.push($),U.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,U)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,dt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),le)for(let me=0;me<b.length;me++){t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[me]);const $e=i.get(b[me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,$e,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const b=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function He(C){return Math.min(s.maxSamples,C.samples)}function Ve(C){const b=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ae(C){const b=a.render.frame;h.get(C)!==b&&(h.set(C,b),C.update())}function st(C,b){const k=C.colorSpace,j=C.format,K=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==Li&&k!==An&&(qe.getTransfer(k)===Qe?(j!==jt||K!==xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),b}function Te(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=R,this.resetTextureUnits=T,this.setTexture2D=V,this.setTexture2DArray=H,this.setTexture3D=J,this.setTextureCube=W,this.rebindTextures=Ge,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=Ve}function zg(n,e){function t(i,s=An){let r;const a=qe.getTransfer(s);if(i===xn)return n.UNSIGNED_BYTE;if(i===Ra)return n.UNSIGNED_SHORT_4_4_4_4;if(i===La)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Vl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Gl)return n.BYTE;if(i===Hl)return n.SHORT;if(i===Zi)return n.UNSIGNED_SHORT;if(i===Pa)return n.INT;if(i===Yn)return n.UNSIGNED_INT;if(i===pn)return n.FLOAT;if(i===Ki)return n.HALF_FLOAT;if(i===Wl)return n.ALPHA;if(i===Xl)return n.RGB;if(i===jt)return n.RGBA;if(i===$l)return n.LUMINANCE;if(i===ql)return n.LUMINANCE_ALPHA;if(i===bi)return n.DEPTH_COMPONENT;if(i===Pi)return n.DEPTH_STENCIL;if(i===Yl)return n.RED;if(i===Na)return n.RED_INTEGER;if(i===jl)return n.RG;if(i===Da)return n.RG_INTEGER;if(i===Ia)return n.RGBA_INTEGER;if(i===Ls||i===Ns||i===Ds||i===Is)if(a===Qe)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ls)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ns)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ds)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Is)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ls)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ns)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ds)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Is)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Zr||i===Kr||i===Jr||i===Qr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Zr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Kr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Jr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Qr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ea||i===ta||i===na)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ea||i===ta)return a===Qe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===na)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ia||i===sa||i===ra||i===aa||i===oa||i===la||i===ca||i===ha||i===da||i===ua||i===fa||i===pa||i===ma||i===ga)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ia)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===sa)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ra)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===aa)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===oa)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===la)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ca)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ha)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===da)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ua)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===fa)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===pa)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ma)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ga)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Fs||i===xa||i===_a)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Fs)return a===Qe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===xa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===_a)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Zl||i===Sa||i===va||i===ya)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Fs)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Sa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===va)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ya)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ai?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Gg extends Et{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Yi extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Hg={type:"move"};class Tr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Hg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Yi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Vg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Xg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Pt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new In({vertexShader:Vg,fragmentShader:Wg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Tt(new js(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $g extends Jn{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,g=null;const x=new Xg,m=t.getContextAttributes();let f=null,E=null;const S=[],v=[],L=new De;let w=null;const A=new Et;A.viewport=new ht;const N=new Et;N.viewport=new ht;const y=[A,N],_=new Gg;let P=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ne=S[q];return ne===void 0&&(ne=new Tr,S[q]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(q){let ne=S[q];return ne===void 0&&(ne=new Tr,S[q]=ne),ne.getGripSpace()},this.getHand=function(q){let ne=S[q];return ne===void 0&&(ne=new Tr,S[q]=ne),ne.getHandSpace()};function R(q){const ne=v.indexOf(q.inputSource);if(ne===-1)return;const Ee=S[ne];Ee!==void 0&&(Ee.update(q.inputSource,q.frame,c||a),Ee.dispatchEvent({type:q.type,data:q.inputSource}))}function I(){s.removeEventListener("select",R),s.removeEventListener("selectstart",R),s.removeEventListener("selectend",R),s.removeEventListener("squeeze",R),s.removeEventListener("squeezestart",R),s.removeEventListener("squeezeend",R),s.removeEventListener("end",I),s.removeEventListener("inputsourceschange",V);for(let q=0;q<S.length;q++){const ne=v[q];ne!==null&&(v[q]=null,S[q].disconnect(ne))}P=null,T=null,x.reset(),e.setRenderTarget(f),p=null,u=null,d=null,s=null,E=null,tt.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",R),s.addEventListener("selectstart",R),s.addEventListener("selectend",R),s.addEventListener("squeeze",R),s.addEventListener("squeezestart",R),s.addEventListener("squeezeend",R),s.addEventListener("end",I),s.addEventListener("inputsourceschange",V),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(L),s.renderState.layers===void 0){const ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ne),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new jn(p.framebufferWidth,p.framebufferHeight,{format:jt,type:xn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,Ee=null,oe=null;m.depth&&(oe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=m.stencil?Pi:bi,Ee=m.stencil?Ai:Yn);const Re={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:r};d=new XRWebGLBinding(s,t),u=d.createProjectionLayer(Re),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),E=new jn(u.textureWidth,u.textureHeight,{format:jt,type:xn,depthTexture:new dc(u.textureWidth,u.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),tt.setContext(s),tt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function V(q){for(let ne=0;ne<q.removed.length;ne++){const Ee=q.removed[ne],oe=v.indexOf(Ee);oe>=0&&(v[oe]=null,S[oe].disconnect(Ee))}for(let ne=0;ne<q.added.length;ne++){const Ee=q.added[ne];let oe=v.indexOf(Ee);if(oe===-1){for(let Ie=0;Ie<S.length;Ie++)if(Ie>=v.length){v.push(Ee),oe=Ie;break}else if(v[Ie]===null){v[Ie]=Ee,oe=Ie;break}if(oe===-1)break}const Re=S[oe];Re&&Re.connect(Ee)}}const H=new B,J=new B;function W(q,ne,Ee){H.setFromMatrixPosition(ne.matrixWorld),J.setFromMatrixPosition(Ee.matrixWorld);const oe=H.distanceTo(J),Re=ne.projectionMatrix.elements,Ie=Ee.projectionMatrix.elements,Ge=Re[14]/(Re[10]-1),lt=Re[14]/(Re[10]+1),Xe=(Re[9]+1)/Re[5],dt=(Re[9]-1)/Re[5],U=(Re[8]-1)/Re[0],Ot=(Ie[8]+1)/Ie[0],He=Ge*U,Ve=Ge*Ot,Ae=oe/(-U+Ot),st=Ae*-U;if(ne.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(st),q.translateZ(Ae),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Re[10]===-1)q.projectionMatrix.copy(ne.projectionMatrix),q.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const Te=Ge+Ae,C=lt+Ae,b=He-st,k=Ve+(oe-st),j=Xe*lt/C*Te,K=dt*lt/C*Te;q.projectionMatrix.makePerspective(b,k,j,K,Te,C),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function se(q,ne){ne===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ne.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let ne=q.near,Ee=q.far;x.texture!==null&&(x.depthNear>0&&(ne=x.depthNear),x.depthFar>0&&(Ee=x.depthFar)),_.near=N.near=A.near=ne,_.far=N.far=A.far=Ee,(P!==_.near||T!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),P=_.near,T=_.far),A.layers.mask=q.layers.mask|2,N.layers.mask=q.layers.mask|4,_.layers.mask=A.layers.mask|N.layers.mask;const oe=q.parent,Re=_.cameras;se(_,oe);for(let Ie=0;Ie<Re.length;Ie++)se(Re[Ie],oe);Re.length===2?W(_,A,N):_.projectionMatrix.copy(A.projectionMatrix),fe(q,_,oe)};function fe(q,ne,Ee){Ee===null?q.matrix.copy(ne.matrixWorld):(q.matrix.copy(Ee.matrixWorld),q.matrix.invert(),q.matrix.multiply(ne.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ne.projectionMatrix),q.projectionMatrixInverse.copy(ne.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ba*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(q){l=q,u!==null&&(u.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let be=null;function Fe(q,ne){if(h=ne.getViewerPose(c||a),g=ne,h!==null){const Ee=h.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let oe=!1;Ee.length!==_.cameras.length&&(_.cameras.length=0,oe=!0);for(let Ie=0;Ie<Ee.length;Ie++){const Ge=Ee[Ie];let lt=null;if(p!==null)lt=p.getViewport(Ge);else{const dt=d.getViewSubImage(u,Ge);lt=dt.viewport,Ie===0&&(e.setRenderTargetTextures(E,dt.colorTexture,u.ignoreDepthValues?void 0:dt.depthStencilTexture),e.setRenderTarget(E))}let Xe=y[Ie];Xe===void 0&&(Xe=new Et,Xe.layers.enable(Ie),Xe.viewport=new ht,y[Ie]=Xe),Xe.matrix.fromArray(Ge.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(Ge.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(lt.x,lt.y,lt.width,lt.height),Ie===0&&(_.matrix.copy(Xe.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),oe===!0&&_.cameras.push(Xe)}const Re=s.enabledFeatures;if(Re&&Re.includes("depth-sensing")){const Ie=d.getDepthInformation(Ee[0]);Ie&&Ie.isValid&&Ie.texture&&x.init(e,Ie,s.renderState)}}for(let Ee=0;Ee<S.length;Ee++){const oe=v[Ee],Re=S[Ee];oe!==null&&Re!==void 0&&Re.update(oe,ne,c||a)}be&&be(q,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),g=null}const tt=new hc;tt.setAnimationLoop(Fe),this.setAnimationLoop=function(q){be=q},this.dispose=function(){}}}const Gn=new nn,qg=new ot;function Yg(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,oc(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,E,S,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),x(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,E,S):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===At&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===At&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const E=e.get(f),S=E.envMap,v=E.envMapRotation;S&&(m.envMap.value=S,Gn.copy(v),Gn.x*=-1,Gn.y*=-1,Gn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Gn.y*=-1,Gn.z*=-1),m.envMapRotation.value.setFromMatrix4(qg.makeRotationFromEuler(Gn)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,E,S){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*E,m.scale.value=S*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,E){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===At&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const E=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function jg(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,S){const v=S.program;i.uniformBlockBinding(E,v)}function c(E,S){let v=s[E.id];v===void 0&&(g(E),v=h(E),s[E.id]=v,E.addEventListener("dispose",m));const L=S.program;i.updateUBOMapping(E,L);const w=e.render.frame;r[E.id]!==w&&(u(E),r[E.id]=w)}function h(E){const S=d();E.__bindingPointIndex=S;const v=n.createBuffer(),L=E.__size,w=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,L,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,v),v}function d(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(E){const S=s[E.id],v=E.uniforms,L=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let w=0,A=v.length;w<A;w++){const N=Array.isArray(v[w])?v[w]:[v[w]];for(let y=0,_=N.length;y<_;y++){const P=N[y];if(p(P,w,y,L)===!0){const T=P.__offset,R=Array.isArray(P.value)?P.value:[P.value];let I=0;for(let V=0;V<R.length;V++){const H=R[V],J=x(H);typeof H=="number"||typeof H=="boolean"?(P.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,T+I,P.__data)):H.isMatrix3?(P.__data[0]=H.elements[0],P.__data[1]=H.elements[1],P.__data[2]=H.elements[2],P.__data[3]=0,P.__data[4]=H.elements[3],P.__data[5]=H.elements[4],P.__data[6]=H.elements[5],P.__data[7]=0,P.__data[8]=H.elements[6],P.__data[9]=H.elements[7],P.__data[10]=H.elements[8],P.__data[11]=0):(H.toArray(P.__data,I),I+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,T,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(E,S,v,L){const w=E.value,A=S+"_"+v;if(L[A]===void 0)return typeof w=="number"||typeof w=="boolean"?L[A]=w:L[A]=w.clone(),!0;{const N=L[A];if(typeof w=="number"||typeof w=="boolean"){if(N!==w)return L[A]=w,!0}else if(N.equals(w)===!1)return N.copy(w),!0}return!1}function g(E){const S=E.uniforms;let v=0;const L=16;for(let A=0,N=S.length;A<N;A++){const y=Array.isArray(S[A])?S[A]:[S[A]];for(let _=0,P=y.length;_<P;_++){const T=y[_],R=Array.isArray(T.value)?T.value:[T.value];for(let I=0,V=R.length;I<V;I++){const H=R[I],J=x(H),W=v%L,se=W%J.boundary,fe=W+se;v+=se,fe!==0&&L-fe<J.storage&&(v+=L-fe),T.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=v,v+=J.storage}}}const w=v%L;return w>0&&(v+=L-w),E.__size=v,E.__cache={},this}function x(E){const S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),S}function m(E){const S=E.target;S.removeEventListener("dispose",m);const v=a.indexOf(S.__bindingPointIndex);a.splice(v,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function f(){for(const E in s)n.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}class Zg{constructor(e={}){const{canvas:t=Ud(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,f=null;const E=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=zt,this.toneMapping=Nn,this.toneMappingExposure=1;const v=this;let L=!1,w=0,A=0,N=null,y=-1,_=null;const P=new ht,T=new ht;let R=null;const I=new Ye(0);let V=0,H=t.width,J=t.height,W=1,se=null,fe=null;const be=new ht(0,0,H,J),Fe=new ht(0,0,H,J);let tt=!1;const q=new Oa;let ne=!1,Ee=!1;const oe=new ot,Re=new ot,Ie=new B,Ge=new ht,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function dt(){return N===null?W:1}let U=i;function Ot(M,F){return t.getContext(M,F)}try{const M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Aa}`),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",de,!1),t.addEventListener("webglcontextcreationerror",ce,!1),U===null){const F="webgl2";if(U=Ot(F,M),U===null)throw Ot(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let He,Ve,Ae,st,Te,C,b,k,j,K,$,Ce,le,me,$e,Q,ge,Pe,Le,xe,We,ke,nt,D;function ae(){He=new tm(U),He.init(),ke=new zg(U,He),Ve=new jp(U,He,e,ke),Ae=new Ug(U,He),Ve.reverseDepthBuffer&&u&&Ae.buffers.depth.setReversed(!0),st=new sm(U),Te=new bg,C=new kg(U,He,Ae,Te,Ve,ke,st),b=new Kp(v),k=new em(v),j=new hu(U),nt=new qp(U,j),K=new nm(U,j,st,nt),$=new am(U,K,j,st),Le=new rm(U,Ve,C),Q=new Zp(Te),Ce=new yg(v,b,k,He,Ve,nt,Q),le=new Yg(v,Te),me=new Mg,$e=new Rg(He),Pe=new $p(v,b,k,Ae,$,p,l),ge=new Fg(v,$,Ve),D=new jg(U,st,Ve,Ae),xe=new Yp(U,He,st),We=new im(U,He,st),st.programs=Ce.programs,v.capabilities=Ve,v.extensions=He,v.properties=Te,v.renderLists=me,v.shadowMap=ge,v.state=Ae,v.info=st}ae();const X=new $g(v,U);this.xr=X,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const M=He.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=He.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(M){M!==void 0&&(W=M,this.setSize(H,J,!1))},this.getSize=function(M){return M.set(H,J)},this.setSize=function(M,F,z=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=M,J=F,t.width=Math.floor(M*W),t.height=Math.floor(F*W),z===!0&&(t.style.width=M+"px",t.style.height=F+"px"),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(H*W,J*W).floor()},this.setDrawingBufferSize=function(M,F,z){H=M,J=F,W=z,t.width=Math.floor(M*z),t.height=Math.floor(F*z),this.setViewport(0,0,M,F)},this.getCurrentViewport=function(M){return M.copy(P)},this.getViewport=function(M){return M.copy(be)},this.setViewport=function(M,F,z,G){M.isVector4?be.set(M.x,M.y,M.z,M.w):be.set(M,F,z,G),Ae.viewport(P.copy(be).multiplyScalar(W).round())},this.getScissor=function(M){return M.copy(Fe)},this.setScissor=function(M,F,z,G){M.isVector4?Fe.set(M.x,M.y,M.z,M.w):Fe.set(M,F,z,G),Ae.scissor(T.copy(Fe).multiplyScalar(W).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(M){Ae.setScissorTest(tt=M)},this.setOpaqueSort=function(M){se=M},this.setTransparentSort=function(M){fe=M},this.getClearColor=function(M){return M.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(M=!0,F=!0,z=!0){let G=0;if(M){let O=!1;if(N!==null){const te=N.texture.format;O=te===Ia||te===Da||te===Na}if(O){const te=N.texture.type,he=te===xn||te===Yn||te===Zi||te===Ai||te===Ra||te===La,Se=Pe.getClearColor(),ve=Pe.getClearAlpha(),Ne=Se.r,Ue=Se.g,ye=Se.b;he?(g[0]=Ne,g[1]=Ue,g[2]=ye,g[3]=ve,U.clearBufferuiv(U.COLOR,0,g)):(x[0]=Ne,x[1]=Ue,x[2]=ye,x[3]=ve,U.clearBufferiv(U.COLOR,0,x))}else G|=U.COLOR_BUFFER_BIT}F&&(G|=U.DEPTH_BUFFER_BIT),z&&(G|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",de,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),me.dispose(),$e.dispose(),Te.dispose(),b.dispose(),k.dispose(),$.dispose(),nt.dispose(),D.dispose(),Ce.dispose(),X.dispose(),X.removeEventListener("sessionstart",Va),X.removeEventListener("sessionend",Wa),Fn.stop()};function Z(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const M=st.autoReset,F=ge.enabled,z=ge.autoUpdate,G=ge.needsUpdate,O=ge.type;ae(),st.autoReset=M,ge.enabled=F,ge.autoUpdate=z,ge.needsUpdate=G,ge.type=O}function ce(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Oe(M){const F=M.target;F.removeEventListener("dispose",Oe),ct(F)}function ct(M){_t(M),Te.remove(M)}function _t(M){const F=Te.get(M).programs;F!==void 0&&(F.forEach(function(z){Ce.releaseProgram(z)}),M.isShaderMaterial&&Ce.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,z,G,O,te){F===null&&(F=lt);const he=O.isMesh&&O.matrixWorld.determinant()<0,Se=Mc(M,F,z,G,O);Ae.setMaterial(G,he);let ve=z.index,Ne=1;if(G.wireframe===!0){if(ve=K.getWireframeAttribute(z),ve===void 0)return;Ne=2}const Ue=z.drawRange,ye=z.attributes.position;let je=Ue.start*Ne,it=(Ue.start+Ue.count)*Ne;te!==null&&(je=Math.max(je,te.start*Ne),it=Math.min(it,(te.start+te.count)*Ne)),ve!==null?(je=Math.max(je,0),it=Math.min(it,ve.count)):ye!=null&&(je=Math.max(je,0),it=Math.min(it,ye.count));const rt=it-je;if(rt<0||rt===1/0)return;nt.setup(O,G,Se,z,ve);let Mt,Ze=xe;if(ve!==null&&(Mt=j.get(ve),Ze=We,Ze.setIndex(Mt)),O.isMesh)G.wireframe===!0?(Ae.setLineWidth(G.wireframeLinewidth*dt()),Ze.setMode(U.LINES)):Ze.setMode(U.TRIANGLES);else if(O.isLine){let we=G.linewidth;we===void 0&&(we=1),Ae.setLineWidth(we*dt()),O.isLineSegments?Ze.setMode(U.LINES):O.isLineLoop?Ze.setMode(U.LINE_LOOP):Ze.setMode(U.LINE_STRIP)}else O.isPoints?Ze.setMode(U.POINTS):O.isSprite&&Ze.setMode(U.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Ze.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))Ze.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const we=O._multiDrawStarts,an=O._multiDrawCounts,Ke=O._multiDrawCount,Vt=ve?j.get(ve).bytesPerElement:1,Qn=Te.get(G).currentProgram.getUniforms();for(let Rt=0;Rt<Ke;Rt++)Qn.setValue(U,"_gl_DrawID",Rt),Ze.render(we[Rt]/Vt,an[Rt])}else if(O.isInstancedMesh)Ze.renderInstances(je,rt,O.count);else if(z.isInstancedBufferGeometry){const we=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,an=Math.min(z.instanceCount,we);Ze.renderInstances(je,rt,an)}else Ze.render(je,rt)};function Je(M,F,z){M.transparent===!0&&M.side===fn&&M.forceSinglePass===!1?(M.side=At,M.needsUpdate=!0,ts(M,F,z),M.side=Dn,M.needsUpdate=!0,ts(M,F,z),M.side=fn):ts(M,F,z)}this.compile=function(M,F,z=null){z===null&&(z=M),f=$e.get(z),f.init(F),S.push(f),z.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),M!==z&&M.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),f.setupLights();const G=new Set;return M.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const te=O.material;if(te)if(Array.isArray(te))for(let he=0;he<te.length;he++){const Se=te[he];Je(Se,z,O),G.add(Se)}else Je(te,z,O),G.add(te)}),S.pop(),f=null,G},this.compileAsync=function(M,F,z=null){const G=this.compile(M,F,z);return new Promise(O=>{function te(){if(G.forEach(function(he){Te.get(he).currentProgram.isReady()&&G.delete(he)}),G.size===0){O(M);return}setTimeout(te,10)}He.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let Ht=null;function rn(M){Ht&&Ht(M)}function Va(){Fn.stop()}function Wa(){Fn.start()}const Fn=new hc;Fn.setAnimationLoop(rn),typeof self<"u"&&Fn.setContext(self),this.setAnimationLoop=function(M){Ht=M,X.setAnimationLoop(M),M===null?Fn.stop():Fn.start()},X.addEventListener("sessionstart",Va),X.addEventListener("sessionend",Wa),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(F),F=X.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,F,N),f=$e.get(M,S.length),f.init(F),S.push(f),Re.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),q.setFromProjectionMatrix(Re),Ee=this.localClippingEnabled,ne=Q.init(this.clippingPlanes,Ee),m=me.get(M,E.length),m.init(),E.push(m),X.enabled===!0&&X.isPresenting===!0){const te=v.xr.getDepthSensingMesh();te!==null&&Ks(te,F,-1/0,v.sortObjects)}Ks(M,F,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(se,fe),Xe=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Xe&&Pe.addToRenderList(m,M),this.info.render.frame++,ne===!0&&Q.beginShadows();const z=f.state.shadowsArray;ge.render(z,M,F),ne===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,O=m.transmissive;if(f.setupLights(),F.isArrayCamera){const te=F.cameras;if(O.length>0)for(let he=0,Se=te.length;he<Se;he++){const ve=te[he];$a(G,O,M,ve)}Xe&&Pe.render(M);for(let he=0,Se=te.length;he<Se;he++){const ve=te[he];Xa(m,M,ve,ve.viewport)}}else O.length>0&&$a(G,O,M,F),Xe&&Pe.render(M),Xa(m,M,F);N!==null&&(C.updateMultisampleRenderTarget(N),C.updateRenderTargetMipmap(N)),M.isScene===!0&&M.onAfterRender(v,M,F),nt.resetDefaultState(),y=-1,_=null,S.pop(),S.length>0?(f=S[S.length-1],ne===!0&&Q.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Ks(M,F,z,G){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLight)f.pushLight(M),M.castShadow&&f.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||q.intersectsSprite(M)){G&&Ge.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Re);const he=$.update(M),Se=M.material;Se.visible&&m.push(M,he,Se,z,Ge.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||q.intersectsObject(M))){const he=$.update(M),Se=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ge.copy(M.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),Ge.copy(he.boundingSphere.center)),Ge.applyMatrix4(M.matrixWorld).applyMatrix4(Re)),Array.isArray(Se)){const ve=he.groups;for(let Ne=0,Ue=ve.length;Ne<Ue;Ne++){const ye=ve[Ne],je=Se[ye.materialIndex];je&&je.visible&&m.push(M,he,je,z,Ge.z,ye)}}else Se.visible&&m.push(M,he,Se,z,Ge.z,null)}}const te=M.children;for(let he=0,Se=te.length;he<Se;he++)Ks(te[he],F,z,G)}function Xa(M,F,z,G){const O=M.opaque,te=M.transmissive,he=M.transparent;f.setupLightsView(z),ne===!0&&Q.setGlobalState(v.clippingPlanes,z),G&&Ae.viewport(P.copy(G)),O.length>0&&es(O,F,z),te.length>0&&es(te,F,z),he.length>0&&es(he,F,z),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function $a(M,F,z,G){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[G.id]===void 0&&(f.state.transmissionRenderTarget[G.id]=new jn(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?Ki:xn,minFilter:qn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace}));const te=f.state.transmissionRenderTarget[G.id],he=G.viewport||P;te.setSize(he.z,he.w);const Se=v.getRenderTarget();v.setRenderTarget(te),v.getClearColor(I),V=v.getClearAlpha(),V<1&&v.setClearColor(16777215,.5),v.clear(),Xe&&Pe.render(z);const ve=v.toneMapping;v.toneMapping=Nn;const Ne=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),f.setupLightsView(G),ne===!0&&Q.setGlobalState(v.clippingPlanes,G),es(M,z,G),C.updateMultisampleRenderTarget(te),C.updateRenderTargetMipmap(te),He.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let ye=0,je=F.length;ye<je;ye++){const it=F[ye],rt=it.object,Mt=it.geometry,Ze=it.material,we=it.group;if(Ze.side===fn&&rt.layers.test(G.layers)){const an=Ze.side;Ze.side=At,Ze.needsUpdate=!0,qa(rt,z,G,Mt,Ze,we),Ze.side=an,Ze.needsUpdate=!0,Ue=!0}}Ue===!0&&(C.updateMultisampleRenderTarget(te),C.updateRenderTargetMipmap(te))}v.setRenderTarget(Se),v.setClearColor(I,V),Ne!==void 0&&(G.viewport=Ne),v.toneMapping=ve}function es(M,F,z){const G=F.isScene===!0?F.overrideMaterial:null;for(let O=0,te=M.length;O<te;O++){const he=M[O],Se=he.object,ve=he.geometry,Ne=G===null?he.material:G,Ue=he.group;Se.layers.test(z.layers)&&qa(Se,F,z,ve,Ne,Ue)}}function qa(M,F,z,G,O,te){M.onBeforeRender(v,F,z,G,O,te),M.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),O.onBeforeRender(v,F,z,G,M,te),O.transparent===!0&&O.side===fn&&O.forceSinglePass===!1?(O.side=At,O.needsUpdate=!0,v.renderBufferDirect(z,F,G,O,M,te),O.side=Dn,O.needsUpdate=!0,v.renderBufferDirect(z,F,G,O,M,te),O.side=fn):v.renderBufferDirect(z,F,G,O,M,te),M.onAfterRender(v,F,z,G,O,te)}function ts(M,F,z){F.isScene!==!0&&(F=lt);const G=Te.get(M),O=f.state.lights,te=f.state.shadowsArray,he=O.state.version,Se=Ce.getParameters(M,O.state,te,F,z),ve=Ce.getProgramCacheKey(Se);let Ne=G.programs;G.environment=M.isMeshStandardMaterial?F.environment:null,G.fog=F.fog,G.envMap=(M.isMeshStandardMaterial?k:b).get(M.envMap||G.environment),G.envMapRotation=G.environment!==null&&M.envMap===null?F.environmentRotation:M.envMapRotation,Ne===void 0&&(M.addEventListener("dispose",Oe),Ne=new Map,G.programs=Ne);let Ue=Ne.get(ve);if(Ue!==void 0){if(G.currentProgram===Ue&&G.lightsStateVersion===he)return ja(M,Se),Ue}else Se.uniforms=Ce.getUniforms(M),M.onBeforeCompile(Se,v),Ue=Ce.acquireProgram(Se,ve),Ne.set(ve,Ue),G.uniforms=Se.uniforms;const ye=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(ye.clippingPlanes=Q.uniform),ja(M,Se),G.needsLights=wc(M),G.lightsStateVersion=he,G.needsLights&&(ye.ambientLightColor.value=O.state.ambient,ye.lightProbe.value=O.state.probe,ye.directionalLights.value=O.state.directional,ye.directionalLightShadows.value=O.state.directionalShadow,ye.spotLights.value=O.state.spot,ye.spotLightShadows.value=O.state.spotShadow,ye.rectAreaLights.value=O.state.rectArea,ye.ltc_1.value=O.state.rectAreaLTC1,ye.ltc_2.value=O.state.rectAreaLTC2,ye.pointLights.value=O.state.point,ye.pointLightShadows.value=O.state.pointShadow,ye.hemisphereLights.value=O.state.hemi,ye.directionalShadowMap.value=O.state.directionalShadowMap,ye.directionalShadowMatrix.value=O.state.directionalShadowMatrix,ye.spotShadowMap.value=O.state.spotShadowMap,ye.spotLightMatrix.value=O.state.spotLightMatrix,ye.spotLightMap.value=O.state.spotLightMap,ye.pointShadowMap.value=O.state.pointShadowMap,ye.pointShadowMatrix.value=O.state.pointShadowMatrix),G.currentProgram=Ue,G.uniformsList=null,Ue}function Ya(M){if(M.uniformsList===null){const F=M.currentProgram.getUniforms();M.uniformsList=Us.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}function ja(M,F){const z=Te.get(M);z.outputColorSpace=F.outputColorSpace,z.batching=F.batching,z.batchingColor=F.batchingColor,z.instancing=F.instancing,z.instancingColor=F.instancingColor,z.instancingMorph=F.instancingMorph,z.skinning=F.skinning,z.morphTargets=F.morphTargets,z.morphNormals=F.morphNormals,z.morphColors=F.morphColors,z.morphTargetsCount=F.morphTargetsCount,z.numClippingPlanes=F.numClippingPlanes,z.numIntersection=F.numClipIntersection,z.vertexAlphas=F.vertexAlphas,z.vertexTangents=F.vertexTangents,z.toneMapping=F.toneMapping}function Mc(M,F,z,G,O){F.isScene!==!0&&(F=lt),C.resetTextureUnits();const te=F.fog,he=G.isMeshStandardMaterial?F.environment:null,Se=N===null?v.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Li,ve=(G.isMeshStandardMaterial?k:b).get(G.envMap||he),Ne=G.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ue=!!z.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),ye=!!z.morphAttributes.position,je=!!z.morphAttributes.normal,it=!!z.morphAttributes.color;let rt=Nn;G.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(rt=v.toneMapping);const Mt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ze=Mt!==void 0?Mt.length:0,we=Te.get(G),an=f.state.lights;if(ne===!0&&(Ee===!0||M!==_)){const Ut=M===_&&G.id===y;Q.setState(G,M,Ut)}let Ke=!1;G.version===we.__version?(we.needsLights&&we.lightsStateVersion!==an.state.version||we.outputColorSpace!==Se||O.isBatchedMesh&&we.batching===!1||!O.isBatchedMesh&&we.batching===!0||O.isBatchedMesh&&we.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&we.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&we.instancing===!1||!O.isInstancedMesh&&we.instancing===!0||O.isSkinnedMesh&&we.skinning===!1||!O.isSkinnedMesh&&we.skinning===!0||O.isInstancedMesh&&we.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&we.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&we.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&we.instancingMorph===!1&&O.morphTexture!==null||we.envMap!==ve||G.fog===!0&&we.fog!==te||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==Q.numPlanes||we.numIntersection!==Q.numIntersection)||we.vertexAlphas!==Ne||we.vertexTangents!==Ue||we.morphTargets!==ye||we.morphNormals!==je||we.morphColors!==it||we.toneMapping!==rt||we.morphTargetsCount!==Ze)&&(Ke=!0):(Ke=!0,we.__version=G.version);let Vt=we.currentProgram;Ke===!0&&(Vt=ts(G,F,O));let Qn=!1,Rt=!1,Ii=!1;const at=Vt.getUniforms(),Kt=we.uniforms;if(Ae.useProgram(Vt.program)&&(Qn=!0,Rt=!0,Ii=!0),G.id!==y&&(y=G.id,Rt=!0),Qn||_!==M){Ae.buffers.depth.getReversed()?(oe.copy(M.projectionMatrix),kd(oe),zd(oe),at.setValue(U,"projectionMatrix",oe)):at.setValue(U,"projectionMatrix",M.projectionMatrix),at.setValue(U,"viewMatrix",M.matrixWorldInverse);const _n=at.map.cameraPosition;_n!==void 0&&_n.setValue(U,Ie.setFromMatrixPosition(M.matrixWorld)),Ve.logarithmicDepthBuffer&&at.setValue(U,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&at.setValue(U,"isOrthographic",M.isOrthographicCamera===!0),_!==M&&(_=M,Rt=!0,Ii=!0)}if(O.isSkinnedMesh){at.setOptional(U,O,"bindMatrix"),at.setOptional(U,O,"bindMatrixInverse");const Ut=O.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),at.setValue(U,"boneTexture",Ut.boneTexture,C))}O.isBatchedMesh&&(at.setOptional(U,O,"batchingTexture"),at.setValue(U,"batchingTexture",O._matricesTexture,C),at.setOptional(U,O,"batchingIdTexture"),at.setValue(U,"batchingIdTexture",O._indirectTexture,C),at.setOptional(U,O,"batchingColorTexture"),O._colorsTexture!==null&&at.setValue(U,"batchingColorTexture",O._colorsTexture,C));const Fi=z.morphAttributes;if((Fi.position!==void 0||Fi.normal!==void 0||Fi.color!==void 0)&&Le.update(O,z,Vt),(Rt||we.receiveShadow!==O.receiveShadow)&&(we.receiveShadow=O.receiveShadow,at.setValue(U,"receiveShadow",O.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Kt.envMap.value=ve,Kt.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&F.environment!==null&&(Kt.envMapIntensity.value=F.environmentIntensity),Rt&&(at.setValue(U,"toneMappingExposure",v.toneMappingExposure),we.needsLights&&Cc(Kt,Ii),te&&G.fog===!0&&le.refreshFogUniforms(Kt,te),le.refreshMaterialUniforms(Kt,G,W,J,f.state.transmissionRenderTarget[M.id]),Us.upload(U,Ya(we),Kt,C)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Us.upload(U,Ya(we),Kt,C),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&at.setValue(U,"center",O.center),at.setValue(U,"modelViewMatrix",O.modelViewMatrix),at.setValue(U,"normalMatrix",O.normalMatrix),at.setValue(U,"modelMatrix",O.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Ut=G.uniformsGroups;for(let _n=0,Sn=Ut.length;_n<Sn;_n++){const Za=Ut[_n];D.update(Za,Vt),D.bind(Za,Vt)}}return Vt}function Cc(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function wc(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(M,F,z){Te.get(M.texture).__webglTexture=F,Te.get(M.depthTexture).__webglTexture=z;const G=Te.get(M);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=z===void 0,G.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,F){const z=Te.get(M);z.__webglFramebuffer=F,z.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(M,F=0,z=0){N=M,w=F,A=z;let G=!0,O=null,te=!1,he=!1;if(M){const ve=Te.get(M);if(ve.__useDefaultFramebuffer!==void 0)Ae.bindFramebuffer(U.FRAMEBUFFER,null),G=!1;else if(ve.__webglFramebuffer===void 0)C.setupRenderTarget(M);else if(ve.__hasExternalTextures)C.rebindTextures(M,Te.get(M.texture).__webglTexture,Te.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const ye=M.depthTexture;if(ve.__boundDepthTexture!==ye){if(ye!==null&&Te.has(ye)&&(M.width!==ye.image.width||M.height!==ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(M)}}const Ne=M.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(he=!0);const Ue=Te.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ue[F])?O=Ue[F][z]:O=Ue[F],te=!0):M.samples>0&&C.useMultisampledRTT(M)===!1?O=Te.get(M).__webglMultisampledFramebuffer:Array.isArray(Ue)?O=Ue[z]:O=Ue,P.copy(M.viewport),T.copy(M.scissor),R=M.scissorTest}else P.copy(be).multiplyScalar(W).floor(),T.copy(Fe).multiplyScalar(W).floor(),R=tt;if(Ae.bindFramebuffer(U.FRAMEBUFFER,O)&&G&&Ae.drawBuffers(M,O),Ae.viewport(P),Ae.scissor(T),Ae.setScissorTest(R),te){const ve=Te.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+F,ve.__webglTexture,z)}else if(he){const ve=Te.get(M.texture),Ne=F||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,ve.__webglTexture,z||0,Ne)}y=-1},this.readRenderTargetPixels=function(M,F,z,G,O,te,he){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Te.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&he!==void 0&&(Se=Se[he]),Se){Ae.bindFramebuffer(U.FRAMEBUFFER,Se);try{const ve=M.texture,Ne=ve.format,Ue=ve.type;if(!Ve.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-G&&z>=0&&z<=M.height-O&&U.readPixels(F,z,G,O,ke.convert(Ne),ke.convert(Ue),te)}finally{const ve=N!==null?Te.get(N).__webglFramebuffer:null;Ae.bindFramebuffer(U.FRAMEBUFFER,ve)}}},this.readRenderTargetPixelsAsync=async function(M,F,z,G,O,te,he){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=Te.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&he!==void 0&&(Se=Se[he]),Se){const ve=M.texture,Ne=ve.format,Ue=ve.type;if(!Ve.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=M.width-G&&z>=0&&z<=M.height-O){Ae.bindFramebuffer(U.FRAMEBUFFER,Se);const ye=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ye),U.bufferData(U.PIXEL_PACK_BUFFER,te.byteLength,U.STREAM_READ),U.readPixels(F,z,G,O,ke.convert(Ne),ke.convert(Ue),0);const je=N!==null?Te.get(N).__webglFramebuffer:null;Ae.bindFramebuffer(U.FRAMEBUFFER,je);const it=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Bd(U,it,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ye),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,te),U.deleteBuffer(ye),U.deleteSync(it),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,F=null,z=0){M.isTexture!==!0&&($i("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,M=arguments[1]);const G=Math.pow(2,-z),O=Math.floor(M.image.width*G),te=Math.floor(M.image.height*G),he=F!==null?F.x:0,Se=F!==null?F.y:0;C.setTexture2D(M,0),U.copyTexSubImage2D(U.TEXTURE_2D,z,0,0,he,Se,O,te),Ae.unbindTexture()},this.copyTextureToTexture=function(M,F,z=null,G=null,O=0){M.isTexture!==!0&&($i("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,M=arguments[1],F=arguments[2],O=arguments[3]||0,z=null);let te,he,Se,ve,Ne,Ue,ye,je,it;const rt=M.isCompressedTexture?M.mipmaps[O]:M.image;z!==null?(te=z.max.x-z.min.x,he=z.max.y-z.min.y,Se=z.isBox3?z.max.z-z.min.z:1,ve=z.min.x,Ne=z.min.y,Ue=z.isBox3?z.min.z:0):(te=rt.width,he=rt.height,Se=rt.depth||1,ve=0,Ne=0,Ue=0),G!==null?(ye=G.x,je=G.y,it=G.z):(ye=0,je=0,it=0);const Mt=ke.convert(F.format),Ze=ke.convert(F.type);let we;F.isData3DTexture?(C.setTexture3D(F,0),we=U.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(C.setTexture2DArray(F,0),we=U.TEXTURE_2D_ARRAY):(C.setTexture2D(F,0),we=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment);const an=U.getParameter(U.UNPACK_ROW_LENGTH),Ke=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Vt=U.getParameter(U.UNPACK_SKIP_PIXELS),Qn=U.getParameter(U.UNPACK_SKIP_ROWS),Rt=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,rt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,rt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ve),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ne),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ue);const Ii=M.isDataArrayTexture||M.isData3DTexture,at=F.isDataArrayTexture||F.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){const Kt=Te.get(M),Fi=Te.get(F),Ut=Te.get(Kt.__renderTarget),_n=Te.get(Fi.__renderTarget);Ae.bindFramebuffer(U.READ_FRAMEBUFFER,Ut.__webglFramebuffer),Ae.bindFramebuffer(U.DRAW_FRAMEBUFFER,_n.__webglFramebuffer);for(let Sn=0;Sn<Se;Sn++)Ii&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Te.get(M).__webglTexture,O,Ue+Sn),M.isDepthTexture?(at&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Te.get(F).__webglTexture,O,it+Sn),U.blitFramebuffer(ve,Ne,te,he,ye,je,te,he,U.DEPTH_BUFFER_BIT,U.NEAREST)):at?U.copyTexSubImage3D(we,O,ye,je,it+Sn,ve,Ne,te,he):U.copyTexSubImage2D(we,O,ye,je,it+Sn,ve,Ne,te,he);Ae.bindFramebuffer(U.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else at?M.isDataTexture||M.isData3DTexture?U.texSubImage3D(we,O,ye,je,it,te,he,Se,Mt,Ze,rt.data):F.isCompressedArrayTexture?U.compressedTexSubImage3D(we,O,ye,je,it,te,he,Se,Mt,rt.data):U.texSubImage3D(we,O,ye,je,it,te,he,Se,Mt,Ze,rt):M.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,O,ye,je,te,he,Mt,Ze,rt.data):M.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,O,ye,je,rt.width,rt.height,Mt,rt.data):U.texSubImage2D(U.TEXTURE_2D,O,ye,je,te,he,Mt,Ze,rt);U.pixelStorei(U.UNPACK_ROW_LENGTH,an),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ke),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Vt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Qn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Rt),O===0&&F.generateMipmaps&&U.generateMipmap(we),Ae.unbindTexture()},this.copyTextureToTexture3D=function(M,F,z=null,G=null,O=0){return M.isTexture!==!0&&($i("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,G=arguments[1]||null,M=arguments[2],F=arguments[3],O=arguments[4]||0),$i('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,F,z,G,O)},this.initRenderTarget=function(M){Te.get(M).__webglFramebuffer===void 0&&C.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?C.setTextureCube(M,0):M.isData3DTexture?C.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?C.setTexture2DArray(M,0):C.setTexture2D(M,0),Ae.unbindTexture()},this.resetState=function(){w=0,A=0,N=null,Ae.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}}class Kg extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new nn,this.environmentIntensity=1,this.environmentRotation=new nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class gc extends Ni{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Vs=new B,Ws=new B,ol=new ot,Hi=new Fa,ws=new Ys,Ar=new B,ll=new B;class Pr extends xt{constructor(e=new sn,t=new gc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Vs.fromBufferAttribute(t,s-1),Ws.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Vs.distanceTo(Ws);e.setAttribute("lineDistance",new Gt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ws.copy(i.boundingSphere),ws.applyMatrix4(s),ws.radius+=r,e.ray.intersectsSphere(ws)===!1)return;ol.copy(s).invert(),Hi.copy(e.ray).applyMatrix4(ol);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){const p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=p,m=g-1;x<m;x+=c){const f=h.getX(x),E=h.getX(x+1),S=Ts(this,e,Hi,l,f,E);S&&t.push(S)}if(this.isLineLoop){const x=h.getX(g-1),m=h.getX(p),f=Ts(this,e,Hi,l,x,m);f&&t.push(f)}}else{const p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let x=p,m=g-1;x<m;x+=c){const f=Ts(this,e,Hi,l,x,x+1);f&&t.push(f)}if(this.isLineLoop){const x=Ts(this,e,Hi,l,g-1,p);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ts(n,e,t,i,s,r){const a=n.geometry.attributes.position;if(Vs.fromBufferAttribute(a,s),Ws.fromBufferAttribute(a,r),t.distanceSqToSegment(Vs,Ws,Ar,ll)>i)return;Ar.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Ar);if(!(l<e.near||l>e.far))return{distance:l,point:ll.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}class Xs extends sn{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],u=[],p=[];let g=0;const x=[],m=i/2;let f=0;E(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Gt(d,3)),this.setAttribute("normal",new Gt(u,3)),this.setAttribute("uv",new Gt(p,2));function E(){const v=new B,L=new B;let w=0;const A=(t-e)/i;for(let N=0;N<=r;N++){const y=[],_=N/r,P=_*(t-e)+e;for(let T=0;T<=s;T++){const R=T/s,I=R*l+o,V=Math.sin(I),H=Math.cos(I);L.x=P*V,L.y=-_*i+m,L.z=P*H,d.push(L.x,L.y,L.z),v.set(V,A,H).normalize(),u.push(v.x,v.y,v.z),p.push(R,1-_),y.push(g++)}x.push(y)}for(let N=0;N<s;N++)for(let y=0;y<r;y++){const _=x[y][N],P=x[y+1][N],T=x[y+1][N+1],R=x[y][N+1];(e>0||y!==0)&&(h.push(_,P,R),w+=3),(t>0||y!==r-1)&&(h.push(P,T,R),w+=3)}c.addGroup(f,w,0),f+=w}function S(v){const L=g,w=new De,A=new B;let N=0;const y=v===!0?e:t,_=v===!0?1:-1;for(let T=1;T<=s;T++)d.push(0,m*_,0),u.push(0,_,0),p.push(.5,.5),g++;const P=g;for(let T=0;T<=s;T++){const I=T/s*l+o,V=Math.cos(I),H=Math.sin(I);A.x=y*H,A.y=m*_,A.z=y*V,d.push(A.x,A.y,A.z),u.push(0,_,0),w.x=V*.5+.5,w.y=H*.5*_+.5,p.push(w.x,w.y),g++}for(let T=0;T<s;T++){const R=L+T,I=P+T;v===!0?h.push(I,I+1,R):h.push(I+1,I,R),N+=3}c.addGroup(f,N,v===!0?1:2),f+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xs(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Jg extends Ni{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kl,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class xc extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Rr=new ot,cl=new B,hl=new B;class Qg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oa,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;cl.setFromMatrixPosition(e.matrixWorld),t.position.copy(cl),hl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hl),t.updateMatrixWorld(),Rr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rr),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Rr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ex extends Qg{constructor(){super(new Jt(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Lr extends xc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new ex}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class tx extends xc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class dl{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(bt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class nx extends Jn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Aa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Aa);const ul={type:"change"},Ba={type:"start"},_c={type:"end"},As=new Fa,fl=new Tn,ix=Math.cos(70*Od.DEG2RAD),ft=new B,wt=2*Math.PI,et={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Nr=1e-6;class sx extends nx{constructor(e,t=null){super(e,t),this.state=et.NONE,this.enabled=!0,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:vi.ROTATE,MIDDLE:vi.DOLLY,RIGHT:vi.PAN},this.touches={ONE:_i.ROTATE,TWO:_i.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new Zn,this._lastTargetPosition=new B,this._quat=new Zn().setFromUnitVectors(e.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new dl,this._sphericalDelta=new dl,this._scale=1,this._panOffset=new B,this._rotateStart=new De,this._rotateEnd=new De,this._rotateDelta=new De,this._panStart=new De,this._panEnd=new De,this._panDelta=new De,this._dollyStart=new De,this._dollyEnd=new De,this._dollyDelta=new De,this._dollyDirection=new B,this._mouse=new De,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ax.bind(this),this._onPointerDown=rx.bind(this),this._onPointerUp=ox.bind(this),this._onContextMenu=px.bind(this),this._onMouseWheel=hx.bind(this),this._onKeyDown=dx.bind(this),this._onTouchStart=ux.bind(this),this._onTouchMove=fx.bind(this),this._onMouseDown=lx.bind(this),this._onMouseMove=cx.bind(this),this._interceptControlDown=mx.bind(this),this._interceptControlUp=gx.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ul),this.update(),this.state=et.NONE}update(e=null){const t=this.object.position;ft.copy(t).sub(this.target),ft.applyQuaternion(this._quat),this._spherical.setFromVector3(ft),this.autoRotate&&this.state===et.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=wt:i>Math.PI&&(i-=wt),s<-Math.PI?s+=wt:s>Math.PI&&(s-=wt),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(ft.setFromSpherical(this._spherical),ft.applyQuaternion(this._quatInverse),t.copy(this.target).add(ft),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=ft.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new B(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new B(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=ft.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(As.origin.copy(this.object.position),As.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(As.direction))<ix?this.object.lookAt(this.target):(fl.setFromNormalAndCoplanarPoint(this.object.up,this.target),As.intersectPlane(fl,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Nr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Nr||this._lastTargetPosition.distanceToSquared(this.target)>Nr?(this.dispatchEvent(ul),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?wt/60*this.autoRotateSpeed*e:wt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){ft.setFromMatrixColumn(t,0),ft.multiplyScalar(-e),this._panOffset.add(ft)}_panUp(e,t){this.screenSpacePanning===!0?ft.setFromMatrixColumn(t,1):(ft.setFromMatrixColumn(t,0),ft.crossVectors(this.object.up,ft)),ft.multiplyScalar(e),this._panOffset.add(ft)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;ft.copy(s).sub(this.target);let r=ft.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(wt*this._rotateDelta.x/t.clientHeight),this._rotateUp(wt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(wt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-wt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(wt*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-wt*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(wt*this._rotateDelta.x/t.clientHeight),this._rotateUp(wt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new De,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function rx(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function ax(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function ox(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(_c),this.state=et.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function lx(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case vi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=et.DOLLY;break;case vi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=et.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=et.ROTATE}break;case vi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=et.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=et.PAN}break;default:this.state=et.NONE}this.state!==et.NONE&&this.dispatchEvent(Ba)}function cx(n){switch(this.state){case et.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case et.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case et.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function hx(n){this.enabled===!1||this.enableZoom===!1||this.state!==et.NONE||(n.preventDefault(),this.dispatchEvent(Ba),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(_c))}function dx(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function ux(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case _i.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=et.TOUCH_ROTATE;break;case _i.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=et.TOUCH_PAN;break;default:this.state=et.NONE}break;case 2:switch(this.touches.TWO){case _i.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=et.TOUCH_DOLLY_PAN;break;case _i.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=et.TOUCH_DOLLY_ROTATE;break;default:this.state=et.NONE}break;default:this.state=et.NONE}this.state!==et.NONE&&this.dispatchEvent(Ba)}function fx(n){switch(this._trackPointer(n),this.state){case et.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case et.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case et.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case et.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=et.NONE}}function px(n){this.enabled!==!1&&n.preventDefault()}function mx(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function gx(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class xx extends xt{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new De(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}}const pi=new B,pl=new ot,ml=new ot,gl=new B,xl=new B;class _x{constructor(e={}){const t=this;let i,s,r,a;const o={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:i,height:s}},this.render=function(g,x){g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),x.parent===null&&x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),pl.copy(x.matrixWorldInverse),ml.multiplyMatrices(x.projectionMatrix,pl),h(g,g,x),p(g)},this.setSize=function(g,x){i=g,s=x,r=i/2,a=s/2,l.style.width=g+"px",l.style.height=x+"px"};function c(g){g.isCSS2DObject&&(g.element.style.display="none");for(let x=0,m=g.children.length;x<m;x++)c(g.children[x])}function h(g,x,m){if(g.visible===!1){c(g);return}if(g.isCSS2DObject){pi.setFromMatrixPosition(g.matrixWorld),pi.applyMatrix4(ml);const f=pi.z>=-1&&pi.z<=1&&g.layers.test(m.layers)===!0,E=g.element;E.style.display=f===!0?"":"none",f===!0&&(g.onBeforeRender(t,x,m),E.style.transform="translate("+-100*g.center.x+"%,"+-100*g.center.y+"%)translate("+(pi.x*r+r)+"px,"+(-pi.y*a+a)+"px)",E.parentNode!==l&&l.appendChild(E),g.onAfterRender(t,x,m));const S={distanceToCameraSquared:d(m,g)};o.objects.set(g,S)}for(let f=0,E=g.children.length;f<E;f++)h(g.children[f],x,m)}function d(g,x){return gl.setFromMatrixPosition(g.matrixWorld),xl.setFromMatrixPosition(x.matrixWorld),gl.distanceToSquared(xl)}function u(g){const x=[];return g.traverseVisible(function(m){m.isCSS2DObject&&x.push(m)}),x}function p(g){const x=u(g).sort(function(f,E){if(f.renderOrder!==E.renderOrder)return E.renderOrder-f.renderOrder;const S=o.objects.get(f).distanceToCameraSquared,v=o.objects.get(E).distanceToCameraSquared;return S-v}),m=x.length;for(let f=0,E=x.length;f<E;f++)x[f].element.style.zIndex=m-f}}}const Sx=1,vx=new B(0,.45,1.6),yx=new B(0,.1,0),_l=38,Ps=.05,Dr=55,Sl=16018718,vl=758497;class bx{constructor(e,t={}){this.projectionMode="perspective",this.workNeckMeshes=[],this.backupNeckMeshes=[],this.mirroredWorkNeckMeshes=[],this.mirroredBackupNeckMeshes=[],this.dimensionLabels=[],this.hasUserChangedView=!1,this.lightingAdded=!1,this.needsRender=!0,this.dimsVisible=!1,this.infoVisible=!1,this.controlsChangeHandler=()=>{this.viewDirection.copy(this.camera.position).sub(this.controls.target),this.hasUserChangedView=!0,this.infoVisible&&this.updateInfoPanel()},this.rendererSize=new De,this.defaultFov=_l,this.handleResize=()=>{const a=this.container.clientWidth||this.getContainerWidth(),o=this.container.clientHeight||this.getContainerHeight(),l=a/Math.max(1,o);this.camera instanceof Et?(this.camera.aspect=l,this.camera.updateProjectionMatrix()):this.updateOrthographicFrustum(l),this.renderer.setSize(a,o),this.labelRenderer&&this.labelRenderer.setSize(a,o),this.needsRender=!0},this.handleDoubleClickReset=()=>{this.resetView()},this.container=e,this.scene=new Kg,this.scene.background=null,this.unitScale=t.unitScale??Sx,this.defaultCameraPosition=vx.clone(),this.defaultTarget=yx.clone(),this.cameraProvided=!!t.cameraPosition,t.cameraPosition&&this.applyVector(this.defaultCameraPosition,t.cameraPosition),t.target&&this.applyVector(this.defaultTarget,t.target),this.viewDirection=this.defaultCameraPosition.clone().sub(this.defaultTarget),this.viewDirection.lengthSq()===0&&(this.viewDirection=new B(0,0,1)),this.manualDistance=!this.cameraProvided&&t.distance!==void 0?t.distance:void 0,this.defaultDistance=this.defaultCameraPosition.distanceTo(this.defaultTarget),this.manualDistance!==void 0&&(this.defaultDistance=this.manualDistance),this.orthographicSize=this.defaultDistance;const i=this.getContainerWidth(),s=this.getContainerHeight(),r=i/s;this.camera=this.createPerspectiveCamera(r,this.defaultCameraPosition,this.defaultTarget),this.projectionMode="perspective",this.renderer=new Zg({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(i,s),this.renderer.setClearColor(new Ye(16777215),0),this.renderer.domElement.style.display="block",e.appendChild(this.renderer.domElement),this.labelRenderer=new _x,this.labelRenderer.setSize(i,s),this.labelRenderer.domElement.style.position="absolute",this.labelRenderer.domElement.style.top="0",this.labelRenderer.domElement.style.pointerEvents="none",e.appendChild(this.labelRenderer.domElement),this.controls=this.attachControls(this.camera,this.defaultTarget),this.handleResize=this.handleResize.bind(this),this.animate=this.animate.bind(this),window.addEventListener("resize",this.handleResize),typeof ResizeObserver<"u"&&(this.resizeObserver=new ResizeObserver(()=>this.handleResize()),this.resizeObserver.observe(this.container)),requestAnimationFrame(()=>this.handleResize()),this.buildOverlay(),this.animate(),this.renderer.domElement.addEventListener("dblclick",this.handleDoubleClickReset)}dispose(){window.removeEventListener("resize",this.handleResize),this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=void 0),this.animationFrame&&cancelAnimationFrame(this.animationFrame),this.disposeControls(),this.clearDimensionLabels(),[this.workRollMesh,this.backupRollMesh,this.mirroredWorkRollMesh,this.mirroredBackupRollMesh].forEach(e=>{if(!e)return;const t=e.__endCaps;t&&t.children.forEach(i=>{i instanceof Pr&&(i.geometry.dispose?.(),i.material.dispose?.())}),this.scene.remove(e),e.geometry.dispose(),e.material?.dispose?.()}),this.renderer.dispose(),this.overlay?.parentElement&&this.overlay.parentElement.removeChild(this.overlay),this.renderer.domElement.removeEventListener("dblclick",this.handleDoubleClickReset)}update(e,t){const i=this.hasRollMeshes();this.lastWork=e,this.lastBackup=t;const s=c=>new Jg({color:c,metalness:.15,roughness:.55}),r=(c,h)=>{const d=Math.max(c.radius*this.unitScale,.001),u=Math.max(c.bodyLength*this.unitScale,.001),p=new Xs(d,d,u,64,1,!1),g=s(h);return new Tt(p,g)},a=(c,h)=>{if(!c.neckRadius||!c.neckLength)return[];const d=Math.max(c.neckRadius*this.unitScale,.001),u=Math.max(c.neckLength*this.unitScale,.001),p=new Xs(d,d,u,64,1,!1),g=s(h);return[new Tt(p,g),new Tt(p,g.clone())]};e?(this.setRollMesh(r(e,Sl),"work"),this.setNeckMeshes(a(e,Sl),"work")):(this.removeRollMesh("work"),this.removeNeckMeshes("work")),t?(this.setRollMesh(r(t,vl),"backup"),this.setNeckMeshes(a(t,vl),"backup")):(this.removeRollMesh("backup"),this.removeNeckMeshes("backup")),this.updateMirrors(),this.ensureEndCaps(),this.layoutRolls();const o=this.hasRollMeshes();!o||!i&&o&&!this.hasUserChangedView?this.frameScene():this.infoVisible&&this.updateInfoPanel(),this.dimsVisible&&this.updateDimensionLabels(),this.needsRender=!0}applyVector(e,t){t.x!==void 0&&(e.x=t.x),t.y!==void 0&&(e.y=t.y),t.z!==void 0&&(e.z=t.z)}setRollMesh(e,t){t==="work"?(this.workRollMesh&&(this.scene.remove(this.workRollMesh),this.disposeMirror("work"),this.workRollMesh.geometry.dispose(),this.workRollMesh.material.dispose()),this.workRollMesh=e):(this.backupRollMesh&&(this.scene.remove(this.backupRollMesh),this.disposeMirror("backup"),this.backupRollMesh.geometry.dispose(),this.backupRollMesh.material.dispose()),this.backupRollMesh=e),this.scene.add(e)}removeRollMesh(e){const t=e==="work"?this.workRollMesh:this.backupRollMesh;t&&(this.scene.remove(t),t.geometry.dispose(),t.material.dispose(),this.disposeMirror(e),e==="work"?this.workRollMesh=void 0:this.backupRollMesh=void 0)}setNeckMeshes(e,t){this.removeNeckMeshes(t),e.length!==0&&(t==="work"?this.workNeckMeshes=e:this.backupNeckMeshes=e,e.forEach(i=>this.scene.add(i)))}removeNeckMeshes(e){(e==="work"?this.workNeckMeshes:this.backupNeckMeshes).forEach(i=>{this.scene.remove(i),i.geometry.dispose(),i.material.dispose()}),e==="work"?this.workNeckMeshes=[]:this.backupNeckMeshes=[]}createPerspectiveCamera(e,t,i){const s=new Et(_l,e,Ps,Dr);return s.position.copy(t??this.defaultCameraPosition),s.lookAt(i??this.defaultTarget),s}createOrthographicCamera(e,t,i){const s=this.orthographicSize/2,r=s*e,a=new Jt(-r,r,s,-s,Ps,Dr);return a.position.copy(t??this.defaultCameraPosition),a.lookAt(i??this.defaultTarget),a.updateProjectionMatrix(),a}layoutRolls(){const e=[];if(this.workRollMesh&&e.push({mesh:this.workRollMesh,mirror:this.mirroredWorkRollMesh,radius:this.workRollMesh.geometry.parameters.radiusTop||0,kind:"work"}),this.backupRollMesh&&e.push({mesh:this.backupRollMesh,mirror:this.mirroredBackupRollMesh,radius:this.backupRollMesh.geometry.parameters.radiusTop||0,kind:"backup"}),e.length===0)return;e.sort((r,a)=>r.kind===a.kind?0:r.kind==="backup"?-1:1);const t=[...e].reverse();let i=0;t.forEach(r=>{const a=r.radius,o=i+a;r.mesh.position.set(0,o,0),i=o+a}),e.forEach(r=>{if(!r.mirror)return;const a=r.mesh.position.y;r.mirror.position.set(0,-a,0)});const s=Math.PI/2;if([this.workRollMesh,this.backupRollMesh,this.mirroredWorkRollMesh,this.mirroredBackupRollMesh].filter(Boolean).forEach(r=>r.rotation.set(s,0,0)),this.workRollMesh&&this.workNeckMeshes.length===2&&this.lastWork){const r=this.lastWork.bodyLength*this.unitScale,a=(this.lastWork.neckLength||0)*this.unitScale,o=this.workRollMesh.position.y;this.workNeckMeshes[0].position.set(0,o,-r/2-a/2),this.workNeckMeshes[0].rotation.set(s,0,0),this.workNeckMeshes[1].position.set(0,o,r/2+a/2),this.workNeckMeshes[1].rotation.set(s,0,0),this.mirroredWorkNeckMeshes.length===2&&(this.mirroredWorkNeckMeshes[0].position.set(0,-o,-r/2-a/2),this.mirroredWorkNeckMeshes[0].rotation.set(s,0,0),this.mirroredWorkNeckMeshes[1].position.set(0,-o,r/2+a/2),this.mirroredWorkNeckMeshes[1].rotation.set(s,0,0))}if(this.backupRollMesh&&this.backupNeckMeshes.length===2&&this.lastBackup){const r=this.lastBackup.bodyLength*this.unitScale,a=(this.lastBackup.neckLength||0)*this.unitScale,o=this.backupRollMesh.position.y;this.backupNeckMeshes[0].position.set(0,o,-r/2-a/2),this.backupNeckMeshes[0].rotation.set(s,0,0),this.backupNeckMeshes[1].position.set(0,o,r/2+a/2),this.backupNeckMeshes[1].rotation.set(s,0,0),this.mirroredBackupNeckMeshes.length===2&&(this.mirroredBackupNeckMeshes[0].position.set(0,-o,-r/2-a/2),this.mirroredBackupNeckMeshes[0].rotation.set(s,0,0),this.mirroredBackupNeckMeshes[1].position.set(0,-o,r/2+a/2),this.mirroredBackupNeckMeshes[1].rotation.set(s,0,0))}}frameScene(){const e=[this.workRollMesh,this.backupRollMesh,this.mirroredWorkRollMesh,this.mirroredBackupRollMesh].filter(Boolean);if(e.length===0){this.controls.target.copy(this.defaultTarget),this.camera.position.copy(this.defaultCameraPosition),this.camera.lookAt(this.defaultTarget),this.viewDirection.copy(this.camera.position).sub(this.defaultTarget),this.camera instanceof Jt?(this.orthographicSize=Math.max(this.orthographicSize,this.defaultDistance),this.updateOrthographicFrustum(this.getRendererAspect())):this.camera.updateProjectionMatrix(),this.controls.update();return}if(this.cameraProvided){this.controls.target.copy(this.defaultTarget),this.camera.position.copy(this.defaultCameraPosition),this.camera.lookAt(this.defaultTarget),this.viewDirection.copy(this.camera.position).sub(this.defaultTarget),this.camera instanceof Jt?(this.orthographicSize=Math.max(this.orthographicSize,this.defaultDistance),this.updateOrthographicFrustum(this.getRendererAspect())):this.camera.updateProjectionMatrix(),this.controls.update(),this.infoVisible&&this.updateInfoPanel();return}const t=new Kn;e.forEach(g=>t.expandByObject(g));const i=new B;t.getSize(i);const s=new B;t.getCenter(s);const r=Math.max(i.x,i.y,i.z,.1),a=this.camera instanceof Et?this.camera.fov:this.defaultFov,o=Math.max(.35,r/2/Math.tan(a*Math.PI/360)+r*.25),l=this.manualDistance??Math.max(o,this.defaultDistance),c=s.clone();c.y=Math.max(c.y,.1);const u=(this.viewDirection.lengthSq()>0?this.viewDirection.clone():new B(0,0,1)).normalize().clone().multiplyScalar(l),p=c.clone().add(u);this.viewDirection.copy(u),this.orthographicSize=Math.max(r*1.2,this.defaultDistance),this.controls.target.copy(c),this.camera.position.copy(p),this.camera.lookAt(c),this.camera instanceof Jt?this.updateOrthographicFrustum(this.getRendererAspect()):this.camera.updateProjectionMatrix(),this.controls.update(),this.infoVisible&&this.updateInfoPanel()}updateMirrors(){const e=(t,i)=>{if(this.disposeMirror(t),!i)return;const s=i.geometry.clone(),r=i.material?.clone?.()??i.material,a=new Tt(s,r);a.castShadow=i.castShadow,a.receiveShadow=i.receiveShadow,a.__sourceKind=t,this.scene.add(a),t==="work"?this.mirroredWorkRollMesh=a:this.mirroredBackupRollMesh=a};e("work",this.workRollMesh),e("backup",this.backupRollMesh),this.mirrorNeckMeshes("work"),this.mirrorNeckMeshes("backup")}mirrorNeckMeshes(e){(e==="work"?this.mirroredWorkNeckMeshes:this.mirroredBackupNeckMeshes).forEach(r=>{this.scene.remove(r),r.geometry.dispose(),r.material.dispose()});const i=e==="work"?this.workNeckMeshes:this.backupNeckMeshes,s=[];i.forEach(r=>{const a=r.geometry.clone(),o=r.material?.clone?.()??r.material,l=new Tt(a,o);l.castShadow=r.castShadow,l.receiveShadow=r.receiveShadow,this.scene.add(l),s.push(l)}),e==="work"?this.mirroredWorkNeckMeshes=s:this.mirroredBackupNeckMeshes=s}animate(){this.animationFrame=requestAnimationFrame(this.animate),this.lightingAdded||this.addLighting(),this.controls&&this.controls.update(),this.infoVisible&&this.updateInfoPanel(),this.renderer.render(this.scene,this.camera),this.labelRenderer&&this.labelRenderer.render(this.scene,this.camera),this.needsRender=!1}addLighting(){const e=new tx(16777215,2),t=new Lr(16777215,1.4);t.position.set(2.5,0,0);const i=new Lr(16777215,1);i.position.set(-3,1.5,-2);const s=new Lr(16777215,1.4);s.position.set(0,4,-4),this.scene.add(e,t,i,s),this.lightingAdded=!0}resetView(){const e=this.getRendererAspect();this.projectionMode==="orthographic"?(this.camera=this.createOrthographicCamera(e,this.defaultCameraPosition.clone(),this.defaultTarget.clone()),this.projectionMode="orthographic"):(this.camera=this.createPerspectiveCamera(e,this.defaultCameraPosition.clone(),this.defaultTarget.clone()),this.projectionMode="perspective"),this.viewDirection=this.camera.position.clone().sub(this.defaultTarget),this.disposeControls(),this.controls=this.attachControls(this.camera,this.defaultTarget.clone()),this.controls.update(),this.hasUserChangedView=!1,this.frameScene(),this.infoVisible&&this.updateInfoPanel(),this.dimsVisible&&this.updateDimsPanel(),this.needsRender=!0}createEndCaps(e){const t=e.geometry.parameters;if(!t)return;const i=t.radiusTop||0,s=t.height||0,r=64,a=c=>{const h=[];for(let g=0;g<=r;g++){const x=g/r*Math.PI*2;h.push(0,c,0),h[h.length-3]=i*Math.cos(x),h[h.length-2]=c,h[h.length-1]=i*Math.sin(x)}const d=new sn;d.setAttribute("position",new Gt(h,3));const u=new gc({color:2236962,linewidth:1}),p=new Pr(d,u);return p.renderOrder=2,p},o=new Yi,l=s/2;o.add(a(-l)),o.add(a(l)),e.add(o),e.__endCaps=o}ensureEndCaps(){[this.workRollMesh,this.backupRollMesh,this.mirroredWorkRollMesh,this.mirroredBackupRollMesh].filter(Boolean).forEach(e=>{e.__endCaps||this.createEndCaps(e)}),[...this.workNeckMeshes,...this.backupNeckMeshes,...this.mirroredWorkNeckMeshes,...this.mirroredBackupNeckMeshes].filter(Boolean).forEach(e=>{e.__endCaps||this.createEndCaps(e)})}getContainerWidth(){return Math.max(1,this.container.clientWidth||this.container.offsetWidth||640)}getContainerHeight(){return Math.max(1,this.container.clientHeight||this.container.offsetHeight||360)}buildOverlay(){getComputedStyle(this.container).position==="static"&&(this.container.style.position="relative");const e=document.createElement("div");e.style.cssText="position:absolute;top:8px;right:8px;display:flex;flex-direction:column;align-items:flex-end;gap:6px;z-index:5;font-size:11px;color:#1d1d1d;pointer-events:none;";const t=document.createElement("button");t.type="button",t.textContent="S",t.style.cssText="pointer-events:auto;padding:4px 8px;border:1px solid var(--color-border, #cfd4dc);border-radius:6px;background:#f4f6f8;font-size:11px;cursor:pointer;";const i=document.createElement("div");i.style.cssText="pointer-events:none;font-family:monospace;font-size:10px;line-height:1.4;background:rgba(255,255,255,0.94);border:1px solid rgba(0,0,0,0.08);border-radius:6px;padding:6px 8px;box-shadow:0 4px 10px rgba(0,0,0,0.12);white-space:pre;display:none;min-width:180px;text-align:left;";const s=document.createElement("button");s.type="button",s.style.cssText="pointer-events:auto;padding:4px 8px;border:1px solid var(--color-border, #cfd4dc);border-radius:6px;background:#f4f6f8;font-size:11px;cursor:pointer;display:none;",s.addEventListener("click",()=>{this.toggleProjection()});const r=document.createElement("button");r.type="button",r.textContent="Show Dimensions",r.style.cssText="pointer-events:auto;padding:4px 8px;border:1px solid var(--color-border, #cfd4dc);border-radius:6px;background:#f4f6f8;font-size:11px;cursor:pointer;display:none;",r.addEventListener("click",()=>{this.dimsVisible=!this.dimsVisible,r.textContent=this.dimsVisible?"Hide Dimensions":"Show Dimensions",this.dimsPanel&&(this.dimsPanel.style.display=this.dimsVisible?"block":"none",this.dimsVisible?(this.updateDimsPanel(),this.updateDimensionLabels()):this.clearDimensionLabels()),this.needsRender=!0}),t.addEventListener("click",()=>{this.infoVisible=!this.infoVisible,i.style.display=this.infoVisible?"block":"none",s.style.display=this.infoVisible?"block":"none",r.style.display=this.infoVisible?"block":"none",t.textContent=this.infoVisible?"H":"S",this.infoVisible&&(this.updateProjectionButton(),this.updateInfoPanel(),this.dimsVisible&&this.updateDimsPanel(),this.needsRender=!0)}),e.appendChild(t),e.appendChild(s),e.appendChild(r),e.appendChild(i);const a=document.createElement("div");a.style.cssText="pointer-events:none;font-family:monospace;font-size:10px;line-height:1.4;background:rgba(255,255,255,0.94);border:1px solid rgba(0,0,0,0.08);border-radius:6px;padding:6px 8px;box-shadow:0 4px 10px rgba(0,0,0,0.12);white-space:pre;display:none;min-width:160px;text-align:left;",e.appendChild(a),this.container.appendChild(e),this.overlay=e,this.infoButton=t,this.infoPanel=i,this.projectionButton=s,this.dimsButton=r,this.dimsPanel=a,this.updateProjectionButton()}attachControls(e,t){const i=new sx(e,this.renderer.domElement);return i.enableDamping=!0,i.dampingFactor=.08,i.enablePan=!0,i.autoRotate=!1,e instanceof Jt||(i.minDistance=Ps,i.maxDistance=15),i.target.copy(t),i.update(),i.addEventListener?.("change",this.controlsChangeHandler),i}disposeControls(){this.controls&&(this.controls.removeEventListener?.("change",this.controlsChangeHandler),this.controls.dispose())}disposeMirror(e){const t=e==="work"?this.mirroredWorkRollMesh:this.mirroredBackupRollMesh;if(!t)return;const i=t.__endCaps;i&&(i.children.forEach(s=>{s instanceof Pr&&(s.geometry.dispose(),s.material.dispose?.())}),t.remove(i),t.__endCaps=void 0),this.scene.remove(t),t.geometry.dispose(),t.material.dispose?.(),e==="work"?this.mirroredWorkRollMesh=void 0:this.mirroredBackupRollMesh=void 0}getRendererAspect(){const e=this.renderer.getSize(this.rendererSize),t=e.x||this.getContainerWidth(),i=Math.max(1,e.y||this.getContainerHeight());return t/i}hasRollMeshes(){return!!(this.workRollMesh||this.backupRollMesh)}updateOrthographicFrustum(e){if(!(this.camera instanceof Jt))return;const t=Math.max(1e-4,this.orthographicSize/2),i=t*e;this.camera.left=-i,this.camera.right=i,this.camera.top=t,this.camera.bottom=-t,this.camera.updateProjectionMatrix()}setProjectionMode(e){if(this.projectionMode===e)return;const t=this.controls.target.clone(),i=this.camera.position.clone(),s=this.camera.up.clone(),r=this.getRendererAspect();if(this.disposeControls(),e==="orthographic"){const a=this.camera instanceof Et?this.camera.fov:this.defaultFov,o=Math.max(.001,i.distanceTo(t)),l=Math.tan(a*Math.PI/360)*o;this.orthographicSize=Math.max(this.orthographicSize,l*2,this.defaultDistance);const c=this.createOrthographicCamera(r,i.clone(),t.clone());c.up.copy(s),this.camera=c,this.updateOrthographicFrustum(r),this.projectionMode="orthographic"}else{const a=this.createPerspectiveCamera(r,i.clone(),t.clone());a.up.copy(s),this.camera instanceof Jt&&(a.near=Ps,a.far=Dr),this.camera=a,this.projectionMode="perspective"}this.controls=this.attachControls(this.camera,t),this.viewDirection=this.camera.position.clone().sub(t),this.controls.update(),this.needsRender=!0,this.updateProjectionButton(),this.infoVisible&&this.updateInfoPanel()}toggleProjection(){const e=this.projectionMode==="perspective"?"orthographic":"perspective";this.setProjectionMode(e)}updateProjectionButton(){this.projectionButton&&(this.projectionButton.textContent=this.projectionMode==="perspective"?"Switch to Orthographic":"Switch to Perspective")}updateInfoPanel(){if(!this.infoPanel)return;const e=this.camera.position,t=this.controls.target,i=e.distanceTo(t),s=this.defaultCameraPosition,r=this.defaultTarget,a=s.distanceTo(r),l=[`mode: ${this.projectionMode==="perspective"?"Perspective":"Orthographic"}`,`camera: (${e.x.toFixed(3)}, ${e.y.toFixed(3)}, ${e.z.toFixed(3)})`,`target: (${t.x.toFixed(3)}, ${t.y.toFixed(3)}, ${t.z.toFixed(3)})`,`distance: ${i.toFixed(3)}`];this.camera instanceof Jt&&l.push(`orthographic size: ${this.orthographicSize.toFixed(3)}`),l.push(`configured camera: (${s.x.toFixed(3)}, ${s.y.toFixed(3)}, ${s.z.toFixed(3)})`,`configured target: (${r.x.toFixed(3)}, ${r.y.toFixed(3)}, ${r.z.toFixed(3)})`,`configured distance: ${a.toFixed(3)}`),this.infoPanel.textContent=l.join(`
`)}updateDimsPanel(){if(!this.dimsPanel)return;const e=[],t=s=>s!==void 0&&Number.isFinite(s)?s.toFixed(2):"n/a";this.lastBackup?(e.push(`Backup radius: ${t(this.lastBackup.radius)}`),e.push(`Backup length: ${t(this.lastBackup.bodyLength)}`)):e.push("Backup: none"),this.lastWork?(e.push(`Work radius:   ${t(this.lastWork.radius)}`),e.push(`Work length:   ${t(this.lastWork.bodyLength)}`)):e.push("Work: none");const i=this.computeSpan();i!==null&&e.push(`Span (top to bottom): ${i.toFixed(2)}`),this.dimsPanel.textContent=e.join(`
`)}computeSpan(){const e=[this.workRollMesh,this.backupRollMesh,this.mirroredWorkRollMesh,this.mirroredBackupRollMesh].filter(Boolean);if(!e.length)return null;const t=new Kn;return e.forEach(i=>t.expandByObject(i)),t.max.y-t.min.y}clearDimensionLabels(){this.dimensionLabels.forEach(e=>{this.scene.remove(e),e.element.remove()}),this.dimensionLabels=[]}createDimensionLabel(e,t){const i=document.createElement("div");i.style.cssText="background:rgba(255,255,255,0.9);color:#333;padding:2px 6px;border-radius:3px;font-size:11px;font-family:monospace;white-space:nowrap;border:1px solid rgba(0,0,0,0.15);box-shadow:0 2px 4px rgba(0,0,0,0.1);",i.textContent=e;const s=new xx(i);return s.position.copy(t),s}updateDimensionLabels(){this.clearDimensionLabels();const e=t=>t!==void 0&&Number.isFinite(t)?t.toFixed(2):"n/a";if(this.backupRollMesh&&this.lastBackup){const t=this.backupRollMesh.position.clone(),i=this.lastBackup.radius*this.unitScale,s=this.lastBackup.bodyLength*this.unitScale,r=this.createDimensionLabel(`R: ${e(this.lastBackup.radius)}`,new B(t.x,t.y,t.z+i));this.scene.add(r),this.dimensionLabels.push(r);const a=this.createDimensionLabel(`L: ${e(this.lastBackup.bodyLength)}`,new B(t.x+s/2,t.y,t.z));this.scene.add(a),this.dimensionLabels.push(a)}if(this.workRollMesh&&this.lastWork){const t=this.workRollMesh.position.clone(),i=this.lastWork.radius*this.unitScale,s=this.lastWork.bodyLength*this.unitScale,r=this.createDimensionLabel(`R: ${e(this.lastWork.radius)}`,new B(t.x,t.y,t.z+i));this.scene.add(r),this.dimensionLabels.push(r);const a=this.createDimensionLabel(`L: ${e(this.lastWork.bodyLength)}`,new B(t.x+s/2,t.y,t.z));this.scene.add(a),this.dimensionLabels.push(a)}this.needsRender=!0}}class Ex{constructor(){this._globalStandIndex=0,this._globalPassIndex=0,this.standIndexListeners=new Set,this.passIndexListeners=new Set,this.suppressNotifications=!1,this.loadFromStorage()}loadFromStorage(){const e=ue.get(ie.GLOBAL_STAND_INDEX),t=ue.get(ie.GLOBAL_PASS_INDEX);if(e!==null){const i=parseInt(e,10);!isNaN(i)&&i>=0&&(this._globalStandIndex=i)}if(t!==null){const i=parseInt(t,10);!isNaN(i)&&i>=0&&(this._globalPassIndex=i)}}saveToStorage(){ue.set(ie.GLOBAL_STAND_INDEX,this._globalStandIndex.toString()),ue.set(ie.GLOBAL_PASS_INDEX,this._globalPassIndex.toString())}get globalStandIndex(){return this._globalStandIndex}get globalPassIndex(){return this._globalPassIndex}setGlobalStandIndex(e){if(e<0)return;const t=this._globalStandIndex;this._globalStandIndex=e,t!==e&&!this.suppressNotifications&&(this.saveToStorage(),this.notifyStandIndexListeners())}setGlobalPassIndex(e){if(e<0)return;const t=this._globalPassIndex;this._globalPassIndex=e,t!==e&&!this.suppressNotifications&&(this.saveToStorage(),this.notifyPassIndexListeners())}addStandIndexListener(e){return this.standIndexListeners.add(e),()=>{this.standIndexListeners.delete(e)}}addPassIndexListener(e){return this.passIndexListeners.add(e),()=>{this.passIndexListeners.delete(e)}}notifyStandIndexListeners(){this.standIndexListeners.forEach(e=>{try{e(this._globalStandIndex)}catch(t){console.error("Error in stand index listener:",t)}})}notifyPassIndexListeners(){this.passIndexListeners.forEach(e=>{try{e(this._globalPassIndex)}catch(t){console.error("Error in pass index listener:",t)}})}reset(){this.setGlobalStandIndex(0),this.setGlobalPassIndex(0)}runSilently(e){const t=this.suppressNotifications;this.suppressNotifications=!0;try{e()}finally{this.suppressNotifications=t}}}const ee=new Ex,Vi="#f46d1e",mi="#0b92e1",Rs="#222",Mx={unitScale:1,distance:8,cameraPosition:{x:6,y:2.5,z:7},target:{x:0,y:0,z:0}};class Cx{constructor(){this.currentPlate=null,this.lastRenderSignature=null,this.currentPassIndex=0,this.showTCrown=!1,this.tCrownIndex=0,this.autoSyncStandPass=!1,this.showAlternatePlot=!1,this.alternateRollIndex=0,this.standSelect=document.getElementById("rollStandSelect"),this.passSelect=document.getElementById("rollPassSelect"),this.output=document.getElementById("rollDataOutput"),this.rendererContainer=document.getElementById("roll3dContainer"),this.crown2dContainer=document.getElementById("roll2dContainer"),this.setupEventListeners(),this.setupControlButtons(),this.restoreSavedSettings(),this.rendererContainer&&(this.renderer=new bx(this.rendererContainer,Mx)),this.ensureLayoutWrapper(),ee.addStandIndexListener(()=>{this.handleGlobalStandIndexChange()}),ee.addPassIndexListener(()=>{this.handleGlobalPassIndexChange()}),document.addEventListener("plateSelected",(e=>{this.currentPlate=e.detail.plate,this.populateDropdowns()}))}restoreSavedSettings(){this.showAlternatePlot=ue.getBoolean(ie.ROLL_PLOT_MODE,!1),this.autoSyncStandPass=ue.getBoolean(ie.ROLL_AUTO_SYNC,!1);const e=document.getElementById("rollSyncBtn");e&&(this.autoSyncStandPass?(e.classList.remove("strikeout"),e.classList.add("standard")):(e.classList.remove("standard"),e.classList.add("strikeout"))),this.standSelect&&(this.standSelect.disabled=this.autoSyncStandPass,this.standSelect.style.opacity=this.autoSyncStandPass?"0.5":"1");const t=document.getElementById("rollStandPrev"),i=document.getElementById("rollStandNext");t&&(t.disabled=this.autoSyncStandPass,t.style.opacity=this.autoSyncStandPass?"0.5":"1"),i&&(i.disabled=this.autoSyncStandPass,i.style.opacity=this.autoSyncStandPass?"0.5":"1")}handleGlobalStandIndexChange(){this.standSelect&&(this.standSelect.value=String(ee.globalStandIndex),this.handleSelectionChange())}handleGlobalPassIndexChange(){this.passSelect&&(this.passSelect.value=String(ee.globalPassIndex),this.handlePassChange())}setupEventListeners(){}setupControlButtons(){[{id:"rollStandPrev",handler:()=>this.cycleSelection("stand",-1)},{id:"rollStandNext",handler:()=>this.cycleSelection("stand",1)},{id:"rollPassPrev",handler:()=>this.cycleSelection("pass",-1)},{id:"rollPassNext",handler:()=>this.cycleSelection("pass",1)},{id:"rollPlotModeToggle",handler:()=>this.togglePlotMode()},{id:"rollSyncBtn",handler:()=>this.syncStandWithPass()}].forEach(({id:t,handler:i})=>{const s=document.getElementById(t);s&&s.addEventListener("click",i)})}updatePlot(){this.showTCrown?(this.updateTCrownPlot(),console.log("Updating T crown plot")):(this.updateCrownPlot(),console.log("Updating crown plot"))}reset(){this.currentPlate=null,this.lastRenderSignature=null,this.tCrownIndex=0,this.alternateRollIndex=0,this.standSelect&&(this.standSelect.innerHTML=""),this.passSelect&&(this.passSelect.innerHTML=""),this.output&&(this.output.textContent="Load a plate and select a stand/roll."),this.renderer&&this.renderer.update(),this.crown2dContainer&&this.crown2dContainer.replaceChildren()}populateDropdowns(){if(!this.currentPlate||!this.standSelect)return;this.lastRenderSignature=null;const e=this.currentPlate.stands||[];if(this.standSelect.innerHTML="",e.forEach((t,i)=>{const s=document.createElement("option");s.value=String(i),s.textContent=t.standId?`${i} (${t.standId})`:`${i}`,this.standSelect.appendChild(s)}),e.length===0)this.output&&(this.output.textContent="No stands parsed.");else{const t=ee.globalStandIndex<e.length?ee.globalStandIndex:0;ee.setGlobalStandIndex(t),this.standSelect.value=String(t),this.populatePasses(),this.renderSelectedRoll(),this.updateCrownPlot()}}populatePasses(){if(!this.currentPlate||!this.passSelect)return;const e=this.currentPlate.preCalc?.passes||[];this.passSelect.innerHTML="",e.forEach((i,s)=>{const r=document.createElement("option"),a=i?.passIndex!==void 0?i.passIndex:s;r.value=String(s),r.textContent=String(a),this.passSelect.appendChild(r)});const t=ee.globalPassIndex<e.length?ee.globalPassIndex:0;ee.setGlobalPassIndex(t),e.length>0&&(this.passSelect.value=String(t))}handleSelectionChange(){if(!this.currentPlate||!this.standSelect)return;const e=this.currentPlate.stands||[],t=Number(this.standSelect.value);ee.setGlobalStandIndex(t),e[t],this.lastRenderSignature=null,this.renderSelectedRoll(),this.updateCrownPlot()}handlePassChange(){if(!this.passSelect)return;const e=Number(this.passSelect.value);ee.setGlobalPassIndex(Number.isFinite(e)?e:0),this.autoSyncStandPass&&this.performStandSync(),this.updateCrownPlot()}cycleSelection(e,t){if(this.currentPlate)if(e==="stand"){const i=this.currentPlate.stands||[];if(i.length===0)return;const r=(ee.globalStandIndex+t+i.length)%i.length;ee.setGlobalStandIndex(r),this.standSelect.value=String(r),this.handleSelectionChange()}else{const i=this.currentPlate.preCalc?.passes||[];if(i.length===0)return;const r=(ee.globalPassIndex+t+i.length)%i.length;ee.setGlobalPassIndex(r),this.passSelect.value=String(r),this.handlePassChange()}}togglePlotMode(){this.showAlternatePlot=!this.showAlternatePlot,ue.setBoolean(ie.ROLL_PLOT_MODE,this.showAlternatePlot),this.updatePlot()}syncStandWithPass(){this.autoSyncStandPass=!this.autoSyncStandPass,ue.setBoolean(ie.ROLL_AUTO_SYNC,this.autoSyncStandPass);const e=document.getElementById("rollSyncBtn");e&&(this.autoSyncStandPass?(e.classList.remove("strikeout"),e.classList.add("standard")):(e.classList.remove("standard"),e.classList.add("strikeout"))),this.standSelect&&(this.standSelect.disabled=this.autoSyncStandPass,this.standSelect.style.opacity=this.autoSyncStandPass?"0.5":"1");const t=document.getElementById("rollStandPrev"),i=document.getElementById("rollStandNext");t&&(t.disabled=this.autoSyncStandPass,t.style.opacity=this.autoSyncStandPass?"0.5":"1"),i&&(i.disabled=this.autoSyncStandPass,i.style.opacity=this.autoSyncStandPass?"0.5":"1"),this.autoSyncStandPass&&this.performStandSync()}performStandSync(){if(!this.currentPlate)return;const e=this.currentPlate.preCalc?.passes||[],t=ee.globalPassIndex;if(t>=0&&t<e.length){const i=e[t];i&&i.standIndex!==void 0&&(ee.setGlobalStandIndex(i.standIndex),this.standSelect&&(this.standSelect.value=String(i.standIndex),this.handleSelectionChange()))}}renderSelectedRoll(){if(!this.currentPlate||!this.output||!this.standSelect)return;const e=this.currentPlate.stands||[],t=Number(this.standSelect.value||0),i=e[t];if(!i){this.output.textContent="No stand selected.";return}const s=Array.isArray(i.rolls)?i.rolls.map((p,g)=>({roll:p,originalIndex:g})).filter(p=>!!p.roll):[];if(s.length===0){this.output.textContent="No rolls available for this stand.",this.renderer&&(this.renderer.update(),this.lastRenderSignature=null);return}const r=this.pickPrimaryRollEntry(s),a=r.roll,o=r.originalIndex;this.output.replaceChildren();const l=document.createElement("div");l.style.cssText="display:grid;grid-template-columns:200px minmax(0,1fr) 240px;gap:16px;align-items:start;width:100%;";const c=this.buildRollDetailsCard(s);c.style.width="100%",c.style.minWidth="0",c.style.maxWidth="100%",l.appendChild(c);const h=document.createElement("div");h.style.cssText="display:flex;flex-direction:column;gap:16px;max-width:240px;width:100%;";const d=this.buildShapeCard(s,10);d&&(d.style.width="100%",d.style.maxWidth="240px",h.appendChild(d));const u=this.buildStandCard(t,i);if(u.style.width="100%",u.style.maxWidth="240px",h.appendChild(u),l.style.gridTemplateColumns="minmax(0,1fr) 240px",l.appendChild(h),this.output.appendChild(l),this.updateCrownPlot(),this.renderer){const p=this.resolveRollPair(i,a,o),g=this.createGeometrySignature(t,a,p);this.shouldRender(g)&&(this.renderer.update(p.work,p.backup),this.lastRenderSignature=g)}}resolveRollPair(e,t,i){if(!e||!Array.isArray(e.rolls)||!e.rolls.length)return{work:void 0,backup:void 0};const s=e.rolls.map((m,f)=>({roll:m,originalIndex:f})).filter(m=>!!m.roll);if(s.length===0)return{work:void 0,backup:void 0};const r=Number.isFinite(i)?i:0,a=t?s.find(m=>m.roll===t):void 0,o=s.find(m=>m.originalIndex===r),l=a??o??s[0],c=s.indexOf(l),h=this.rollCategory(l.roll),d=(m,f=!1)=>{if(m==="UNKNOWN")return this.findClosestEntry(s,c,S=>S.roll!==l.roll);const E=this.findClosestEntry(s,c,S=>S.roll===l.roll?!1:this.rollCategory(S.roll)===m);return E||(f?this.findClosestEntry(s,c,S=>S.roll!==l.roll):void 0)};let u,p;if(h==="BACKUP")p=l,u=d("WORK",!0);else if(h==="WORK")u=l,p=d("BACKUP",!0);else{u=d("WORK")??l;const m=u?.roll;p=this.findClosestEntry(s,c,f=>f.roll!==m)??d("BACKUP")}const g=u?this.toSimpleGeometry(u.roll,"WorkRoll"):void 0,x=p?this.toSimpleGeometry(p.roll,"BackupRoll"):void 0;return{work:g,backup:x}}toSimpleGeometry(e,t){if(!e)return;let i=this.toPositiveNumber(e.radius)??this.toPositiveNumber(e.neckRadius);if(!i&&Array.isArray(e.shape)&&e.shape.length){const o=Math.max(...e.shape.map(l=>Math.abs(Number(l)||0)));i=this.toPositiveNumber(o)}let s=this.toPositiveNumber(e.length)??this.toPositiveNumber(e.neckLength);!s&&typeof e.shapeSize=="number"&&e.shapeSize>0&&(s=this.toPositiveNumber(e.shapeSize)),i||(i=150),s||(s=1600);const r=this.toPositiveNumber(e.neckRadius),a=this.toPositiveNumber(e.neckLength);return{name:e.rollId||t,radius:i,bodyLength:s,neckRadius:r,neckLength:a}}toPositiveNumber(e){const t=Number(e);return Number.isFinite(t)&&t>0?t:void 0}createGeometrySignature(e,t,i){return{standIndex:e,selectedKey:this.selectedRollKey(t),workKey:this.geometryKey(i.work),backupKey:this.geometryKey(i.backup)}}shouldRender(e){return this.lastRenderSignature?e.standIndex!==this.lastRenderSignature.standIndex||e.selectedKey!==this.lastRenderSignature.selectedKey||e.workKey!==this.lastRenderSignature.workKey||e.backupKey!==this.lastRenderSignature.backupKey:!0}geometryKey(e){return e?`${e.name??"unnamed"}:${e.radius.toFixed(6)}:${e.bodyLength.toFixed(6)}`:"none"}pickPrimaryRollEntry(e){return e.find(i=>this.rollCategory(i.roll)==="WORK")??e.find(i=>this.rollCategory(i.roll)==="BACKUP")??e[0]}buildStandCard(e,t){const i=[{label:"Stand Index",value:e},{label:"Stand ID",value:t.standId??"N/A"},{label:"Shift Mode",value:t.shiftMode===void 0&&t.shiftModeString===void 0?"N/A":`${t.shiftMode??"N/A"} (${t.shiftModeString??"N/A"})`},{label:"Balancing Forces",value:t.balancingForces?.length?t.balancingForces.map(a=>Math.abs(a)>=1e6?a.toExponential(2):a).join(", "):"None"}],s=this.createCard(""),r=document.createElement("dl");return r.style.cssText="margin:0;display:grid;grid-template-columns:max-content max-content;gap:2px 12px;font-size:11px;line-height:1.25;",i.forEach(a=>{const o=document.createElement("dt");o.textContent=a.label,o.style.cssText="font-weight:600;color:var(--color-muted);white-space:nowrap;";const l=document.createElement("dd");l.textContent=this.formatValue(a.value),l.style.cssText="margin:0;font-family:monospace;white-space:nowrap;",r.appendChild(o),r.appendChild(l)}),s.appendChild(r),s}buildRollDetailsCard(e){const t=this.createCard("");t.classList.add("rolls-card");const i=e.slice(0,2),s=[{label:"Roll Index",getValue:d=>d.originalIndex},{label:"Roll ID",getValue:d=>d.roll.rollId??"N/A"},{label:"Roll Type",getValue:d=>`${d.roll.rollType??"N/A"} (${d.roll.rollTypeString??"Roll"})`},{label:"Cone Type",getValue:d=>{const u=d.roll.coneType,p=d.roll.coneTypeString;return u===void 0&&p===void 0?"N/A":`${u??"N/A"} (${p??"N/A"})`}},{label:"Grind Type",getValue:d=>{const u=d.roll.grindType,p=d.roll.grindTypeString;return u===void 0&&p===void 0?"N/A":`${u??"N/A"} (${p??"N/A"})`}},{label:"Radius",getValue:d=>d.roll.radius},{label:"Length",getValue:d=>d.roll.length},{label:"Neck Length",getValue:d=>d.roll.neckLength},{label:"Neck Radius",getValue:d=>d.roll.neckRadius},{label:"Shape Size",getValue:d=>d.roll.shapeSize??(Array.isArray(d.roll.shape)?d.roll.shape.length:"N/A")},{label:"Grind Distance",getValue:d=>Array.isArray(d.roll.grindDistance)?`[${d.roll.grindDistance.join(", ")}]`:d.roll.grindDistance},{label:"Grinding Correction",getValue:d=>d.roll.grindingCorrection},{label:"Taper Correction",getValue:d=>d.roll.taperCorrection},{label:"Shape Code",getValue:d=>d.roll.shapeCode},{label:"Shape Correction",getValue:d=>d.roll.shapeCorrection},{label:"E-Modulus Inner",getValue:d=>d.roll.emodi},{label:"E-Modulus Outer",getValue:d=>d.roll.emodo},{label:"P-Cap",getValue:d=>d.roll.pcap},{label:"Cone Length",getValue:d=>Array.isArray(d.roll.coneLength)?`[${d.roll.coneLength.join(", ")}]`:d.roll.coneLength},{label:"Cone Height",getValue:d=>Array.isArray(d.roll.coneHeight)?`[${d.roll.coneHeight.join(", ")}]`:d.roll.coneHeight},{label:"Cone Distance",getValue:d=>Array.isArray(d.roll.coneDist)?`[${d.roll.coneDist.join(", ")}]`:d.roll.coneDist},{label:"R-Cone",getValue:d=>Array.isArray(d.roll.rCone)?`[${d.roll.rCone.join(", ")}]`:d.roll.rCone}],r=Math.ceil(s.length/2),a=s.slice(0,r),o=s.slice(r),l=i.length*2,c=document.createElement("div");c.className="rolls-entry-container",c.style.cssText=`display:grid;grid-template-columns:repeat(${l}, minmax(0,1fr));gap:20px 24px;align-items:start;`;const h=(d,u,p)=>{const g=document.createElement("div");if(g.className="roll-column",p==="left"){const m=document.createElement("div");m.className="roll-column__title",m.textContent=`Entry ${d.originalIndex} (${d.roll.rollTypeString||"Roll"})`,g.appendChild(m)}else{const m=document.createElement("div");m.className="roll-column__title roll-column__title--spacer",m.textContent=" ",g.appendChild(m)}const x=document.createElement("div");return x.className="roll-fields",u.forEach(m=>{const f=document.createElement("div");f.className="roll-field";const E=document.createElement("div");E.className="roll-field__label",E.textContent=m.label;const S=document.createElement("div");S.className="roll-field__value",S.textContent=this.formatValue(m.getValue(d)),f.appendChild(E),f.appendChild(S),x.appendChild(f)}),g.appendChild(x),g};return i.forEach(d=>{c.appendChild(h(d,a,"left")),c.appendChild(h(d,o,"right"))}),t.appendChild(c),t}buildShapeCard(e,t){const i=Math.min(t,Math.max(...e.map(l=>Array.isArray(l.roll.shape)?l.roll.shape.length:0)));if(i===0)return null;const s=this.createCard(""),r=e.length,a=document.createElement("div");a.style.cssText=`margin:0;display:grid;grid-template-columns:max-content repeat(${r}, minmax(0,1fr));gap:4px 12px;font-size:11px;line-height:1.25;align-items:center;`;const o=document.createElement("div");o.style.cssText="font-weight:600;color:var(--color-muted);white-space:nowrap;",a.appendChild(o),e.forEach(l=>{const c=document.createElement("div");c.textContent=`${l.originalIndex} (${l.roll.rollTypeString||"Roll"})`,c.style.cssText="font-weight:600;color:var(--color-muted);white-space:nowrap;",a.appendChild(c)});for(let l=0;l<i;l++){const c=document.createElement("div");c.textContent=`p${l}`,c.style.cssText="font-weight:600;color:var(--color-muted);white-space:nowrap;",a.appendChild(c),e.forEach(h=>{const d=document.createElement("div"),u=Array.isArray(h.roll.shape)?h.roll.shape:void 0,p=u&&l<u.length?u[l]:void 0;d.textContent=this.formatShapeValue(p),d.style.cssText="margin:0;font-family:monospace;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;",a.appendChild(d)})}return s.appendChild(a),s}createCard(e){const t=document.createElement("div");if(t.style.cssText="border:1px solid var(--color-border);border-radius:6px;padding:6px 8px;background:var(--surface-subtle);display:flex;flex-direction:column;gap:4px;min-width:0;flex:0 1 auto;max-width:440px;",e){const i=document.createElement("div");i.textContent=e,i.style.cssText="font-size:11px;font-weight:600;letter-spacing:0.5px;color:var(--color-muted);",t.appendChild(i)}return t}formatValue(e){return e==null||e===""?"N/A":typeof e=="boolean"?e?"Yes":"No":typeof e=="number"&&Number.isFinite(e)&&Math.abs(e)>=1e6?e.toExponential(2):String(e)}formatShapeValue(e){return e==null?"—":typeof e=="number"?Number.isFinite(e)?String(e):"—":String(e)}selectedRollKey(e){if(!e)return"none";const t=e.rollId??e.name??"unknown",i=e.rollTypeString??e.rollType??"type?";return`${t}:${i}`}rollCategory(e){const t=String(e?.rollTypeString||"").toUpperCase();return t.includes("WORK")?"WORK":t.includes("BACK")?"BACKUP":t.includes("INTER")?"INTERMEDIATE":"UNKNOWN"}findClosestEntry(e,t,i){for(let s=1;s<e.length;s++){const r=t+s;if(r<e.length){const o=e[r];if(i(o))return o}const a=t-s;if(a>=0){const o=e[a];if(i(o))return o}}}ensureLayoutWrapper(){if(!this.output||!this.rendererContainer)return;const e=this.output.closest(".roll-layout"),t=this.crown2dContainer;if(e){let a=e.querySelector(".roll-plots-row");a||(a=document.createElement("div"),a.className="roll-plots-row",a.style.cssText="display:flex;gap:16px;align-items:flex-start;width:100%;flex-wrap:nowrap;",e.insertBefore(a,e.firstChild)),a.contains(this.rendererContainer)||a.appendChild(this.rendererContainer),t&&!a.contains(t)&&a.appendChild(t),this.applyRendererSizing(),this.applyCrownSizing();return}if(!this.output.closest("#rollCard"))return;const s=document.createElement("div");s.className="roll-layout",s.style.cssText="display:flex;flex-direction:column;gap:20px;width:100%;",this.output.parentElement?.insertBefore(s,this.output);const r=document.createElement("div");r.className="roll-plots-row",r.style.cssText="display:flex;gap:16px;align-items:flex-start;width:100%;flex-wrap:nowrap;",r.appendChild(this.rendererContainer),t&&r.appendChild(t),s.appendChild(r),s.appendChild(this.output),this.applyRendererSizing(),this.applyCrownSizing()}updateCrownPlot(){if(this.showTCrown){this.updateTCrownPlot();return}if(!this.crown2dContainer)return;if(!this.currentPlate){this.crown2dContainer.style.display="none";return}const t=(this.currentPlate.preCalc?.passes||[])[ee.globalPassIndex],i=t?.twData?.wCrown&&Array.isArray(t.twData.wCrown)&&t.twData.wCrown[0]?.data?t.twData.wCrown[0].data:void 0;let s;const a=(this.currentPlate?.postCalc?.passes||[])[ee.globalPassIndex];if(a?.twData?.wCrown&&Array.isArray(a.twData.wCrown)&&a.twData.wCrown[0]?.data&&(s=a.twData.wCrown[0].data),!i||!Array.isArray(i)||i.length===0){this.crown2dContainer.style.display="none",this.crown2dContainer.replaceChildren();return}const o=i.length,l=[];if(o===1)l.push(0);else for(let x=0;x<o;x++)l.push(-1+2*x/(o-1));this.crown2dContainer.style.display="block",this.applyCrownSizing();let c=this.crown2dContainer.querySelector(".crown-wrapper");c||(c=document.createElement("div"),c.className="crown-wrapper",c.style.cssText="position:relative;display:flex;flex-direction:row;width:100%;height:100%;align-items:stretch;",this.crown2dContainer.appendChild(c));const h=x=>{let m=c.querySelector(`.${x}`);return m||(m=document.createElement("div"),m.className=x,m.style.cssText="display:none;flex-direction:row;width:100%;height:100%;align-items:stretch;",c.appendChild(m)),m},d=h("crown-normal-plot"),u=h("crown-alternate-plot"),p=h("tcrown-normal-plot"),g=h("tcrown-alternate-plot");p.style.display="none",g.style.display="none",d.style.display=this.showAlternatePlot?"none":"flex",u.style.display=this.showAlternatePlot?"flex":"none",this.showAlternatePlot?this.renderAlternatePlot(u):this.renderNormalCrownPlot(d,l,i,s)}renderAlternatePlot(e){let t=e.querySelector(".crown-plot");t||(t=document.createElement("div"),t.className="crown-plot",t.style.cssText="flex:1 1 auto;min-height:0;",e.appendChild(t));let i=e.querySelector(".crown-controls");if(i||(i=document.createElement("div"),i.className="crown-controls",i.style.cssText="display:flex;flex-direction:column;gap:6px;padding:6px 4px 6px 6px;margin-left:8px;border-left:1px solid var(--color-border);background:white;",e.appendChild(i)),!this.currentPlate||!this.standSelect){t.textContent="No data available";return}const s=this.currentPlate.stands||[],r=Number(this.standSelect.value||0),a=s[r];if(!a||!Array.isArray(a.rolls)){t.textContent="No roll data";return}const o=a.rolls.map((E,S)=>({roll:E,originalIndex:S})).filter(E=>!!E.roll);if(o.length===0){t.textContent="No rolls available";return}let l=i.querySelector("#alternateRollIndexBtn");l||(l=document.createElement("button"),l.id="alternateRollIndexBtn",l.type="button",l.className="help-btn",l.setAttribute("data-compact-toggle",""),i.insertBefore(l,i.firstChild)),l.textContent=String(this.alternateRollIndex),l.hasAttribute("data-has-listener")||(l.addEventListener("click",()=>{const E=this.currentPlate?.stands?.[Number(this.standSelect?.value)||0],S=E?E.rolls.map((v,L)=>({roll:v,originalIndex:L})).filter(v=>!!v.roll):[];S.length>0&&(this.alternateRollIndex=(this.alternateRollIndex+1)%S.length,this.showTCrown?this.updateTCrownPlot():this.updateCrownPlot())}),l.setAttribute("data-has-listener","true"));const h=o[this.alternateRollIndex].roll;if(h.grindType!==1){t.textContent=`Alternate plot only available for grindType=1 (current: ${h.grindType??"N/A"})`;return}if(!Array.isArray(h.shape)||h.shape.length===0){t.textContent="No shape coefficients available";return}const d=h.shape,u=200,p=[],g=[];for(let E=0;E<u;E++){const S=-1+2*E/(u-1);let v=0;for(let L=d.length-1;L>=0;L--)v=v*S+d[L];v=v*S,p.push(S),g.push(v)}const x=[];x.push({x:p,y:g,mode:"lines",line:{color:Vi,width:2},name:`Roll ${this.alternateRollIndex} Shape`});const m={margin:{l:60,r:10,t:10,b:30},xaxis:{title:"Position",range:[-1,1]},yaxis:{title:"Shape"},showlegend:!1,autosize:!0,height:Wt},f={displayModeBar:!1,responsive:!0};Me.react(t,x,m,f),requestAnimationFrame(()=>{const E=t.clientWidth;if(Me?.relayout)try{Me.relayout(t,{width:E,height:Wt})}catch{}})}renderNormalCrownPlot(e,t,i,s){let r=e.querySelector(".crown-plot");r||(r=document.createElement("div"),r.className="crown-plot",r.style.cssText="flex:1 1 auto;min-height:0;",e.appendChild(r));let a=e.querySelector(".crown-controls");a||(a=document.createElement("div"),a.className="crown-controls",a.style.cssText="display:flex;flex-direction:column;gap:6px;padding:6px 4px 6px 6px;margin-left:8px;background:white;",e.appendChild(a));const o=(E,S,v)=>{let L=a.querySelector("#"+E);return L||(L=document.createElement("button"),L.id=E,L.type="button",L.textContent=S,L.className="help-btn",L.setAttribute("data-compact-toggle",""),L.dataset.color=v,a.appendChild(L)),L},l=o("crownModeBtn",this.showTCrown?"wCrown":"tCrown","#666"),c=o("crownPreBtn","Pre",Vi),h=o("crownPostBtn","Post",mi),d=o("crownDiffBtn","DIFF",Rs),u=[];c.classList.contains("strikeout")||c.classList.remove("strikeout"),u.push({x:t,y:i,mode:"lines",line:{color:Vi,width:2},name:"preCalc",yaxis:"y",visible:c.classList.contains("strikeout")?"legendonly":!0});let p=!1;if(s&&Array.isArray(s)&&s.length===i.length){u.push({x:t,y:s,mode:"lines",line:{color:mi,width:2,dash:"dash"},name:"postCalc",yaxis:"y",visible:h.classList.contains("strikeout")?"legendonly":!0});const E=s.map((S,v)=>S-i[v]);u.push({x:t,y:E,mode:"lines",line:{color:Rs,width:2},name:"diff",yaxis:"y2",visible:d.classList.contains("strikeout")?"legendonly":!0}),p=!0,d.disabled=!1,d.classList.remove("strikeout")}else if(s&&Array.isArray(s)&&s.length>0){const E=s.length,S=[];if(E===1)S.push(0);else for(let v=0;v<E;v++)S.push(-1+2*v/(E-1));u.push({x:S,y:s,mode:"lines",line:{color:mi,width:2,dash:"dot"},name:"postCalc",yaxis:"y",visible:h.classList.contains("strikeout")?"legendonly":!0}),d.classList.remove("active"),d.classList.add("strikeout"),d.disabled=!0}else h.classList.add("strikeout"),h.disabled=!0,d.classList.add("strikeout"),d.disabled=!0;const g={margin:{l:60,r:p?80:10,t:10,b:30},xaxis:{title:"OS → DS"},yaxis:{title:"Crown",side:"left"},yaxis2:p?{title:"Δ Crown",overlaying:"y",side:"right",showgrid:!1}:void 0,showlegend:!1,autosize:!0,height:Wt},x={displayModeBar:!1,responsive:!0};Me.react(r,u,g,x),requestAnimationFrame(()=>{const E=r.clientWidth;if(Me?.relayout)try{Me.relayout(r,{width:E,height:Wt})}catch{}});const m=()=>{const E=u.map(S=>S.name==="preCalc"?c.classList.contains("strikeout")?"legendonly":!0:S.name==="postCalc"?h.classList.contains("strikeout")?"legendonly":!0:S.name==="diff"&&d.classList.contains("strikeout")?"legendonly":!0);Me.restyle(r,{visible:E})},f=E=>{E.disabled||(E.classList.toggle("strikeout"),m())};c.onclick=()=>f(c),h.onclick=()=>f(h),d.onclick=()=>f(d),l.onclick=()=>{if(this.showTCrown=!this.showTCrown,this.showTCrown){const E=this.getTCrownLength();this.tCrownIndex>=E&&(this.tCrownIndex=0)}l.textContent=this.showTCrown?"wCrown":"tCrown",this.updatePlot()}}getTCrownLength(){if(!this.currentPlate)return 0;const i=(this.currentPlate.preCalc?.passes||[])[ee.globalPassIndex]?.twData?.tCrown;return Array.isArray(i)?i.length:0}updateTCrownPlot(){if(!this.crown2dContainer)return;if(!this.currentPlate){this.crown2dContainer.style.display="none";return}this.crown2dContainer.style.display="block",this.applyCrownSizing();let e=this.crown2dContainer.querySelector(".crown-wrapper");e||(e=document.createElement("div"),e.className="crown-wrapper",e.style.cssText="position:relative;display:flex;flex-direction:row;width:100%;height:100%;align-items:stretch;",this.crown2dContainer.appendChild(e));const i=(this.currentPlate.preCalc?.passes||[])[ee.globalPassIndex];let s;Array.isArray(i?.twData?.tCrown)&&i.twData.tCrown[this.tCrownIndex]?.data&&(s=i.twData.tCrown[this.tCrownIndex].data);let r;const o=(this.currentPlate?.postCalc?.passes||[])[ee.globalPassIndex];if(Array.isArray(o?.twData?.tCrown)&&o.twData.tCrown[this.tCrownIndex]?.data&&(r=o.twData.tCrown[this.tCrownIndex].data),!s||s.length===0)return;const l=s.length,c=[];if(l===1)c.push(0);else for(let x=0;x<l;x++)c.push(-1+2*x/(l-1));const h=x=>{let m=e.querySelector(`.${x}`);return m||(m=document.createElement("div"),m.className=x,m.style.cssText="display:none;flex-direction:row;width:100%;height:100%;align-items:stretch;",e.appendChild(m)),m},d=h("tcrown-normal-plot"),u=h("tcrown-alternate-plot"),p=h("crown-normal-plot"),g=h("crown-alternate-plot");p.style.display="none",g.style.display="none",d.style.display=this.showAlternatePlot?"none":"flex",u.style.display=this.showAlternatePlot?"flex":"none",this.showAlternatePlot?this.renderAlternatePlot(u):this.renderNormalTCrownPlot(d,c,s,r)}renderNormalTCrownPlot(e,t,i,s){let r=e.querySelector(".crown-plot");r||(r=document.createElement("div"),r.className="crown-plot",r.style.cssText="flex:1 1 auto;min-height:0;",e.appendChild(r));let a=e.querySelector(".crown-controls");a||(a=document.createElement("div"),a.className="crown-controls",a.style.cssText="display:flex;flex-direction:column;gap:6px;padding:6px 4px 6px 6px;margin-left:8px;border-left:1px solid var(--color-border);background:white;",e.appendChild(a));const o=(S,v,L)=>{let w=a.querySelector("#"+S);return w||(w=document.createElement("button"),w.id=S,w.type="button",w.textContent=v,w.className="help-btn",w.setAttribute("data-compact-toggle",""),w.dataset.color=L,a.appendChild(w)),w},l=o("tCrownModeBtn",this.showTCrown?"wCrown":"tCrown","#666"),c=o("tCrownPreBtn","Pre",Vi),h=o("tCrownPostBtn","Post",mi),d=o("tCrownDiffBtn","DIFF",Rs);let u=a.querySelector("#tCrownIndexBtn");u||(u=document.createElement("button"),u.id="tCrownIndexBtn",u.type="button",u.className="help-btn",u.setAttribute("data-compact-toggle",""),a.appendChild(u),u.addEventListener("click",()=>{const S=this.getTCrownLength();S>0&&(this.tCrownIndex=(this.tCrownIndex+1)%S),this.updateTCrownPlot()})),u.textContent=String(this.tCrownIndex);const p=[];c.classList.contains("strikeout")||c.classList.remove("strikeout"),p.push({x:t,y:i,mode:"lines",line:{color:Vi,width:2},name:"preCalc",yaxis:"y",visible:c.classList.contains("strikeout")?"legendonly":!0});let g=!1;if(s&&s.length===i.length){p.push({x:t,y:s,mode:"lines",line:{color:mi,width:2,dash:"dash"},name:"postCalc",yaxis:"y",visible:h.classList.contains("strikeout")?"legendonly":!0});const S=s.map((v,L)=>v-i[L]);p.push({x:t,y:S,mode:"lines",line:{color:Rs,width:2},name:"diff",yaxis:"y2",visible:d.classList.contains("strikeout")?"legendonly":!0}),g=!0,d.disabled=!1,d.classList.remove("strikeout")}else if(s&&s.length>0){const S=s.length,v=[];if(S===1)v.push(0);else for(let L=0;L<S;L++)v.push(-1+2*L/(S-1));p.push({x:v,y:s,mode:"lines",line:{color:mi,width:2,dash:"dot"},name:"postCalc",yaxis:"y",visible:h.classList.contains("strikeout")?"legendonly":!0}),d.classList.remove("active"),d.classList.add("strikeout"),d.disabled=!0}else h.classList.add("strikeout"),h.disabled=!0,d.classList.add("strikeout"),d.disabled=!0;const x={margin:{l:60,r:g?80:10,t:10,b:30},xaxis:{title:"OS → DS"},yaxis:{title:"tCrown",side:"left"},yaxis2:g?{title:"Δ tCrown",overlaying:"y",side:"right",showgrid:!1}:void 0,showlegend:!1,autosize:!0,height:Wt},m={displayModeBar:!1,responsive:!0};Me.react(r,p,x,m),requestAnimationFrame(()=>{const S=r.clientWidth;try{Me.relayout(r,{width:S,height:Wt})}catch{}});const f=()=>{const S=p.map(v=>v.name==="preCalc"?c.classList.contains("strikeout")?"legendonly":!0:v.name==="postCalc"?h.classList.contains("strikeout")?"legendonly":!0:v.name==="diff"&&d.classList.contains("strikeout")?"legendonly":!0);Me.restyle(r,{visible:S})},E=S=>{S.disabled||(S.classList.toggle("strikeout"),f())};c.onclick=()=>E(c),h.onclick=()=>E(h),d.onclick=()=>E(d),l.onclick=()=>{if(this.showTCrown=!this.showTCrown,this.showTCrown){const S=this.getTCrownLength();this.tCrownIndex>=S&&(this.tCrownIndex=0)}l.textContent=this.showTCrown?"wCrown":"tCrown",this.updatePlot()}}applyRendererSizing(){this.rendererContainer&&(this.rendererContainer.style.width=Wt+"px",this.rendererContainer.style.height=Wt+"px",this.rendererContainer.style.marginTop="0",this.rendererContainer.style.border="1px solid var(--color-border)",this.rendererContainer.style.borderRadius="6px")}applyCrownSizing(){this.crown2dContainer&&(this.crown2dContainer.style.height=Wt+"px",this.crown2dContainer.style.minHeight=Wt+"px",this.crown2dContainer.style.flex="1 1 auto",this.crown2dContainer.style.maxWidth="100%",this.crown2dContainer.style.marginTop="0")}resizePlots(){if(this.applyRendererSizing(),this.applyCrownSizing(),this.crown2dContainer){const e=this.crown2dContainer.querySelector(".crown-plot");if(e&&Me?.relayout){const t=e.clientWidth;try{Me.relayout(e,{width:t,height:Wt})}catch{}}}}}const yl={"+":1,"-":1,"*":2,"/":2},wx=/^[A-Za-z_][A-Za-z0-9_]*$/;class Tx{constructor(){this.signals=new Map,this.aliasToName=new Map,this.nameToAlias=new Map,this.baseSignalOrder=[],this.derivedSignalOrder=[],this.derivedDefinitions=new Map,this.defaultVectorLength=null}setBaseSignals(e){const t=new Set,i=[];e.forEach(s=>{if(!s||typeof s.name!="string")return;const r=s.name,a=this.ensureAliasForName(r),o=Array.isArray(s.values)?[...s.values]:[];o.length>0&&this.defaultVectorLength===null&&(this.defaultVectorLength=o.length);const l=this.signals.get(r),c={name:r,alias:a,values:o,source:s.source??"base",description:s.description,lastUpdated:Date.now()};if(l&&l.source==="derived")throw new Error(`Signal "${r}" is reserved for derived usage`);this.signals.set(r,c),t.add(r),i.push(r)}),this.baseSignalOrder.forEach(s=>{if(!t.has(s)){const r=this.signals.get(s);if(r&&r.source==="base"){this.signals.delete(s);const a=this.nameToAlias.get(s);a&&this.aliasToName.get(a)===s&&this.aliasToName.delete(a),this.nameToAlias.delete(s)}}}),this.baseSignalOrder=i,this.recomputeDerivedSignals()}listSignals(){const e=[];return this.baseSignalOrder.forEach(t=>{const i=this.signals.get(t);i&&e.push(i)}),this.derivedSignalOrder.forEach(t=>{const i=this.signals.get(t);i&&e.push(i)}),e}getSignal(e){const t=this.resolveName(e);if(t)return this.signals.get(t)}getDerivedDefinitions(){return Array.from(this.derivedDefinitions.entries()).map(([e,t])=>this.mapEntryToDefinition(e,t))}getDefinition(e){const t=this.derivedDefinitions.get(e);return t?this.mapEntryToDefinition(e,t):void 0}mapEntryToDefinition(e,t){return t.type==="literal"?{name:e,type:"literal",expression:t.expression,literalValues:[...t.values]}:{name:e,type:"expression",expression:t.expression}}defineDerivedSignal(e,t,i={}){if(!wx.test(e))throw new Error("Signal names must start with a letter or underscore and contain only letters, numbers, or underscores.");const s=this.resolveName(e);if(s&&this.signals.get(s)?.source==="base")throw new Error(`The name "${e}" conflicts with an existing signal.`);const r=e,a=this.derivedDefinitions.has(e);let o,l;Array.isArray(i.literalValues)?(o=[...i.literalValues],l={type:"literal",expression:t,values:[...o]}):(o=this.evaluateExpression(t),l={type:"expression",expression:t}),o.length>0&&this.defaultVectorLength===null&&(this.defaultVectorLength=o.length),this.derivedDefinitions.set(e,l);const c={name:e,alias:r,values:o,source:"derived",expression:t,lastUpdated:Date.now()};return a||this.derivedSignalOrder.push(e),this.signals.set(e,c),this.aliasToName.set(r,e),this.nameToAlias.set(e,r),{record:c,isUpdate:a}}removeDerivedSignal(e){const t=this.resolveName(e);if(!t)return null;const i=this.signals.get(t);if(!i||i.source!=="derived")return null;this.signals.delete(t),this.derivedDefinitions.delete(t),this.derivedSignalOrder=this.derivedSignalOrder.filter(r=>r!==t);const s=this.nameToAlias.get(t);return s&&this.aliasToName.get(s)===t&&this.aliasToName.delete(s),this.nameToAlias.delete(t),i}recomputeDerivedSignals(){this.derivedSignalOrder.forEach(e=>{const t=this.derivedDefinitions.get(e);if(t)try{let i,s;t.type==="literal"?(i=[...t.values],s=t.expression):(i=this.evaluateExpression(t.expression),s=t.expression);const r=this.signals.get(e);r?(r.values=i,r.error=void 0,r.lastUpdated=Date.now(),s!==void 0&&(r.expression=s)):this.signals.set(e,{name:e,alias:e,values:i,source:"derived",expression:s,lastUpdated:Date.now()})}catch(i){const s=this.defaultVectorLength??0,r=s>0?new Array(s).fill(NaN):[],a=this.signals.get(e),o=i instanceof Error?i.message:String(i);if(a)a.values=r,a.error=o,a.lastUpdated=Date.now();else{const l=(t.type==="expression",t.expression);this.signals.set(e,{name:e,alias:e,values:r,source:"derived",expression:l,error:o,lastUpdated:Date.now()})}}})}computeStats(e){const t=e.length;if(t===0)return{length:t,finiteCount:0,min:NaN,max:NaN,mean:NaN};let i=0,s=1/0,r=-1/0,a=0;for(let l=0;l<t;l++){const c=e[l];Number.isFinite(c)&&(i+=1,c<s&&(s=c),c>r&&(r=c),a+=c)}const o=i>0?a/i:NaN;return i===0&&(s=NaN,r=NaN),{length:t,finiteCount:i,min:s,max:r,mean:o}}getAlias(e){return this.nameToAlias.get(e)}getDefaultLength(){return this.defaultVectorLength}resolveName(e){if(this.signals.has(e))return e;const t=this.aliasToName.get(e);return t&&this.signals.has(t)?t:null}ensureAliasForName(e){const t=this.nameToAlias.get(e);if(t)return t;const i=this.sanitizeName(e);let s=i,r=1;for(;this.aliasToName.has(s)&&this.aliasToName.get(s)!==e;)s=`${i}_${r}`,r+=1;return this.aliasToName.set(s,e),this.nameToAlias.set(e,s),s}sanitizeName(e){const t=e.replace(/[^A-Za-z0-9_]/g,"_");return/^[A-Za-z_]/.test(t)?t||"signal":`s_${t}`}evaluateExpressionString(e){return this.evaluateExpression(e)}evaluateExpression(e){const t=this.tokenize(e),i=this.toRpn(t);return this.evaluateRpn(i)}tokenize(e){const t=[],i=e.trim();let s=0,r=null;for(;s<i.length;){const a=i[s];if(/\s/.test(a)){s+=1;continue}if(/[A-Za-z_]/.test(a)){let o=s+1;for(;o<i.length&&/[A-Za-z0-9_]/.test(i[o]);)o+=1;t.push({type:"identifier",value:i.slice(s,o)}),r="identifier",s=o;continue}if(/[0-9.]/.test(a)){let o=s+1,l=a===".";for(;o<i.length;){const c=i[o];if(/[0-9]/.test(c)){o+=1;continue}if(c==="."&&!l){l=!0,o+=1;continue}if((c==="e"||c==="E")&&o+1<i.length){const h=i[o+1];if(/[0-9+-]/.test(h)){for(o+=2;o<i.length&&/[0-9]/.test(i[o]);)o+=1;continue}}break}t.push({type:"number",value:i.slice(s,o)}),r="number",s=o;continue}if(a==="("){t.push({type:"lparen",value:a}),r="lparen",s+=1;continue}if(a===")"){t.push({type:"rparen",value:a}),r="rparen",s+=1;continue}if(a==="+"||a==="-"||a==="*"||a==="/"){a==="-"&&(r===null||r==="operator"||r==="lparen")&&t.push({type:"number",value:"0"}),t.push({type:"operator",value:a}),r="operator",s+=1;continue}throw new Error(`Unexpected character "${a}" in expression.`)}return t}toRpn(e){const t=[],i=[];for(e.forEach(s=>{if(s.type==="number"||s.type==="identifier"){t.push(s);return}if(s.type==="operator"){for(;i.length>0&&i[i.length-1].type==="operator"&&yl[i[i.length-1].value]>=yl[s.value];)t.push(i.pop());i.push(s);return}if(s.type==="lparen"){i.push(s);return}if(s.type==="rparen"){for(;i.length>0&&i[i.length-1].type!=="lparen";)t.push(i.pop());if(i.length===0||i[i.length-1].type!=="lparen")throw new Error("Mismatched parentheses in expression.");i.pop()}});i.length>0;){const s=i.pop();if(s.type==="lparen"||s.type==="rparen")throw new Error("Mismatched parentheses in expression.");t.push(s)}return t}evaluateRpn(e){const t=[];if(e.forEach(s=>{if(s.type==="number"){t.push({kind:"scalar",scalar:Number(s.value)});return}if(s.type==="identifier"){const r=this.getSignal(s.value);if(!r)throw new Error(`Unknown signal "${s.value}".`);t.push({kind:"vector",data:[...r.values]});return}if(s.type==="operator"){if(t.length<2)throw new Error("Invalid expression: missing values for operation.");const r=t.pop(),a=t.pop(),o=this.applyOperator(s.value,a,r);t.push({kind:"vector",data:o})}}),t.length!==1)throw new Error("Invalid expression: leftover values after evaluation.");const i=t.pop();return i.kind==="scalar"?[i.scalar]:i.data}applyOperator(e,t,i){const s=this.determineReferenceLength(t,i),r=this.promote(t,s),a=this.promote(i,s),o=new Array(s);for(let l=0;l<s;l++){const c=r[l],h=a[l];switch(e){case"+":o[l]=c+h;break;case"-":o[l]=c-h;break;case"*":o[l]=c*h;break;case"/":o[l]=c/h;break;default:throw new Error(`Unsupported operator "${e}".`)}}return o}determineReferenceLength(e,t){return e.kind==="vector"?e.data.length:t.kind==="vector"?t.data.length:this.defaultVectorLength!==null&&this.defaultVectorLength>0?this.defaultVectorLength:1}promote(e,t){if(e.kind==="vector"){if(e.data.length!==t)throw new Error("Cannot combine vectors with different lengths.");return e.data}return new Array(t).fill(e.scalar)}}const Ax=6;class Px{constructor(e){this.workspace=e,this.formatMode="short",this.ansKey="ans",this.lastResult=[]}execute(e){const t=e.trim();if(!t)return{messages:[]};const i=this.findAssignmentIndex(t);if(i>-1){const c=t.slice(0,i).trim(),h=t.slice(i+1).trim();return this.handleAssignment(c,h)}const s=t.match(/^([A-Za-z_][A-Za-z0-9_]*)\s*\[(.+)\]$/);if(s){const[,c,h]=s;return this.handleIndexAccess(c,h)}const r=t.split(/\s+/),a=r[0],o=a.toLowerCase(),l=r.slice(1);if(o==="help"||o==="?")return this.handleHelp();if(o==="clc")return this.handleClc();if(o==="whos"||o==="list")return this.handleWhos();if(o==="signal")return this.handleSignal(l);if(o==="format")return this.handleFormat(l);if(o==="head")return this.previewValues(l,"head");if(o==="tail")return this.previewValues(l,"tail");if(o==="show"||o==="print")return this.previewValues(l,"head");if(o==="stats"||o==="describe"||o==="summary")return this.handleDescribe(l);if(o==="drop"||o==="del"||o==="remove"||o==="clear"||o==="delete")return this.handleClear(l);if(r.length===1){const c=this.workspace.getSignal(a);if(c)return this.handleDisplaySignal(c)}try{const c=this.workspace.evaluateExpressionString(t);this.updateAns(c);const h=this.formatVector(c);return{messages:[this.message("info",`ans = ${h}`)]}}catch(c){const h=c instanceof Error?c.message:String(c);return{messages:[this.message("error",h)]}}}findAssignmentIndex(e){const t=[];for(let i=0;i<e.length;i++){const s=e[i];if(s==="("&&t.push(s),s===")"&&t.pop(),s==="="&&t.length===0)return i}return-1}handleAssignment(e,t){if(!e)return{messages:[this.message("error",'Provide a variable name before "=".')]};if(!t)return{messages:[this.message("error",'Provide an expression after "=".')]};try{let i;this.isVectorLiteral(t)&&(i=this.parseVectorLiteral(t));const s=this.workspace.defineDerivedSignal(e,t,{literalValues:i}),r=s.isUpdate?"updated":"created",a=s.record.alias,o=this.formatVector(s.record.values);this.updateAns(s.record.values);const l=i?[...i]:[...s.record.values];return{messages:[this.message("success",`Signal "${a}" ${r}.`),this.message("info",`${a} = ${o}`)],created:{...s,definition:{expression:t,literalValues:l}},requiresRefresh:!1}}catch(i){const s=i instanceof Error?i.message:String(i);return{messages:[this.message("error",s)]}}}handleHelp(){const e=["Signal console commands:","  help / ?             Show this help text","  whos                 List signals (size, origin)","  clc                  Clear console output","  format short|long    Switch numeric formatting","  head <name> [n]      Preview first n values (default 6)","  tail <name> [n]      Preview last n values","  summary <name>       Show summary statistics","  clear <name> [...]   Delete derived signals (omit names to clear all)","  signal <name>        Register a derived signal for plotting","  newSig = expr        Create/update signal (supports + - * /, literals)","  signalName           Print the full contents of that signal","Example:  myShift = speed - stripThickness","          format long","          whos"].join(`
`);return{messages:[this.message("info",e)]}}handleWhos(){const e=this.workspace.listSignals();if(e.length===0)return{messages:[this.message("info","No signals loaded.")]};const t=e.map(a=>({name:a.alias,size:`1x${a.values.length}`,className:"double",origin:a.source==="base"?"base":"derived"}));t.sort((a,o)=>a.name.localeCompare(o.name));const i=[{header:"Name",values:t.map(a=>a.name)},{header:"Size",values:t.map(a=>a.size)},{header:"Class",values:t.map(a=>a.className)},{header:"Source",values:t.map(a=>a.origin)}],s=i.map(a=>Math.max(a.header.length,...a.values.map(o=>o.length))),r=[];return r.push(i.map((a,o)=>this.pad(a.header,s[o])).join("  ")),r.push(i.map((a,o)=>this.pad("-".repeat(a.header.length),s[o])).join("  ")),t.forEach(a=>{const o=[a.name,a.size,a.className,a.origin];r.push(o.map((l,c)=>this.pad(l,s[c])).join("  "))}),{messages:[this.message("info",r.join(`
`))]}}handleClc(){return{messages:[],clearOutput:!0}}handleSignal(e){if(e.length===0)return{messages:[this.message("error","Specify a signal name to publish.")]};const t=e[0],i=this.workspace.getSignal(t);return i?i.source==="base"?{messages:[this.message("info",`Base signal "${i.alias}" is already available for plotting.`)]}:{messages:[this.message("success",`Signal "${i.alias}" is ready for plotting.`)],publish:i.name,requiresRefresh:!0}:{messages:[this.message("error",`Signal "${t}" not found.`)]}}handleFormat(e){if(e.length===0)return{messages:[this.message("info",`Current format: ${this.formatMode}. Use "format short" or "format long".`)]};const t=e[0].toLowerCase();return t!=="short"&&t!=="long"?{messages:[this.message("error",'Format accepts "long" or "short".')]}:(this.formatMode=t,{messages:[this.message("success",`Format set to ${t}.`)]})}previewValues(e,t){if(e.length===0)return{messages:[this.message("error","Specify a signal name.")]};const i=e[0],s=this.workspace.getSignal(i);if(!s)return{messages:[this.message("error",`Signal "${i}" not found.`)]};let r=Ax;if(e.length>1){const d=Number(e[1]);if(!Number.isFinite(d)||d<=0)return{messages:[this.message("error","Provide a positive number of values to preview.")]};r=Math.floor(d)}const a=t==="head"?s.values.slice(0,r):s.values.slice(Math.max(0,s.values.length-r)),o=t==="head"?1:Math.max(1,s.values.length-a.length+1),l=o+a.length-1,c=`${s.alias} (${o}:${l}) =`,h=this.formatVector(a);return this.updateAns(a),{messages:[this.message("info",`${c} ${h}`)]}}handleDescribe(e){if(e.length===0)return{messages:[this.message("error","Specify a signal name.")]};const t=e[0],i=this.workspace.getSignal(t);if(!i)return{messages:[this.message("error",`Signal "${t}" not found.`)]};const s=this.workspace.computeStats(i.values);return{messages:[this.message("info",this.describeStats(i.alias,s))]}}handleClear(e){if(e.length===0){const a=this.workspace.getDerivedDefinitions();if(a.length===0)return{messages:[this.message("info","No derived signals to clear.")]};const o=[],l=[];return a.forEach(({name:c})=>{if(c===this.ansKey)return;const h=this.workspace.removeDerivedSignal(c);h&&(o.push(h.name),l.push(h.alias))}),{messages:[this.message("success",`Cleared ${l.length} derived signal(s).`)],removed:o,requiresRefresh:o.length>0}}const t=[],i=[],s=[];e.forEach(a=>{const o=this.workspace.removeDerivedSignal(a);o?(t.push(o.name),i.push(o.alias)):s.push(this.message("error",`No derived signal named "${a}" found.`))});const r=[];return i.length>0&&r.push(this.message("success",`Cleared ${i.join(", ")}.`)),r.push(...s),{messages:r.length>0?r:[this.message("error","No signals cleared.")],removed:t.length>0?t:void 0,requiresRefresh:t.length>0}}handleDisplaySignal(e){const t=e.alias,i=this.formatVector(e.values);this.updateAns(e.values);const s=[],r=this.workspace.getDefinition(e.name);if(r){if(r.type==="expression"&&r.expression)s.push(this.message("info",`${t}: ${r.expression}`));else if(r.type==="literal"){const a=r.literalValues?.length??e.values.length;s.push(this.message("info",`${t}: literal (${a})`))}}return s.push(this.message("info",`${t} = ${i}`)),{messages:s}}handleIndexAccess(e,t){const i=this.workspace.getSignal(e);if(!i)return{messages:[this.message("error",`Signal "${e}" not found.`)]};const s=t.trim();if(!s)return{messages:[this.message("error","Provide an index expression inside brackets.")]};const r=i.values.length,a=e;if(!s.includes(":")){const x=this.parseIndexValue(s,r);if(x===null)return{messages:[this.message("error",`Invalid index "${s}". Indices are 1-based.`)]};if(x<1||x>r)return{messages:[this.message("error",`Index ${x} is out of range (1-${r}).`)]};const m=i.values[x-1],f=this.describeResolvedLabel(s,x),E=`${a}[${f}] = ${this.formatNumber(m)}`;return this.updateAns([m]),{messages:[this.message("info",E)]}}const l=s.split(":");if(l.length!==2)return{messages:[this.message("error","Only single colon ranges are supported (e.g., 2:10).")]};const c=this.parseIndexValue(l[0],r,1),h=this.parseIndexValue(l[1],r,r);if(c===null||h===null)return{messages:[this.message("error",`Invalid range "${s}".`)]};if(c<1||h<1||c>r||h>r)return{messages:[this.message("error",`Range ${c}:${h} is out of bounds (1-${r}).`)]};if(c>h)return{messages:[this.message("error",`Start index ${c} exceeds end index ${h}.`)]};const d=i.values.slice(c-1,h),u=`${c}:${h}`,p=this.describeResolvedLabel(s.replace(/\s+/g,""),u),g=this.formatVector(d);return this.updateAns(d),{messages:[this.message("info",`${a}[${p}] = ${g}`)]}}describeStats(e,t){return[`${e} summary:`,`  length: ${t.length}`,`  finite: ${t.finiteCount}`,`  min: ${this.formatNumber(t.min)}`,`  max: ${this.formatNumber(t.max)}`,`  mean: ${this.formatNumber(t.mean)}`].join(`
`)}formatVector(e){return e.length===0?"[]":`[ ${e.map(i=>this.formatNumber(i)).join("  ")} ]`}formatNumber(e){if(!Number.isFinite(e)){if(Number.isNaN(e))return"NaN";if(e===1/0)return"Inf";if(e===-1/0)return"-Inf"}const t=Math.abs(e),i=t!==0&&(t>=1e6||t<1e-4),s=this.formatMode==="long"?14:4;if(i){let a=e.toExponential(s);return a=a.replace(/(\.[0-9]*?)(0+)(e[+-]?\d+)/i,(o,l,c,h)=>{const d=l.replace(/0+$/,"");return(d==="."?"":d)+h}),a=a.replace(/\.e/i,"e"),a}let r=e.toFixed(s);return r.includes(".")&&(r=r.replace(/0+$/,"").replace(/\.$/,"")),r==="-0"&&(r="0"),r}pad(e,t){return e.padEnd(t," ")}parseIndexValue(e,t,i){const s=e.trim();if(!s)return i!==void 0?i:null;const r=s.toLowerCase();if(r==="end")return t;const a=r.match(/^end\s*([-+])\s*(\d+)$/);if(a){const[,l,c]=a,h=Number(c);return Number.isFinite(h)?l==="-"?t-h:t+h:null}const o=Number(r);return Number.isFinite(o)?Math.trunc(o):null}describeResolvedLabel(e,t){const i=e.trim().replace(/\s+/g,""),s=typeof t=="number"?String(t):t;return i===s?s:`${i} (${s})`}isVectorLiteral(e){const t=e.trim();return t.startsWith("[")&&t.endsWith("]")}parseVectorLiteral(e){const t=e.trim();if(!this.isVectorLiteral(t))throw new Error("Invalid literal syntax.");const i=t.slice(1,-1).trim();if(!i)return[];const s=i.split(/[\s,;]+/).filter(Boolean);return s.length===0?[]:s.map(a=>{const o=Number(a);if(!Number.isFinite(o))throw new Error(`Invalid numeric literal "${a}".`);return o})}updateAns(e){this.lastResult=[...e];try{this.workspace.defineDerivedSignal(this.ansKey,"__ans_literal__",{literalValues:[...e]})}catch{}}message(e,t){return{kind:e,text:t}}}const Ma=["#1f77b4","#ff7f0e","#2ca02c","#d62728","#9467bd","#8c564b","#e377c2","#7f7f7f","#bcbd22","#17becf","#aec7e8","#ffbb78","#98df8a","#ff9896","#c5b0d5","#c49c94","#f7b6d3","#c7c7c7","#dbdb8d","#9edae5","#393b79","#637939","#8c6d31","#843c39","#7b4173","#5254a3","#8ca252","#bd9e39","#ad494a","#a55194","#4e79a7","#f28e2c","#e15759","#76b7b2","#59a14f","#edc949","#af7aa1","#ff9da7","#9c755f","#bab0ab","#d7b5a6","#fabfd2","#b07aa1","#d4a574","#9d7660","#d3d3d3"],Wi="bendingForcesSP",Xi="rollingForceSP",Pn="bendingForcesSP_DPC_FLC_TCC_MAI",Xn="bendingForcesSP_DPC_FLC_TCC",ji="rollingForce_sum",Mi="additionalBendingByDPC_SP_derived",xi="shiftPositionsSP",Rx={[Pn]:"bendingForcesSP + additionalBendingByDPC + additionalBendingByFLC + additionalBendingByTCC + manualInterventionBending",[Xn]:"bendingForcesSP + additionalBendingByDPC + additionalBendingByFLC + additionalBendingByTCC",[ji]:"rollingForceDS + rollingForceOS",[Mi]:"dFbdFr * (rollingForce_sum - rollingForceSP)"},bl={additionalBendingByDPC:"#FF6B6B",additionalBendingByFLC:"#4ECDC4",additionalBendingByPRC:"#45B7D1",additionalBendingByTCC:"#FFA07A",[Mi]:"#F4D03F",additionalShiftingByMAI:"#98D8C8",backTension:"#F7DC6F",bendingAtLowerLimit:"#BB8FCE",bendingAtUpperLimit:"#85C1E9",bendingForces:"#F8C471",[Pn]:"#9C27B0",[Xn]:"#7B1FA2",bendingForcesSP:"#82E0AA",dFbdFr:"#AED6F1",dFbdsr:"#AED6F1",forwTension:"#F1948A",manualInterventionBending:"#AED6F1",pairCross:"#A9DFBF",rollingForceSP:"#D7BDE2",[ji]:"#9C27B0",rollingForceDS:"#FAD7A0",rollingForceOS:"#ABEBC6",screwDownDS:"#D5A6BD",screwDownOS:"#A3E4D7",segmentEnd:"#F9E79F",segmentNumber:"#AED6F1",segmentStart:"#D2B4DE",shiftPositions:"#A9CCE3",[xi]:"#A9CCE3",speed:"#FADBD8",stripThickness:"#D5DBDB",temperatureConversionFactor:"#E8DAEF",timeStamp:"#D6EAF8",width:"#EAEDED",future1:"#F4D03F",future2:"#EC7063",future3:"#5DADE2",future4:"#58D68D",future5:"#AF7AC5",future6:"#F39C12",future7:"#E74C3C",future8:"#3498DB",future9:"#2ECC71",future10:"#9B59B6"};function Lx(n){let e=0;for(let t=0;t<n.length;t++)e=(e<<5)-e+n.charCodeAt(t),e|=0;return e<0?-e:e}function Nx(n,e={}){if(e[n])return e[n];if(bl[n])return bl[n];const t=Lx(n);return Ma[t%Ma.length]}function kt(n){if(n!=null){if(typeof n=="number")return Number.isFinite(n)?n:void 0;if(Array.isArray(n)){const e=n.find(t=>typeof t=="number"&&Number.isFinite(t));return typeof e=="number"?e:void 0}if(typeof n=="object"){if(typeof n.size=="number"&&Array.isArray(n.data)){const e=n.data.find(t=>typeof t=="number"&&Number.isFinite(t));return typeof e=="number"?e:void 0}if("value"in n&&typeof n.value=="number"){const e=n.value;return Number.isFinite(e)?e:void 0}}}}const It={PLOT:{LINE_WIDTH:2,MARKER_SIZE:5,MARKER_LINE_WIDTH:1},BREAKPOINTS:{MOBILE:480},MARGINS:{DESKTOP:{l:60,r:30,t:30,b:50},MOBILE:{l:40,r:15,t:20,b:35}},FONT_SIZES:{DESKTOP:{title:12},MOBILE:{title:11},SMALL_MOBILE:{title:10}}},Dx=["help","whos","list","clc","format","short","long","head","tail","show","print","stats","describe","summary","drop","del","remove","clear","delete","signal"],El=[{id:"dpc",label:"DPC",signals:["additionalBendingByDPC",Mi]},{id:"bending",label:"Bending",signals:["bendingForces",Pn]}];class Ix{constructor(){this.specialMode=!1,this.specialLayer=null,this.specialResizeObserver=null,this.specialPlotDivs=new Set,this.autoSyncStandPass=!1,this.inheritanceSegmentVisible=!0,this.useSegmentStartForXAxis=!1,this.currentPlate=null,this.customColors={},this.y2AxisSignals=new Set,this.y3AxisSignals=new Set,this.focusedSignal=null,this.activeSignals=new Set,this.hasSavedState=!1,this.hasLoadedSavedState=!1,this.consoleHistory=[],this.consoleHistoryIndex=0,this.consoleCompletionState=null,this.hasAppliedStoredConsoleSignals=!1,this.consoleLogLimit=250,this.availableSignals=[],this.baseAvailableSignals=[],this.customSignalDescriptors=new Map,this.customSignalDefinitions=new Map,this.customSignalPublications=new Set,this.container=document.getElementById("segmentsPlotContainer"),this.standSelect=document.getElementById("standSelect"),this.passSelect=document.getElementById("segmentsPassSelect"),this.syncButton=document.getElementById("segmentsSyncBtn"),this.inheritanceButton=document.getElementById("segmentsInheritanceBtn"),this.copyButton=document.getElementById("segmentsCopyBtn"),this.xAxisButton=document.getElementById("segmentsXAxisBtn"),this.specialButton=document.getElementById("segmentsSpecialBtn"),this.standPrevBtn=document.getElementById("standPrev"),this.standNextBtn=document.getElementById("standNext"),this.signalPanel=document.getElementById("segmentsSignalPanel"),this.signalSearch=document.getElementById("segmentsSignalSearch"),this.selectedSignalsContainer=document.getElementById("segmentsSelectedSignals"),this.noSignalsMessage=document.getElementById("segmentsNoSignals"),this.signalList=document.getElementById("segmentsSignalList"),this.clearAllBtn=document.getElementById("segmentsClearAllSignals"),this.selectAllBtn=document.getElementById("segmentsSelectAllSignals"),this.deselectAllBtn=document.getElementById("segmentsDeselectAllSignals"),this.presetSelect=document.getElementById("segmentsPresetSelect"),this.consolePanel=document.getElementById("segmentsConsolePanel"),this.consoleOutput=document.getElementById("segmentsConsoleOutput"),this.consoleForm=document.getElementById("segmentsConsoleForm"),this.consoleInput=document.getElementById("segmentsConsoleInput"),this.consoleHelpButton=document.getElementById("segmentsConsoleHelp"),this.signalWorkspace=new Tx,this.signalConsole=new Px(this.signalWorkspace),this.autoSyncStandPass=ue.getBoolean(ie.SEGMENTS_AUTO_SYNC,!1),this.inheritanceSegmentVisible=ue.getBoolean(ie.SEGMENTS_INHERITANCE_VISIBLE,!0),this.loadConsoleDefinitionsFromStorage(),this.loadConsoleHistory(),this.initializeAvailableSignals(),this.populatePresetDropdown(),this.rebuildAvailableSignals(),this.setupEventListeners(),this.setupConsoleEvents(),this.setupPresetEvents(),this.applyAutoSyncUIState(),this.applyInheritanceUIState(),this.applyXAxisUIState(),ee.addStandIndexListener(()=>{this.updateStandDropdownSelection(),this.renderAllSegmentsPlot()}),ee.addPassIndexListener(()=>{this.updatePassDropdownSelection(),this.autoSyncStandPass?this.performStandSync():this.renderAllSegmentsPlot()})}getSignalLabel(e){const t=this.customSignalDescriptors.get(e);if(t)return t.label;const i=this.baseAvailableSignals.find(s=>s.key===e);return i?i.label:e}computeDerivedBendingSum(e,t){let i=0,s=!1;return typeof t=="number"&&Number.isFinite(t)&&(i+=t,s=!0),["additionalBendingByDPC","additionalBendingByFLC","additionalBendingByTCC","manualInterventionBending"].forEach(a=>{const o=this.extractSegmentFieldValue(e,a);typeof o=="number"&&Number.isFinite(o)&&(i+=o,s=!0)}),s?i:null}computeDerivedBendingSumComparison(e,t){let i=0,s=!1;return typeof t=="number"&&Number.isFinite(t)&&(i+=t,s=!0),["additionalBendingByDPC","additionalBendingByFLC","additionalBendingByTCC"].forEach(a=>{const o=this.extractSegmentFieldValue(e,a);typeof o=="number"&&Number.isFinite(o)&&(i+=o,s=!0)}),s?i:null}computeDerivedRollingForce(e){const t=this.extractSegmentFieldValue(e,"rollingForceOS"),i=this.extractSegmentFieldValue(e,"rollingForceDS"),s=typeof t=="number"&&Number.isFinite(t),r=typeof i=="number"&&Number.isFinite(i);return!s&&!r?null:(s?t:0)+(r?i:0)}computeDerivedAdditionalBendingByDPC_SP(e){if(!this.currentPlate)return null;const t=this.currentPlate.preCalc?.passes;if(!Array.isArray(t)||t.length===0)return null;const i=ee.globalPassIndex;if(!Number.isInteger(i)||i<0||i>=t.length)return null;const s=t[i],r=kt(s?.profile?.bmRes?.dFb_dFr);if(r===void 0||!Number.isFinite(r))return null;const a=this.computeDerivedRollingForce(e);if(a===null||!Number.isFinite(a))return null;const o=this.getCurrentPassRollingForce();if(o===void 0||!Number.isFinite(o))return null;const l=r*(a-o);return Number.isFinite(l)?l:null}extractSegmentFieldValue(e,t){if(!e)return null;let i=null;if(t==="timeStamp"){if(e.timeStamp&&Array.isArray(e.timeStamp)&&e.timeStamp.length>0){const s=e.timeStamp[0];s&&typeof s.seconds=="number"&&(i=s.seconds)}}else if(this.isRollIndependentField(t)){if(e[t]!==void 0&&e[t]!==null){if(typeof e[t]=="number")i=e[t];else if(e[t].data&&Array.isArray(e[t].data)&&e[t].data.length>0)i=e[t].data[0];else if(Array.isArray(e[t])&&e[t].length>0)i=e[t][0];else if(typeof e[t]=="string"){const s=parseFloat(e[t]);isNaN(s)||(i=s)}}}else if(this.isArrayOfArraysField(t)){if(e[t]){if(e[t].data&&Array.isArray(e[t].data)&&e[t].data.length>ee.globalStandIndex){const s=e[t].data[ee.globalStandIndex];s&&s.data&&Array.isArray(s.data)&&s.data.length>0?i=s.data[0]:Array.isArray(s)&&s.length>0?i=s[0]:typeof s=="number"&&(i=s)}else if(Array.isArray(e[t])&&e[t].length>ee.globalStandIndex){const s=e[t][ee.globalStandIndex];s&&s.data&&Array.isArray(s.data)&&s.data.length>0?i=s.data[0]:Array.isArray(s)&&s.length>0?i=s[0]:typeof s=="number"&&(i=s)}}}else if(e[t])if(e[t].data&&Array.isArray(e[t].data)&&e[t].data.length>ee.globalStandIndex)i=e[t].data[ee.globalStandIndex];else if(e[t].data&&Array.isArray(e[t].data)&&e[t].data.length>0){const s=e[t].data;let r=Math.floor(s.length/2);(s[r]===0||s[r]===null||isNaN(s[r]))&&(r=s.length-1),(s[r]===0||s[r]===null||isNaN(s[r]))&&(r=0),i=s[r]}else Array.isArray(e[t])&&e[t].length>0?i=e[t][0]:typeof e[t]=="number"&&(i=e[t]);return i!==null&&!isNaN(i)?i:null}setupEventListeners(){document.addEventListener("plateSelected",(e=>{this.currentPlate=e.detail.plate,this.focusedSignal=null,this.hasSavedState=this.loadSavedState(),!this.hasSavedState&&!this.hasLoadedSavedState&&(this.hasLoadedSavedState=!0,this.addDefaultSignals()),this.populateStandDropdown(),this.populatePassDropdown(),this.populateSignalList(),this.updateSelectedSignalsDisplay(),this.specialMode?this.specialLayer?this.renderSpecialMultiPassPlots():this.enterSpecialLayer():this.renderAllSegmentsPlot()})),this.standSelect&&this.standSelect.addEventListener("change",()=>this.handleStandChange()),this.passSelect&&this.passSelect.addEventListener("change",()=>this.handlePassChange()),this.setupControlButtons(),this.setupSignalSelectionEvents()}reset(){this.currentPlate=null,this.activeSignals.clear(),this.focusedSignal=null,this.standSelect&&(this.standSelect.innerHTML=""),this.passSelect&&(this.passSelect.innerHTML=""),this.container&&this.container.replaceChildren(),this.signalList&&(this.signalList.innerHTML=""),this.updateSelectedSignalsDisplay(),this.applyAutoSyncUIState(),this.applyInheritanceUIState(),this.hasAppliedStoredConsoleSignals=!1}populateStandDropdown(){if(!this.currentPlate||!this.standSelect)return;const e=this.currentPlate.stands||[];if(e.length===0){this.standSelect&&(this.standSelect.innerHTML="");return}this.standSelect.innerHTML="",e.forEach((i,s)=>{const r=document.createElement("option");r.value=String(s),r.textContent=i?.standId?`${s} (${i.standId})`:`${s}`,this.standSelect.appendChild(r)});const t=ee.globalStandIndex<e.length?ee.globalStandIndex:0;ee.setGlobalStandIndex(t),this.standSelect.value=String(t),this.applyAutoSyncUIState()}populatePassDropdown(){if(!this.currentPlate||!this.passSelect)return;const e=this.currentPlate.preCalc?.passes||[];if(this.passSelect.innerHTML="",e.length===0){this.passSelect.value="",ee.setGlobalPassIndex(0);return}e.forEach((s,r)=>{const a=document.createElement("option"),o=s?.passIndex!==void 0?s.passIndex:r;a.value=String(r),a.textContent=String(o),this.passSelect.appendChild(a)});const t=ee.globalPassIndex,i=t<e.length?t:0;ee.setGlobalPassIndex(i),this.passSelect.value=String(i),this.autoSyncStandPass&&t===i&&this.performStandSync(),this.applyAutoSyncUIState()}handleStandChange(){if(this.autoSyncStandPass){this.updateStandDropdownSelection();return}const e=Number(this.standSelect?.value);ee.setGlobalStandIndex(Number.isFinite(e)?e:0)}handlePassChange(){const e=Number(this.passSelect?.value);ee.setGlobalPassIndex(Number.isFinite(e)?e:0)}setupControlButtons(){this.standPrevBtn&&this.standPrevBtn.addEventListener("click",()=>this.cycleStand(-1)),this.standNextBtn&&this.standNextBtn.addEventListener("click",()=>this.cycleStand(1));const e=document.getElementById("segmentsPassPrev");e&&e.addEventListener("click",()=>this.cyclePass(-1));const t=document.getElementById("segmentsPassNext");t&&t.addEventListener("click",()=>this.cyclePass(1)),this.syncButton&&this.syncButton.addEventListener("click",()=>this.toggleAutoSyncStandPass()),this.inheritanceButton&&this.inheritanceButton.addEventListener("click",()=>this.toggleInheritanceSegmentVisibility()),this.copyButton&&this.copyButton.addEventListener("click",()=>this.copySignalsToClipboard()),this.xAxisButton&&this.xAxisButton.addEventListener("click",()=>this.toggleXAxis()),this.specialButton&&this.specialButton.addEventListener("click",()=>this.toggleSpecialMode())}applyAutoSyncUIState(){this.syncButton&&(this.syncButton.classList.remove("standard","strikeout"),this.syncButton.classList.add(this.autoSyncStandPass?"standard":"strikeout")),this.standSelect&&(this.standSelect.disabled=this.autoSyncStandPass,this.standSelect.style.opacity=this.autoSyncStandPass?"0.5":"1"),this.standPrevBtn&&(this.standPrevBtn.disabled=this.autoSyncStandPass,this.standPrevBtn.style.opacity=this.autoSyncStandPass?"0.5":"1"),this.standNextBtn&&(this.standNextBtn.disabled=this.autoSyncStandPass,this.standNextBtn.style.opacity=this.autoSyncStandPass?"0.5":"1")}applyInheritanceUIState(){this.inheritanceButton&&(this.inheritanceButton.classList.remove("standard","strikeout"),this.inheritanceButton.classList.add(this.inheritanceSegmentVisible?"standard":"strikeout"))}applyXAxisUIState(){this.xAxisButton&&(this.xAxisButton.classList.remove("standard","strikeout"),this.xAxisButton.classList.add(this.useSegmentStartForXAxis?"standard":"strikeout")),this.applySpecialUIState()}applySpecialUIState(){if(this.specialButton)if(this.specialMode){this.specialButton.textContent="MP",this.specialButton.title="Switch to single-pass view";const e=document.getElementById("segmentsHeaderPickers"),t=document.getElementById("segmentsHeaderControls");e&&(e.style.visibility="hidden",e.style.pointerEvents="none"),t&&(t.style.visibility="hidden",t.style.pointerEvents="none")}else{this.specialButton.textContent="SP",this.specialButton.title="Switch to multi-pass view";const e=document.getElementById("segmentsHeaderPickers"),t=document.getElementById("segmentsHeaderControls");e&&(e.style.visibility="",e.style.pointerEvents=""),t&&(t.style.visibility="",t.style.pointerEvents="")}}toggleSpecialMode(){this.specialMode=!this.specialMode,this.applySpecialUIState(),this.specialMode?this.enterSpecialLayer():this.exitSpecialLayer()}enterSpecialLayer(){const e=document.getElementById("segmentsContainer");if(e&&(e.style.display="none"),!this.specialLayer){const t=document.getElementById("segmentsCard");if(!t)return;this.specialLayer=document.createElement("div"),this.specialLayer.id="segmentsSpecialLayer",this.specialLayer.style.cssText="display:flex; flex-wrap:wrap; gap:12px; align-items:stretch; width:100%;",t.appendChild(this.specialLayer)}this.renderSpecialMultiPassPlots()}exitSpecialLayer(){const e=document.getElementById("segmentsContainer");e&&(e.style.display="flex",e.style.flexDirection="row",e.style.alignItems="stretch",e.style.gap="12px"),this.specialLayer&&(this.specialLayer.remove(),this.specialLayer=null),this.specialResizeObserver&&(this.specialResizeObserver.disconnect(),this.specialResizeObserver=null),this.specialPlotDivs.clear(),this.specialSeriesCache&&this.specialSeriesCache.clear(),this.renderAllSegmentsPlot();const t=document.getElementById("segmentsPlotColumn");t&&(t.style.display="flex",t.style.flexDirection="column",t.style.gap="12px",t.style.minWidth="0",t.style.alignSelf="stretch")}renderSpecialMultiPassPlots(){if(!this.specialLayer||!this.currentPlate)return;this.specialLayer.replaceChildren(),this.specialPlotDivs.clear(),this.specialSeriesCache?this.specialSeriesCache.clear():this.specialSeriesCache=new Map;const e=this.currentPlate.preCalc?.passes;if(!Array.isArray(e)||e.length===0){const d=document.createElement("div");d.textContent="No passes available",d.style.cssText="padding:20px; text-align:center; width:100%; color:var(--color-muted);",this.specialLayer.appendChild(d);return}const t=this.currentPlate.measured;if(!t||!Array.isArray(t.segmentData)||t.segmentData.length===0){const d=document.createElement("div");d.textContent="No segment data available",d.style.cssText="padding:20px; text-align:center; width:100%; color:var(--color-muted);",this.specialLayer.appendChild(d);return}const i=t.segmentData,s=400,r=this.y2AxisSignals.size>0,a=this.y3AxisSignals.size>0,o={margin:{l:40,r:0,t:20,b:40},showlegend:!1,plot_bgcolor:"#ffffff",paper_bgcolor:"#ffffff",hovermode:"closest",autosize:!0,hoverlabel:Rn};r&&(o.yaxis2={automargin:!0,side:"right",overlaying:"y",showline:!0,linecolor:"rgba(150,150,150,0.9)",zeroline:!1,showgrid:!1,layer:"above traces",tickfont:{color:"rgba(140,140,140,0.95)"},titlefont:{size:11,color:"rgba(140,140,140,0.95)"}}),a&&(o.yaxis3={automargin:!0,side:"right",overlaying:"y",anchor:"free",position:1,showline:!0,linecolor:"rgba(55,90,158,0.95)",zeroline:!1,showgrid:!1,layer:"above traces",tickfont:{color:"rgba(55,90,158,0.95)"},titlefont:{size:11,color:"rgba(55,90,158,0.95)"}});const l=ee.globalPassIndex,c=ee.globalStandIndex;e.forEach((d,u)=>{const p=document.createElement("div");p.style.cssText="flex:1 1 calc(33.333% - 12px); min-width:260px; display:flex; flex-direction:column; gap:4px; background:var(--surface); border:1px solid var(--color-border); border-radius:6px; padding:6px;";const g=document.createElement("div");g.style.cssText="font-size:11px; font-weight:600; color:var(--color-text-secondary); display:flex; justify-content:space-between; align-items:center;";let x="";if(this.currentPlate?.preCalc?.passes&&Array.isArray(this.currentPlate.preCalc.passes)){const S=this.currentPlate.preCalc.passes[u],v=typeof S?.standIndex=="number"?S.standIndex:void 0;let L;if(v!==void 0&&Array.isArray(this.currentPlate.stands)&&this.currentPlate.stands[v]){const w=this.currentPlate.stands[v];L=typeof w?.standId=="string"?w.standId:void 0}v!==void 0&&(x=`, Stand ${v}`,L&&(x+=` (${L})`))}g.textContent=`Pass ${u}${x}`,p.appendChild(g);const m=document.createElement("div");m.style.cssText="position:relative; width:100%;",p.appendChild(m),this.specialLayer.appendChild(p);const f=typeof d?.standIndex=="number"?d.standIndex:void 0,E=this.createSegmentTracesForPass(i,u,f);if(E.length===0){const S=document.createElement("div");S.textContent="No active signals",S.style.cssText="font-size:11px; color:var(--color-muted); padding:8px;",m.appendChild(S)}else{const S={...o};Me.newPlot(m,E,S,{displayModeBar:!1,responsive:!0,displaylogo:!1}),requestAnimationFrame(()=>{const v=m.clientWidth;if(Me?.relayout)try{Me.relayout(m,{width:v,height:s})}catch{}}),this.specialPlotDivs.add(m)}}),ee.runSilently(()=>{ee.setGlobalPassIndex(l),ee.setGlobalStandIndex(c)});const h=e.length%3;if(h!==0){const d=3-h;for(let u=0;u<d;u++){const p=document.createElement("div");p.style.cssText="flex:1 1 calc(33.333% - 12px); min-width:260px; visibility:hidden; pointer-events:none;",this.specialLayer.appendChild(p)}}this.specialResizeObserver&&(this.specialResizeObserver.disconnect(),this.specialResizeObserver=null)}createSegmentTracesForPass(e,t,i){const s=[];return this.availableSignals.forEach(r=>{if(!this.activeSignals.has(r.key))return;const a=this.getNumericSeriesForSegmentsForPass(e,r.key,t,i);if(a.reduce((m,f)=>m+(isFinite(f)?1:0),0)===0)return;const l=this.useSegmentStartForXAxis?e.map(m=>m.segmentStart):e.map((m,f)=>f),c=this.getColorForSignal(r.key),h=`${r.label}<br>${this.useSegmentStartForXAxis?"Position":"Segment"}: %{x}<br>Value: %{y:.6f}<extra></extra>`,d=this.y3AxisSignals.has(r.key)?"y3":this.y2AxisSignals.has(r.key)?"y2":"y",p=e.length>800,g=p?"scattergl":"scatter",x=p?"lines":"lines+markers";s.push({x:l,y:a,type:g,mode:x,name:r.label,yaxis:d,line:{color:c,width:It.PLOT.LINE_WIDTH},marker:p?void 0:{size:It.PLOT.MARKER_SIZE,color:c,line:{width:It.PLOT.MARKER_LINE_WIDTH,color:"#000"}},hovertemplate:h,connectgaps:!1})}),s}getNumericSeriesForSegmentsForPass(e,t,i,s){let r=this.specialSeriesCache?.get(i);if(!r&&this.specialSeriesCache&&(r=new Map,this.specialSeriesCache.set(i,r)),r&&r.has(t))return r.get(t);let a=[];return ee.runSilently(()=>{if(ee.setGlobalPassIndex(i),typeof s=="number"&&s>=0&&ee.setGlobalStandIndex(s),this.customSignalDefinitions.has(t)||this.signalWorkspace.getSignal(t)&&!this.baseAvailableSignals.some(o=>o.key===t)){const o=this.signalWorkspace.getSignal(t);a=o?[...o.values]:this.computeSeriesForKeyForPass(e,t,i)}else a=this.computeSeriesForKeyForPass(e,t,i)}),r&&r.set(t,a),a}computeSeriesForKeyForPass(e,t,i){const s=t===Wi?this.getPassBendingForce(i):void 0,r=t===Xi?this.getPassRollingForce(i):void 0,a=t===xi?this.getPassShiftPositions(i):void 0,o=t===Pn||t===Xn?this.getPassBendingForce(i):void 0,l=e.length;if(t===Wi)return new Array(l).fill(typeof s=="number"&&Number.isFinite(s)?s:NaN);if(t===Xi)return new Array(l).fill(typeof r=="number"&&Number.isFinite(r)?r:NaN);if(t===xi)return new Array(l).fill(typeof a=="number"&&Number.isFinite(a)?a:NaN);if(t==="dFbdFr"){const c=this.getPassDfb_dFr(i);return new Array(l).fill(typeof c=="number"&&Number.isFinite(c)?c:NaN)}if(t==="dFbdsr"){const c=this.getPassDfb_dsr(i);return new Array(l).fill(typeof c=="number"&&Number.isFinite(c)?c:NaN)}return e.map(c=>{if(t===Pn){const d=this.computeDerivedBendingSum(c,o);return d!==null&&Number.isFinite(d)?d:NaN}if(t===Xn){const d=this.computeDerivedBendingSumComparison(c,o);return d!==null&&Number.isFinite(d)?d:NaN}if(t===Mi){const d=this.computeDerivedAdditionalBendingByDPC_SP_ForPass(c,i);return d!==null&&Number.isFinite(d)?d:NaN}if(t===ji){const d=this.computeDerivedRollingForce(c);return d!==null&&Number.isFinite(d)?d:NaN}const h=this.extractSegmentFieldValue(c,t);return h!==null&&Number.isFinite(h)?h:NaN})}getPassBendingForce(e){if(!this.currentPlate)return;const t=this.currentPlate.preCalc?.passes;if(!(!Array.isArray(t)||e<0||e>=t.length))return kt(t[e]?.profile?.bendingForces)}getPassRollingForce(e){if(!this.currentPlate)return;const t=this.currentPlate.preCalc?.passes;if(!(!Array.isArray(t)||e<0||e>=t.length))return kt(t[e]?.profile?.rollForce)}getPassShiftPositions(e){if(!this.currentPlate)return;const t=this.currentPlate.preCalc?.passes;if(!(!Array.isArray(t)||e<0||e>=t.length))return kt(t[e]?.profile?.shiftPositions)}getPassDfb_dFr(e){if(!this.currentPlate)return;const t=this.currentPlate.preCalc?.passes;if(!(!Array.isArray(t)||e<0||e>=t.length))return kt(t[e]?.profile?.bmRes?.dFb_dFr)}getPassDfb_dsr(e){if(!this.currentPlate)return;const t=this.currentPlate.preCalc?.passes;if(!(!Array.isArray(t)||e<0||e>=t.length))return kt(t[e]?.profile?.bmRes?.dFb_dsr)}computeDerivedAdditionalBendingByDPC_SP_ForPass(e,t){if(!this.currentPlate)return null;const i=this.currentPlate.preCalc?.passes;if(!Array.isArray(i)||t<0||t>=i.length)return null;const s=i[t],r=kt(s?.profile?.bmRes?.dFb_dFr);if(r===void 0||!Number.isFinite(r))return null;const a=this.computeDerivedRollingForce(e);if(a===null||!Number.isFinite(a))return null;const o=this.getPassRollingForce(t);if(o===void 0||!Number.isFinite(o))return null;const l=r*(a-o);return Number.isFinite(l)?l:null}toggleAutoSyncStandPass(){this.autoSyncStandPass=!this.autoSyncStandPass,ue.setBoolean(ie.SEGMENTS_AUTO_SYNC,this.autoSyncStandPass),this.applyAutoSyncUIState(),this.autoSyncStandPass?this.performStandSync():this.renderAllSegmentsPlot()}toggleInheritanceSegmentVisibility(){this.inheritanceSegmentVisible=!this.inheritanceSegmentVisible,ue.setBoolean(ie.SEGMENTS_INHERITANCE_VISIBLE,this.inheritanceSegmentVisible),this.applyInheritanceUIState(),this.renderAllSegmentsPlot()}toggleXAxis(){this.useSegmentStartForXAxis=!this.useSegmentStartForXAxis,ue.setBoolean(ie.SEGMENTS_USE_SEGMENT_START_FOR_X,this.useSegmentStartForXAxis),this.applyXAxisUIState(),this.renderAllSegmentsPlot()}copySignalsToClipboard(){if(!this.currentPlate)return;const e=this.currentPlate.measured;if(!e||!e.segmentData||!Array.isArray(e.segmentData)||e.segmentData.length===0)return;const t=e.segmentData,i=[];if(this.activeSignals.forEach(s=>{const a=this.getNumericSeriesForSegments(t,s).filter(o=>!isNaN(o)).map(o=>o.toString());if(a.length>0){const l=`${this.getSignalLabel(s)}	${a.join("	")}`;i.push(l)}}),i.length>0){const s=i.join(`
`);navigator.clipboard.writeText(s).then(()=>{this.copyButton&&(this.copyButton.textContent="✓",setTimeout(()=>{this.copyButton&&(this.copyButton.textContent="C")},1500))}).catch(r=>{console.error("Failed to copy signals to clipboard:",r),this.copyButton&&(this.copyButton.textContent="✗",setTimeout(()=>{this.copyButton&&(this.copyButton.textContent="C")},1500))})}}cycleStand(e){if(this.autoSyncStandPass||!this.currentPlate||!this.standSelect)return;const t=this.currentPlate.stands||[];if(t.length===0)return;const s=(ee.globalStandIndex+e+t.length)%t.length;this.standSelect.value=String(s),this.handleStandChange()}cyclePass(e){if(!this.currentPlate||!this.passSelect)return;const t=this.currentPlate.preCalc?.passes||[];if(t.length===0)return;const s=(ee.globalPassIndex+e+t.length)%t.length;this.passSelect.value=String(s),this.handlePassChange()}performStandSync(){if(!this.autoSyncStandPass)return;if(!this.currentPlate){this.renderAllSegmentsPlot();return}const e=this.currentPlate.preCalc?.passes;if(!Array.isArray(e)||e.length===0){this.renderAllSegmentsPlot();return}const t=ee.globalPassIndex;if(!Number.isInteger(t)||t<0||t>=e.length){this.renderAllSegmentsPlot();return}const i=e[t],s=typeof i?.standIndex=="number"?i.standIndex:void 0;if(s===void 0){this.renderAllSegmentsPlot();return}const r=this.currentPlate.stands||[];if(!Array.isArray(r)||s<0||s>=r.length){this.renderAllSegmentsPlot();return}if(this.standSelect&&(this.standSelect.value=String(s)),ee.globalStandIndex!==s){ee.setGlobalStandIndex(s);return}this.renderAllSegmentsPlot()}renderAllSegmentsPlot(){if(!this.container||!this.currentPlate)return;this.container.replaceChildren();const e=this.currentPlate.measured;if(!e||!e.segmentData||!Array.isArray(e.segmentData)||e.segmentData.length===0){const x=document.createElement("div");x.textContent="No segment data available",x.style.cssText="padding: 20px; text-align: center; color: var(--color-muted);",this.container.appendChild(x);return}const t=e.segmentData;this.updateConsoleWorkspace(t);const i=600,s=document.createElement("div");s.style.cssText=`width: 100%; flex: 0 0 ${i}px; height: ${i}px; position: relative;`,this.container.appendChild(s);const r=this.createSegmentTraces(t),a=window.innerWidth<It.BREAKPOINTS.MOBILE,o=window.innerWidth<It.BREAKPOINTS.MOBILE,l=a?It.MARGINS.MOBILE:It.MARGINS.DESKTOP,c=o?It.FONT_SIZES.SMALL_MOBILE:a?It.FONT_SIZES.MOBILE:It.FONT_SIZES.DESKTOP,h=this.y2AxisSignals.size>0,d=this.y3AxisSignals.size>0,u={...l};d?u.r=Math.max(u.r,96):h&&(u.r=Math.max(u.r,55));const p={height:i,margin:u,showlegend:!1,plot_bgcolor:"#ffffff",paper_bgcolor:"#ffffff",hovermode:"closest",autosize:!0,hoverlabel:Rn},g=this.currentPlate?.measured?.indexAdaptSegment;if(g!=null&&this.inheritanceSegmentVisible){const x=this.useSegmentStartForXAxis?t[g]?.segmentStart??g:g;p.shapes=[{type:"line",x0:x,x1:x,y0:0,y1:1,xref:"x",yref:"paper",line:{color:"red",width:2,dash:"solid"}}]}h&&(p.yaxis2={automargin:!0,titlefont:{size:c.title,color:"rgba(140,140,140,0.95)"},tickfont:{color:"rgba(140,140,140,0.95)"},side:"right",overlaying:"y",showline:!0,linecolor:"rgba(150,150,150,0.9)",zeroline:!1,showgrid:!1,layer:"above traces"}),d&&(p.yaxis3={automargin:!0,titlefont:{size:c.title,color:"rgba(55,90,158,0.95)"},tickfont:{color:"rgba(55,90,158,0.95)"},side:"right",overlaying:"y",anchor:"free",position:1,showline:!0,linecolor:"rgba(55,90,158,0.95)",zeroline:!1,showgrid:!1,layer:"above traces"}),Me.newPlot(s,r,p,{responsive:!0,displayModeBar:!1,displaylogo:!1}),requestAnimationFrame(()=>{const x={},m=s.clientWidth;if(m>0&&(x.width=m),x.height=i,Object.keys(x).length>0&&Me?.relayout)try{Me.relayout(s,x)}catch{}})}createSegmentTraces(e){const t=[];return this.availableSignals.forEach(i=>{if(!this.activeSignals.has(i.key))return;const s=this.getNumericSeriesForSegments(e,i.key);if(s.reduce((p,g)=>p+(isFinite(g)?1:0),0)===0)return;const a=this.useSegmentStartForXAxis?e.map(p=>p.segmentStart):e.map((p,g)=>g),o=this.getColorForSignal(i.key),l=this.shouldSignalBeVisible(i.key),c=l?1:.3,h=`${i.label}<br>${this.useSegmentStartForXAxis?"Position":"Segment"}: %{x}<br>Value: %{y:.6f}<extra></extra>`,d=this.y3AxisSignals.has(i.key)?"y3":this.y2AxisSignals.has(i.key)?"y2":"y",u={x:a,y:s,type:"scatter",mode:"lines+markers",name:i.label,yaxis:d,line:{color:o,width:It.PLOT.LINE_WIDTH,opacity:1},marker:{size:It.PLOT.MARKER_SIZE,color:o,opacity:c,line:{width:It.PLOT.MARKER_LINE_WIDTH,color:l?"#000":`rgba(0, 0, 0, ${c})`}},opacity:c,hovertemplate:h,connectgaps:!1};t.push(u)}),t}resizePlots(){if(this.container){const e=this.container.querySelector('div[style*="position: relative"]');if(e&&Me?.relayout){const t=e.clientWidth,i=600;try{Me.relayout(e,{width:t,height:i})}catch{}}}}isSignalFocused(e){return this.focusedSignal===e}shouldSignalBeVisible(e){return!this.focusedSignal||this.focusedSignal===e}toggleSignalFocus(e){this.focusedSignal===e?this.clearSignalFocus():this.setSignalFocus(e)}setSignalFocus(e){this.focusedSignal=e,this.renderAllSegmentsPlot()}clearSignalFocus(){this.focusedSignal=null,this.renderAllSegmentsPlot()}getColorForSignal(e){return Nx(e,this.customColors)}getCurrentPassBendingForce(){if(!this.currentPlate)return;const e=this.currentPlate.preCalc?.passes;if(!Array.isArray(e)||e.length===0)return;const t=ee.globalPassIndex;if(!Number.isInteger(t)||t<0||t>=e.length)return;const i=e[t];return kt(i?.profile?.bendingForces)}getCurrentPassRollingForce(){if(!this.currentPlate)return;const e=this.currentPlate.preCalc?.passes;if(!Array.isArray(e)||e.length===0)return;const t=ee.globalPassIndex;if(!Number.isInteger(t)||t<0||t>=e.length)return;const i=e[t];return kt(i?.profile?.rollForce)}getCurrentPassShiftPositions(){if(!this.currentPlate)return;const e=this.currentPlate.preCalc?.passes;if(!Array.isArray(e)||e.length===0)return;const t=ee.globalPassIndex;if(!Number.isInteger(t)||t<0||t>=e.length)return;const i=e[t];return kt(i?.profile?.shiftPositions)}getNumericSeriesForSegments(e,t){if(this.customSignalDefinitions.has(t)){const s=this.signalWorkspace.getSignal(t);if(s)return[...s.values]}const i=this.signalWorkspace.getSignal(t);return i&&!this.baseAvailableSignals.some(s=>s.key===t)?[...i.values]:this.computeSeriesForKey(e,t)}computeSeriesForKey(e,t){const i=t===Wi?this.getCurrentPassBendingForce():void 0,s=t===Xi?this.getCurrentPassRollingForce():void 0,r=t===xi?this.getCurrentPassShiftPositions():void 0,a=t===Pn||t===Xn?this.getCurrentPassBendingForce():void 0;return e.map(o=>{if(t===Wi){const c=i;return typeof c=="number"&&Number.isFinite(c)?c:NaN}if(t===Pn){const c=this.computeDerivedBendingSum(o,a);return c!==null&&Number.isFinite(c)?c:NaN}if(t===Xn){const c=this.computeDerivedBendingSumComparison(o,a);return c!==null&&Number.isFinite(c)?c:NaN}if(t===Mi){const c=this.computeDerivedAdditionalBendingByDPC_SP(o);return c!==null&&Number.isFinite(c)?c:NaN}if(t===ji){const c=this.computeDerivedRollingForce(o);return c!==null&&Number.isFinite(c)?c:NaN}if(t===Xi){const c=s;return typeof c=="number"&&Number.isFinite(c)?c:NaN}if(t===xi){const c=r;return typeof c=="number"&&Number.isFinite(c)?c:NaN}if(t==="dFbdFr"){if(!this.currentPlate)return NaN;const c=this.currentPlate.preCalc?.passes;if(!Array.isArray(c)||c.length===0)return NaN;const h=ee.globalPassIndex;if(!Number.isInteger(h)||h<0||h>=c.length)return NaN;const d=c[h],u=kt(d?.profile?.bmRes?.dFb_dFr);return typeof u=="number"&&Number.isFinite(u)?u:NaN}if(t==="dFbdsr"){if(!this.currentPlate)return NaN;const c=this.currentPlate.preCalc?.passes;if(!Array.isArray(c)||c.length===0)return NaN;const h=ee.globalPassIndex;if(!Number.isInteger(h)||h<0||h>=c.length)return NaN;const d=c[h],u=kt(d?.profile?.bmRes?.dFb_dsr);return typeof u=="number"&&Number.isFinite(u)?u:NaN}const l=this.extractSegmentFieldValue(o,t);return l!==null&&Number.isFinite(l)?l:NaN})}updateStandDropdownSelection(){this.standSelect&&(this.standSelect.value=ee.globalStandIndex.toString())}updatePassDropdownSelection(){if(!this.passSelect)return;const e=ee.globalPassIndex;if(this.passSelect.options.length===0){this.passSelect.value="";return}const t=e.toString();Array.from(this.passSelect.options).some(i=>i.value===t)&&(this.passSelect.value=t)}initializeAvailableSignals(){const e=(t,i,s)=>({key:t,label:t,axis:i,type:s});this.baseAvailableSignals=[e("additionalBendingByDPC","y","segment"),e("additionalBendingByFLC","y","segment"),e("additionalBendingByPRC","y","segment"),e("additionalBendingByTCC","y","segment"),e("additionalShiftingByMAI","y","segment"),e("backTension","y2","segment"),e("bendingAtLowerLimit","y","segment"),e("bendingAtUpperLimit","y","segment"),e("bendingForces","y","segment"),e(Pn,"y","derived"),e(Xn,"y","derived"),e(Wi,"y","pass"),e("dFbdFr","y","pass"),e("dFbdsr","y","pass"),e("forwTension","y2","segment"),e("manualInterventionBending","y","segment"),e("pairCross","y","segment"),e(Xi,"y","pass"),e(ji,"y","derived"),e(Mi,"y","derived"),e("rollingForceDS","y","segment"),e("rollingForceOS","y","segment"),e("screwDownDS","y","segment"),e("screwDownOS","y","segment"),e("segmentEnd","y","segment"),e("segmentNumber","y","segment"),e("segmentStart","y","segment"),e("shiftPositions","y","segment"),e(xi,"y","pass"),e("speed","y2","segment"),e("stripThickness","y","segment"),e("temperatureConversionFactor","y","segment"),e("timeStamp","y","segment"),e("width","y","segment")]}populatePresetDropdown(){if(this.presetSelect){for(;this.presetSelect.options.length>1;)this.presetSelect.remove(1);El.forEach(e=>{const t=document.createElement("option");t.value=e.id,t.textContent=e.label,this.presetSelect?.appendChild(t)})}}setupPresetEvents(){this.presetSelect&&this.presetSelect.addEventListener("change",()=>{const e=this.presetSelect?.value??"";e&&(this.applySignalPreset(e),this.presetSelect&&(this.presetSelect.value=""))})}applySignalPreset(e){const t=El.find(s=>s.id===e);if(!t)return;let i=!1;this.activeSignals.size>0&&(this.activeSignals.clear(),i=!0),t.signals.forEach(s=>{this.activeSignals.has(s)||(this.activeSignals.add(s),i=!0)}),i?(this.saveState(),this.updateSelectedSignalsDisplay(),this.populateSignalList(),this.renderAllSegmentsPlot()):(this.populateSignalList(),this.updateSelectedSignalsDisplay())}isArrayOfArraysField(e){return["bendingForces","shiftPositions","additionalShiftingByMAI"].includes(e)}isRollIndependentField(e){return["segmentStart","segmentEnd","segmentNumber","width"].includes(e)}addDefaultSignals(){this.activeSignals.add("bendingForces"),this.activeSignals.add("speed"),this.activeSignals.add("stripThickness")}loadSavedState(){const e=ue.get(ie.SEGMENTS_ACTIVE_SIGNALS)!==null||ue.get(ie.SEGMENTS_Y2_AXIS_SIGNALS)!==null||ue.get(ie.SEGMENTS_Y3_AXIS_SIGNALS)!==null||ue.get(ie.SEGMENTS_CUSTOM_COLORS)!==null;if(e){const t=new Set(this.availableSignals.map(o=>o.key)),i=ue.getJSON(ie.SEGMENTS_ACTIVE_SIGNALS,[]);this.activeSignals=new Set((i??[]).filter(o=>t.has(o)));const s=ue.getJSON(ie.SEGMENTS_Y2_AXIS_SIGNALS,[]);this.y2AxisSignals=new Set((s??[]).filter(o=>t.has(o)));const r=ue.getJSON(ie.SEGMENTS_Y3_AXIS_SIGNALS,[]);this.y3AxisSignals=new Set((r??[]).filter(o=>t.has(o)));const a=ue.getJSON(ie.SEGMENTS_CUSTOM_COLORS,{});this.customColors={},Object.entries(a??{}).forEach(([o,l])=>{typeof l=="string"&&(this.customColors[o]=l)})}return this.useSegmentStartForXAxis=ue.getBoolean(ie.SEGMENTS_USE_SEGMENT_START_FOR_X,!1),e}saveState(){ue.setJSON(ie.SEGMENTS_ACTIVE_SIGNALS,Array.from(this.activeSignals)),ue.setJSON(ie.SEGMENTS_Y2_AXIS_SIGNALS,Array.from(this.y2AxisSignals)),ue.setJSON(ie.SEGMENTS_Y3_AXIS_SIGNALS,Array.from(this.y3AxisSignals)),ue.setJSON(ie.SEGMENTS_CUSTOM_COLORS,this.customColors)}setupSignalSelectionEvents(){this.signalSearch&&this.signalSearch.addEventListener("input",()=>this.filterSignalList()),this.clearAllBtn&&this.clearAllBtn.addEventListener("click",()=>this.clearAllSignals()),this.selectAllBtn&&this.selectAllBtn.addEventListener("click",()=>this.selectAllSignals()),this.deselectAllBtn&&this.deselectAllBtn.addEventListener("click",()=>this.deselectAllSignals())}setupConsoleEvents(){this.consoleForm&&this.consoleForm.addEventListener("submit",e=>{e.preventDefault(),this.handleConsoleSubmit()}),this.consoleHelpButton&&this.consoleHelpButton.addEventListener("click",()=>{this.executeConsoleCommand("help")}),this.consoleInput&&this.consoleInput.addEventListener("keydown",e=>this.handleConsoleKeyDown(e))}handleConsoleSubmit(){if(!this.consoleInput)return;const e=this.consoleInput.value.trim();e&&(this.storeConsoleHistory(e),this.consoleInput.value="",this.resetConsoleCompletionState(),this.executeConsoleCommand(e))}handleConsoleKeyDown(e){if(this.consoleInput){if(e.key==="Tab"){e.preventDefault(),e.stopPropagation(),this.applyConsoleTabCompletion(e)||this.resetConsoleCompletionState();return}if(e.key!=="Shift"&&this.resetConsoleCompletionState(),e.key==="ArrowUp"){if(this.consoleHistory.length===0)return;e.preventDefault();const t=Math.max(0,this.consoleHistoryIndex-1);this.consoleHistoryIndex=t;const i=this.consoleHistory[this.consoleHistoryIndex];i!==void 0&&(this.consoleInput.value=i,this.moveConsoleCaretToEnd());return}if(e.key==="ArrowDown"){if(this.consoleHistory.length===0)return;e.preventDefault();const t=Math.min(this.consoleHistory.length,this.consoleHistoryIndex+1);if(this.consoleHistoryIndex=t,this.consoleHistoryIndex===this.consoleHistory.length)this.consoleInput.value="";else{const i=this.consoleHistory[this.consoleHistoryIndex];i!==void 0&&(this.consoleInput.value=i)}this.moveConsoleCaretToEnd()}}}applyConsoleTabCompletion(e){if(!this.consoleInput)return!1;const t=this.consoleInput,i=t.selectionStart,s=t.selectionEnd;if(i===null||s===null||i!==s)return!1;const r=t.value;let a=i;for(;a>0&&/[A-Za-z0-9_]/.test(r.charAt(a-1));)a-=1;const o=r.slice(a,i),l=this.consoleCompletionState,c=l!==null&&l.replaceStart===a,h=c?l.query:o;if(!h||h.length<2)return this.resetConsoleCompletionState(),!1;const d=this.collectConsoleCompletionSuggestions(h);if(d.length===0)return this.resetConsoleCompletionState(),!1;const u=e.shiftKey?-1:1;let p;c?p=(l.index+u+d.length)%d.length:p=u===-1?d.length-1:0;const g=d[p],x=`${r.slice(0,a)}${g}${r.slice(s)}`;t.value=x;const m=a+g.length;return t.setSelectionRange(m,m),this.consoleCompletionState={query:h,replaceStart:a,index:p},!0}resetConsoleCompletionState(){this.consoleCompletionState=null}collectConsoleCompletionSuggestions(e){const t=e.toLowerCase(),i=new Set,s=[],r=a=>{a&&a.toLowerCase().startsWith(t)&&(i.has(a)||(i.add(a),s.push(a)))};return Dx.forEach(a=>{r(a)}),this.availableSignals.forEach(a=>{r(a.key)}),this.signalWorkspace.listSignals().forEach(a=>{r(a.alias),r(a.name)}),this.customSignalDefinitions.forEach((a,o)=>{r(o)}),s.sort((a,o)=>a.localeCompare(o,void 0,{sensitivity:"base"})),s}moveConsoleCaretToEnd(){if(!this.consoleInput)return;const e=this.consoleInput.value.length;requestAnimationFrame(()=>{this.consoleInput?.setSelectionRange(e,e)})}storeConsoleHistory(e){if(!e)return;for(this.consoleHistory[this.consoleHistory.length-1]!==e&&this.consoleHistory.push(e),this.consoleHistoryIndex=this.consoleHistory.length;this.consoleHistory.length>50;)this.consoleHistory.shift();this.persistConsoleHistory()}loadConsoleHistory(){const e=ue.getJSON(ie.SEGMENTS_CONSOLE_HISTORY,[]);if(Array.isArray(e)){const t=e.filter(i=>typeof i=="string"&&i.length>0).slice(-50);this.consoleHistory=t,this.consoleHistoryIndex=this.consoleHistory.length,t.length!==e.length&&this.persistConsoleHistory()}}persistConsoleHistory(){ue.setJSON(ie.SEGMENTS_CONSOLE_HISTORY,this.consoleHistory)}executeConsoleCommand(e,t={}){const{echo:i=!0}=t;i&&this.appendConsoleLine(`> ${e}`,"command");try{const s=this.signalConsole.execute(e);this.processConsoleResult(s)}catch(s){const r=s instanceof Error?s.message:String(s);this.appendConsoleLine(r,"error")}}processConsoleResult(e){e.clearOutput&&this.clearConsoleOutput(),e.messages.forEach(t=>{this.appendConsoleLine(t.text,t.kind)}),e.created&&this.onConsoleSignalCreated(e.created.record,e.created.isUpdate,e.created.definition),e.publish&&this.publishConsoleSignal(e.publish),e.removed&&this.onConsoleSignalRemoved(e.removed),e.requiresRefresh&&!e.publish&&this.renderAllSegmentsPlot()}appendConsoleLine(e,t){if(!this.consoleOutput)return;const i=document.createElement("div");switch(i.textContent=e,i.style.fontFamily="var(--font-family-mono, monospace)",i.style.fontSize="11px",i.style.whiteSpace="pre-wrap",i.style.lineHeight="1.35",i.style.margin="0 0 2px 0",t){case"command":i.style.color="var(--color-text-secondary)",i.style.fontWeight="600";break;case"success":i.style.color="#2e7d32";break;case"error":i.style.color="#c62828";break;default:i.style.color="var(--color-text-primary, #333)"}for(this.consoleOutput.appendChild(i);this.consoleOutput.childNodes.length>this.consoleLogLimit;){const s=this.consoleOutput.firstChild;if(s)this.consoleOutput.removeChild(s);else break}this.consoleOutput.scrollTop=this.consoleOutput.scrollHeight}clearConsoleOutput(){this.consoleOutput&&this.consoleOutput.replaceChildren()}onConsoleSignalCreated(e,t,i){if(e.name==="ans")return;const s=this.customSignalDefinitions.get(e.name),r=s?.published??!1,a=i?.expression??s?.expression??e.expression??"",o=i?.literalValues??s?.literalValues??e.values,l=Array.isArray(o)?[...o]:void 0,c={expression:a,literalValues:l,published:r};this.customSignalDefinitions.set(e.name,c),c.published?(this.customSignalPublications.add(e.name),this.ensureCustomSignalDescriptor(e.name)):(this.customSignalPublications.delete(e.name),this.customSignalDescriptors.delete(e.name)),this.rebuildAvailableSignals(),c.published&&!t&&this.activeSignals.add(e.name),this.saveConsoleDefinitions(),c.published&&(this.saveState(),this.renderAllSegmentsPlot()),this.populateSignalList(),this.updateSelectedSignalsDisplay()}onConsoleSignalRemoved(e){const t=Array.isArray(e)?e:[e];let i=!1;t.forEach(s=>{const r=this.customSignalDefinitions.delete(s),a=this.customSignalDescriptors.delete(s),o=this.customSignalPublications.delete(s),l=this.activeSignals.delete(s),c=this.y2AxisSignals.delete(s),h=this.y3AxisSignals.delete(s),d=delete this.customColors[s];(r||a||o||l||c||h||d)&&(i=!0)}),i&&(this.rebuildAvailableSignals(),this.saveConsoleDefinitions(),this.saveState(),this.populateSignalList(),this.updateSelectedSignalsDisplay(),this.renderAllSegmentsPlot())}publishConsoleSignal(e){const t=this.signalWorkspace.getSignal(e);if(!t||t.name==="ans")return;const i=this.customSignalDefinitions.get(t.name);if(i)i.published=!0,i.literalValues=Array.isArray(i.literalValues)?[...i.literalValues]:[...t.values],this.customSignalDefinitions.set(t.name,i);else{const s=t.expression??t.name,r=[...t.values];this.customSignalDefinitions.set(t.name,{expression:s,literalValues:r,published:!0})}this.customSignalPublications.add(t.name),this.ensureCustomSignalDescriptor(t.name),this.rebuildAvailableSignals(),this.activeSignals.add(t.name),this.saveConsoleDefinitions(),this.saveState(),this.populateSignalList(),this.updateSelectedSignalsDisplay(),this.renderAllSegmentsPlot()}ensureCustomSignalDescriptor(e){this.customSignalDescriptors.has(e)||this.customSignalDescriptors.set(e,{key:e,label:e,axis:"y",type:"derived"})}loadConsoleDefinitionsFromStorage(){this.customSignalDefinitions.clear(),this.customSignalPublications.clear(),this.customSignalDescriptors.clear();const e=ue.getJSON(ie.SEGMENTS_CONSOLE_DEFINITIONS,[]);Array.isArray(e)&&e.forEach(t=>{if(!t||typeof t.name!="string"||t.name==="ans")return;const i=typeof t.expression=="string"?t.expression:"",s=Array.isArray(t.literalValues)?t.literalValues.map(a=>Number(a)).filter(a=>Number.isFinite(a)):void 0,r=t.published===void 0?!0:!!t.published;this.customSignalDefinitions.set(t.name,{expression:i,literalValues:s,published:r}),r&&(this.customSignalPublications.add(t.name),this.ensureCustomSignalDescriptor(t.name))})}saveConsoleDefinitions(){const e=Array.from(this.customSignalDefinitions.entries()).map(([t,i])=>({name:t,expression:i.expression,literalValues:i.literalValues,published:i.published}));ue.setJSON(ie.SEGMENTS_CONSOLE_DEFINITIONS,e)}rebuildAvailableSignals(){this.availableSignals=[...this.baseAvailableSignals],this.customSignalPublications.forEach(e=>{const t=this.customSignalDescriptors.get(e);t&&this.customSignalDefinitions.has(e)&&this.availableSignals.push(t)})}applyStoredConsoleDefinitions(){this.hasAppliedStoredConsoleSignals||(this.hasAppliedStoredConsoleSignals=!0,this.customSignalDefinitions.forEach((e,t)=>{if(t==="ans")return;const i=(e.expression||"").trim()||"0";try{this.signalWorkspace.defineDerivedSignal(t,i),e.published&&this.ensureCustomSignalDescriptor(t)}catch(s){const r=s instanceof Error?s.message:String(s);this.appendConsoleLine(`Failed to restore signal "${t}": ${r}`,"error")}}),this.rebuildAvailableSignals())}updateConsoleWorkspace(e){const t=this.baseAvailableSignals.filter(r=>r.type!=="derived"),i=this.baseAvailableSignals.filter(r=>r.type==="derived"),s=t.map(r=>({name:r.key,values:this.computeSeriesForKey(e,r.key),description:r.label,source:"base"}));try{this.signalWorkspace.setBaseSignals(s),i.forEach(r=>{const a=this.computeSeriesForKey(e,r.key),o=Rx[r.key];if(typeof o=="string"&&o.trim().length>0)try{this.signalWorkspace.defineDerivedSignal(r.key,o)}catch{this.signalWorkspace.defineDerivedSignal(r.key,o,{literalValues:a})}else this.signalWorkspace.defineDerivedSignal(r.key,"",{literalValues:a})})}catch(r){const a=r instanceof Error?r.message:String(r);this.appendConsoleLine(`Failed to update signal workspace: ${a}`,"error")}this.hasAppliedStoredConsoleSignals||this.applyStoredConsoleDefinitions()}populateSignalList(){if(!this.signalList)return;this.signalList.innerHTML="";const e=(this.signalSearch?.value||"").toLowerCase();this.availableSignals.filter(i=>!this.activeSignals.has(i.key)).forEach(i=>{if(e&&!i.label.toLowerCase().includes(e)&&!i.key.toLowerCase().includes(e))return;const s=document.createElement("div");s.className="signal-item";const r=i.type==="pass",a=i.type==="derived",o=r?"var(--color-accent-light, #e6f3ff)":a?"var(--color-purple-light, #f3e5f5)":"";s.style.cssText=`display: flex; width: 100%; box-sizing: border-box; padding: 6px 8px; cursor: pointer; border-radius: 4px; justify-content: space-between; align-items: center; transition: background-color 0.2s ease; border: 1px solid transparent; background-color: ${o};`,s.addEventListener("mouseenter",()=>{s.style.backgroundColor=r?"var(--color-accent-hover, #cce7ff)":a?"var(--color-purple-hover, #e1bee7)":"var(--surface-hover, #f5f5f5)",s.style.borderColor="var(--color-border)"}),s.addEventListener("mouseleave",()=>{s.style.backgroundColor=o,s.style.borderColor="transparent"});const l=document.createElement("span");l.textContent=i.label,l.style.cssText="font-size: 11px; flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;",s.addEventListener("click",()=>{this.activateSignal(i.key)}),s.appendChild(l),this.signalList.appendChild(s)})}updateSelectedSignalsDisplay(){if(!this.selectedSignalsContainer||!this.noSignalsMessage)return;this.selectedSignalsContainer.querySelectorAll(".signal-item").forEach(i=>i.remove());const t=this.availableSignals.filter(i=>this.isSignalActive(i.key));t.length===0?this.noSignalsMessage.style.display="block":(this.noSignalsMessage.style.display="none",t.forEach(i=>{const s=document.createElement("div");s.className="signal-item active-signal-item",s.style.cssText="display: flex; width: 100%; box-sizing: border-box; padding: 6px 8px; border-radius: 4px; justify-content: space-between; align-items: center; background: var(--surface-card); border: 1px solid var(--color-accent, #007acc); margin-bottom: 2px;";const r=document.createElement("div");r.style.cssText="display: flex; align-items: center; gap: 6px; flex: 1; overflow: hidden;";const a=document.createElement("div");a.style.cssText=`width: 10px; height: 10px; border-radius: 50%; background: ${this.getColorForSignal(i.key)}; cursor: pointer; flex-shrink: 0;`,a.title="Click to change color",a.addEventListener("click",x=>{x.stopPropagation(),this.showColorPicker(i.key,a)});const o=document.createElement("span");o.textContent=i.label,o.style.cssText="font-size: 11px; flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; cursor: pointer;",o.title=i.label,o.addEventListener("click",()=>this.toggleSignalFocus(i.key)),r.appendChild(a),r.appendChild(o);const l=document.createElement("div");l.style.cssText="display: flex; align-items: center; gap: 4px; flex-shrink: 0;";const c=document.createElement("button");c.type="button";const h=this.y2AxisSignals.has(i.key),d=this.y3AxisSignals.has(i.key);let u="Y1",p="#4CAF50";h?(u="Y2",p="#FF9800"):d&&(u="Y3",p="#9C27B0"),c.textContent=u,c.style.cssText=`font-size: 9px; font-weight: bold; padding: 2px 4px; border: 1px solid var(--color-border); border-radius: 2px; background: ${p}; color: white; cursor: pointer; flex-shrink: 0;`,c.title="Click: toggle Y1/Y2/Y3",c.addEventListener("click",x=>{x.stopPropagation(),this.cycleYAxis(i.key)});const g=document.createElement("button");g.type="button",g.textContent="×",g.style.cssText="font-size: 12px; padding: 0; border: none; background: none; cursor: pointer; color: var(--color-text-secondary);",g.title="Remove signal",g.addEventListener("click",x=>{x.stopPropagation(),this.deactivateSignal(i.key)}),l.appendChild(c),l.appendChild(g),s.appendChild(r),s.appendChild(l),this.selectedSignalsContainer&&this.selectedSignalsContainer.appendChild(s)}))}filterSignalList(){this.populateSignalList()}isSignalActive(e){return this.activeSignals.has(e)}activateSignal(e){this.activeSignals.add(e),this.saveState(),this.updateSelectedSignalsDisplay(),this.populateSignalList(),this.renderAllSegmentsPlot()}deactivateSignal(e){this.activeSignals.delete(e),this.saveState(),this.updateSelectedSignalsDisplay(),this.populateSignalList(),this.renderAllSegmentsPlot()}clearAllSignals(){this.activeSignals.clear(),this.saveState(),this.updateSelectedSignalsDisplay(),this.populateSignalList(),this.renderAllSegmentsPlot()}selectAllSignals(){this.availableSignals.forEach(e=>{this.activeSignals.add(e.key)}),this.saveState(),this.updateSelectedSignalsDisplay(),this.populateSignalList(),this.renderAllSegmentsPlot()}deselectAllSignals(){this.activeSignals.clear(),this.saveState(),this.updateSelectedSignalsDisplay(),this.populateSignalList(),this.renderAllSegmentsPlot()}cycleYAxis(e){const t=this.y2AxisSignals.has(e),i=this.y3AxisSignals.has(e);!t&&!i?this.y2AxisSignals.add(e):t?(this.y2AxisSignals.delete(e),this.y3AxisSignals.add(e)):this.y3AxisSignals.delete(e),this.saveState(),this.updateSelectedSignalsDisplay(),this.renderAllSegmentsPlot()}showColorPicker(e,t){const i=document.querySelector(".color-picker-popup");i&&i.remove();const s=document.createElement("div");s.className="color-picker-popup",s.style.cssText="position: absolute; background: white; border: 1px solid var(--color-border); border-radius: 4px; padding: 8px; z-index: 1000;",Ma.forEach(o=>{const l=document.createElement("button");l.style.cssText=`display: block; width: 20px; height: 20px; border: 1px solid #ccc; border-radius: 50%; background: ${o}; cursor: pointer; margin-bottom: 4px;`,l.title=o,l.addEventListener("click",()=>{this.customColors[e]=o,this.saveState(),t.style.background=o,this.updateSelectedSignalsDisplay(),this.renderAllSegmentsPlot(),s.remove()}),s.appendChild(l)});const r=t.getBoundingClientRect();s.style.top=`${r.bottom+4}px`,s.style.left=`${r.left}px`,document.body.appendChild(s);const a=o=>{s.contains(o.target)||(s.remove(),document.removeEventListener("click",a))};setTimeout(()=>document.addEventListener("click",a),0)}}class Fx{constructor(){this.currentPlate=null,this.plotDivs=[],this.container=document.getElementById("twmPlotContainer"),this.standSelect=document.getElementById("twmStandSelect"),this.twmCard=document.getElementById("twmCard"),this.twmDifferentialMode=document.getElementById("twmDifferentialMode"),this.restoreSavedSettings(),this.setupEventListeners(),ee.addStandIndexListener(e=>{this.updateStandDropdownSelection(),this.renderTwmPlot()})}updateStandDropdownSelection(){this.standSelect&&(this.standSelect.value=ee.globalStandIndex.toString())}restoreSavedSettings(){ue.getBoolean(ie.TWM_DIFFERENTIAL_MODE,!1)&&this.twmDifferentialMode&&this.twmDifferentialMode.classList.add("active")}setupEventListeners(){document.addEventListener("plateSelected",(e=>{this.currentPlate=e.detail.plate,this.populateStandDropdown(),this.renderTwmPlot()})),this.standSelect&&this.standSelect.addEventListener("change",()=>this.handleStandChange()),document.addEventListener("twmVisible",(()=>{this.resizePlots()})),this.setupControlButtons(),this.twmDifferentialMode&&this.twmDifferentialMode.addEventListener("click",()=>{this.twmDifferentialMode.classList.toggle("active");const e=this.twmDifferentialMode.classList.contains("active");ue.setBoolean(ie.TWM_DIFFERENTIAL_MODE,e),this.currentPlate&&this.renderTwmPlot()})}reset(){this.currentPlate=null,this.plotDivs=[],this.standSelect&&(this.standSelect.innerHTML=""),this.container&&this.container.replaceChildren(),this.twmCard&&(this.twmCard.style.display="none")}populateStandDropdown(){if(!this.currentPlate||!this.standSelect)return;const e=this.currentPlate.measured;if(!e||!e.segmentData||!Array.isArray(e.segmentData)){this.standSelect&&(this.standSelect.innerHTML="");return}const t=e.segmentData;if(t.length===0){this.standSelect&&(this.standSelect.innerHTML="");return}let i=1/0,s=1/0,r=1/0,a=1/0;t.forEach(l=>{l.bendingForces&&Array.isArray(l.bendingForces)&&(i=Math.min(i,l.bendingForces.length)),l.shiftPositions&&Array.isArray(l.shiftPositions)&&(s=Math.min(s,l.shiftPositions.length)),l.rollingForceDS&&Array.isArray(l.rollingForceDS)&&(r=Math.min(r,l.rollingForceDS.length)),l.rollingForceOS&&Array.isArray(l.rollingForceOS)&&(a=Math.min(a,l.rollingForceOS.length))});let o=0;i!==1/0&&(o=Math.max(o,i)),s!==1/0&&(o=Math.max(o,s)),r!==1/0&&(o=Math.max(o,r)),a!==1/0&&(o=Math.max(o,a)),this.standSelect.innerHTML="";for(let l=0;l<o;l++){const c=document.createElement("option");c.value=String(l);const h=this.currentPlate?.stands?.[l];c.textContent=h?.standId?`${l} (${h.standId})`:`${l}`,this.standSelect.appendChild(c)}if(o>0){const l=ee.globalStandIndex<o?ee.globalStandIndex:0;ee.setGlobalStandIndex(l),this.standSelect.value=String(l)}}handleStandChange(){const e=Number(this.standSelect?.value);ee.setGlobalStandIndex(Number.isFinite(e)?e:0),this.renderTwmPlot()}setupControlButtons(){[{id:"twmStandPrev",handler:()=>this.cycleStand(-1)},{id:"twmStandNext",handler:()=>this.cycleStand(1)}].forEach(({id:t,handler:i})=>{const s=document.getElementById(t);s&&s.addEventListener("click",i)})}cycleStand(e){if(!this.currentPlate||!this.standSelect)return;const t=this.currentPlate.measured;if(!t||!t.segmentData||!Array.isArray(t.segmentData))return;const i=t.segmentData;if(i.length===0)return;let s=1/0,r=1/0,a=1/0,o=1/0;i.forEach(d=>{d.bendingForces&&Array.isArray(d.bendingForces)&&(s=Math.min(s,d.bendingForces.length)),d.shiftPositions&&Array.isArray(d.shiftPositions)&&(r=Math.min(r,d.shiftPositions.length)),d.rollingForceDS&&Array.isArray(d.rollingForceDS)&&(a=Math.min(a,d.rollingForceDS.length)),d.rollingForceOS&&Array.isArray(d.rollingForceOS)&&(o=Math.min(o,d.rollingForceOS.length))});let l=0;if(s!==1/0&&(l=Math.max(l,s)),r!==1/0&&(l=Math.max(l,r)),a!==1/0&&(l=Math.max(l,a)),o!==1/0&&(l=Math.max(l,o)),l===0)return;const h=(ee.globalStandIndex+e+l)%l;ee.setGlobalStandIndex(h),this.standSelect.value=String(h),this.handleStandChange()}renderTwmPlot(){if(!this.container||!this.currentPlate)return;this.container.replaceChildren(),this.plotDivs=[];const e=this.currentPlate.measured;if(!e||!e.segmentData||!Array.isArray(e.segmentData)||e.segmentData.length===0){const o=document.createElement("div");o.textContent="No segment data available",o.style.cssText="padding: 20px; text-align: center; color: var(--color-muted);",this.container.appendChild(o);return}const t=e.segmentData,s=document.getElementById("toggleTwm")?.classList.contains("active")??!1;this.twmCard&&(this.twmCard.style.display="block",this.twmCard.style.visibility="visible");const r=this.buildTCrownSurfaceData(t);if(r){const o=this.createSurfacePlot(r,"tCrown Surface Plot: Segments × Positions","tCrown Values","tCrown: %{z:.6f}");this.container.appendChild(o),this.plotDivs.push(o)}const a=this.buildWCrownSurfaceData(t);if(a){const o=this.createSurfacePlot(a,"wCrown Surface Plot: Segments × Positions","wCrown Values","wCrown: %{z:.6f}");this.container.appendChild(o),this.plotDivs.push(o)}if(this.plotDivs.length===0){const o=document.createElement("div");o.textContent="No thickness or width surface data available",o.style.cssText="padding: 20px; text-align: center; color: var(--color-muted);",this.container.appendChild(o)}this.resizePlots(),this.twmCard&&!s&&(this.twmCard.style.display="none")}createSurfacePlot(e,t,i,s){const{xValues:r,yValues:a,zMatrix:o,allZValues:l}=e,c=document.createElement("div");c.style.cssText="width:100%;height:350px;min-height:350px;background:var(--surface-subtle);border:1px solid var(--color-border);border-radius:var(--radius-sm)";const h=Math.min(...l),d=Math.max(...l),u=this.twmDifferentialMode?.classList.contains("active")??!1,p=i.includes("tCrown"),g=i.includes("wCrown");let x,m,f;if(u){const A=N=>Math.min(Math.max(N,0),1);if(p)if(h<0&&d>0){const y=Math.max(d-h,1e-9),_=A((0-h)/y),P=Math.max(0,_-.05),T=Math.min(1,_+.05);x=[[0,"rgb(100, 100, 100)"],[P,"rgb(100, 100, 100)"],[_,"rgb(180, 180, 180)"],[T,"rgb(180, 180, 180)"],[_+(1-_)*.3,"rgb(0, 200, 0)"],[_+(1-_)*.7,"rgb(255, 255, 0)"],[1,"rgb(255, 0, 0)"]],m=h,f=d}else if(h>=0){const y=h===0?0:A((0-h)/(d-h)),_=Math.min(1,y+.05*2);x=[[0,"rgb(180, 180, 180)"],[y,"rgb(180, 180, 180)"],[_,"rgb(180, 180, 180)"],[y+(1-y)*.4,"rgb(0, 200, 0)"],[y+(1-y)*.7,"rgb(255, 255, 0)"],[1,"rgb(255, 0, 0)"]],m=h,f=d}else x=[[0,"rgb(100, 100, 100)"],[.5,"rgb(150, 150, 150)"],[1,"rgb(180, 180, 180)"]],m=h,f=d;else if(g)if(h<0&&d>0){const y=Math.max(d-h,1e-9),_=A((0-h)/y),P=Math.max(0,_-.05),T=Math.min(1,_+.05);x=[[0,"rgb(100, 100, 100)"],[P,"rgb(100, 100, 100)"],[_,"rgb(180, 180, 180)"],[T,"rgb(180, 180, 180)"],[_+(1-_)*.3,"rgb(0, 200, 0)"],[_+(1-_)*.7,"rgb(255, 255, 0)"],[1,"rgb(255, 0, 0)"]],m=h,f=d}else if(h>=0){const y=h===0?0:A((0-h)/(d-h)),_=Math.min(1,y+.05*2);x=[[0,"rgb(180, 180, 180)"],[y,"rgb(180, 180, 180)"],[_,"rgb(180, 180, 180)"],[y+(1-y)*.4,"rgb(0, 200, 0)"],[y+(1-y)*.7,"rgb(255, 255, 0)"],[1,"rgb(255, 0, 0)"]],m=h,f=d}else x=[[0,"rgb(255, 0, 0)"],[.5,"rgb(255, 255, 0)"],[.9,"rgb(0, 200, 0)"],[1,"rgb(180, 180, 180)"]],m=h,f=d;else if(h<0&&d>0){const y=Math.max(d-h,1e-9),_=A((0-h)/y),P=Math.max(0,_-.1),T=Math.min(1,_+.1);x=[[0,"rgb(100, 100, 100)"],[P,"rgb(100, 100, 100)"],[_,"rgb(180, 180, 180)"],[T,"rgb(180, 180, 180)"],[_+(1-_)*.3,"rgb(0, 200, 0)"],[_+(1-_)*.7,"rgb(255, 255, 0)"],[1,"rgb(255, 0, 0)"]],m=h,f=d}else if(h>=0){const y=h===0?0:A((0-h)/(d-h)),_=Math.min(1,y+.1*2);x=[[0,"rgb(180, 180, 180)"],[y,"rgb(180, 180, 180)"],[_,"rgb(180, 180, 180)"],[y+(1-y)*.4,"rgb(0, 200, 0)"],[y+(1-y)*.7,"rgb(255, 255, 0)"],[1,"rgb(255, 0, 0)"]],m=h,f=d}else x=[[0,"rgb(100, 100, 100)"],[.5,"rgb(150, 150, 150)"],[1,"rgb(180, 180, 180)"]],m=h,f=d}else x=[[0,"rgb(0, 200, 0)"],[.5,"rgb(255, 255, 0)"],[1,"rgb(255, 0, 0)"]],m=void 0,f=void 0;const E={x:r,y:a,z:o,type:"contour",colorscale:x,contours:{coloring:"heatmap",showlines:!1,showlabels:!1},showscale:!0,line:{width:0},colorbar:{title:{text:i,font:{size:11}},titleside:"right",tickfont:{size:10},len:1.05,thickness:20,outlinewidth:0},hovertemplate:`Segment: %{x}<br>Position: %{y:.3f}<br>${s}<extra></extra>`};m!==void 0&&(E.zmin=m),f!==void 0&&(E.zmax=f);const S=this.container?.clientWidth||this.container?.offsetWidth||800,w={width:S>0?S:800,height:350,title:{text:t,font:{family:'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',size:13,weight:600},x:.5,xanchor:"center",y:.93,yanchor:"top",pad:{t:5,b:2}},xaxis:{title:{text:"Segment Index",font:{size:11}},tickfont:{size:10},gridcolor:"#d0d0d0",showgrid:!0,gridwidth:1},yaxis:{title:{text:"Barrel length",font:{size:11}},tickfont:{size:10},gridcolor:"#d0d0d0",showgrid:!0,gridwidth:1,autorange:!1,range:[-1,1]},plot_bgcolor:"#ffffff",paper_bgcolor:"#ffffff",margin:{l:50,r:30,t:50,b:50},hovermode:"closest",showlegend:!1,autosize:!1,hoverlabel:Rn};return Me.newPlot(c,[E],w,{responsive:!1,displayModeBar:!1}),c.on("plotly_doubleclick",()=>(Me.relayout(c,{"xaxis.autorange":!0,"yaxis.autorange":!0}),!1)),c}buildTCrownSurfaceData(e){const t=[],i=Math.max(...e.map(l=>{if(l.twData&&Array.isArray(l.twData)&&l.twData.length>ee.globalStandIndex){const c=l.twData[ee.globalStandIndex];if(c&&c.tCrown&&Array.isArray(c.tCrown)&&c.tCrown.length>0){const h=c.tCrown[0];if(h&&h.data&&Array.isArray(h.data))return h.data.length}}return 0}));if(i===0)return null;const s=e.map((l,c)=>c),r=[];if(i===1)r.push(0);else for(let l=0;l<i;l++)r.push(-1+2*l/(i-1));const a=[];for(let l=0;l<r.length;l++){const c=[];for(let h=0;h<s.length;h++){const d=e[h];let u=null;if(d.twData&&Array.isArray(d.twData)&&d.twData.length>ee.globalStandIndex){const p=d.twData[ee.globalStandIndex];if(p&&p.tCrown&&Array.isArray(p.tCrown)&&p.tCrown.length>0){const g=p.tCrown[0];g&&g.data&&Array.isArray(g.data)&&l<g.data.length&&(u=g.data[l],typeof u=="number"&&!isNaN(u)?t.push(u):u=null)}}c.push(u)}a.push(c)}if((this.twmDifferentialMode?.classList.contains("active")??!1)&&a.length>0&&a[0].length>1){for(let l=0;l<a.length;l++){const c=a[l][0];if(c!==null&&typeof c=="number")for(let h=0;h<a[l].length;h++){const d=a[l][h];d!==null&&typeof d=="number"&&(a[l][h]=d-c)}}t.length=0,a.forEach(l=>{l.forEach(c=>{typeof c=="number"&&!isNaN(c)&&t.push(c)})})}return t.length>0?{xValues:s,yValues:r,zMatrix:a,allZValues:t}:null}buildWCrownSurfaceData(e){const t=[],i=Math.max(...e.map(l=>{if(l.twData&&Array.isArray(l.twData)&&l.twData.length>ee.globalStandIndex){const c=l.twData[ee.globalStandIndex];if(c&&c.wCrown&&Array.isArray(c.wCrown)&&c.wCrown.length>0){const h=c.wCrown[0];if(h&&h.data&&Array.isArray(h.data))return h.data.length}}return 0}));if(i===0)return null;const s=e.map((l,c)=>c),r=[];if(i===1)r.push(0);else for(let l=0;l<i;l++)r.push(-1+2*l/(i-1));const a=[];for(let l=0;l<r.length;l++){const c=[];for(let h=0;h<s.length;h++){const d=e[h];let u=null;if(d.twData&&Array.isArray(d.twData)&&d.twData.length>ee.globalStandIndex){const p=d.twData[ee.globalStandIndex];if(p&&p.wCrown&&Array.isArray(p.wCrown)&&p.wCrown.length>0){const g=p.wCrown[0];g&&g.data&&Array.isArray(g.data)&&l<g.data.length&&(u=g.data[l],typeof u=="number"&&!isNaN(u)?t.push(u):u=null)}}c.push(u)}a.push(c)}if((this.twmDifferentialMode?.classList.contains("active")??!1)&&a.length>0&&a[0].length>1){for(let l=0;l<a.length;l++){const c=a[l][0];if(c!==null&&typeof c=="number")for(let h=0;h<a[l].length;h++){const d=a[l][h];d!==null&&typeof d=="number"&&(a[l][h]=d-c)}}t.length=0,a.forEach(l=>{l.forEach(c=>{typeof c=="number"&&!isNaN(c)&&t.push(c)})})}return t.length>0?{xValues:s,yValues:r,zMatrix:a,allZValues:t}:null}resizePlots(){this.plotDivs.length>0&&typeof Me<"u"&&Me?.relayout&&requestAnimationFrame(()=>{this.plotDivs.forEach(e=>{const t=e.clientWidth,i=e.clientHeight;if(t>0&&i>0)try{Me.relayout(e,{width:t,height:i})}catch{}})})}}class Ox{constructor(){this.currentPlate=null,this.container=document.getElementById("bmResPlotContainer"),this.passSelect=document.getElementById("bmResPassSelect"),this.bmResCard=document.getElementById("bmResCard"),this.setupEventListeners(),ee.addPassIndexListener(e=>{this.updatePassDropdownSelection(),this.renderBmResPlot()})}updatePassDropdownSelection(){this.passSelect&&(this.passSelect.value=ee.globalPassIndex.toString())}setupEventListeners(){document.addEventListener("plateSelected",(e=>{this.currentPlate=e.detail.plate,this.populatePassDropdown(),this.renderBmResPlot()})),this.passSelect&&this.passSelect.addEventListener("change",()=>this.handlePassChange()),document.addEventListener("bmResVisible",(()=>{this.resizePlots()})),this.setupControlButtons()}reset(){this.currentPlate=null,this.passSelect&&(this.passSelect.innerHTML=""),this.container&&this.container.replaceChildren(),this.bmResCard&&(this.bmResCard.style.display="none")}populatePassDropdown(){if(!this.currentPlate||!this.passSelect)return;const e=this.currentPlate.preCalc;if(!e||!e.passes||!Array.isArray(e.passes)){this.passSelect&&(this.passSelect.innerHTML="");return}const t=e.passes;if(this.passSelect.innerHTML="",t.forEach((i,s)=>{const r=document.createElement("option");r.value=String(s),r.textContent=String(s),this.passSelect.appendChild(r)}),t.length===0)this.renderBmResPlot();else{const i=ee.globalPassIndex<t.length?ee.globalPassIndex:0;ee.setGlobalPassIndex(i),t.length>0&&(this.passSelect.value=String(i)),this.renderBmResPlot()}}handlePassChange(){const e=Number(this.passSelect?.value);ee.setGlobalPassIndex(Number.isFinite(e)?e:0),this.renderBmResPlot()}setupControlButtons(){[{id:"bmResPassPrev",handler:()=>this.cyclePass(-1)},{id:"bmResPassNext",handler:()=>this.cyclePass(1)}].forEach(({id:t,handler:i})=>{const s=document.getElementById(t);s&&s.addEventListener("click",i)})}cyclePass(e){if(!this.currentPlate||!this.passSelect)return;const t=this.currentPlate.preCalc;if(!t||!t.passes||!Array.isArray(t.passes))return;const i=t.passes;if(i.length===0)return;const r=(ee.globalPassIndex+e+i.length)%i.length;ee.setGlobalPassIndex(r),this.passSelect.value=String(r),this.handlePassChange()}renderBmResPlot(){if(!this.container||!this.currentPlate)return;this.container.replaceChildren();const e=this.currentPlate.preCalc;if(!e||!e.passes||!Array.isArray(e.passes)||e.passes.length===0){const c=document.createElement("div");c.textContent="No preCalc passes data available",c.style.cssText="padding: 20px; text-align: center; color: var(--color-muted);",this.container.appendChild(c);return}const i=e.passes[ee.globalPassIndex];if(!i){const c=document.createElement("div");c.textContent="Selected pass not available",c.style.cssText="padding: 20px; text-align: center; color: var(--color-muted);",this.container.appendChild(c);return}const r=[{data:i.profile?.entryFlatnessSpline,name:"Entry Flatness",color:"#1f77b4"},{data:i.profile?.entryProfileSpline,name:"Entry Profile",color:"#ff7f0e"},{data:i.profile?.gapSpline,name:"Gap",color:"#2ca02c"},{data:i.profile?.profileSpline,name:"Profile",color:"#d62728"},{data:i.profile?.profileSplinePre,name:"Profile Pre",color:"#9467bd"},{data:i.profile?.flatteningProfile,name:"Flattening Profile",color:"#8c564b"}].filter(c=>c.data&&c.data.x&&c.data.y&&Array.isArray(c.data.x.data)&&Array.isArray(c.data.y.data)&&c.data.x.data.length>0&&c.data.y.data.length>0);if(r.length===0){const c=document.createElement("div");c.textContent="No spline data available for this pass",c.style.cssText="padding: 20px; text-align: center; color: var(--color-muted);",this.container.appendChild(c);return}const a=document.createElement("div");a.style.cssText="width: 100%; height: 600px;",this.container.appendChild(a);const o=r.map(c=>({x:c.data.x.data,y:c.data.y.data,type:"scatter",mode:"lines+markers",name:c.name,line:{color:c.color,width:2},marker:{size:3,color:c.color,line:{width:1,color:"#000"}},hovertemplate:`${c.name}<br>X: %{x:.6f}<br>Y: %{y:.6f}<extra></extra>`})),l={height:600,margin:{l:60,r:30,t:30,b:50},showlegend:!0,legend:{x:0,y:1,bgcolor:"rgba(255, 255, 255, 0.8)",bordercolor:"#e0e0e0",borderwidth:1},xaxis:{title:{text:"Position",font:{size:12}},tickfont:{size:10},showgrid:!0,gridcolor:"#e0e0e0"},yaxis:{title:{text:"Value",font:{size:12}},tickfont:{size:10},showgrid:!0,gridcolor:"#e0e0e0"},plot_bgcolor:"#ffffff",paper_bgcolor:"#ffffff",hovermode:"closest",autosize:!0};l.title={text:`BM Results - Pass ${ee.globalPassIndex} (${r.length} splines)`,font:{size:14,weight:600}},Me.newPlot(a,o,l,{responsive:!0,displayModeBar:!0,displaylogo:!1}),requestAnimationFrame(()=>{const c=a.clientWidth;if(Me?.relayout)try{Me.relayout(a,{width:c,height:600})}catch{}})}resizePlots(){if(this.container){const e=this.container.querySelector('div[style*="height: 600px"]');if(e&&Me?.relayout){const t=e.clientWidth;try{Me.relayout(e,{width:t,height:600})}catch{}}}}}function Ml(n,e){const t=document.createElement("div");t.classList.add(wh,e==="success"?Th:Ah),t.textContent=n,document.body.appendChild(t),setTimeout(()=>{t.classList.add(Ph),setTimeout(()=>{t.parentElement&&t.parentElement.removeChild(t)},Ch)},Mh)}const Ca=document.getElementById("fileInput"),Cl=document.getElementById("statusInitial"),ka=document.getElementById("globalDropOverlay"),wa=document.getElementById("menuBar"),Ux=document.getElementById("initialStatus");function Sc(){const n=ue.get(ie.LAST_OPENED_FILE);n&&wa.style.display==="none"?Cl.textContent=`Drop DMM file or Ctrl+O • Auto-loaded ${n}`:Cl.textContent="Drop DMM file anywhere or Ctrl+O"}document.addEventListener("DOMContentLoaded",()=>{Sc(),Bx()});async function Bx(){const n=ue.get(ie.LAST_OPENED_FILE),e=await ue.getLargeContent(ie.LAST_OPENED_FILE_CONTENT);if(n&&e)try{const t=new Blob([e],{type:"text/plain"}),i=new File([t],n,{type:"text/plain"});await Ha(i)}catch(t){console.warn("Auto-reload failed:",t)}}const wl=new Dh,vc=new Oh,yc=new kh,Tl=new zh,kx=new qh,za=new Cx,Ga=new Ix,bc=new Fx,Ec=new Ox;console.log("Main: SegmentsView instantiated:",Ga);const zx=new Gh({deferred:!0});document.addEventListener("flatnessVisible",(()=>{vc.resizePlots()}));document.addEventListener("profileVisible",(()=>{yc.resizePlots()}));document.addEventListener("rollVisible",(()=>{za.resizePlots()}));document.addEventListener("segmentsVisible",(()=>{console.log("Main: segmentsVisible event received, calling segmentsView.resizePlots()"),Ga.resizePlots()}));document.addEventListener("twmVisible",(()=>{bc.resizePlots()}));document.addEventListener("bmResVisible",(()=>{Ec.resizePlots()}));window.addEventListener("resize",()=>{za.resizePlots()});document.addEventListener("keydown",n=>{(n.ctrlKey||n.metaKey)&&n.key==="o"&&(n.preventDefault(),Ca.click())});Ca.addEventListener("change",()=>{const n=Ca.files?.[0];n&&Ha(n)});["dragenter","dragover","drop"].forEach(n=>document.body.addEventListener(n,e=>{e.preventDefault(),e.stopPropagation()}));document.body.addEventListener("dragenter",n=>{n.target.closest("#dropZone")||ka.classList.add("visible")});document.body.addEventListener("dragleave",n=>{(n.relatedTarget===null||!n.relatedTarget.closest("body"))&&ka.classList.remove("visible")});document.body.addEventListener("drop",n=>{ka.classList.remove("visible");const e=n.dataTransfer;if(!e)return;const t=e.files[0];t&&Ha(t)});async function Ha(n){Tl.hide(),wl.reset(),vc.reset(),yc.reset(),kx.reset(),za.reset(),Ga.reset(),bc.reset(),Ec.reset(),wa.style.display="none",Ux.style.display="none";try{const e=performance.now(),t=await n.text(),i=performance.now(),s=performance.now(),r=Nl(t,{}),a=performance.now(),o=performance.now();wl.renderAllPlates(r.plates,r.totalPlates);const l=performance.now();wa.style.display=r.plates.length>0?"flex":"none",r.plates.length>0&&zx.applySavedStates(),r.reachedEOF?(Ml("Load OK","success"),ue.set(ie.LAST_OPENED_FILE,n.name),await ue.setLargeContent(ie.LAST_OPENED_FILE_CONTENT,t),Sc()):(Ml(`Parse Error: ${r.tokensRemaining} tokens remaining`,"error"),console.warn(`[MAIN] Parsing stopped with ${r.tokensRemaining} tokens remaining (expected EOF)`)),Tl.display(n,r)}catch(e){const t=document.getElementById("parsed"),i=document.getElementById("parsedCard");t.innerHTML=`<div class="parse-error"><strong>Parse Error:</strong> ${e.message}</div>`,i.style.display="block"}}window._dmmSite={loadDataPlate:Nl};
