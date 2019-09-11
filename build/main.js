webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SETTINGS = [
    { name: 'geofenceRadius', defaultValue: 200 },
    { name: 'geofenceNotifyOnEntry', defaultValue: true },
    { name: 'geofenceNotifyOnExit', defaultValue: false },
    { name: 'geofenceNotifyOnDwell', defaultValue: false },
    { name: 'geofenceLoiteringDelay', defaultValue: 30000 },
    { name: 'mapHideMarkers', defaultValue: false },
    { name: 'mapHidePolyline', defaultValue: false },
    { name: 'mapShowGeofenceHits', defaultValue: false },
    { name: 'email', defaultValue: null }
];
var GEOFENCE_RADIUS_OPTIONS = [50, 100, 150, 200, 500, 1000];
var GEOFENCE_LOITERING_DELAY_OPTIONS = [1 * 1000, 10 * 1000, 30 * 1000, 60 * 1000, 5 * 60 * 1000];
var SettingsService = (function () {
    function SettingsService(events, alertCtrl, toastCtrl) {
        var _this = this;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = window.localStorage;
        this.geofenceRadiusOptions = GEOFENCE_RADIUS_OPTIONS;
        this.geofenceLoiteringDelayOptions = GEOFENCE_LOITERING_DELAY_OPTIONS;
        this.state = {};
        if (this.storage.hasOwnProperty('settings')) {
            this.loadState();
        }
        else {
            SETTINGS.forEach(function (setting) {
                _this.state[setting.name] = setting.defaultValue;
            });
            this.saveState();
        }
    }
    SettingsService.prototype.getSettings = function () {
        return this.state;
    };
    SettingsService.prototype.onChange = function (name) {
        if (this.myState[name] === this.state[name]) {
            return;
        }
        this.saveState();
        this.events.publish('change', name, this.state[name]);
    };
    SettingsService.prototype.set = function (name, value) {
        if (!this.state.hasOwnProperty(name)) {
            console.warn("SettingsService#set: Unknown property ", name);
            return;
        }
        if (this.myState[name] === value) {
            return;
        }
        this.state[name] = value;
        this.saveState();
        this.events.publish('change', name, value);
    };
    SettingsService.prototype.get = function (name) {
        if (this.state.hasOwnProperty(name)) {
            return this.state[name];
        }
        else {
            return null;
        }
    };
    SettingsService.prototype.toast = function (message, result, duration) {
        if (typeof (result) !== undefined) {
            message = message.replace("\{result\}", result);
        }
        this.toastCtrl.create({
            message: message,
            duration: duration || 3000
        }).present();
    };
    SettingsService.prototype.confirm = function (title, message, callback) {
        var alert = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [{
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        alert.dismiss();
                    }
                }, {
                    text: 'Confirm',
                    handler: callback
                }]
        });
        alert.present();
    };
    /**
    * Subscribe to BGService events
    */
    SettingsService.prototype.on = function (event, callback) {
        this.events.subscribe(event, callback);
    };
    SettingsService.prototype.loadState = function () {
        var _this = this;
        this.state = JSON.parse(this.storage.getItem('settings'));
        var invalid = false;
        SETTINGS.forEach(function (setting) {
            if (!_this.state.hasOwnProperty(setting.name)) {
                _this.state[setting.name] = setting.defaultValue;
                invalid = true;
            }
        });
        if (!invalid) {
            this.saveState();
        }
        this.myState = Object.assign({}, this.state);
    };
    SettingsService.prototype.saveState = function () {
        this.storage.setItem('settings', JSON.stringify(this.state, null));
        this.myState = Object.assign({}, this.state);
    };
    return SettingsService;
}());
SettingsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* Events */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* ToastController */]])
], SettingsService);

//# sourceMappingURL=SettingsService.js.map

/***/ }),

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__geofence_geofence__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_BGService__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_SettingsService__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_LongPress__ = __webpack_require__(268);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// Colors
var COLORS = {
    gold: '#fedd1e',
    white: "#fff",
    blue: "#2677FF",
    light_blue: "#3366cc",
    polyline_color: "#00B3FD",
    green: "#16BE42",
    dark_purple: "#2A0A73",
    grey: "#404040",
    red: "#FE381E",
    dark_red: "#A71300",
    black: "#000"
};
// Icons
var ICON_MAP = {
    activity_unknown: "help-circle",
    activity_still: "body",
    activity_shaking: "walk",
    activity_on_foot: "walk",
    activity_walking: "walk",
    activity_running: "walk",
    activity_on_bicycle: "bicycle",
    activity_in_vehicle: "car",
    pace_true: "pause",
    pace_false: "play",
    provider_network: "wifi",
    provider_gps: "locate",
    provider_disabled: "warning"
};
// Messages
var MESSAGE = {
    reset_odometer_success: 'Reset odometer success',
    reset_odometer_failure: 'Failed to reset odometer: {result}',
    sync_success: 'Sync success ({result} records)',
    sync_failure: 'Sync error: {result}',
    destroy_locations_success: 'Destroy locations success ({result} records)',
    destroy_locations_failure: 'Destroy locations error: {result}',
    removing_markers: 'Removing markers...',
    rendering_markers: 'Rendering markers...'
};
var HomePage = (function () {
    function HomePage(platform, bgService, settingsService, zone, loadingCtrl, modalController) {
        this.platform = platform;
        this.bgService = bgService;
        this.settingsService = settingsService;
        this.zone = zone;
        this.loadingCtrl = loadingCtrl;
        this.modalController = modalController;
        this.bgService.on('change', this.onBackgroundGeolocationSettingsChanged.bind(this));
        this.bgService.on('start', this.onBackgroundGeolocationStarted.bind(this));
        this.settingsService.on('change', this.onSettingsChanged.bind(this));
        this.isMainMenuOpen = false;
        this.isMapMenuOpen = false;
        this.isSyncing = false;
        this.isResettingOdometer = false;
        this.iconMap = ICON_MAP;
        this.geofenceHits = [];
        // Initial state
        this.state = {
            enabled: false,
            isMoving: false,
            geofenceProximityRadius: 1000,
            trackingMode: 'location',
            paceIcon: this.iconMap['pace_false'],
            isChangingPace: false,
            activityIcon: this.iconMap['activity_unknown'],
            odometer: 0,
            provider: {
                gps: true,
                network: true,
                enabled: true,
                status: -1
            }
        };
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.configureMap();
            _this.configureBackgroundGeolocation();
        });
    };
    /**
    * Configure Google Maps
    */
    HomePage.prototype.configureMap = function () {
        this.locationMarkers = [];
        this.geofenceMarkers = [];
        this.geofenceHitMarkers = [];
        var latLng = new google.maps.LatLng(-34.9290, 138.6010);
        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            zoomControl: false,
            mapTypeControl: false,
            panControl: false,
            rotateControl: false,
            scaleControl: false,
            streetViewControl: false,
            disableDefaultUI: true
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        // Create LongPress event-handler
        new __WEBPACK_IMPORTED_MODULE_6__lib_LongPress__["a" /* LongPress */](this.map, 500);
        // Tap&hold detected.  Play a sound a draw a circular cursor.
        google.maps.event.addListener(this.map, 'longpresshold', this.onLongPressStart.bind(this));
        // Longpress cancelled.  Get rid of the circle cursor.
        google.maps.event.addListener(this.map, 'longpresscancel', this.onLongPressCancel.bind(this));
        // Longpress initiated, add the geofence
        google.maps.event.addListener(this.map, 'longpress', this.onLongPress.bind(this));
        // Blue current location marker
        this.currentLocationMarker = new google.maps.Marker({
            zIndex: 10,
            map: this.map,
            title: 'Current Location',
            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 12,
                fillColor: COLORS.blue,
                fillOpacity: 1,
                strokeColor: COLORS.white,
                strokeOpacity: 1,
                strokeWeight: 6
            }
        });
        // Light blue location accuracy circle
        this.locationAccuracyCircle = new google.maps.Circle({
            map: this.map,
            zIndex: 9,
            fillColor: COLORS.light_blue,
            fillOpacity: 0.4,
            strokeOpacity: 0
        });
        // Stationary Geofence
        this.stationaryRadiusCircle = new google.maps.Circle({
            zIndex: 0,
            fillColor: COLORS.red,
            strokeColor: COLORS.red,
            strokeWeight: 1,
            fillOpacity: 0.3,
            strokeOpacity: 0.7,
            map: this.map
        });
        // Route polyline
        // Route polyline
        var seq = {
            repeat: '30px',
            icon: {
                path: google.maps.SymbolPath.FORWARD_OPEN_ARROW,
                scale: 1,
                fillOpacity: 0,
                strokeColor: COLORS.white,
                strokeWeight: 1,
                strokeOpacity: 1
            }
        };
        this.polyline = new google.maps.Polyline({
            map: (this.settingsService.state.mapHidePolyline) ? null : this.map,
            zIndex: 1,
            geodesic: true,
            strokeColor: COLORS.polyline_color,
            strokeOpacity: 0.7,
            strokeWeight: 7,
            icons: [seq]
        });
        // Popup geofence cursor for adding geofences via LongPress
        this.geofenceCursor = new google.maps.Marker({
            clickable: false,
            zIndex: 100,
            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 100,
                fillColor: COLORS.green,
                fillOpacity: 0.2,
                strokeColor: COLORS.green,
                strokeWeight: 1,
                strokeOpacity: 0.7
            }
        });
    };
    /**
    * Configure BackgroundGeolocation plugin
    */
    HomePage.prototype.configureBackgroundGeolocation = function () {
        var _this = this;
        var bgGeo = this.bgService.getPlugin();
        // Listen to events
        this.onLocation = this.onLocation.bind(this);
        this.onLocationError = this.onLocationError.bind(this);
        this.onMotionChange = this.onMotionChange.bind(this);
        this.onHeartbeat = this.onHeartbeat.bind(this);
        this.onGeofence = this.onGeofence.bind(this);
        this.onActivityChange = this.onActivityChange.bind(this);
        this.onProviderChange = this.onProviderChange.bind(this);
        this.onGeofencesChange = this.onGeofencesChange.bind(this);
        this.onSchedule = this.onSchedule.bind(this);
        this.onHttpSuccess = this.onHttpSuccess.bind(this);
        this.onHttpFailure = this.onHttpFailure.bind(this);
        bgGeo.on('location', this.onLocation, this.onLocationError);
        bgGeo.on('motionchange', this.onMotionChange);
        bgGeo.on('heartbeat', this.onHeartbeat);
        bgGeo.on('geofence', this.onGeofence);
        bgGeo.on('activitychange', this.onActivityChange);
        bgGeo.on('providerchange', this.onProviderChange);
        bgGeo.on('geofenceschange', this.onGeofencesChange);
        bgGeo.on('schedule', this.onSchedule);
        bgGeo.on('http', this.onHttpSuccess, this.onHttpFailure);
        // Fetch current settings from BGService
        this.bgService.getState(function (config) {
            config.schedule = [];
            config.notificationLargeIcon = 'drawable/notification_large_icon';
            config.httpHeaders = { "Content-Type": "application/x-www-form-urlencoded" };

            bgGeo.configure(config, function (state) {
                _this.zone.run(function () {
                    _this.state.enabled = config.enabled;
                    _this.state.isMoving = config.isMoving;
                    _this.state.geofenceProximityRadius = config.geofenceProximityRadius;
                    _this.state.trackingMode = (state.trackingMode === 1 || state.trackingMode === 'location') ? 'location' : 'geofence';
                    _this.state.paceIcon = _this.iconMap['pace_' + config.isMoving];
                });
                if (state.schedule.length > 0) {
                    bgGeo.startSchedule();
                }
                console.log('[js] Confgure success');
            });
        });
    };
    ////
    // UI event handlers
    //
    HomePage.prototype.onClickMainMenu = function () {
        this.isMainMenuOpen = !this.isMainMenuOpen;
        if (this.isMainMenuOpen) {
            this.bgService.playSound('OPEN');
        }
        else {
            this.bgService.playSound('CLOSE');
        }
    };
    HomePage.prototype.onClickSettings = function () {
        this.bgService.playSound('OPEN');
        var modal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_2__settings_settings__["a" /* SettingsPage */], {});
        modal.present();
    };
    HomePage.prototype.onClickSync = function () {
        var _this = this;
        this.bgService.playSound('BUTTON_CLICK');
        function onComplete(message, result) {
            var _this = this;
            this.settingsService.toast(message, result);
            this.zone.run(function () { _this.isSyncing = false; });
        }
        ;
        var bgGeo = this.bgService.getPlugin();
        bgGeo.getCount(function (count) {
            var message = 'Sync ' + count + ' location' + ((count > 1) ? 's' : '') + '?';
            _this.settingsService.confirm('Confirm Sync', message, function () {
                _this.isSyncing = true;
                bgGeo.sync(function (rs, taskId) {
                    _this.bgService.playSound('MESSAGE_SENT');
                    bgGeo.finish(taskId);
                    onComplete.call(_this, MESSAGE.sync_success, count);
                }, function (error) {
                    onComplete.call(_this, MESSAGE.sync_failure, error);
                });
            });
        });
    };
    HomePage.prototype.onClickDestroyLocations = function () {
        var _this = this;
        this.bgService.playSound('BUTTON_CLICK');
        var zone = this.zone;
        var settingsService = this.settingsService;
        function onComplete(message, result) {
            var _this = this;
            settingsService.toast(message, result);
            zone.run(function () { _this.isDestroyingLocations = false; });
        }
        ;
        var bgGeo = this.bgService.getPlugin();
        bgGeo.getCount(function (count) {
            if (!count) {
                _this.settingsService.toast('Locations database is empty');
                return;
            }
            // Confirm destroy
            var message = 'Destroy ' + count + ' location' + ((count > 1) ? 's' : '') + '?';
            _this.settingsService.confirm('Confirm Delete', message, function () {
                // Good to go...
                _this.isDestroyingLocations = true;
                bgGeo.destroyLocations(function (res) {
                    onComplete.call(_this, MESSAGE.destroy_locations_success, count);
                }, function (error) {
                    onComplete.call(this, MESSAGE.destroy_locations_failure, error);
                });
            });
        });
    };
    HomePage.prototype.onClickEmailLogs = function () {
        this.bgService.playSound('BUTTON_CLICK');
        var storage = window.localStorage;
        var email = storage.getItem('settings:email');
        if (!email) {
            this.settingsService.toast('Please enter an email address in the Settings screen');
            return;
        }
        var bgGeo = this.bgService.getPlugin();
        bgGeo.emailLog(email, function () {
            bgGeo.destroyLog();
        });
    };
    HomePage.prototype.onClickResetOdometer = function () {
        var _this = this;
        this.state.odometer = '0.0';
        this.bgService.playSound('BUTTON_CLICK');
        var bgGeo = this.bgService.getPlugin();
        this.isResettingOdometer = true;
        this.resetMarkers();
        var zone = this.zone;
        var settingsService = this.settingsService;
        function onComplete(message, result) {
            var _this = this;
            settingsService.toast(message, result);
            zone.run(function () { _this.isResettingOdometer = false; });
        }
        ;
        bgGeo.resetOdometer(function (location) {
            onComplete.call(_this, MESSAGE.reset_odometer_success);
        }, function (error) {
            onComplete.call(_this, MESSAGE.reset_odometer_failure, error);
        });
    };
    HomePage.prototype.onClickMapMenu = function () {
        this.isMapMenuOpen = !this.isMapMenuOpen;
        var soundId = (this.isMapMenuOpen) ? 'OPEN' : 'CLOSE';
        this.bgService.playSound(soundId);
    };
    HomePage.prototype.onSelectMapOption = function (name) {
        this.bgService.playSound('BUTTON_CLICK');
        this.settingsService.state[name] = !this.settingsService.state[name];
        this.settingsService.set(name, this.settingsService.state[name]);
    };
    HomePage.prototype.onToggleEnabled = function () {
        this.bgService.playSound('BUTTON_CLICK');
        var bgGeo = this.bgService.getPlugin();
        if (this.state.enabled) {
            if (this.bgService.isLocationTrackingMode()) {
                bgGeo.start(function () {
                    console.warn('[js] START SUCCESS');
                }, function (error) {
                    console.error('[js] START FAILURE: ', error);
                });
            }
            else {
                bgGeo.startGeofences();
            }
        }
        else {
            this.state.paceIcon = this.iconMap['pace_false'];
            this.state.isMoving = false;
            bgGeo.stop();
            this.clearMarkers();
        }
    };
    HomePage.prototype.onClickGetCurrentPosition = function () {
        this.bgService.playSound('BUTTON_CLICK');
        var bgGeo = this.bgService.getPlugin();
        bgGeo.getCurrentPosition(function (location, taskId) {
            console.log('- getCurrentPosition sample: ', location.sample, location.uuid);
            console.log('[js] getCurrentPosition: ', location);
            bgGeo.finish(taskId);
        }, function (error) {
            console.warn('[js] getCurrentPosition FAILURE: ', error);
        }, {
            maximumAge: 1000,
            desiredAccuracy: 10
        });
    };
    HomePage.prototype.onClickChangePace = function () {
        var _this = this;
        if (!this.state.enabled) {
            return;
        }
        var zone = this.zone;
        function onComplete() {
            var _this = this;
            zone.run(function () { _this.isChangingPace = false; });
        }
        this.bgService.playSound('BUTTON_CLICK');
        var bgGeo = this.bgService.getPlugin();
        this.state.isChangingPace = true;
        this.state.isMoving = !this.state.isMoving;
        this.state.paceIcon = this.iconMap['pace_' + this.state.isMoving];
        bgGeo.changePace(this.state.isMoving, function () {
            onComplete.call(_this);
        }, function (error) {
            onComplete.call(_this);
            alert('Failed to changePace');
        });
    };
    ////
    // Map events
    //
    HomePage.prototype.onLongPressStart = function (e) {
        this.bgService.playSound('LONG_PRESS_ACTIVATE');
        this.geofenceCursor.setPosition(e.latLng);
        this.geofenceCursor.setMap(this.map);
    };
    HomePage.prototype.onLongPressCancel = function (e) {
        this.bgService.playSound('LONG_PRESS_CANCEL');
        this.geofenceCursor.setMap(null);
    };
    HomePage.prototype.onLongPress = function (e) {
        var latlng = e.latLng;
        this.geofenceCursor.setMap(null);
        var modal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_3__geofence_geofence__["a" /* GeofencePage */], {
            latitude: latlng.lat(),
            longitude: latlng.lng()
        });
        modal.present();
    };
    ////
    // SettingsService listeners
    //
    HomePage.prototype.onSettingsChanged = function (name, value) {
        var map = null;
        switch (name) {
            case 'mapHideMarkers':
                var loader = this.loadingCtrl.create({
                    content: (value) ? MESSAGE.removing_markers : MESSAGE.rendering_markers
                });
                loader.present();
                map = (value === true) ? null : this.map;
                this.locationMarkers.forEach(function (marker) {
                    marker.setMap(map);
                });
                loader.dismiss();
                this.settingsService.toast((value) ? 'Hide location markers' : 'Show location markers', null, 1000);
                break;
            case 'mapHidePolyline':
                map = (value === true) ? null : this.map;
                this.polyline.setMap(map);
                this.settingsService.toast((value) ? 'Hide  polyline' : 'Show polyline', null, 1000);
                break;
            case 'mapShowGeofenceHits':
                map = (value === true) ? this.map : null;
                this.geofenceHitMarkers.forEach(function (marker) {
                    marker.setMap(map);
                });
                this.settingsService.toast((value) ? 'Show geofence hits' : 'Hide geofence hits', null, 1000);
                break;
        }
    };
    ////
    // BgService listeners
    //
    HomePage.prototype.onBackgroundGeolocationSettingsChanged = function (name, value) {
        console.log('Home settingschanged: ', name, value);
        switch (name) {
            case 'geofenceProximityRadius':
                this.state.geofenceProximityRadius = value;
                this.stationaryRadiusCircle.setRadius(value / 2);
                break;
        }
    };
    HomePage.prototype.onBackgroundGeolocationStarted = function (trackingMode, state) {
        var _this = this;
        this.zone.run(function () {
            _this.state.enabled = state.enabled;
            _this.state.isMoving = state.isMoving;
        });
    };
    ////
    // Background Geolocation event-listeners
    //
    HomePage.prototype.onLocation = function (location, taskId) {
        var _this = this;
        console.log('[js] location: ', location);
        var bgGeo = this.bgService.getPlugin();
        this.setCenter(location);
        if (!location.sample) {
            this.zone.run(function () {
                // Convert meters -> km -> round nearest hundredth -> fix float xxx.x
                _this.state.odometer = parseFloat((Math.round((location.odometer / 1000) * 10) / 10).toString()).toFixed(1);
            });
        }
        bgGeo.finish(taskId);
    };
    HomePage.prototype.onLocationError = function (error) {
        console.warn('[js] location error: ', error);
    };
    HomePage.prototype.onMotionChange = function (isMoving, location, taskId) {
        var _this = this;
        console.log('[js] motionchange: ', isMoving, location);
        var bgGeo = this.bgService.getPlugin();
        if (isMoving) {
            this.hideStationaryCircle();
        }
        else {
            this.showStationaryCircle(location);
        }
        this.zone.run(function () {
            _this.state.paceIcon = _this.iconMap['pace_' + isMoving];
            _this.state.isChangingPace = false;
            _this.state.isMoving = isMoving;
        });
        bgGeo.finish(taskId);
    };
    HomePage.prototype.onHeartbeat = function (event) {
        console.log('[js] heartbeat', event);
    };
    HomePage.prototype.onActivityChange = function (event) {
        var _this = this;
        this.zone.run(function () {
            _this.state.activityName = event.activity;
            _this.state.activityIcon = _this.iconMap['activity_' + event.activity];
        });
        console.log('[js] activitychange: ', event.activity, event.confidence);
    };
    HomePage.prototype.onProviderChange = function (provider) {
        var _this = this;
        this.zone.run(function () { _this.state.provider = provider; });
        console.log('[js] providerchange: ', provider);
    };
    HomePage.prototype.onGeofencesChange = function (event) {
        var _this = this;
        console.log('[js] geofenceschange: ', event);
        // All geofences off
        if (!event.on.length && !event.off.length) {
            this.geofenceMarkers.forEach(function (circle) {
                circle.setMap(null);
            });
            this.geofenceMarkers = [];
            return;
        }
        // Filter out all "off" geofences.
        this.geofenceMarkers = this.geofenceMarkers.filter(function (circle) {
            if (event.off.indexOf(circle.identifier) < 0) {
                return true;
            }
            else {
                circle.setMap(null);
                return false;
            }
        });
        // Add new "on" geofences.
        event.on.forEach(function (geofence) {
            var circle = _this.geofenceMarkers.find(function (marker) { return marker.identifier === geofence.identifier; });
            // Already added?
            if (circle) {
                return;
            }
            _this.geofenceMarkers.push(_this.buildGeofenceMarker(geofence));
        });
    };
    HomePage.prototype.onGeofence = function (event) {
        console.log('[js] geofence: ', event);
        // DEBUG:
        // Stop tracking on ENTER
        // Start tracking on EXIT
        /*
        if (event.action === 'EXIT') {
          this.bgService.getPlugin().start();
        } else if (event.action === 'ENTER') {
          this.bgService.getPlugin().startGeofences();
        }
        */
        var circle = this.geofenceMarkers.find(function (marker) {
            return marker.identifier === event.identifier;
        });
        if (!circle) {
            return;
        }
        var map = (this.settingsService.state.mapShowGeofenceHits) ? this.map : null;
        var location = event.location;
        var geofence = this.geofenceHits[event.identifier];
        if (!geofence) {
            geofence = {
                circle: new google.maps.Circle({
                    zIndex: 100,
                    fillOpacity: 0,
                    strokeColor: COLORS.black,
                    strokeWeight: 1,
                    strokeOpacity: 1,
                    radius: circle.getRadius() + 1,
                    center: circle.getCenter(),
                    map: map
                }),
                events: []
            };
            this.geofenceHits[event.identifier] = geofence;
            this.geofenceHitMarkers.push(geofence.circle);
        }
        var color;
        if (event.action === 'ENTER') {
            color = COLORS.green;
        }
        else if (event.action === 'DWELL') {
            color = COLORS.gold;
        }
        else {
            color = COLORS.red;
        }
        var circleLatLng = geofence.circle.getCenter();
        var locationLatLng = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);
        var distance = google.maps.geometry.spherical.computeDistanceBetween(circleLatLng, locationLatLng);
        // Push event
        geofence.events.push({
            action: event.action,
            location: event.location,
            distance: distance
        });
        var heading = google.maps.geometry.spherical.computeHeading(circleLatLng, locationLatLng);
        var circleEdgeLatLng = google.maps.geometry.spherical.computeOffset(circleLatLng, geofence.circle.getRadius(), heading);
        geofence.events.push({
            location: event.location,
            action: event.action,
            distance: distance
        });
        var geofenceEdgeMarker = new google.maps.Marker({
            zIndex: 1000,
            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 5,
                fillColor: color,
                fillOpacity: 0.7,
                strokeColor: COLORS.black,
                strokeWeight: 1,
                strokeOpacity: 1
            },
            map: map,
            position: circleEdgeLatLng
        });
        this.geofenceHitMarkers.push(geofenceEdgeMarker);
        var locationMarker = this.buildLocationMarker(location, {
            showHeading: true
        });
        locationMarker.setMap(map);
        this.geofenceHitMarkers.push(locationMarker);
        var polyline = new google.maps.Polyline({
            map: map,
            zIndex: 1000,
            geodesic: true,
            strokeColor: COLORS.black,
            strokeOpacity: 1,
            strokeWeight: 1,
            path: [circleEdgeLatLng, locationMarker.getPosition()]
        });
        this.geofenceHitMarkers.push(polyline);
        // Change the color of activated geofence to light-grey.
        circle.activated = true;
        circle.setOptions({
            fillColor: COLORS.grey,
            fillOpacity: 0.2,
            strokeColor: COLORS.grey,
            strokeOpacity: 0.4
        });
    };
    HomePage.prototype.onHttpSuccess = function (response) {
        console.log('[js] http success: ', response);
    };
    HomePage.prototype.onSchedule = function (event) {
        console.log('[js] schedule: ', event);
    };
    HomePage.prototype.onHttpFailure = function (response) {
        console.log('[js] http FAILURE: ', response);
    };
    HomePage.prototype.setCenter = function (location) {
        this.updateCurrentLocationMarker(location);
        setTimeout(function () {
            this.map.setCenter(new google.maps.LatLng(location.coords.latitude, location.coords.longitude));
        }.bind(this));
    };
    HomePage.prototype.updateCurrentLocationMarker = function (location) {
        var latlng = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);
        this.currentLocationMarker.setPosition(latlng);
        this.locationAccuracyCircle.setCenter(latlng);
        this.locationAccuracyCircle.setRadius(location.coords.accuracy);
        if (location.sample === true) {
            return;
        }
        if (this.lastLocation) {
            this.locationMarkers.push(this.buildLocationMarker(location));
        }
        // Add breadcrumb to current Polyline path.
        this.polyline.getPath().push(latlng);
        if (!this.settingsService.state.mapHidePolyline) {
            this.polyline.setMap(this.map);
        }
        this.lastLocation = location;
    };
    // Build a bread-crumb location marker.
    HomePage.prototype.buildLocationMarker = function (location, options) {
        options = options || {};
        var icon = google.maps.SymbolPath.CIRCLE;
        var scale = 3;
        var zIndex = 1;
        var anchor;
        var strokeWeight = 1;
        if (!this.lastDirectionChangeLocation) {
            this.lastDirectionChangeLocation = location;
        }
        // Render an arrow marker if heading changes by 10 degrees or every 5 points.
        var deltaHeading = Math.abs(location.coords.heading - this.lastDirectionChangeLocation.coords.heading);
        if ((deltaHeading >= 15) || !(this.locationMarkers.length % 5) || options.showHeading) {
            icon = google.maps.SymbolPath.FORWARD_CLOSED_ARROW;
            scale = 2;
            strokeWeight = 1;
            anchor = new google.maps.Point(0, 2.6);
            this.lastDirectionChangeLocation = location;
        }
        return new google.maps.Marker({
            zIndex: zIndex,
            icon: {
                path: icon,
                rotation: location.coords.heading,
                scale: scale,
                anchor: anchor,
                fillColor: COLORS.polyline_color,
                fillOpacity: 1,
                strokeColor: COLORS.black,
                strokeWeight: strokeWeight,
                strokeOpacity: 1
            },
            map: (!this.settingsService.state.mapHideMarkers) ? this.map : null,
            position: new google.maps.LatLng(location.coords.latitude, location.coords.longitude)
        });
    };
    HomePage.prototype.buildGeofenceMarker = function (params) {
        var _this = this;
        // Add longpress event for adding GeoFence of hard-coded radius 200m.
        var geofence = new google.maps.Circle({
            identifier: params.identifier,
            zIndex: 100,
            fillColor: COLORS.green,
            fillOpacity: 0.2,
            strokeColor: COLORS.green,
            strokeWeight: 1,
            strokeOpacity: 0.7,
            params: params,
            radius: parseInt(params.radius, 10),
            center: new google.maps.LatLng(params.latitude, params.longitude),
            map: this.map
        });
        // Add 'click' listener to geofence so we can edit it.
        google.maps.event.addListener(geofence, 'click', function () {
            _this.settingsService.toast('Click geofence ' + geofence.identifier, null, 1000);
        });
        return geofence;
    };
    HomePage.prototype.buildStopZoneMarker = function (latlng) {
        return new google.maps.Marker({
            zIndex: 1,
            map: this.map,
            position: latlng,
            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 12,
                fillColor: COLORS.red,
                fillOpacity: 0.3,
                strokeColor: COLORS.red,
                strokeWeight: 1,
                strokeOpacity: 0.7
            }
        });
    };
    HomePage.prototype.showStationaryCircle = function (location) {
        var coords = location.coords;
        var radius = this.bgService.isLocationTrackingMode() ? 200 : (this.state.geofenceProximityRadius / 2);
        var center = new google.maps.LatLng(coords.latitude, coords.longitude);
        this.stationaryRadiusCircle.setRadius(radius);
        this.stationaryRadiusCircle.setCenter(center);
        this.stationaryRadiusCircle.setMap(this.map);
        this.map.setCenter(center);
    };
    HomePage.prototype.hideStationaryCircle = function () {
        // Create a little red breadcrumb circle of our last stop-position
        var latlng = this.stationaryRadiusCircle.getCenter();
        var stopZone = this.buildStopZoneMarker(latlng);
        var lastMarker = this.locationMarkers.pop();
        if (lastMarker) {
            lastMarker.setMap(null);
        }
        this.locationMarkers.push(stopZone);
        this.stationaryRadiusCircle.setMap(null);
    };
    HomePage.prototype.resetMarkers = function () {
        // Clear location-markers.
        this.locationMarkers.forEach(function (marker) {
            marker.setMap(null);
        });
        this.locationMarkers = [];
        // Clear geofence hit markers
        this.geofenceHitMarkers.forEach(function (marker) {
            marker.setMap(null);
        });
        this.polyline.setPath([]);
    };
    HomePage.prototype.clearMarkers = function () {
        this.resetMarkers();
        this.geofenceMarkers.forEach(function (marker) {
            marker.setMap(null);
        });
        this.geofenceMarkers = [];
        // Clear red stationaryRadius marker
        this.stationaryRadiusCircle.setMap(null);
        // Clear blue route PolyLine
        this.polyline.setMap(null);
        this.polyline.setPath([]);
    };
    HomePage.prototype.alert = function (title, message) {
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], HomePage.prototype, "mapElement", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\android_hieu10\SampleApp\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="gold" mode="ios">\n\n  	<ion-buttons start>\n\n  		<!-- <button ion-button (click)="onClickSettings()" style="font-size:2.3rem"><ion-icon name="arrow-dropup-circle"></ion-icon></button>-->\n\n  	</ion-buttons>\n\n    <ion-title mode="ios">\n\n      BG Geo\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <ion-toggle [(ngModel)]="state.enabled" (ionChange)="onToggleEnabled()" color="secondary" style="display:block;"></ion-toggle>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n	<ion-fab top left edge #fab>\n\n   		<button ion-fab color="gold" (click)="onClickMainMenu()">\n\n        <ion-icon color="dark" name="arrow-dropdown-circle"></ion-icon>\n\n      </button>\n\n   		<ion-fab-list side="bottom">\n\n     		<button ion-fab (click)="onClickSettings()" color="gold">\n\n     			<ion-icon name="cog"></ion-icon>\n\n     		</button>\n\n     		<button ion-fab (click)="onClickResetOdometer()" color="gold">\n\n     			<ion-spinner [hidden]="!isResettingOdometer" name="circles" color="dark"></ion-spinner>\n\n     			<ion-icon [hidden]="isResettingOdometer" name="speedometer"></ion-icon>\n\n     		</button>\n\n     		<button ion-fab (click)="onClickEmailLogs()" color="gold">\n\n     			<ion-icon name="mail"></ion-icon>\n\n     		</button>\n\n        <button ion-fab (click)="onClickSync()" color="gold">\n\n          <ion-spinner [hidden]="!isSyncing" name="circles" color="dark"></ion-spinner>\n\n          <ion-icon [hidden]="isSyncing" name="cloud-upload"></ion-icon>\n\n        </button>\n\n        <button ion-fab (click)="onClickDestroyLocations()" color="gold">\n\n          <ion-spinner [hidden]="!isDestroyingLocation" name="circles" color="dark"></ion-spinner>\n\n          <ion-icon [hidden]="isDestroyingLocations" name="trash"></ion-icon>\n\n        </button>\n\n   		</ion-fab-list>\n\n 	</ion-fab>\n\n\n\n  <ion-fab top right>\n\n  <button ion-fab mini (click)="onClickMapMenu()" color="light"><ion-icon name="map"></ion-icon></button>\n\n  <ion-fab-list side="left">\n\n    <button ion-fab (click)="onSelectMapOption(\'mapHideMarkers\')" color="{{settingsService.state.mapHideMarkers ? \'light\' : \'gold\'}}">\n\n      <ion-icon name="pin" color="{{settingsService.state.mapHideMarkers ? \'dark-grey\' : \'black\'}}"></ion-icon>\n\n    </button>\n\n    <button ion-fab (click)="onSelectMapOption(\'mapHidePolyline\')" color="{{settingsService.state.mapHidePolyline ? \'light\' : \'gold\'}}">\n\n      <ion-icon name="pulse" color="{{settingsService.state.mapHidePolyline ? \'dark-grey\' : \'black\'}}"></ion-icon>\n\n    </button>\n\n    <button ion-fab (click)="onSelectMapOption(\'mapShowGeofenceHits\')" color="{{!settingsService.state.mapShowGeofenceHits ? \'light\' : \'gold\'}}">\n\n      <ion-icon name="radio-button-off" color="{{settingsService.state.mapShowGeofenceHits ? \'black\' : \'dark-grey\'}}"></ion-icon>\n\n    </button>\n\n  </ion-fab-list>\n\n</ion-fab>\n\n\n\n	<div #map id="map"></div>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n	<ion-toolbar mode="ios" color="gold">\n\n		<ion-buttons start>\n\n			<button ion-button solid (click)="onClickGetCurrentPosition()" color="gold" style="font-size:2.3rem">\n\n				<ion-icon name="md-navigate" color=""></ion-icon>\n\n			</button>\n\n			<ion-icon [hidden]="!state.provider.gps" name="{{iconMap.provider_gps}}" color="secondary"></ion-icon>\n\n			<ion-icon [hidden]="!state.provider.network"name="{{iconMap.provider_network}}" color="secondary"></ion-icon>\n\n			<ion-icon [hidden]="state.provider.enabled" name="{{iconMap.provider_disabled}}" color="danger"></ion-icon>\n\n		</ion-buttons>\n\n		<ion-title>\n\n			<span ion-text class="label" color="">Activity</span>&nbsp;\n\n			<ion-icon color="" name="{{state.activityIcon}}"></ion-icon>\n\n			<span ion-text class="odometer" color="">{{this.state.odometer}}km</span>\n\n		</ion-title>\n\n		<ion-buttons end>\n\n			<button ion-button solid [disabled]="!state.enabled" (click)="onClickChangePace()" style="width:50px" color="{{state.isMoving ? \'danger\' : \'secondary\'}}">\n\n				<ion-spinner [hidden]="!state.isChangingPace" name="dots" color="light"></ion-spinner>\n\n				<ion-icon [hidden]="state.isChangingPace" name="{{state.paceIcon}}"></ion-icon>\n\n			</button>\n\n		</ion-buttons>\n\n	</ion-toolbar>\n\n</ion-footer>\n\n\n\n'/*ion-inline-end:"C:\android_hieu10\SampleApp\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_4__lib_BGService__["a" /* BGService */],
        __WEBPACK_IMPORTED_MODULE_5__lib_SettingsService__["a" /* SettingsService */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_BGService__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_SettingsService__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_about__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TRACKING_MODE_OPTIONS = [
    'location',
    'geofence'
];
var LOG_LEVEL_OPTIONS = ['OFF', 'ERROR', 'WARNING', 'INFO', 'DEBUG', 'VERBOSE'];
var NOTIFICATION_PRIORITY_OPTIONS = ['DEFAULT', 'HIGH', 'LOW', 'MAX', 'MIN'];
var SettingsPage = (function () {
    function SettingsPage(bgService, settingsService, alertCtrl, viewCtrl, modalCtrl, loadingCtrl, zone) {
        var _this = this;
        this.bgService = bgService;
        this.settingsService = settingsService;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.zone = zone;
        this.isLoaded = false;
        this.loader = this.loadingCtrl.create({
            content: "Loading..."
        });
        // We do a BackgroundGeolocation#getState each time Settings screen is shown.
        this.trackingModeOptions = TRACKING_MODE_OPTIONS;
        this.logLevelOptions = LOG_LEVEL_OPTIONS;
        this.notificationPriorityOptions = NOTIFICATION_PRIORITY_OPTIONS;
        this.isSyncing = false;
        this.isAddingGeofences = false;
        this.isResettingOdometer = false;
        this.isDestroyingLog = false;
        var settings = this.bgService.getSettings();
        this.state = {};
        this.bgService.getState(function (state) {
            settings.forEach(function (setting) {
                _this.state[setting.name] = state[setting.name];
            });
            _this.state.trackingMode = (state.trackingMode === 1 || state.trackingMode === 'location') ? 'location' : 'geofence';
            _this.state.logLevel = _this.decodeLogLevel(state.logLevel);
            _this.state.notificationPriority = _this.decodeNotficationPriority(state.notificationPriority);
            if (_this.state.triggerActivities) {
                _this.state.triggerActivities = _this.decodeTriggerActivities(_this.state.triggerActivities);
            }
            // Hide the Loading...
            _this.isLoaded = true;
            _this.loader.dismiss();
        });
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        // Load email address for email log
        var storage = window.localStorage;
        var email = storage.getItem('settings:email');
        if (email) {
            this.email = email;
        }
    };
    SettingsPage.prototype.ionViewWillEnter = function () {
        if (!this.isLoaded) {
            this.loader.present();
        }
    };
    SettingsPage.prototype.onClickClose = function () {
        this.bgService.playSound("CLOSE");
        this.viewCtrl.dismiss();
    };
    SettingsPage.prototype.onClickAbout = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__about_about__["a" /* AboutPage */]).present();
    };
    SettingsPage.prototype.onChangeValue = function (name) {
        var value = this.state[name];
        console.info('onChangeValue: ', name, value);
        if (typeof (value) !== 'undefined') {
            switch (name) {
                case 'logLevel':
                    value = this.encodeLogLevel(value);
                    break;
                case 'notificationPriority':
                    value = this.encodeNotficationPriority(value);
                    break;
                case 'trackingMode':
                    this.setTrackingMode(value);
                    break;
                case 'geofenceProximityRadius':
                    this.bgService.playSound('ADD_GEOFENCE');
                    break;
                case 'triggerActivities':
                    value = this.encodeTriggerActivities(value);
                    break;
                case 'hideMarkers':
                    break;
                case 'hidePolyline':
                    break;
                case 'showGeofenceHits':
                    break;
            }
            this.bgService.set(name, value);
        }
    };
    SettingsPage.prototype.onChangeSetting = function (name) {
        var value = this.settings[name];
        this.settingsService.set(name, value);
    };
    SettingsPage.prototype.setTrackingMode = function (mode) {
        this.bgService.start(mode);
    };
    SettingsPage.prototype.onClickResetOdometer = function () {
        var _this = this;
        this.bgService.playSound('BUTTON_CLICK');
        var bgGeo = this.bgService.getPlugin();
        this.isResettingOdometer = true;
        var zone = this.zone;
        function onComplete() {
            var _this = this;
            zone.run(function () { _this.isResettingOdometer = false; });
        }
        bgGeo.resetOdometer(function (location) {
            onComplete.call(_this);
        }, function (error) {
            onComplete.call(_this);
            _this.notify('Reset odometer error', error);
        });
    };
    SettingsPage.prototype.onUpdateUrl = function () {
        this.onChangeValue('url');
    };
    SettingsPage.prototype.onClickSync = function () {
        var _this = this;
        this.bgService.playSound('BUTTON_CLICK');
        this.isSyncing = true;
        var bgGeo = this.bgService.getPlugin();
        var zone = this.zone;
        function onComplete() {
            var _this = this;
            zone.run(function () { _this.isSyncing = false; });
        }
        ;
        bgGeo.sync(function (rs, taskId) {
            _this.bgService.playSound('MESSAGE_SENT');
            onComplete.call(_this);
            bgGeo.finish(taskId);
        }, function (error) {
            onComplete.call(_this);
            _this.bgService.playSound('ERROR');
            _this.notify('Sync error', error);
        });
    };
    SettingsPage.prototype.onUpdateEmail = function () {
        this.bgService.playSound('BUTTON_CLICK');
        var storage = window.localStorage;
        storage.setItem('settings:email', this.email);
    };
    SettingsPage.prototype.onClickEmailLog = function () {
        var _this = this;
        this.bgService.playSound('BUTTON_CLICK');
        if (!this.email) {
            this.notify('Email logs', 'Please enter an email address');
            return;
        }
        this.isEmailingLog = true;
        var zone = this.zone;
        function onComplete() {
            var _this = this;
            zone.run(function () { _this.isEmailingLog = false; });
        }
        this.bgService.getPlugin().emailLog(this.email, function () {
            onComplete.call(_this);
        }, function (error) {
            onComplete.call(_this);
            _this.notify('Email error', error);
        });
    };
    SettingsPage.prototype.onClickDestroyLog = function () {
        var _this = this;
        this.settingsService.confirm('Confirm Destroy', 'Destroy Logs?', function () {
            _this.isDestroyingLog = true;
            _this.bgService.getPlugin().destroyLog(function () {
                _this.isDestroyingLog = false;
                _this.settingsService.toast('Destroyed logs');
            });
        });
    };
    SettingsPage.prototype.onClickRemoveGeofences = function () {
        var _this = this;
        this.bgService.playSound('BUTTON_CLICK');
        this.bgService.getPlugin().removeGeofences(function () {
            _this.bgService.playSound('MESSAGE_SENT');
        }, function (error) {
            _this.bgService.playSound('ERROR');
            _this.notify('Remove geofences error', error);
        });
    };
    SettingsPage.prototype.onClickLoadGeofences = function () {
        var _this = this;
        this.bgService.playSound('BUTTON_CLICK');
        this.isAddingGeofences = true;
        var bgGeo = this.bgService.getPlugin();
        var data = this.bgService.getCityDriveData();
        var geofences = [], latlng;
        for (var n = 0, len = data.length; n < len; n++) {
            latlng = data[n];
            geofences.push({
                identifier: 'city_drive_' + (n + 1),
                latitude: parseFloat(latlng.lat),
                longitude: parseFloat(latlng.lng),
                radius: this.settingsService.state.geofenceRadius,
                notifyOnEntry: this.settingsService.state.geofenceNotifyOnEntry,
                notifyOnExit: this.settingsService.state.geofenceNotifyOnExit,
                notifyOnDwell: this.settingsService.state.geofenceNotifyOnDwell,
                loiteringDelay: this.settingsService.state.geofenceLoiteringDelay,
                extras: { 'geofence_extra': 'foo' }
            });
        }
        var zone = this.zone;
        function onComplete() {
            var _this = this;
            zone.run(function () { _this.isAddingGeofences = false; });
        }
        ;
        bgGeo.addGeofences(geofences, function () {
            onComplete.call(_this);
            _this.bgService.playSound('ADD_GEOFENCE');
        }, function (error) {
            onComplete.call(_this);
            _this.bgService.playSound('ERROR');
            _this.notify('Add geofences error', error);
        });
    };
    SettingsPage.prototype.notify = function (title, message) {
        this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['Dismiss']
        }).present();
    };
    SettingsPage.prototype.decodeNotficationPriority = function (value) {
        switch (value) {
            case 0:
                value = 'DEFAULT';
                break;
            case 1:
                value = 'HIGH';
                break;
            case -1:
                value = 'LOW';
                break;
            case 2:
                value = 'MAX';
                break;
            case -2:
                value = 'MIN';
                break;
            default:
                value = 0;
        }
        return value;
    };
    SettingsPage.prototype.encodeNotficationPriority = function (value) {
        switch (value) {
            case 'DEFAULT':
                value = 0;
                break;
            case 'HIGH':
                value = 1;
                break;
            case 'LOW':
                value = -1;
                break;
            case 'MAX':
                value = 2;
                break;
            case 'MIN':
                value = -2;
                break;
        }
        return value;
    };
    SettingsPage.prototype.decodeLogLevel = function (value) {
        switch (value) {
            case 0:
                value = 'OFF';
                break;
            case 1:
                value = 'ERROR';
                break;
            case 2:
                value = 'WARNING';
                break;
            case 3:
                value = 'INFO';
                break;
            case 4:
                value = 'DEBUG';
                break;
            case 5:
                value = 'VERBOSE';
                break;
        }
        return value;
    };
    SettingsPage.prototype.encodeLogLevel = function (value) {
        switch (value) {
            case 'OFF':
                value = 0;
                break;
            case 'ERROR':
                value = 1;
                break;
            case 'WARNING':
                value = 2;
                break;
            case 'INFO':
                value = 3;
                break;
            case 'DEBUG':
                value = 4;
                break;
            case 'VERBOSE':
                value = 5;
            default:
                value = 5;
        }
        return value;
    };
    SettingsPage.prototype.decodeTriggerActivities = function (value) {
        return value.split(',');
    };
    SettingsPage.prototype.encodeTriggerActivities = function (value) {
        return value.join(',');
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-settings',template:/*ion-inline-start:"C:\android_hieu10\SampleApp\src\pages\settings\settings.html"*/'\n\n<ion-header>\n\n <ion-navbar color="gold" mode="ios">\n\n 	<ion-buttons start>\n\n 		<button ion-button (click)="onClickClose()" style="font-size:2.3rem"><ion-icon name="arrow-dropdown-circle"></ion-icon></button>\n\n 	</ion-buttons>\n\n 	<ion-title>Settings</ion-title>\n\n	<ion-buttons end>\n\n    	<button outline ion-button (click)="onClickAbout()" ion-text color="dark">\n\n    		About\n\n    	</button>\n\n    </ion-buttons>\n\n </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n	<ion-list>\n\n		<ion-list-header mode="ios"><ion-icon name="navigate" color="primary"></ion-icon>&nbsp;Geolocation</ion-list-header>\n\n		<ion-card mode="ios">\n\n			<button ion-button full round [disabled]="isResettingOdometer" (click)="onClickResetOdometer()" ion-text color="default">Reset Odometer</button>\n\n		</ion-card>\n\n	  	<ion-item>\n\n	    	<ion-label color="primary">trackingMode</ion-label>\n\n	    	<ion-select [(ngModel)]="state.trackingMode" (ionChange)="onChangeValue(\'trackingMode\')" multiple="false">\n\n	    		<ion-option *ngFor="let option of trackingModeOptions" value="{{option}}" selected="{{option == state.trackingMode}}">\n\n	    			{{option}}\n\n	    		</ion-option>\n\n	    	</ion-select>\n\n	  	</ion-item>\n\n\n\n	  	<ion-item *ngFor="let setting of bgService.getPlatformSettings(\'geolocation\')">\n\n	  		<ion-label color="primary">{{setting.name}}</ion-label><span>foo</span>\n\n	  		<ion-toggle *ngIf="setting.inputType == \'toggle\'" [(ngModel)]="state[setting.name]" (ionChange)="onChangeValue(setting.name)" color="secondary"></ion-toggle>\n\n	  		<ion-select *ngIf="setting.inputType == \'select\'" [(ngModel)]="state[setting.name]" (ionChange)="onChangeValue(setting.name)" multiple="false">\n\n	    		<ion-option *ngFor="let option of bgService.getOptionsForSetting(setting.name)" value="{{option}}" selected="option == state[setting.name">\n\n	    			{{option}}\n\n	    		</ion-option>\n\n	    	</ion-select>\n\n	  	</ion-item>\n\n\n\n	  	<ion-list-header mode="ios"><ion-icon name="walk" color="primary"></ion-icon>&nbsp;Activity Recognition</ion-list-header>\n\n\n\n	  	<ion-item *ngFor="let setting of bgService.getPlatformSettings(\'activity_recognition\')">\n\n	  		<ion-label color="primary">{{setting.name}}</ion-label>\n\n	  		<ion-toggle *ngIf="setting.inputType == \'toggle\'" [(ngModel)]="state[setting.name]" (ionChange)="onChangeValue(setting.name)" color="secondary"></ion-toggle>\n\n	  		<ion-select *ngIf="setting.inputType == \'select\'" [(ngModel)]="state[setting.name]" (ionChange)="onChangeValue(setting.name)" multiple="{{setting.multiple==true}}">\n\n	    		<ion-option *ngFor="let option of bgService.getOptionsForSetting(setting.name)" value="{{option}}" selected="option == state[setting.name">\n\n	    			{{option}}\n\n	    		</ion-option>\n\n	    	</ion-select>\n\n	  	</ion-item>\n\n\n\n	  	<ion-list-header mode="ios">\n\n	  		<ion-icon name="cloud-upload" color="primary"></ion-icon>&nbsp;HTTP &amp; Persistence\n\n	  	</ion-list-header>\n\n\n\n	  	<ion-card mode="ios">\n\n	  		<button ion-button full round [disabled]="isSyncing" (click)="onClickSync()" color="danger">\n\n	  			<ion-spinner [hidden]="!isSyncing" name="dots" color="light"></ion-spinner>\n\n	  			<span [hidden]="isSyncing">Sync</span>\n\n	  		</button>\n\n	  		<ion-item>\n\n	  			<ion-input [(ngModel)]="state.url" (blur)="onUpdateUrl()" type="url" placeholder="http://your.server.com/endpoint"></ion-input>\n\n	  		</ion-item>\n\n	  	</ion-card>\n\n\n\n	  	<ion-item *ngFor="let setting of bgService.getPlatformSettings(\'http\')">\n\n	  		<ion-label color="primary">{{setting.name}}</ion-label><span>foo</span>\n\n	  		<ion-toggle *ngIf="setting.inputType == \'toggle\'" [(ngModel)]="state[setting.name]" (ionChange)="onChangeValue(setting.name)" color="secondary"></ion-toggle>\n\n	  		<ion-select *ngIf="setting.inputType == \'select\'" [(ngModel)]="state[setting.name]" (ionChange)="onChangeValue(setting.name)" multiple="false">\n\n	    		<ion-option *ngFor="let option of bgService.getOptionsForSetting(setting.name)" value="{{option}}" selected="option == state[setting.name">\n\n	    			{{option}}\n\n	    		</ion-option>\n\n	    	</ion-select>\n\n	  	</ion-item>\n\n\n\n	  	<ion-list-header mode="ios">\n\n	  		<ion-icon name="cog" color="primary"></ion-icon>&nbsp;Application\n\n	  	</ion-list-header>\n\n\n\n	  	<ion-item *ngFor="let setting of bgService.getPlatformSettings(\'application\')">\n\n	  		<ion-label color="primary">{{setting.name}}</ion-label><span>foo</span>\n\n	  		<ion-toggle *ngIf="setting.inputType == \'toggle\'" [(ngModel)]="state[setting.name]" (ionChange)="onChangeValue(setting.name)" color="secondary"></ion-toggle>\n\n	  		<ion-select *ngIf="setting.inputType == \'select\'" [(ngModel)]="state[setting.name]" (ionChange)="onChangeValue(setting.name)" multiple="false">\n\n	    		<ion-option *ngFor="let option of bgService.getOptionsForSetting(setting.name)" value="{{option}}" selected="option == state[setting.name">\n\n	    			{{option}}\n\n	    		</ion-option>\n\n	    	</ion-select>\n\n	  	</ion-item>\n\n\n\n	  	<ion-item>\n\n	  		<ion-label color="primary">notificationPriority</ion-label>\n\n	 		<ion-select [(ngModel)]="state.notificationPriority" (ionChange)="onChangeValue(\'notificationPriority\')" multiple="false">\n\n    			<ion-option *ngFor="let option of notificationPriorityOptions" value="{{option}}" selected="{{option == state.notificationPriority}}">\n\n    				{{option}}\n\n    			</ion-option>\n\n    		</ion-select>\n\n    	</ion-item>\n\n\n\n	  	<ion-list-header mode="ios"><ion-icon name="bug" color="primary"></ion-icon>&nbsp;Logging &amp; Debug</ion-list-header>\n\n	  	<ion-card mode="ios">\n\n	  		<ion-row>\n\n				<ion-col align-self-stretch style="padding-right:5px;">\n\n  					<button ion-button full round color="danger" (click)="onClickDestroyLog()">Destroy log</button>\n\n				</ion-col>\n\n				<ion-col align-self-stretch style="padding-left: 5px;">\n\n					<button ion-button full round (click)="onClickEmailLog()" color="default">Email Log</button>\n\n				</ion-col>\n\n			</ion-row>\n\n	  		<ion-item>\n\n	  			<ion-input [(ngModel)]="email" (blur)="onUpdateEmail()" placeholder="your@email.com" type="email"></ion-input>\n\n	  		</ion-item>\n\n	  	</ion-card>\n\n\n\n	  	<ion-item>\n\n	  		<ion-label color="primary">logLevel</ion-label>\n\n	 		<ion-select [(ngModel)]="state.logLevel" (ionChange)="onChangeValue(\'logLevel\')" multiple="false">\n\n    			<ion-option *ngFor="let option of logLevelOptions" value="{{option}}" selected="{{option == state.logLevel}}">\n\n    				{{option}}\n\n    			</ion-option>\n\n    		</ion-select>\n\n    	</ion-item>\n\n\n\n	  	<ion-item>\n\n	  		<ion-label color="primary">Sounds &amp; Notification</ion-label>\n\n	  		<ion-toggle [(ngModel)]="state.debug" (ionChange)="onChangeValue(\'debug\')" color="secondary"></ion-toggle>\n\n	  	</ion-item>\n\n\n\n	  	<ion-list-header mode="ios"><ion-icon name="radio-button-on" color="primary"></ion-icon>&nbsp;Geofencing (City Drive)</ion-list-header>\n\n	  	<ion-card mode="ios">\n\n			<ion-row>\n\n				<ion-col align-self-stretch style="padding-right:5px;">\n\n  					<button ion-button full round color="danger" (click)="onClickRemoveGeofences()">Clear</button>\n\n				</ion-col>\n\n				<ion-col align-self-stretch style="padding-left: 5px;">\n\n  					<button ion-button full round color="primary" (click)="onClickLoadGeofences()">\n\n  						<ion-spinner [hidden]="!isAddingGeofences" name="dots" color="light"></ion-spinner>\n\n  						<span [hidden]="isAddingGeofences">Load</span>\n\n  					</button>\n\n				</ion-col>\n\n			</ion-row>\n\n		</ion-card>\n\n		<ion-item>\n\n	  		<ion-label color="primary">radius</ion-label>\n\n	  		<ion-select [(ngModel)]="settingsService.state.geofenceRadius" (ionChange)="settingsService.onChange(\'geofenceRadius\')" multiple="false">\n\n    			<ion-option *ngFor="let option of settingsService.geofenceRadiusOptions" value="{{option}}" selected="{{option == settingsService.state.geofenceRadius}}">\n\n    				{{option}}\n\n    			</ion-option>\n\n    		</ion-select>\n\n    	</ion-item>\n\n	  	<ion-item>\n\n	  		<ion-label color="primary">notifyOnEntry</ion-label>\n\n	  		<ion-toggle [(ngModel)]="settingsService.state.geofenceNotifyOnEntry" (ionChange)="settingsService.onChange(\'geofenceNotifyOnEntry\')" color="secondary"></ion-toggle>\n\n	  	</ion-item>\n\n	  	<ion-item>\n\n	  		<ion-label color="primary">notifyOnExit</ion-label>\n\n	  		<ion-toggle [(ngModel)]="settingsService.state.geofenceNotifyOnExit" (ionChange)="settingsService.onChange(\'geofenceNotifyOnExit\')" color="secondary"></ion-toggle>\n\n	  	</ion-item>\n\n	  	<ion-item>\n\n	  		<ion-label color="primary">notifyOnDwell</ion-label>\n\n	  		<ion-toggle [(ngModel)]="settingsService.state.geofenceNotifyOnDwell" (ionChange)="settingsService.onChange(\'geofenceNotifyOnDwell\')" color="secondary"></ion-toggle>\n\n	  	</ion-item>\n\n	  	<ion-item>\n\n	  		<ion-label color="primary">loiteringDelay</ion-label>\n\n	  		<ion-select [(ngModel)]="settingsService.state.geofenceLoiteringDelay" (ionChange)="settingsService.onChange(\'geofenceLoiteringDelay\')" multiple="false">\n\n    			<ion-option *ngFor="let option of settingsService.geofenceLoiteringDelayOptions" value="{{option}}" selected="{{option == settingsService.state.geofenceLoiteringDelay}}">\n\n    				{{option}}\n\n    			</ion-option>\n\n    		</ion-select>\n\n    	</ion-item>\n\n\n\n	  	<ion-list-header mode="ios"><ion-icon name="map" color="primary"></ion-icon>&nbsp;Map Options</ion-list-header>\n\n	  	<ion-item>\n\n	  		<ion-label color="primary">Hide location markers</ion-label>\n\n	  		<ion-toggle [(ngModel)]="settingsService.state.mapHideMarkers" (ionChange)="settingsService.onChange(\'mapHideMarkers\')" color="secondary"></ion-toggle>\n\n	  	</ion-item>\n\n\n\n	  	<ion-item>\n\n	  		<ion-label color="primary">Hide polyline</ion-label>\n\n	  		<ion-toggle [(ngModel)]="settingsService.state.mapHidePolyline" (ionChange)="settingsService.onChange(\'mapHidePolyline\')" color="secondary"></ion-toggle>\n\n	  	</ion-item>\n\n\n\n	  	<ion-item>\n\n	  		<ion-label color="primary">Show geofence hit-markers</ion-label>\n\n	  		<ion-toggle [(ngModel)]="settingsService.state.mapShowGeofenceHits" (ionChange)="settingsService.onChange(\'mapShowGeofenceHits\')" color="secondary"></ion-toggle>\n\n	  	</ion-item>\n\n\n\n\n\n\n\n	</ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\android_hieu10\SampleApp\src\pages\settings\settings.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__lib_BGService__["a" /* BGService */],
        __WEBPACK_IMPORTED_MODULE_3__lib_SettingsService__["a" /* SettingsService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_BGService__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the About page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var AboutPage = (function () {
    function AboutPage(bgService, viewCtrl) {
        this.bgService = bgService;
        this.viewCtrl = viewCtrl;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        this.bgService.playSound("FLOURISH");
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage.prototype.onClickClose = function () {
        this.bgService.playSound("CLOSE");
        this.viewCtrl.dismiss();
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"C:\android_hieu10\SampleApp\src\pages\about\about.html"*/'<!--\n\n  Generated template for the About page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n	<ion-toolbar mode="ios" color="dark">\n\n		<img class="logo" src="assets/images/transistor-logo.svg" />\n\n		<ion-buttons end>\n\n			<a href="http://www.transistorsoft.com/shop/products/cordova-background-geolocation"><button round outline ion-button color="gold">Buy Now</button></a>\n\n		</ion-buttons>\n\n	</ion-toolbar>\n\n</ion-header>\n\n<ion-content padding style="background-color: #fedd1e">\n\n	<h5>Cordova Background Geolocation</h5>\n\n	<p>The most sophisticated, battery-efficient background-geolocation and geofencing plugin for Cordova</p>\n\n	<ul>\n\n		<li>The plugin <em>knowns</em> when the device is <strong>moving</strong> &amp; <strong>stationary</strong>.  When the device is detected to be moving, the plugin will automatically start tracking.  It doesn\'t matter whether the app is in foreground or background.</li>\n\n		<li><strong>iOS</strong> typically requires movement of 200 meters beyond the last known location before tracking will engage.  <strong>Android</strong> is much more sensitive to triggering:  it will typically trigger tracking simply by walking a few meters.</li>\n\n		<li>Enter an url in the settings screen to upload data to your server.</li>\n\n		<li>Add geofences with long-press on map.</li>\n\n		<li>Test geofences in iOS simulator with City Drive then click "Load Geofences" in the Settings Screen.</li>\n\n	</ul>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n	<ion-toolbar color="gold">\n\n		<button block round ion-button (click)="onClickClose()" color="dark">Close</button>\n\n	</ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\android_hieu10\SampleApp\src\pages\about\about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__lib_BGService__["a" /* BGService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeofencePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_BGService__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the Geofence page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var GeofencePage = (function () {
    function GeofencePage(alertCtrl, navParams, viewCtrl, bgService) {
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.bgService = bgService;
        this.identifier = '';
        this.radius = '200';
        this.latitude = this.navParams.get('latitude');
        this.longitude = this.navParams.get('longitude');
        this.notifyOnEntry = true;
        this.notifyOnExit = false;
        this.notifyOnDwell = false;
        this.radiusOptions = [100, 150, 200, 500, 1000, 5000, 10000];
    }
    GeofencePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GeofencePage');
    };
    GeofencePage.prototype.onClickCancel = function () {
        this.viewCtrl.dismiss();
    };
    GeofencePage.prototype.onClickSubmit = function () {
        var _this = this;
        var bgGeo = this.bgService.getPlugin();
        var radius = parseInt(this.radius, 10);
        bgGeo.addGeofence({
            identifier: this.identifier,
            radius: radius,
            latitude: this.latitude,
            longitude: this.longitude,
            notifyOnEntry: this.notifyOnEntry,
            notifyOnExit: this.notifyOnExit,
            notifyOnDwell: this.notifyOnDwell,
            loiteringDelay: this.loiteringDelay,
            extras: {
                radius: radius,
                center: { latitude: this.latitude, longitude: this.longitude }
            }
        }, function (identifier) {
            _this.bgService.playSound('ADD_GEOFENCE');
            _this.viewCtrl.dismiss();
        }, function (error) {
            _this.alert('Error', error);
        });
    };
    GeofencePage.prototype.alert = function (title, message) {
        this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['Dismiss']
        }).present();
    };
    return GeofencePage;
}());
GeofencePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-geofence',template:/*ion-inline-start:"C:\android_hieu10\SampleApp\src\pages\geofence\geofence.html"*/'<!--\n\n  Generated template for the Geofence page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="gold" mode="ios">\n\n\n\n  	<ion-buttons start>\n\n 		<button ion-button (click)="onClickCancel()">Cancel</button>\n\n 	</ion-buttons>\n\n 	<ion-title mode="ios">Geofence</ion-title>\n\n	<ion-buttons end>\n\n    	<button outline ion-button (click)="onClickSubmit()" ion-text color="dark">\n\n    		Save\n\n    	</button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	<ion-list>\n\n		<ion-item>\n\n			<ion-label color="primary">Identifier</ion-label>\n\n	  		<ion-input [(ngModel)]="identifier" placeholder=""></ion-input>\n\n	  	</ion-item>\n\n	  	<ion-item>\n\n	    	<ion-label color="primary">radius</ion-label>\n\n	    	<ion-select [(ngModel)]="radius" multiple="false">\n\n	    		<ion-option *ngFor="let option of radiusOptions" value="{{option}}" selected="200">\n\n	    			{{option}} meters\n\n	    		</ion-option>\n\n	    	</ion-select>\n\n	  	</ion-item>\n\n\n\n	  	<ion-item>\n\n		    <ion-label color="primary">notifyOnEntry</ion-label>\n\n		    <ion-checkbox [(ngModel)]="notifyOnEntry"></ion-checkbox>\n\n		</ion-item>\n\n\n\n		<ion-item>\n\n		    <ion-label color="primary">notifyOnExit</ion-label>\n\n		    <ion-checkbox [(ngModel)]="notifyOnExit"></ion-checkbox>\n\n		</ion-item>\n\n\n\n		<ion-item>\n\n		    <ion-label color="primary">notifyOnDwell</ion-label>\n\n		    <ion-checkbox [(ngModel)]="notifyOnDwell"></ion-checkbox>\n\n		</ion-item>\n\n\n\n		<ion-item>\n\n			<ion-label color="primary">loiteringDelay(ms)</ion-label>\n\n	  		<ion-input [(ngModel)]="loiteringDelay" type="number" placeholder="Delay before DWELL"></ion-input>\n\n	  	</ion-item>\n\n	</ion-list>\n\n</ion-content>\n\n\n\n\n\n'/*ion-inline-end:"C:\android_hieu10\SampleApp\src\pages\geofence\geofence.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__lib_BGService__["a" /* BGService */]])
], GeofencePage);

//# sourceMappingURL=geofence.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(217);



Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_device__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_geofence_geofence__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_about_about__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__lib_BGService__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__lib_SettingsService__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__lib_TestService__ = __webpack_require__(269);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














window.TestService = new __WEBPACK_IMPORTED_MODULE_13__lib_TestService__["a" /* TestService */]();
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_geofence_geofence__["a" /* GeofencePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_about_about__["a" /* AboutPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_geofence_geofence__["a" /* GeofencePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_about_about__["a" /* AboutPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_device__["a" /* Device */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }, __WEBPACK_IMPORTED_MODULE_11__lib_BGService__["a" /* BGService */], __WEBPACK_IMPORTED_MODULE_12__lib_SettingsService__["a" /* SettingsService */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\android_hieu10\SampleApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\android_hieu10\SampleApp\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 267:
/***/ (function(module, exports) {


// generated automatically, but feel free to change
// and remove from a gitignore file
exports.defaultLocationUrl = 'http://tracker.transistorsoft.com/locations';
exports.companyToken = '747917b4';
  

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LongPress; });
/**
 * Custom google-maps @event LongClick hack.
 */
var LongPress = (function () {
    function LongPress(map, maxTime) {
        var _this = this;
        this.maxTime = maxTime;
        this.map = map;
        this.longPressTimer = undefined;
        this.isLongPress = false;
        google.maps.event.addListener(map, 'mousedown', function (e) {
            _this.onMouseDown(e);
        });
        google.maps.event.addListener(map, 'click', function (e) {
            _this.onMouseClick(e);
        });
        google.maps.event.addListener(map, 'mouseup', function (e) {
            _this.onMouseUp(e);
        });
        google.maps.event.addListener(map, 'drag', function (e) {
            _this.onMapDrag(e);
        });
    }
    LongPress.prototype.onMouseClick = function (e) {
        this.clearTimer();
        this.isLongPress = false;
    };
    LongPress.prototype.onMouseUp = function (e) {
        if (this.isLongPress && this.isDragging === false) {
            google.maps.event.trigger(this.map, 'longpress', e);
        }
        this.clearTimer();
    };
    LongPress.prototype.onMouseDown = function (e) {
        var _this = this;
        this.clearTimer();
        this.longPressTimer = setTimeout(function () {
            _this.isLongPress = true;
            google.maps.event.trigger(_this.map, 'longpresshold', e);
        }, this.maxTime);
        this.isDragging = false;
    };
    LongPress.prototype.onMapDrag = function (e) {
        if (this.isLongPress) {
            google.maps.event.trigger(this.map, 'longpresscancel');
        }
        this.clearTimer();
        this.isDragging = true;
    };
    LongPress.prototype.clearTimer = function () {
        this.isLongPress = false;
        if (this.longPressTimer) {
            clearTimeout(this.longPressTimer);
            this.longPressTimer = undefined;
        }
    };
    return LongPress;
}());

//# sourceMappingURL=LongPress.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestService; });
//import {Platform} from 'ionic-angular';
/**
* @class BGService This is a wrapper for interacting with the BackgroundGeolocation plugin
* througout the app.
*/
var TestService = (function () {
    function TestService() {
    }
    TestService.prototype.getPlugin = function () {
        return window.BackgroundGeolocation;
    };
    TestService.prototype.startSqliteTest = function (delay) {
        var _this = this;
        this.getLocationsTask = setInterval(function () {
            _this.getPlugin().getLocations(function (rs, tid) {
                console.log('- getLocations: ', rs.length);
                this.getPlugin().finish(tid);
            });
        }, delay);
        this.getCurrentPositionTask = setInterval(function () {
            _this.getPlugin().getCurrentPosition(function (location, tid) {
                console.log('- getCurrentPosition');
                this.getPlugin().finish(tid);
            });
        }, delay);
    };
    TestService.prototype.stopSqliteTest = function () {
        clearInterval(this.getLocationsTask);
        clearInterval(this.getCurrentPositionTask);
    };
    TestService.prototype.addGeofenceTest = function (length, prefix, success, failure) {
        var _this = this;
        prefix = prefix || 'default';
        this.getPlugin().getCurrentPosition(function (location, taskId) {
            for (var n = 0; n < length; n++) {
                _this.getPlugin().addGeofence({
                    notifyOnExit: true,
                    notifyOnEntry: true,
                    identifier: 'geofence_' + prefix + '_' + n,
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    radius: 200
                }, success, failure);
            }
            _this.getPlugin().finish(taskId);
        });
    };
    TestService.prototype.addGeofencesTest = function (length, prefix, success, failure) {
        var _this = this;
        prefix = prefix || 'default';
        var rs = [];
        this.getPlugin().getCurrentPosition(function (location, taskId) {
            for (var n = 0; n < length; n++) {
                rs.push({
                    notifyOnExit: true,
                    notifyOnEntry: true,
                    identifier: 'geofence_' + prefix + '_' + n,
                    latitude: 1,
                    longitude: 1,
                    radius: 200
                });
            }
            _this.getPlugin().addGeofences(rs, success, failure);
            _this.getPlugin().finish(taskId);
        });
    };
    TestService.prototype.removeGeofencesTest = function (success, failure) {
        var _this = this;
        this.addGeofencesTest(1, 'remove_test', function () {
            _this.getPlugin().getGeofences(function (rs) {
                console.info('- getGeofences: ', rs.length);
                _this.getPlugin().removeGeofences(function (response) {
                    console.log('- Success: ', response);
                    _this.getPlugin().getGeofences(function (rs) {
                        console.log('- removeGeofences: ', rs.length);
                    });
                }, function (error) {
                    console.warn('- Error: ', error);
                });
            });
        }, function (error) {
            console.warn('Add geofence error');
        });
    };
    TestService.prototype.insertLocations = function (length, success, failure) {
        var _this = this;
        this.getPlugin().getCurrentPosition(function (l, t) {
            for (var i = 0; i < length; i++) {
                _this.getPlugin().insertLocation({
                    coords: {
                        latitude: l.coords.latitude,
                        longitude: l.coords.longitude
                    },
                    timestamp: l.timestamp,
                    uuid: 'uuid-' + i
                }, success, failure);
            }
        });
    };
    TestService.prototype.startGeofenceTest = function () {
        var _this = this;
        var geofences = [{
                identifier: "Geofence 1",
                notifyOnEntry: true,
                notifyOnExit: true,
                radius: 200,
                latitude: 45.5248868,
                longitude: -73.6424362
            }, {
                identifier: "Geofence 2",
                notifyOnEntry: true,
                notifyOnExit: true,
                radius: 200,
                latitude: 45.5225079,
                longitude: -73.6341922
            }, {
                identifier: "Geofence 3",
                notifyOnEntry: true,
                notifyOnExit: true,
                radius: 200,
                latitude: 45.5207131,
                longitude: -73.6279527
            }];
        var result = {
            total: 0,
            ENTER: 0,
            EXIT: 0
        };
        this.getPlugin().removeGeofences();
        this.getPlugin().addGeofences(geofences);
        this.getPlugin().on('geofence', function (event, tid) {
            if (!result[event.action]) {
                result[event.action] = 0;
            }
            result[event.action]++;
            result.total++;
            console.log('- Geofence test: ', result);
            if (result.total === (2 * geofences.length)) {
                if (result.ENTER === 3 && result.EXIT == 3) {
                    _this.getPlugin().changePace(false);
                    alert('Geofence test SUCCESS');
                    console.info('Geofence test success: ', result);
                }
            }
        });
        this.getPlugin().stop();
        this.getPlugin().start(function () {
            _this.getPlugin().changePace(true);
        });
    };
    /**
    * Auto-build a scheule based upon current time.
    *                ______________..._______________                      ___...
    * ______________|                                |____________________|
    * |<-- delay -->|<---------- duration ---------->|<---- interval ---->|<-- duration -->
    *
    * @param {Integer} count How many schedules to generate?
    * @param {Integer} delay How many minutes in future to start generating schedules
    * @param {Integer} duration How long is each trigger event
    * @param {Integer} interval How long between trigger events
    */
    TestService.prototype.generateSchedule = function (count, delay, duration, interval) {
        // Start 2min from now
        var now = new Date();
        var start = new Date(now.getTime() + delay * 60000);
        var rs = [];
        for (var n = 0, len = count; n < len; n++) {
            var end = new Date(start.getTime() + duration * 60000);
            var schedule = '1-7 ' + start.getHours() + ':' + start.getMinutes() + '-' + end.getHours() + ':' + end.getMinutes();
            start = new Date(end.getTime() + interval * 60000);
            rs.push(schedule);
        }
        return rs;
    };
    TestService.prototype.createGeofences = function (data, interval, params, callback) {
        //bgGeo.removeGeofences();
        interval = interval || 1;
        params = params || { notifyOnEntry: true };
        params.notifyOnEntry = params.notifyOnEntry || false;
        params.notifyOnExit = params.notifyOnExit || false;
        params.notifyOnDwell = params.notifyOnDwell || false;
        var geofences = [];
        var index = 1;
        for (var n = 0, len = data.length; n < len; n++) {
            if (n % interval) {
                continue;
            }
            geofences.push({
                identifier: 'geofences_test_' + index++,
                latitude: data[n].lat,
                longitude: data[n].lng,
                radius: 200,
                extras: { geofence_extra_foo: "bar" },
                notifyOnExit: params.notifyOnExit,
                notifyOnEntry: params.notifyOnEntry,
                notifyOnDwell: params.notifyOnDwell
            });
        }
        ;
        this.getPlugin().addGeofences(geofences, function (result) {
            console.log('Geofences loaded');
            callback();
        }, function (error) {
            console.warn('Geofence load failure: ', error);
            callback();
        });
    };
    TestService.prototype.crudTest = function () {
        var _this = this;
        console.log("******************************");
        console.log("* Crud test");
        console.log("******************************");
        this.getPlugin().setConfig({ autoSync: false });
        this.getPlugin().getCurrentPosition(function (location, taskId) {
            _this.getPlugin().getLocations(function (rs, tid) {
                if (!rs.length) {
                    console.warn("- getLocations FAIL: ", rs.length);
                    return;
                }
                var uuid = rs[0].uuid;
                console.log("- uuid: ", uuid);
                _this.getPlugin().getCount(function (count) {
                    console.log('- Count BEFORE: ', count);
                });
                var params = {
                    coords: location.coords,
                    extras: { foo: 'insertLocation without timestamp' }
                };
                _this.getPlugin().insertLocation(params, function () {
                    console.log('- INSERT location without timetamp');
                }, function (error) {
                    console.log('- INSERT FAILED: ', error);
                });
                _this.getPlugin().getLocation(uuid, function (location) {
                    console.log('- getLocation SUCCESS: ', JSON.stringify(location, null, 2));
                    location.extras = { "CRUD_TEST": "------------ CrudTest updateLocation ---------------" };
                    _this.getPlugin().updateLocation(location, function () {
                        console.log('- Update location SUCCESS');
                        _this.getPlugin().getLocation(uuid, function (l) {
                            console.log('- Get Location after UPDATE: ', JSON.stringify(l, null, 2));
                            _this.getPlugin().destroyLocation(uuid, function () {
                                console.log('- Destroy Location SUCCESS', uuid);
                                _this.getPlugin().getCount(function (count) {
                                    console.log('- Count: ', count);
                                });
                                _this.getPlugin().getLocation(uuid, function () {
                                    console.warn('- Get Location should not SUCCEED!');
                                }, function () {
                                    console.log('- GOOD: getLocation failed after destroy');
                                });
                            }, function (error) {
                                console.warn('- Destroy Location FAILURE: ', uuid);
                            });
                        }, function (error) {
                            console.warn('- Get Location FAILED: ', error);
                        });
                    }, function (error) {
                        console.log('- Update location FAILURE: ', error);
                    });
                }, function (error) {
                    console.log('- Failed to find location; ', uuid);
                });
            });
        }, {
            persist: true
        });
    };
    return TestService;
}());

//# sourceMappingURL=TestService.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BGService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_device__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__consoleConfig__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__consoleConfig___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__consoleConfig__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
* The collection of available BackgroundGeolocation settings
*/
var SETTINGS = {
    common: [
        // Geolocation
        { name: 'desiredAccuracy', group: 'geolocation', dataType: 'integer', inputType: 'select', values: [-1, 0, 10, 100, 1000], defaultValue: 0 },
        { name: 'distanceFilter', group: 'geolocation', dataType: 'integer', inputType: 'select', values: [0, 10, 50, 100, 1000], defaultValue: 20 },
        { name: 'disableElasticity', group: 'geolocation', dataType: 'boolean', inputType: 'toggle', values: ['true', 'false'], defaultValue: 'false' },
        { name: 'geofenceProximityRadius', group: 'geolocation', dataType: 'integer', inputType: 'select', values: [1000, 2500, 5000, 10000, 100000], defaultValue: 1000 },
        { name: 'locationTimeout', group: 'geolocation', dataType: 'integer', inputType: 'select', values: [0, 5, 10, 30, 60], defaultValue: 60 },
        // HTTP
        { name: 'url', group: 'http', ignore: true, inputType: 'text', dataType: 'string', defaultValue: 'http://posttestserver.com/post.php?dir=ionic-cordova-background-geolocation' },
        { name: 'method', group: 'http', inputType: 'select', dataType: 'string', values: ['POST', 'PUT'], defaultValue: 'POST' },
        { name: 'autoSync', group: 'http', dataType: 'boolean', inputType: 'toggle', values: ['true', 'false'], defaultValue: 'true' },
        { name: 'autoSyncThreshold', group: 'http', dataType: 'integer', inputType: 'select', values: [0, 5, 10, 25, 50, 100], defaultValue: 0 },
        { name: 'batchSync', group: 'http', dataType: 'boolean', inputType: 'toggle', values: ['true', 'false'], defaultValue: 'false' },
        { name: 'maxBatchSize', group: 'http', dataType: 'integer', inputType: 'select', values: [-1, 5, 10, 50, 100] },
        { name: 'maxRecordsToPersist', group: 'http', dataType: 'integer', inputType: 'select', values: [-1, 0, 1, 5, 10] },
        // Application
        { name: 'stopOnTerminate', group: 'application', dataType: 'boolean', inputType: 'toggle', values: ['true', 'false'], defaultValue: 'true' },
        { name: 'startOnBoot', group: 'application', dataType: 'boolean', inputType: 'toggle', values: ['true', 'false'], defaultValue: 'false' },
        { name: 'stopTimeout', group: 'activity_recognition', dataType: 'integer', inputType: 'select', values: [0, 1, 3, 5, 10, 15], defaultValue: 1 },
        { name: 'activityRecognitionInterval', group: 'activity_recognition', dataType: 'integer', inputType: 'select', values: [0, 1000, 10000, 30000, 60000], defaultValue: 10000 },
        { name: 'heartbeatInterval', group: 'application', dataType: 'integer', inputType: 'select', values: [-1, 60, (2 * 60), (5 * 60), (15 * 60)], defaultValue: 60 },
        // Logging & Debug
        { name: 'debug', group: 'debug', dataType: 'boolean', inputType: 'toggle', values: ['true', 'false'], defaultValue: 'true' },
        { name: 'logLevel', group: 'debug', dataType: 'integer', inputType: 'select', values: [0, 1, 2, 3, 4, 5], defaultValue: 5 },
        { name: 'logMaxDays', group: 'debug', dataType: 'integer', inputType: 'select', values: [0, 1, 2, 3, 4, 5, 6, 7], defaultValue: 5 }
    ],
    iOS: [
        // Geolocation
        { name: 'stationaryRadius', group: 'geolocation', dataType: 'integer', inputType: 'select', values: [25, 50, 100, 500, 1000], defaultValue: 25 },
        { name: 'activityType', group: 'geolocation', dataType: 'string', inputType: 'select', values: ['Other', 'AutomotiveNavigation', 'Fitness', 'OtherNavigation'], defaultValue: 'OtherNavigation' },
        { name: 'useSignificantChangesOnly', group: 'geolocation', dataType: 'boolean', inputType: 'toggle', values: ['true', 'false'], defaultValue: 'false' },
        // Activity Recognition
        { name: 'stopDetectionDelay', group: 'activity_recognition', dataType: 'integer', inputType: 'select', values: [0, 1, 2, 5], defaultValue: 0 },
        { name: 'disableStopDetection', group: 'activity_recognition', dataType: 'boolean', inputType: 'toggle', values: ['true', 'false'], defaultValue: false },
        { name: 'disableMotionActivityUpdates', group: 'activity_recognition', dataType: 'boolean', inputType: 'toggle', values: ['true', 'false'], defaultValue: 'false' },
        { name: 'preventSuspend', group: 'application', dataType: 'boolean', inputType: 'toggle', values: ['true', 'false'], defaultValue: 'false' }
    ],
    Android: [
        // Geolocation
        { name: 'locationUpdateInterval', group: 'geolocation', dataType: 'integer', inputType: 'select', values: [0, 1000, 5000, 10000, 30000, 60000], defaultValue: 5000 },
        { name: 'fastestLocationUpdateInterval', group: 'geolocation', dataType: 'integer', inputType: 'select', values: [0, 1000, 5000, 10000, 30000, 60000], defaultValue: 1000 },
        { name: 'deferTime', group: 'geolocation', dataType: 'integer', inputType: 'select', values: [0, 10 * 1000, 30 * 1000, 60 * 1000, 10 * 60 * 1000], defaultValue: 0 },
        // Activity Recognition
        { name: 'triggerActivities', group: 'activity_recognition', dataType: 'string', inputType: 'select', multiple: true, values: ['in_vehicle', 'on_bicycle', 'on_foot', 'running', 'walking'], defaultValue: 'in_vehicle, on_bicycle, running, walking, on_foot' },
        // Application
        { name: 'foregroundService', group: 'application', dataType: 'boolean', inputType: 'toggle', values: ['true', 'false'], defaultValue: 'true' },
        { name: 'notificationPriority', ignore: true, group: 'application', dataType: 'integer', inputType: 'select', values: [0, 1, -1, 2, -2], defaultValue: 0 },
        { name: 'forceReloadOnBoot', group: 'application', dataType: 'boolean', inputType: 'toggle', values: ['true', 'false'], defaultValue: 'false' },
        { name: 'forceReloadOnMotionChange', group: 'application', dataType: 'boolean', inputType: 'toggle', values: ['true', 'false'], defaultValue: 'false' },
        { name: 'forceReloadOnLocationChange', group: 'application', dataType: 'boolean', inputType: 'toggle', values: ['true', 'false'], defaultValue: 'false' },
        { name: 'forceReloadOnGeofence', group: 'application', dataType: 'boolean', inputType: 'toggle', values: ['true', 'false'], defaultValue: 'false' },
        { name: 'forceReloadOnHeartbeat', group: 'application', dataType: 'boolean', inputType: 'toggle', values: ['true', 'false'], defaultValue: 'false' }
    ]
};
/**
* A collection of soundId for use with BackgroundGeolocation#playSound
*/
var SOUND_MAP = {
    "iOS": {
        "LONG_PRESS_ACTIVATE": 1113,
        "LONG_PRESS_CANCEL": 1075,
        "ADD_GEOFENCE": 1114,
        "BUTTON_CLICK": 1104,
        "MESSAGE_SENT": 1303,
        "ERROR": 1006,
        "OPEN": 1502,
        "CLOSE": 1503,
        "FLOURISH": 1509
    },
    "Android": {
        "LONG_PRESS_ACTIVATE": 27,
        "LONG_PRESS_CANCEL": 94,
        "ADD_GEOFENCE": 28,
        "BUTTON_CLICK": 19,
        "MESSAGE_SENT": 90,
        "ERROR": 89,
        "OPEN": 37,
        "CLOSE": 94,
        "FLOURISH": 37
    }
};
var BGService = (function () {
    function BGService(platform, events, device) {
        this.platform = platform;
        this.events = events;
        this.device = device;
        // We don't need cordova-sqlite-storage.
        this.storage = window.localStorage;
        // We fetch put Device.uuid into localStorage to determine if this is first-boot of app.
        this.uuid = this.storage.getItem('device:uuid');
        this.platform.ready().then(this.init.bind(this));
    }
    BGService.prototype.init = function () {
        this.deviceInfo = {
            model: this.device.model,
            platform: this.device.platform,
            uuid: this.device.uuid,
            version: this.device.version,
            manufacturer: this.device.manufacturer,
            framework: 'Cordova'
        };
        ///
        // Here is the glorious reference to the BackgroundGeolocation plugin
        //
        this.plugin = window.BackgroundGeolocation;
        // Build a collection of available settings by platform for use on the Settings screen
        var settings = [].concat(SETTINGS.common).concat(SETTINGS[this.device.platform || 'iOS']);
        this.settings = {
            list: settings,
            map: {}
        };
        for (var n = 0, len = settings.length; n < len; n++) {
            var setting = settings[n];
            this.settings.map[setting.name] = setting;
        }
        ;
    };
    /**
    * Return Array of all settings by platform
    */
    BGService.prototype.getSettings = function () {
        return this.settings.list;
    };
    BGService.prototype.getPlatformSettings = function (group) {
        var settings = [];
        this.settings.list.forEach(function (setting) {
            if ((setting.group === group) && !setting.ignore) {
                settings.push(setting);
            }
        });
        return settings;
    };
    /**
    * Get current BackgroundGeolocation state.
    * @return {Object}
    */
    BGService.prototype.getState = function (callback) {
        var _this = this;
        this.plugin.getState(function (state) {
            _this.state = state;
            if (_this.uuid) {
                callback(state);
                return;
            }
            // FIRST BOOT OF APP!  Cache the device uuid so we know we've seen this device before.
            _this.uuid = _this.device.uuid;
            _this.storage.setItem('device:uuid', _this.uuid);
            // Override a few defaults on first-boot so user can hear debug sounds.
            _this.state.foregroundService = true;
            _this.state.autoSync = true;
            _this.state.heartbeatInterval = 60;
            _this.state.stopOnTerminate = false;
            _this.state.startOnBoot = true;
            _this.state.url = __WEBPACK_IMPORTED_MODULE_3__consoleConfig__["defaultLocationUrl"];
            _this.state.debug = true;
            _this.state.logLevel = _this.plugin.LOG_LEVEL_VERBOSE;
            _this.state.params = { device: _this.deviceInfo, company_token: __WEBPACK_IMPORTED_MODULE_3__consoleConfig__["companyToken"] };
            callback(_this.state);
        });
    };
    /**
    * @return BackgroundGeolocation
    */
    BGService.prototype.getPlugin = function () {
        return this.plugin;
    };
    /**
    * Set a BackgroundGeolocation config option
    * @param {String} name
    * @param {Mixed} value
    */
    BGService.prototype.set = function (name, value, callback) {
        var _this = this;
        console.log('BGService#set ', name, value);
        var setting = this.settings.map[name];
        if (!setting) {
            // No change:  Ignore
            console.info('ignored');
            return;
        }
        // Type-casting String from form-field value
        switch (setting.dataType) {
            case 'integer':
                value = parseInt(value, 10);
                break;
            case 'boolean':
                value = (typeof (value) === 'string') ? (value === 'true') : value;
                break;
        }
        if (this.state[name] === value) {
            return;
        }
        this.playSound('BUTTON_CLICK');
        // Update state
        this.state[name] = value;
        // Create config {} for BackgroundGeolocation
        var config = {};
        config[name] = value;
        this.plugin.setConfig(config, function (state) {
            _this.events.publish('change', name, value);
            if (typeof (callback) == 'function') {
                callback(state);
            }
        });
    };
    /**
    * Start BackgroundGeolocation in provided mode
    * @param {String} trackingMode
    */
    BGService.prototype.start = function (trackingMode) {
        var _this = this;
        var onStarted = function (state) {
            _this.events.publish('start', trackingMode, state);
        };
        this.state.trackingMode = trackingMode;
        if (trackingMode === 'location') {
            this.plugin.start(onStarted);
        }
        else {
            this.plugin.startGeofences(onStarted);
        }
    };
    /**
    * Subscribe to BGService events
    */
    BGService.prototype.on = function (event, callback) {
        this.events.subscribe(event, callback);
    };
    BGService.prototype.isLocationTrackingMode = function () {
        return (this.state.trackingMode === 'location') || (this.state.trackingMode === 1);
    };
    BGService.prototype.getOptionsForSetting = function (name) {
        var setting = this.settings.map[name];
        if (!setting) {
            console.warn('Unknown option: ', name);
            return [];
        }
        else {
            return setting.values;
        }
    };
    BGService.prototype.playSound = function (name) {
        var soundId = 0;
        if (typeof (name) === 'string') {
            soundId = SOUND_MAP[this.device.platform][name];
        }
        else if (typeof (name) === 'number') {
            soundId = name;
        }
        if (!soundId) {
            alert('Invalid sound id provided to BGService#playSound' + name);
            return;
        }
        this.plugin.playSound(soundId);
    };
    /**
    * Returns an array of locations for iOS Simulator City Drive Route
    * @return {Array}
    */
    BGService.prototype.getCityDriveData = function () {
        return [{ "lat": "37.33527476", "lng": "-122.03254703" }, { "lat": "37.33500926", "lng": "-122.03272188" }, { "lat": "37.33467638", "lng": "-122.03432425" }, { "lat": "37.33453849", "lng": "-122.03695223" }, { "lat": "37.33447068", "lng": "-122.04007348" }, { "lat": "37.33446146", "lng": "-122.04380955" }, { "lat": "37.33426985", "lng": "-122.04751058" }, { "lat": "37.33352458", "lng": "-122.05100549" }, { "lat": "37.33275353", "lng": "-122.05462472" }, { "lat": "37.33228724", "lng": "-122.05833354" }, { "lat": "37.33307736", "lng": "-122.06203541" }, { "lat": "37.33422447", "lng": "-122.06562781" }, { "lat": "37.33435661", "lng": "-122.06939204" }, { "lat": "37.33369775", "lng": "-122.07309474" }, { "lat": "37.33368006", "lng": "-122.07665613" }, { "lat": "37.33492184", "lng": "-122.07997503" }, { "lat": "37.3370055", "lng": "-122.0827595" }, { "lat": "37.33879885", "lng": "-122.08577472" }, { "lat": "37.34046597", "lng": "-122.08886286" }, { "lat": "37.34208941", "lng": "-122.09195687" }, { "lat": "37.34415677", "lng": "-122.09439031" }, { "lat": "37.34576798", "lng": "-122.09727888" }, { "lat": "37.34719244", "lng": "-122.1006624" }, { "lat": "37.34894824", "lng": "-122.1036539" }, { "lat": "37.35145376", "lng": "-122.10569934" }, { "lat": "37.35357644", "lng": "-122.10818206" }, { "lat": "37.35478615", "lng": "-122.11144128" }, { "lat": "37.35583234", "lng": "-122.11484701" }, { "lat": "37.35772158", "lng": "-122.11764607" }, { "lat": "37.36040727", "lng": "-122.11952001" }, { "lat": "37.36303768", "lng": "-122.12160442" }, { "lat": "37.36457081", "lng": "-122.12476867" }, { "lat": "37.36489536", "lng": "-122.12851823" }, { "lat": "37.36543834", "lng": "-122.13217241" }, { "lat": "37.3664761", "lng": "-122.13564763" }, { "lat": "37.36776176", "lng": "-122.13898061" }, { "lat": "37.36994839", "lng": "-122.1416339" }, { "lat": "37.37240005", "lng": "-122.14386038" }, { "lat": "37.37481249", "lng": "-122.14611939" }, { "lat": "37.37709618", "lng": "-122.14869624" }, { "lat": "37.37961188", "lng": "-122.15082139" }, { "lat": "37.3826398", "lng": "-122.15178036" }, { "lat": "37.38560981", "lng": "-122.15272559" }, { "lat": "37.38774539", "lng": "-122.15510789" }, { "lat": "37.38869141", "lng": "-122.15849049" }, { "lat": "37.38931302", "lng": "-122.16207476" }, { "lat": "37.39081987", "lng": "-122.1652427" }, { "lat": "37.39210109", "lng": "-122.16863067" }, { "lat": "37.39242056", "lng": "-122.17227965" }, { "lat": "37.39361482", "lng": "-122.17556879" }, { "lat": "37.39578711", "lng": "-122.17805511" }, { "lat": "37.39821434", "lng": "-122.18044236" }, { "lat": "37.40071157", "lng": "-122.18290622" }, { "lat": "37.40313012", "lng": "-122.18535374" }, { "lat": "37.40549529", "lng": "-122.18774837" }, { "lat": "37.40759705", "lng": "-122.19035128" }, { "lat": "37.40890928", "lng": "-122.19364872" }, { "lat": "37.41002813", "lng": "-122.19717013" }, { "lat": "37.4111682", "lng": "-122.20078524" }, { "lat": "37.41233794", "lng": "-122.20442475" }, { "lat": "37.41363889", "lng": "-122.20791833" }, { "lat": "37.41583072", "lng": "-122.2106204" }, { "lat": "37.41782917", "lng": "-122.21338064" }, { "lat": "37.41872658", "lng": "-122.21683566" }, { "lat": "37.41935866", "lng": "-122.22058933" }, { "lat": "37.4209964", "lng": "-122.22388736" }, { "lat": "37.42303224", "lng": "-122.22680837" }, { "lat": "37.42510651", "lng": "-122.22979057" }, { "lat": "37.42738525", "lng": "-122.23260102" }, { "lat": "37.42942843", "lng": "-122.23549663" }, { "lat": "37.4313864", "lng": "-122.23829728" }, { "lat": "37.43354365", "lng": "-122.24095367" }, { "lat": "37.4357105", "lng": "-122.24350931" }, { "lat": "37.4378918", "lng": "-122.24613695" }, { "lat": "37.44000262", "lng": "-122.24876996" }, { "lat": "37.44207177", "lng": "-122.25146784" }, { "lat": "37.44364246", "lng": "-122.25458952" }, { "lat": "37.44423451", "lng": "-122.25815644" }, { "lat": "37.44401797", "lng": "-122.26182293" }, { "lat": "37.44381697", "lng": "-122.26544651" }, { "lat": "37.4444387", "lng": "-122.26900388" }, { "lat": "37.44598499", "lng": "-122.27225807" }, { "lat": "37.44805758", "lng": "-122.27523289" }, { "lat": "37.45014137", "lng": "-122.27827786" }, { "lat": "37.45213903", "lng": "-122.28131706" }, { "lat": "37.45408782", "lng": "-122.28428358" }, { "lat": "37.45607437", "lng": "-122.28728422" }, { "lat": "37.45855399", "lng": "-122.28964389" }, { "lat": "37.46150337", "lng": "-122.29066665" }, { "lat": "37.46449927", "lng": "-122.29080537" }, { "lat": "37.46741706", "lng": "-122.29164222" }, { "lat": "37.47004943", "lng": "-122.29347317" }, { "lat": "37.4724045", "lng": "-122.29584441" }, { "lat": "37.47484795", "lng": "-122.29807718" }, { "lat": "37.47775391", "lng": "-122.29919189" }, { "lat": "37.48081016", "lng": "-122.29901151" }, { "lat": "37.48386847", "lng": "-122.29850608" }, { "lat": "37.4868127", "lng": "-122.2981216" }, { "lat": "37.48974125", "lng": "-122.29883038" }, { "lat": "37.49226793", "lng": "-122.30073474" }, { "lat": "37.49413538", "lng": "-122.3036213" }, { "lat": "37.4951695", "lng": "-122.30711999" }, { "lat": "37.49605031", "lng": "-122.31058583" }, { "lat": "37.49739544", "lng": "-122.3138981" }, { "lat": "37.49913263", "lng": "-122.31702405" }, { "lat": "37.50040366", "lng": "-122.32036315" }, { "lat": "37.50083658", "lng": "-122.32388539" }, { "lat": "37.50117039", "lng": "-122.32749548" }, { "lat": "37.50237035", "lng": "-122.33083005" }, { "lat": "37.50420426", "lng": "-122.33381577" }, { "lat": "37.50606869", "lng": "-122.33688933" }, { "lat": "37.50799594", "lng": "-122.34003061" }, { "lat": "37.50988405", "lng": "-122.34301482" }, { "lat": "37.51203087", "lng": "-122.34564414" }, { "lat": "37.51425798", "lng": "-122.34819157" }, { "lat": "37.51644813", "lng": "-122.35068376" }, { "lat": "37.51869146", "lng": "-122.35307638" }, { "lat": "37.52133683", "lng": "-122.35490229" }, { "lat": "37.52404792", "lng": "-122.35651279" }, { "lat": "37.52656144", "lng": "-122.35869996" }, { "lat": "37.52949012", "lng": "-122.36013184" }, { "lat": "37.53245962", "lng": "-122.36139139" }, { "lat": "37.53535502", "lng": "-122.36269562" }, { "lat": "37.53806531", "lng": "-122.36427066" }, { "lat": "37.54071957", "lng": "-122.36586045" }, { "lat": "37.54319399", "lng": "-122.36775116" }, { "lat": "37.54551481", "lng": "-122.37012089" }, { "lat": "37.54781925", "lng": "-122.37250714" }, { "lat": "37.55009393", "lng": "-122.37486312" }, { "lat": "37.55254949", "lng": "-122.37717024" }, { "lat": "37.55541199", "lng": "-122.37918458" }, { "lat": "37.55818716", "lng": "-122.38106338" }, { "lat": "37.56068828", "lng": "-122.38341593" }, { "lat": "37.56314841", "lng": "-122.38588298" }, { "lat": "37.56541169", "lng": "-122.38835698" }, { "lat": "37.56674169", "lng": "-122.39169239" }, { "lat": "37.5685417", "lng": "-122.39470024" }, { "lat": "37.57095669", "lng": "-122.39698791" }, { "lat": "37.57337626", "lng": "-122.39928572" }, { "lat": "37.57613294", "lng": "-122.40094584" }, { "lat": "37.57901078", "lng": "-122.4022173" }, { "lat": "37.58156135", "lng": "-122.40405955" }, { "lat": "37.58410689", "lng": "-122.40616551" }, { "lat": "37.58628103", "lng": "-122.40888284" }, { "lat": "37.58845823", "lng": "-122.41162422" }, { "lat": "37.59089234", "lng": "-122.41402865" }, { "lat": "37.5933155", "lng": "-122.41641054" }, { "lat": "37.59572459", "lng": "-122.41875689" }, { "lat": "37.59795493", "lng": "-122.42134262" }, { "lat": "37.60011457", "lng": "-122.42399767" }, { "lat": "37.60240224", "lng": "-122.4265399" }, { "lat": "37.60520008", "lng": "-122.42789551" }, { "lat": "37.60813618", "lng": "-122.42777573" }, { "lat": "37.61097345", "lng": "-122.42659053" }, { "lat": "37.61359414", "lng": "-122.42477627" }, { "lat": "37.61652164", "lng": "-122.42409633" }, { "lat": "37.61941491", "lng": "-122.42515597" }, { "lat": "37.62223282", "lng": "-122.42696981" }, { "lat": "37.62499411", "lng": "-122.42876044" }, { "lat": "37.62751237", "lng": "-122.43105867" }, { "lat": "37.62961128", "lng": "-122.43380726" }, { "lat": "37.63173002", "lng": "-122.43652912" }, { "lat": "37.63434333", "lng": "-122.43855737" }, { "lat": "37.63721702", "lng": "-122.43994642" }, { "lat": "37.63973671", "lng": "-122.44194609" }, { "lat": "37.64209642", "lng": "-122.44410611" }, { "lat": "37.6439212", "lng": "-122.44706014" }, { "lat": "37.64593185", "lng": "-122.44975467" }, { "lat": "37.64856629", "lng": "-122.45139107" }, { "lat": "37.65116761", "lng": "-122.45299486" }, { "lat": "37.65334007", "lng": "-122.45534515" }, { "lat": "37.65538199", "lng": "-122.45796869" }, { "lat": "37.65749297", "lng": "-122.4606685" }, { "lat": "37.6595944", "lng": "-122.46334517" }, { "lat": "37.66213336", "lng": "-122.46529514" }, { "lat": "37.66513186", "lng": "-122.46553863" }, { "lat": "37.6681835", "lng": "-122.46560385" }, { "lat": "37.67115958", "lng": "-122.46650842" }, { "lat": "37.6737871", "lng": "-122.46830709" }, { "lat": "37.67626076", "lng": "-122.47032856" }, { "lat": "37.67888283", "lng": "-122.47161778" }, { "lat": "37.681853", "lng": "-122.47152482" }, { "lat": "37.6847816", "lng": "-122.47134126" }, { "lat": "37.6876731", "lng": "-122.47090381" }, { "lat": "37.69061264", "lng": "-122.47027005" }, { "lat": "37.69348641", "lng": "-122.47026259" }, { "lat": "37.69632218", "lng": "-122.47076182" }, { "lat": "37.69914914", "lng": "-122.47129566" }, { "lat": "37.70201202", "lng": "-122.47133229" }, { "lat": "37.70486296", "lng": "-122.47116624" }, { "lat": "37.70741441", "lng": "-122.4695213" }, { "lat": "37.70957963", "lng": "-122.46701645" }, { "lat": "37.71043642", "lng": "-122.46355472" }, { "lat": "37.71046027", "lng": "-122.45988294" }, { "lat": "37.71069928", "lng": "-122.45637822" }, { "lat": "37.71224348", "lng": "-122.45340591" }, { "lat": "37.71448702", "lng": "-122.45078271" }, { "lat": "37.71693873", "lng": "-122.44871305" }, { "lat": "37.71990228", "lng": "-122.44822204" }, { "lat": "37.72291888", "lng": "-122.44775048" }, { "lat": "37.72576768", "lng": "-122.44632572" }, { "lat": "37.72805372", "lng": "-122.44386563" }, { "lat": "37.72953195", "lng": "-122.44070582" }, { "lat": "37.7307498", "lng": "-122.43723772" }, { "lat": "37.73174796", "lng": "-122.43356938" }, { "lat": "37.73216621", "lng": "-122.42992443" }, { "lat": "37.73150681", "lng": "-122.42617839" }, { "lat": "37.73152823", "lng": "-122.42250586" }, { "lat": "37.73190474", "lng": "-122.4188029" }, { "lat": "37.73208047", "lng": "-122.4151556" }, { "lat": "37.73335846", "lng": "-122.41185347" }, { "lat": "37.73467442", "lng": "-122.40896246" }, { "lat": "37.7367644", "lng": "-122.40753804" }, { "lat": "37.73918836", "lng": "-122.40786326" }, { "lat": "37.74134411", "lng": "-122.40745439" }, { "lat": "37.7433128", "lng": "-122.40606023" }, { "lat": "37.7454038", "lng": "-122.40480714" }, { "lat": "37.74791032", "lng": "-122.40401446" }, { "lat": "37.75036492", "lng": "-122.40324249" }, { "lat": "37.7530224", "lng": "-122.40280453" }, { "lat": "37.75548823", "lng": "-122.40305884" }, { "lat": "37.75750915", "lng": "-122.40390315" }, { "lat": "37.75912761", "lng": "-122.40587398" }, { "lat": "37.76147723", "lng": "-122.40613148" }];
    };
    return BGService;
}());
BGService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])()
    /**
    * @class BGService This is a wrapper for interacting with the BackgroundGeolocation plugin
    * througout the app.
    */
    ,
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_device__["a" /* Device */]])
], BGService);

//# sourceMappingURL=BGService.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map