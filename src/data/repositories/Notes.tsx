import { Note, NoteId } from '@/data/models/Note'
import { default as ls } from 'local-storage'
import React, { ReactNode, useState } from 'react'

interface NotesHook {
  add: (note: Note) => void
  remove: (noteId: NoteId) => void
  list: Note[]
}

export function useNotes(): NotesHook {
  const [list, setList] = useState<Note[]>(getNotesFromStorage())

  function add(note: Note): void {
    const listUpdated = [...list, note]
    setList(listUpdated)
    ls('notes', listUpdated)
  }

  function remove(noteId: NoteId): void {
    const listUpdated = list.filter(note => note.id !== noteId)
    setList(listUpdated)
    ls('notes', listUpdated)
  }

  return {
    add,
    remove,
    list
  }
}

export const getNotesFromStorage = () => {
  if (typeof window !== 'undefined') {
    return JSON.parse(localStorage.getItem('notes') as string) as Note[]
  } else {
    return []
  }
}

export const NotesContext = React.createContext<NotesHook>({
  add: () => {},
  remove: () => {},
  list: getNotesFromStorage()
})

export const NotesProvider = ({ children }: { children: ReactNode }) => {
  const notes = useNotes()

  return <NotesContext.Provider value={notes}>{children}</NotesContext.Provider>
}
