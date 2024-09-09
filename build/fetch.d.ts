/**
 * Interface representing the request parameters for fetching vectors
 */
export interface FetchVectorsRequest {
    ids: string[];
    includeMetadata?: boolean;
    includeVectors?: boolean;
    includeData?: boolean;
}
/**
 * Interface representing a single vector in the response
 */
interface Vector {
    id: string;
    vector?: number[];
    metadata?: Record<string, unknown>;
    data?: string;
    score?: number;
}
/**
 * Interface representing the response from the fetch vectors API
 */
interface FetchVectorsResponse {
    result: (Vector | null)[];
}
/**
 * Fetches vectors from the Upstash Vector database
 * @param request - The request parameters
 * @param namespace - Optional namespace (defaults to the default namespace if not provided)
 * @returns A promise that resolves to the fetched vectors
 * @throws Error if the API request fails
 */
export declare function fetchVectors(request: FetchVectorsRequest, namespace?: string): Promise<FetchVectorsResponse>;
export {};
