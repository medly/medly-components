import { Dispatch, SetStateAction, useCallback, useMemo, useState } from 'react';
import { Data } from './types';

type Result = {
    uniqueIds?: (string | number)[];
    areAllRowsSelected: boolean;
    isAnyRowSelected: boolean;
    selectedIds: (string | number)[];
    toggleId: (id: number | string) => void;
    setSelectedIds: Dispatch<SetStateAction<(string | number)[]>>;
};
type Params = {
    data: Data;
    rowSelectionDisableKey: string;
    rowIdentifier: string;
};

const useRowSelector = ({ data, rowSelectionDisableKey, rowIdentifier }: Params): Result => {
    const [selectedIds, setSelectedIds] = useState<(string | number)[]>([]),
        uniqueIds = useMemo(() => data.filter(dt => !dt[rowSelectionDisableKey]).map(dt => dt[rowIdentifier]), [
            data,
            rowSelectionDisableKey,
            rowIdentifier
        ]),
        areAllRowsSelected = useMemo(() => {
            return uniqueIds.length > 0 && uniqueIds.length === selectedIds.length;
        }, [uniqueIds, selectedIds]),
        isAnyRowSelected = useMemo(() => selectedIds.length > 0 && !areAllRowsSelected, [selectedIds, areAllRowsSelected]);

    const toggleId = useCallback(
        (id: number | string) =>
            setSelectedIds(sIds => {
                if (id === -1) {
                    return sIds.length === uniqueIds.length ? [] : uniqueIds;
                }
                return sIds.indexOf(id) === -1 ? [...sIds, id] : sIds.filter(i => i !== id);
            }),
        [uniqueIds, setSelectedIds]
    );

    return { areAllRowsSelected, isAnyRowSelected, selectedIds, uniqueIds, toggleId, setSelectedIds };
};

export default useRowSelector;
