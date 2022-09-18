import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { StarIcon} from 'react-native-heroicons/solid'
import {  MapPinIcon} from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'

const RestrudentCard = ({
  _id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  logn,
  lat,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={tw`bg-white mr-3 shadow`}
    onPress={() =>{
      navigation.navigate('Restrurent', {
        _id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        logn,
        lat,
      })
    }}
    >
      <Image 
      source={{
        uri:imgUrl,
      }}
      style={tw`h-30 w-40 rounded-sm`}
      />
      <View style={tw`px-3 pb-4`}>
        <Text style={tw`font-bold text-xl pt-2`}>{title}</Text>
        <View style={tw`flex-row items-center space-x-1`}>
          <StarIcon color='green' opacity={0.5} size={20}></StarIcon>
          <Text style={tw`text-xs text-gray-500`}>
          <Text style={tw`text-gray-500`}>{rating}</Text>.{genre}
          </Text>
        </View>
        <View style={tw`flex-row items-center space-x-1`}>
          {/* <MapIcon color='gray' opacity={0.5} size={20} ></MapIcon> */}
          <MapPinIcon color='gray' opacity={0.5} size={20} ></MapPinIcon>
          <Text style={tw`text-xs text-gray-500`}>Nearby .{address}</Text>
        </View>
      </View>
    </TouchableOpacity>


  )
}

export default RestrudentCard