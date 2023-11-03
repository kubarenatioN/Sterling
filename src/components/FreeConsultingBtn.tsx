import { Button, ButtonProps } from '@/ui-kit/ui/button';
import React, { FC } from 'react';

type ButtonVariant = ButtonProps['variant'];

interface FreeConsultingBtnProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  text: string;
  href?: string;
  variant?: ButtonVariant;
}

const phone = '+4817362353';

const FreeConsultingBtn: FC<FreeConsultingBtnProps> = ({
  text,
  variant = 'default',
  href = `tel:${phone}`,
  ...props
}) => {
  return (
    <Button asChild variant={variant} {...props}>
      <a href={href}>{text}</a>
    </Button>
  );
};

export default FreeConsultingBtn;
