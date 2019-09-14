import { css, styled } from '@medly-components/utils';
import { AnyStyledComponent } from 'styled-components';
import Label from '../Label';
import Text from '../Text';
import { FieldStyledProps, FieldWithLabelStyledProps, StaticProps } from './types';

export const FieldStyled = styled('div')<FieldStyledProps>`
    grid-area: field;
    flex-wrap: wrap;

    margin-left: ${({ isIndented }) => (isIndented ? '17px' : '0px')};
`;

export const LabelStyled = styled(Label)`
    grid-area: label;
    align-self: center;
`;
LabelStyled.displayName = 'Label';

export const DescriptionStyled = styled(Text)`
    grid-area: description;
    margin: 5px 0px 0px 2px;
    color: ${({ theme }) => theme.input.desciptionColor};
`;

// @ts-ignore
export const FieldWithLabelStyled: AnyStyledComponent & StaticProps = styled('div')<FieldWithLabelStyledProps>`
    margin: ${({ theme, fullWidth }) =>
        fullWidth ? `${theme.spacing.S} 0px` : `${theme.spacing.S} ${theme.spacing.S} ${theme.spacing.S} 0px`};
    display: ${({ fullWidth }) => (fullWidth ? 'grid' : 'inline-grid')};

    ${FieldStyled} {
        display: ${({ fullWidth }) => (fullWidth ? 'flex' : 'inline-flex')};
        align-items: ${({ labelPosition }) => (labelPosition === 'top' || labelPosition === 'bottom' ? 'flex-start' : 'center')};
        flex-direction: ${({ labelPosition }) => {
            switch (labelPosition) {
                case 'bottom':
                    return `column-reverse`;
                case 'left':
                    return `row`;
                case 'right':
                    return `row-reverse`;
                case 'top':
                default:
                    return 'column';
            }
        }};
    }

    ${({ labelPosition, fieldWithMaxContent }) => {
        switch (labelPosition) {
            case 'top':
                return css`
                    grid-template-areas:
                        'label'
                        'field'
                        'description';
                `;
            case 'bottom':
                return css`
                    grid-template-areas:
                        'field'
                        'description'
                        'label';
                `;
            case 'left':
                return css`
                    grid-template-columns: ${fieldWithMaxContent
                        ? 'minmax(max-content, 25%)  max-content'
                        : 'minmax(max-content, 25%) minmax(auto, 80%)'};
                    grid-template-areas:
                        'label field'
                        'random description';
                `;
            case 'right':
            default:
                return css`
                    grid-template-columns: ${fieldWithMaxContent
                        ? 'max-content minmax(max-content, 25%)'
                        : 'minmax(max-content, 80%) minmax(max-content, 25%)'};
                    grid-template-areas:
                        'field label'
                        'description random';
                `;
        }
    }};

    ${({ isLabelPresent }) =>
        !isLabelPresent &&
        css`
            grid-template-columns: auto;
            grid-template-areas:
                'field'
                'description';
        `}
`;
