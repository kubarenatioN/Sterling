import AchievementsBlock from '@/components/AchievementsBlock';
import ConsultingBlock from '@/components/ConsultingBlock';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ReviewsBlock from '@/components/ReviewsBlock';
import { GET_HOME_MAIN } from '@/db/queries/home';
import { getClient } from '@/lib/apollo/client';
import { HomeMain } from '@/models';
import Image from 'next/image';
import styles from './main.module.css';

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
      <div className='relative w-full'>
        <Image
          fill={true}
          src={sourceUrl}
          alt=''
          style={{
            objectFit: 'cover',
          }}></Image>
        <div className='relative min-h-screen z-1'>
          <Header></Header>
          <div className='absolute top-[100px] bottom-[80px] w-full flex flex-col items-center justify-around'>
            <Image src='/logo-light.svg' alt='Logo' width={160} height={160} />

            <div className={styles.MottoRibbon}>
              <h1 className='text-neutral-100 py-10 text-6xl uppercase text-center font-bold container'>
                {motto}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className='block__excerpt flex items-center justify-center flex- min-h-[200px]'>
        <p className='md:max-w-[900px] text-center max-w-[100%] px-4 md:text-2xl'>
          {excerpt}
        </p>
      </div>

      <div className='bg-tertriary py-12 text-zinc-100'>
        <ConsultingBlock data={homeConsulting}></ConsultingBlock>
      </div>

      <div className='mt-[100px]'>
        <h2 className='container text-4xl text-center pb-10'>
          Our Achievements
        </h2>
        <AchievementsBlock />
      </div>

      <div className='bg-tertriary mt-[100px]'>
        <div className='container py-12'>
          <h2 className='container text-4xl text-center pb-10 text-zinc-100'>
            Reviews of our Clients
          </h2>
          <ReviewsBlock />
        </div>
      </div>

      <div className='mt-[100px] container flex flex-col justify-center items-center'>
        <h2 className='text-xl text-center pb-8 max-w-sm'>
          Fill the form below to get free consulting session from our experts!
        </h2>
        <div className='w-[400px]'>
          <ContactForm></ContactForm>
        </div>
      </div>

      <Footer />
    </main>
  );
}
