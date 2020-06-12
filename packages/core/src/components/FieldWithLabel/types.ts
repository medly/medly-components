import { Theme } from '@medly-components/theme';
import { HTMLProps, WithThemeProp } from '@medly-components/utils';
import { StyledComponent } from 'styled-components';
import Label from '../Label';
import { LabelPositions } from '../Label/types';
import Text from '../Text';

export interface Props extends HTMLProps<HTMLDivElement>, Omit<WithThemeProp, 'as'> {
    /** Label Position */
    labelPosition?: LabelPositions;
    /** Takes full width of the parent component */
    fullWidth?: boolean;
    /** To be used when field should take max width */
    fieldWithMaxContent?: boolean;
    /** Min width of the component */
    minWidth?: number;
}

export interface FieldWithLabelStyledProps extends Props {
    isLabelPresent?: boolean;
    columns?: number;
}

export interface FieldStyledProps {
    isIndented?: boolean;
    columns?: number;
}

export interface StaticProps {
    Field?: StyledComponent<'div', Theme, FieldStyledProps>;
    Label?: StyledComponent<typeof Label, Theme>;
    Description?: StyledComponent<typeof Text, Theme>;
}
