export const paginator = (totalItems: number, activePage = 1, itemsPerPage = 20, pageRangeDisplayed = 5) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const currentPage = activePage < 1 ? 1 : activePage > totalPages ? totalPages : activePage;

    let startPage: number, endPage: number;

    if (totalPages <= pageRangeDisplayed) {
        startPage = 1;
        endPage = totalPages;
    } else {
        const maxPagesBeforeCurrentPage = Math.floor(pageRangeDisplayed / 2);
        const maxPagesAfterCurrentPage = Math.ceil(pageRangeDisplayed / 2) - 1;
        if (currentPage <= maxPagesBeforeCurrentPage) {
            startPage = 1;
            endPage = pageRangeDisplayed;
        } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
            startPage = totalPages - pageRangeDisplayed + 1;
            endPage = totalPages;
        } else {
            startPage = currentPage - maxPagesBeforeCurrentPage;
            endPage = currentPage + maxPagesAfterCurrentPage;
        }
    }

    return {
        currentPage,
        startPage,
        endPage,
        totalPages
    };
};
