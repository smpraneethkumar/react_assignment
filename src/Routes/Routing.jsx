import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import AddItems from '../Components/AddItems'
import ViewItems from '../Components/ViewItems'
import ItemDetails from '../Components/ItemDetails'

export class routing extends Component {
  render() {
    return (
      <Routes>
        <Route path='/' element={<AddItems />} />
        <Route path='/viewitem' element={<ViewItems />} />
        <Route path='/item/:id' element={<ItemDetails />} />
      </Routes>
    )
  }
}

export default routing
