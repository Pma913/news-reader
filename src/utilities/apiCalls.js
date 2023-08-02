const getNews = () => {
  return fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=2ec2c496da89433580bf9f4f5a6608f2')
  .then(res => {
    if (!res.ok) {
      throw new Error(res.message)
    } else {
      return res.json()
    }
  })
}

export default getNews