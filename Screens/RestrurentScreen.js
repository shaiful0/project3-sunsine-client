import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import tw from 'twrnc'
import { ArrowLeftIcon, ChevronRightIcon, MapPinIcon, QuestionMarkCircleIcon, StarIcon } from 'react-native-heroicons/outline'
import DishRow from '../component/DishRow';
import DishRowOne from '../component/DishRowOne'
import BasketIcon from '../component/BasketIcon'
import { useDispatch } from 'react-redux'
import { setRestruarent } from '../basketSlice/restruentSlice'

const RestrurentScreen = () => {
  const dispatch = useDispatch();
  const [dishes, setDishes] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/rowfood')
      .then(res => res.json())
      .then(data => setDishes(data)).catch(() => {

      })
  }, [])
  const [fishes, setFishes] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/rowfoodtwo')
      .then(res => res.json())
      .then(data => setFishes(data)).catch(() => {

      })
  }, [])
  const navigation = useNavigation();
  const { params: {
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    logn,
    lat,
  } } = useRoute();

  useEffect(() => {
    dispatch(
      setRestruarent({
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        logn,
        lat,
      }))
  }, [])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])
  return (
    <>
      <BasketIcon></BasketIcon>

      <ScrollView>
        <View style={tw`relative`}>
          <Image
            source={imgUrl}
            style={tw`w-full h-56 bg-gray-300 p-4`}
          />
          <TouchableOpacity
            onPress={navigation.goBack}
            style={tw`absolute top-14 left-5 p-2 bg-gray-100 rounded-full`}>
            <ArrowLeftIcon size={25} color='#00CCBB'></ArrowLeftIcon>
          </TouchableOpacity>
        </View>
        <View style={tw`bg-white`}>
          <View style={tw`px-4 pt-4`}>
            <Text style={tw`text-3xl font-bold`}>{title}</Text>
            <View style={tw`flex-row spacex-x-2 my-1`}>
              <View style={tw`flex-row`}>
                <StarIcon size={22} color='#00CCBB' opacity={0.5}></StarIcon>
                <Text style={tw`text-green-500`}>{rating}</Text>.  {genre}
              </View>

              <View style={tw`flex-row`}>
                <MapPinIcon size={22} color='#00CCBB' opacity={0.5}></MapPinIcon>
                <Text style={tw`text-green-500`}>NearBy . {address}</Text>
              </View>
            </View>
          </View>
          <View>
            <Text style={tw`text-gray-500 mt-2 pb-3 px-4`}>{short_description}</Text>
          </View>
          <TouchableOpacity style={tw`flex-row items-center space-x-2 p-4 border-y border-gray-900`}>
            <QuestionMarkCircleIcon color='gray' opacity={0.6} size={20} />
            <Text style={tw`pl-2 flex-1 text-md font-bold`}>
              Have a food allergy ?
            </Text>
            <ChevronRightIcon color='#00CCBB' />
          </TouchableOpacity>
          <View style={tw`pb-36`}>
            <Text style={tw`px-4 pt-6 mb-3 font-bold text-xl`}>Menu</Text>
            {/* ishes */}
            {
              dishes.map(dish => <DishRow
                key={dish._id}
                dish={dish}
              ></DishRow>)
            }
            {
              fishes.map(fish => <DishRowOne
                key={fish._id}
                fish={fish}
              ></DishRowOne>)
            }

          </View>
        </View>
      </ScrollView>
    </>
  )
}

export default RestrurentScreen