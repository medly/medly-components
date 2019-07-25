import { css, styled } from '@medly-components/utils';
import { ARTSurfaceProps } from 'react-native';
import { AnyStyledComponent } from 'styled-components';
import Label from '../Label';
import Text from '../Text';
import { Props, StaticProps } from './types';

export const FieldStyle = styled('div')`
    grid-area: field;
    flex-wrap: wrap;
`;

export const LabelStyled = styled(Label)`
    grid-area: label;
    align-self: center;
`;

export const DescriptionStyled = styled(Text)`
    grid-area: description;
    margin: 5px 0px 0px 2px;
    color: ${({ theme }) => theme.input.desciptionColor};
`;

// @ts-ignore
export const FieldWithLabel: AnyStyledComponent & StaticProps = styled('div')<Props>`
    margin: ${({ theme, fullWidth }) => (fullWidth ? `${theme.spacing.S} 0px` : `${theme.spacing.S}`)};
    display: ${({ fullWidth }) => (fullWidth ? 'grid' : 'inline-grid')};

    ${FieldStyle} {
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
                    grid-template-columns: ${fieldWithMaxContent ? 'auto  max-content' : '20% 80%'};
                    grid-template-areas:
                        'label field'
                        'random description';
                `;
            case 'right':
            default:
                return css`
                    grid-template-columns: ${fieldWithMaxContent ? 'max-content auto' : '80% 20%'};
                    grid-template-areas:
                        'field label'
                        'description random';
                `;
        }
    }};
`;
FieldWithLabel.Field = FieldStyle;
FieldWithLabel.Label = LabelStyled;
FieldWithLabel.Description = DescriptionStyled;
