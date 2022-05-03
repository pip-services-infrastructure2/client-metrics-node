import { ConfigParams } from 'pip-services3-commons-nodex';
import { Descriptor } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';

import { MetricsMemoryPersistence } from 'service-metrics-node';
import { MetricsController } from 'service-metrics-node';
import { MetricsHttpServiceV1 } from 'service-metrics-node';

import { MetricsHttpClientV1 } from '../../../src/version1/MetricsHttpClientV1';
import { MetricsClientV1Fixture } from './MetricsClientV1Fixture';

suite('MetricsHttpClientV1', () => {
    let persistence: MetricsMemoryPersistence;
    let controller: MetricsController;
    let service: MetricsHttpServiceV1;
    let client: MetricsHttpClientV1;
    let fixture: MetricsClientV1Fixture;

    setup(async () => {
        persistence = new MetricsMemoryPersistence();
        persistence.configure(new ConfigParams());

        controller = new MetricsController();
        controller.configure(new ConfigParams());

        let httpConfig = ConfigParams.fromTuples(
            'connection.protocol', 'http',
            'connection.port', 3000,
            'connection.host', 'localhost'
        );

        service = new MetricsHttpServiceV1();
        service.configure(httpConfig);

        client = new MetricsHttpClientV1();
        client.configure(httpConfig);

        let references = References.fromTuples(
            new Descriptor('service-metrics', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('service-metrics', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('service-metrics', 'service', 'http', 'default', '1.0'), service,
            new Descriptor('service-metrics', 'client', 'http', 'default', '1.0'), client
        );
        controller.setReferences(references);
        service.setReferences(references);
        client.setReferences(references);

        fixture = new MetricsClientV1Fixture(client);

        await persistence.open(null);
        await service.open(null);
        await client.open(null);
    });

    teardown(async () => {
        await client.close(null);
        await service.close(null);
        await persistence.close(null);
    });

    test('Metrics CRUD Operations', async () => {
        await fixture.testMetrics();
    });

    test('Metrics definitions', async () => {
        await fixture.testDefinitions();
    });

});