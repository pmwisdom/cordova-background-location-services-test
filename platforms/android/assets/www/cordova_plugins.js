cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    },
    {
        "file": "plugins/org.flybuy.cordova.background-location-services/www/BackgroundLocationServices.js",
        "id": "org.flybuy.cordova.background-location-services.BackgroundLocationServices",
        "clobbers": [
            "plugins.backgroundLocationServices"
        ]
    },
    {
        "file": "plugins/cordova-plugin-geolocation/www/android/geolocation.js",
        "id": "cordova-plugin-geolocation.geolocation",
        "clobbers": [
            "navigator.geolocation"
        ]
    },
    {
        "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
        "id": "cordova-plugin-geolocation.PositionError",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-console": "1.0.2",
    "cordova-plugin-whitelist": "1.2.1",
    "org.flybuy.cordova.background-location-services": "1.0.1",
    "cordova-plugin-compat": "1.0.0",
    "cordova-plugin-geolocation": "2.2.0"
}
// BOTTOM OF METADATA
});