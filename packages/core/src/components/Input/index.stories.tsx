import { wInfo } from '@storybook-utils';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Input from './Input';

storiesOf('Components', module).add(
    'Input',
    () => <Input placeholder="Enter Your Name" />,
    wInfo(`Input Component with all the default props`)
);
