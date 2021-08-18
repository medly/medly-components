export type LogoProps = {
    /** Set it true to show name */
    showName?: boolean;
    /** Logo of your company */
    logo?: React.ReactElement;
    /** Name of your company */
    name?: React.ReactElement;
    /** Function to be called on click on the logo */
    onClick?: () => void;
};
