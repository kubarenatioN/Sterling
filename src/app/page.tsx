import AchievementsBlock from '@/components/AchievementsBlock';
import ConsultingBlock from '@/components/ConsultingBlock';
import Header from '@/components/Header';
import { GET_HOME_MAIN } from '@/db/queries/home';
import { getClient } from '@/lib/apollo/client';
import { HomeMain } from '@/models';
import Image from 'next/image';

export default async function Home() {
  const { data, error, loading } = await getClient().query<HomeMain>({
    query: GET_HOME_MAIN,
  });

  const {
    page: {
      featuredImage: {
        node: { sourceUrl },
      },
      homeMain: { motto, excerpt },
      homeConsulting,
    },
  } = data;

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error : {error.message}</p>;
  }

  return (
    <main>
      <div className='relative w-full min-h-screen block__first-screen'>
        <Image
          fill={true}
          src={sourceUrl}
          alt=''
          style={{
            objectFit: 'cover',
          }}></Image>
        <div className='relative z-1'>
          <Header></Header>
          <div className='container'>
            <h1 className='text-neutral-100'>{motto}</h1>
          </div>
        </div>
      </div>
      <div className='block__excerpt flex items-center justify-center flex- min-h-[200px]'>
        <p className='md:max-w-[900px] text-center max-w-[100%] px-4 md:text-2xl'>
          {excerpt}
        </p>
      </div>

      <ConsultingBlock data={homeConsulting}></ConsultingBlock>

      <div className='mt-[200px]'>
        <h2 className='container text-4xl text-center pb-10'>
          Our Achievements
        </h2>
        <AchievementsBlock />
      </div>
    </main>
  );
}
