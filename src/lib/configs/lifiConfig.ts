import { createConfig } from '@lifi/sdk';

export const initLifiConfig = () => {
  createConfig({
    integrator: 'Swapsies'
  });
};
