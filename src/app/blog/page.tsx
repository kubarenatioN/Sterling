import PageHeading from '@/components/PageHeading';
import { FC } from 'react';

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <PageHeading></PageHeading>

      <h1>Discover our blog</h1>
      <div>Content...</div>
    </>
  );
};

export default page;
