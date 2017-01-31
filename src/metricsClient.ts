import {TenantId} from "./types";
export class MetricsClient {

  private tenantId: TenantId;
  private url: string;
  private port: number;

  constructor(builder: MetricsClientBuilder) {
    this.tenantId = builder.tenantId;
    this.url = builder.url;
    this.port = builder.setPort(port);
  }

  get tenantId() {
    return this.tenantId;
  }

  get url() {
    return this.url;
  }

  get port() {
    return this.port;
  }

  set port(port: number) {
    this.port = port;
  }
}

export class MetricsClientBuilder {
  public tenantId: TenantId;
  public url: string;
  private port: number;

  constructor(tenantId: TenantId, url: string) {
    this.tenantId = tenantId;
    this.url = url;
  }

  public setPort(value: number): MetricsClientBuilder {
    this.port = value;
    return this;
  }

  get port() {
    return this.port;
  }

  build(): MetricsClient {
    return new MetricsClient(this);
  }
}


