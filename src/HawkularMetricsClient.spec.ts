"use strict";

import 'jest';
require("babel-core/register");
require("babel-polyfill");

import { HawkularMetricsClient } from "./HawkularMetricsClient";

describe("HawkularMetricsClient", () => {
    it("Should be pass sanity", () => {
        expect(typeof HawkularMetricsClient).toBe("function");
    });

    it("Should be able to create new instance", () => {
        expect(typeof new HawkularMetricsClient()).toBe("object");
    });
});
