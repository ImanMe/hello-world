"use strict";
exports.__esModule = true;
var OtherPoint = (function () {
    function OtherPoint(_q, _w) {
        this._q = _q;
        this._w = _w;
    }
    Object.defineProperty(OtherPoint.prototype, "q", {
        get: function () {
            return this._q;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error("value can not be less than zero");
            }
            this._q = value;
        },
        enumerable: true,
        configurable: true
    });
    OtherPoint.prototype.draw = function () {
        console.log("q is " + this._q + " w is " + this._w);
    };
    OtherPoint.prototype.getDistance = function (another) {
    };
    return OtherPoint;
}());
exports.OtherPoint = OtherPoint;
