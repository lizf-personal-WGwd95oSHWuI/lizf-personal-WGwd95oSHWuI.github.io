try{(function(){var BookmarkletExtensions = 
{
  'observers': []
};

BookmarkletExtensions.call_for_all_roots = function(func)
{
  BookmarkletExtensions.root = document;
  func();
  for (e of document.querySelectorAll(':not(a)'))
  {
    if (e.shadowRoot)
    {
      BookmarkletExtensions.root = e.shadowRoot;
      func();
    }
  }
};

BookmarkletExtensions.call_for_all_roots_when_elements_change = function(func)
{
  var all_roots_func = function()
  {
    BookmarkletExtensions.call_for_all_roots(func);
  };
  var observer = new MutationObserver(all_roots_func);
  BookmarkletExtensions.observers.push(observer);
  observer.observe(document, {childList: true, subtree: true});
  all_roots_func();
};
try{(function(){function hm(rx)
{
  return rx.exec(window.location.host);
};

function um(rx)
{
  return rx.exec(window.location);
};

function rqs(qs)
{
  for (e of BookmarkletExtensions.root.querySelectorAll(qs))
  {
    e.remove();
  }
};

function bg(ss)
{
  for (e of BookmarkletExtensions.root.querySelectorAll('[style*="'+ss+'"]'))
  {
    e.style.backgroundImage = null;
  }
};

var apply_rules = function(){ {
  rqs('#onesignal-slidedown-dialog, .celtra-banner, .dfp-leaderboard-container, .ad-unit, .trc_spotlight_widget, .ntvClickOut, .masthead-ad-control, .ad-div, .pyv-afc-ads-container, #promotion-shelf, ytd-video-masthead-ad-advertiser-info-renderer, ytm-promoted-sparkles-web-renderer, .newsletter-signup, #bordeaux-incremental-ad-0, .adsbygoogle, .pp_ad_container, [src*="lanistaads"], .ytd-banner-promo-renderer, .ad_module, .adWrapper, [name*=".doubleclick."], #ad_unit, [data-google-query-id], .apd_static_banner, [src*="googlesyndication"], .fiSafeFrame, .apd_docked_banner, .apd_docked_instance, #primisPlayerContainerDiv, [class*="ads__Container"], [data-mini-ad-unit], [class*="ads__index__adWrapper"], [src*=".googlesyndication."], [recirculation-ad-container], .displayAdContainer, [class*="articlePage_topBannerAdContainer_sticky"], [class*="stickyTopBannerAd"], [class*="nativeAdsCard"], [class*="NativeAd"], video-card[config-instance-src="ntpmsn"], [src*="srv.FactFiend"], ._cm-os-slider, ._cm_native_ad_background_color, #iframe-future-big-top-expanded, .sticky-player-background, .sticky-player-top-fade, [src*="juicyads."], [href*="juicyads."], [src*="imasdk.google"], .ytp-ad-overlay-container, .ytp-ad-overlay-slot, .video-ads, .ytp-ad-module, .proper-ad-unit, .ad-sticky, #header-ad-wrapper, [data-before-content*="advertisement"], [class*="promoted"], .ads-ad, [src*="prvk.io"], .OUTBRAIN, ytd-display-ad-renderer, script[src*="/ad.js"], .overlay-ads, .mv-ad-box, #adhesion_desktop_wrapper, mv-ad-reporter, .adunitwrapper, .ad-container, .ad-container-single-media-element-annotations, .ytd-player-legacy-desktop-watch-ads-renderer, [src*=".doubleclick.net"], [src*="javascript:window.parent"], .non-empty-ad, [data-aop*="ad_ad"], .outeradcontainer, .adchoices, [data-options*="adCallAuto"], .intra-article-ad-half, views-native-ad, .native-ad-container, .native-ad-half, [srcdoc*=".mediago.io"], .Ad-SCTU, .native-ad, .contain-ad, [data-type="advert"], #tyche_trendi_video_container, div > [data-name=stitialer], iframe[style*="z-index: 2147483647 !important"], [src*="thaudray.com"], [src*="betotodilea.com"], div[style*="z-index: 2147483647"], div[style*="display: block !important"], iframe[src="about:blank"], .ad-placement, .afs_ads, [src*="upgulpinon.com"], [src*="nanouwho.com"], [src*="outoctillerytor.com"], [src*="anicli.click"], [src*="cameesse.net"], script[src*="bygliscortor.com"], [src*="tzegilo.com"]');
  bg('googlesyndication');
  bg('prvk.io');
}

if (window.ytInitialPlayerResponse)
{
  window.ytInitialPlayerResponse.adPlacements = undefined;
}

if (window.playerResponse)
{
  window.playerResponse.adPlacements = undefined;
}

var youtube_video_with_ad_playing = document.querySelector('.ad-showing video');
if (youtube_video_with_ad_playing)
{
  youtube_video_with_ad_playing.src = '';
}

if (hm(/weather.com/))
{
  rqs('.regionSidebar');
}

for(i of Array.from(BookmarkletExtensions.root.querySelectorAll('script')).filter((i) => 
    i.innerText.includes('outoctillerytor.com') || 
    i.innerText.includes('cameesse.net')
    ))
{
  if (!document._og_createElement)
  {
    document._og_createElement = document.createElement;
  }
  document.createElement = function(t)
  {
    if (!['a', 'iframe'].includes(t))
    {
      return document._og_createElement(t);
    }
  };
  break;
}

window.navigator.sendBeacon = null;
 };

BookmarkletExtensions.call_for_all_roots_when_elements_change(apply_rules);

})();}catch(err){/*console.error(err);*/ alert(err);};try{(function(){var get_computed_color = function(element, attribute)
{
  var color = /(\d+)\,\s*(\d+)\,\s*(\d+)/.exec(getComputedStyle(element)[attribute]);
  return [parseInt(color[1]), parseInt(color[2]), parseInt(color[3])];
}

var is_color_dark = function(color)
{
  return (color[0] + color[1] + color[2]) < 382;
}

var invert_color = function(color)
{
  return [255-color[0], 255-color[1], 255-color[2]];
}

var apply_style = function()
{
  for (element of BookmarkletExtensions.root.querySelectorAll(':not(html):not(head):not(title):not(base):not(link):not(path):not(meta):not(style):not(figure):not(picture):not(img):not(iframe):not(embed):not(object):not(param):not(video):not(audio):not(source):not(track):not(map):not(area):not(svg):not(input):not(button):not(select):not(datalist):not(optgroup):not(option):not(textarea):not(keygen):not(output):not(progress):not(meter):not(fieldset):not(legend):not(script):not(canvas):not(symbol):not(noscript):not(defs):not(use)'))
  {
    var bg = get_computed_color(element, 'backgroundColor');
    if (!is_color_dark(bg))
    {
      var new_bg = invert_color(bg);
      element.style.backgroundColor = 'rgb('+new_bg.join(', ')+')';
    }

    var text = get_computed_color(element, 'color');
    if (is_color_dark(text))
    {
      var new_text = invert_color(text);
      element.style.color = 'rgb('+new_text.join(', ')+')';
      
      // If a background image is set, remove it
      // Since the text was dark, it's safe to assume the image was light
      // and removing it should look better than inverting the images color
      if (getComputedStyle(element).backgroundImage)
      {
        element.style.backgroundImage = 'url()';
      }
    }
  }
};

BookmarkletExtensions.call_for_all_roots_when_elements_change(apply_style);
})();}catch(err){/*console.error(err);*/ alert(err);};})();}catch(err){/*console.error(err);*/ alert(err);};
