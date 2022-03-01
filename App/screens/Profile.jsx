import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Avatar } from 'react-native-elements/dist/avatar/Avatar'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Profile = ({ navigation  }) => {

    const [Profile, setProfile] = useState({'FirstName': 'Sirine', 'LastName': 'ghouili', 'Avatar': 'https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg', 'cover': 'yellow' })
  return (
    <View style={{ flex: 1}}>
        
        <View style={{marginLeft: "2%"}} >
            <Text style={{fontSize: 30, fontWeight: '700'}}>Plus</Text>
            <TouchableOpacity style={{ marginLeft: "2%", flexDirection: 'row', marginTop: "5%", justifyContent: 'space-between'}}  onPress={() => navigation.navigate('Edit')} >
                <View style={{ flexDirection: 'row'}} >
                    <Avatar 
                        size={64}
                        rounded
                        source={Profile.Avatar ? { uri:Profile.Avatar } : {}}
                    />
                    <View style={{marginLeft: "3%", marginTop: "3%" }} >
                        <Text style={{fontSize: 22}}>{Profile.LastName} {Profile.FirstName}</Text>
                        <Text style={{fontSize: 16, color: 'grey'}}>Voir la Profil Public</Text>
                    </View>
                </View>
                <View style={{marginTop: "3%"}}>
                    <EvilIcons name="pencil" color={'black'} size={50} />
                </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={{ marginLeft: "2%", flexDirection: 'row', marginTop: "10%", justifyContent: 'space-between'}} >
                <Text style={{fontSize: 20, fontWeight: '300'}}>Enregistrer</Text>
                <MaterialIcons name="arrow-forward-ios" color={'#696969'} size={25} />
            </TouchableOpacity>
            
            <TouchableOpacity style={{ marginLeft: "2%", flexDirection: 'row', marginTop: "5%", justifyContent: 'space-between'}} >
                <Text style={{fontSize: 20, fontWeight: '300'}}>Parametres</Text>
                <MaterialIcons name="arrow-forward-ios" color={'#696969'} size={25} />
            </TouchableOpacity>
            
            <TouchableOpacity style={{ marginLeft: "2%", flexDirection: 'row', marginTop: "15%", justifyContent: 'space-between'}} >
                <Text style={{fontSize: 20, fontWeight: '300'}}>Assistance</Text>
                <MaterialIcons name="arrow-forward-ios" color={'#696969'} size={25} />
            </TouchableOpacity>
            
            <TouchableOpacity style={{ marginLeft: "2%", flexDirection: 'row', marginTop: "5%", justifyContent: 'space-between'}} >
                <Text style={{fontSize: 20, fontWeight: '300'}}>Mentions legales</Text>
                <MaterialIcons name="arrow-forward-ios" color={'#696969'} size={25} />
            </TouchableOpacity>
            
            <TouchableOpacity style={{ marginLeft: "2%", flexDirection: 'row', marginTop: "15%", justifyContent: 'space-between'}} onPress={() => navigation.navigate('Start')} >
                <Text style={{fontSize: 20, fontWeight: '300'}}>Deconnexion</Text>
                <MaterialIcons name="arrow-forward-ios" color={'#696969'} size={25} />
            </TouchableOpacity>
            
        </View>
    </View>
  )
}

export default Profile