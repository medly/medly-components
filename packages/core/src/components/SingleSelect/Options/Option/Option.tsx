import { ArrowRightIcon, CheckIcon } from '@medly-components/icons';
import { useKeyPress, useOuterClickNotifier, WithStyle } from '@medly-components/utils';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Text from '../../../Text';
import Options from '../Options';
import { OptionStyled } from './Option.styled';
import { OptionProps } from './types';

const Option: React.FC<OptionProps> & WithStyle = React.memo(props => {
    const ref = useRef(null),
        [areOptionsVisible, setOptionsVisibilityState] = useState(false),
        { value, label, disabled, selected, onClick } = props,
        id = label.replace(/ /g, '-'),
        enterPress = useKeyPress('Enter'),
        leftPress = useKeyPress('ArrowLeft'),
        rightPress = useKeyPress('ArrowRight'),
        isNested = Array.isArray(value);

    const showNestedOptions = useCallback(() => setOptionsVisibilityState(true), []),
        hideNestedOptions = useCallback(() => setOptionsVisibilityState(false), []),
        handleOnClick = useCallback(
            (event: React.MouseEvent<HTMLLIElement>) => {
                event.stopPropagation();
                isNested && showNestedOptions();
                onClick({ value, label, disabled, selected });
            },
            [isNested, disabled]
        );

    useEffect(() => {
        selected &&
            ref.current.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest'
            });
    }, [selected]);

    useEffect(() => {
        if (!disabled && isNested && selected) {
            (rightPress || enterPress) && showNestedOptions();
            leftPress && !value.find((op: OptionProps) => op.selected && Array.isArray(op.value)) && hideNestedOptions();
        }
    }, [value, disabled, isNested, selected, leftPress, rightPress, enterPress]);

    useOuterClickNotifier(() => hideNestedOptions(), ref);

    return (
        <OptionStyled
            id={id}
            ref={ref}
            disabled={disabled}
            selected={selected}
            onClick={handleOnClick}
            onMouseEnter={showNestedOptions}
            onMouseLeave={hideNestedOptions}
        >
            <Text textWeight={selected ? 'Strong' : 'Regular'}>{label}</Text>
            {isNested ? <ArrowRightIcon /> : selected && <CheckIcon />}
            {areOptionsVisible && isNested && (
                <Options isNested id={`${id}-options`} options={value} variant="outlined" onOptionClick={onClick} />
            )}
        </OptionStyled>
    );
});
Option.displayName = 'Option';
Option.Style = OptionStyled;

export default Option;
