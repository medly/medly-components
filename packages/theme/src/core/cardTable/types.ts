export interface CardTableTheme {
    /** Background color for disabled row */
    disabledRowBgColor: string;
    /** Theme for table with light background */
    lightBackground: {
        headerColor: string;
        headerActiveColor: string;
        headerHoverColor: string;
        evenRowBgColor: string;
        oddRowBgColor: string;
        borderColor: string;
        boxShadow: string;
        hoverBoxShadow: string;
    };
    /** Theme for table with dark background */
    darkBackground: {
        headerColor: string;
        headerActiveColor: string;
        headerHoverColor: string;
        evenRowBgColor: string;
        oddRowBgColor: string;
        borderColor: string;
        boxShadow: string;
        hoverBoxShadow: string;
    };
}
