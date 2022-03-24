import React from 'react'
import { Category, Nominee, NomineePerCategory } from '../pages/types'
import styles from '../styles/CategoryCard.module.css'
import NomineeCard from './NomineeCard'
interface ICategoryCard {
  item: Category
  selectNominee: Function
  selectedNominees: NomineePerCategory[]
}

function CategoryCard({ item, selectNominee, selectedNominees }: ICategoryCard) {
  return (
    <div key={item.id} className={styles.card}>
      <h3 className={styles.title}>{item.title}</h3>
      <div className={styles.nomineeContainer}>
        {item.items.map((nominee: Nominee) => (
          <NomineeCard
            key={nominee.id}
            selectNominee={selectNominee}
            item={nominee}
            category={item}
            selectedNominees={selectedNominees}
          />
        ))}
      </div>
    </div>
  )
}

export default CategoryCard
