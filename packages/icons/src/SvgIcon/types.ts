import { IconSizesType } from '@medly-components/theme';
import { HTMLProps, Omit, WithThemeProp } from '@medly-components/utils';

type SVGProp = Omit<HTMLProps<HTMLOrSVGElement>, 'size'>;

export interface Props extends SVGProp, WithThemeProp {
    size?: IconSizesType;
    color?: string;
}
