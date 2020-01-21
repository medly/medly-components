import { WithStyle } from '@medly-components/utils';
import React, { SFC, useCallback, useMemo } from 'react';
import FieldWithLabel from '../FieldWithLabel';
import * as Styled from './FileInput.styled';
import { Props } from './types';

export const FileInput: SFC<Props> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const {
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
            id = props.id || 'medly-file-input';

        const handleLabelClick = useCallback(
                (event: any) => {
                    disabled && event.preventDefault();
                    onFocus && onFocus(event);
                },
                [disabled, onFocus]
            ),
            handleOnChange = useCallback(
                (event: React.FormEvent<HTMLInputElement>) => {
                    const target = event.target as HTMLInputElement;
                    onChange(target.files);
                },
                [onChange]
            );

        const createLabelFromFileList = useCallback(
                () =>
                    Array.from(files)
                        .map((file: File) => file.name)
                        .join(', '),
                [files]
            ),
            inputPlaceholder = useMemo(() => (files.length ? createLabelFromFileList() : placeholder || 'Click to choose file'), [
                files.length,
                placeholder
            ]);
        return (
            <FieldWithLabel id={`${id}-field`} {...{ fullWidth, labelPosition }}>
                {label && <FieldWithLabel.Label {...{ required, labelPosition }}>{label}</FieldWithLabel.Label>}
                <Styled.Label id={`${id}-label`} onClick={handleLabelClick} disabled={disabled} fullWidth={fullWidth}>
                    {inputPlaceholder}
                    <Styled.Input id={id} ref={ref} files={files} required={required} {...restProps} onChange={handleOnChange} />
                </Styled.Label>
                {description && <FieldWithLabel.Description textColor={descriptionColor}>{description}</FieldWithLabel.Description>}
            </FieldWithLabel>
        );
    })
);

FileInput.displayName = 'FileInput';
FileInput.Style = Styled.Input;
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
