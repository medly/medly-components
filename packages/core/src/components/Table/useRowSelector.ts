import { useCallback, useMemo, useState } from 'react';

type Result = [
    { value: number[]; setValue: React.Dispatch<React.SetStateAction<number[]>>; isAllSelected: boolean },
    { value: number[]; setValue: React.Dispatch<React.SetStateAction<number[]>> },
    (id: number) => void
];

const useRowSelector = (initialIds: number[], initialSelectedIds: number[]): Result => {
    const [ids, setIds] = useState<number[]>(initialIds),
        [selectedIds, setSelectedIds] = useState(initialSelectedIds);

    const toggleId = useCallback(
        (id: number) => {
            setSelectedIds(sIds => {
                if (id === -1) {
                    return sIds.length === ids.length ? [] : ids;
                }
                return sIds.indexOf(id) === -1 ? [...sIds, id] : sIds.filter(i => i !== id);
            });
        },
        [ids]
    );

    const idsHookValues = useMemo(
            () => ({ value: ids, setValue: setIds, isAllSelected: ids.length > 0 && ids.length === selectedIds.length }),
            [ids, selectedIds]
        ),
        selectedIdsHookValues = useMemo(() => ({ value: selectedIds, setValue: setSelectedIds }), [selectedIds]);

    return [idsHookValues, selectedIdsHookValues, toggleId];
};

export default useRowSelector;
