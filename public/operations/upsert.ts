/**
 * Represents a vector to be upserted.
 */
export interface VectorUpsert {
  /** The id of the vector. */
  id: string;
  /** The vector value. Should have the same dimensions as your index. */
  vector: number[];
  /** The metadata of the vector. This makes identifying vectors on retrieval easier and can be used with filters on queries. */
  metadata?: Record<string, any>;
  /** The data of the vector. This is an unstructured raw text data, which can be anything associated with this vector. */
  data?: string;
}

/**
 * Represents the successful response from the upsert operation.
 */
interface SuccessResponse {
  result: "Success";
}

/**
 * Represents an error response from the API.
 */
export interface ErrorResponse {
  error: string;
  status: number;
}

/**
 * Upserts (inserts or updates) one or multiple vectors in the specified namespace.
 *
 * @param vectors - A single vector or an array of vectors to upsert.
 * @param namespace - Optional namespace to use. If not provided, the default namespace will be used.
 * @returns A promise that resolves to the API response.
 * @throws Will throw an error if the API request fails or returns an error response.
 */
export async function upsertVectors(
  vectors: VectorUpsert | VectorUpsert[],
  namespace?: string,
): Promise<SuccessResponse> {
  const url = new URL(
    `/upsert${namespace ? `/${namespace}` : ""}`,
    process.env.UPSTASH_VECTOR_REST_URL,
  );

  const response = await fetch(url.toString(), {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.UPSTASH_VECTOR_REST_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(vectors),
  });

  if (!response.ok) {
    const errorData: ErrorResponse = await response.json();
    throw new Error(`API error: ${errorData.error}`);
  }

  return response.json();
}

// Example usage:
// async function exampleUsage() {
//   try {
//     const result = await upsertVectors([
//       { id: "id-0", vector: [0.1, 0.2], metadata: { link: "upstash.com" } },
//       { id: "id-1", vector: [0.2, 0.3] }
//     ]);
//     console.log(result);
//   } catch (error) {
//     console.error("Error upserting vectors:", error);
//   }
// }
