import { render } from '@test-utils';
import React from 'react';
import { Actions } from './Actions';
import { DialogBoxActionUserProps } from './types';

describe('DialogBox action component', () => {
    test.each([
        ['left', 'flex-start'],
        ['center', 'center'],
        ['right', 'flex-end']
    ])('should align actions properly when align-items props is %s', (alignItems: DialogBoxActionUserProps['alignItems'], flexValue) => {
        const { container } = render(<Actions alignItems={alignItems}>Demo Actions</Actions>);
        expect(container.querySelector('#default-id-actions')).toHaveStyle(`justify-content: ${flexValue}`);
    });
});
