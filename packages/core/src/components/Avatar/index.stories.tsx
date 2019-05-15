import { color, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Avatar from './Avatar';
import { Props } from './types';

const size: Array<Props['size']> = ['S', 'M', 'L', 'XL'];

storiesOf('Core', module).add('Avatar', () => (
    <>
        <Avatar size={select('Size', size, 'M')}>
            <img src="http://i.pravatar.cc/150?img=66" />
        </Avatar>
        <Avatar size={select('Size', size, 'M')} bgColor={color('Background', 'aqua')} textColor={color('Text', 'white')}>
            M
        </Avatar>
    </>
));
