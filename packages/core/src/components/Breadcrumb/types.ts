import { HTMLProps } from '@medly-components/utils';
import type { FC, ReactNode } from 'react';

export type BreadcrumbProps = Omit<HTMLProps<HTMLOListElement>, 'type'> & {
    /** Use a separator between links */
    separator?: string | ReactNode;
};

export type BreadcrumbStaticProps = {
    Item: FC<HTMLProps<HTMLLIElement>>;
    Back: FC<HTMLProps<HTMLLIElement>>;
};
