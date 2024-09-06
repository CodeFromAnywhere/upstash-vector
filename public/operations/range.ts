/**
 * Interface for the request body of the range vectors API
 */
interface RangeVectorsRequest {
  cursor: string;
  limit: number;
  includeMetadata?: boolean;
  includeVectors?: boolean;
  includeData?: boolean;
}

/**
 * Interface for a single vector in the response
 */
interface Vector {
  id: string;
  vector: number[];
  metadata?: Record<string, any>;
  data?: string;
}

/**
 * Interface for the response of the range vectors API
 */
interface RangeVectorsResponse {
  nextCursor: string;
  vectors: Vector[];
}

/**
 * Ranges over vectors in the Upstash Vector database
 * @param namespace - The namespace to use. When not specified, the default namespace will be used.
 * @param request - The request parameters for ranging vectors
 * @returns A promise that resolves to the range vectors response
 * @throws Will throw an error if the API request fails
 */
export async function rangeVectors(
  namespace: string = "",
  request: RangeVectorsRequest,
): Promise<RangeVectorsResponse> {
  const url = `${process.env.UPSTASH_VECTOR_REST_URL}/range/${namespace}`;
  const token = process.env.UPSTASH_VECTOR_REST_TOKEN;

  if (!token) {
    throw new Error(
      "UPSTASH_VECTOR_REST_TOKEN is not set in the environment variables",
    );
  }

  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();

  if ("error" in data) {
    throw new Error(`API error: ${data.error}`);
  }

  return data as RangeVectorsResponse;
}

// Example usage:
// async function example() {
//   try {
//     const result = await rangeVectors('', {
//       cursor: '0',
//       limit: 10,
//       includeMetadata: true,
//     });
//     console.log(result);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }
