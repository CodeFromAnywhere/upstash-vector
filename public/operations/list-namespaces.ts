/**
 * Response type for the listNamespaces function
 */
type ListNamespacesResponse = {
  result: {
    namespaces: string[];
  };
};

/**
 * Error type for the listNamespaces function
 */
type ListNamespacesError = {
  error: string;
  status: number;
};

/**
 * Lists the names of the namespaces of an index in the Upstash Vector database.
 *
 * @returns A promise that resolves to an array of namespace names.
 * @throws {Error} If the request fails or returns an unexpected response.
 */
export async function listNamespaces(): Promise<string[]> {
  const url = process.env.UPSTASH_VECTOR_REST_URL;
  const token = process.env.UPSTASH_VECTOR_REST_TOKEN;

  if (!url || !token) {
    throw new Error(
      "UPSTASH_VECTOR_REST_URL and UPSTASH_VECTOR_REST_TOKEN must be set in the environment variables.",
    );
  }

  try {
    const response = await fetch(`${url}/list-namespaces`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData: ListNamespacesError = await response.json();
      throw new Error(
        `HTTP error! status: ${response.status}, message: ${errorData.error}`,
      );
    }

    const data: ListNamespacesResponse = await response.json();
    return data.result.namespaces;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to list namespaces: ${error.message}`);
    } else {
      throw new Error("An unknown error occurred while listing namespaces");
    }
  }
}

// Example usage:
// (async () => {
//   try {
//     const namespaces = await listNamespaces();
//     console.log('Namespaces:', namespaces);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// })();
