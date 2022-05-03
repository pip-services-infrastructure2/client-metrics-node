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
exports.MetricsNullClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
class MetricsNullClientV1 {
    getMetricDefinitionByName(correlationId, name) {
        return __awaiter(this, void 0, void 0, function* () {
            return;
        });
    }
    updateMetric(correlationId, update, maxTimeHorizon) {
        return __awaiter(this, void 0, void 0, function* () {
            return;
        });
    }
    updateMetrics(correlationId, updates, maxTimeHorizon) {
        return __awaiter(this, void 0, void 0, function* () {
            return;
        });
    }
    getMetricDefinitions(correlationId) {
        return __awaiter(this, void 0, void 0, function* () {
            return [];
        });
    }
    getMetricsByFilter(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            return new pip_services3_commons_nodex_1.DataPage();
        });
    }
}
exports.MetricsNullClientV1 = MetricsNullClientV1;
//# sourceMappingURL=MetricsNullClientV1.js.map