import {MetricId, MetricTagMap, MetricType} from "./types";
import {DataPoint} from "./dataPoint";

export class Metric {
  public static create(metricType: MetricType,
                       metricId: MetricId,
                       dataPoints: DataPoint[],
                       tags?: MetricTagMap): Metric {

    return new Metric(metricType, metricId, dataPoints, tags);
  }

  public metricType: MetricType;
  public metricId: MetricId;
  public dataPoints: DataPoint[];
  public tags: Map<string, string>;

  private constructor(metricType: MetricType,
                      metricId: MetricId,
                      dataPoints: DataPoint[],
                      tags?: MetricTagMap) {

    this.metricType = metricType;
    this.metricId = metricId;
    this.dataPoints = dataPoints;
    this.tags = tags;
  }

}
