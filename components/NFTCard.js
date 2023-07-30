import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { COLORS, SIZES, SHADOWS, assets } from '../constants';

import { CircleButton, RectButton } from './Button';

import { Subinfo, EthPrice, ImageCmp, People, EndDate, NFTTitle } from './Subinfo';

const NFTCard = ({ data }) => {
  const navigation = useNavigation();

  return (
    
    <View style={{
      backgroundColor: COLORS.white,
      borderRadius: SIZES.font,
      marginBottom: SIZES.extraLarge,
      margin: SIZES.base,
      ...SHADOWS.dark
    }}>
      <View style={{ width: "100%", height: 250 }}>
        <Image
          source={data.image} 
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: COLORS.lightgray ,
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}        
        />
        {/* <CircleButton imgUrl={assets.heart} right={10} top={10} /> */}
      </View>
      
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
                toplammarka={data.marka} />
       </View>
     
      <View style={{ width: "100%", padding: SIZES.font }}>
        <NFTTitle 
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />

          <View style={{
            marginTop: SIZES.font,
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: 'center',
          }}>
            <RectButton 
              minWidth={120}
              fontSize={SIZES.font}
              handlePress={() => navigation.navigate("Details", { data })}
            />

          </View>

      </View>
        

    </View>
  )
}

export default NFTCard