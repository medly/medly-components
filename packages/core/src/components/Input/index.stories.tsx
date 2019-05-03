import { wInfo } from '@medly-components/utils';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Input from './Input';

storiesOf('Core', module).add('Input', () => <Input placeholder="Enter Your Name" />, wInfo(`Input Component with all the default props`));
