import { useRoute } from '@react-navigation/native';
import React from 'react'
import { Text, View, SafeAreaView, Image, StatusBar, FlatList, TextInput } from 'react-native';
import { COLORS, SIZES, FONTS, SHADOWS, assets } from '../constants';
import { useState } from 'react';
import { 
  CircleButton, 
  RectButton, 
  Subinfo,
  FocusedStatusBar, 
  DetailsDesc, 
  DetailsBid, 
  HomeHeader} from '../components';

  const MarkaHeader= ({ detayimg, navig }) => {

    return (
      
      <View style={{ width: '100%', height: 250 }}>
        <Image 
          source={detayimg}
          resizeMode="cover"
          style={{ width: '100%', height: '100%', backgroundColor: COLORS.lightgray }} 
        />
        
        <CircleButton 
          imgUrl={assets.left}
          handlePress={() => navig.goBack()}
          left={15}
          top={StatusBar.currentHeight + 10}
        />
        <View>
      </View>
      </View>
      
    )}

const MarkaDate = ({ basvuruno, basvurutarihi }) => {
  return (
    <View style={{
      width: '100%',
      paddingHorizontal: SIZES.font,
      marginTop: -SIZES.extraLarge,
      flexDirection: "row",
      justifyContent: "space-between"
    }}>
      <View 
      style={{
          paddingHorizontal: SIZES.font,
          paddingVertical: SIZES.base,
          backgroundColor: COLORS.white,
          justifyContent: 'center',
          aignItems: 'center',
          ...SHADOWS.light,
          elevation: 1,
          maxWidth: '50%'
      }}
    >
      <Text style={{ 
          fontFamily: FONTS.regular, 
          fontSize: SIZES.small, 
          color: COLORS.primary }}>
          
          Başvuru No
      </Text>
      <Text style={{ 
            fontFamily: FONTS.semiBold, 
            fontSize: SIZES.medium, 
            color: COLORS.primary }}>
            
            {basvuruno}
        </Text>
      
    </View>

    <View 
      style={{
          paddingHorizontal: SIZES.font,
          paddingVertical: SIZES.base,
          backgroundColor: COLORS.white,
          justifyContent: 'center',
          aignItems: 'center',
          ...SHADOWS.light,
          elevation: 1,
          maxWidth: '50%'
      }}
    >
      <Text style={{ 
          fontFamily: FONTS.regular, 
          fontSize: SIZES.small, 
          color: COLORS.primary }}>
          
          Başvuru Tarihi
      </Text>
      <Text style={{ 
            fontFamily: FONTS.semiBold, 
            fontSize: SIZES.medium, 
            color: COLORS.primary }}>
            
            {basvurutarihi}
        </Text>
      
    </View>
    </View>
   
  )
}
const MarkaTitle = ({ markaadi, kisadurum, titleSize, subTitleSize}) => {
  return (
    <View style={{ 
      width: "100%", 
      padding: SIZES.font,
      justifyContent: "space-between"
      
      }}>
    <Text style={{ 
        fontFamily: FONTS.semiBold, 
        fontSize: SIZES.extraLarge, 
        color: COLORS.primary }}>
          {markaadi}
    </Text>
    <Text style={{ 
        fontFamily: FONTS.regular, 
        fontSize: subTitleSize, 
        color: COLORS.primary }}>
        Son Durum : {kisadurum}
    </Text>
</View>
  )
}

const MarkaSinif = ({ sinif }) => {
  return (
    <View style={{ 
      flexDirection: 'row', 
      alignItems: 'center',
      justifyContent:"flex-end",
      paddingHorizontal: SIZES.font,
      
      }}>
        <Image 
            source={assets.eth}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: 2 }}
        />
        <Text style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.font,
            color: COLORS.primary,
        }}>
           {sinif}
        </Text>
      </View>
  )
}

const DetayBilgi = ({ durum }) => {
  const [text, setText] = useState(durum.slice(0, 100));
  const [readMore, setReadMore] = useState(false);
  return (
    <View style={{ 
      marginVertical: SIZES.extraLarge * 1.5,
      padding: SIZES.font
      
      }}>
        <Text style={{
          fontSize: SIZES.font,
          fontFamily: FONTS.semiBold,
          color: COLORS.primary,
        }}>Detaylı Durum Açıklaması</Text>
        <View style={{ marginTop: SIZES.base }}>
          <Text style={{
            fontSize: SIZES.small,
            fontFamily: FONTS.regular,
            color: COLORS.secondary,
            lineHeight: SIZES.large
          }}>           
            {text}
            {!readMore && '...'}
            <Text style={{
            fontSize: SIZES.small,
            fontFamily: FONTS.semiBold,
            color: COLORS.primary,            
          }}
          onPress={() => {
            if(!readMore) {
              setText(durum);
              setReadMore(true);
            } else {
              setText(durum.slice(0, 100));
              setReadMore(false);
            }
          }}
          >
            {readMore ? ' Daha az göster' : " Devamını oku"}

            </Text>
          </Text>
        </View>
      </View>
  )
}


function Detailsmarka({navigation}) {
  const route = useRoute();
  const id = route.params.id;
  const image = route.params.image;
  const detayimg = route.params.detayimg;
  const markaadi = route.params.markaadi;
  const basvuruno = route.params.basvuruno;
  const kisadurum = route.params.kisadurum;
  const basvurutarihi = route.params.basvurutarihi;
  const bultentarihi = route.params.bultentarihi;
  const sinif = route.params.sinif;
  const durum = route.params.durum;

  

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

      <MarkaHeader detayimg={detayimg} navig={navigation} />
      <MarkaDate basvuruno={basvuruno} basvurutarihi={basvurutarihi}/>
      <MarkaTitle markaadi={markaadi} kisadurum={kisadurum} />
      <MarkaSinif sinif={sinif} />
      <DetayBilgi durum={durum} />
    </SafeAreaView>
  )


}

export default Detailsmarka