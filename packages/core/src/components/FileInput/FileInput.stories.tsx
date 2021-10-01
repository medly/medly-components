import { defaultTheme } from '@medly-components/theme';
import { boolean, color, select, text } from '@storybook/addon-knobs';
import React, { useState } from 'react';
import { FileInput } from './FileInput';
import { FileInputProps } from './types';

const labelPositions: Required<FileInputProps>['labelPosition'][] = ['top', 'bottom', 'left', 'right'];

export const Basic = () => {
    // @ts-ignore
    const [files, setFiles] = useState<FileList>([]);

    return (
        <FileInput
            multiple
            files={files}
            id="storybook-input"
            fullWidth={boolean('Full Width', false)}
            disabled={boolean('Disabled', false)}
            label={text('Label', 'Test file')}
            labelPosition={select('Label Position', labelPositions, 'top')}
            required={boolean('Required', false)}
            onChange={setFiles}
            description={text('Description', 'Upload test file')}
            descriptionColor={color('Description Color', defaultTheme.input.descriptionColor)}
        />
    );
};
