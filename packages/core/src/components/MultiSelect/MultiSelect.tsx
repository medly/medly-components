import { useCombinedRefs, useOuterClickNotifier, WithStyle } from '@medly-components/utils';
import React, { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import TextField from '../TextField';
import { filterOptions, getDefaultSelectedOptions } from './helpers';
import InputSuffix from './InputSuffix';
import { Wrapper } from './MultiSelect.styled';
import Options from './Options';
import { MultiSelectProps } from './types';

export const MultiSelect: FC<MultiSelectProps> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const {
                id,
                size,
                label,
                disabled,
                values,
                onChange,
                options: defaultOptions,
                variant,
                fullWidth,
                minWidth,
                errorText,
                helperText,
                required,
                isSearchable,
                validator,
                ...restProps
            } = props,
            selectId = useMemo(() => id || label?.toLocaleLowerCase().replace(' ', '') || 'medly-multiSelect', [id, label]);

        const wrapperRef = useRef<HTMLDivElement>(null),
            optionsRef = useRef<HTMLUListElement>(null),
            inputRef = useCombinedRefs<HTMLInputElement>(ref, React.useRef(null)),
            [options, setOptions] = useState(defaultOptions),
            [builtInErrorMessage, setErrorMessage] = useState(''),
            [areOptionsVisible, setOptionsVisibilityState] = useState(false),
            [selectedOptions, setSelectedOptions] = useState(getDefaultSelectedOptions(defaultOptions, values)),
            [inputValue, setInputValue] = useState(values.toString()),
            [placeholder, setPlaceholder] = useState(values.length > 0 ? `${values.length} options selected` : props.placeholder),
            hasError = useMemo(() => !!errorText || !!builtInErrorMessage, [builtInErrorMessage, errorText]);

        const updateToDefaultOptions = useCallback(() => setOptions(defaultOptions), [defaultOptions]),
            hideOptions = useCallback(() => {
                setOptionsVisibilityState(false);
                inputRef.current && inputRef.current.blur();
            }, [areOptionsVisible]),
            showOptions = useCallback(() => {
                setOptionsVisibilityState(true);
                setInputValue('');
                inputRef.current && inputRef.current.focus();
            }, [areOptionsVisible]),
            toggleOptions = useCallback(() => !disabled && (areOptionsVisible ? hideOptions() : showOptions()), [
                disabled,
                areOptionsVisible
            ]),
            handleInputChange = useCallback(
                ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
                    setInputValue(value);
                    const newOptions = filterOptions(options, value);
                    newOptions.length && value ? setOptions(newOptions) : updateToDefaultOptions();
                    !areOptionsVisible && setOptionsVisibilityState(true);
                },
                [areOptionsVisible, options, updateToDefaultOptions]
            ),
            handleOptionClick = useCallback(
                (latestValues: any[]) => {
                    setSelectedOptions(getDefaultSelectedOptions(options, latestValues));
                    setErrorMessage((validator && validator(latestValues)) || '');
                    onChange && onChange(latestValues);
                },
                [options, onChange]
            ),
            handleOuterClick = useCallback(() => {
                areOptionsVisible && updateToDefaultOptions();
                hideOptions();
            }, [areOptionsVisible]),
            onClearHandler = useCallback(() => {
                setSelectedOptions([]);
                onChange && onChange([]);
                setInputValue('');
            }, []),
            handleInputOnBlur = useCallback(() => areOptionsVisible && inputRef.current.focus(), [areOptionsVisible]),
            inputValidator = useCallback(() => undefined, []);

        useEffect(() => {
            setSelectedOptions(getDefaultSelectedOptions(defaultOptions, values));
            setOptions(inputRef.current.value ? filterOptions(defaultOptions, inputRef.current.value) : defaultOptions);
        }, [defaultOptions, values]);

        useEffect(() => {
            if (areOptionsVisible) {
                inputRef.current && inputRef.current.focus();
                setPlaceholder(selectedOptions.length > 0 ? `${selectedOptions.length} options selected` : props.placeholder);
            } else {
                setInputValue(selectedOptions.map(obj => obj.value).toString());
                setOptions(defaultOptions);
                setTimeout(() => hideOptions(), 0);
            }
        }, [selectedOptions, areOptionsVisible]);

        const validate = useCallback(() => {
                const message =
                    (validator && validator(selectedOptions)) ||
                    (required && selectedOptions.length === 0 && 'Please select at least one option.') ||
                    '';
                setErrorMessage(message);
            }, [selectedOptions, validator]),
            handleWrapperOnBlur = useCallback(
                (event: React.FocusEvent<HTMLDivElement>) => {
                    const currentTarget = event.currentTarget;
                    setTimeout(() => !currentTarget.contains(document.activeElement) && validate(), 0);
                },
                [validate]
            );

        useOuterClickNotifier(() => {
            handleOuterClick();
        }, wrapperRef);

        const ChipEl = () => (
            <InputSuffix
                id={`${selectId}-count`}
                size={size}
                disabled={disabled}
                variant={variant}
                hasError={hasError}
                onClear={onClearHandler}
                isActive={areOptionsVisible}
                optionsCount={selectedOptions.length}
            />
        );

        return (
            <Wrapper
                id={`${selectId}-wrapper`}
                ref={wrapperRef}
                isSearchable={isSearchable}
                onClick={toggleOptions}
                isErrorPresent={hasError}
                onBlur={handleWrapperOnBlur}
                areOptionsVisible={areOptionsVisible}
                {...{ ...restProps, variant, disabled, minWidth, fullWidth }}
            >
                <TextField
                    fullWidth
                    required={required}
                    id={`${selectId}`}
                    size={size}
                    autoComplete="off"
                    variant={variant}
                    disabled={disabled}
                    value={inputValue}
                    ref={inputRef}
                    placeholder={placeholder}
                    suffix={ChipEl}
                    label={label}
                    onInvalid={validate}
                    onChange={handleInputChange}
                    onBlur={handleInputOnBlur}
                    readOnly={!isSearchable && !required}
                    helperText={helperText}
                    errorText={errorText || builtInErrorMessage}
                    validator={inputValidator}
                />
                {!disabled && areOptionsVisible && (
                    <Options
                        id={`${selectId}`}
                        size={size}
                        ref={optionsRef}
                        values={selectedOptions}
                        options={options}
                        onOptionClick={handleOptionClick}
                    />
                )}
            </Wrapper>
        );
    })
);

MultiSelect.displayName = 'MultiSelect';
MultiSelect.Style = Wrapper;
MultiSelect.defaultProps = {
    size: 'M',
    values: [],
    variant: 'filled',
    isSearchable: true,
    placeholder: 'Please Select . . .'
};
