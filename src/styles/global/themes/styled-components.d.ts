import 'styled-components';
import type { iTheme } from 'types/iTheme';

declare module 'styled-components' {
  export interface DefaultTheme extends iTheme {}
}
