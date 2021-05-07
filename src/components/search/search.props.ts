export interface SearchProps {
  hasFocus?: boolean;
  isLoading: boolean;
  doSearch: (term: string) => void;
}