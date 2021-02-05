import { isValid, parse } from 'date-fns';

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
    const truncatedDate = initialState.replace(/\s/g, ''),
        truncatedDisplayFormat = displayFormat.replace(/\s/g, ''),
        tokens = truncatedDisplayFormat.split(/[-/]/),
        dateValues = truncatedDate.split(/[-/]/),
        yyyy = dateValues[getIndex(tokens, 'yyyy')],
        MM = dateValues[getIndex(tokens, 'MM')],
        dd = dateValues[getIndex(tokens, 'dd')],
        parsedDate = parse(truncatedDate, truncatedDisplayFormat, new Date());

    return yyyy?.length === 4 && MM?.length === 2 && dd?.length === 2 && isValid(parsedDate) ? parsedDate : new Date('Invalid Date');
};
