/* ELUCENIA standalone integration. Source package metadata and rights: README.md. */
(function(root){'use strict';
function freeze(value){if(value&&typeof value==='object'){for(const item of Object.values(value))freeze(item);Object.freeze(value);}return value;}
const TOOL=freeze({"id":"acr-ti-rads","title":"ACR TI-RADS","fields":[["comp","Composição","radio",{"opts":{"cistico":"Cístico ou quase todo cístico (0)","espongiforme":"Espongiforme (0)","misto":"Misto sólido-cístico (1)","solido":"Sólido ou quase todo sólido (2)"}}],["eco","Ecogenicidade","radio",{"opts":{"anecoico":"Anecoico (0)","hiper":"Hiper ou isoecoico (1)","hipo":"Hipoecoico (2)","muitohipo":"Muito hipoecoico (3)"}}],["forma","Forma (no corte transversal)","radio",{"opts":{"larga":"Mais largo que alto (0)","alta":"Mais alto que largo (3)"}}],["margem","Margem","radio",{"opts":{"lisa":"Lisa (0)","maldefinida":"Mal definida (0)","irregular":"Lobulada ou irregular (2)","extra":"Extensão extratireoidiana (3)"}}],["macro","Focos ecogênicos: macrocalcificações (1)","chk",{"pts":1}],["periferica","Focos ecogênicos: calcificações periféricas (em anel) (2)","chk",{"pts":2}],["puntiforme","Focos ecogênicos: puntiformes (3)","chk",{"pts":3}],["tamanho","Maior diâmetro do nódulo (opcional)","num",{"min":0.1,"max":10,"step":0.1,"unit":"cm","ph":"1,5","opt":true}]],"config":null,"reviewStatus":"needs-review","clinicalValidation":"not-performed"});
const window={};
/* ELUCENIA arithmetic registry. No DOM access, storage, telemetry or network requests. */
(function(root){
  'use strict';
  const CALC={fn:Object.create(null)};
  const round=(n,d=1)=>Math.round(n*Math.pow(10,d))/Math.pow(10,d);
  const yes=v=>v===true||v==='1'||v===1;
  CALC.h={
    r1:round,
    br:(n,d=1)=>round(n,d).toLocaleString('pt-BR',{minimumFractionDigits:d,maximumFractionDigits:d}),
    band:(n,bands)=>{for(const b of bands)if(n<b[0])return b[1];return bands[bands.length-1][1];},
    sum:(values,weights)=>Object.entries(weights).reduce((n,[key,w])=>n+(yes(values[key])?w:0),0),yes
  };
  CALC.def=(id,fn)=>{if(CALC.fn[id])throw Error('Duplicate calculator '+id);CALC.fn[id]=fn;};
  CALC.score=(cfg,values)=>{
    let score=0;
    for(const[name,type,weight]of cfg.fields){const v=values[name];if(type==='chk'){if(yes(v))score+=weight;}else if(type==='radio'||type==='sel'){const n=parseFloat(v);if(!Number.isNaN(n))score+=n;}}
    score=round(score,2);let band=cfg.bands[0];for(const b of cfg.bands)if(score>=b[0])band=b;
    return{main:[String(score).replace('.',','),cfg.unit||(Math.abs(score)===1?'ponto':'pontos')],label:cfg.label,level:band[1],verdict:band[2],note:band[3]||'',raw:{score}};
  };
  CALC.run=(id,values,cfg)=>{if(cfg&&cfg.bands)return CALC.score(cfg,values);if(!CALC.fn[id])return{error:'Calculadora indisponível.'};return CALC.fn[id](values);};
  root.CALC=CALC;if(typeof module!=='undefined')module.exports=CALC;
})(typeof window!=='undefined'?window:globalThis);

(function(e){'use strict';
var a=e.h;
var o=a.br;
var i=a.yes;
var l={cistico:0,espongiforme:0,misto:1,solido:2};
var c={anecoico:0,hiper:1,hipo:2,muitohipo:3};
var u={larga:0,alta:3};
var p={lisa:0,maldefinida:0,irregular:2,extra:3};
var v=[null,["TR1","benigno",null,null,"low"],["TR2","não suspeito",null,null,"low"],["TR3","levemente suspeito",2.5,1.5,"mid"],["TR4","moderadamente suspeito",1.5,1,"mid"],["TR5","altamente suspeito",1,.5,"high"]];
var f={3:"US em 1, 3 e 5 anos",4:"US em 1, 2, 3 e 5 anos",5:"US anual por até 5 anos"};
e.def("acr-ti-rads",function(e){var a=(e.comp==="cistico"||e.comp==="espongiforme")?0:l[e.comp]+c[e.eco]+u[e.forma]+p[e.margem]+(i(e.macro)?1:0)+(i(e.periferica)?2:0)+(i(e.puntiforme)?3:0);if(isNaN(a))return{error:"Responda todas as categorias."};var r,n=0===a?1:a<=2?2:3===a?3:a<=6?4:5,t=v[n],s=e.tamanho,d=null;t[2]?null==s?r=t[0]+" ("+t[1]+"): informe o maior diâmetro para a conduta":s>=t[2]?(r=t[0]+" ("+t[1]+"): PAAF indicada (≥ "+o(t[2],1)+" cm)",d=!0):s>=t[3]?(r=t[0]+" ("+t[1]+"): seguimento ultrassonográfico, sem PAAF",d=!1):(r=t[0]+" ("+t[1]+"): nem PAAF nem seguimento pelo tamanho",d=!1):(r=t[0]+" ("+t[1]+"): PAAF não indicada",d=!1);var m=[["Pontos",String(a)]];return t[2]&&(m.push(["PAAF se maior diâmetro","≥ "+o(t[2],1)+" cm"]),m.push(["Seguimento se","≥ "+o(t[3],1)+" cm ("+f[n]+")"])),{main:[t[0],""],label:"ACR TI-RADS",level:t[4],verdict:r,rows:m,note:1===a?"Um ponto não aparece na tabela do white paper; a conduta é a mesma de TR1 e TR2 (sem PAAF).":"",raw:{score:a,tr:n,paaf:d}}});
})(window.CALC);
function calculate(input){
 if(!input||typeof input!=='object'||Array.isArray(input))return {error:'Informe um objeto com os campos da ferramenta.',code:'INVALID_INPUT'};
 const values=Object.create(null);
 for(const[name,,kind,o={}] of TOOL.fields){
  const v=Object.hasOwn(input,name)?input[name]:undefined;
  if(kind==='chk'){if(v!==undefined&&v!==null&&![true,false,1,0,'1','0'].includes(v))return {error:'Campo booleano inválido: '+name,field:name,code:'INVALID_INPUT'};values[name]=v===true||v===1||v==='1';continue;}
  const empty=v==null||(typeof v==='string'&&!v.trim());
  if(empty){if(!o.opt)return {error:'Campo obrigatório: '+name,field:name,code:'REQUIRED_FIELD'};values[name]=kind==='num'?null:'';continue;}
  if(kind==='num'){
   if(!['number','string'].includes(typeof v)||(typeof v==='string'&&!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/.test(v.trim()))||!Number.isFinite(Number(v)))return {error:'Número inválido: '+name,field:name,code:'INVALID_INPUT'};
   const n=Number(v);if((Number.isFinite(o.min)&&n<o.min)||(Number.isFinite(o.max)&&n>o.max))return {error:'Valor fora do intervalo: '+name,field:name,code:'OUT_OF_RANGE'};
   values[name]=n;
  }else{if(!Object.hasOwn(o.opts||{},String(v)))return {error:'Opção inválida: '+name,field:name,code:'INVALID_OPTION'};values[name]=String(v);}
 }
 try{const r=window.CALC.run(TOOL.id,values,TOOL.config);if(r.error)return {error:String(r.error).replace(/<[^>]*>/g,''),code:'FORMULA_DOMAIN'};
  if(!Array.isArray(r.main)||r.main.some(v=>typeof v==='number'&&!Number.isFinite(v))||/\b(?:NaN|Infinity)\b/.test(String(r.main[0])))return {error:'Resultado não finito ou indisponível.',code:'INVALID_RESULT'};
  return {id:TOOL.id,main:r.main,label:r.label||TOOL.title,raw:r.raw||{},clinicalValidation:'not-performed'};
 }catch{return {error:'Confira os valores e o domínio da fórmula.',code:'FORMULA_DOMAIN'};}
}
const api=Object.freeze({metadata:TOOL,calculate});if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.EluceniaTool=api;
})(typeof globalThis!=='undefined'?globalThis:this);
