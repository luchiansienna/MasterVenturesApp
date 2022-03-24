import { Key, ReactChild, ReactFragment, ReactPortal } from 'react'

export type Category = {
  id: Key | null | undefined
  title: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined
  items: Nominee[]
}

export type Nominee = {
  id: Key | null | undefined
  title: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined
  photoUrL: string
}

export type NomineePerCategory = {
  nominee: Nominee
  category: Category
}
