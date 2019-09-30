import { Theme } from '@medly-components/theme';
import { WithThemeProp } from '@medly-components/utils';
import { StyledComponent } from 'styled-components';
import Label from '../Label';
import { LabelPositions } from '../Label/types';
import Text from '../Text';

export interface Props extends WithThemeProp {
    labelPosition?: LabelPositions;
    fullWidth?: boolean;
    fieldWithMaxContent?: boolean;
    minWidth?: number;
}

export interface FieldWithLabelStyledProps extends Props {
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
