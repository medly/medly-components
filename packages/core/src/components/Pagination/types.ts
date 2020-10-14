import { HTMLProps } from '@medly-components/utils';

export interface PaginationProps extends HTMLProps<HTMLUListElement> {
    /** Active page number */
    activePage?: number;
    /** Total items to be paginated */
    totalItems: number;
    /** Function to be called on page click */
    onPageClick: (page: number) => void;
    /** Items count per page */
    itemsPerPage?: number;
    /** Hide Next and Prev named button */
    hidePrevNextLinks?: boolean;
    /** Page selector popup placement */
    pageSelectorPopupPlacement?: 'top' | 'bottom';
}
