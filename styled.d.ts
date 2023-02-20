import 'styled-components';
import { CMSTheme } from './src/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends CMSTheme {}
}
