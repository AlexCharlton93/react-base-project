export const getAxiosHeaders = () => {
  return {
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
}
