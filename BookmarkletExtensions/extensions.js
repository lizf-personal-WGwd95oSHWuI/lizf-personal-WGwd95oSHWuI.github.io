try {(function(){var A={'observers':[]};A.call_for_all_roots=_=>{A.root=document;_();for(e of document.querySelectorAll(':not(a)'))e.shadowRoot&&(A.root=e.shadowRoot,_())};A.call_for_all_roots_when_elements_change=B=>{var c=function(){A.call_for_all_roots(B)},C=new MutationObserver(c);A.observers.push(C);C.observe(document,{childList:!0,subtree:!0});c()};try {(function(){function _a(d){return d.exec(window.location.host)};;function _b(D){for(e of A.root.querySelectorAll(D))e.remove()};function _c(_A){for(e of A.root.querySelectorAll(`[style*="${_A}"]`))e.style.backgroundImage=null};A.call_for_all_roots_when_elements_change(function(){_b('#onesignal-slidedown-dialog, .celtra-banner, .dfp-leaderboard-container, .ad-unit, .trc_spotlight_widget, .ntvClickOut, .masthead-ad-control, .ad-div, .pyv-afc-ads-container, #promotion-shelf, ytd-video-masthead-ad-advertiser-info-renderer, ytm-promoted-sparkles-web-renderer, .newsletter-signup, #bordeaux-incremental-ad-0, .adsbygoogle, .pp_ad_container, [src*="lanistaads"], .ytd-banner-promo-renderer, .ad_module, .adWrapper, [name*=".doubleclick."], #ad_unit, [data-google-query-id], .apd_static_banner, [src*="googlesyndication"], .fiSafeFrame, .apd_docked_banner, .apd_docked_instance, #primisPlayerContainerDiv, [class*="ads__Container"], [data-mini-ad-unit], [class*="ads__index__adWrapper"], [src*=".googlesyndication."], [recirculation-ad-container], .displayAdContainer, [class*="articlePage_topBannerAdContainer_sticky"], [class*="stickyTopBannerAd"], [class*="nativeAdsCard"], [class*="NativeAd"], video-card[config-instance-src="ntpmsn"], [src*="srv.FactFiend"], ._cm-os-slider, ._cm_native_ad_background_color, #iframe-future-big-top-expanded, .sticky-player-background, .sticky-player-top-fade, [src*="juicyads."], [href*="juicyads."], [src*="imasdk.google"], .ytp-ad-overlay-container, .ytp-ad-overlay-slot, .video-ads, .ytp-ad-module, .proper-ad-unit, .ad-sticky, #header-ad-wrapper, [data-before-content*="advertisement"], [class*="promoted"], .ads-ad, [src*="prvk.io"], .OUTBRAIN, ytd-display-ad-renderer, script[src*="/ad.js"], .overlay-ads, .mv-ad-box, #adhesion_desktop_wrapper, mv-ad-reporter, .adunitwrapper, .ad-container, .ad-container-single-media-element-annotations, .ytd-player-legacy-desktop-watch-ads-renderer, [src*=".doubleclick.net"], [src*="javascript:window.parent"], .non-empty-ad, [data-aop*="ad_ad"], .outeradcontainer, .adchoices, [data-options*="adCallAuto"], .intra-article-ad-half, views-native-ad, .native-ad-container, .native-ad-half, [srcdoc*=".mediago.io"], .Ad-SCTU, .native-ad, .contain-ad, [data-type="advert"], #tyche_trendi_video_container, div > [data-name=stitialer], [src*="thaudray.com"], [src*="betotodilea.com"], [style*="z-index: 2147483647"], [style*="inset: 15px auto auto 0px !important;"], div[style*="display: block !important_commented_out"], .ad-placement, .afs_ads, [src*="upgulpinon.com"], [src*="nanouwho.com"], [src*="outoctillerytor.com"], [src*="anicli.click"], [src*="cameesse.net"], script[src*="bygliscortor.com"], [src*="tzegilo.com"], [src*="amung.us"], [src*="bidgear.com"], [src*="oomsoapt.net"], [src*="roastoup.com"], [style*="background-image: url(&quot;&quot;)"]');_c('googlesyndication');_c('prvk.io');window['ytInitialPlayerResponse']&&(window.ytInitialPlayerResponse.adPlacements=0);window['playerResponse']&&(window.playerResponse.adPlacements=0);var E=document.querySelector('.ad-showing video');E?.src&&(E.src='');_a(/weather.com/)&&_b('.regionSidebar');for(i of [...A.root.querySelectorAll('script')].filter(i=>i.innerText.includes('outoctillerytor.com')||i.innerText.includes('cameesse.net'))){!document._og_createElement&&(document._og_createElement=document.createElement);!window._og_addEventListener&&(window._og_addEventListener=window.addEventListener);!window._og_open&&(window._og_open=window.open);document.createElement=t=>{if(!['a','script'].includes(t)){var _B=document._og_createElement(t);_B.addEventListener('load',function(aA){aA.target.src&&alert('LOADBG: '+aA.target.src)});return _B}};window.addEventListener=(e,l,o)=>{!['click','keydown','mousedown','blur','pointerup'].includes(e)&&window._og_addEventListener(e,l,o);o};window.open=(a,b)=>alert('A: '+a+'   B: '+b);$&&$('document').replaceWith($('document').clone());break}window.navigator.sendBeacon=null})})()} catch (aB) {alert(aB)};try {(function(){var aC=function(aE,aF){var aG=/(\d+)\,\s*(\d+)\,\s*(\d+)/.exec(getComputedStyle(aE)[aF]);return[parseInt(aG[1]),parseInt(aG[2]),parseInt(aG[3])]},aD=function(aH){return (aH[0]+aH[1]+aH[2])<382},_C=function(aI){return[255-aI[0],255-aI[1],255-aI[2]]};A.call_for_all_roots_when_elements_change(function(){for(element of A.root.querySelectorAll(':not(html):not(head):not(title):not(base):not(link):not(path):not(meta):not(style):not(figure):not(picture):not(img):not(iframe):not(embed):not(object):not(param):not(video):not(audio):not(source):not(track):not(map):not(area):not(svg):not(input):not(button):not(select):not(datalist):not(optgroup):not(option):not(textarea):not(keygen):not(output):not(progress):not(meter):not(fieldset):not(legend):not(script):not(canvas):not(symbol):not(noscript):not(defs):not(use)')){var aJ=aC(element,'backgroundColor'),aL=aC(element,'color');if(!aD(aJ)){var aK=_C(aJ);element.style.backgroundColor=`rgb(${aK.join(', ')})`}if(aD(aL)){var _d=_C(aL);element.style.color=`rgb(${_d.join(', ')})`;getComputedStyle(element).backgroundImage&&(element.style.backgroundImage='url()')}}})})()} catch (aM) {alert(aM)}})()} catch (aN) {alert(aN)};
