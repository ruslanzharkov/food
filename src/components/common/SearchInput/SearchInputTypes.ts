import {AUTO_CAPITALIZE} from '../../../constants/input';

export interface SearchInputInputProps {
  autoCorrect?: boolean;
  autoCapitalize?: keyof typeof AUTO_CAPITALIZE;
  searchTermValue: string;
  onSearchTermChange?: (value: string) => void;
  onSearchTermSubmit?: () => void;
  placeholder: string;
}
