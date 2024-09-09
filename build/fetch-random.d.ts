/**
 * Represents the response from the Fetch Random Vector API.
 */
export interface FetchRandomVectorResponse {
    result: {
        id: string;
        vector: number[];
    } | null;
}
/**
 * Fetches a random vector from the specified namespace in the Upstash Vector database.
 *
 * @param namespace - The namespace to fetch the random vector from. If not provided, the default namespace will be used.
 * @returns A promise that resolves to the fetched random vector data or null if the namespace is empty.
 * @throws An error if the API request fails or returns an unexpected response.
 */
export declare function fetchRandomVector(namespace?: string): Promise<FetchRandomVectorResponse["result"]>;
