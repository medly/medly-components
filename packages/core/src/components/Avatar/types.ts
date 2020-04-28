import { AvatarSizes } from '@medly-components/theme';
import { HTMLProps, Omit, WithThemeProp } from '@medly-components/utils';

export interface Props extends Omit<HTMLProps<HTMLDivElement>, 'size'>, WithThemeProp {
    /** Size of the avatar */
    size?: AvatarSizes;
    /** Text color */
    textColor?: string;
    /** Background color */
    bgColor?: string;
    /** Hover shadow color*/
    hoverShadowColor?: string;
    /** Image Hover shadow color */
    imgHoverShadow?: string;
    /** To check children is image */
    isImage?: boolean;
}
