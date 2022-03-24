import React from 'react'
import { Category, Nominee, NomineePerCategory } from '../pages/types'
import styles from '../styles/NomineeCard.module.css'
import Image from 'next/image'
import Button from './Button'

interface INomineeCard {
  item: Nominee
  category?: Category
  showCategory?: boolean
  selectNominee?: Function
  selectedNominees?: NomineePerCategory[]
}

function NomineeCard({
  item,
  category,
  showCategory,
  selectNominee,
  selectedNominees,
}: INomineeCard) {
  const selected = selectedNominees?.filter(
    (nominee) => nominee.nominee.id === item.id,
  )
  return (
    <div
      key={item.id}
      className={`${styles.card} ${
        selected && selected.length > 0 ? styles.selectedCard : ''
      }`}
    >
      {showCategory ? <h4>{category?.title}</h4> : <></>}
      <div>{item.title}</div>
      <div className={styles.imageWrapper}>
        <Image src={item.photoUrL} alt={''} width={100} height={100} />
      </div>

      {selectNominee ? (
        <Button dataTestId={item.id} onClick={() => selectNominee?.(item, category)}>Select</Button>
      ) : (
        <></>
      )}
    </div>
  )
}

export default NomineeCard
