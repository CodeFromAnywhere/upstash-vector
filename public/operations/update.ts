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
export async function updateVector(
  updateData: UpdateVectorRequest,
  namespace: string = "",
): Promise<UpdateVectorResponse> {
  const url = `${process.env.UPSTASH_VECTOR_REST_URL}/update/${namespace}`;
  const token = process.env.UPSTASH_VECTOR_REST_TOKEN;

  if (!token) {
    throw new Error(
      "UPSTASH_VECTOR_REST_TOKEN is not set in the environment variables",
    );
  }

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateData),
  });

  if (!response.ok) {
    let errorMessage: string;
    try {
      const errorData = await response.json();
      errorMessage =
        errorData.error || `HTTP error! status: ${response.status}`;
    } catch {
      errorMessage = `HTTP error! status: ${response.status}`;
    }
    return { status: response.status, message: errorMessage };
  }

  const { result }: UpdateVectorResponse = await response.json();
  return { status: response.status, result };
}

// Example usage:
// (async () => {
//   try {
//     const result = await updateVector({
//       id: 'example-id',
//       vector: [0.1, 0.2, 0.3],
//       data: 'Updated text data',
//       metadata: { key: 'value' },
//       metadataUpdateMode: 'PATCH'
//     }, 'my-namespace');
//     console.log(result);
//   } catch (error) {
//     console.error('Error updating vector:', error);
//   }
// })();
