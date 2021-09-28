import { WithThemeProp } from '@medly-components/utils';

export interface FlatVariantProps {
    /** Id of flat variant */
    id: string;
    /** Selected Value */
    value: string;
    /** Label */
    label?: string;
    /** Error Text */
    errorText?: string;
    /** Helper Text */
    helperText?: string;
    /** Set it true to disable the select action */
    disabled?: boolean;
    /** Set it true to when options are visible */
    areOptionsVisible?: boolean;
}

export type StyledFlatVariantProps = Omit<FlatVariantProps, 'value'> & WithThemeProp;
