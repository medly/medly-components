export type MonthAndYearSelectionProps = {
    id: any;
    month: number;
    year: number;
    onChange: (val: { month: number; year: number }) => void;
    minSelectableDate?: Date;
    maxSelectableDate?: Date;
    isErrorPresent?: boolean;
};
