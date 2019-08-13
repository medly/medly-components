import { useState } from 'react';

type Result = [
    { value: number[]; setValue: React.Dispatch<React.SetStateAction<number[]>>; isAllSelected: boolean },
    { value: number[]; setValue: React.Dispatch<React.SetStateAction<number[]>> },
    (id: number) => void
];

const useRowSelector = (initialIds: number[], initialSelectedIds: number[]): Result => {
    const [ids, setIds] = useState<number[]>(initialIds),
        [selectedIds, setSelectedIds] = useState(initialSelectedIds);

    function toggleId(id: number) {
        if (id === -1) {
            selectedIds.length === ids.length ? setSelectedIds([]) : setSelectedIds(ids);
        } else {
            const newSelectedIds = selectedIds.indexOf(id) === -1 ? [...selectedIds, id] : selectedIds.filter(i => i !== id);
            setSelectedIds(newSelectedIds);
        }
    }

    return [
        { value: ids, setValue: setIds, isAllSelected: ids.length > 0 && ids.length === selectedIds.length },
        { value: selectedIds, setValue: setSelectedIds },
        toggleId
    ];
};

export default useRowSelector;
