export interface PaginationTheme {
    /** Theme for page number button */
    pageNumber: {
        color: {
            default: string;
            hovered: string;
            pressed: string;
            active: string;
        };
        bgColor: {
            default: string;
            hovered: string;
            pressed: string;
            active: string;
        };
        borderRadius: string;
    };
    /** Theme for page navigation arrows */
    pageNav: {
        color: {
            default: string;
            hovered: string;
            pressed: string;
            disabled?: string;
        };
        bgColor: {
            default: string;
            hovered: string;
            pressed: string;
            disabled?: string;
        };
    };
    /** Theme for page number in popup */
    overlayPageNumber: {
        color: {
            default: string;
            hovered: string;
            pressed: string;
            active?: string;
        };
        bgColor: {
            default: string;
            hovered: string;
            pressed: string;
            active?: string;
        };
    };
}
