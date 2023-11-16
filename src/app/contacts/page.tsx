import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import PageHeading from '@/components/PageHeading';
import { PageSchema } from '@/components/PageSchema';
import { pagesDbId } from '@/lib/configs/common.config';
import { getPageMetadata } from '@/lib/helpers/page-metadata';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getPageMetadata(pagesDbId.Contacts);

  return {
    ...metadata,
  };
}

const page = ({}) => {
  return (
    <>
      <PageSchema id={pagesDbId.Contacts} />
      <PageHeading></PageHeading>

      <div className='mt-[100px] container flex flex-col justify-center items-center'>
        <h2 className='text-xl text-center pb-8 max-w-sm'>
          Fill the form below to get free consulting session from our experts!
        </h2>
        <div className='xs:w-[360px] w-full'>
          <ContactForm></ContactForm>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default page;
