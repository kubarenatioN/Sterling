import { getClient } from '@/lib/apollo/client';
import { gql } from '@apollo/client';
import Link from 'next/link';

const GET_LOCATIONS = gql`
  query Achievements {
    achievements {
      nodes {
        title
      }
    }
  }
`;

export default async function Home() {
  const { data, error, loading } = await getClient().query<{
    achievements: any;
  }>({
    query: GET_LOCATIONS,
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error : {error.message}</p>;
  }

  return (
    <main>
      <h1>My first Apollo app 🚀</h1>
      <br />
      <Link href='/test'>Test Page</Link>
      <p>{data.achievements.nodes[0].title}</p>
    </main>
  );
}
