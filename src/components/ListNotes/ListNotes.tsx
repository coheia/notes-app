'use client'

import React, { useContext } from 'react'
import * as S from './styles'
import { NotesContext } from '@/data/repositories/Notes'
import { CategorySlug } from '@/data/models/Category'

interface ListNotesProps {
  byCategory?: CategorySlug
}

const ListNotes: React.FC<ListNotesProps> = ({ byCategory }) => {
  const notes = useContext(NotesContext)

  const notesByCategory = notes.list.filter(
    note => note.category?.slug === byCategory
  )

  console.log('===> notesByCategory:', notesByCategory)

  return (
    <S.Wrapper>
      <ul id="lista-notes">
        {(notesByCategory || notes.list).length > 0 ? (
          <>
            {(notesByCategory || notes.list)?.map(note => {
              return (
                <li key={note.id}>
                  <h3>{note.title}</h3>
                </li>
              )
            })}
          </>
        ) : (
          'Nenhuma nota encontrada'
        )}
      </ul>
    </S.Wrapper>
  )
}
export default ListNotes
