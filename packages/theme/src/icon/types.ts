export type IconSizes = 'XS' | 'S' | 'M' | 'L' | 'XL';

export interface IconTheme {
    /** Icon sizes */
    sizes: {
        [k in IconSizes]: {
            iconSize: string;
            padding: string;
        };
    };
    borderRadius: string;
    colors: {
        default: {
            /** Default icon color */
            iconColor: string;
            /** Icon background color */
            bgColor: string;
        };
        disabled: {
            /** Icon color when we hover on it */
            iconColor: string;
            /** Background color when we hover on it  */
            bgColor: string;
        };
        hovered: {
            /** Icon color when it is disabled */
            iconColor: string;
            /** Background color when it is disabled  */
            bgColor: string;
        };
    };
}
