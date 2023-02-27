import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  onClick: () => void;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    onClick,
    theme = ThemeButton.CLEAR,
    ...otherProps
  } = props;
  return (
    <button
      className={classNames(cls.Button, {}, [className, cls[theme]])}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </button>
  );
};
