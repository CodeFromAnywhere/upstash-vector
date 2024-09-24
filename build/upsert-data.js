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
exports.upsertData = upsertData;
/**
 * Upserts (inserts or updates) the raw text data after embedding it in the Upstash Vector database.
 *
 * @param data - The data to upsert. Can be a single item or an array of items.
 * @param namespace - The namespace to use. When not specified, the default namespace will be used.
 * @returns A promise that resolves to the success response.
 * @throws Will throw an error if the request fails or returns an unexpected response.
 */
function upsertData(data_1) {
    return __awaiter(this, arguments, void 0, function (data, namespace) {
        var url, body, response, text, result;
        if (namespace === void 0) { namespace = ""; }
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "".concat(process.env.UPSTASH_VECTOR_REST_URL, "/upsert-data/").concat(namespace);
                    body = JSON.stringify(data, undefined, 2);
                    return [4 /*yield*/, fetch(url, {
                            method: "POST",
                            headers: {
                                Authorization: "Bearer ".concat(process.env.UPSTASH_VECTOR_REST_TOKEN),
                                "Content-Type": "application/json",
                            },
                            body: body,
                        })];
                case 1:
                    response = _a.sent();
                    if (!!response.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, response.text()];
                case 2:
                    text = _a.sent();
                    return [2 /*return*/, { status: response.status, message: text }];
                case 3: return [4 /*yield*/, response.json()];
                case 4:
                    result = _a.sent();
                    if (result.result !== "Success") {
                        console.log("Unexpected response: ".concat(JSON.stringify(result)));
                    }
                    return [2 /*return*/, { status: response.status, message: result }];
            }
        });
    });
}
// Example usage:
// async function example() {
//   try {
//     const result = await upsertData([
//       { id: "id-0", data: "Upstash is a serverless data platform.", metadata: { link: "upstash.com" } },
//       { id: "id-1", data: "Upstash Vector is a serverless vector database." }
//     ]);
//     console.log(result);
//   } catch (error) {
//     console.error("Error upserting data:", error);
//   }
// }
