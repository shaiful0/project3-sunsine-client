import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import tw from 'twrnc'
import RestrudentCard from './RestrudentCard'
import RestrudentCardOne from './RestrudentCardOne'

const FeaturedRow = ({ _id, title, description, }) => {

  const [foods, setFoods] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/food`
    fetch(url)
      .then(res => res.json())
      .then(data => setFoods(data)).catch(() => {
      })
  }, []);
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
        {/* Restrurent card  1*/}
        {
          foods.map(food => <RestrudentCard
            key={food._id}
            _id={1}
            imgUrl={food.img}
            title={food.name}
            rating={4.5}
            genre='Bangla'
            address='Dhaka BD'
            short_description='Whether you want to articulate the strong aftertaste of a marinated dish or a dessert’s creamy texture, this list of food adjectives will provide many ideas to help you describe your meals.'
            dishes={[]}
            logn={20}
            lat={0}
          ></RestrudentCard>)
        }
        {/* {RestrudentCard 2} */}


      </ScrollView>

    </View>
  )
}

export default FeaturedRow