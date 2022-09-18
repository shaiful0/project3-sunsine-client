import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronDownIcon, UserIcon } from "react-native-heroicons/mini";
import { AdjustmentsHorizontalIcon } from "react-native-heroicons/solid";
import tw from 'twrnc';
import Catagoris from '../component/Catagoris';
import FeaturedRow from '../component/FeaturedRow';
import FeaturedRowOne from '../component/FeaturedRowOne';
import FeatureRowTwo from '../component/FeatureRowTwo';


const HomeScreen = () => {
  // chiken
  const [rows, setRows] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/row`)
      .then(res => res.json())
      .then(data => setRows(data)).catch(() => {

      })
  }, []);

  // fish
  const [fishs, setFishs] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/fishrow`)
      .then(res => res.json())
      .then(data => setFishs(data)).catch(() => {

      })
  }, []);

  //Bife
  const [bifes, setBifes] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/biferow`)
      .then(res => res.json())
      .then(data => setBifes(data)).catch(() => {

      })
  }, [])

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])
  return (
    <SafeAreaView style={tw`bg-white pt-5`}>
      <Text>
        <View style={tw`flex-row pb-3 items-center mx-4`}>
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwPav5BFSE61LGOYI79IDgdSgemuycSrAyvCTeGuzV&s",
            }}
            style={tw`w-10 h-10 bg-gray-300 p-4 rounded-full`}
          />
          <View style={tw`flex-1`}>
            <Text style={tw`font-bold  text-gray-400 text-xl`}>Deliver Now!</Text>
            <Text style={tw` font-bold  text-2xl`}>Current Location
              <ChevronDownIcon size={20} color="#00CCBB"></ChevronDownIcon>
              <UserIcon size={30} color="#00CCBB"></UserIcon>
            </Text>
          </View>
        </View>
        {/* search */}

      </Text>
      <View style={tw`flex-row items-center pb-2 mx-1`}>
        <View style={tw`flex-row flex-1 bg-gray-200 p-2`}>
          <TextInput
            placeholder='Type Here'
            keyboardType='default'
          ></TextInput>
        </View>

        <AdjustmentsHorizontalIcon color='#00CCBB'></AdjustmentsHorizontalIcon>
      </View>
      {/* catagoris  */}
      <ScrollView
        style={tw`bg-gray-100`}
      >
        {/* catagoris  */}
        <Catagoris></Catagoris>
        {/* featured  */}
        {
          rows.map(row => <FeaturedRow
            // _id={1}
            key={row._id}
            title={row.name}
            description={row.description}
          ></FeaturedRow>)
        }
        {
          fishs.map(fish => <FeaturedRowOne
            // _id={1}
            key={fish._id}
            title={fish.name}
            description={fish.description}
          ></FeaturedRowOne>)
        }
        {
          bifes.map(bife => <FeatureRowTwo
            // id={1}
            key={bife._id}
            title={bife.name}
            description={bife.description}
          ></FeatureRowTwo>)
        }


      </ScrollView>

    </SafeAreaView>
  )
}

export default HomeScreen