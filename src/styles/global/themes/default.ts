import { iTheme } from 'types/iTheme';
import { SHARED_CONFIGS } from './shared-configs';

export const DEFAULT: iTheme = {
  name: 'default',
  colors: {
    dark: '059, 064, 046',
    light: '249, 193, 148',
    primary: '191, 115, 068',
  },
  ...SHARED_CONFIGS,
};
