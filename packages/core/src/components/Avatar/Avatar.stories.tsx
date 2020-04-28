import { AvatarTheme, defaultTheme } from '@medly-components/theme';
import { styled } from '@medly-components/utils';
import { color, select } from '@storybook/addon-knobs';
import React from 'react';
import { Avatar } from './Avatar';
import { Props } from './types';
import Text from '../Text';

const size: Props['size'][] = ['S', 'M', 'L'];

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
        <Avatar size={select('Size', size, 'M')} >
            <Text>KP</Text>
        </Avatar>
    </Div>
);
