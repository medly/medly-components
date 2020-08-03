import { ChevronDownIcon } from '@medly-components/icons';
import { useCombinedRefs, useOuterClickNotifier, WithStyle } from '@medly-components/utils';
import React, { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import TextField from '../TextField';
import { Chip } from './Chip/Chip';
import { filterOptions, getDefaultSelectedOptions } from './helpers';
import { SuffixWrap, Wrapper } from './MultiSelect.styled';
import Options from './Options';
import { SelectProps } from './types';

export const MultiSelect: FC<SelectProps> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const {
                id,
                disabled,
                values,
                onChange,
                options: defaultOptions,
                variant,
                fullWidth,
                minWidth,
                isSearchable,
                ...inputProps
            } = props,
            selectId = useMemo(() => id || inputProps.label?.toLocaleLowerCase() || 'medly-multiSelect', [id, inputProps.label]);

        const wrapperRef = useRef<HTMLDivElement>(null),
            optionsRef = useRef<HTMLUListElement>(null),
            inputRef = useCombinedRefs<HTMLInputElement>(ref, React.useRef(null)),
            [options, setOptions] = useState(defaultOptions),
            [areOptionsVisible, setOptionsVisibilityState] = useState(false),
            [selectedOptions, setSelectedOptions] = useState(getDefaultSelectedOptions(defaultOptions, values)),
            [inputValue, setInputValue] = useState(values.toString()),
            [placeholder, setPlaceholder] = useState(values.length > 0 ? `${values.length} options selected` : props.placeholder);

        const updateToDefaultOptions = useCallback(() => setOptions(defaultOptions), [defaultOptions]),
            hideOptions = useCallback(() => {
                setOptionsVisibilityState(false);
                inputRef.current && inputRef.current.blur();
            }, [areOptionsVisible]),
            showOptions = useCallback(() => {
                setOptionsVisibilityState(true);
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
                    !areOptionsVisible && showOptions();
                },
                [areOptionsVisible, options, updateToDefaultOptions]
            ),
            handleOptionClick = useCallback(
                (latestValues: any[]) => {
                    setSelectedOptions(getDefaultSelectedOptions(options, latestValues));
                    onChange && onChange(latestValues);
                },
                [options, onChange]
            ),
            handleOuterClick = useCallback(() => {
                if (areOptionsVisible) {
                    updateToDefaultOptions();
                }
                hideOptions();
            }, [areOptionsVisible]),
            getState = useCallback(() => {
                if (props.disabled) {
                    return 'disabled';
                }
                if (props.errorText) {
                    return 'error';
                }
                if (areOptionsVisible) {
                    return 'active';
                }
                return 'default';
            }, [areOptionsVisible, props.errorText, props.disabled]),
            onClearHandler = useCallback(() => {
                setSelectedOptions([]);
                setInputValue('');
            }, []),
            handleOnBlur = useCallback(() => {
                if (areOptionsVisible) {
                    inputRef.current && inputRef.current.focus();
                }
            }, [areOptionsVisible]);

        useEffect(() => {
            setSelectedOptions(getDefaultSelectedOptions(defaultOptions, values));
            setOptions(defaultOptions);
        }, [defaultOptions, values]);

        useEffect(() => {
            setPlaceholder(selectedOptions.length > 0 ? `${selectedOptions.length} options selected` : props.placeholder);
        }, [selectedOptions]);

        useEffect(() => {
            if (areOptionsVisible) {
                inputRef.current && inputRef.current.focus();
                setInputValue('');
            } else {
                setInputValue(selectedOptions.map(obj => obj.value).toString());
                setOptions(defaultOptions);
                setTimeout(() => hideOptions(), 0);
            }
        }, [selectedOptions, areOptionsVisible]);

        useOuterClickNotifier(() => {
            handleOuterClick();
        }, wrapperRef);

        const chipEl = () => {
            return (
                <SuffixWrap>
                    {selectedOptions.length > 0 && (
                        <Chip
                            testId="cancel-chip"
                            label={selectedOptions.length}
                            state={getState()}
                            variant={variant}
                            onClear={onClearHandler}
                        />
                    )}
                    <ChevronDownIcon />
                </SuffixWrap>
            );
        };

        return (
            <Wrapper
                id={`${selectId}-wrapper`}
                ref={wrapperRef}
                isSearchable={isSearchable}
                onClick={toggleOptions}
                isErrorPresent={!!props.errorText || (inputProps.required && selectedOptions.length === 0)}
                areOptionsVisible={areOptionsVisible}
                {...{ variant, disabled, minWidth, fullWidth }}
            >
                <TextField
                    fullWidth
                    id={`${selectId}`}
                    autoComplete="off"
                    variant={variant}
                    disabled={disabled}
                    value={inputValue}
                    ref={inputRef}
                    placeholder={placeholder}
                    suffix={chipEl}
                    onChange={handleInputChange}
                    onBlur={handleOnBlur}
                    {...inputProps}
                />
                {!disabled && areOptionsVisible && (
                    <Options
                        id={`${selectId}-options`}
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
    values: [],
    variant: 'outlined',
    isSearchable: true,
    placeholder: 'Please Select . . .'
};
