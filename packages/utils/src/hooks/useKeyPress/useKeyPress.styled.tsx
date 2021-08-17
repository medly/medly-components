import { defaultTheme } from '@medly-components/theme';
import styled from 'styled-components';

export const Div = styled('div')`
    display: block;
    margin: 1rem 0;
`;

export const DisplayDiv = styled('div')`
    font-size: 100px;
    width: 100%;
    min-height: 130px;
    line-height: normal;
    text-align: center;
    background-color: ${defaultTheme.colors.grey[200]};
`;
