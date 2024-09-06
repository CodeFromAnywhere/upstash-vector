/**
 * Deletes a namespace from the Upstash Vector database.
 *
 * @param namespace - The namespace to delete. Cannot be the default namespace (empty string).
 * @returns A promise that resolves to the API response.
 * @throws Will throw an error if the API request fails or returns an error.
 */
export async function deleteNamespace(
  namespace: string,
): Promise<{ result: string }> {
  const url = `${
    process.env.UPSTASH_VECTOR_REST_URL
  }/delete-namespace/${encodeURIComponent(namespace)}`;
  const token = process.env.UPSTASH_VECTOR_REST_TOKEN;

  if (!token) {
    throw new Error(
      "UPSTASH_VECTOR_REST_TOKEN is not set in the environment variables",
    );
  }

  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(
      `API request failed: ${errorData.error || response.statusText}`,
    );
  }

  const data: { result: string } = await response.json();
  return data;
}

// Example usage:
// (async () => {
//   try {
//     const result = await deleteNamespace('my-namespace');
//     console.log(result);
//   } catch (error) {
//     console.error('Error deleting namespace:', error);
//   }
// })();
