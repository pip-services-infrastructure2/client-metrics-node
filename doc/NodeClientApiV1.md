# Client API (version 1) <br/> Metrics Microservices Client SDK for Node.js

Node.js client API for Metrics microservice is a thin layer on the top of
communication protocols. It hides details related to specific protocol implementation
and provides high-level API to access the microservice for simple and productive development.

* [IMetricsClientV1 interface](#interface)
    - [getMetricDefinitions()](#operation1)
    - [getMetricDefinitionByName()](#operation2)
    - [getMetricsByFilter()](#operation3)
    - [updateMetric()](#operation4)
    - [updateMetrics()](#operation5)
* [MetricsHttpClientV1 class](#client_http)
* [MetricsDirectClientV1 class](#client_direct)
* [MetricsNullClientV1 class](#client_null)

## <a name="interface"></a> IMetricsClientV1 interface

If you are using Typescript, you can use IMetricsClientV1 as a common interface across all client implementations. 
If you are using plain Javascript, you shall not worry about IMetricsClientV1 interface. You can just expect that
all methods defined in this interface are implemented by all client classes.

```javascript
interface IMetricsClientV1 {
    getMetricDefinitions(correlationId: string): Promise<MetricDefinitionV1[]>; 
    getMetricDefinitionByName(correlationId: string, name: string): Promise<MetricDefinitionV1>;
    getMetricsByFilter(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<MetricValueSetV1>>;
    updateMetric(correlationId: string, update: MetricUpdateV1, maxTimeHorizon: number): Promise<void>;
    updateMetrics(correlationId: string, updates: MetricUpdateV1[], maxTimeHorizon: number): Promise<void>;
}
```

### <a name="operation1"></a> getMetricDefinitions(correlationId, callback)

Get metric definitions.

**Arguments:** 
- correlationId: string - id that uniquely identifies transaction
**Returns:**
- err: Error - occured error or null for success
- result: MetricDefinitionV1[] - array with retrieved metric definitions

### <a name="operation2"></a> getMetricDefinitionByName(correlationId, name, callback)

Get metric definition by name.

**Arguments:** 
- correlationId: string - id that uniquely identifies transaction
- name: string - definition name

**Returns:**
- err: Error - occured error or null for success
- result: MetricDefinitionV1 - metric definition

### <a name="operation3"></a> getMetricsByFilter(correlationId, filter, paging, callback)

Get metrics by filter

**Arguments:** 
- correlationId: string - id that uniquely identifies transaction
- filter: Object
  - name: string - (optional) unique metric name
  - names: string[] - (optional) unique metric names
  - time_horizon: number - (optional) TimeHorizon
  - dimension1: string - (optional) first dimension
  - dimension2: string - (optional) second dimension
  - dimension3: string - (optional) third dimension
- paging: Object
  - skip: int - (optional) start of page (default: 0). Operation returns paged result
  - take: int - (optional) page length (max: 100). Operation returns paged result

**Returns:**
- err: Error - occured error or null for success
- result: DataPage<MetricValueSetV1> - page with retrieved metrics value sets

### <a name="operation4"></a> updateMetric(correlationId, update, maxTimeHorizon, callback)

Updates or create if not exist metric

**Arguments:** 
- correlationId: string - (optional) unique id that identifies distributed transaction
- update: MetricUpdateV1 - metric to update or create
- maxTimeHorizon: number - maximum time horizon

**Returns:**
- err: Error - occured error or null for success

### <a name="operation5"></a> updateMetrics(correlationId, updates, maxTimeHorizon, callback)

Updates or create if not exist metrics

**Arguments:** 
- correlationId: string - (optional) unique id that identifies distributed transaction
- updates: MetricUpdateV1[] - array of metrics to update or create
- maxTimeHorizon: number - maximum time horizon

**Returns:**
- err: Error - occured error or null for success

## <a name="client_http"></a> MetricsHttpClientV1 class

MetricsHttpClientV1 is a client that implements HTTP protocol

```javascript
class MetricsHttpClientV1 extends CommandableHttpClient implements IMetricsClientV1 {
    constructor(config?: any);
    setReferences(references);
    open(correlationId);
    close(correlationId);
    getMetricDefinitions(correlationId: string): Promise<MetricDefinitionV1[]>; 
    getMetricDefinitionByName(correlationId: string, name: string): Promise<MetricDefinitionV1>;
    getMetricsByFilter(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<MetricValueSetV1>>;
    updateMetric(correlationId: string, update: MetricUpdateV1, maxTimeHorizon: number): Promise<void>;
    updateMetrics(correlationId: string, updates: MetricUpdateV1[], maxTimeHorizon: number): Promise<void>;
}
```

**Constructor config properties:** 
- connection: object - HTTP transport configuration options
  - protocol: string - HTTP protocol - 'http' or 'https' (default is 'http')
  - host: string - IP address/hostname binding (default is '0.0.0.0')
  - port: number - HTTP port number

## <a name="client_direct"></a> MetricsDirectClientV1 class

MetricsDirectClientV1 is a dummy client calls controller from the same container. 
It can be used in monolytic deployments.

```javascript
class MetricsDirectClientV1 extends DirectClient<any> implements IMetricsClientV1 {
    constructor();
    setReferences(references);
    open(correlationId, callback);
    close(correlationId, callback);
    getMetricDefinitions(correlationId: string): Promise<MetricDefinitionV1[]>; 
    getMetricDefinitionByName(correlationId: string, name: string, callback: (err: any, item: MetricDefinitionV1) => void): void;
    getMetricsByFilter(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<MetricValueSetV1>>;
    updateMetric(correlationId: string, update: MetricUpdateV1, maxTimeHorizon: number): Promise<void>;
    updateMetrics(correlationId: string, updates: MetricUpdateV1[], maxTimeHorizon: number): Promise<void>;
}
```

## <a name="client_null"></a> MetricsNullClientV1 class

MetricsNullClientV1 is a dummy client that mimics the real client but doesn't call a microservice. 
It can be useful in testing scenarios to cut dependencies on external microservices.

```javascript
class MetricsNullClientV1 implements IMetricsClientV1 {
    constructor();
    getMetricDefinitions(correlationId: string): Promise<MetricDefinitionV1[]>; 
    getMetricDefinitionByName(correlationId: string, name: string): Promise<MetricDefinitionV1>;
    getMetricsByFilter(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<MetricValueSetV1>>;
    updateMetric(correlationId: string, update: MetricUpdateV1, maxTimeHorizon: number): Promise<void>;
    updateMetrics(correlationId: string, updates: MetricUpdateV1[], maxTimeHorizon: number): Promise<void>;
    
}
```