import { View, Text } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Image 
          source={assets.yplogo}
          resizeMode="contain"
          style={{ width: '40%', height: '75%' }}          
        />

        <View style={{ width: 45, height: 45}}>
          <Image 
            source={assets.hblogo}
            resizeMode="contain"
            style={{ width: '100%', height: '100%' }}
          />
                    <Image 
            source={assets.badge}
            resizeMode="contain"
            style={{ position: 'absolute', width: 15, height: 15, bottom: 0, right: 0 }}
          />
        </View>
      </View>
  )
}

export default Header