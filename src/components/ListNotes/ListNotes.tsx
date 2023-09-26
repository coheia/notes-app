'use client'

import React, { useContext } from 'react'
import * as S from './styles'
import { NotesContext } from '@/data/repositories/Notes'
import { CategorySlug } from '@/data/models/Category'
import { Container } from '@mui/material'
import CardNote from '../CardNote/CardNote'

interface ListNotesProps {
  byCategory?: CategorySlug
}

const ListNotes: React.FC<ListNotesProps> = ({ byCategory }) => {
  const notes = useContext(NotesContext)

  const notesByCategory = notes.list?.filter(
    note => note.category?.slug === byCategory
  )

  const list = byCategory === 'all' ? notes.list : notesByCategory

  console.log('===> list2:', list)

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
          'Nenhuma nota encontrada'
        )}
      </Container>
    </S.Wrapper>
  )
}
export default ListNotes
