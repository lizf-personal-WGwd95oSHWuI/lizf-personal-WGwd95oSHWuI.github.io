try {(function(){var A={'observers':[]};A.call_for_all_roots=_=>{A.root=document;_();for(e of document.querySelectorAll(':not(a)'))e.shadowRoot&&(A.root=e.shadowRoot,_())};A.call_for_all_roots_when_elements_change=B=>{var c=function(){A.call_for_all_roots(B)},C=new MutationObserver(c);A.observers.push(C);C.observe(document,{childList:!0,subtree:!0});c()};try {(function(){function _a(d){return d.exec(window.location.host)};;function _b(D){for(e of A.root.querySelectorAll(D))e.remove()};function _c(_A){for(e of A.root.querySelectorAll(`[style*="${_A}"]`))e.style.backgroundImage=null};A.call_for_all_roots_when_elements_change(function(){_c('googlesyndication');_c('prvk.io');window['ytInitialPlayerResponse']&&(window.ytInitialPlayerResponse.adPlacements=0);window['playerResponse']&&(window.playerResponse.adPlacements=0);var E=document.querySelector('.ad-showing video');E?.src&&(E.src='');_a(/weather.com/)&&_b('.regionSidebar');for(i of [...A.root.querySelectorAll('script')].filter(i=>i.innerText.includes('outoctillerytor.com')||i.innerText.includes('cameesse.net'))){!document._og_createElement&&(document._og_createElement=document.createElement,alert('rev1'));!window._og_addEventListener&&(window._og_addEventListener=window.addEventListener);!window._og_open&&(window._og_open=window.open);document.createElement2=t=>document._og_createElement(t);window.addEventListener2=(e,l,o)=>{!['click','keydown','mousedown','blur','pointerup'].includes(e)&&window._og_addEventListener(e,l,o);o};window.open=(a,b)=>alert('A: '+a+'   B: '+b);break}window.navigator.sendBeacon=null})})()} catch (aA) {alert(aA)};try {(function(){var aB=function(aC,aD){var aE=/(\d+)\,\s*(\d+)\,\s*(\d+)/.exec(getComputedStyle(aC)[aD]);return[parseInt(aE[1]),parseInt(aE[2]),parseInt(aE[3])]},_B=function(aF){return (aF[0]+aF[1]+aF[2])<382},_C=function(aG){return[255-aG[0],255-aG[1],255-aG[2]]};A.call_for_all_roots_when_elements_change(function(){for(element of A.root.querySelectorAll(':not(html):not(head):not(title):not(base):not(link):not(path):not(meta):not(style):not(figure):not(picture):not(img):not(iframe):not(embed):not(object):not(param):not(video):not(audio):not(source):not(track):not(map):not(area):not(svg):not(input):not(button):not(select):not(datalist):not(optgroup):not(option):not(textarea):not(keygen):not(output):not(progress):not(meter):not(fieldset):not(legend):not(script):not(canvas):not(symbol):not(noscript):not(defs):not(use)')){var aH=aB(element,'backgroundColor'),aJ=aB(element,'color');if(!_B(aH)){var aI=_C(aH);element.style.backgroundColor=`rgb(${aI.join(', ')})`}if(_B(aJ)){var _d=_C(aJ);element.style.color=`rgb(${_d.join(', ')})`;getComputedStyle(element).backgroundImage&&(element.style.backgroundImage='url()')}}})})()} catch (aK) {alert(aK)}})()} catch (aL) {alert(aL)};
