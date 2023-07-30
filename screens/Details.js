import React from 'react';
//import { useNavigation } from '@react-navigation/native';
import { Text, View, SafeAreaView, Image, StatusBar, FlatList, TextInput } from 'react-native';
import { COLORS, SIZES, SHADOWS, FONTS, assets } from '../constants';

import { 
  CircleButton, 
  RectButton, 
  Subinfo, 
  FocusedStatusBar, 
  DetailsDesc, 
  DetailsBid, 
  HomeHeader} from '../components';

import { EndDate, People } from '../components/Subinfo';
import DetailsHomeHeader from '../components/DetailsHomeHeader';

const DetailsHeader= ({ data, navig }) => {

return (
  
  <View style={{ width: '100%', height: 250 }}>
    <Image 
      source={data.image}
      resizeMode="cover"
      style={{ width: '100%', height: '100%', backgroundColor: COLORS.lightgray }} 
    />
    
    <CircleButton 
      imgUrl={assets.left}
      handlePress={() => navig.goBack()}
      left={15}
      top={StatusBar.currentHeight + 10}
    />
{/*     <CircleButton 
      imgUrl={assets.heart}
      right={15}
      top={StatusBar.currentHeight + 10}
    /> */}
  </View>
)}

const Details = ({ route, navigation }) => {
  const { data } = route.params;
 
  // const handleSearch = (value) => {
  //   if(!value.length) return setNftData(NFTData);

  //   const filteredData = NFTData.filter((item) => 
  //     item.name.toLowerCase().includes(value.toLowerCase())
  //     );

  //     if(filteredData.length){
  //       setNftData(filteredData);
  //     } else {
  //       setNftData(NFTData);
  //     }
  // }


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar 
        barStyle="dark-content"
        backgroundColor="transparent"
        transLucent={true}
      />

      <View style={{
        width: '100%',
        position: 'absolute',
        bottom: 0,
        paddingVertical: SIZES.font,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.5)',
        zIndex: 1,
      }}>
{/*       *** SİLİNECEK ****  
          <RectButton 
          minWidth={170}
          fontSize={SIZES.large}
          {...SHADOWS.dark} /> */}
      </View>

      <FlatList 
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
        ListHeaderComponent={() => (
          <React.Fragment>            
            <DetailsHeader data={data} navig={navigation} />
                {/* <Subinfo /> */}
                <View style={{
                  width: '100%',
                  paddingHorizontal: SIZES.font,
                  marginTop: -SIZES.extraLarge,
                  flexDirection: "row",
                  justifyContent: "space-between"
              }}>
                  <People />
                  <EndDate taninmismarka={data.taninmis}
                          toplammarka={data.marka}/>
              </View>
              
            <View style={{ padding: SIZES.font }}>
              <DetailsDesc data={data} />
              <DetailsHomeHeader />
                {data.bids.length > 0 && (
                  <Text style={{
                    fontSize: SIZES.font,
                    fontFamily: FONTS.semiBold,
                    color: COLORS.primary
                  }}>
                    {/* Hepsi Burada Marka Listesi */}
                    </Text>
                )}
                
            </View>
          </React.Fragment>
        )}
      />
    </SafeAreaView>
  )
}

export default Details