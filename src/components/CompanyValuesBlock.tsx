import { FC } from 'react';

interface CompanyValuesBlockProps {
  data: {
    title: string;
    description: string;
  }[];
}

const CompanyValuesBlock: FC<CompanyValuesBlockProps> = ({ data }) => {
  return (
    <ul className='md:max-w-[1020px] w-full grid sm:grid-cols-2 grid-cols-1 md:gap-16 gap-x-6 gap-y-8 mx-auto pb-20'>
      {data.map((item, i) => {
        return (
          <li key={i} className='relative sm:even:top-[40%]'>
            <div>
              <h4 className='flex gap-x-2 items-end pb-4 mb-4 border-b border-b-zinc-600'>
                <span className='text-5xl'>{i + 1}.</span>
                <span className='md:text-3xl text-xl'>{item.title}</span>
              </h4>
            </div>
            <p>{item.description}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default CompanyValuesBlock;
