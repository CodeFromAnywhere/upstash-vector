/**
 * Interface for the update vector request body
 */
export interface UpdateVectorRequest {
    id: string;
    vector?: number[];
    data?: string;
    metadata?: Record<string, any>;
    metadataUpdateMode?: "OVERWRITE" | "PATCH";
}
/**
 * Interface for the update vector response
 */
export interface UpdateVectorResponse {
    status: number;
    message?: string;
    result?: {
        updated: number;
    };
}
/**
 * Updates a vector, data, or metadata in the Upstash Vector database.
 *
 * @param {UpdateVectorRequest} updateData - The data to update.
 * @param {string} [namespace=''] - The namespace to use. When no namespace is specified, the default namespace will be used.
 * @returns {Promise<UpdateVectorResponse>} A promise that resolves to the update response.
 * @throws {Error} If the request fails or returns an unexpected response.
 */
export declare function updateVector(updateData: UpdateVectorRequest, namespace?: string): Promise<UpdateVectorResponse>;
