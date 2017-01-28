"use strict";

import 'jest';
require("babel-core/register");
require("babel-polyfill");

import { HawularMetrics } from "./HawkularMetrics";

describe("HawularMetrics", () => {
    it("Should be pass sanity", () => {
        expect(typeof HawularMetrics).toBe("function");
    });

    it("Should be able to create new instance", () => {
        expect(typeof new HawularMetrics()).toBe("object");
    });
});
