import type { NextPage } from 'next'

import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import {
  useEffect,
  useState,
} from 'react'
import CategoryCard from '../components/CategoryCard'
import { Category, Nominee, NomineePerCategory } from './types'
import { Modal } from '../components/Modal'
import NomineeCard from '../components/NomineeCard'
import Button from '../components/Button'
import { Footer } from '../components/Footer'
import HtmlHead from '../components/HtmlHead'

const Home: NextPage = () => {
  const [ballot, setBallot] = useState<Category[]>()
  const [selectedNominees, setSelectedNominees] = useState<
    NomineePerCategory[]
  >([])
  const [modalIsVisible, setModalIsVisible] = useState<Boolean>()
  const fetchBallot = async () => {
    const response = await fetch('/api/ballots')
    const data = await response.json()
    setBallot(data.items)
  }
  
  useEffect(() => {
    fetchBallot()
  }, [])

  const selectNominee = (nominee: Nominee, category: Category) => {
    setSelectedNominees([
      ...selectedNominees.filter((n) => n.category.id !== category.id),
      { nominee, category },
    ])
  }

  const submitSelectedNominees = () => {
    setModalIsVisible(true)
  }

  const hideModal = () => {
    setModalIsVisible(false)
  }

  return (
    <div className={styles.container}>
      <HtmlHead/>
      <Header>AWARDS 2021</Header>
      <main className={styles.main}>
        {ballot?.map((category: Category) => (
          <CategoryCard
            key={category.id}
            item={category}
            selectNominee={selectNominee}
            selectedNominees={selectedNominees}
          />
        ))}
        <Modal handleClose={hideModal} show={modalIsVisible}>
          <h2>Your awards selection</h2>
          <div className={styles.nomineeContainer}>
            {selectedNominees.map(({ nominee, category }) => (
              <NomineeCard
                showCategory
                category={category}
                key={nominee.id}
                item={nominee}
              />
            ))}
          </div>
        </Modal>
        <Footer>
          <Button isSubmitButton onClick={submitSelectedNominees}>
            Submit
          </Button>
        </Footer>
      </main>
    </div>
  )
}

export default Home
