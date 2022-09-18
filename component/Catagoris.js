import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CatagoriCard from './CatagoriCard'

const Catagoris = () => {

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CatagoriCard imgUrl='https://i.ibb.co/mv2w22x/images.jpg' title='Testing 1' />
      <CatagoriCard imgUrl='https://i.ibb.co/FhFC1xk/imgbin-curry-bengali-cuisine-cooking-daube-recipe-featured-recipes-Szx-Lu-Dinybhbfx-GBhc-HYSj-Cgh.jpg' title='Testing 2' />
      <CatagoriCard imgUrl='https://i.ibb.co/rG9dcnp/indian-food-chingri-malai-curry-bhurta-vegetarian-cuisine-dried-fish-prawn-bengali-cuisine-indian-cu.jpg' title='Testing 3' />
      <CatagoriCard imgUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwPav5BFSE61LGOYI79IDgdSgemuycSrAyvCTeGuzV&s' title='Testing 3' />
      <CatagoriCard imgUrl='https://i.ibb.co/GcHVkpw/selection-102-500x500.png' title='Testing 3' />
      <CatagoriCard imgUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwPav5BFSE61LGOYI79IDgdSgemuycSrAyvCTeGuzV&s' title='Testing 3' />
      <CatagoriCard imgUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwPav5BFSE61LGOYI79IDgdSgemuycSrAyvCTeGuzV&s' title='Testing 3' />
      <CatagoriCard imgUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwPav5BFSE61LGOYI79IDgdSgemuycSrAyvCTeGuzV&s' title='Testing 3' />
      <CatagoriCard imgUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwPav5BFSE61LGOYI79IDgdSgemuycSrAyvCTeGuzV&s' title='Testing 3' />
      <CatagoriCard imgUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwPav5BFSE61LGOYI79IDgdSgemuycSrAyvCTeGuzV&s' title='Testing 3' />
    </ScrollView>

  )
}

export default Catagoris