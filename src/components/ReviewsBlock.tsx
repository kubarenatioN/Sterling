import { GET_REVIEWS } from '@/db/queries/home';
import { getClient } from '@/lib/apollo/client';
import { cn } from '@/lib/utils';
import { ReviewsQueryData } from '@/models';
import Image from 'next/image';

const ReviewsBlock = async ({}) => {
  const { data } = await getClient().query<ReviewsQueryData>({
    query: GET_REVIEWS,
  });

  const {
    reviews: { nodes },
  } = data;

  return (
    <div className='grid grid-cols-6 xl:gap-12 gap-4'>
      {nodes.map((node, i) => {
        const {
          reviewMain: {
            author,
            authorImage: { sourceUrl },
            reviewText,
            subtext,
          },
        } = node;

        return (
          <div
            key={i}
            className={cn(
              'flex flex-col xl:py-6 xl:px-8 p-4 bg-neutral-100 gap-6 lg:col-span-2',
              (i + 1) % 3 === 0 ? 'col-span-6' : 'md:col-span-3 col-span-6'
            )}>
            <div className='flex gap-2 items-center justify-start sm:max-w-[300px] lg:max-w-full'>
              <div className='sm:grow-0 md:flex-grow grow'>
                <span className='text-2xl'>{author}</span>
                <p className='text-sm pt-2 italic'>{subtext}</p>
              </div>
              <Image
                src={sourceUrl}
                alt=''
                width={120}
                height={120}
                className='w-[80px] h-[80px] md:w-[120px] md:h-[120px]'
                style={{
                  borderRadius: '50%',
                }}
              />
            </div>
            <div className=''>
              <p
                className='italic leading-7'
                dangerouslySetInnerHTML={{ __html: reviewText }}></p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ReviewsBlock;
