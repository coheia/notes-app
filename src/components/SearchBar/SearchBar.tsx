import SearchIcon from '@mui/icons-material/Search'
import { InputAdornment } from '@mui/material'
import React from 'react'
import * as S from './styles'

interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = () => {
  const handleOnChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = event => {
    const value = event.target.value
    console.log('===> value:', value)
  }

  return (
    <S.Wrapper>
      <S.SearchInput
        id="input-search"
        onChange={handleOnChange}
        placeholder="Search notes..."
        disableUnderline
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
      />
    </S.Wrapper>
  )
}
export default SearchBar
