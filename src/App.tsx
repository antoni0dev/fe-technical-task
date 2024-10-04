import { GlobalStyles } from './GlobalStyles';
import HomePage from './pages/HomePage';
import { QueryProvider } from './providers/QueryProvider';
import { initLifiConfig } from './lib/configs/lifiConfig';

initLifiConfig();

export const App = () => {
  return (
    <QueryProvider>
      <GlobalStyles />
      <HomePage />
    </QueryProvider>
  );
};
