import { View, Text, Image, TouchableOpacity } from 'react-native';

//import { EthPrice, People, EndDate } from './Subinfo';
import { COLORS, SIZES, FONTS } from '../constants';
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';


const DetailsBid = ({ bid }) => {
  const navigation = useNavigation();
  
  return (
      <TouchableOpacity onPress={() => navigation.navigate("Detailsmarka", bid) }>        
        <View style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: "space-between",
              alignItems: 'center',
              marginVertical: SIZES.base,
              paddingHorizontal: SIZES.base,
            }}>
          <Image 
            source={bid.image}
            resizeMode="contain"
            style={{ width: 48, height: 48 }}
          />

          <View>
            <Text style={{
              fontFamily: FONTS.semiBold,
              fontSize: SIZES.small,
              color: COLORS.primary,
              justifyContent:"space-evenly"
            }}>
              {bid.markaadi}
              
            </Text>
            <Text style={{
              fontFamily: FONTS.regular,
              fontSize: SIZES.small - 2,
              color: COLORS.secondary,
              marginTop: 3,
              justifyContent:"space-evenly"
            }}>
            {bid.basvuruno} 
            </Text>
          </View>
        
          <AntDesign name="rightcircleo" size={24} color={COLORS.gray}/>
        </View>
      </TouchableOpacity>

  )
}

export default DetailsBid