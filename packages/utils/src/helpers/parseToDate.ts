type DisplayFormat =
    | 'dd/MM/yyyy'
    | 'dd/yyyy/MM'
    | 'MM/dd/yyyy'
    | 'MM/yyyy/dd'
    | 'yyyy/dd/MM'
    | 'yyyy/MM/dd'
    | 'dd-MM-yyyy'
    | 'dd-yyyy-MM'
    | 'MM-dd-yyyy'
    | 'MM-yyyy-dd'
    | 'yyyy-dd-MM'
    | 'yyyy-MM-dd';

const getIndex = (arr: string[], str: string) => arr.findIndex(curr => curr === str);

export const parseToDate = (initialState: string, displayFormat: DisplayFormat) => {
    const dateStrings = displayFormat.replace(/\s/g, '').split(/[-/]/),
        dateValues = initialState.replace(/\s/g, '').split(/[-/]/),
        yyyy = dateValues[getIndex(dateStrings, 'yyyy')],
        MM = dateValues[getIndex(dateStrings, 'MM')],
        dd = dateValues[getIndex(dateStrings, 'dd')];

    return yyyy?.length === 4 && MM?.length === 2 && dd?.length === 2
        ? new Date(Number(yyyy), Number(MM) - 1, Number(dd))
        : new Date('Invalid Date');
};
