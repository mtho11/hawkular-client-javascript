import {TenantId} from "./types";

export class MetricsClient {
  private _tenantId: TenantId;
  private _url: string;
  private _port: number;

  constructor(builder: MetricsClientBuilder) {
    this._tenantId = builder.tenantId;
    this._url = builder.url;
    this._port = builder.port;
  }

  get tenantId(): TenantId {
    return this._tenantId;
  }

  get url() {
    return this._url;
  }

  get port() {
    return this._port;
  }

  set port(port: number) {
    this._port = port;
  }

  toString() {
    return this.url;
  }
}

export class MetricsClientBuilder {
  private _tenantId: TenantId;
  private _url: string;
  private _port: number;

  constructor(tenantId: TenantId, url: string) {
    this._tenantId = tenantId;
    this._url = url;
  }

  public setPort(port: number): MetricsClientBuilder {
    this._port = port;
    return this;
  }

  get port() {
    return this._port;
  }

  get tenantId(): TenantId {
    return this._tenantId;
  }

  get url() {
    return this._url;
  }

  public build(): MetricsClient {
    return new MetricsClient(this);
  }
}
