import { SvgIcon } from '@medly-components/icons';
import styled from 'styled-components';
import { BreadcrumbItemStyled } from '../Item/Item.styled';

export const BreadcrumbBackStyled = styled(BreadcrumbItemStyled)`
    & > ${SvgIcon} {
        margin-right: 0.4rem;
        * {
            fill: ${({ theme }) => theme.breadcrumb.textColor.default};
        }
    }
`;
