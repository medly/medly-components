import { Dispatch, SetStateAction, useCallback, useEffect, useMemo, useState } from 'react';
import { Data } from './types';

type Result = {
    uniqueIds: (string | number)[];
    areAllRowsSelected: boolean;
    isAnyRowSelected: boolean;
    toggleId: (id: number | string) => void;
    setUniqueIds: Dispatch<SetStateAction<any[]>>;
};
type Params = {
    data: Data;
    rowSelectionDisableKey?: string;
    rowIdentifier: string;
    selectedIds: (string | number)[];
    setSelectedIds?: Dispatch<SetStateAction<(string | number)[]>>;
};

const useRowSelector = ({ data, rowSelectionDisableKey = '', rowIdentifier, selectedIds, setSelectedIds }: Params): Result => {
    const [uniqueIds, setUniqueIds] = useState<any[]>([]),
        areAllRowsSelected = useMemo(() => uniqueIds.length > 0 && uniqueIds.length === selectedIds.length, [uniqueIds, selectedIds]),
        isAnyRowSelected = useMemo(() => selectedIds.length > 0 && !areAllRowsSelected, [selectedIds, areAllRowsSelected]);

    const toggleId = useCallback(
        (id: number | string) =>
            setSelectedIds &&
            setSelectedIds(sIds => {
                if (id === -1) {
                    return sIds.length === uniqueIds.length ? [] : uniqueIds;
                }
                return sIds.indexOf(id) === -1 ? [...sIds, id] : sIds.filter(i => i !== id);
            }),
        [uniqueIds, setSelectedIds]
    );

    useEffect(() => {
        setUniqueIds(data.filter(dt => rowSelectionDisableKey && !dt[rowSelectionDisableKey]).map(dt => dt[rowIdentifier]));
    }, [data, rowSelectionDisableKey, rowIdentifier]);

    return { areAllRowsSelected, isAnyRowSelected, uniqueIds, toggleId, setUniqueIds };
};

export default useRowSelector;
