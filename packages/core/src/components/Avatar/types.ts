import { AvatarSizesType } from '@medly-components/theme';
import { WithThemeProp } from '@medly-components/utils';

export interface Props extends WithThemeProp {
    size?: AvatarSizesType;
    textColor?: string;
    bgColor?: string;
}
