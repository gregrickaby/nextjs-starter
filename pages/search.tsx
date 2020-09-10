import React from 'react'
import SiteConfig from 'site.config'
import Layout from '@/components/common/Layout'
import SearchResults from '@/components/molecules/SearchResults'

const SearchPage: React.FC = () => {
  return (
    <Layout title="Search" description={SiteConfig.siteDescription}>
      <h1>Search Results</h1>
      <SearchResults />
    </Layout>
  )
}

export default SearchPage
