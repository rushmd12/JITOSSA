import { promises } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
//import { plugins } from '../lib/plugins.js'
let tags = {
  'downloader':'‎𝚍𝚘𝚠𝚗𝚕𝚘𝚊𝚍𝚎𝚛',
  'applications':'‎𝚊𝚙𝚙𝚕𝚒𝚌𝚊𝚝𝚒𝚘𝚗𝚜',
  'ai':'‎𝚊𝚒',
  'morocco':'𝚖𝚘𝚛𝚘𝚌𝚌𝚘',
  'drawing':'‎𝚍𝚛𝚊𝚠𝚒𝚗𝚐' ,
  'anime':'‎𝚊𝚗𝚒𝚖𝚎',
  'islam':'‎𝚒𝚜𝚕𝚊𝚖',
  'owner':'‎𝚘𝚠𝚗𝚎𝚛',
  'search':'𝚜𝚎𝚊𝚛𝚌𝚑',
  'group':'𝚐𝚛𝚘𝚞𝚙',
  'audio-changer':'‎𝚊𝚞𝚍𝚒𝚘',
  'sticker':'‎𝚜𝚝𝚒𝚌𝚔𝚎𝚛',
  'image-edit':'‎𝚒𝚖𝚊𝚐𝚎',
  'maker':'𝚖𝚊𝚔𝚎𝚛,
  'uploader':'‎‎𝚞𝚙𝚕𝚘𝚊𝚍𝚎𝚛',
  'tools':'𝚝𝚘𝚘𝚕𝚜',
}
const _0x3cd458=_0x186a;(function(_0x4ae777,_0x761e71){const _0x141af8=_0x186a,_0x149122=_0x4ae777();while(!![]){try{const _0x50e620=parseInt(_0x141af8(0x20d))/0x1+-parseInt(_0x141af8(0x1fe))/0x2*(parseInt(_0x141af8(0x207))/0x3)+-parseInt(_0x141af8(0x1f2))/0x4+-parseInt(_0x141af8(0x233))/0x5*(-parseInt(_0x141af8(0x22b))/0x6)+-parseInt(_0x141af8(0x21d))/0x7+parseInt(_0x141af8(0x229))/0x8+parseInt(_0x141af8(0x237))/0x9;if(_0x50e620===_0x761e71)break;else _0x149122['push'](_0x149122['shift']());}catch(_0x5dcc49){_0x149122['push'](_0x149122['shift']());}}}(_0x9970,0xca50d));const defaultMenu={'before':'\x0a*RUSH\x20MD*\x0a\x0a┌\x20\x20🦄\x20_w9t\x20lbot\x20:\x20%uptime_\x0a│\x20\x20🦄\x20_lyoum\x20:\x20\x20%week_\x0a│\x20\x20🦄\x20_lw9t\x20:\x20%time_\x0a│\x20\x20🦄\x20_tari5\x20:\x20%date_\x0a│\x20\x20🦄\x20_total\x20user\x20:\x20%totalreg_\x0a└\x20\x20🦄\x20Prefix\x20Used\x20:\x20*[\x20%p\x20]*\x0a\x0a%readmore\x0a'[_0x3cd458(0x216)](),'header':_0x3cd458(0x1e5),'body':_0x3cd458(0x1f6),'footer':'','after':_0x3cd458(0x1e2)+conn[_0x3cd458(0x235)][_0x3cd458(0x1f7)]+_0x3cd458(0x201)};function _0x9970(){const _0x4a1f89=['readFile','users','includes','description','336415ZFrpCY','diamond','user','(Ⓛ)','8712351bMiYcI','register','toString','numeric','╰┉┉┉≻\x09\x20_©\x20','filter','registered','╭┉┉┉≻\x20*%category*\x20≺┉┉┉','split','customPrefix','sendMessage','Wage','menu','JITOSSA','premium','replace','prefix','reply','after','help','659116sHKBXX','Pon','trim','sort','┆\x20\x09\x20🦄\x20_%cmd_','name','plugins','https://whatsapp.com/channel/0029VacPdLXJ93wP6q0b962J','once','Legi','Powered\x20by\x20https://wa.me/','https://telegra.ph/file/c7832fa9e9c96e585c6ea.jpg','2bSyJTu','map','WELCOME\x20TO\x20JITOSSA','_\x20\x09','sender','chat','join','Pahing','long','1700817szYDvP','string','data','send','padStart','version','1015425ojJCwF','jid','uptime','header','format','isArray','keys','floor','values','trimStart','fromCharCode','(Ⓟ)','tags','footer','message','before','8684144yhykky','getName','../package.json','length','catch','❎\x20هناك\x20خطأ\x20في\x20لائحة\x20الاوامر','command','disabled','repeat','body','parse','infobot','4925456hSvgMv','url','18dcoxDY','[unknown\x20github\x20url]','DateTimeFormat','homepage'];_0x9970=function(){return _0x4a1f89;};return _0x9970();}let handler=async(_0x431b15,{conn:_0x3ea47d,usedPrefix:_0xcaac3e,__dirname:_0x1b4286})=>{const _0x264f23=_0x3cd458;try{let _0x202619=JSON[_0x264f23(0x227)](await promises[_0x264f23(0x22f)](join(_0x1b4286,_0x264f23(0x21f)))[_0x264f23(0x221)](_0x62abc5=>({})))||{},{exp:_0x577db0,diamond:_0x447d8c,level:_0x320c42,role:_0x3db55a}=global['db']['data'][_0x264f23(0x230)][_0x431b15['sender']],{min:_0x5a6bb0,xp:_0x10260e,max:_0x39317a}=xpRange(_0x320c42,global['multiplier']),_0x9f838a=await _0x3ea47d[_0x264f23(0x21e)](_0x431b15[_0x264f23(0x202)]),_0x692025=new Date(new Date()+0x36ee80),_0x49706b='ar',_0x5e54ad=[_0x264f23(0x205),_0x264f23(0x1f3),_0x264f23(0x1e9),'Kliwon',_0x264f23(0x1fb)][Math[_0x264f23(0x214)](_0x692025/0x50ae4c0)%0x5],_0x302ae1=_0x692025['toLocaleDateString'](_0x49706b,{'weekday':_0x264f23(0x206)}),_0x1e98c2=_0x692025['toLocaleDateString'](_0x49706b,{'day':_0x264f23(0x1e1),'month':'long','year':_0x264f23(0x1e1)}),_0x41d405=Intl[_0x264f23(0x22d)](_0x49706b+'-TN-u-ca-islamic',{'day':_0x264f23(0x1e1),'month':_0x264f23(0x206),'year':_0x264f23(0x1e1)})[_0x264f23(0x211)](_0x692025),_0x40a345=_0x692025['toLocaleTimeString'](_0x49706b,{'hour':'numeric','minute':_0x264f23(0x1e1),'second':'numeric'}),_0x2fe364=process[_0x264f23(0x20f)]()*0x3e8,_0x1c21af;process[_0x264f23(0x20a)]&&(process[_0x264f23(0x20a)](_0x264f23(0x20f)),_0x1c21af=await new Promise(_0x19de6d=>{const _0x45711c=_0x264f23;process[_0x45711c(0x1fa)](_0x45711c(0x21b),_0x19de6d),setTimeout(_0x19de6d,0x3e8);})*0x3e8);let _0x445355=clockString(_0x1c21af),_0x328ac4=clockString(_0x2fe364),_0x1f52e3=Object[_0x264f23(0x213)](global['db'][_0x264f23(0x209)][_0x264f23(0x230)])['length'],_0x446529=Object['values'](global['db'][_0x264f23(0x209)][_0x264f23(0x230)])[_0x264f23(0x1e3)](_0x42cfee=>_0x42cfee[_0x264f23(0x1e4)]==!![])[_0x264f23(0x220)],_0x239bba=Object[_0x264f23(0x215)](global[_0x264f23(0x1f8)])['filter'](_0x3bb758=>!_0x3bb758[_0x264f23(0x224)])[_0x264f23(0x1ff)](_0x4adf08=>{const _0x296cb7=_0x264f23;return{'help':Array[_0x296cb7(0x212)](_0x4adf08[_0x296cb7(0x219)])?_0x4adf08['help']:[_0x4adf08[_0x296cb7(0x1f1)]],'tags':Array[_0x296cb7(0x212)](_0x4adf08['tags'])?_0x4adf08['tags']:[_0x4adf08[_0x296cb7(0x219)]],'prefix':_0x296cb7(0x1e7)in _0x4adf08,'diamond':_0x4adf08[_0x296cb7(0x234)],'premium':_0x4adf08[_0x296cb7(0x1ec)],'enabled':!_0x4adf08[_0x296cb7(0x224)]};});for(let _0x13c16c of _0x239bba)if(_0x13c16c&&_0x264f23(0x219)in _0x13c16c){for(let _0x201112 of _0x13c16c['tags'])if(!(_0x201112 in tags)&&_0x201112)tags[_0x201112]=_0x201112;}_0x3ea47d['menu']=_0x3ea47d[_0x264f23(0x1ea)]?_0x3ea47d[_0x264f23(0x1ea)]:{};let _0xa4e714=_0x3ea47d[_0x264f23(0x1ea)][_0x264f23(0x21c)]||defaultMenu[_0x264f23(0x21c)],_0x434e4c=_0x3ea47d[_0x264f23(0x1ea)]['header']||defaultMenu[_0x264f23(0x210)],_0x263320=_0x3ea47d[_0x264f23(0x1ea)][_0x264f23(0x226)]||defaultMenu[_0x264f23(0x226)],_0x336f95=_0x3ea47d[_0x264f23(0x1ea)][_0x264f23(0x21a)]||defaultMenu[_0x264f23(0x21a)],_0x3f7afc=_0x3ea47d[_0x264f23(0x1ea)][_0x264f23(0x1f0)]||(_0x3ea47d['user'][_0x264f23(0x20e)]==_0x3ea47d[_0x264f23(0x235)][_0x264f23(0x20e)]?'':_0x264f23(0x1fc)+_0x3ea47d[_0x264f23(0x235)]['jid'][_0x264f23(0x1e6)]`@`[0x0])+defaultMenu[_0x264f23(0x1f0)],_0x15299=[_0xa4e714,...Object[_0x264f23(0x213)](tags)[_0x264f23(0x1ff)](_0x2e3c6c=>{const _0x3d3d5d=_0x264f23;return _0x434e4c['replace'](/%category/g,tags[_0x2e3c6c])+'\x0a'+[..._0x239bba[_0x3d3d5d(0x1e3)](_0x2d9427=>_0x2d9427[_0x3d3d5d(0x219)]&&_0x2d9427['tags'][_0x3d3d5d(0x231)](_0x2e3c6c)&&_0x2d9427[_0x3d3d5d(0x1f1)])[_0x3d3d5d(0x1ff)](_0x2606b2=>{const _0x3e1282=_0x3d3d5d;return _0x2606b2[_0x3e1282(0x1f1)][_0x3e1282(0x1ff)](_0x25156d=>{const _0x4b764a=_0x3e1282;return _0x263320[_0x4b764a(0x1ed)](/%cmd/g,_0x2606b2[_0x4b764a(0x1ee)]?_0x25156d:'%p'+_0x25156d)['replace'](/%isdiamond/g,_0x2606b2[_0x4b764a(0x234)]?_0x4b764a(0x236):'')[_0x4b764a(0x1ed)](/%isPremium/g,_0x2606b2['premium']?_0x4b764a(0x218):'')[_0x4b764a(0x1f4)]();})['join']('\x0a');}),_0x336f95][_0x3d3d5d(0x204)]('\x0a');}),_0x3f7afc][_0x264f23(0x204)]('\x0a'),_0x1ae118=typeof _0x3ea47d[_0x264f23(0x1ea)]==_0x264f23(0x208)?_0x3ea47d[_0x264f23(0x1ea)]:typeof _0x3ea47d[_0x264f23(0x1ea)]=='object'?_0x15299:'',_0x11d97f={'%':'%','p':_0xcaac3e,'uptime':_0x328ac4,'muptime':_0x445355,'me':_0x3ea47d[_0x264f23(0x21e)](_0x3ea47d[_0x264f23(0x235)]['jid']),'npmname':_0x202619[_0x264f23(0x1f7)],'npmdesc':_0x202619[_0x264f23(0x232)],'version':_0x202619[_0x264f23(0x20c)],'exp':_0x577db0-_0x5a6bb0,'maxexp':_0x10260e,'totalexp':_0x577db0,'xp4levelup':_0x39317a-_0x577db0,'github':_0x202619[_0x264f23(0x22e)]?_0x202619['homepage'][_0x264f23(0x22a)]||_0x202619[_0x264f23(0x22e)]:_0x264f23(0x22c),'level':_0x320c42,'diamond':_0x447d8c,'name':_0x9f838a,'weton':_0x5e54ad,'week':_0x302ae1,'date':_0x1e98c2,'dateIslamic':_0x41d405,'time':_0x40a345,'totalreg':_0x1f52e3,'rtotalreg':_0x446529,'role':_0x3db55a,'readmore':readMore};_0x1ae118=_0x1ae118[_0x264f23(0x1ed)](new RegExp('%('+Object[_0x264f23(0x213)](_0x11d97f)[_0x264f23(0x1f5)]((_0x33c3ed,_0x590e72)=>_0x590e72[_0x264f23(0x220)]-_0x33c3ed[_0x264f23(0x220)])[_0x264f23(0x204)]`|`+')','g'),(_0x4b94ed,_0x46ca9b)=>''+_0x11d97f[_0x46ca9b]),_0x3ea47d[_0x264f23(0x1e8)](_0x431b15['chat'],{'text':_0x1ae118,'contextInfo':{'externalAdReply':{'title':_0x264f23(0x1eb),'body':_0x264f23(0x200),'thumbnailUrl':_0x264f23(0x1fd),'sourceUrl':_0x264f23(0x1f9),'mediaType':0x1,'renderLargerThumbnail':!![]}}},{'quoted':_0x431b15});}catch(_0x14516d){_0x3ea47d[_0x264f23(0x1ef)](_0x431b15[_0x264f23(0x203)],_0x264f23(0x222),_0x431b15);throw _0x14516d;}};handler[_0x3cd458(0x1f1)]=['menu'],handler[_0x3cd458(0x219)]=[_0x3cd458(0x228)],handler[_0x3cd458(0x223)]=['menu','j','list'],handler[_0x3cd458(0x238)]=![];export default handler;const more=String[_0x3cd458(0x217)](0x200e),readMore=more[_0x3cd458(0x225)](0xfa1);function _0x186a(_0xeaa196,_0x510d04){const _0x9970ae=_0x9970();return _0x186a=function(_0x186a1d,_0x515fb0){_0x186a1d=_0x186a1d-0x1e1;let _0x35af42=_0x9970ae[_0x186a1d];return _0x35af42;},_0x186a(_0xeaa196,_0x510d04);}function clockString(_0x35e06d){const _0x107e2f=_0x3cd458;let _0x3b61ec=isNaN(_0x35e06d)?'--':Math[_0x107e2f(0x214)](_0x35e06d/0x5265c00),_0xedf7f5=isNaN(_0x35e06d)?'--':Math[_0x107e2f(0x214)](_0x35e06d/0x36ee80)%0x18,_0x1f2458=isNaN(_0x35e06d)?'--':Math['floor'](_0x35e06d/0xea60)%0x3c,_0x3ae6fc=isNaN(_0x35e06d)?'--':Math[_0x107e2f(0x214)](_0x35e06d/0x3e8)%0x3c;return[_0x3b61ec,'d\x20',_0xedf7f5,'h\x20',_0x1f2458,'m\x20'][_0x107e2f(0x1ff)](_0x501b0e=>_0x501b0e[_0x107e2f(0x239)]()[_0x107e2f(0x20b)](0x2,0x0))[_0x107e2f(0x204)]('');}

