// 存放 localStorage
export const setStore = (name, content) => {
  if (!name) return
  content = JSON.stringify(content)
  window.localStorage.setItem(name, content)
}

export const getStore = (name) => {
  if (!name) return
  const value = JSON.parse(localStorage.getItem(name))
  return value
}

export const removeStore = name => {
  if (!name) return
  window.localStorage.removeItem(name)
}
