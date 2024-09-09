/**
 * Resets one or all namespaces of an Upstash Vector index to its initial state by deleting all the vectors.
 * @param namespace - The namespace to reset. If not provided, the default namespace will be used.
 * @param resetAll - When true, resets all namespaces of the index.
 * @returns A promise that resolves to the API response.
 * @throws Will throw an error if the API request fails.
 */
export declare function resetNamespace(namespace?: string, resetAll?: boolean): Promise<{
    result: string;
}>;
