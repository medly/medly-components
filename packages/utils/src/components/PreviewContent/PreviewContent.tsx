type FunctionProps = {
    children: () => React.ReactNode;
};

export const PreviewContent = ({ children }: FunctionProps) => children();
