/* Original vector map symbols, matching the category silhouettes/colors in the user's reference. */
'use strict';
window.AtlasGlyphs=(()=>{
 const shapes={
 car:'<path fill="#ffda55" d="m6 12 2-6h16l2 6 3 3v10h-5v-4H8v4H3V15l3-3Z"/><path fill="#27313d" d="m9 8-2 6h18l-2-6H9Z"/><path fill="none" d="M5 17h5m12 0h5M10 20h12"/>',
 gun:'<rect fill="#ffc5d6" x="2" y="2" width="28" height="28" rx="6"/><path fill="#20212a" d="M8 9h18v6H15l-3 10H6l3-12H8V9Z"/><path fill="none" d="M15 15v4h5v-4"/>',
 cards:'<path fill="#d4a638" d="m4 12 14-4 7 17-14 5L4 12Z"/><path fill="#ffe477" d="m12 3 15 3-4 21-15-3 4-21Z"/>',
 bottle:'<rect fill="#e6edf0" x="3" y="2" width="26" height="28" rx="6"/><path fill="#f5f5ec" d="M13 7h6v6l3 3v10H10V16l3-3V7Z"/><path fill="none" d="M13 10h6M10 19h12M15 22h3"/>',
 safe:'<rect fill="#d6dce3" x="2" y="3" width="28" height="26" rx="5"/><path fill="none" d="M7 8h18v16H7zM7 12h3m-3 8h3"/><circle fill="#95a5b4" cx="18" cy="16" r="5"/><path fill="none" d="M18 10v12m-6-6h12"/>',
 ramp:'<path fill="#f8f8ed" d="M3 25c12-1 17-10 23-20v20H3Z"/>',
 star:'<path fill="#f4f0e5" d="m16 2 3 9 9-6-6 10 9 2-10 3 7 9-10-7-2 9-3-10-10 7 7-10-9-2 10-3-7-9 10 7 2-9Z"/>',
 mystery:'<circle fill="#d2a7f8" cx="16" cy="16" r="13"/><path fill="none" stroke-width="2.7" d="M12 11a4 4 0 1 1 7 3c-3 1-3 3-3 5m0 4v.2"/>',
 money:'<path fill="#9cdea7" d="M11 3h10l-3 7c10 5 13 19-2 19S4 15 14 10l-3-7Z"/><path fill="none" d="M19 14h-4a3 3 0 0 0 0 6h2a3 3 0 0 1 0 6h-5m4-14v15"/>',
 package:'<path fill="#d6b57b" d="m3 9 13-6 13 6v16l-13 5-13-5V9Z"/><path fill="none" d="m3 9 13 6 13-6M16 15v15M9 6l14 6v8l-6 2v-8"/>',
 food:'<circle fill="#f2b77d" cx="16" cy="16" r="14"/><path fill="none" d="M9 6v9m4-9v9m-6-5h8v5l-4 3v9m12-21c-5 4-5 10 0 11v10M23 6v11"/>',
 shop:'<path fill="#a5d3cf" d="M5 11h22v18H5V11ZM3 4h26l2 9c-2 5-6 2-7 0-3 4-6 4-8 0-3 4-6 4-8 0-2 4-6 4-7 0L3 4Z"/><path fill="none" d="M13 19h7v10"/>',
 bus:'<rect fill="#d5e5ee" x="5" y="2" width="22" height="26" rx="5"/><path fill="#789ead" d="M8 7h16v10H8z"/><path fill="none" d="M8 23h3m10 0h3M9 28v3m14-3v3"/>',
 boat:'<path fill="#91d1e5" d="m3 19 13-5 13 5-5 9H8l-5-9Z"/><path fill="#e9eeee" d="M9 6h14v10l-7-2-7 2V6Z"/><path fill="none" d="M16 3v21m-8 5 3 2 5-2 5 2 4-2"/>',
 plane:'<path fill="#f4e0a1" d="m15 2 4 1v10l11 7-1 3-10-4v8l4 3-1 1-6-1-6 1-1-1 4-3v-8L3 23l-1-3 11-7V5l2-3Z"/>',
 helicopter:'<path fill="none" d="M3 4h26M16 4v6M9 27h17M12 22v5m10-5v5"/><path fill="#f3d26e" d="M10 10h12l7 9-3 4H10L5 18l-4-2v-5l7 5 2-6Z"/><path fill="#9ab7be" d="M18 12h4l5 6h-9v-6Z"/>',
 bike:'<circle fill="#f0cb58" cx="8" cy="23" r="7"/><circle fill="#f0cb58" cx="25" cy="23" r="6"/><path fill="none" d="m8 23 8-11 9 11H8l-3-14h6m11-6h6m-6 0-6 9"/>',
 hospital:'<rect fill="#e7e9ee" x="2" y="2" width="28" height="28" rx="6"/><path fill="#d36377" d="M12 6h8v6h6v8h-6v6h-8v-6H6v-8h6V6Z"/>',
 police:'<path fill="#83afed" d="m16 2 5 5 8 1-1 14-12 9L4 22 3 8l8-1 5-5Z"/><path fill="#e9e0a0" d="m16 8 2 5 6 1-5 4 2 6-5-3-5 3 2-6-5-4 6-1 2-5Z"/>',
 home:'<path fill="#b6b0e8" d="M5 14 16 3l11 11v16H5V14Z"/><path fill="none" d="M1 16 16 1l15 15M12 30V18h8v12"/>',
 tree:'<path fill="#a9d09d" d="m16 2 11 11h-5l8 10H19v8h-6v-8H2l8-10H5L16 2Z"/>',
 music:'<path fill="#d8a2dd" d="M13 5 28 2v21h-4V10l-11 3v12H9V5h4Z"/><ellipse fill="#d8a2dd" cx="7" cy="26" rx="6" ry="4"/><ellipse fill="#d8a2dd" cx="23" cy="24" rx="6" ry="4"/>',
 pin:'<path fill="#f2e5a5" d="M27 13c0 9-11 18-11 18S5 22 5 13a11 11 0 1 1 22 0Z"/><circle fill="#25242e" cx="16" cy="13" r="4"/>'
 };
 const urls=new Map(),images=new Map(),ready=new Set();
 function svg(type){return `<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 32 32"><g stroke="#252332" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${shapes[type]||shapes.pin}</g></svg>`;}
 function url(type){if(!urls.has(type))urls.set(type,'data:image/svg+xml;charset=utf-8,'+encodeURIComponent(svg(type)));return urls.get(type);}
 function image(type){if(!images.has(type)){const im=new Image();im.onload=()=>ready.forEach(fn=>fn());im.src=url(type);images.set(type,im);}return images.get(type);}
 function typeFor(p){const k=p.sourceKind||p.kind,id=p.sourceId||p.id,tag=(p.type||'')+' '+p.name;if(p.kind==='personal')return 'pin';if(p.category==='mysteries')return 'mystery';if(k==='vehicle'){if(/helicopter/i.test(tag))return 'helicopter';if(/plane|jet\b|aircraft/i.test(tag))return 'plane';if(/boat|yacht|dinghy|jet.?ski/i.test(tag))return 'boat';if(/bicycle|motorcycle|bike/i.test(tag))return 'bike';return 'car';}if(k==='weapon')return 'gun';if(k==='safe')return 'safe';if(k==='card')return 'cards';if(k==='stunt'||k==='bridge'||k==='basejump')return 'ramp';if(k==='magazine'||k==='bookswap')return 'cards';if(k==='store'&&/liquor/i.test(id+' '+tag))return 'bottle';if(['bank','towatm','payday'].includes(k))return 'money';if(k==='package'||k==='treasure')return 'package';if(k==='food')return 'food';if(k==='transport')return 'bus';if(k==='gang'||k==='event'||k==='meteorite')return 'star';if(k==='civic'){if(/hospital/i.test(tag))return 'hospital';if(/police/i.test(tag))return 'police';return 'home';}if(k==='shop'||k==='store')return 'shop';if(k==='fishing'||k==='marina')return 'boat';if(k==='playlist')return 'music';if(k==='hunting'||k==='leisure')return 'tree';return 'star';}
 return {url,image,typeFor,onReady:fn=>ready.add(fn)};
})();
