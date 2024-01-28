"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeUnit = exports.RelativeDate = exports.PromiseType = exports.HttpMethod = exports.HttpHeader = void 0;
var HttpHeader;
(function (HttpHeader) {
    // eslint-disable-next-line misc/consistent-enum-members -- Ok
    HttpHeader["accept"] = "Accept";
    // eslint-disable-next-line misc/consistent-enum-members -- Ok
    HttpHeader["acceptLanguage"] = "Accept-Language";
    // eslint-disable-next-line misc/consistent-enum-members -- Ok
    HttpHeader["authorization"] = "Authorization";
    // eslint-disable-next-line misc/consistent-enum-members -- Ok
    HttpHeader["contentType"] = "Content-Type";
})(HttpHeader || (exports.HttpHeader = HttpHeader = {}));
var HttpMethod;
(function (HttpMethod) {
    HttpMethod["delete"] = "delete";
    HttpMethod["get"] = "get";
    HttpMethod["post"] = "post";
})(HttpMethod || (exports.HttpMethod = HttpMethod = {}));
var PromiseType;
(function (PromiseType) {
    PromiseType["createDb"] = "createDb";
    PromiseType["dbRequest"] = "dbRequest";
    PromiseType["destroyDb"] = "destroyDb";
    PromiseType["httpRequest"] = "httpRequest";
    PromiseType["navigation"] = "navigation";
})(PromiseType || (exports.PromiseType = PromiseType = {}));
var RelativeDate;
(function (RelativeDate) {
    RelativeDate["endOfDay"] = "endOfDay";
    RelativeDate["endOfHour"] = "endOfHour";
    RelativeDate["endOfMonth"] = "endOfMonth";
    RelativeDate["endOfWeek"] = "endOfWeek";
    RelativeDate["now"] = "now";
    RelativeDate["startOfDay"] = "startOfDay";
    RelativeDate["startOfHour"] = "startOfHour";
    RelativeDate["startOfMonth"] = "startOfMonth";
    RelativeDate["startOfWeek"] = "startOfWeek";
})(RelativeDate || (exports.RelativeDate = RelativeDate = {}));
var TimeUnit;
(function (TimeUnit) {
    TimeUnit["day"] = "day";
    TimeUnit["days"] = "days";
    TimeUnit["hour"] = "hour";
    TimeUnit["hours"] = "hours";
    TimeUnit["minute"] = "minute";
    TimeUnit["minutes"] = "minutes";
    TimeUnit["month"] = "month";
    TimeUnit["months"] = "months";
    TimeUnit["week"] = "week";
    TimeUnit["weeks"] = "weeks";
    TimeUnit["year"] = "year";
    TimeUnit["years"] = "years";
})(TimeUnit || (exports.TimeUnit = TimeUnit = {}));
//# sourceMappingURL=index.js.map