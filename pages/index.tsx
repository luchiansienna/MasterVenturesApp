import type { NextPage } from 'next'

import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import { useEffect, useState } from 'react'
import CategoryCard from '../components/CategoryCard'
import { Category, Nominee, NomineePerCategory } from './types'
import { Modal } from '../components/Modal'
import NomineeCard from '../components/NomineeCard'
import Button from '../components/Button'
import { Footer } from '../components/Footer'
import HtmlHead from '../components/HtmlHead'
import LoadingSpinner from '../components/LoadingSpinner'

const Home: NextPage = () => {
  const [ballot, setBallot] = useState<Category[]>()
  const [selectedNominees, setSelectedNominees] = useState<
    NomineePerCategory[]
  >([])
  const [modalIsVisible, setModalIsVisible] = useState<Boolean>()
  const fetchBallot = async () => {
    try {
      setBallot(undefined)
      const response = await fetch('/api/ballots')
      const data = await response.json()
      setBallot(data.items)
    } catch (error) {}
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

  return (
    <div className={styles.container}>
      <HtmlHead />
      <Header>AWARDS 2021</Header>
      <main className={styles.main}>
        {ballot ? (
          <div>
            {ballot.map((category: Category) => (
              <CategoryCard
                key={category.id}
                item={category}
                selectNominee={selectNominee}
                selectedNominees={selectedNominees}
              />
            ))}
            <Modal
              handleClose={() => setModalIsVisible(false)}
              show={modalIsVisible}
            >
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
              <Button isSubmitButton onClick={() => setModalIsVisible(true)}>
                Submit
              </Button>
            </Footer>
          </div>
        ) : (
          <LoadingSpinner />
        )}
      </main>
    </div>
  )
}

export default Home
