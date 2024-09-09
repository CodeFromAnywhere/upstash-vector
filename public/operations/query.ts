/**
 * Represents the query parameters for the vector search.
 */
export interface QueryParams {
  /** The query vector. Should have the same dimensions as your index. */
  vector: number[];
  /** The total number of vectors to receive as a query result. Default is 10. */
  topK?: number;
  /** Whether to include the metadata of the vectors in the response. Default is false. */
  includeMetadata?: boolean;
  /** Whether to include the vector values in the response. Default is false. */
  includeVectors?: boolean;
  /** Whether to include the data of the vectors in the response. Default is false. */
  includeData?: boolean;
  /** Metadata filter to apply. */
  filter?: string;
}

/**
 * Represents a single result item from the vector query.
 */
export interface QueryResultItem {
  /** The id of the vector. */
  id: string;
  /** The similarity score of the vector. */
  score: number;
  /** The vector value. Only included if includeVectors is true. */
  vector?: number[];
  /** The metadata of the vector, if any. Only included if includeMetadata is true. */
  metadata?: Record<string, unknown>;
  /** The unstructured data of the vector, if any. Only included if includeData is true. */
  data?: string;
}

/**
 * Represents the response from the vector query API.
 */
export interface QueryResponse {
  result: QueryResultItem[];
}

/**
 * Queries the approximate nearest neighbors of a vector in the Upstash Vector database.
 *
 * @param params - The query parameters.
 * @param namespace - Optional namespace to use. If not provided, the default namespace will be used.
 * @returns A promise that resolves to the query response.
 * @throws Will throw an error if the API request fails or returns an error status.
 */
export async function queryVectors(
  params: QueryParams,
  namespace?: string,
): Promise<QueryResponse> {
  const url = `${process.env.UPSTASH_VECTOR_REST_URL}/query${
    namespace ? `/${namespace}` : ""
  }`;
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
    body: JSON.stringify(params),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(
      `API request failed with status ${response.status}: ${errorBody}`,
    );
  }

  return response.json() as Promise<QueryResponse>;
}

// Example usage:
// async function example() {
//   try {
//     const result = await queryVectors({
//       vector: [0.1, 0.2, 0.3],
//       topK: 5,
//       includeMetadata: true,
//     });
//     console.log(result);
//   } catch (error) {
//     console.error('Error querying vectors:', error);
//   }
// }
