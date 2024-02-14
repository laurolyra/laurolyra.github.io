type ProvidersType = [React.ElementType, Record<string, unknown>];
type ChildrenType = {
  children: Array<React.ElementType>;
};

const buildProvidersTree = (componentsWithProps: Array<ProvidersType>) => {
  const initialComponent = ({ children }: ChildrenType) => <>{children}</>;
  return componentsWithProps.reduce(
    (
      AccumulatedComponents: React.ElementType,
      [Provider, props = {}]: ProvidersType
    ) => {
      const ProviderComponent = ({ children }: ChildrenType) => {
        return (
          <AccumulatedComponents>
            <Provider {...props}>{children}</Provider>
          </AccumulatedComponents>
        );
      };
      return ProviderComponent;
    },
    initialComponent
  );
};

export default buildProvidersTree;
