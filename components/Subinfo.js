import { View, Text, Image } from 'react-native';
import { COLORS, SIZES, FONTS, SHADOWS, assets } from '../constants';


export const NFTTitle = ({ title, subTitle, titleSize, subTitleSize }) => {
  return (
    <View>
        <Text style={{ 
            fontFamily: FONTS.semiBold, 
            fontSize: titleSize, 
            color: COLORS.primary }}>
                {title}
        </Text>
        <Text style={{ 
            fontFamily: FONTS.regular, 
            fontSize: subTitleSize, 
            color: COLORS.primary }}>
                {subTitle}
        </Text>
    </View>
  )
}
export const EthPrice = ({ price }) => {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
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
            {price}
        </Text>
      </View>
    )
  }
  export const ImageCmp = ({ imgUrl, index }) => {
    return (
      <Image
      source={imgUrl}
      resizeMode="contain"
      style={{
        width: 48,
        height: 48,
        marginLeft: index === 0 ? 0 : -SIZES.font
      }}
      />
    )
  }
  export const People = () => {
    return (
      <View style={{ flexDirection: 'row'}}>
        {[assets.hb2, assets.hb3, assets.hb4].map((imgUrl, index) => (
            <ImageCmp imgUrl={imgUrl} index={index} key={`People-${index}`} />
        ))}
      </View>
    )
  }
  export const EndDate = ({ taninmismarka, toplammarka }) => {
    return (
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
            {/* 1 Tanınmış */}
            {taninmismarka}
        </Text>
        <Text style={{ 
            fontFamily: FONTS.semiBold, 
            fontSize: SIZES.medium, 
            color: COLORS.primary }}>
            {/* 456 Marka */}
            {toplammarka}
        </Text>
      </View>
    )
  }

  // export const Subinfo = () => {
  //   return (
  //     <View style={{
  //         width: '100%',
  //         paddingHorizontal: SIZES.font,
  //         marginTop: -SIZES.extraLarge,
  //         flexDirection: "row",
  //         justifyContent: "space-between"
  //     }}>
       
  //      <People />
  //      <EndDate taninmismarka={data.taninmis}
  //               toplammarka={data.marka} />
  //      </View>
  //   )
  // }