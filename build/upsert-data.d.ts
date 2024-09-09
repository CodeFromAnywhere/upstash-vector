/**
 * Represents the data structure for upserting a single item.
 */
export interface UpsertDataItem {
    /** The id of the vector. */
    id: string;
    /** The raw text data to embed and upsert. */
    data: string;
    /** The metadata of the vector. This makes identifying vectors on retrieval easier and can be used with filters on queries. */
    metadata?: Record<string, unknown>;
}
/**
 * Represents the successful response from the upsert operation.
 */
export interface SuccessResponse {
    result: "Success";
}
/**
 * Upserts (inserts or updates) the raw text data after embedding it in the Upstash Vector database.
 *
 * @param data - The data to upsert. Can be a single item or an array of items.
 * @param namespace - The namespace to use. When not specified, the default namespace will be used.
 * @returns A promise that resolves to the success response.
 * @throws Will throw an error if the request fails or returns an unexpected response.
 */
export declare function upsertData(data: UpsertDataItem | UpsertDataItem[], namespace?: string): Promise<SuccessResponse>;
