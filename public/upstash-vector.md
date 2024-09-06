Title: Getting Started - Upstash Documentation

URL Source: https://upstash.com/docs/vector/overall/getstarted

Markdown Content:
Create an Index

---

Once you logged in, you can create a Vector Index by clicking on the `Create Index` button in the Vector tab.

**Name:** Type a name for your index.

**Region:** Choose the region for your index. For optimal performance, select the region closest to your applications. We plan to support additional regions and cloud providers. Feel free to send your requests to [support@upstash.com](mailto:support@upstash.com)

**Dimensions:** Select the dimensions and distance metric depending on your model.

**Free:** The free plan is suitable for small projects. It has a limit of 10,000 queries and 10,000 updates limit daily.

**Pay as You Go:** Pay as you go plan is a flexible plan with per-request-pricing. It is suitable for projects with unpredictable traffic.

**Fixed:** Fixed plan is suitable for projects with predictable traffic. It has a fixed monthly price with 1M query and 1M update limit daily.

**Pro:** Pro plan is suitable for projects with high traffic and storage needs. It has a fixed monthly price with extra security and isolation features.

**Enterprise:** If you plan to have over a billion vectors then Enterprise plan is for you. It has a fixed monthly price with extra security and isolation features. Contact us at [sales@upstash.com](mailto:sales@upstash.com) for more information.

## Insert Index

You can access data in your index using REST API or our SDKs. You can copy the sample code from the `Connect` section in the console.

```
from upstash_vector import Index

index = Index(url="UPSTASH_VECTOR_REST_URL", token="UPSTASH_VECTOR_REST_TOKEN")

index.upsert(
  vectors=[
    ("1", [0.6, 0.8], {"field": "value"}),
  ]
)
```

## Query Index

You can perform a similarity search by providing a query vector as a parameter. The dimension of the query vector must match the dimension of your index. Also, you can query by metadata filtering.

```
from upstash_vector import Index

index = Index(url="UPSTASH_VECTOR_REST_URL", token="UPSTASH_VECTOR_REST_TOKEN")

index.query(
    vector=[0.6, 0.8],
    top_k=3,
    include_metadata=True,
)
```

## Charts and Query Browser

In Upstash console, you can see the charts of your index and query your index with a simple UI. There are following charts:

- **Daily Requests:** The number of queries and updates to your index in the last 5 days.
- **Throughput:** The number of queries and updates to your index in the selected time period.
- **Latency:** The mean and P99 latency of queries and updates to your index in the selected time period.
- **Vector Count:** The number of vectors in your index in the selected time period.
- **Data Size:** The size of your index in the selected time period.
-

Title: What is Upstash Vector? - Upstash Documentation

URL Source: https://upstash.com/docs/vector/overall/whatisvector

Markdown Content:
Upstash Vector is a serverless vector database designed for working with vector embeddings.

In the domain of databases, a vector database is essential for managing numeric representations of objects(images, sounds, text, etc.) in a multi-dimensional space. These databases are focused on efficiently handling vectors for storage, retrieval, and, most importantly, querying based on similarity. They are instrumental in integrating personalized data into AI applications enabling the AI system to provide tailored answers derived from your own dataset rather than generic responses, thereby enhancing the relevance and specificity of the generated insights.

## Core Features:

- **Serverless Architecture and Pricing:** Upstash Vector operates on a serverless model, abstracting away hosting and management complexities. Engineers are billed based on API calls, ensuring a transparent and cost-effective pricing structure aligned with our general philosophy and practices across all products. See [pricing](https://upstash.com/pricing/vector) for more details.
- **Low-Cost High-Performance Queries:** Improved upon to the DiskANN\[1\], Upstash Vector enables engineers to execute queries with high recall rates and low latencies compared to exhaustive search methods. DiskANN’s efficiency significantly enhances the performance of vector queries, making it a powerful tool for data retrieval and analysis. See [Approximate Nearest Neighbor Search](https://upstash.com/docs/vector/features/algorithm) to get more insight on the tech behind the Upstash Vector.
- **Vector Similarity Functions:** Powered by DiskANN, Upstash Vector supports different similarity functions, including Euclidean distance, Cosine similarity, and Dot Product. See [Vector Similarity](https://upstash.com/docs/vector/features/similarityfunctions) for more details.
- **REST API and SDKs:** The product is equipped with a REST API and SDKs (Python and TypeScript) for seamless integration into engineering workflows. Explore the technical details of these interfaces to incorporate Upstash Vector into your codebase effortlessly.
- **Metadata Support:** Upstash Vector allows users to attach metadata to vectors, enhancing data context. This feature contributes to referencing the original content upon retrieval. See [Metadata documentation](https://upstash.com/docs/vector/features/metadata) for more details.
- **Metadata Filtering:** Upstash Vector allows users to filter out the similarity search results based on specific metadata criteria. See [Metadata Filtering documentation](https://upstash.com/docs/vector/features/filtering) for more details.

### References

1.  Subramanya, S. J., Devvrit, Kadekodi, R., Krishaswamy, R., Simhadri, H. V. (2019). _DiskANN: Fast Accurate Billion-Point Nearest Neighbor Search on a Single Node_. In Proceedings of the 33rd International Conference on Neural Information Processing Systems (NeurIPS ‘19), Article No.: 1233, Pages 13766–13776. \[[https://dl.acm.org/doi/abs/10.5555/3454287.3455520](https://dl.acm.org/doi/abs/10.5555/3454287.3455520)\]

- [Core Features:](https://upstash.com/docs/vector/overall/whatisvector#core-features)
- [References](https://upstash.com/docs/vector/overall/whatisvector#references)
-

# pricing

Title: Upstash: Serverless Data Platform

URL Source: https://upstash.com/pricing/vector

Markdown Content:
Pricing | Upstash
===============

[](https://upstash.com/)

- [Pricing](https://upstash.com/pricing)
- [Docs](https://upstash.com/docs)
- Resources
- Company 5
- Support

[Login](https://console.upstash.com/)

[](https://upstash.com/)

[Pricing](https://upstash.com/pricing)[Docs](https://upstash.com/docs)[Blog](https://upstash.com/blog)[Examples](https://upstash.com/examples)[Careers5](https://upstash.com/careers)[Customers](https://upstash.com/customers)[About](https://upstash.com/about)[Discord](https://upstash.com/discord)

[Login](https://console.upstash.com/)

# Pricing

Pay only for what you use with per-request pricing.

[Redis](https://upstash.com/pricing/redis)[Kafka](https://upstash.com/pricing/kafka)[Vector](https://upstash.com/pricing/vector)[QStash](https://upstash.com/pricing/qstash)

#### Free

##### $0

\-

Perfect for prototypes and hobby projects

---

Daily Query / Update Limit

10K

---

[Start Now](https://console.upstash.com/)

#### Pay as you go

##### $0.4

per 100K requests

For use cases with bursting traffic

---

Daily Query / Update Limit

Unlimited

---

[Start Now](https://console.upstash.com/)

#### Fixed

##### $60/ month

\-

For consistent loads with predictable costs

---

Daily Query / Update Limit

1M

---

[Start Now](https://console.upstash.com/)

#### Enterprise

For businesses with advanced needs.

[Contact Us](mailto:sales@upstash.com)

- Professional support with SLA
- Scales over a billion of vectors
- Custom configurations
- Advanced security options

[Contact Us](mailto:support@upstash.com)

## Compare Plans

Plans that scale to all sizes.

|     | Limit of 1 Free DB | Usage Based Pricing | Fixed Pricing | Fixed Pricing |
| --- | ------------------ | ------------------- | ------------- | ------------- |
|     |

#### Free

|

#### Pay as you go

##### $0.4/ 100K requests

|

#### Fixed

##### $60/ month

|

#### Pro

##### Contact Us

|  |
|  |

|

Capacity

|
| Max Vectors x Dimensions | 200Million | 2Billion | 2Billion | 100Billion |
| Max Dimensions | 1,536 | 3,072 | 3,072 | 5,000 |
| Max Namespaces | 100 | 1,000 | 1,000 | 10,000 |
| Daily Query / Update Limit | 10K | Unlimited | 1M | Unlimited |
| Max Metadata Per Vector | 48KB | 48KB | 48KB | 48KB |
| Max Data Per Vector | 1MB | 1MB | 1MB | 1MB |
| Max Data / Metadata Size | 1GB | 50GB | 50GB | 1TB |
|

Features

|
| Regions | N. Virginia, AWSIreland, AWSIowa, GCP | N. Virginia, AWSIreland, AWSIowa, GCP | N. Virginia, AWSIreland, AWS | N. Virginia, AWSIreland, AWS |
| API and SDKs | RESTPythonTypescriptGo | RESTPythonTypescriptGo | RESTPythonTypescriptGo | RESTPythonTypescriptGo |
| Live Index Updates | | | | |
| Scale to Zero | | | | |
| Sparse Vectors | Coming soon | Coming soon | Coming soon | Coming soon |
| Namespaces | | | | |
| Metadata Filtering | | | | |
| Uptime SLA | |

99.9%

|

99.9%

|

99.99%

|
|

Support

|
| Community Support | | | | |
| Email Support | | | | |
| Dedicated Support and Slack Channel | | | | |
|

Price

|
| Monthly Price | Free | None | $60 | Contact Us |
| Request Price | Free | $0.4 per 100K | None | None |
| Storage Price | Free | $0.25 per GB | $0.25 per GB | $0.25 per GB |
| Bandwidth Price | Free | Free | Free | $0.03 per GB |
| |

[Start Now](https://console.upstash.com/)

|

[Start Now](https://console.upstash.com/)

|

[Start Now](https://console.upstash.com/)

|

[Start Now](https://console.upstash.com/)

|

## FAQ

### How can I upgrade to pay as you go from free tier?

### What is the limit for topk?

### Are query and upsert requests same price?

### How is the storage cost calculated?

### Are there free trials?

### How much is the price for bandwidth?

### Is there a contract requirement for Pro Plans?

### How many indexes can I create?

### Do you have the Professional Support plan?

© 2024 Upstash, Inc. Based in California.

[Contact Us](https://upstash.com/docs/common/help/support)[Privacy Policy](https://upstash.com/trust/privacy.pdf)[Terms of Service](https://upstash.com/trust/terms.pdf)

[Status](https://status.upstash.com/)

\* Redis is a trademark of Redis Ltd. Any rights therein are reserved to Redis Ltd. Any use by Upstash is for referential purposes only and does not indicate any sponsorship, endorsement or affiliation between Redis and Upstash.

\*\* Cloudflare, the Cloudflare logo, and Cloudflare Workers are trademarks and/or registered trademarks of Cloudflare, Inc. in the United States and other jurisdictions.

# Changelog

Title: Changelog - Upstash Documentation

URL Source: https://upstash.com/docs/vector/overall/changelog

Markdown Content:

### July 2024

Added new [`HAS FIELD`](https://upstash.com/docs/vector/features/filtering#has-field) and [`HAS NOT FIELD`](https://upstash.com/docs/vector/features/filtering#has-not-field) metadata filtering operators.

### June 2024

- Implemented a new feature to store raw data in text format alongside metadata. See [Metadata and Data](https://upstash.com/docs/vector/features/metadata#data).
- Added an API for updating vector, data, or metadata. It’s also possible to update the metadata without overwriting all. See [Update Vector](https://upstash.com/docs/vector/api/endpoints/update) API.
- Added reset all namespaces API. See [Reset Namespace](https://upstash.com/docs/vector/api/endpoints/reset) API.
- Improved query APIs to send a batch of queries in a single request. See [Query](https://upstash.com/docs/vector/api/endpoints/query) API.

### May 2024

- Introduced [namespaces feature](https://upstash.com/docs/vector/features/namespaces).
- Added GCP US-Central1 region.

### April 2024

Added option to upsert and query raw data using [Upstash embedding service](https://upstash.com/docs/vector/features/embeddingmodels).

### February 2024

Implemented metadata filtering with SQL-like syntax. See [Metadata Filtering](https://upstash.com/docs/vector/features/filtering).

### January 2024

[Initial release!](https://upstash.com/blog/introducing-vector-database)

# Title: Algorithm - Upstash Documentation

URL Source: https://upstash.com/docs/vector/features/algorithm

Markdown Content:
Approximate Nearest Neighbor Search

---

The primary functionality of the vector store is straightforward: identifying the most similar vectors to a given vector. While the concept is simple, translating it into a practical product poses significant challenges.

A simple and basic approach to searching in a vector database is to perform an exhaustive search by comparing a query vector to every other vector stored in the database one by one. However, this consumes too many resources and results in very high latencies, making it not very practical. To address this problem, Approximate Nearest Neighbor (`ANN`) algorithms are used. `ANN` search approximates the true nearest neighbor, which means it might not find the absolute closest point, but it will find one that’s close enough, with a **low-latency** and by consuming **fewer resources**. In the literature, the comparison of the results of `ANNS` with exhaustive search is called the recall rate. The higher the recall rate the better the results.

Several `ANNS` algorithms, such as `HNSW`\[1\], `NSG`\[2\], and `DiskANN`\[3\], are available for use, each with its distinct characteristics. One of the difficult problems in ANN algorithms is that indexing and querying vectors may require storing the whole data in memory. When the dataset is huge, then memory requirements for indexing may exceed available memory. `DiskANN` algorithm tries to solve this problem by using disk as the main storage for indexes and for performing queries directly on disk.`DiskANN` paper acknowledges that, if you try to store your vectors in disk and use `HNSW` or `NSG`, you may end up with again very high latencies. `DiskANN` is focused on serving queries from disk with **low-latency** and **good recall rate**. And this helps Upstash Vector to be **cost-effective**, therefore cheaper compared to alternatives.

Even though `DiskANN` has its advantages, it also requires more work to be practical. Main problem is that, you can’t insert/update existing index without reindexing all the vectors. For this problem, there is another improved paper `FreshDiskANN`\[4\]. `FreshDiskANN` improves `DiskANN` via introducing a temporary index for up-to-date data in memory. Queries are served from both the temporary(up-to-date) index and also from the disk. And these temporary indexes are merged to the disk from time-to-time behind the scene.

Upstash Vector is based on `DiskANN` and `FreshDiskANN` with more improvements based on our tests and observations.

### References

1.  Malkov, Y. A., Yashunin, D. A. (2016). _Efficient and Robust Approximate Nearest Neighbor Search Using Hierarchical Navigable Small World Graphs_. CoRR, abs/1603.09320 (2016). \[[https://arxiv.org/abs/1603.09320](https://arxiv.org/abs/1603.09320)\]
2.  Fu, C., Xiang, C., Wang, C., Cai, D. (2019). _Fast Approximate Nearest Neighbor Search with Navigating Spreading-Out Graphs_. Proceedings of the VLDB, 12(5), 461–474. doi: 10.14778/3303753.3303754. \[[https://www.vldb.org/pvldb/vol12/p461-fu.pdf](https://www.vldb.org/pvldb/vol12/p461-fu.pdf)\]
3.  Subramanya, S. J., Devvrit, Kadekodi, R., Krishaswamy, R., Simhadri, H. V. (2019). _DiskANN: Fast Accurate Billion-Point Nearest Neighbor Search on a Single Node_. In Proceedings of the 33rd International Conference on Neural Information Processing Systems (NeurIPS ‘19), Article No.: 1233, Pages 13766–13776. \[[https://dl.acm.org/doi/abs/10.5555/3454287.3455520](https://dl.acm.org/doi/abs/10.5555/3454287.3455520)\]
4.  Singh, A., Subramanya, S. J., Krishnaswamy, R., Simhadri, H. V. (2021). _FreshDiskANN: A Fast and Accurate Graph-Based ANN Index for Streaming Similarity Search_. CoRR abs/2105.09613 (2021). \[[https://arxiv.org/abs/2105.09613](https://arxiv.org/abs/2105.09613)\]
5.

# Title: Vector Similarity Functions - Upstash Documentation

URL Source: https://upstash.com/docs/vector/features/similarityfunctions

Markdown Content:
When creating a vector index in Upstash Vector, you have the flexibility to choose from different vector similarity functions. Each function yields distinct query results, catering to specific use cases. Here are the three supported similarity functions:

#### Cosine Similarity

Cosine similarity measures the cosine of the angle between two vectors. It is particularly useful when the magnitude of the vectors is not essential, and the focus is on the orientation.

**Use Cases:**

- **Natural Language Processing (NLP):** Ideal for comparing document embeddings or word vectors, as it captures semantic similarity irrespective of vector magnitude.
- **Recommendation Systems:** Effective in recommending items based on user preferences or content similarities.

**Score calculation:** ` (1 + cosine_similarity(v1, v2)) / 2;`

#### Euclidean Distance

Euclidean distance calculates the straight-line distance between two vectors in a multi-dimensional space. It is well-suited for scenarios where the magnitude of vectors is crucial, providing a measure of their spatial separation.

**Use Cases:**

- **Computer Vision:** Useful in image processing tasks, such as image recognition or object detection, where the spatial arrangement of features is significant.
- **Anomaly Detection:** Valuable for detecting anomalies in datasets, as it considers both the direction and magnitude of differences between vectors.

**Score calculation:** `1 / (1 + squared_distance(v1, v2))`

#### Dot Product

The dot product measures the similarity by multiplying the corresponding components of two vectors and summing the results. It provides a measure of alignment between vectors. Note that to use dot product, the vectors needs to be normalized to be of unit length.

**Use Cases:**

- **Machine Learning Models:** Commonly used in machine learning for tasks like sentiment analysis or classification, where feature alignment is critical.
- **Collaborative Filtering:** Effective in collaborative filtering scenarios, such as recommending items based on user behavior or preferences.

**Score calculation:** ` (1 + dot_product(v1, v2)) / 2`

# Title: Metadata and Data - Upstash Documentation

URL Source: https://upstash.com/docs/vector/features/metadata

Markdown Content:
Metadata feature allows you to store context with your vectors to make a connection. There can be a couple of uses of this:

1.  You can put the source of the vector in the metadata to use in your application from the query response.
2.  You can put some metadata to further filter the results upon the query.

You can set metadata with your vector as follows:

```
from upstash_vector import Index

index = Index(
    url="UPSTASH_VECTOR_REST_URL",
    token="UPSTASH_VECTOR_REST_TOKEN",
)

index.upsert(
    [("id-0", [0.9215, 0.3897]), {"url": "https://imgur.com/z9AVZLb"}],
)
```

When you do a query or fetch, you can opt-in to retrieve the metadata as follows:

- **Query Example**

```
from upstash_vector import Index

index = Index(
    url="UPSTASH_VECTOR_REST_URL",
    token="UPSTASH_VECTOR_REST_TOKEN",
)

index.query(
    [0.9215, 0.3897],
    top_k=5,
    include_metadata=True,
)
```

```
{
  "result": [
    {
      "id": "id-0",
      "score": 1,
      "metadata": {
        "url": "https://imgur.com/z9AVZLb"
      }
    },
    {
      "id": "id-3",
      "score": 0.99961007,
      "metadata": {
        "url": "https://imgur.com/zfOPmnI"
      }
    }
  ]
}
```

Also, you can filter the results further by providing a metadata filter:

```
from upstash_vector import Index

index = Index(
    url="UPSTASH_VECTOR_REST_URL",
    token="UPSTASH_VECTOR_REST_TOKEN",
)

index.query(
    [0.9215, 0.3897],
    top_k=5,
    include_metadata=True,
    filter="url GLOB '*imgur.com*'",
)
```

See [Metadata Filtering documentation](https://upstash.com/docs/vector/features/filtering) for more details.

- **Range Example**

```
from upstash_vector import Index

index = Index(
    url="UPSTASH_VECTOR_REST_URL",
    token="UPSTASH_VECTOR_REST_TOKEN",
)

index.range(
    cursor="0",
    limit=3,
    include_metadata=True,
)
```

```
{
  "result": {
    "nextCursor": "4",
    "vectors": [
      { "id": "id-0", "metadata": { "url": "https://imgur.com/z9AVZLb" } },
      { "id": "id-1", "metadata": { "url": "https://imgur.com/a2nCEIt" } },
      { "id": "id-2", "metadata": { "url": "https://imgur.com/zfOPmnI" } }
    ]
  }
}
```

## Data

Data is another kind of information you can store per vector to attribute some context to it. Compared to metadata, it is not structured, and it can only be fetched in queries, not used to further filter them.

It is especially useful when you upsert raw text data, so that you would have access to the textual form of vector along with the embedded vector values.

It can save you from storing contextual information per vector in a separate database.

You can set both the metadata and data, or only one of them while upserting your vectors as follows:

```
from upstash_vector import Index

index = Index(
    url="UPSTASH_VECTOR_REST_URL",
    token="UPSTASH_VECTOR_REST_TOKEN",
)

index.upsert(
    [
        {
            "id": "id-0",
            "vector": [0.9215, 0.3897],
            "metadata": {"url": "https://imgur.com/z9AVZLb"},
            "data": "data-0",
        },
        {
            "id": "id-1",
            "vector": [0.3897, 0.9215],
            "data": "data-1",
        },
    ],
)
```

When a raw text data is upserted, the data will be set to the raw text data automatically:

```
from upstash_vector import Index

index = Index(
    url="UPSTASH_VECTOR_REST_URL",
    token="UPSTASH_VECTOR_REST_TOKEN",
)

index.upsert(
    [
        {
            "id": "id-2",
            "data": "Upstash is a serverless data platform.",
        },
    ],
)
```

```
from upstash_vector import Index

index = Index(
    url="UPSTASH_VECTOR_REST_URL",
    token="UPSTASH_VECTOR_REST_TOKEN",
)

result = index.query(
    data="What is Upstash?",
    include_data=True,
)

for res in result:
    print(f"{res.id}: {res.data}")
```

Similar to metadata, the data field can be requested in queries, range iterator, and fetch requests, by setting the `includeData` to `true` as shown above.

# Title: Metadata Filtering - Upstash Documentation

URL Source: https://upstash.com/docs/vector/features/filtering

Markdown Content:
You can further limit the vector similarity search by providing a filter based on a specific metadata criteria.

Queries with metadata filters only return vectors which have metadata matching with the filter.

Upstash Vector allows you to filter keys which have the following value types:

- string
- number
- boolean
- object
- array

Filtering is implemented as a combination of in and post-filtering. Every query is assigned a filtering budget, determining the number of candidate vectors that can be compared against the filter during query execution. If this budget is exceeded, the system fallbacks into post-filtering. Therefore, with highly selective filters, fewer than `topK` vectors may be returned.

## Filter Syntax

A filter has a syntax that resembles SQL, which consists of operators on object keys and boolean operators to combine them.

Assuming you have a metadata like below:

```
{
    "city": "Istanbul",
    "country": "Turkey",
    "is_capital": false,
    "population": 15460000,
    "geography": {
        "continent": "Asia",
        "coordinates": {
            "latitude": 41.0082,
            "longitude": 28.9784
        }
    },
    "economy": {
        "currency": "TRY",
        "major_industries": [
            "Tourism",
            "Textiles",
            "Finance"
        ]
    }
}
```

Then, you can query similar vectors with a filter like below:

```
from upstash_vector import Index

index = Index(
  url="UPSTASH_VECTOR_REST_URL",
  token="UPSTASH_VECTOR_REST_TOKEN",
)

index.query(
  vector=[0.9215, 0.3897],
  filter="population >= 1000000 AND geography.continent = 'Asia'",
  top_k=5,
  include_metadata=True
)
```

### Operators

#### Equals (=)

The `equals` operator filters keys whose value is equal to given literal.

It is applicable to _string_, _number_, and _boolean_ values.

```
country = 'Turkey' AND population = 15460000 AND is_capital = false
```

#### Not Equals (!=)

The `not equals` operator filters keys whose value is not equal to given literal.

It is applicable to _string_, _number_, and _boolean_ values.

```
country != 'Germany' AND population != 12500000 AND is_capital != true
```

#### Less Than (<)

The `less than` operator filters keys whose value is less than the given literal.

It is applicable to _number_ values.

```
population < 20000000 OR geography.coordinates.longitude < 30.0
```

#### Less Than or Equals (<=)

The `less than or equals` operator filters keys whose value is less than or equal to the given literal.

It is applicable to _number_ values.

```
population <= 20000000 OR geography.coordinates.longitude <= 30.0
```

#### Greater Than (>)

The `greater than` operator filters keys whose value is greater than the given literal.

It is applicable to _number_ values.

```
population > 10000000 OR geography.coordinates.latitude > 39.5
```

#### Greater Than or Equals (>=)

The `greater than or equals` operator filters keys whose value is greater than or equal to the given literal.

It is applicable to _number_ values.

```
population >= 10000000 OR geography.coordinates.latitude >= 39.5
```

#### Glob

The `glob` operator filters keys whose value matches the given UNIX glob pattern.

It is applicable to _string_ values.

It is a case sensitive operator.

The glob operator supports the following wildcards:

- `*` matches zero or more characters.
- `?` matches exactly one character.
- `[]` matches one character from the list
  - `[abc]` matches either `a`, `b`, or `c`.
  - `[a-z]` matches one of the range of characters from `a` to `z`.
  - `[^abc]` matches any one character other than `a`, `b`, or `c`.
  - `[^a-z]` matches any one character other than `a` to `z`.

For example, the filter below would only match with city names whose second character is `s` or `z`, and ends with anything other than `m` to `z`.

#### Not Glob

The `not glob` operator filters keys whose value does not match the given UNIX glob pattern.

It is applicable to _string_ values.

It has the same properties with the glob operator.

For example, the filter below would only match with city names whose first character is anything other than `A`.

#### In

The `in` operator filters keys whose value is equal to any of the given literals.

It is applicable to _string_, _number_, and _boolean_ values.

```
country IN ('Germany', 'Turkey', 'France')
```

Semantically, it is equivalent to equals operator applied to all of the given literals with `OR` boolean operator in between:

```
country = 'Germany' OR country = 'Turkey' OR country = 'France'
```

#### Not In

The `not in` operator filters keys whose value is not equal to any of the given literals.

It is applicable to _string_, _number_, and _boolean_ values.

```
economy.currency NOT IN ('USD', 'EUR')
```

Semantically, it is equivalent to not equals operator applied to all of the given literals with `AND` boolean operator in between:

```
economy.currency != 'USD' AND economy.currency != 'EUR'
```

#### Contains

The `contains` operator filters keys whose value contains the given literal.

It is applicable to `array` values.

```
economy.major_industries CONTAINS 'Tourism'
```

#### Not Contains

The `not contains` operator filters keys whose value does not contain the given literal.

It is applicable to `array` values.

```
economy.major_industries NOT CONTAINS 'Steel Production'
```

#### Has Field

The `has field` operator filters keys which having the given JSON field.

```
HAS FIELD geography.coordinates
```

#### Has Not Field

The `has not field` operator filters keys which not having the given JSON field.

```
HAS NOT FIELD geography.coordinates.longitude
```

### Boolean Operators

Operators above can be combined with `AND` and `OR` boolean operators to form compound filters.

```
country = 'Turkey' AND population > 10000000
```

Boolean operators can be grouped with parentheses to have higher precendence.

```
country = 'Turkey' AND (population > 10000000 OR is_capital = false)
```

When no parentheses are provided in ambigous filters, `AND` will have higher precendence than `OR`. So, the filter

```
country = 'Turkey' AND population > 10000000 OR is_capital = false
```

would be equivalent to

```
(country = 'Turkey' AND population > 10000000) OR is_capital = false
```

### Filtering Nested Objects

It is possible to filter nested object keys by referencing them with the `.` accessor.

Nested objects can be at arbitrary depths, so more than one `.` accessor can be used in the same identifier.

```
economy.currency != 'USD' AND geography.coordinates.latitude >= 35.0
```

### Filtering Array Elements

Apart from the `CONTAINS` and `NOT CONTAINS` operators, individual array elements can also be filtered by referencing them with the `[]` accessor by their indexes.

Indexing is zero based.

```
economy.major_industries[0] = 'Tourism'
```

Also, it is possible to index from the back using the `#` character with negative values. `#` can be thought as the number of elements in the array, so `[#-1]` would reference the last character.

```
economy.major_industries[#-1] = 'Finance'
```

### Miscellaneous

- Identifiers (the left side of the operators) should be of the form `[a-zA-Z_][a-zA-Z_0-9.[\]#-]*`. In simpler terms, they should start with characters from the English alphabet or `_`, and can continue with same characters plus numbers and other accessors like `.`, `[0]`, or `[#-1]`.
- The string literals (strings in the right side of the operators) can be either single or double quoted.
- Boolean literals are represented as `1` or `0`.
- The operators, boolean operators, and boolean literals are case insensitive.
-

# Title: Embedding Models - Upstash Documentation

URL Source: https://upstash.com/docs/vector/features/embeddingmodels

Markdown Content:
To store text in a vector database, it must first be converted into a vector, also known as an embedding. Typically, this vectorization is done by a third party.

By selecting an embedding model when you create your Upstash Vector database, you can now upsert and query raw string data when using your database instead of converting your text to a vector first. The vectorization is done automatically by your selected model.

## Upstash Embedding Models - Video Guide

Let’s look at how Upstash embeddings work, how the models we offer compare, and which model is best for your use case.

Upstash Vector comes with a variety of embedding models that score well in the [MTEB](https://huggingface.co/spaces/mteb/leaderboard) leaderboard, a benchmark for measuring the performance of embedding models. They support use cases such as classification, clustering, or retrieval.

You can choose the following general purpose models:

| Name                                                                                                    | Dimension | Sequence Length | MTEB  |
| ------------------------------------------------------------------------------------------------------- | --------- | --------------- | ----- |
| [mixedbread-ai/mxbai-embed-large-v1](https://huggingface.co/mixedbread-ai/mxbai-embed-large-v1)         | 1024      | 512             | 64.68 |
| [WhereIsAI/UAE-Large-V1](https://huggingface.co/WhereIsAI/UAE-Large-V1)                                 | 1024      | 512             | 64.64 |
| [BAAI/bge-large-en-v1.5](https://huggingface.co/BAAI/bge-large-en-v1.5)                                 | 1024      | 512             | 64.23 |
| [BAAI/bge-base-en-v1.5](https://huggingface.co/BAAI/bge-base-en-v1.5)                                   | 768       | 512             | 63.55 |
| [BAAI/bge-small-en-v1.5](https://huggingface.co/BAAI/bge-small-en-v1.5)                                 | 384       | 512             | 62.17 |
| [sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | 384       | 256             | 56.26 |
| [BAAI/bge-m3](https://huggingface.co/BAAI/bge-m3)                                                       | 1024      | 8192            | \*    |
| [google-bert/bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased)                   | 768       | 512             | 38.33 |

## Using a Model

To start using embedding models, create the index with a model of your choice.

Then, you can start upserting and querying raw text data without any extra setup.

```
from upstash_vector import Index

index = Index(
    url="UPSTASH_VECTOR_REST_URL",
    token="UPSTASH_VECTOR_REST_TOKEN",
)

index.upsert(
    [("id-0", "Upstash is a serverless data platform.", {"field": "value"})],
)
```

```
from upstash_vector import Index

index = Index(
    url="UPSTASH_VECTOR_REST_URL",
    token="UPSTASH_VECTOR_REST_TOKEN",
)

index.query(
    data="What is Upstash?",
    top_k=1,
    include_metadata=True,
)
```

- [Upstash Embedding Models - Video Guide](https://upstash.com/docs/vector/features/embeddingmodels#upstash-embedding-models-video-guide)
- [Models](https://upstash.com/docs/vector/features/embeddingmodels#models)
- [Using a Model](https://upstash.com/docs/vector/features/embeddingmodels#using-a-model)
-

# Title: Namespaces - Upstash Documentation

URL Source: https://upstash.com/docs/vector/features/namespaces

Markdown Content:
Upstash Vector allows you to partition a single index into multiple isolated namespaces. Each namespace acts as a self-contained subset of the index, and read and write requests are limited to one namespace.

Each vector index has at least one default namespace and optionally many more.

If no namespace is specified, the operations will use the default namespace, which has the name `""` (empty string).

## Using a Namespace

Namespaces are created implicitly when an upsert operation is performed, so there is no specific endpoint for creating a namespace.

For example, the code snippet below will create the namespace `ns` if it does not already exist, upsert and query the vector only on that namespace.

```
from upstash_vector import Index

index = Index(
    url="UPSTASH_VECTOR_REST_URL",
    token="UPSTASH_VECTOR_REST_TOKEN",
)

index.upsert(
    [("id-0", [0.9215, 0.3897])],
    namespace="ns",
)

index.query(
    [0.9215, 0.3897],
    top_k=5,
    namespace="ns",
)
```

Under the hood, when using a namespace, your requests are sent to `<vector-url>/<command>/namespace-name` to only be executed only against that namespace.

## Deleting a Namespace

Namespaces can be deleted by using the [Delete Namespace](https://upstash.com/docs/vector/api/endpoints/delete-namespace) API.

```
from upstash_vector import Index

index = Index(
    url="UPSTASH_VECTOR_REST_URL",
    token="UPSTASH_VECTOR_REST_TOKEN",
)

index.delete_namespace("ns")
```

## Listing Namespaces

All active namespaces can be listed by using the [List Namespaces](https://upstash.com/docs/vector/api/endpoints/list-namespaces) API.

```
from upstash_vector import Index

index = Index(
    url="UPSTASH_VECTOR_REST_URL",
    token="UPSTASH_VECTOR_REST_TOKEN",
)

index.list_namespaces()
```

- [Using a Namespace](https://upstash.com/docs/vector/features/namespaces#using-a-namespace)
- [Deleting a Namespace](https://upstash.com/docs/vector/features/namespaces#deleting-a-namespace)
- [Listing Namespaces](https://upstash.com/docs/vector/features/namespaces#listing-namespaces)
-

# Title: Roadmap - Upstash Documentation

Features

# Roadmap

Upstash Vector has several features and enhancements planned for its roadmap. These include:

**1\. Improved Availability and Performance with Replication**

Currently, each index resides in a single replica. This means that if the replica becomes unavailable, so does the index.

To address this, Upstash Vector is planning to introduce replication. This will involve creating multiple read replicas of each index, ensuring:

- **High Availability:** Even if one replica fails, others will remain accessible, maintaining index availability.
- **Reduced Latency:** Replicas can be placed in different regions, bringing the index closer to clients and reducing latency for geographically distributed users.

Was this page helpful?

YesNo

[Namespaces](https://upstash.com/docs/vector/features/namespaces)[Getting Started](https://upstash.com/docs/vector/api/get-started)

[x](https://x.com/upstash)[github](https://github.com/upstash)[discord](https://upstash.com/discord)

[Powered by Mintlify](https://mintlify.com/?utm_campaign=poweredBy&utm_medium=docs&utm_source=upstash)
