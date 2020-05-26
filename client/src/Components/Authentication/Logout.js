export default function Logout () {
  return window.localStorage.removeItem('token')
}
