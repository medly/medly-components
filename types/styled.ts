import 'styled-components';
import { Theme } from '../packages/theme';

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}
