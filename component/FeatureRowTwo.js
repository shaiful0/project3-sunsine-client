import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import RestrudentCard from './RestrudentCard'
import tw from 'twrnc'
import { ArrowRightIcon } from 'react-native-heroicons/mini'

const FeatureRowTwo = ({ _id, title, description }) => {
  const [bifeFoods, setBifeFoods] = useState([])
  useEffect(() => {
    const url = `https://radiant-ocean-18549.herokuapp.com/bifefood`
    fetch(url)
      .then(res => res.json())
      .then(data => setBifeFoods(data)).catch(() => {

      })
  }, [])
  return (
    <View>
      <View style={tw`mt-4 flex-row items-center justify-between px-4`}>
        <Text style={tw`font-bold text-lg`}>{title}</Text>
        <ArrowRightIcon color='#00CCBB' />
      </View>
      <Text style={tw`text-xm text-gray-500 px-4`}>{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        style={tw`pt-4`}
      >
        {
          bifeFoods.map(bifeFood => <RestrudentCard
            key={bifeFood._id}
            // id={1}
            imgUrl={bifeFood.img}
            title={bifeFood.name}
            rating={4.5}
            genre='Bangla'
            address='Dhaka bd'
            short_description='Whether you want to articulate the strong aftertaste of a marinated dish or a dessert’s creamy texture, this list of food adjectives will provide many ideas to help you describe your meals.'
            dishes={[]}
            logn={20}
            lat={0}
          ></RestrudentCard>)
        }
      </ScrollView>
    </View>
  )
}

export default FeatureRowTwo