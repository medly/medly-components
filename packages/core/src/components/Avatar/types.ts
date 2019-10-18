import { AvatarSizes } from '@medly-components/theme';
import { WithThemeProp } from '@medly-components/utils';

export interface Props extends WithThemeProp {
    /** Size of the avatar */
    size?: AvatarSizes;
    /** Text color */
    textColor?: string;
    /** Background color */
    bgColor?: string;
}

export interface StyledProps extends Props {
    fontSize: string;
    avatarSize: string;
}
