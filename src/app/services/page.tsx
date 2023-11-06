import Footer from '@/components/Footer';
import FreeConsultingBlock from '@/components/FreeConsultingBlock';
import PageHeading from '@/components/PageHeading';
import ServicesBlock from '@/components/ServicesBlock';
import { GET_SERVICES } from '@/db/queries/services';
import { getClient } from '@/lib/apollo/client';
import { ServicesData } from '@/models/services.model';

const page = async () => {
  const { data } = await getClient().query<ServicesData>({
    query: GET_SERVICES,
  });

  const { nodes } = data.services;

  return (
    <>
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
