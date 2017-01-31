"use strict";

import 'jest';
require("babel-core/register");
require("babel-polyfill");

import {MetricsClient, MetricsClientBuilder} from "./metricsClient";

describe("MetricsClient", () => {
  // it("Should be pass sanity", () => {
  //   expect(typeof MetricsClient).toBe("function");
  // });

  it("Should be able to create new instance with attributes", () => {
    let metricsClient = new MetricsClientBuilder("hawk", "localhost")
      .setPort(8080)
      .build();
    console.log('****' + metricsClient.tenantId);
    expect(metricsClient.tenantId.toBe("hawk"));
    //expect(metricsClient.Url.toBeEqual("localhost"));
  });
});
