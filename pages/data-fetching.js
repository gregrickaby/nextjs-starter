import {useFetchData} from '@/lib/functions'
import Layout from '@/components/Layout'

export default function Profile() {
  const {data, isLoading, isError} = useFetchData(
    `https://cors-anywhere.herokuapp.com/https://swapi.dev/api/people/1`
  )

  return (
    <Layout title="Data Fetching" description="Simple data fetching example">
      <h1>Profile</h1>

      {isError ? (
        <p>Failed to load data!</p>
      ) : isLoading ? (
        <p>Loading data...</p>
      ) : (
        <ul>
          <li>Name: {data.name}</li>
          <li>Height: {data.height}</li>
          <li>Mass: {data.mass}</li>
          <li>Gender: {data.gender}</li>
        </ul>
      )}

      <div className="mt-24">
        <em>
          The data above is from the{' '}
          <strong>
            <a href="https://swapi.dev/">SWAPI</a>
          </strong>
          . It was loaded using the React Hooks library{' '}
          <strong>
            <a href="https://swr.vercel.app/">SWR</a>
          </strong>
          .
        </em>
      </div>
    </Layout>
  )
}
