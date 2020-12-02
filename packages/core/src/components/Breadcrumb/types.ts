import { HTMLProps } from '@medly-components/utils';

export type BreadcrumbProps = Omit<HTMLProps<HTMLOListElement>, 'type'> & {
    /** Separator to be used between links */
    separator?: string | React.ReactNode;
};

export type BreadcrumbStaticProps = {
    Item: React.FC<HTMLProps<HTMLLIElement>>;
    Back: React.FC<HTMLProps<HTMLLIElement>>;
};
