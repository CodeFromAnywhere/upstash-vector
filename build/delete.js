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
exports.deleteVectors = deleteVectors;
/**
 * Deletes vectors from the Upstash Vector database.
 * @param ids - A single vector ID or an array of vector IDs to delete.
 * @param namespace - The namespace to delete vectors from. If not provided, the default namespace is used.
 * @returns A promise that resolves to the number of successfully deleted vectors.
 * @throws Will throw an error if the API request fails.
 */
function deleteVectors(ids, namespace) {
    return __awaiter(this, void 0, void 0, function () {
        var url, response, errorMessage, errorData, _a, data;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    url = new URL("/delete".concat(namespace ? "/".concat(namespace) : ""), process.env.UPSTASH_VECTOR_REST_URL);
                    return [4 /*yield*/, fetch(url.toString(), {
                            method: "DELETE",
                            headers: {
                                Authorization: "Bearer ".concat(process.env.UPSTASH_VECTOR_REST_TOKEN),
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(Array.isArray(ids) ? ids : [ids]),
                        })];
                case 1:
                    response = _b.sent();
                    if (!!response.ok) return [3 /*break*/, 6];
                    errorMessage = void 0;
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, response.json()];
                case 3:
                    errorData = _b.sent();
                    errorMessage =
                        errorData.error || "HTTP error! status: ".concat(response.status);
                    return [3 /*break*/, 5];
                case 4:
                    _a = _b.sent();
                    errorMessage = "HTTP error! status: ".concat(response.status);
                    return [3 /*break*/, 5];
                case 5: throw new Error(errorMessage);
                case 6: return [4 /*yield*/, response.json()];
                case 7:
                    data = _b.sent();
                    return [2 /*return*/, data.deleted];
            }
        });
    });
}
// Usage example:
// deleteVectors(['id1', 'id2'], 'my-namespace')
//   .then(deletedCount => console.log(`Deleted ${deletedCount} vectors`))
//   .catch(error => console.error('Error deleting vectors:', error));
