import { SvgIcon } from '@medly-components/icons';
import { styled } from '@medly-components/utils';

export const BreadcrumbStyled = styled('ol')`
    height: 2.4rem;
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;
    flex-direction: row;

    & > *:nth-child(even) {
        margin: 0 0.4rem;
    }

    & > ${SvgIcon} {
        * {
            fill: ${({ theme }) => theme.breadcrumb.textColor.default};
        }
    }
`;
