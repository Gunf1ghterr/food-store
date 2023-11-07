import { createContext, useContext, useState } from "react";
import { ISearchContextType } from "../../interfaces/ISearchContextType";
import { IProductContainerProps } from "../../interfaces/IProductContainerProps";
import { SearchProducts } from "../functions/SearchProducts";

const SearchContext = createContext<ISearchContextType | null>(null);

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [searchItems, setSearchItems] = useState<IProductContainerProps[]>([]);
  return (
    <SearchContext.Provider value={{ searchItems ,SearchProducts }}>
      {children}
    </SearchContext.Provider>
  );
};
