/**
 * Interface for the query data request parameters
 */
export interface QueryDataParams {
  data: string;
  topK: number;
  includeMetadata?: boolean;
  includeVectors?: boolean;
  includeData?: boolean;
  filter?: string;
  namespace?: string;
}

/**
 * Interface for the query data response
 */
export interface QueryDataResponse {
  scores: Array<{
    id: string;
    score: number;
    vector?: number[];
    metadata?: Record<string, any>;
    data?: string;
  }>;
}

/**
 * Function to query data from Upstash Vector database
 * @param params - Query parameters
 * @returns Promise resolving to QueryDataResponse
 * @throws Error if the request fails
 */
export async function queryData(
  params: QueryDataParams,
): Promise<QueryDataResponse> {
  const {
    data,
    topK,
    includeMetadata = false,
    includeVectors = false,
    includeData = false,
    filter = "",
    namespace = "",
  } = params;

  const url = `${process.env.UPSTASH_VECTOR_REST_URL}/query-data/${namespace}`;
  const token = process.env.UPSTASH_VECTOR_REST_TOKEN;

  if (!url || !token) {
    throw new Error(
      "UPSTASH_VECTOR_REST_URL or UPSTASH_VECTOR_REST_TOKEN is not set in environment variables",
    );
  }

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data,
      topK,
      includeMetadata,
      includeVectors,
      includeData,
      filter,
    }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const result = await response.json();
  return result as QueryDataResponse;
}

// Example usage:
// async function main() {
//   try {
//     const result = await queryData({
//       data: "Sample query text",
//       topK: 5,
//       includeMetadata: true,
//     });
//     console.log(result);
//   } catch (error) {
//     console.error("Error querying data:", error);
//   }
// }
//
// main();
