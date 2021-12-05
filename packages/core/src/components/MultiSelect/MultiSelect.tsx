import { useCombinedRefs, useOuterClickNotifier, useUpdateEffect, WithStyle } from '@medly-components/utils';
import type { FC, FocusEvent } from 'react';
import { forwardRef, memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import TextField from '../TextField';
import { filterOptions, getDefaultSelectedOptions, getInputValue } from './helpers';
import InputSuffix from './InputSuffix';
import { Wrapper } from './MultiSelect.styled';
import Options from './Options';
import { MultiSelectProps } from './types';

const Component: FC<MultiSelectProps> = memo(
    forwardRef((props, ref) => {
        const {
                id,
                size,
                label,
                disabled,
                showDecorators,
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
                onInputChange,
                showTooltipForHelperAndErrorText,
                prefix,
                isCreatable = false,
                ...restProps
            } = props,
            selectId = useMemo(() => id || label?.toLocaleLowerCase().replace(' ', '') || 'medly-multiSelect', [id, label]);

        const wrapperRef = useRef<HTMLDivElement>(null),
            optionsRef = useRef<HTMLUListElement>(null),
            inputRef = useCombinedRefs<HTMLInputElement>(ref, useRef(null)),
            [options, setOptions] = useState(defaultOptions),
            [builtInErrorMessage, setErrorMessage] = useState(''),
            [areOptionsVisible, setOptionsVisibilityState] = useState(false),
            [selectedOptions, setSelectedOptions] = useState(getDefaultSelectedOptions(defaultOptions, values!)),
            [inputValue, setInputValue] = useState(getInputValue(selectedOptions)),
            [placeholder, setPlaceholder] = useState(values!.length > 0 ? `${values!.length} options selected` : props.placeholder),
            hasError = useMemo(() => !!errorText || !!builtInErrorMessage, [builtInErrorMessage, errorText]);

        const updateToDefaultOptions = useCallback(() => setOptions(defaultOptions), [defaultOptions]),
            hideOptions = useCallback(() => {
                setOptionsVisibilityState(false);
                onInputChange && onInputChange('');
                inputRef.current && inputRef.current.blur();
            }, [areOptionsVisible, onInputChange]),
            showOptions = useCallback(() => {
                setOptionsVisibilityState(true);
                setInputValue('');
                inputRef.current && inputRef.current.focus();
            }, [areOptionsVisible]),
            toggleOptions = useCallback(
                () => !disabled && (areOptionsVisible ? hideOptions() : showOptions()),
                [disabled, areOptionsVisible]
            ),
            handleInputChange = useCallback(
                ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
                    setInputValue(value);
                    const newOptions = filterOptions(options, value);
                    newOptions.length && value ? setOptions(newOptions) : updateToDefaultOptions();
                    onInputChange && onInputChange(value);
                    !areOptionsVisible && setOptionsVisibilityState(true);
                },
                [areOptionsVisible, options, updateToDefaultOptions, onInputChange]
            ),
            handleOptionClick = useCallback(
                (latestValues: any[]) => {
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
                const filteredOptions = selectedOptions.filter(({ disabled }) => disabled).map(({ value }) => value);
                onChange && onChange(filteredOptions);
            }, [selectedOptions]),
            handleInputOnBlur = useCallback(() => areOptionsVisible && inputRef.current?.focus(), [areOptionsVisible]),
            inputValidator = useCallback(() => '', []);

        const validate = useCallback(() => {
                const message =
                    (validator && validator(selectedOptions)) ||
                    (required && selectedOptions.length === 0 && 'Please select at least one option.') ||
                    '';
                setErrorMessage(message);
            }, [selectedOptions, validator]),
            handleWrapperOnBlur = useCallback(
                (event: FocusEvent<HTMLDivElement>) => {
                    const { currentTarget } = event;
                    setTimeout(() => !currentTarget.contains(document.activeElement) && validate(), 0);
                },
                [validate]
            );

        useEffect(() => {
            setSelectedOptions(
                getDefaultSelectedOptions([...defaultOptions, ...selectedOptions.filter(val => val.creatable === true)], values!)
            );
            setOptions(inputRef.current?.value ? filterOptions(defaultOptions, inputRef.current?.value) : defaultOptions);
        }, [defaultOptions, values]);

        useEffect(() => {
            if (areOptionsVisible) {
                inputRef.current && inputRef.current.focus();
                setPlaceholder(selectedOptions.length > 0 ? `${selectedOptions.length} options selected` : props.placeholder);
            } else {
                setInputValue(getInputValue(selectedOptions));
                setOptions(defaultOptions);
                setTimeout(() => hideOptions(), 0);
            }
        }, [selectedOptions, areOptionsVisible]);

        useUpdateEffect(() => {
            selectedOptions.length > 0 && validate();
        }, [selectedOptions]);

        useOuterClickNotifier(() => {
            handleOuterClick();
        }, wrapperRef);

        const ChipEl = () => (
            <InputSuffix
                id={`${selectId}-count`}
                size={size!}
                disabled={disabled}
                variant={variant!}
                hasError={hasError}
                onClear={onClearHandler}
                isActive={areOptionsVisible}
                optionsCount={selectedOptions.length}
                hideClearIcon={selectedOptions.every(({ disabled }) => disabled)}
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
                variant={variant!}
                {...{ ...restProps, disabled, minWidth, fullWidth }}
            >
                <TextField
                    fullWidth
                    required={required}
                    id={`${selectId}`}
                    size={size}
                    autoComplete="off"
                    variant={variant}
                    disabled={disabled}
                    showDecorators={showDecorators}
                    value={inputValue}
                    ref={inputRef}
                    placeholder={placeholder}
                    suffix={ChipEl}
                    label={label}
                    minWidth={minWidth}
                    onInvalid={validate}
                    onChange={handleInputChange}
                    onBlur={handleInputOnBlur}
                    readOnly={!isSearchable && !required}
                    helperText={helperText}
                    errorText={errorText || builtInErrorMessage}
                    validator={inputValidator}
                    showTooltipForHelperAndErrorText={showTooltipForHelperAndErrorText}
                    prefix={prefix}
                />
                {!disabled && areOptionsVisible && (
                    <Options
                        id={`${selectId}`}
                        inputValue={inputValue}
                        size={size!}
                        ref={optionsRef}
                        values={selectedOptions}
                        setValues={setSelectedOptions}
                        options={options}
                        onOptionClick={handleOptionClick}
                        isCreatable={isCreatable}
                    />
                )}
            </Wrapper>
        );
    })
);

Component.displayName = 'MultiSelect';
Component.defaultProps = {
    size: 'M',
    values: [],
    minWidth: '20rem',
    variant: 'filled',
    isSearchable: true,
    placeholder: 'Please Select . . .',
    showDecorators: true,
    isCreatable: false
};
export const MultiSelect: FC<MultiSelectProps> & WithStyle = Object.assign(Component, { Style: Wrapper });
