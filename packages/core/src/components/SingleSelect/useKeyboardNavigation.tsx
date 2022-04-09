import { useKeyPress } from '@medly-components/utils';
import { useCallback, useEffect, useRef, useState } from 'react';
import { getNextOption, getPrevOption, getUpdatedOptions } from './helpers';
import { Option } from './types';

type Props = {
    isFocused: React.MutableRefObject<boolean>;
    selectedOption?: Option;
    options: Option[];
    setOptions: React.Dispatch<React.SetStateAction<Option[]>>;
    areOptionsVisible: boolean;
    handleOptionClick: (op: Option) => void;
    showOptions: () => void;
    optionsRef: React.RefObject<HTMLUListElement>;
    hideOptions?: () => void;
};
export const useKeyboardNavigation = (props: Props) => {
    const {
        isFocused,
        selectedOption = { value: '', label: '' },
        setOptions,
        options,
        areOptionsVisible,
        handleOptionClick,
        showOptions,
        optionsRef,
        hideOptions
    } = props;

    const downPress = useKeyPress('ArrowDown'),
        leftPress = useKeyPress('ArrowLeft'),
        rightPress = useKeyPress('ArrowRight'),
        upPress = useKeyPress('ArrowUp'),
        enterPress = useKeyPress('Enter'),
        tabPress = useKeyPress('Tab'),
        nestedOptions = useRef<Array<Option>>([]),
        [hoveredOption, setHoveredOption] = useState(selectedOption);

    const hoverOption = useCallback(
        (option: Option) => {
            setHoveredOption(option);
            setOptions(getUpdatedOptions(options, option, 'hovered'));
        },
        [options]
    );

    useEffect(() => {
        if (!areOptionsVisible) {
            nestedOptions.current = [];
        }
    }, [areOptionsVisible]);

    useEffect(() => {
        if (isFocused.current && (downPress || upPress)) {
            const nested = nestedOptions.current.slice(-1)[0]?.value,
                hovered = nested
                    ? hoveredOption
                    : options.find(op => op.hovered) || options.find(op => op.selected) || { value: '', label: '' },
                nextValueGetter = downPress ? getNextOption : getPrevOption;
            options.length && areOptionsVisible ? hoverOption(nextValueGetter(hovered, nested || options)) : showOptions();
        }
    }, [downPress, upPress, areOptionsVisible]);

    useEffect(() => {
        if (isFocused.current && rightPress && areOptionsVisible && Array.isArray(hoveredOption.value)) {
            nestedOptions.current.push(hoveredOption);
            (!hoveredOption.value.some(op => op.hovered) || !hoveredOption.value.some(op => op.selected)) &&
                hoverOption(hoveredOption.value[0]);
        }
    }, [rightPress, areOptionsVisible, hoveredOption]);

    useEffect(() => {
        isFocused.current &&
            leftPress &&
            areOptionsVisible &&
            nestedOptions.current.length > 0 &&
            hoverOption(nestedOptions.current.pop()!);
    }, [leftPress, areOptionsVisible]);

    useEffect(() => {
        if (isFocused.current && tabPress && optionsRef.current) {
            isFocused.current = false;
            setTimeout(() => !isFocused.current && hideOptions && hideOptions(), 250);
        }
    }, [tabPress]);

    useEffect(() => {
        if (isFocused.current && enterPress && optionsRef.current) {
            options.length > 0 && !Array.isArray(hoveredOption.value) && handleOptionClick(hoveredOption);
        }
    }, [enterPress]);
};
