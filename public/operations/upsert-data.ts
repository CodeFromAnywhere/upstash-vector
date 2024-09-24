/**
 * Represents the data structure for upserting a single item.
 */
export interface UpsertDataItem {
  /** The id of the vector. */
  id: string;
  /** The raw text data to embed and upsert. */
  data: string;
  /** The metadata of the vector. This makes identifying vectors on retrieval easier and can be used with filters on queries. */
  metadata?: Record<string, any>;
}

/**
 * Upserts (inserts or updates) the raw text data after embedding it in the Upstash Vector database.
 *
 * @param data - The data to upsert. Can be a single item or an array of items.
 * @param namespace - The namespace to use. When not specified, the default namespace will be used.
 * @returns A promise that resolves to the success response.
 * @throws Will throw an error if the request fails or returns an unexpected response.
 */
export async function upsertData(
  data: UpsertDataItem | UpsertDataItem[],
  namespace: string = "",
): Promise<{
  status: number;
  message?: string;
}> {
  const url = `${process.env.UPSTASH_VECTOR_REST_URL}/upsert-data/${namespace}`;
  const body = JSON.stringify(data, undefined, 2);
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.UPSTASH_VECTOR_REST_TOKEN}`,
      "Content-Type": "application/json",
    },
    body,
  });

  if (!response.ok) {
    const text = await response.text();
    return { status: response.status, message: text };
  }

  const result = await response.json();

  if (result.result !== "Success") {
    console.log(`Unexpected response: ${JSON.stringify(result)}`);
  }

  return { status: response.status, message: result };
}

// Example usage:
// async function example() {
//   try {
//     const result = await upsertData([
//       { id: "id-0", data: "Upstash is a serverless data platform.", metadata: { link: "upstash.com" } },
//       { id: "id-1", data: "Upstash Vector is a serverless vector database." }
//     ]);
//     console.log(result);
//   } catch (error) {
//     console.error("Error upserting data:", error);
//   }
// }
