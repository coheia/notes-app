import { Note, NoteId } from '@/data/models/Note'
import { default as ls } from 'local-storage'
import React, { ReactNode, useState } from 'react'

interface NotesHook {
  add: (note: Note) => void
  remove: (noteId: NoteId) => void
  update: (newNote: Note) => void
  list: Note[]
}

export function useNotes(): NotesHook {
  const [list, setList] = useState<Note[]>(getNotesFromStorage())

  function add(note: Note): void {
    const listUpdated = list ? [...list, note] : [note]
    setList(listUpdated)
    ls('notes', listUpdated)
  }

  function remove(noteId: NoteId): void {
    const listUpdated = list.filter(note => note.id !== noteId)
    setList(listUpdated)
    ls('notes', listUpdated)
  }

  function update(newNote: Note): void {
    const list = getNotesFromStorage()
    const noteIndex = list.findIndex(note => note.id === newNote.id)
    list[noteIndex] = newNote
    setList(list)
    ls('notes', list)
  }

  return {
    add,
    remove,
    update,
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
  update: () => {},
  list: getNotesFromStorage()
})

export const NotesProvider = ({ children }: { children: ReactNode }) => {
  const notes = useNotes()

  return <NotesContext.Provider value={notes}>{children}</NotesContext.Provider>
}
