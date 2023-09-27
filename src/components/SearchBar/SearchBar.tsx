import SearchIcon from '@mui/icons-material/Search'
import { InputAdornment } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import * as S from './styles'

interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = () => {
  const router = useRouter()
  const [term, setTerm] = useState('')

  useEffect(() => {
    if (router.pathname.includes('[slug]')) {
      setTerm('')
    }
  }, [router.pathname])

  const handleOnChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = event => {
    const value = event.target.value as string
    setTerm(value)
    if (value) {
      router.push({
        pathname: '/category/search',
        query: {
          q: value
        }
      })
    } else {
      router.push({
        pathname: '/'
      })
    }
  }

  return (
    <S.Wrapper>
      <S.SearchInput
        autoFocus
        id="input-search"
        onChange={handleOnChange}
        value={term}
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
