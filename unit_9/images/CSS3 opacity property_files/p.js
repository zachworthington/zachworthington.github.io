var enc=encodeURIComponent;
(function(){function m(c,a,e){var d=[],b;e&&(b=document.createElement(c));for(var f in a)e?b[f]=a[f]:d.push(f+"\x3d'"+a[f]+"'");return e?b:'\x3c'+c+' '+d.join(' ')+'\x3e\x3c/'+c+'\x3e'}function p(c){c+='';return c.length>q?c.substr(0,q):c}function b(c,a,e){void 0===e&&(e='');return c[a]?c[a]:e}function r(c){try{for(var a=[],e=0;e<c.length;e++){var d=c[e];a.push(d.id+':'+d.price+':'+d.quantity)}return a.join('|')}catch(b){return''}}function k(){var c=enc,a='',e='',d='',b=window;try{a=top.document.location}catch(f){try{e=
document.location;if(e==top.location)a=e;else for(;;){a=b.document.location;b.document.referrer&&(d=b.document.referrer);if(b==b.parent)break;else b.document.referrer&&(a=d);b=b.parent}if(''==a||null==a)a=d?d:e}catch(k){d&&''!=d?a=d:''==a&&(a=e)}}var a=p(a),c='url\x3d'+c(a)+'\x26referrer\x3d',a=enc,h;try{h=p(top.document.referrer)}catch(l){h=''}h=c+a(h)+'\x26js_disabled\x3dfalse\x26from_js\x3dtrue\x26r\x3d'+Math.floor(1E5*Math.random())+'\x26tz\x3d'+(new Date).getTimezoneOffset()+'\x26scr\x3d'+screen.width+
'x'+screen.height+'x'+screen.colorDepth+'\x26pl\x3d';c=[];a=navigator.plugins;for(e=0;e<a.length;e++)c.push(a[e].name),c.push(','),c.push(a[e].filename),c.push(','),c.push(a[e].description),c.push(','),c.push(a[e].version),c.push(';');c=c.join('');for(i=a=0;i<c.length;i++)e=c.charCodeAt(i),a=e+(a<<6)+(a<<16)-a;return h+a}function s(c){var a=c.pop();if(a)for(var e='undefined'==typeof __GetI_domain?'px.adhigh.net':__GetI_domain;a;){if('VIEW'==a.type)pix(e,'/p/tracking','site_id\x3d'+b(a,'site_id')+
'\x26product_id\x3d'+b(a,'product_id')+'\x26product_price\x3d'+b(a,'product_price')+'\x26category_id\x3d'+b(a,'category_id')+'\x26user_data\x3d'+serializeUserData(b(a,'user_data'))+'\x26pixel_id\x3d'+b(a,'pixel_id')+'\x26'+k(),!0,0,0,b(a,'iframe',!1));else if('CONVERSION'==a.type)pix(e,'/p/conversion','site_id\x3d'+b(a,'site_id')+'\x26conversion_id\x3d'+b(a,'conversion_id')+'\x26transaction_id\x3d'+b(a,'transaction_id')+'\x26revenue\x3d'+b(a,'revenue')+'\x26attributed\x3d'+b(a,'attributed','false')+
'\x26pixel_id\x3d'+b(a,'pixel_id')+'\x26order\x3d'+r(b(a,'order',[]))+'\x26'+k(),!0,0,0,b(a,'iframe',!1));else if('CART_ADD'==a.type)pix(e,'/p/cart','site_id\x3d'+b(a,'site_id')+'\x26product_id\x3d'+b(a,'product_id','')+'\x26product_price\x3d'+b(a,'product_price','')+'\x26order\x3d'+r(b(a,'order',[]))+'\x26'+k(),!0,0,0,b(a,'iframe',!1));else if('IMP'==a.type){var d=a.evId,g=k(),f='id\x3d'+d+'\x26s\x3d'+a.ssp+'\x26w\x3d'+enc(a.winPrice)+'\x26b\x3d'+enc(a.bidResponse)+'\x26';0<a.clPref.length&&(f+=
'cl\x3d'+enc(a.clPref)+'\x26');pix(e,'/p/imp',f+g,'true'===b(a,'async','true'),0,0,a.iframeHost,'1'===b(a,'iframe','0'));d='__GetI_callback_'+d;if(window[d])window[d](g,a);'true'==a.vt&&(__GetI_vt.push(a),pix(e,'/v','cb\x3d'+(new Date).getTime(),!0))}else if('AD'==a.type){var g=b(a,'height'),d=b(a,'width'),f=pix,l=e,h='pid\x3d'+b(a,'publisher_id')+'\x26tid\x3d'+b(a,'tag_id')+'\x26w\x3d'+d+'\x26h\x3d'+g+'\x26purl\x3d'+enc(b(a,'url'))+'\x26pref\x3d'+enc(b(a,'referrer'))+'\x26prenc\x3d'+enc(b(a,'min_price_encrypted'))+
'\x26pr\x3d'+b(a,'min_price'),a=b(a,'custom_params',{}),m=[],n=void 0;for(n in a)m.push('cu_'+n+'\x3d'+enc(a[n]));a=m.join('\x26');0<a.length&&(a='\x26'+a);f(l,'/p/ad',h+a+'\x26'+k(),!1,d,g)}a=c.pop()}}var t='text/javascript',l='script',q=400;pix=function(c,a,b,d,g,f,k,h){g='https:'==document.location.protocol?'https://':'http://';c=g+c+(a+'.js?'+b);c={type:t,src:c};d?(c=m(l,c,!0),c.async=d,d=document.getElementsByTagName(l)[0],d.parentNode.insertBefore(c,d)):(d=m(l,c,!1),document.write(d))};serializeUserData=
function(c){if(c&&Object.keys){for(var a=Object.keys(c),b='',d=0;d<a.length;d++)0<d&&(b+='|'),b+=a[d]+':'+c[a[d]];return b}return''};'undefined'!=typeof __GetI&&(null!=__GetI&&__GetI)&&s(__GetI)})();