/**
 * Deletes a namespace from the Upstash Vector database.
 *
 * @param namespace - The namespace to delete. Cannot be the default namespace (empty string).
 * @returns A promise that resolves to the API response.
 * @throws Will throw an error if the API request fails or returns an error.
 */
export declare function deleteNamespace(namespace: string): Promise<{
    result: string;
}>;
