'use client'

import React, { useContext } from 'react'
import * as S from './styles'
import { NotesContext } from '@/data/repositories/Notes'
import { CategorySlug } from '@/data/models/Category'
import { Container } from '@mui/material'
import CardNote from '@/components/CardNote/CardNote'
import NotFound from '@/components/NotFound/NotFound'

interface ListNotesProps {
  byCategory?: CategorySlug
  byTerm?: string
}

const ListNotes: React.FC<ListNotesProps> = ({ byCategory, byTerm }) => {
  const notes = useContext(NotesContext)

  const notesByCategory = notes.list?.filter(
    note => note.category?.slug === byCategory
  )

  const list = byCategory === 'all' ? notes.list : notesByCategory

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
