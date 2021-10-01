import { render } from '@test-utils';
import React from 'react';
import { Actions } from './Actions';
import { DialogBoxActionUserProps } from './types';

describe('DialogBox action component', () => {
    const testData: [DialogBoxActionUserProps['alignItems'], string][] = [
        ['left', 'flex-start'],
        ['center', 'center'],
        ['right', 'flex-end']
    ];
    test.each(testData)('should align actions properly when align-items props is %s', (alignItems, flexValue) => {
        const { container } = render(<Actions alignItems={alignItems}>Demo Actions</Actions>);
        expect(container.querySelector('#default-id-actions')).toHaveStyle(`justify-content: ${flexValue}`);
    });
});
