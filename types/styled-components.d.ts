import 'styled-components';
import { Theme } from '../packages/theme/src/types';

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}
