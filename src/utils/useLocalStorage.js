export const getLocal = (target) => {
  try {
      return JSON.parse(localStorage[target])
  } catch (e) {
      return 
  }
}
export const setLocal= (state,target) => {
  const data = state[target]
  localStorage[target] = JSON.stringify(data)
}
