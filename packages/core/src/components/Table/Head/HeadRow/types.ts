import { HTMLProps, WithThemeProp } from '@medly-components/utils';
import { GridTemplateProps } from '../../types';

export type Props = GridTemplateProps & HTMLProps<HTMLTableRowElement> & WithThemeProp;
