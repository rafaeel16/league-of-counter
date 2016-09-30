//Coloque o READY para o ADMOB carregar somente depois que carregar a página para não travar.
$(document).ready(function(){
       var admobid = {};
    if( /(android)/i.test(navigator.userAgent) ) {
        admobid = { // for Android
            banner: 'ca-app-pub-7771385250367915/2724435387',
            interstitial: 'ca-app-pub-7771385250367915/3584552181'
        };
    } else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
        admobid = { // for iOS
            banner: 'ca-app-pub-7771385250367915/2724435387',
            interstitial: 'ca-app-pub-7771385250367915/3584552181'
        };
    } else {
        admobid = { // for Windows Phone
            banner: 'ca-app-pub-7771385250367915/2724435387',
            interstitial: 'ca-app-pub-7771385250367915/3584552181'
        };
    }

    if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
        document.addEventListener('deviceready', initApp, false);
    } else {
        initApp();
    }

    function initApp() {
        if (! AdMob ) { alert( 'admob plugin not ready' ); return; }

        AdMob.createBanner( {
            adId: admobid.banner,
            isTesting: false,
            overlap: false,
            offsetTopBar: false,
            position: AdMob.AD_POSITION.BOTTOM_CENTER,
            bgColor: 'black'
        } );

        //AdMob.prepareInterstitial({
            //adId: admobid.interstitial,
            //autoShow: true
        //});
    } 
});
