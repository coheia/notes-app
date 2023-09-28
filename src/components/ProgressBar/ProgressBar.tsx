'use client'

import { NotesContext } from '@/data/repositories/Notes'
import React, { useContext } from 'react'
import * as S from './styles'

interface ProgressBarProps {}

const ProgressBar: React.FC<ProgressBarProps> = () => {
  const notes = useContext(NotesContext)
  const total = notes.list?.length
  const current = notes.list?.filter(n => n.done)?.length || 0
  const percentCompleted = (current / total) * 100

  return (
    <S.Wrapper>
      {total > 0 ? (
        <>
          <S.ProgressBarLabel id="progress-bar-text">
            {current === total
              ? 'You have completed all notes'
              : `You have ${current}/${total} notes completed`}
          </S.ProgressBarLabel>

          <S.ProgressBarWrapper>
            <S.ProgressBarBar
              style={{
                width: `${percentCompleted}%`
              }}
            />
          </S.ProgressBarWrapper>
        </>
      ) : null}
    </S.Wrapper>
  )
}

export default ProgressBar
