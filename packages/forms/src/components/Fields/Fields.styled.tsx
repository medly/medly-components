import { Text } from '@medly-components/core';
import { styled } from '@medly-components/utils';
import { CommonFieldProps } from './types';

export const FieldWrapper = styled('div')<CommonFieldProps>`
    grid-column: ${({ gridColumn }) => gridColumn};
    grid-row: ${({ gridRow }) => gridRow};
    & > * {
        width: 100%;
        min-width: auto;
    }
`;
FieldWrapper.defaultProps = {
    gridColumn: '1/-1'
};

export const FieldHeader = styled(Text)`
    grid-column: 1/-1;
`;
