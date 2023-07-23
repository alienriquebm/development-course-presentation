import { TransitionEnum } from '@/app/config/enums';

export interface ISlide {
  children: React.ReactNode;
  className?: string;
  backgroundColor?: string;
  autoAnimate?: boolean;
  transition?: TransitionEnum;
}
