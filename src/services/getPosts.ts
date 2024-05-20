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
        posts {
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
  return <Post[]>json.data.posts;
}

export async function getPost(slug: string) {
  const query = `
  query {
    post(where: { slug: "${slug}" }) {
      title
      headline
      date
      content
    }
  }
`;

  // Set up the fetch options
  const fetchOptions = {
    method: 'POST', // GraphQL queries are generally sent as POST requests
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ query }), // Stringify the query for the request body
  };

  // Make the fetch request
  try {
    const response = await fetch(hygraphEndpoint, fetchOptions);

    // Check if the response is okay (status in the range 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the JSON response
    const result = await response.json();

    // Handle the data (e.g., log it or process it further)
    console.log(result.data.post);

    return result.data.post;
  } catch (error) {
    // Handle any errors that occurred during the fetch
    console.error('Error fetching the post:', error);
  }
}
