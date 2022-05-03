"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricsHttpClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_commons_nodex_2 = require("pip-services3-commons-nodex");
const pip_services3_rpc_nodex_1 = require("pip-services3-rpc-nodex");
class MetricsHttpClientV1 extends pip_services3_rpc_nodex_1.CommandableHttpClient {
    constructor() {
        super("v1/metrics");
    }
    getMetricDefinitions(correlationId) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'metrics.get_metric_definitions');
            try {
                return yield this.callCommand("get_metric_definitions", correlationId, {});
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    getMetricDefinitionByName(correlationId, name) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'metrics.get_metric_definition_by_name');
            try {
                return yield this.callCommand("get_metric_definition_by_name", correlationId, {
                    name: name
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    getMetricsByFilter(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'metrics.get_metrics_by_filter');
            try {
                return yield this.callCommand("get_metrics_by_filter", correlationId, {
                    filter: filter || new pip_services3_commons_nodex_1.FilterParams(),
                    paging: paging || new pip_services3_commons_nodex_2.PagingParams()
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    updateMetric(correlationId, update, maxTimeHorizon) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'metrics.update_metric');
            try {
                return yield this.callCommand("update_metric", correlationId, {
                    update: update,
                    max_time_horizon: maxTimeHorizon
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    updateMetrics(correlationId, updates, maxTimeHorizon) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'metrics.update_metrics');
            try {
                return yield this.callCommand("update_metrics", correlationId, {
                    updates: updates,
                    max_time_horizon: maxTimeHorizon
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
}
exports.MetricsHttpClientV1 = MetricsHttpClientV1;
//# sourceMappingURL=MetricsHttpClientV1.js.map