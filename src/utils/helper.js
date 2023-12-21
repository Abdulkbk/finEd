export const userStore = 'finEd'

export const getUser = () => {
  return JSON.parse(localStorage.getItem(userStore))
}

export const saveUser = user => {
  localStorage.setItem(userStore, JSON.stringify(user))
}
