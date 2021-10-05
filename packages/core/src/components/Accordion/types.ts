export type StaticProps = {
    Header: React.FC;
    Content: React.FC;
    Context: React.Context<AccordionContextType>;
};

export type AccordionContextType = [
    boolean /** Current active state */,
    React.Dispatch<React.SetStateAction<boolean>> /** Function to be called to toggle the active state */
];
