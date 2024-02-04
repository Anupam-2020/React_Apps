// import { useQuery } from 'react-query'
import './App.css'
import Postlist from './components/post-list'
// import { fetchPosts } from './api/api'

function App() {

  // const query = useQuery({
  //   queryKey: ["posts"],
  //   queryFn: fetchPosts,
  // })

  // console.log(query.data, query.isLoading, query.status);
  return (
    <div>
      <h2>Posts List App</h2>
      <Postlist />
    </div>
  )
}

export default App
