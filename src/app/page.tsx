import AchievementsBlock from '@/components/AchievementsBlock';
import ConsultingBlock from '@/components/ConsultingBlock';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import HeaderWrapper from '@/components/HeaderWrapper';
import MobileMenu from '@/components/MobileMenu';
import { PageSchema } from '@/components/PageSchema';
import ReviewsBlock from '@/components/ReviewsBlock';
import { GET_HOME_MAIN } from '@/db/queries/home';
import { getClient } from '@/lib/apollo/client';
import { pagesDbId } from '@/lib/configs/common.config';
import { getPageMetadata } from '@/lib/helpers/page-metadata';
import { HomeMain } from '@/models';
import { Metadata, ResolvingMetadata } from 'next';
import Image from 'next/image';
import styles from './main.module.css';

export async function generateMetadata(
  props: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const metadata = await getPageMetadata(pagesDbId.Home);

  return {
    metadataBase: new URL(process.env.CLIENT_DOMAIN!),
    ...metadata,
    other: {
      'google-site-verification': '34qZu2Zsuk-pZXYS-kQjKTltOMSz8BMVaXLZ9xz_iXw',
    },
  };
}

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
    <>
      <PageSchema id={'15'} />
      <main>
        <div className='relative w-full'>
          <Image
            fill
            priority
            src={sourceUrl}
            alt='Large luxury building in fullscreen'
            style={{
              objectFit: 'cover',
            }}></Image>
          <div className='relative min-h-screen z-1'>
            <HeaderWrapper></HeaderWrapper>
            <div className='md:hidden'>
              <MobileMenu></MobileMenu>
            </div>
            <div className='absolute top-[100px] bottom-[80px] w-full flex flex-col items-center justify-around'>
              <Image
                src='/logo-light.svg'
                priority
                alt='Logo'
                width={160}
                height={160}
                className='w-[100px] sm:w-[120px] md:w-[160px]'
              />

              <div className={styles.MottoRibbon}>
                <h1 className='text-neutral-100 py-10 md:text-6xl uppercase text-center font-bold container text-xl sm:text-3xl'>
                  {motto}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className='block__excerpt flex items-center justify-center flex- min-h-[200px]'>
          <p className='md:max-w-[900px] text-center max-w-[100%] px-4 md:text-2xl text-base'>
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
          <div className='xs:w-[360px] w-full'>
            <ContactForm></ContactForm>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
