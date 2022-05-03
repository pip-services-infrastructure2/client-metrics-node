import { Descriptor } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { DirectClient } from 'pip-services3-rpc-nodex';

import { IMetricsClientV1 } from './IMetricsClientV1';
import { MetricDefinitionV1 } from './MetricDefinitionV1';
import { MetricUpdateV1 } from './MetricUpdateV1';
import { TimeHorizonV1 } from './TimeHorizonV1';
import { MetricValueSetV1 } from './MetricValueSetV1';

export class MetricsDirectClientV1 extends DirectClient<any> implements IMetricsClientV1 {
    public constructor() {
        super();
        this._dependencyResolver.put("controller", new Descriptor("service-metrics", "controller", "*", "*", "*"));
    }

    public async getMetricDefinitions(correlationId: string): Promise<MetricDefinitionV1[]> {
        let timing = this.instrument(correlationId, 'metrics.get_metric_definitions');
        
        try {
            return await this._controller.getMetricDefinitions(correlationId);
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
            return await this._controller.getMetricDefinitionByName(correlationId, name);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async getMetricsByFilter(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<MetricValueSetV1>> {
        filter = filter || new FilterParams();
        paging = paging || new PagingParams();

        let timing = this.instrument(correlationId, 'metrics.get_metrics_by_filter');
        
        try {
            return await this._controller.getMetricsByFilter(correlationId, filter, paging);
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
            return await this._controller.updateMetric(correlationId, update, maxTimeHorizon);
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
            return await this._controller.updateMetrics(correlationId, updates, maxTimeHorizon);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }
}

