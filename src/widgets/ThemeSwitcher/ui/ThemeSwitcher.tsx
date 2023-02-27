import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames';
import { Button } from 'widgets/Button';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames('', {}, [className])}>
      <Button onClick={toggleTheme}>
        {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
      </Button>
    </div>
  );
};
