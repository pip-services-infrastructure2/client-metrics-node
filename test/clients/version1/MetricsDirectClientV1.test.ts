
import { ConfigParams } from 'pip-services3-commons-nodex';
import { Descriptor } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';

import { MetricsMemoryPersistence } from 'service-metrics-node';
import { MetricsController } from 'service-metrics-node';

import { MetricsDirectClientV1 } from '../../../src/version1/MetricsDirectClientV1';
import { MetricsClientV1Fixture } from './MetricsClientV1Fixture';

suite('MetricsDirectClientV1', () => {
    let persistence: MetricsMemoryPersistence;
    let controller: MetricsController;
    let client: MetricsDirectClientV1;
    let fixture: MetricsClientV1Fixture;

    setup(async () => {
        persistence = new MetricsMemoryPersistence();
        persistence.configure(new ConfigParams());

        controller = new MetricsController();
        controller.configure(new ConfigParams());

        client = new MetricsDirectClientV1();

        let references = References.fromTuples(
            new Descriptor('service-metrics', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('service-metrics', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('service-metrics', 'client', 'direct', 'default', '1.0'), client
        );

        controller.setReferences(references);
        client.setReferences(references);

        fixture = new MetricsClientV1Fixture(client);

        await persistence.open(null);
    });

    teardown(async () => {
        await persistence.close(null);
    });

    test('Metrics CRUD Operations', async () => {
        await fixture.testMetrics();
    });

    test('Metrics definitions', async () => {
        await fixture.testDefinitions();
    });
});