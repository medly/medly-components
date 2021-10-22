import { Text } from '@medly-components/core';
import styled from 'styled-components';
import { CommonFieldProps } from './types';

export const FieldWrapper = styled('div')<CommonFieldProps>`
    grid-column: ${({ gridColumn }) => gridColumn};
    grid-row: ${({ gridRow }) => gridRow};
    & > * {
        width: 100%;
        margin: 0;
        min-width: auto;
    }
`;
FieldWrapper.defaultProps = {
    gridColumn: '1/-1'
};

export const Header = styled(Text)`
    grid-column: 1/-1;
    margin-top: 2.6rem;
`;

export const HelperText = styled(Text)`
    margin-bottom: 1rem;
`;
