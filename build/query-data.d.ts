/**
 * Interface for the query data request parameters
 */
export interface QueryDataParams {
    data: string;
    topK: number;
    includeMetadata?: boolean;
    includeVectors?: boolean;
    includeData?: boolean;
    filter?: string;
    namespace?: string;
}
/**
 * Function to query data from Upstash Vector database
 * @param params - Query parameters
 * @returns Promise resolving to QueryDataResponse
 * @throws Error if the request fails
 */
export declare function queryData(params: QueryDataParams): Promise<Array<{
    id: string;
    score: number;
    vector?: number[];
    metadata?: Record<string, any>;
    data?: string;
}>>;
