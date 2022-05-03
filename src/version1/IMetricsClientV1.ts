import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';

import { MetricDefinitionV1 } from './MetricDefinitionV1';
import { MetricUpdateV1 } from './MetricUpdateV1';
import { MetricValueSetV1 } from './MetricValueSetV1';

/// The client interface of pip-services3-metrics service
export interface IMetricsClientV1 {
    /// Gets the metric definitions.
    /// correlationId The correlation identifier.
    getMetricDefinitions(correlationId: string): Promise<MetricDefinitionV1[]>;

    /// Gets the metric definition by name 
    /// correlationId The correlation identifier.
    /// name The name.
    getMetricDefinitionByName(correlationId: string, name: string): Promise<MetricDefinitionV1>;

    /// Gets the metrics by filter asynchronous
    /// correlationId The correlation identifier.
    /// filterThe filter.
    /// pagingThe paging.
    getMetricsByFilter(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<MetricValueSetV1>>;

    /// Updates the metric asynchronous
    /// correlationId The correlation identifier.
    /// updateThe update.
    /// maxTimeHorizon  The maximum time horizon.
    updateMetric(correlationId: string, update: MetricUpdateV1, maxTimeHorizon: number): Promise<void>;

    /// Updates the metrics asynchronous
    /// correlationId The correlation identifier.
    /// updatesThe updates.
    /// maxTimeHorizon The maximum time horizon.
    updateMetrics(correlationId: string, updates: MetricUpdateV1[], maxTimeHorizon: number): Promise<void>;
}
