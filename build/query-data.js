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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryData = queryData;
/**
 * Function to query data from Upstash Vector database
 * @param params - Query parameters
 * @returns Promise resolving to QueryDataResponse
 * @throws Error if the request fails
 */
function queryData(params) {
    return __awaiter(this, void 0, void 0, function () {
        var data, topK, _a, includeMetadata, _b, includeVectors, _c, includeData, _d, filter, _e, namespace, url, token, response, result;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    data = params.data, topK = params.topK, _a = params.includeMetadata, includeMetadata = _a === void 0 ? false : _a, _b = params.includeVectors, includeVectors = _b === void 0 ? false : _b, _c = params.includeData, includeData = _c === void 0 ? false : _c, _d = params.filter, filter = _d === void 0 ? "" : _d, _e = params.namespace, namespace = _e === void 0 ? "" : _e;
                    url = "".concat(process.env.UPSTASH_VECTOR_REST_URL, "/query-data/").concat(namespace);
                    token = process.env.UPSTASH_VECTOR_REST_TOKEN;
                    if (!url || !token) {
                        throw new Error("UPSTASH_VECTOR_REST_URL or UPSTASH_VECTOR_REST_TOKEN is not set in environment variables");
                    }
                    return [4 /*yield*/, fetch(url, {
                            method: "POST",
                            headers: {
                                Authorization: "Bearer ".concat(token),
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                data: data,
                                topK: topK,
                                includeMetadata: includeMetadata,
                                includeVectors: includeVectors,
                                includeData: includeData,
                                filter: filter,
                            }),
                        })];
                case 1:
                    response = _f.sent();
                    if (!response.ok) {
                        throw new Error("HTTP error! status: ".concat(response.status));
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _f.sent();
                    return [2 /*return*/, result.result];
            }
        });
    });
}
// Example usage:
// async function main() {
//   try {
//     const result = await queryData({
//       data: "Sample query text",
//       topK: 5,
//       includeMetadata: true,
//     });
//     console.log(result);
//   } catch (error) {
//     console.error("Error querying data:", error);
//   }
// }
//
// main();
