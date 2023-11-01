import { Button } from '@/ui-kit/ui/button';
import React, { FC } from 'react';

interface FreeConsultingBtnProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  text: string;
  href?: string;
}

const phone = '+4817362353';

const FreeConsultingBtn: FC<FreeConsultingBtnProps> = ({
  text,
  href = `tel:${phone}`,
  ...props
}) => {
  return (
    <Button asChild {...props}>
      <a href={href}>{text}</a>
    </Button>
  );
};

export default FreeConsultingBtn;
