import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import PageHeading from '@/components/PageHeading';
import { FC } from 'react';

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <PageHeading></PageHeading>

      <div className='mt-[100px] container flex flex-col justify-center items-center'>
        <h2 className='text-xl text-center pb-8 max-w-sm'>
          Fill the form below to get free consulting session from our experts!
        </h2>
        <div className='w-[400px]'>
          <ContactForm></ContactForm>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default page;
