/**
 * Resets one or all namespaces of an Upstash Vector index to its initial state by deleting all the vectors.
 * @param namespace - The namespace to reset. If not provided, the default namespace will be used.
 * @param resetAll - When true, resets all namespaces of the index.
 * @returns A promise that resolves to the API response.
 * @throws Will throw an error if the API request fails.
 */
export async function resetNamespace(
  namespace?: string,
  resetAll: boolean = false,
): Promise<{ result: string }> {
  if (
    !process.env.UPSTASH_VECTOR_REST_URL ||
    !process.env.UPSTASH_VECTOR_REST_TOKEN
  ) {
    throw new Error(
      "UPSTASH_VECTOR_REST_URL and UPSTASH_VECTOR_REST_TOKEN must be set in the environment variables.",
    );
  }

  const url = new URL(
    `${process.env.UPSTASH_VECTOR_REST_URL}/reset/${namespace || ""}`,
  );

  if (resetAll) {
    url.searchParams.append("all", "true");
  }

  const response = await fetch(url.toString(), {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${process.env.UPSTASH_VECTOR_REST_TOKEN}`,
      "Content-Type": "application/json",
    },
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

  return (await response.json()) as { result: string };
}

// Example usage:
// resetNamespace()  // Reset default namespace
// resetNamespace('my-namespace')  // Reset specific namespace
// resetNamespace(undefined, true)  // Reset all namespaces
