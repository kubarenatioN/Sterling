import { Button } from '@/ui-kit/ui/button';
import { BellDot } from 'lucide-react';
import { FC } from 'react';

interface TextProps {}

const Text: FC<TextProps> = ({}) => {
  return (
    <div>
      <h3>This is test component</h3>
      <div className='flex gap-2'>
        <div className='w-[40%]'>
          <h4>This is test button from ui-lib. Remove later.</h4>
          <Button>
            <BellDot className='w-4 h-4 mr-2' />
            Click me
          </Button>
        </div>
        <div className='w-[40%]'>
          <h4>This is test disabled button. Remove later.</h4>
          <Button disabled>
            <BellDot className='w-4 h-4 mr-2' />
            Click me
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Text;
