import { WithThemeProp } from '@medly-components/utils';

export interface Props extends WithThemeProp{
    /** Title of the accordion */
    title: string;
    /** Color for the Accordion title*/
    titleColor?: string;
    /** Background color for the Accordion section*/
    bgColor?: string;

}

export interface StyleProps extends Omit<Props, 'title' | 'content'> {
    isActive?: boolean;
}


