const assert = require('chai').assert;

import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';

import { IMetricsClientV1 } from '../../../src/version1/IMetricsClientV1'
import { MetricUpdateV1 } from '../../../src/version1/MetricUpdateV1';
import { TimeHorizonV1 } from '../../../src/version1/TimeHorizonV1';
import { MetricValueSetV1 } from '../../../src/version1/MetricValueSetV1';
import { MetricDefinitionV1 } from '../../../src/version1/MetricDefinitionV1';

export class MetricsClientV1Fixture {
    private _client: IMetricsClientV1;

    public constructor(client: IMetricsClientV1) {
        assert.isNotNull(client);
        this._client = client;
    }

    public async testMetrics() {
        // Update metric once
        await this._client.updateMetric(
            null,
            <MetricUpdateV1>{
                name: "metric1",
                dimension1: "A",
                dimension2: "B",
                dimension3: null,
                year: 2018,
                month: 8,
                day: 26,
                hour: 12,
                value: 123
            },
            TimeHorizonV1.Hour
        );

        // Update metric second time
        await this._client.updateMetrics(
            null,
            [
                <MetricUpdateV1>{
                    name: "metric1",
                    dimension1: "A",
                    dimension2: "B",
                    dimension3: null,
                    year: 2018,
                    month: 8,
                    day: 26,
                    hour: 13,
                    value: 321
                }
            ],
            TimeHorizonV1.Hour
        );

        // Get total metric
        let page = await this._client.getMetricsByFilter(null, FilterParams.fromTuples("name", "metric1"), new PagingParams());

        assert.isObject(page);
        assert.equal(1, page.data.length);

        let set: MetricValueSetV1;
        set = page.data[0];
        assert.equal("metric1", set.name);
        assert.equal(TimeHorizonV1.Total, set.time_horizon);
        assert.equal("A", set.dimension1);
        assert.equal("B", set.dimension2);
        assert.isNull(set.dimension3);
        assert.equal(1, set.values.length);

        let value = set.values[0];
        assert.equal(444, value.sum);
        assert.equal(123, value.min);
        assert.equal(321, value.max);
        assert.equal(2, value.count);

        // Get hour metric
        page = await this._client.getMetricsByFilter(
            null,
            FilterParams.fromTuples(
                "name", "metric1",
                "time_horizon", "hour",
                "from_year", 2018,
                "from_month", 8,
                "from_day", 26,
                "from_hour", 0,
                "to_year", 2018,
                "to_month", 8,
                "to_day", 26,
                "to_hour", 23
            ),
            new PagingParams()
        );

        assert.equal(1, page.data.length);
        set = page.data[0];
        assert.equal("metric1", set.name);
        assert.equal(TimeHorizonV1.Hour, set.time_horizon);
        assert.equal("A", set.dimension1);
        assert.equal("B", set.dimension2);
        assert.isNull(set.dimension3);

        assert.equal(2, set.values.length);
        value = set.values[0];
        assert.equal(2018, value.year);
        assert.equal(8, value.month);
        assert.equal(26, value.day);
        assert.equal(12, value.hour);
        assert.equal(123, value.sum);
        assert.equal(123, value.min);
        assert.equal(123, value.max);
        assert.equal(1, value.count);

        value = set.values[1];
        assert.equal(2018, value.year);
        assert.equal(8, value.month);
        assert.equal(26, value.day);
        assert.equal(13, value.hour);
        assert.equal(321, value.sum);
        assert.equal(321, value.min);
        assert.equal(321, value.max);
        assert.equal(1, value.count);
    }

    public async testDefinitions() {
        // Update metric once
        // Update metric second time
        await this._client.updateMetrics(
            null,
            [
                <MetricUpdateV1>{
                    name: "metric2",
                    dimension1: "A",
                    dimension2: "B",
                    dimension3: null,
                    year: 2018,
                    month: 8,
                    day: 26,
                    hour: 12,
                    value: 123
                },
                <MetricUpdateV1>{
                    name: "metric2",
                    dimension1: "A",
                    dimension2: "C",
                    dimension3: null,
                    year: 2018,
                    month: 8,
                    day: 26,
                    hour: 13,
                    value: 321
                }
            ],
            TimeHorizonV1.Hour
        );

        // Get all definitions
        let definitions = await this._client.getMetricDefinitions(null);

        assert.equal(1, definitions.length);
        let definition: MetricDefinitionV1 = definitions[0];
        assert.equal("metric2", definition.name);
        assert.equal(1, definition.dimension1.length);
        assert.equal("A", definition.dimension1[0]);
        assert.equal(2, definition.dimension2.length);
        assert.equal("B", definition.dimension2[0]);
        assert.equal("C", definition.dimension2[1]);
        assert.empty(definition.dimension3);

        // Get a single definition
        definition = await this._client.getMetricDefinitionByName(null, "metric2");

        assert.equal("metric2", definition.name);
    }
}

