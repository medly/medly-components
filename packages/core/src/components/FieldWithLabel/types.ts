import { HTMLProps } from '@medly-components/utils';
import type { ReactNode } from 'react';
import { IStyledComponent } from 'styled-components';
import type { LabelPositions, LabelProps } from '../Label/types';
import type { TextProps } from '../Text/types';

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
    Field: IStyledComponent<'web', FieldStyledProps & { children: ReactNode }>;
    Label: IStyledComponent<'web', LabelProps>;
    Description: IStyledComponent<'web', TextProps>;
}
