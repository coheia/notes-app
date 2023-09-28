import React from 'react'
import * as S from './styles'
import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import SaveNoteModal from '@/components/SaveNoteModal/SaveNoteModal'

interface AddNoteProps {}

const AddNote: React.FC<AddNoteProps> = () => {
  return (
    <S.Wrapper>
      <SaveNoteModal
        id="button-add-more"
        variant="contained"
        startIcon={<AddIcon />}
      >
        Add Note
      </SaveNoteModal>
    </S.Wrapper>
  )
}
export default AddNote
