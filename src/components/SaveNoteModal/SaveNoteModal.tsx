import { categories } from '@/data/category.mock'
import { Note, type NewNode } from '@/data/models/Note'
import { NotesContext } from '@/data/repositories/Notes'
import {
  Button,
  IconButton,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
  type ButtonProps
} from '@mui/material'
import React, { ReactNode, useContext, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as S from './styles'

interface SaveNoteModalProps extends ButtonProps {
  note?: Note
  btnIcon?: ReactNode
}

const SaveNoteModal: React.FC<SaveNoteModalProps> = ({
  note,
  btnIcon,
  ...buttonProps
}) => {
  const notes = useContext(NotesContext)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<NewNode>()

  const onSubmit: SubmitHandler<NewNode> = data => {
    const newNote = new Note(data)
    if (isUpdateMode) {
      const updatedNote = {
        ...new Note(data),
        id: note?.id,
        created: note?.created,
        createdFormated: note?.createdFormated
      }

      notes.update(updatedNote as Note)
    } else {
      notes.add(newNote)
    }
    handleClose()
  }

  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)

  const handleClose = () => {
    setOpen(false)
    reset()
  }

  const isUpdateMode = Boolean(note)

  return (
    <S.Wrapper>
      {btnIcon ? (
        <IconButton onClick={handleOpen}>{btnIcon}</IconButton>
      ) : (
        <Button {...buttonProps} onClick={handleOpen} />
      )}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
      >
        <S.ModalContainer>
          <S.ModalHeader>
            <Typography id="modal-modal-title" className="title">
              {isUpdateMode ? 'Update note' : 'Add note'}
            </Typography>
          </S.ModalHeader>

          <S.ModalBody>
            <S.InputNote id="input-note" onSubmit={handleSubmit(onSubmit)}>
              <S.Left>
                <TextField
                  placeholder="Add title..."
                  className="text-field"
                  required={true}
                  defaultValue={isUpdateMode ? note?.title : ''}
                  fullWidth
                  {...register('title')}
                />
                <TextField
                  placeholder="Add description..."
                  className="text-field"
                  required={true}
                  defaultValue={isUpdateMode ? note?.description : ''}
                  multiline
                  rows={9}
                  fullWidth
                  {...register('description')}
                />
              </S.Left>
              <S.Right>
                <Select
                  placeholder="Select Category"
                  defaultValue={isUpdateMode ? note?.category?.slug : ''}
                  required={true}
                  displayEmpty
                  inputProps={{
                    className: 'text-field'
                  }}
                  {...register('categorySlug')}
                >
                  <MenuItem value="">
                    <em>Select Category</em>
                  </MenuItem>
                  {categories
                    .filter(cat => cat.slug !== 'all')
                    .map(({ slug, name }) => (
                      <MenuItem key={slug} value={slug}>
                        {name}
                      </MenuItem>
                    ))}
                </Select>
              </S.Right>
            </S.InputNote>
          </S.ModalBody>

          <S.ModalFooter>
            <Button variant="text" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit" form="input-note" variant="text">
              {isUpdateMode ? 'Update' : 'Add'}
            </Button>
          </S.ModalFooter>
        </S.ModalContainer>
      </Modal>
    </S.Wrapper>
  )
}
export default SaveNoteModal
