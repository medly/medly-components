import { AvatarSizes } from '@medly-components/theme';
import { HTMLProps, Omit, WithThemeProp } from '@medly-components/utils';

export interface Props extends Omit<HTMLProps<HTMLDivElement>, 'size'>, WithThemeProp {
    /** Size of the avatar */
    size?: AvatarSizes;
    /** Text color */
    textColor?: string;
    /** Background color */
    bgColor?: string;
    /** Set it true to show the hover effect */
    withHoverEffect?: boolean;
    /** Hover Text color */
    hoverTextColor?: string;
    /** Hover Background color */
    hoverBgColor?: string;
    /** Hover text shadow color*/
    hoverTextShadowColor?: string;
    /** Hover image shadow color */
    hoverImgShadowColor?: string;
}

export interface StyledProps extends Props {
    /** To check children is image */
    isImage?: boolean;
}
