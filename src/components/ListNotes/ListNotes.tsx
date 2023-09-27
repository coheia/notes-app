'use client'

import CardNote from '@/components/CardNote/CardNote'
import NotFound from '@/components/NotFound/NotFound'
import { CategorySlug } from '@/data/models/Category'
import { NotesContext } from '@/data/repositories/Notes'
import { Container } from '@mui/material'
import React, { useContext } from 'react'
import slug from 'slug'
import * as S from './styles'

interface ListNotesProps {
  byCategory?: CategorySlug
  byTerm?: string
}

const ListNotes: React.FC<ListNotesProps> = ({ byCategory, byTerm }) => {
  const notes = useContext(NotesContext)

  const notesByCategory = notes.list?.filter(
    note => note.category?.slug === byCategory
  )

  const listByCategory = byCategory === 'all' ? notes.list : notesByCategory
  const listBySearch = byTerm
    ? notes.list?.filter(n => slug(n.title).includes(slug(byTerm)))
    : []

  const list = byCategory ? listByCategory : listBySearch

  return (
    <S.Wrapper>
      <Container fixed>
        {list?.length > 0 ? (
          <S.ListNotes>
            {list?.map(note => (
              <CardNote key={note.id} note={note} />
            ))}
          </S.ListNotes>
        ) : (
          <>
            {notes.list?.length === 0 ? (
              <NotFound
                title="You don't have any notes"
                asset="/add-note-illustration.svg"
              />
            ) : (
              <NotFound
                title="Couldn’t find any notes"
                asset="/search-image.svg"
              />
            )}
          </>
        )}
      </Container>
    </S.Wrapper>
  )
}
export default ListNotes
