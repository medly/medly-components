import { SvgIcon } from '@medly-components/icons';
import styled from 'styled-components';
import { BreadcrumbItemStyled } from '../Item/Item.styled';

export const BreadcrumbBackStyled = styled(BreadcrumbItemStyled)`
    & > ${SvgIcon} {
        * {
            fill: ${({ theme }) => theme.breadcrumb.textColor.default};
        }
    }
`;
