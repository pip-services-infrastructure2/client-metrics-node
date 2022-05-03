import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { CommandableHttpClient } from 'pip-services3-rpc-nodex';

import { MetricDefinitionV1 } from './MetricDefinitionV1';
import { MetricValueSetV1 } from './MetricValueSetV1';
import { MetricUpdateV1 } from './MetricUpdateV1';
import { IMetricsClientV1 } from './IMetricsClientV1';

export class MetricsHttpClientV1 extends CommandableHttpClient implements IMetricsClientV1 {

    constructor() {
        super("v1/metrics");
    }

    public async getMetricDefinitions(correlationId: string): Promise<MetricDefinitionV1[]> {
        let timing = this.instrument(correlationId, 'metrics.get_metric_definitions');

        try {
            return await this.callCommand(
                "get_metric_definitions",
                correlationId,
                {}
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async getMetricDefinitionByName(correlationId: string, name: string): Promise<MetricDefinitionV1> {
        let timing = this.instrument(correlationId, 'metrics.get_metric_definition_by_name');

        try {
            return await this.callCommand(
                "get_metric_definition_by_name",
                correlationId,
                {
                    name: name
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async getMetricsByFilter(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<MetricValueSetV1>>  {
        let timing = this.instrument(correlationId, 'metrics.get_metrics_by_filter');

        try {
            return await this.callCommand(
                "get_metrics_by_filter",
                correlationId,
                {
                    filter: filter || new FilterParams(),
                    paging: paging || new PagingParams()
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async updateMetric(correlationId: string, update: MetricUpdateV1, maxTimeHorizon: number): Promise<void> {
        let timing = this.instrument(correlationId, 'metrics.update_metric');

        try {
            return await this.callCommand(
                "update_metric",
                correlationId,
                {
                    update: update,
                    max_time_horizon: maxTimeHorizon
                }
            );   
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }           
    }

    public async updateMetrics(correlationId: string, updates: MetricUpdateV1[], maxTimeHorizon: number): Promise<void> {
        let timing = this.instrument(correlationId, 'metrics.update_metrics');

        try {
            return await this.callCommand(
                "update_metrics",
                correlationId,
                {
                    updates: updates,
                    max_time_horizon: maxTimeHorizon
                }
            );   
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }                      
    }

}
