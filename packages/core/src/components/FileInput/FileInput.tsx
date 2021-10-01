import { useCombinedRefs, WithStyle } from '@medly-components/utils';
import React, { FC, useCallback, useMemo } from 'react';
import FieldWithLabel from '../FieldWithLabel';
import * as Styled from './FileInput.styled';
import { FileInputProps } from './types';

const Component: FC<FileInputProps> = React.memo(
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

        const inputRef = useCombinedRefs<HTMLInputElement>(ref, React.useRef(null));

        const handleLabelClick = useCallback(
                (event: any) => {
                    disabled && event.preventDefault();
                    onFocus && onFocus(event);
                    if (inputRef.current) {
                        inputRef.current.value = '';
                    }
                },
                [disabled, onFocus]
            ),
            handleOnChange = useCallback(
                (event: React.FormEvent<HTMLInputElement>) => {
                    const target = event.target as HTMLInputElement;
                    target.files && onChange(target.files);
                },
                [onChange]
            );

        const inputPlaceholder = useMemo(
            () =>
                files.length
                    ? Array.from(files)
                          .map(file => file.name)
                          .join(', ')
                    : placeholder || 'Click to choose file',
            [files, placeholder]
        );

        return (
            <FieldWithLabel id={`${id}-field`} {...{ fullWidth, labelPosition }}>
                {label && <FieldWithLabel.Label {...{ required, labelPosition }}>{label}</FieldWithLabel.Label>}
                <Styled.Label id={`${id}-label`} htmlFor={id} onClick={handleLabelClick} disabled={disabled} fullWidth={fullWidth}>
                    {inputPlaceholder}
                    <Styled.Input id={id} ref={inputRef} files={files} required={required} {...restProps} onChange={handleOnChange} />
                </Styled.Label>
                {description && <FieldWithLabel.Description textColor={descriptionColor}>{description}</FieldWithLabel.Description>}
            </FieldWithLabel>
        );
    })
);

Component.displayName = 'FileInput';
Component.defaultProps = {
    // @ts-ignore
    files: [],
    disabled: false,
    fullWidth: false,
    required: false,
    label: '',
    labelPosition: 'top',
    description: ''
};
export const FileInput: FC<FileInputProps> & WithStyle = Object.assign(Component, {
    Style: Styled.Input
});
