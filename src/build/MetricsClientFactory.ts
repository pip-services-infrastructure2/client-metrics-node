
import { Factory } from 'pip-services3-components-nodex';
import { Descriptor } from 'pip-services3-commons-nodex';

import { MetricsNullClientV1 } from '../version1/MetricsNullClientV1';
import { MetricsDirectClientV1 } from '../version1/MetricsDirectClientV1';
import { MetricsHttpClientV1 } from '../version1/MetricsHttpClientV1';

export class MetricsClientFactory extends Factory {
    public Descriptor: Descriptor = new Descriptor("service-metrics", "factory", "client", "default", "1.0");
    public ClientNullDescriptor: Descriptor = new Descriptor("service-metrics", "client", "null", "*", "1.0");
    public ClientDirectDescriptor: Descriptor = new Descriptor("service-metrics", "client", "direct", "*", "1.0");
    public ClientHttpDescriptor: Descriptor = new Descriptor("service-metrics", "client", "http", "*", "1.0");

    public constructor() {
        super();

        this.registerAsType(this.ClientNullDescriptor, MetricsNullClientV1);
        this.registerAsType(this.ClientDirectDescriptor, MetricsDirectClientV1);
        this.registerAsType(this.ClientHttpDescriptor, MetricsHttpClientV1);
    }
}

