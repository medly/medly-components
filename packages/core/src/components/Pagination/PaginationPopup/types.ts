export interface Props {
    prevPageNumber: number;
    nextPageNumber: number;
    pageSelectorPopupPlacement?: 'top' | 'bottom';
    onClickHandler: (page: number) => void;
}
