import * as React from 'react';

export const SidebarContext = React.createContext<{
  isVisibleSidebar: boolean;
  setSidebarVisibility: (value: boolean) => void;
}>({
  isVisibleSidebar: true,
  setSidebarVisibility: () => {},
});

type SidebarContextProviderProps = {
  children: React.ReactNode;
};

export const SidebarContextProvider: React.FC<SidebarContextProviderProps> = ({
  children,
}) => {
  const [isVisibleSidebar, setSidebarVisibility] = React.useState(true);
  return (
    <SidebarContext.Provider
      value={{
        isVisibleSidebar,
        setSidebarVisibility,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
