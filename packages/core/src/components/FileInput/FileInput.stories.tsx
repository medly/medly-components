import { defaultTheme } from '@medly-components/theme';
import { boolean, color, select, text } from '@storybook/addon-knobs';
import React, { useState } from 'react';
import { FileInput } from './FileInput';
import { Props } from './types';

const labelPosition: Props['labelPosition'][] = ['top', 'bottom', 'left', 'right'];

export const Basic = () => {
    const [files, setFiles] = useState<FileList>();

    return (
        <FileInput
            multiple
            files={files}
            id="storybook-input"
            fullWidth={boolean('Full Width', false)}
            disabled={boolean('Disabled', false)}
            label={text('Label', 'Test file')}
            labelPosition={select('Label Position', labelPosition, 'top')}
            required={boolean('Required', false)}
            onChange={setFiles}
            description={text('Description', 'Upload test file')}
            descriptionColor={color('Description Color', defaultTheme.input.descriptionColor)}
        />
    );
};
