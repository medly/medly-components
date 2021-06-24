import { AvatarSizes } from '@medly-components/theme';
import { HTMLProps, Omit, WithThemeProp } from '@medly-components/utils';

export interface Props extends Omit<HTMLProps<HTMLDivElement>, 'size'>, WithThemeProp {
    /** Size of the avatar */
    size?: AvatarSizes;
    /** Text color */
    textColor?: string;
    /** Background color */
    bgColor?: string;
    /** Hover Text color */
    hoverTextColor?: string;
    /** Hover Background color */
    hoverBgColor?: string;
    /** Hover text shadow color*/
    hoverTextShadowColor?: string;
    /** Hover image shadow color */
    hoverImgShadowColor?: string;
    /** Pressed Background color */
    pressedBgColor?: string,
    /** Pressed Text color */
    pressedTextColor?: string,
}

export interface StyledProps extends Props {
    /** To check children is image */
    isImage?: boolean;
}
