import MenuNav from 'components/molecules/Nav/Nav';
import { MenuItemInterface } from 'domain/menu-item.interface';
import { useEffect, useRef, useState } from 'react';
import { SearchIcon } from '../../atoms/icons/SearchIcon/SearchIcon';
import { SearchInputStyles } from './SearchInput.styles';

interface SearchInputProps {
  id: string;
  getSuggestions: (value: string) => void;
  suggestions: MenuItemInterface[];
  placeholder: string;
}

export interface SearchSuggestion {
  path: string;
  title: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ id, placeholder, getSuggestions, suggestions }) => {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [internalSuggestions, setInternalSuggestions] = useState<MenuItemInterface[]>(suggestions);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setInternalSuggestions(suggestions);
  }, [suggestions]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (query.length >= 3) {
        getSuggestions(query);
        setShowSuggestions(true);
      }
      if (query.length === 0) {
        setInternalSuggestions([]);
        setShowSuggestions(false);
      }
    }, 300);

    return () => {
      clearTimeout(timerId);
    };
  }, [query]);

  useEffect(() => {
    const handleClick = (event: Event): void => {
      const eventTarget = event.target;
      if (ref.current && eventTarget && !ref.current.contains(eventTarget as Node)) {
        event.stopPropagation();
        setShowSuggestions(false);
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    const handleOnKeyDown = ({ key }: KeyboardEvent): void => {
      if (key === 'Escape') {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('keydown', handleOnKeyDown);
    return () => {
      document.removeEventListener('keydown', handleOnKeyDown);
    };
  }, []);

  return (
    <SearchInputStyles.Container>
      <form>
        <label htmlFor={id}>
          <SearchInputStyles.IconContainer>
            <SearchIcon />
          </SearchInputStyles.IconContainer>
          <SearchInputStyles.StyledInput
            autoComplete="off"
            value={query}
            type="text"
            name={id}
            placeholder={placeholder}
            onChange={({ target: { value } }) => setQuery(value)}
          />
        </label>
      </form>

      {internalSuggestions.length > 0 && showSuggestions && (
        <SearchInputStyles.PopoverContainer>
          <SearchInputStyles.Popover ref={ref}>
            <MenuNav
              items={internalSuggestions}
              onClick={() => {
                setTimeout(() => {
                  setShowSuggestions(false);
                  setQuery('');
                }, 300);
              }}
            />
          </SearchInputStyles.Popover>
        </SearchInputStyles.PopoverContainer>
      )}
    </SearchInputStyles.Container>
  );
};

export default SearchInput;
