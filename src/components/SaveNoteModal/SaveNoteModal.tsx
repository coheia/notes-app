import { Box, Button, ButtonProps, Modal, Typography } from '@mui/material'
import React, { useState } from 'react'
import * as S from './styles'

interface SaveNoteModalProps extends ButtonProps {}

const SaveNoteModal: React.FC<SaveNoteModalProps> = props => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <S.Wrapper>
      <Button {...props} onClick={handleOpen} />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <S.ModalContainer>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </S.ModalContainer>
      </Modal>
    </S.Wrapper>
  )
}
export default SaveNoteModal
