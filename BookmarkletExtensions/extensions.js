try {(function(){var a={'observers':[]};a.call_for_all_roots=A=>{a.root=document;A();for(e of document.querySelectorAll(':not(a)'))e.shadowRoot&&(a.root=e.shadowRoot,A())};a.call_for_all_roots_when_elements_change=_=>{var b=function(){a.call_for_all_roots(_)},c=new MutationObserver(b);a.observers.push(c);c.observe(document,{childList:!0,subtree:!0});b()};try {(function(){function B(_a){return _a.exec(window.location.host)};;function C(d){for(e of a.root.querySelectorAll(d))e.remove()};function _c(D){for(e of a.root.querySelectorAll(`[style*="${D}"]`))e.style.backgroundImage=null};a.call_for_all_roots_when_elements_change(function(){C('#onesignal-slidedown-dialog, .celtra-banner, .dfp-leaderboard-container, .ad-unit, .trc_spotlight_widget, .ntvClickOut, .masthead-ad-control, .ad-div, .pyv-afc-ads-container, #promotion-shelf, ytd-video-masthead-ad-advertiser-info-renderer, ytm-promoted-sparkles-web-renderer, .newsletter-signup, #bordeaux-incremental-ad-0, .adsbygoogle, .pp_ad_container, [src*="lanistaads"], .ytd-banner-promo-renderer, .ad_module, .adWrapper, [name*=".doubleclick."], #ad_unit, [data-google-query-id], .apd_static_banner, [src*="googlesyndication"], .fiSafeFrame, .apd_docked_banner, .apd_docked_instance, #primisPlayerContainerDiv, [class*="ads__Container"], [data-mini-ad-unit], [class*="ads__index__adWrapper"], [src*=".googlesyndication."], [recirculation-ad-container], .displayAdContainer, [class*="articlePage_topBannerAdContainer_sticky"], [class*="stickyTopBannerAd"], [class*="nativeAdsCard"], [class*="NativeAd"], video-card[config-instance-src="ntpmsn"], [src*="srv.FactFiend"], ._cm-os-slider, ._cm_native_ad_background_color, #iframe-future-big-top-expanded, .sticky-player-background, .sticky-player-top-fade, [src*="juicyads."], [href*="juicyads."], [src*="imasdk.google"], .ytp-ad-overlay-container, .ytp-ad-overlay-slot, .video-ads, .ytp-ad-module, .proper-ad-unit, .ad-sticky, #header-ad-wrapper, [data-before-content*="advertisement"], [class*="promoted"], .ads-ad, [src*="prvk.io"], .OUTBRAIN, ytd-display-ad-renderer, script[src*="/ad.js"], .overlay-ads, .mv-ad-box, #adhesion_desktop_wrapper, mv-ad-reporter, .adunitwrapper, .ad-container, .ad-container-single-media-element-annotations, .ytd-player-legacy-desktop-watch-ads-renderer, [src*=".doubleclick.net"], [src*="javascript:window.parent"], .non-empty-ad, [data-aop*="ad_ad"], .outeradcontainer, .adchoices, [data-options*="adCallAuto"], .intra-article-ad-half, views-native-ad, .native-ad-container, .native-ad-half, [srcdoc*=".mediago.io"], .Ad-SCTU, .native-ad, .contain-ad, [data-type="advert"], #tyche_trendi_video_container, div > [data-name=stitialer], iframe[style*="z-index: 2147483647 !important"], [src*="thaudray.com"], [src*="betotodilea.com"], div[style*="z-index: 2147483647"], div[style*="display: block !important"], iframe[src="about:blank"], .ad-placement, .afs_ads, [src*="upgulpinon.com"], [src*="nanouwho.com"], [src*="outoctillerytor.com"], [src*="anicli.click"], [src*="cameesse.net"], script[src*="bygliscortor.com"]');_c('googlesyndication');_c('prvk.io');window.ytInitialPlayerResponse?.adPlacements=void 0;window.playerResponse?.adPlacements=void 0;var _A=document.querySelector('.ad-showing video');_A?.src='';B(/weather.com/)&&C('.regionSidebar');for(i of [...a.root.querySelectorAll('script')].filter(i=>i.innerText.includes('outoctillerytor.com')||i.innerText.includes('cameesse.net'))){!document._og_createElement&&(document._og_createElement=document.createElement);document.createElement=t=>{if(!['a','iframe'].includes(t))return document._og_createElement(t)};for(var e of document.querySelectorAll('[style="display: block !important;"]'))e.remove();break}window.navigator.sendBeacon=null})})()} catch (E) {console.error(E)};try {(function(){var aA=function(aB,_B){var aC=/(\d+)\,\s*(\d+)\,\s*(\d+)/.exec(getComputedStyle(aB)[_B]);return[parseInt(aC[1]),parseInt(aC[2]),parseInt(aC[3])]},_b=function(aD){return (aD[0]+aD[1]+aD[2])<382},_C=function(aE){return[255-aE[0],255-aE[1],255-aE[2]]};a.call_for_all_roots_when_elements_change(function(){for(element of a.root.querySelectorAll(':not(html):not(head):not(title):not(base):not(link):not(path):not(meta):not(style):not(figure):not(picture):not(img):not(iframe):not(embed):not(object):not(param):not(video):not(audio):not(source):not(track):not(map):not(area):not(svg):not(input):not(button):not(select):not(datalist):not(optgroup):not(option):not(textarea):not(keygen):not(output):not(progress):not(meter):not(fieldset):not(legend):not(script):not(canvas):not(symbol):not(noscript):not(defs):not(use)')){var aF=aA(element,'backgroundColor'),aH=aA(element,'color');if(!_b(aF)){var aG=_C(aF);element.style.backgroundColor=`rgb(${aG.join(', ')})`}if(_b(aH)){var _d=_C(aH);element.style.color=`rgb(${_d.join(', ')})`;getComputedStyle(element).backgroundImage&&(element.style.backgroundImage='url()')}}})})()} catch (aI) {console.error(aI)}})()} catch (aJ) {console.error(aJ)};
