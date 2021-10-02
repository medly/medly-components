import { Theme } from '@medly-components/theme';
import { HTMLProps } from '@medly-components/utils';
import { StyledComponent } from 'styled-components';
import Label from '../Label';
import { LabelPositions } from '../Label/types';
import Text from '../Text';

export interface FieldWithLabelProps extends HTMLProps<HTMLDivElement> {
    /** Label Position */
    labelPosition?: LabelPositions;
    /** Takes full width of the parent component */
    fullWidth?: boolean;
    /** To be used when field should take max width */
    fieldWithMaxContent?: boolean;
    /** Min width of the component */
    minWidth?: number;
}

export interface FieldWithLabelStyledProps extends FieldWithLabelProps {
    isLabelPresent?: boolean;
}

export interface FieldStyledProps {
    isIndented?: boolean;
}

export interface StaticProps {
    Field: StyledComponent<'div', Theme, FieldStyledProps>;
    Label: StyledComponent<typeof Label, Theme>;
    Description: StyledComponent<typeof Text, Theme>;
}
