const env = {
  baseURl: process.env.NODE_ENV === 'localhost' ? 'localhost' : 'https://gpcard.playinjoy.com/body',
  timeout: 5000,
  withCredentials: true
}
export default env
