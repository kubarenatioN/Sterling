import { FC } from 'react';

interface CompanyValuesBlockProps {
  data: {
    title: string;
    description: string;
  }[];
}

const CompanyValuesBlock: FC<CompanyValuesBlockProps> = ({ data }) => {
  return (
    <ul className='w-[1020px] grid grid-cols-2 gap-16 mx-auto pb-20'>
      {data.map((item, i) => {
        return (
          <li key={i} className='relative even:top-[40%]'>
            <div>
              <h4 className='flex gap-x-2 items-baseline text-3xl pb-4 mb-4 border-b border-b-zinc-600'>
                <span className='text-5xl'>{i + 1}.</span>
                <span>{item.title}</span>
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
