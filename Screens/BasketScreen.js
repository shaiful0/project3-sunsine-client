import { View, Text, TouchableOpacity, SafeAreaView, Image, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { selectRestruarent } from '../basketSlice/restruentSlice';
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../basketSlice/basketSlice';
import { useMemo } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import tw from 'twrnc'
import { XCircleIcon } from 'react-native-heroicons/outline';

const BasketScreen = () => {
  const navigation = useNavigation();
  const restruarent = useSelector(selectRestruarent);
  const basketTotal = useSelector(selectBasketTotal);
  const [groupItemInBasket, setGroupItemInBasket] = useState([]);
  const items = useSelector(selectBasketItems);
  const dispatch = useDispatch();

useEffect(() =>{
  const groupedItems = items.reduce((results,item) =>{
    (results[item._id] = results[item._id] || []).push(item);
    return results;
  },{});
  setGroupItemInBasket(groupedItems);
},[items])

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <View style={tw`flex-1 bg-gray-100`}>
        <View style={tw`p-5 border-b border-[#00CCBB] bg-white shadow-xs`}>
          <View>
            <Text style={tw`text-lg font-bold text-center`}>Basket</Text>
            <Text style={tw`text-center text-gray-400`}>{restruarent.title}</Text>
          </View>
            <TouchableOpacity
            onPress={navigation.goBack}
            style={tw`rounded-full bg-gray-100 absolute top-3 right-5`}
            >
              <XCircleIcon color='#00CCBB' height={50} width={50}></XCircleIcon>
            </TouchableOpacity>
        </View>
        <View style={tw`flex-row items-center space-x-4 px-4 py-3 bg-white my-5`}>
          <Image source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwPav5BFSE61LGOYI79IDgdSgemuycSrAyvCTeGuzV&s'
          }}
          style={tw`h-7 w-7 bg-gray-300 p-4 rounded-full`}
          />
          <Text style={tw`flex-1`}>Deilever in 50-75 min</Text>
          <TouchableOpacity>
            <Text style={tw`text-[#00CCBB]`}>Change</Text>
          </TouchableOpacity>
          </View>
          <ScrollView style={tw`divide-y divide-gray-200`}>
            {Object.entries(groupItemInBasket).map(([key, items]) =>(
              <View key={key} style={tw`flex-row items-center space-x-3 bg-white py-2 px-2`}>
                <Text>{items.length} x</Text>
                <Image
                source={items[0]?.img}
                style={tw`h-12 w-12 rounded-full mx-2`}
                />
                <Text style={tw`flex-1 mx-3`}>{items[0]?.name}</Text>
                <TouchableOpacity>
                  <Text style={tw`text-[#00CCBB]`} onPress={() => dispatch(removeFromBasket({_id:key})) }>Remove</Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>

          <View style={tw`p-5 bg-white mt-5 space-y-4`}>
            <View style={tw`flex-row justify-between`}>
              <Text style={tw`text-gray-400`}>Subtotal</Text>
              <Text style={tw`text-gray-400`}>{parseFloat(basketTotal)}</Text>
            </View>
          </View>
          <View style={tw`p-5 bg-white space-y-4`}>
            <View style={tw`flex-row justify-between`}>
              <Text style={tw`text-gray-400`}>Deilivery fee</Text>
              <Text style={tw`text-gray-400`}>5.5</Text>
            </View>
          </View>
          <View style={tw`p-5 bg-white space-y-4`}>
            <View style={tw`flex-row justify-between`}>
              <Text>Order Total</Text>
              <Text style={tw`text-gray-400`}>{basketTotal + 5.5}</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('PreparingOrderScreen')} style={tw`rounded-lg bg-[#00CCBB] p-4`}>
              <Text style={tw`text-center text-white text-lg font-bold`}>Plesce Order</Text>
            </TouchableOpacity>
          </View>
        
      </View>
    </SafeAreaView>
  )
}

export default BasketScreen