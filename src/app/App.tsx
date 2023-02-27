import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Sidebar } from 'widgets/Sidebar';
import { classNames } from 'shared/lib/classNames';
import { Navbar } from 'widgets/Navbar';
import { useTheme } from './providers/ThemeProvider';

import { AppRouter } from './providers/router';

import './styles/index.scss';

const Component = () => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <div>
      <button onClick={toggle}>{t('Перевести')}</button>
      {t('Тест')}
    </div>
  );
};

const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <Component />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
