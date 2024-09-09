/**
 * Represents the structure of a namespace in the index info response.
 */
export interface NamespaceInfo {
    vectorCount: number;
    pendingVectorCount: number;
}
/**
 * Represents the structure of the index info response.
 */
export interface IndexInfo {
    vectorCount: number;
    pendingVectorCount: number;
    indexSize: number;
    dimension: number;
    similarityFunction: string;
    namespaces: Record<string, NamespaceInfo>;
}
/**
 * Fetches information about the Upstash Vector index.
 *
 * @returns A Promise that resolves to the IndexInfo object.
 * @throws An error if the request fails or returns an unexpected response.
 */
export declare function getIndexInfo(): Promise<IndexInfo>;
