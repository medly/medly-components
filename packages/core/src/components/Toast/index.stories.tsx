import { action } from '@storybook/addon-actions';
import { select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Toast } from './Toast';
import { Props } from './types';

const variant: Array<Props['variant']> = ['error', 'warning', 'success', 'info'];

storiesOf('Core', module).add('Toast', () => (
    <Toast variant={select('Variant', variant, 'success')} onClose={action('Close icon cliked')}>
        Hello
    </Toast>
));
