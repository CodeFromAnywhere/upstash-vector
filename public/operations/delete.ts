/**
 * Deletes vectors from the Upstash Vector database.
 * @param ids - A single vector ID or an array of vector IDs to delete.
 * @param namespace - The namespace to delete vectors from. If not provided, the default namespace is used.
 * @returns A promise that resolves to the number of successfully deleted vectors.
 * @throws Will throw an error if the API request fails.
 */
export async function deleteVectors(
  ids: string | string[],
  namespace?: string,
): Promise<number> {
  const url = new URL(
    `/delete${namespace ? `/${namespace}` : ""}`,
    process.env.UPSTASH_VECTOR_REST_URL,
  );

  const response = await fetch(url.toString(), {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${process.env.UPSTASH_VECTOR_REST_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Array.isArray(ids) ? ids : [ids]),
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
    throw new Error(errorMessage);
  }

  const data = await response.json();
  return data.deleted;
}

// Usage example:
// deleteVectors(['id1', 'id2'], 'my-namespace')
//   .then(deletedCount => console.log(`Deleted ${deletedCount} vectors`))
//   .catch(error => console.error('Error deleting vectors:', error));
