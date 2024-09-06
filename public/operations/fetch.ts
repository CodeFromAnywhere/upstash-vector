/**
 * Interface representing the request parameters for fetching vectors
 */
interface FetchVectorsRequest {
  ids: string[];
  includeMetadata?: boolean;
  includeVectors?: boolean;
  includeData?: boolean;
}

/**
 * Interface representing a single vector in the response
 */
interface Vector {
  id: string;
  vector?: number[];
  metadata?: Record<string, unknown>;
  data?: string;
}

/**
 * Interface representing the response from the fetch vectors API
 */
interface FetchVectorsResponse {
  result: (Vector | null)[];
}

/**
 * Fetches vectors from the Upstash Vector database
 * @param request - The request parameters
 * @param namespace - Optional namespace (defaults to the default namespace if not provided)
 * @returns A promise that resolves to the fetched vectors
 * @throws Error if the API request fails
 */
export async function fetchVectors(
  request: FetchVectorsRequest,
  namespace?: string,
): Promise<FetchVectorsResponse> {
  const url = new URL(
    `${process.env.UPSTASH_VECTOR_REST_URL}/fetch${
      namespace ? `/${namespace}` : ""
    }`,
  );

  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.UPSTASH_VECTOR_REST_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data: FetchVectorsResponse = await response.json();
  return data;
}

// Example usage:
// async function example() {
//   try {
//     const result = await fetchVectors({
//       ids: ['id1', 'id2'],
//       includeMetadata: true,
//       includeVectors: false,
//       includeData: false,
//     }, 'my-namespace');
//     console.log(result);
//   } catch (error) {
//     console.error('Error fetching vectors:', error);
//   }
// }
