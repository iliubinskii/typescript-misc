import type { PartialRecord } from "../../types";
export declare enum HttpHeader {
    accept = "Accept",
    acceptLanguage = "Accept-Language",
    authorization = "Authorization",
    contentType = "Content-Type"
}
export declare enum HttpMethod {
    delete = "delete",
    get = "get",
    post = "post"
}
export declare enum PromiseType {
    createDb = "createDb",
    dbRequest = "dbRequest",
    destroyDb = "destroyDb",
    httpRequest = "httpRequest",
    navigation = "navigation"
}
export declare enum RelativeDate {
    endOfDay = "endOfDay",
    endOfHour = "endOfHour",
    endOfMonth = "endOfMonth",
    endOfWeek = "endOfWeek",
    now = "now",
    startOfDay = "startOfDay",
    startOfHour = "startOfHour",
    startOfMonth = "startOfMonth",
    startOfWeek = "startOfWeek"
}
export declare enum TimeUnit {
    day = "day",
    days = "days",
    hour = "hour",
    hours = "hours",
    minute = "minute",
    minutes = "minutes",
    month = "month",
    months = "months",
    week = "week",
    weeks = "weeks",
    year = "year",
    years = "years"
}
export type HTTPHeaders = PartialRecord<HttpHeader, string>;
export type Sign = "-" | "+";
export type TimeInterval = readonly [number, TimeUnit];
//# sourceMappingURL=index.d.ts.map