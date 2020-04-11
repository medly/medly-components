import { AvatarTheme, defaultTheme } from '@medly-components/theme';
import { styled } from '@medly-components/utils';
import { color, select } from '@storybook/addon-knobs';
import React from 'react';
import { Avatar } from './Avatar';
import { Props } from './types';

const size: Props['size'][] = ['S', 'M', 'L', 'XL'];

export const ThemeInterface: React.SFC<AvatarTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.avatar
};

const Div = styled.div`
    & > * {
        margin-right: 10px;
    }
`;

export const Basic = () => (
    <Div>
        <Avatar size={select('Size', size, 'M')}>
            <img src="http://i.pravatar.cc/150?img=66" />
        </Avatar>
        <Avatar size={select('Size', size, 'M')} bgColor={color('Background', 'aqua')} textColor={color('Text', 'white')}>
            M
        </Avatar>
    </Div>
);
