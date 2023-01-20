import { HTMLProps } from '@medly-components/utils';
import type { ReactNode } from 'react';
import { BreadcrumbBack } from './Back/Back';
import { BreadcrumbItem } from './Item/Item';

export type BreadcrumbProps = Omit<HTMLProps<HTMLOListElement>, 'type'> & {
    /** You can pass any separator which you can use between the links */
    separator?: string | ReactNode;
};

export type BreadcrumbStaticProps = {
    Item: typeof BreadcrumbItem;
    Back: typeof BreadcrumbBack;
};
