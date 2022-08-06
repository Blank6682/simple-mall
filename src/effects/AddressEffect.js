import { useStore } from "vuex"

export const useAddressEffect = () => {
  const store = useStore()

  const deleteAddress = (addressIndex) => {
    store.commit('deleteAddress', addressIndex)
  }
  return deleteAddress
}
