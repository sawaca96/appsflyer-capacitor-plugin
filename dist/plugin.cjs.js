'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

exports.AFConstants = void 0;
(function (AFConstants) {
    AFConstants["onConversionDataSuccess"] = "onConversionDataSuccess";
    AFConstants["onConversionDataFail"] = "onConversionDataFail";
    AFConstants["onAppOpenAttribution"] = "onAppOpenAttribution";
    AFConstants["onAttributionFailure"] = "onAttributionFailure";
    AFConstants["CONVERSION_CALLBACK"] = "conversion_callback";
    AFConstants["OAOA_CALLBACK"] = "oaoa_callback";
    AFConstants["UDL_CALLBACK"] = "udl_callback";
})(exports.AFConstants || (exports.AFConstants = {}));

const AppsFlyer = core.registerPlugin('AppsFlyerPlugin', {});

exports.AppsFlyer = AppsFlyer;
//# sourceMappingURL=plugin.cjs.js.map
