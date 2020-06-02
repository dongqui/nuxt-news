export default function({ $axios }) {  
  // context 객체 인자로 받
  $axios.onRequest(config => {
    config.headers.common['Authorization'] = process.env.NEWS_API_KEY;
  })
}