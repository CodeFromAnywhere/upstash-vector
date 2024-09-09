/**
 * Interface for the request body of the range vectors API
 */
export interface RangeVectorsRequest {
    cursor: string;
    limit: number;
    includeMetadata?: boolean;
    includeVectors?: boolean;
    includeData?: boolean;
}
/**
 * Interface for a single vector in the response
 */
interface Vector {
    id: string;
    vector: number[];
    metadata?: Record<string, any>;
    data?: string;
}
/**
 * Interface for the response of the range vectors API
 */
export interface RangeVectorsResponse {
    nextCursor: string;
    vectors: Vector[];
}
/**
 * Ranges over vectors in the Upstash Vector database
 * @param namespace - The namespace to use. When not specified, the default namespace will be used.
 * @param request - The request parameters for ranging vectors
 * @returns A promise that resolves to the range vectors response
 * @throws Will throw an error if the API request fails
 */
export declare function rangeVectors(namespace: string | undefined, request: RangeVectorsRequest): Promise<RangeVectorsResponse>;
export {};
