// General Types
export type TimestampInMillis = number;

// Hawkular Metrics Types
export type MetricValue = number;
export type TenantId = string;
export type MetricId = string;
export type FeedId = string;
export type ResourceId = string;
export type ResourcePath = string;
export type ResourceType = string;
export type PathId = string;
export type MetricTagMap = Map<string, string>;

// Enum types
enum AvailabilityType {UP, DOWN, UNKNOWN}

export class MetricType {

  public static COUNTER = new MetricType("COUNTER");
  public static GAUGE = new MetricType("GAUGE");
  public static AVAILABILITY = new MetricType("AVAILABILITY");
  public static STRING = new MetricType("STRING");
  constructor(public value: string) {
  }

  public toString = () => {
    return this.value;
  };
}
