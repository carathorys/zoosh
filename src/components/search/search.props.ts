export interface SearchProps {
  hasFocus?: boolean;
  isLoading: boolean;
  defaultTerm?: string;
  doSearch: (term: string) => void;
}
