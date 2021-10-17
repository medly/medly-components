export type GetComponentProps<T> = T extends React.FC<infer P> | React.ComponentType<infer P> | React.Component<infer P> ? P : never;
