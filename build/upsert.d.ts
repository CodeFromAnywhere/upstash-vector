/**
 * Represents a vector to be upserted.
 */
export interface VectorUpsert {
    /** The id of the vector. */
    id: string;
    /** The vector value. Should have the same dimensions as your index. */
    vector: number[];
    /** The metadata of the vector. This makes identifying vectors on retrieval easier and can be used with filters on queries. */
    metadata?: Record<string, any>;
    /** The data of the vector. This is an unstructured raw text data, which can be anything associated with this vector. */
    data?: string;
}
/**
 * Represents the successful response from the upsert operation.
 */
interface SuccessResponse {
    result: "Success";
}
/**
 * Represents an error response from the API.
 */
export interface ErrorResponse {
    error: string;
    status: number;
}
/**
 * Upserts (inserts or updates) one or multiple vectors in the specified namespace.
 *
 * @param vectors - A single vector or an array of vectors to upsert.
 * @param namespace - Optional namespace to use. If not provided, the default namespace will be used.
 * @returns A promise that resolves to the API response.
 * @throws Will throw an error if the API request fails or returns an error response.
 */
export declare function upsertVectors(vectors: VectorUpsert | VectorUpsert[], namespace?: string): Promise<SuccessResponse>;
export {};
