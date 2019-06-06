import { AvatarSizes } from '@medly-components/theme';
import { WithThemeProp } from '@medly-components/utils';

export interface Props extends WithThemeProp {
    size?: AvatarSizes;
    textColor?: string;
    bgColor?: string;
}

export interface StyledProps extends Props {
    fontSize: string;
    avatarSize: string;
}
