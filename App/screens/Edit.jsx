import React, {useState} from 'react'
import { View, Text, Dimensions, Button, TouchableOpacity, Image } from 'react-native';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const windowHeight = Dimensions.get('window').height;

const Edit = ({ navigation }) => {

  const [Profile, setProfile] = useState({'FirstName': 'Sirine', 'LastName': 'ghouili', 'Avatar': 'https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg', 'cover': 'yellow' })

  return (
    <View style={{ flex: 1}}>
      <View style={{ width: "100%", height: windowHeight * 0.17, backgroundColor: Profile.cover}}></View>
      <View style={{marginTop: "-8%", marginHorizontal: "5%"}}>
        <Avatar 
          size={130}
          rounded
          source={Profile.Avatar ? { uri:Profile.Avatar } : {}}
        />
      <Text style={{fontSize: 20, fontWeight: '700', marginTop: "2%"}}>{Profile.LastName} {Profile.FirstName}</Text>
      <View style={{flexDirection: 'row', marginTop: "1%"}}>
        <View style={{marginTop: "1%"}}>
          <FontAwesome5 name="user-alt" color={'grey'} size={15} />
        </View>
        <Text style={{fontSize: 16, color: 'grey', marginLeft: "2%"}}>3 abonnes </Text>
        <Text style={{fontSize: 16, marginTop: "-1%", color: 'grey'}}>. </Text>
        <Text style={{fontSize: 16, color: 'grey'}}>50 abonnement </Text>
      </View>
      <View style={{flexDirection: 'row', marginTop: "3%", justifyContent: 'space-between'}}>
      
        <TouchableOpacity style={{ backgroundColor: 'black', paddingHorizontal: "10%", paddingVertical: "1%", borderRadius: 3}} >
          <Text style={{fontSize: 16, color: 'white'}}>Ecouter </Text>
        </TouchableOpacity>

        <View style={{marginTop: "1%", flexDirection: 'row'}}>
          <EvilIcons name="pencil" color={'#696969'} size={35} />
          <AntDesign name="sharealt" color={'#696969'} size={25} />
        </View>

      </View>
      <View style={{marginTop: "10%"}}>
        <Text style={{fontSize: 20, fontWeight: '700', marginTop: "2%"}}>Playlists</Text>
        <View style={{flexDirection: 'row', }}>
          <View>
            <Image
              style={{width: 100, height: 100, borderRadius: 3, zIndex: 10}}
              source={{
                uri: 'https://llorca.github.io/react-layered-image/static/images/layer-1.png'
              }}
            />

            <View style={{width: 100, height: 100, borderRadius: 5, backgroundColor: '#A9A9A9', marginTop: -95, marginLeft: 5,zIndex: 5}} />
            
            <View style={{width: 100, height: 100, borderRadius: 5, backgroundColor: '#BEBEBE', marginTop: -95, marginLeft: 10}} />

            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Text style={{fontSize: 16, fontWeight: '600'}}>motivation</Text>
                <Text style={{fontSize: 16, fontWeight: '600', color:'grey'}}>{Profile.LastName} {Profile.FirstName}</Text>
              </View>

              <View style={{marginTop: "2.5%"}}>
                <SimpleLineIcons name="options-vertical" color={'#696969'} size={15} />
              </View>

            </View>
          </View>

          <View style={{marginLeft: "3%"}}>
            <Image
              style={{width: 100, height: 100, borderRadius: 3, zIndex: 10}}
              source={{
                uri: 'https://llorca.github.io/react-layered-image/static/images/layer-1.png'
              }}
            />

            <View style={{width: 100, height: 100, borderRadius: 5, backgroundColor: '#A9A9A9', marginTop: -95, marginLeft: 5,zIndex: 5}} />
            
            <View style={{width: 100, height: 100, borderRadius: 5, backgroundColor: '#BEBEBE', marginTop: -95, marginLeft: 10}} />

            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Text style={{fontSize: 16, fontWeight: '600'}}>motivation</Text>
                <Text style={{fontSize: 16, fontWeight: '600', color:'grey'}}>{Profile.LastName} {Profile.FirstName}</Text>
              </View>

              <View style={{marginTop: "2.5%"}}>
                <SimpleLineIcons name="options-vertical" color={'#696969'} size={15} />
              </View>

            </View>
          </View>

          
        </View>
      </View>
      </View>
    </View>
  )
}

export default Edit