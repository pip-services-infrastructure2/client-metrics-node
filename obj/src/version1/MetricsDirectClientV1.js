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
exports.MetricsDirectClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_commons_nodex_2 = require("pip-services3-commons-nodex");
const pip_services3_commons_nodex_3 = require("pip-services3-commons-nodex");
const pip_services3_rpc_nodex_1 = require("pip-services3-rpc-nodex");
class MetricsDirectClientV1 extends pip_services3_rpc_nodex_1.DirectClient {
    constructor() {
        super();
        this._dependencyResolver.put("controller", new pip_services3_commons_nodex_1.Descriptor("service-metrics", "controller", "*", "*", "*"));
    }
    getMetricDefinitions(correlationId) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'metrics.get_metric_definitions');
            try {
                return yield this._controller.getMetricDefinitions(correlationId);
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
                return yield this._controller.getMetricDefinitionByName(correlationId, name);
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
            filter = filter || new pip_services3_commons_nodex_2.FilterParams();
            paging = paging || new pip_services3_commons_nodex_3.PagingParams();
            let timing = this.instrument(correlationId, 'metrics.get_metrics_by_filter');
            try {
                return yield this._controller.getMetricsByFilter(correlationId, filter, paging);
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
                return yield this._controller.updateMetric(correlationId, update, maxTimeHorizon);
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
                return yield this._controller.updateMetrics(correlationId, updates, maxTimeHorizon);
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
exports.MetricsDirectClientV1 = MetricsDirectClientV1;
//# sourceMappingURL=MetricsDirectClientV1.js.map