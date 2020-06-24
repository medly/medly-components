import { useKeyPress } from '@medly-components/utils';
import { useEffect, useRef } from 'react';
import { getNextOption, getPrevOption } from './helpers';
import { Option } from './types';

type Props = {
    isFocused: React.MutableRefObject<boolean>;
    selectedOption: Option;
    options: Option[];
    areOptionsVisible: boolean;
    selectOption: (op: Option) => void;
    handleOptionClick: (op: Option) => void;
    showOptions: () => void;
    optionsRef: React.MutableRefObject<HTMLUListElement>;
};
export const useKeyboardNavigation = (props: Props) => {
    const downPress = useKeyPress('ArrowDown'),
        leftPress = useKeyPress('ArrowLeft'),
        rightPress = useKeyPress('ArrowRight'),
        upPress = useKeyPress('ArrowUp'),
        enterPress = useKeyPress('Enter'),
        nestedOptions = useRef<Array<Option>>([]);

    const { isFocused, selectedOption, options, areOptionsVisible, selectOption, handleOptionClick, showOptions, optionsRef } = props;

    useEffect(() => {
        if (isFocused.current && (downPress || upPress)) {
            const nested = nestedOptions.current.slice(-1)[0]?.value,
                selected = nested ? selectedOption : options.find(op => op.selected) || { value: '', label: '' },
                nextValueGetter = downPress ? getNextOption : getPrevOption;
            areOptionsVisible ? selectOption(nextValueGetter(selected, nested || options)) : showOptions();
        }
    }, [downPress, upPress, isFocused.current, areOptionsVisible]);

    useEffect(() => {
        if (rightPress && areOptionsVisible && Array.isArray(selectedOption.value)) {
            nestedOptions.current.push(selectedOption);
            !selectedOption.value.some(op => op.selected) && selectOption(selectedOption.value[0]);
        }
    }, [rightPress, areOptionsVisible, selectedOption]);

    useEffect(() => {
        leftPress && areOptionsVisible && nestedOptions.current.length && selectOption(nestedOptions.current.pop());
    }, [leftPress, areOptionsVisible]);

    useEffect(() => {
        if (enterPress && optionsRef.current) {
            options.length > 0 && !Array.isArray(selectedOption.value) && handleOptionClick(selectedOption);
        }
    }, [enterPress]);
};
