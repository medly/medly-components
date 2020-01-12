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
    /** Hide first and last named button */
    hideFirstLastLinks?: boolean;
    /** Hide Next and Prev named button */
    hidePrevNextLinks?: boolean;
    /** Number of page link to be dislayed */
    pageRangeDisplayed?: number;
}
