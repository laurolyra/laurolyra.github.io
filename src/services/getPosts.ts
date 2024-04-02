export type Post = {
  title: string;
  headline: string;
  slug: string;
  date: string;
  content: string;
};

export async function getPosts(): Promise<Post[]> {
  const response = await fetch(
    'https://api-eu-central-1.hygraph.com/v2/ck8sn5tnf01gc01z89dbc7s0o/master',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `query {
        products {
          slug
          name
          id
        }
      }`,
      }),
    }
  );
  const json = await response.json();
  return json.data.products;
}
