/**
 * Response type for the listNamespaces function
 */
export type ListNamespacesResponse = {
    result: {
        namespaces: string[];
    };
};
/**
 * Error type for the listNamespaces function
 */
export type ListNamespacesError = {
    error: string;
    status: number;
};
/**
 * Lists the names of the namespaces of an index in the Upstash Vector database.
 *
 * @returns A promise that resolves to an array of namespace names.
 * @throws {Error} If the request fails or returns an unexpected response.
 */
export declare function listNamespaces(): Promise<string[]>;
