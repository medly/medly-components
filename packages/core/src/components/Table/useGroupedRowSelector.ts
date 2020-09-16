import { Dispatch, SetStateAction, useCallback } from 'react';

type Result = {
    selectedIds: (string | number)[];
    toggleIds: (ids: any[]) => void;
};
type Params = {
    selectedIds?: (string | number)[];
    setSelectedIds: Dispatch<SetStateAction<(string | number)[]>>;
};

const useGroupedRowSelector = ({ selectedIds, setSelectedIds }: Params): Result => {
    const toggleIds = useCallback(
        (ids: number[] | string[]) =>
            setSelectedIds(sIds =>
                // @ts-ignore
                ids.reduce((acc, cur) => (acc.indexOf(cur) === -1 ? [...acc, cur] : acc.filter(id => id !== cur)), [...sIds])
            ),
        []
    );

    return { selectedIds, toggleIds };
};

export default useGroupedRowSelector;
