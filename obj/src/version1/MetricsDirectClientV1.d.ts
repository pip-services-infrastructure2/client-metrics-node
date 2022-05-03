import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { DirectClient } from 'pip-services3-rpc-nodex';
import { IMetricsClientV1 } from './IMetricsClientV1';
import { MetricDefinitionV1 } from './MetricDefinitionV1';
import { MetricUpdateV1 } from './MetricUpdateV1';
import { MetricValueSetV1 } from './MetricValueSetV1';
export declare class MetricsDirectClientV1 extends DirectClient<any> implements IMetricsClientV1 {
    constructor();
    getMetricDefinitions(correlationId: string): Promise<MetricDefinitionV1[]>;
    getMetricDefinitionByName(correlationId: string, name: string): Promise<MetricDefinitionV1>;
    getMetricsByFilter(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<MetricValueSetV1>>;
    updateMetric(correlationId: string, update: MetricUpdateV1, maxTimeHorizon: number): Promise<void>;
    updateMetrics(correlationId: string, updates: MetricUpdateV1[], maxTimeHorizon: number): Promise<void>;
}