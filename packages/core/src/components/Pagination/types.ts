export interface PaginationProps {
    totalItems: number;
    onPageClick: (page: number) => void;
    itemsPerPage?: number;
    hideFirstLastLinks?: boolean;
    hidePrevNextLinks?: boolean;
    activePage?: number;
    pageRangeDisplayed?: number;
}
