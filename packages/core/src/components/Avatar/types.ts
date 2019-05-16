import { AvatarSizes } from '@medly-components/theme';
import { WithThemeProp } from '@medly-components/utils';

export interface Props extends WithThemeProp {
    size?: keyof AvatarSizes;
    textColor?: string;
    bgColor?: string;
}

export interface StyledProps extends Props {
    fontSize: string;
    avatarSize: string;
}
