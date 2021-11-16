import { FontVariants, FontWeights } from '@medly-components/theme';
import { boolean, color, select } from '@storybook/addon-knobs';
import styled from 'styled-components';
import { Text } from './Text';

const variantOptions: FontVariants[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'body1', 'body2'];
const weightOptions: FontWeights[] = ['Light', 'Regular', 'Medium', 'Strong'];

export const Basic = () => (
    <Text
        fullWidth={boolean('Full Width', false)}
        uppercase={boolean('Upper Case', false)}
        lineThrough={boolean('Line through', false)}
        textColor={color('Color', '#012040')}
        textVariant={select('Text Variant', variantOptions, 'body2')}
        textWeight={select('Text Weight', weightOptions, 'Regular')}
    >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    </Text>
);

export const VerticalAlign = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    & > * {
        margin-bottom: 8px;
    }
`;
