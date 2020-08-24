import useSWR from 'swr'
import PropTypes from 'prop-types'
import Layout from '@/components/Layout'
import {fetcher} from '@/lib/functions'

export default function PreRender(props) {
  const {data, isLoading, isError} = useSWR(
    `https://swapi.dev/api/people/1`,
    fetcher,
    {
      initialData: props.data
    }
  )

  return (
    <Layout
      title="Pre-rendering"
      description="Simple pre-rendered page with dynamic data"
    >
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
          , and is a pre-rendered (SSG) page.
        </em>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const data = await fetcher(`https://swapi.dev/api/people/1`)
  return {props: {data}}
}

PreRender.propTypes = {
  data: PropTypes.object
}
