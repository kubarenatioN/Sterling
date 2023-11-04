import { GET_REVIEWS } from '@/db/queries/home';
import { getClient } from '@/lib/apollo/client';
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
    <div className='grid grid-cols-3 gap-12'>
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
          <div key={i} className='flex flex-col py-6 px-8 bg-neutral-100 gap-6'>
            <div className='flex gap-2 items-center'>
              <div className='flex-grow'>
                <span className='text-2xl'>{author}</span>
                <p className='text-sm pt-2 italic'>{subtext}</p>
              </div>
              <Image
                src={sourceUrl}
                alt=''
                width={120}
                height={120}
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
