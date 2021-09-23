import { DisplayFormat } from '../../components/Fields/types';

export interface Handlers {
    // Form submit handler
    handleFormSubmit: (onSubmit: (values: object) => void) => (e: React.FormEvent<HTMLFormElement>) => void;
    // Form reset handler
    handleFormReset: (onReset?: (e: React.FormEvent<HTMLFormElement>) => void) => (e: React.FormEvent<HTMLFormElement>) => void;
    // Common Focus handler
    handleFocus: (name: string, onFocus?: (e: any) => void) => (event: any) => void;
    // Text change handler
    handleTextChange: (name: string) => (event: React.FormEvent<HTMLInputElement>) => void;
    // Number Change handler
    handleNumberChange: (name: string) => (event: React.FormEvent<HTMLInputElement>) => void;
    // RadioGroup change handler
    handleRadioGroupChange: (name: string) => (value: any) => void;
    // SingleSelect change handler
    handleSingleSelectChange: (name: string) => (value: any) => void;
    // DatePicker Component
    handleDateChange: (name: string, displayFormat: DisplayFormat) => (value: any) => void;
    // DateRangePicker Component
    handleDateRangeChange: (name: string, displayFormat: DisplayFormat) => (value: any) => void;
    // CheckboxGroup change handler
    handleCheckboxGroupChange: (name: string) => (values: any[]) => void;
    // MultiSelect change handler
    handleMultiSelectChange: (name: string) => (values: any[]) => void;
    // Checkbox change handler
    handleCheckboxChange: (name: string) => (event: React.FormEvent<HTMLInputElement>) => void;
    // File input Component
    handleFileChange: (name: string, maxSize?: number, onError?: (key: string, message: string) => void) => (files: FileList) => void;
    // Generic Change
    handleChange: (name: string, value: any) => void;
    // Common Focus handler
    getPeriodFromDates: (
        startDate: string | Date,
        endDate: string | Date,
        displayFormat: DisplayFormat
    ) => { startDate: Date | null; endDate: Date | null };
}

export interface UseFormResult {
    // Form key
    formKey: number;
    // Form fields values
    values: { [K: string]: any };
    // Form fields handlers
    handlers: Handlers;
    // Form fields error messages
    errorMessages: { [K: string]: any };
    // Function to change error messages
    addErrorMessage: (key: string, message: string) => void;
    // Function can be called to reset the values
    setValues: React.Dispatch<React.SetStateAction<{}>>;
    // Function can be called to reset the error messages
    setErrorMessages: React.Dispatch<React.SetStateAction<{}>>;
}
