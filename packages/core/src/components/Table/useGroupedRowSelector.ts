import { useCallback, useState } from 'react';

type Result = {
    selectedIds: (string | number)[];
    toggleIds: (id: number[] | string[]) => void;
};
const useGroupedRowSelector = (): Result => {
    const [selectedIds, setSelectedIds] = useState<(string | number)[]>([]);

    const toggleIds = useCallback(
        (ids: number[] | string[]) =>
            setSelectedIds(sIds =>
                // @ts-ignore
                ids.reduce((acc, cur) => (acc.indexOf(cur) === -1 ? [...acc, cur] : acc.filter(id => id !== cur)), [...sIds])
            ),
        [setSelectedIds]
    );

    return { selectedIds, toggleIds };
};

export default useGroupedRowSelector;
