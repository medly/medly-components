import { storiesOf } from '@storybook/react';
import React from 'react';
import { wInfo } from '../../utils/wInfo';
import Input from './Input';

storiesOf('Components', module).add(
    'Input',
    () => <Input placeholder="Enter Your Name" />,
    wInfo(`Input Component with all the default props`)
);
