import Footer from '@/components/Footer';
import FreeConsultingBlock from '@/components/FreeConsultingBlock';
import PageHeading from '@/components/PageHeading';
import { PageSchema } from '@/components/PageSchema';
import ServicesBlock from '@/components/ServicesBlock';
import { GET_SERVICES } from '@/db/queries/services';
import { getClient } from '@/lib/apollo/client';
import { pagesDbId } from '@/lib/configs/common.config';
import { getPageMetadata } from '@/lib/helpers/page-metadata';
import { ServicesData } from '@/models/services.model';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getPageMetadata(pagesDbId.Services);

  return {
    ...metadata,
  };
}

const page = async () => {
  const { data } = await getClient().query<ServicesData>({
    query: GET_SERVICES,
  });

  const { nodes } = data.services;

  return (
    <>
      <PageSchema id={pagesDbId.Services} />
      <PageHeading></PageHeading>

      <div className='mt-[100px] container'>
        <h1 className='text-3xl text-center pb-8'>Our Services</h1>
        <ServicesBlock data={nodes.map((n) => n.serviceInfo)} />
      </div>

      <div className='container pt-[100px]'>
        <FreeConsultingBlock />
      </div>

      <Footer />
    </>
  );
};

export default page;
