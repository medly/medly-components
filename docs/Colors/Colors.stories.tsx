import { Text } from '@medly-components/core';
import { defaultTheme } from '@medly-components/theme';
import React from 'react';
import styled from 'styled-components';

const contrastingColor = (hex: string) => {
    const hexCode = hex.indexOf('#') === 0 ? hex.slice(1) : hex,
        finalHexCode = hexCode.length === 3 ? hexCode[0] + hexCode[0] + hexCode[1] + hexCode[1] + hexCode[2] + hexCode[2] : hexCode;

    const r = parseInt(finalHexCode.slice(0, 2), 16),
        g = parseInt(finalHexCode.slice(2, 4), 16),
        b = parseInt(finalHexCode.slice(4, 6), 16);

    return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? '#000000' : '#FFFFFF';
};

const Grid = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(3, 1fr);
`;

const Color: React.FC<{ hex: string }> = styled.div<{ hex: string }>`
    height: 40px;
    background-color: ${props => props.hex};
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${props => contrastingColor(props.hex)};
`;

const ColorLine: React.FC<{ shade: number | string; hex: string }> = ({ shade, hex }) => (
    <Color hex={hex} key={hex}>
        <Text textVariant="body1">{shade}</Text>
        <Text textVariant="body1">
            <code>{hex}</code>
        </Text>
    </Color>
);

export const SingleShadeColors = () => {
    return (
        <Grid>
            {Object.entries(defaultTheme.colors)
                .filter(([_, color]) => typeof color === 'string')
                .map(([name, color]) => (
                    <div key={name}>
                        <Text textVariant="body1" fullWidth>
                            {name}
                        </Text>
                        <ColorLine hex={color as string} shade="" />
                    </div>
                ))}
        </Grid>
    );
};

export const MultiShadeColors = () => {
    return (
        <Grid>
            {Object.entries(defaultTheme.colors)
                .filter(([name, color]) => typeof color !== 'string' && name !== 'grey')
                .map(([name, color]) => (
                    <div key={name}>
                        <Text textVariant="body1" fullWidth>
                            {name}
                        </Text>
                        {Object.entries(color).map(([shade, hex]) => (
                            <ColorLine key={hex} hex={hex} shade={shade} />
                        ))}
                    </div>
                ))}
        </Grid>
    );
};

export const GreyScale = () => {
    return (
        <Grid>
            {Object.entries(defaultTheme.colors)
                .filter(([name]) => name === 'grey')
                .map(([name, color]) => (
                    <div key={name}>
                        <Text textVariant="body1" fullWidth>
                            {name}
                        </Text>
                        {Object.entries(color).map(([shade, hex]) => (
                            <ColorLine key={hex} hex={hex} shade={shade} />
                        ))}
                    </div>
                ))}
        </Grid>
    );
};
