import { ButtonProps, buttonVariants } from '@/ui-kit/ui/button';
import Link from 'next/link';
import React, { FC } from 'react';

type ButtonVariant = ButtonProps['variant'];
type ButtonSize = ButtonProps['size'];

interface FreeConsultingBtnProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  text: string;
  href?: string;
  size?: ButtonSize;
  icon?: React.ReactNode;
  variant?: ButtonVariant;
}

const phone = '+4817362353';

const FreeConsultingBtn: FC<FreeConsultingBtnProps> = ({
  text,
  variant = 'default',
  size = 'default',
  icon = null,
  href = `tel:${phone}`,
  ...props
}) => {
  return (
    <Link className={buttonVariants({ variant })} href={href}>
      {icon && <span className='mr-2 w-5 h-5'>{icon}</span>}
      {text}
    </Link>
  );
};

export default FreeConsultingBtn;
