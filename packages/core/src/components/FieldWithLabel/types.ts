import { Theme } from '@medly-components/theme';
import { WithThemeProp } from '@medly-components/utils';
import { AnyStyledComponent, StyledComponent } from 'styled-components';
import Label from '../Label';
import { LabelPositions } from '../Label/types';
import Text from '../Text';

export interface Props extends WithThemeProp {
    labelPosition?: LabelPositions;
    fullWidth?: boolean;
    fieldWithMaxContent?: boolean;
}

export interface StaticProps {
    Field: AnyStyledComponent;
    Label: StyledComponent<typeof Label, Theme>;
    Description: StyledComponent<typeof Text, Theme>;
}
