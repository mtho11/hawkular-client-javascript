"use strict";

import "jest";
import {Metric} from "./metric";
import {MetricType} from "./types";
import {DataPoint} from "./dataPoint";
require("babel-core/register");
require("babel-polyfill");

// Test metric client
describe("MetricsClient", () => {

  it("Should be able to create new Metric", () => {
    const metricType = MetricType.GAUGE;
    const metricId = "org.redhat";
    const dataPoints: DataPoint[] = [{timestamp: 200, value: 200}, {timestamp: 400, value: 400}];
    let metric = Metric.create(metricType, metricId, dataPoints);
    // @Todo: test for tags

    expect(metric.metricType).toBe(metricType);
    expect(metric.metricId).toBe(metricId);
    expect(metric.dataPoints).toBe(dataPoints);
  });
});
