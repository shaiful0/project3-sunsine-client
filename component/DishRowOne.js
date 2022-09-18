import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/outline';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, removeFromBasket, selectBasketItems, selectBasketItemsWithId } from '../basketSlice/basketSlice';

const DishRowOne = ({ fish }) => {
  const [isPressed, setIsPressed] = useState(false);
  const {_id, name, img, price, description } = fish;
  const dispatch = useDispatch()
  const items = useSelector(state => selectBasketItemsWithId(state,_id));


  const addItemToBasket = () =>{
    dispatch(addToBasket({_id,name,description,price, img}))
  }
  const removeItemToBasket =() =>{
    if(!items.length >0) return;
    dispatch(removeFromBasket({_id}))
  }
  return (
    <>
    <TouchableOpacity onPress={() => setIsPressed(!isPressed)}
     style={tw`bg-white border p-4 border-gray-300 ${isPressed && "border-b-0"}`}>
    <View style={tw`flex-row`}>
      <View style={tw`flex-1 pr-2`}>
        <Text style={tw`text-lg font-bold mb-1 mx-4`}>{name}</Text>
        <Text style={tw`text-gray-400 mx-4`}>{description}</Text>
        <Text style={tw`mb-1 mx-4`}>Price: {price}$</Text>
      </View>
      <View>
        <Image
          source={img}
          style={tw`h-20 w-20 mx-4`}
        />
      </View>
    </View>
  </TouchableOpacity>

  {isPressed && (
    <View style={tw`bg-white px-4`}>
      <View style={tw`flex-row items-center space-x-2 pb-3`}>
        <TouchableOpacity
        disabled={!items.length}
        onPress={removeItemToBasket}>
          <MinusCircleIcon  color={items.length >0 ?'#00CCBB' : 'gray'} size={40} ></MinusCircleIcon>
      </TouchableOpacity>
      <Text>{items.length}</Text>

      <TouchableOpacity onPress={addItemToBasket}>
          <PlusCircleIcon color='#00CCBB' size={40} ></PlusCircleIcon>
      </TouchableOpacity>

      </View>
    </View>
  )}
  </>
  )
}

export default DishRowOne