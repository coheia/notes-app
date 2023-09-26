import { categories } from '@/data/category.mock'
import { type CategorySlug } from '@/data/models/Category'
import { Note, type NewNode } from '@/data/models/Note'
import { NotesContext } from '@/data/repositories/Notes'
import {
  Button,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
  type ButtonProps
} from '@mui/material'
import React, { useContext, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as S from './styles'

interface SaveNoteModalProps extends ButtonProps {
  categorySlug?: CategorySlug
}

const SaveNoteModal: React.FC<SaveNoteModalProps> = ({
  categorySlug,
  ...buttonProps
}) => {
  const notes = useContext(NotesContext)

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors }
  } = useForm<NewNode>()

  const onSubmit: SubmitHandler<NewNode> = data => {
    const note = new Note(data)
    notes.add(note)
    handleClose()
  }

  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)

  const handleClose = () => {
    setOpen(false)
    reset()
  }

  const isUpdateMode = Boolean(categorySlug)

  return (
    <S.Wrapper>
      <Button {...buttonProps} onClick={handleOpen} />

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
                  defaultValue={''}
                  fullWidth
                  {...register('title')}
                />
                <TextField
                  placeholder="Add description..."
                  className="text-field"
                  required={true}
                  defaultValue={
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id dui in ex aliquet fermentum eu id libero. Fusce orci elit, fermentum a suscipit quis, ultrices ac metus. Suspendisse hendrerit elementum vehicula. Vivamus tincidunt dui elit, quis sollicitudin ipsum porttitor sit amet. Nunc in turpis non sapien hendrerit vehicula sed vitae magna. Nullam quis mi ut massa commodo aliquet. Nam tincidunt neque ac enim ornare, sed venenatis lacus ullamcorper. Nulla ac urna massa. Suspendisse ut vehicula neque, sed placerat odio. Pellentesque ut risus odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec porta eros ut erat dignissim, ac lobortis ex sagittis. Nulla finibus cursus tellus consequat gravida. Etiam feugiat purus turpis. Integer arcu turpis, mollis nec quam vel, molestie vestibulum justo. Etiam mattis eu enim a eleifend. Pellentesque sit amet viverra augue. Curabitur scelerisque ante in tristique sagittis. Cras nisi ante, auctor quis porta vitae, malesuada sit amet tellus.'
                  }
                  multiline
                  rows={9}
                  fullWidth
                  {...register('description')}
                />
              </S.Left>
              <S.Right>
                <Select
                  placeholder="Select Category"
                  defaultValue={''}
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
                  {categories.map(({ slug, name }) => (
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
              Add
            </Button>
          </S.ModalFooter>
        </S.ModalContainer>
      </Modal>
    </S.Wrapper>
  )
}
export default SaveNoteModal
