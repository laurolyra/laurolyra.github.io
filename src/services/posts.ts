export type Post = {
  title: string;
  headline: string;
  slug: string;
  date: string;
  content: string;
};

const hygraphEndpoint = process.env.HYGRAPH_ENDPOINT as string;

export async function getPosts(): Promise<Post[]> {
  const response = await fetch(hygraphEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `query {
        posts(orderBy: date_DESC) {
          title
          headline
          slug
          date
          content
        }
      }`,
    }),
  });
  const json = await response.json();
  console.log('json', json);
  return <Post[]>json.data.posts;
}

export async function getPost(slug: string) {
  const query = `
  query ($slug: String) {
    post(where: { slug: $slug }) {
      title
      headline
      date
      content
    }
  }`;

  const response = await fetch(hygraphEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables: { slug },
    }),
  });

  const result = await response.json();

  if (response.ok) {
    return result.data.post;
  } else {
    throw new Error(
      result.errors
        ? result.errors
            .map((error: { message: string }) => error.message)
            .join(', ')
        : 'An error occurred'
    );
  }
}
