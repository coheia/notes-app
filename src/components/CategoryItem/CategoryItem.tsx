import React from 'react'
import * as S from './styles'
import Link from 'next/link'
import {
  CategoryColor,
  CategoryLink,
  CategoryName
} from '@/data/models/Category'

interface CategoryItemProps {
  active: boolean
  color: CategoryColor
  link: CategoryLink
  label: CategoryName
}

const CategoryItem: React.FC<CategoryItemProps> = ({
  active,
  color,
  link,
  label
}) => {
  return (
    <S.Item
      href={link}
      LinkComponent={Link}
      variant={active ? 'contained' : 'text'}
      disableElevation
      style={{ backgroundColor: active ? color : 'transparent' }}
    >
      <span>{label}</span>
      <i style={{ backgroundColor: color }}></i>
    </S.Item>
  )
}
export default CategoryItem
