import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';

import { IMetricsClientV1 } from './IMetricsClientV1';
import { MetricDefinitionV1 } from './MetricDefinitionV1';
import { MetricUpdateV1 } from './MetricUpdateV1';
import { MetricValueSetV1 } from './MetricValueSetV1';

export class MetricsNullClientV1 implements IMetricsClientV1 {
    public async getMetricDefinitionByName(correlationId: string, name: string): Promise<MetricDefinitionV1> {
        return;
    }

    public async updateMetric(correlationId: string, update: MetricUpdateV1, maxTimeHorizon: number): Promise<void> {
        return;
    }

    public async updateMetrics(correlationId: string, updates: MetricUpdateV1[], maxTimeHorizon: number): Promise<void> {
        return;
    }

    public async getMetricDefinitions(correlationId: string): Promise<MetricDefinitionV1[]> {
        return [];
    }

    public async getMetricsByFilter(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<MetricValueSetV1>> {
        return new DataPage<MetricValueSetV1>();
    }
}

