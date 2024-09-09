/**
 * Represents the structure of a namespace in the index info response.
 */
export interface NamespaceInfo {
  vectorCount: number;
  pendingVectorCount: number;
}

/**
 * Represents the structure of the index info response.
 */
export interface IndexInfo {
  vectorCount: number;
  pendingVectorCount: number;
  indexSize: number;
  dimension: number;
  similarityFunction: string;
  namespaces: Record<string, NamespaceInfo>;
}

/**
 * Fetches information about the Upstash Vector index.
 *
 * @returns A Promise that resolves to the IndexInfo object.
 * @throws An error if the request fails or returns an unexpected response.
 */
export async function getIndexInfo(): Promise<IndexInfo> {
  const url = process.env.UPSTASH_VECTOR_REST_URL;
  const token = process.env.UPSTASH_VECTOR_REST_TOKEN;

  if (!url || !token) {
    throw new Error(
      "UPSTASH_VECTOR_REST_URL and UPSTASH_VECTOR_REST_TOKEN must be set in the environment variables.",
    );
  }

  const response = await fetch(`${url}/info`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(
      `HTTP error! status: ${response.status}, body: ${errorBody}`,
    );
  }

  const data = await response.json();

  if (!data.result) {
    throw new Error("Unexpected response structure: 'result' field is missing");
  }

  return data.result as IndexInfo;
}

// Example usage:
// getIndexInfo()
//   .then(info => console.log(info))
//   .catch(error => console.error('Error:', error));
