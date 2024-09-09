/**
 * Deletes vectors from the Upstash Vector database.
 * @param ids - A single vector ID or an array of vector IDs to delete.
 * @param namespace - The namespace to delete vectors from. If not provided, the default namespace is used.
 * @returns A promise that resolves to the number of successfully deleted vectors.
 * @throws Will throw an error if the API request fails.
 */
export declare function deleteVectors(ids: string | string[], namespace?: string): Promise<number>;
