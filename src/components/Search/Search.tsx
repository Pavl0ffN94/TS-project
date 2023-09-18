
import { ReactComponent as SearchIcon} from 'assets/icon-search.svg'
import styles from './Search.module.scss';
import {useCallback, memo} from 'react';
import {Button} from 'components/Button';

interface SearchProps {
  hasError: boolean,
  onSubmit: (text: string)=> void
 }

 type FormFields = {
  username: HTMLInputElement,
 }

const SearchImlp = ({ hasError, onSubmit }: SearchProps) => {

 const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement & FormFields>) =>{
 event.preventDefault();
 const text = event.currentTarget.username.value;

 if(text) {
  onSubmit(text);
  event.currentTarget.reset();
 }
 }, [onSubmit])

  return (
  <form onSubmit={handleSubmit}  autoComplete='off'>
   <div className={styles.search}>
    <label htmlFor='search' className={styles.label}>
      <SearchIcon />
    </label>
    <input 
    type='text'
    className={styles.textField}
    id='search'
    name='username'
    placeholder='Search GitHub username...'
    />
    {hasError && (
      <div className={styles.error}> 
        No result 
      </div>
    )}
<Button> Search </Button>
   </div>
  </form>
)
  };

export const Search = memo(SearchImlp)