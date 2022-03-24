export const nominee = {
  id: 'nominee1',
  title: 'Nominee 1',
  photoUrL: 'https://variety.com/wp-content/uploads/2020/12/nomadland_ver2.jpg',
}
export const nominee2 = {
  title: 'The Trial of the Chicago 7',
  photoUrL: 'https://variety.com/wp-content/uploads/2020/12/trial_of_the_chicago_seven.jpg',
  id: 'the-trial-of-the-chicago-7'
}
export const nominee3 = {
  title: 'Minari',
  photoUrL: 'https://variety.com/wp-content/uploads/2020/12/Minari.jpg',
  id: 'minari'
}
export const nominee4 = {
  title: 'Mank',
  photoUrL: 'https://variety.com/wp-content/uploads/2020/12/mank.jpg',
  id: 'mank'
}

export const category = {
  id: 'category1',
  title: 'Category 1',
  items: [nominee],
}
export const selectedNominees = [{nominee, category}]

export const category2 = {
  id: 'category1',
  title: 'Category 1',
  items: [nominee, nominee2, nominee3, nominee4],
}