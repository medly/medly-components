export const addPageItems = (from: number, to: number, result: any[]) => {
    for (let i = from; i <= to; i++) result.push(i);
    return result;
};

export const paginator = (totalItems: number, activePage = 1, itemsPerPage = 20) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const currentPage = activePage < 1 ? 1 : activePage > totalPages ? totalPages : activePage;
    let result: any[] = [];

    /* If totalPages is less than 8 then add all the page numbers*/
    if (totalPages < 8) {
        result = addPageItems(1, totalPages, result);
    } else if (currentPage === 1 || currentPage === totalPages) {
        /* In case of first and last page, six items should be displayed */
        if (currentPage === 1) {
            result.push(1, 2, 3, '...', totalPages);
        } else {
            result.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
        }
    } else {
        /* Left side of active Page */
        if (currentPage > 4) {
            result.push(1, '...', currentPage - 1);
        } else {
            addPageItems(1, currentPage - 1, result);
        }

        /* Right side of active Page */
        if (totalPages - currentPage >= 4) {
            result.push(currentPage, currentPage + 1, '...', totalPages);
        } else {
            addPageItems(currentPage, totalPages, result);
        }
    }

    return { currentPage, linkItems: result, totalPages };
};
