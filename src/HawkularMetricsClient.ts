
import {TenantId} from "./Types";
export class HawkularMetricsClient {

    private tenantId:TenantId;

    constructor(tenantId:TenantId){
        this.tenantId = tenantId;
    }
}
