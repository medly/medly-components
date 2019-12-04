import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FieldWithLabel from '../FieldWithLabel';
import * as Styled from './FileInput.styled';
import { Props } from './types';

export const FileInput: SFC<Props> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const {
                id,
                files,
                disabled,
                onFocus,
                onChange,
                description,
                label,
                placeholder,
                labelPosition,
                fullWidth,
                required,
                descriptionColor,
                ...restProps
            } = props,
            inputId = id || 'file-input';

        const handleLabelClick = (event: any) => {
                disabled && event.preventDefault();
                onFocus && onFocus(event);
            },
            handleOnChange = (event: React.FormEvent<HTMLInputElement>) => {
                const target = event.target as HTMLInputElement;
                onChange(target.files);
            };

        const createLabelFromFileList = () =>
            Array.from(files)
                .map((file: File) => file.name)
                .join(', ');

        return (
            <FieldWithLabel {...{ fullWidth, labelPosition }}>
                {label && <FieldWithLabel.Label {...{ required, labelPosition }}>{label}</FieldWithLabel.Label>}
                <Styled.Label data-testid="file-input-label" onClick={handleLabelClick} disabled={disabled} fullWidth={fullWidth}>
                    {files.length ? createLabelFromFileList() : placeholder || 'Click to choose file'}
                    <Styled.Input
                        id={inputId}
                        ref={ref}
                        data-testid={inputId}
                        files={files}
                        required={required}
                        {...restProps}
                        onChange={handleOnChange}
                    />
                </Styled.Label>
                {description && <FieldWithLabel.Description textColor={descriptionColor}>{description}</FieldWithLabel.Description>}
            </FieldWithLabel>
        );
    })
);

FileInput.displayName = 'FileInput';
FileInput.defaultProps = {
    // @ts-ignore
    files: [],
    disabled: false,
    fullWidth: false,
    required: false,
    label: '',
    labelPosition: 'top',
    description: ''
};
