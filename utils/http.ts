export async function getRestaurants() {
  const response = await fetch(
    "https://firestore.googleapis.com/v1/projects/nextjs-test-8e44c/databases/(default)/documents/restaurants?key=" +
      process.env.FIREBASE_API_KEY,
    {
      // cache: "no-store", // data shouldn't cache
    }
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
}

export interface SearchParams {
  query?: string;
  filters?: string;
  perPage?: number;
  pageIndex?: number;
}

export async function searchRestaurants(options: SearchParams = {}) {
  const { query = "*", filters = "", perPage = 20, pageIndex = 0 } = options;

  const ALGOLIA_API_KEY = process.env.NEXT_PUBLIC_ALGOLIA_API_KEY;
  const ALGOLIA_APPLICATION_ID = process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID;

  if (!ALGOLIA_API_KEY || !ALGOLIA_APPLICATION_ID) {
    throw new Error(
      "Algolia API key or Application ID is not set in the environment variables"
    );
  }

  const requestUrl = `https://${ALGOLIA_APPLICATION_ID}-dsn.algolia.net/1/indexes/restaurants?query=${query}&hitsPerPage=${perPage}&page=${pageIndex}&attributesToHighlight=%5B%5D&filters=${filters}`;
  console.log(requestUrl);

  try {
    const response = await fetch(requestUrl, {
      headers: new Headers({
        "X-Algolia-API-Key": ALGOLIA_API_KEY,
        "X-Algolia-Application-Id": ALGOLIA_APPLICATION_ID,
      }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return await response.json();
  } catch (error: any) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
}

export async function searchMenu(options: SearchParams = {}) {
  const { query = "*", filters = "", perPage = 50, pageIndex = 0 } = options;

  const ALGOLIA_API_KEY = process.env.NEXT_PUBLIC_ALGOLIA_API_KEY;
  const ALGOLIA_APPLICATION_ID = process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID;

  if (!ALGOLIA_API_KEY || !ALGOLIA_APPLICATION_ID) {
    throw new Error(
      "Algolia API key or Application ID is not set in the environment variables"
    );
  }

  const requestUrl = `https://VVWOVRO2RI-dsn.algolia.net/1/indexes/menu?query=${query}&hitsPerPage=${perPage}&page=${pageIndex}&attributesToHighlight=%5B%5D&filters=${filters}`;
  console.log(requestUrl);

  try {
    const response = await fetch(requestUrl, {
      headers: new Headers({
        "X-Algolia-API-Key": ALGOLIA_API_KEY,
        "X-Algolia-Application-Id": ALGOLIA_APPLICATION_ID,
      }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return await response.json();
  } catch (error: any) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
}
