import { SvgIcon } from '@medly-components/icons';
import { styled } from '@medly-components/utils';
import * as TextFieldStyled from '../TextField/Styled';

export const InnerWrapper = styled(TextFieldStyled.InnerWrapper)`
    padding-left: 0.8rem;
    ${SvgIcon} {
        margin-right: 0.8rem;
    }
`;
