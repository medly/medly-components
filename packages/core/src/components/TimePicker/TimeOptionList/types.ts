import type { HTMLProps } from '@medly-components/utils';

export type TIME_OPTION_TYPE = 'HOUR' | 'MINUTES' | 'PERIOD';

export type TimeOptionListProps = Omit<HTMLProps<HTMLUListElement>, 'onChange'> & {
    type: TIME_OPTION_TYPE;
    value: number;
    onChange: (type: TIME_OPTION_TYPE, value: number) => void;
};
