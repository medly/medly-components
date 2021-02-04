import styled from 'styled-components';
import Button from '../../../../Button';
import { RowHoverActionsCellStyledProps } from './types';

export const RowHoverActionsCellContainer = styled.div<RowHoverActionsCellStyledProps>`
    position: absolute;
    right: 0;
    display: none;
    box-shadow: 0 0.4rem 1.6rem rgba(15, 90, 213, 0.2);

    ${({ isRowHovered }) => isRowHovered && 'display: block'}
`;

export const ButtonSection = styled.div`
    display: flex;
    flex-flow: row wrap;
    & > ${Button.Style} {
        margin: 0.8rem 1.6rem;
        height: 3.2rem;
    }
    & > :not(:first-child) {
        margin-left: 0;
    }
`;
