"use strict";

import 'jest';
import {Metric} from "./metric";
import {MetricType} from "./types";
import {DataPoint} from "./dataPoint";
require("babel-core/register");
require("babel-polyfill");


describe("MetricsClient", () => {

  it("Should be pass Metric sanity", () => {
    expect(typeof Metric).toBe("function");
  });

  it("Should be able to create new Metric", () => {
    const metricId = "org.redhat";
    const dataPoints: DataPoint[] = [{timestamp: 200, value: 200}, {timestamp: 400, value: 400}];
    let metric = Metric.create(MetricType.GAUGE, metricId, dataPoints);
    console.log('***' + metric.metricId);
    //expect(metric.MetricId().toBe(metricId));
    //expect(metric.DataPoints().toBe(dataPoints));

    //expect(metricsClient.Url.toBeEqual("localhost"));
  });
});
