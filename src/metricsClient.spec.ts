"use strict";

import 'jest';
require("babel-core/register");
require("babel-polyfill");

import {MetricsClient, MetricsClientBuilder} from "./metricsClient";

describe("MetricsClient", () => {

  it("Should be able to create new instance with attributes", () => {
    let metricsClient: MetricsClient = new MetricsClientBuilder("hawkular", "localhost")
      .setPort(8080)
      .build();
    expect(metricsClient.tenantId).toBe("hawkular");
    expect(metricsClient.url).toBe("localhost");
    expect(metricsClient.port).toBe(8080);
  });
});
