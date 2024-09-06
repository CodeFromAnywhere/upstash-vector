/**
 * Represents the response from the Fetch Random Vector API.
 */
interface FetchRandomVectorResponse {
  result: {
    id: string;
    vector: number[];
  } | null;
}

/**
 * Fetches a random vector from the specified namespace in the Upstash Vector database.
 *
 * @param namespace - The namespace to fetch the random vector from. If not provided, the default namespace will be used.
 * @returns A promise that resolves to the fetched random vector data or null if the namespace is empty.
 * @throws An error if the API request fails or returns an unexpected response.
 */
export async function fetchRandomVector(
  namespace: string = "",
): Promise<FetchRandomVectorResponse["result"]> {
  const url = `${process.env.UPSTASH_VECTOR_REST_URL}/random/${namespace}`;
  const headers = {
    Authorization: `Bearer ${process.env.UPSTASH_VECTOR_REST_TOKEN}`,
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(url, { method: "GET", headers });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: FetchRandomVectorResponse = await response.json();
    return data.result;
  } catch (error) {
    console.error("Error fetching random vector:", error);
    throw error;
  }
}

// Example usage:
// (async () => {
//   try {
//     const randomVector = await fetchRandomVector();
//     console.log('Random vector:', randomVector);
//   } catch (error) {
//     console.error('Failed to fetch random vector:', error);
//   }
// })();
