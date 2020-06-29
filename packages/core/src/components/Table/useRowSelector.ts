import { useCallback, useEffect, useMemo, useState } from 'react';
import { Data } from './types';

type Result = {
    isEachRowSelected: boolean;
    isAnyRowSelected: boolean;
    selectedIds: number[];
    toggleId: (id: number) => void;
};

const useRowSelector = (data: Data[], initialSelectedIds: number[], rowSelectionDisableKey: string, uniqueKeyName: string): Result => {
    const ids = useMemo(() => data.filter(dt => !dt[rowSelectionDisableKey]).map(dt => dt[uniqueKeyName]), [
            data,
            rowSelectionDisableKey,
            uniqueKeyName
        ]),
        [selectedIds, setSelectedIds] = useState(initialSelectedIds),
        isEachRowSelected = useMemo(() => ids.length > 0 && ids.length === selectedIds.length, [ids, selectedIds]),
        isAnyRowSelected = useMemo(() => selectedIds.length > 0 && !isEachRowSelected, [selectedIds, isEachRowSelected]);

    const toggleId = useCallback(
        (id: number) =>
            setSelectedIds(sIds => {
                if (id === -1) {
                    return sIds.length === ids.length ? [] : ids;
                }
                return sIds.indexOf(id) === -1 ? [...sIds, id] : sIds.filter(i => i !== id);
            }),
        [ids]
    );

    useEffect(() => {
        setSelectedIds(initialSelectedIds);
    }, [initialSelectedIds]);

    return { isEachRowSelected, isAnyRowSelected, selectedIds, toggleId };
};

export default useRowSelector;
