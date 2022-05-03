"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricsClientFactory = void 0;
const pip_services3_components_nodex_1 = require("pip-services3-components-nodex");
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const MetricsNullClientV1_1 = require("../version1/MetricsNullClientV1");
const MetricsDirectClientV1_1 = require("../version1/MetricsDirectClientV1");
const MetricsHttpClientV1_1 = require("../version1/MetricsHttpClientV1");
class MetricsClientFactory extends pip_services3_components_nodex_1.Factory {
    constructor() {
        super();
        this.Descriptor = new pip_services3_commons_nodex_1.Descriptor("service-metrics", "factory", "client", "default", "1.0");
        this.ClientNullDescriptor = new pip_services3_commons_nodex_1.Descriptor("service-metrics", "client", "null", "*", "1.0");
        this.ClientDirectDescriptor = new pip_services3_commons_nodex_1.Descriptor("service-metrics", "client", "direct", "*", "1.0");
        this.ClientHttpDescriptor = new pip_services3_commons_nodex_1.Descriptor("service-metrics", "client", "http", "*", "1.0");
        this.registerAsType(this.ClientNullDescriptor, MetricsNullClientV1_1.MetricsNullClientV1);
        this.registerAsType(this.ClientDirectDescriptor, MetricsDirectClientV1_1.MetricsDirectClientV1);
        this.registerAsType(this.ClientHttpDescriptor, MetricsHttpClientV1_1.MetricsHttpClientV1);
    }
}
exports.MetricsClientFactory = MetricsClientFactory;
//# sourceMappingURL=MetricsClientFactory.js.map