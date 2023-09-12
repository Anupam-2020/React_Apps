import React, { Fragment } from 'react'
import Movies from './Movies'
import Search from './Search'

const Home = () => {

  return (
    <Fragment>
        <Search />
        <Movies />
    </Fragment>
  )
}

export default Home