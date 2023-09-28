import { type Note } from '@/data/models/Note'
import { NotesContext } from '@/data/repositories/Notes'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import {
  Button,
  Checkbox,
  ClickAwayListener,
  IconButton,
  Tooltip,
  TooltipProps,
  Typography,
  styled,
  tooltipClasses
} from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import SaveNoteModal from '../SaveNoteModal/SaveNoteModal'
import * as S from './styles'

interface CardNoteProps {
  note: Note
}

const CardNote: React.FC<CardNoteProps> = ({ note }) => {
  const [checked, setChecked] = useState(note.done)
  const { update, remove, list } = useContext(NotesContext)
  const [open, setOpen] = React.useState(false)

  const handleTooltipClose = () => {
    setOpen(false)
  }

  const handleTooltipOpen = () => {
    setOpen(true)
  }

  useEffect(() => {
    update({
      ...note,
      done: checked
    })
  }, [checked])

  const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: 'transparent',
      color: 'rgba(0, 0, 0, 0.87)',
      width: 360,
      fontSize: theme.typography.pxToRem(16)
    }
  }))

  return (
    <S.Card
      id={`card-note-${note.id}`}
      className={checked ? 'done' : ''}
      style={{ backgroundColor: note.category?.color || 'white' }}
    >
      <S.Header>
        <Checkbox
          value={checked}
          defaultChecked={note.done}
          onChange={e => setChecked(e.target.checked)}
          id={`done-${note.id}`}
          sx={{
            color: 'white',
            '&.Mui-checked': {
              color: 'white'
            }
          }}
        />
        <label htmlFor={`done-${note.id}`}>
          <Typography className="title" id={`card-title-${note.id}`}>
            {note.title}
          </Typography>
        </label>

        <div className="icons">
          <SaveNoteModal
            btnIcon={
              <EditIcon
                id={`button-update-note-${note.id}`}
                sx={{ color: 'white' }}
              />
            }
            note={note}
          />

          <ClickAwayListener onClickAway={handleTooltipClose}>
            <div>
              <HtmlTooltip
                PopperProps={{
                  disablePortal: true
                }}
                onClose={handleTooltipClose}
                open={open}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                arrow
                title={
                  <S.TooltipPaper>
                    <Typography color="inherit" className="header-tooltip">
                      Delete note?
                    </Typography>

                    <S.FooterTooltip>
                      <Button variant="text" onClick={handleTooltipClose}>
                        Cancel
                      </Button>
                      <Button
                        variant="text"
                        onClick={() => {
                          remove(note.id)
                          handleTooltipClose()
                        }}
                      >
                        Delete
                      </Button>
                    </S.FooterTooltip>
                  </S.TooltipPaper>
                }
              >
                <IconButton onClick={handleTooltipOpen} aria-label="delete">
                  <DeleteIcon sx={{ color: 'white' }} />
                </IconButton>
              </HtmlTooltip>
            </div>
          </ClickAwayListener>
        </div>
      </S.Header>

      <S.Body>
        <Typography id={`card-description-${note.id}`} className="description">
          {note.shortDescription}
        </Typography>
      </S.Body>

      <S.Footer>
        <span>{note.createdFormated}</span>
      </S.Footer>
    </S.Card>
  )
}
export default CardNote
