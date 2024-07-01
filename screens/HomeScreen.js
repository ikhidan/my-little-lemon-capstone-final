import React, { useState, useEffect } from 'react';
import { ActivityIndicator, FlatList,Text, View,StyleSheet, Pressable,SafeAreaView } from 'react-native';

export default HomeScreen = ({navigation}) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    
        const getMenu = async () => {
         try { 
             const response = await fetch(
                 'https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/capstone.json' 
             );
          const json = await response.json();
          setData(json.menu);
        } catch (error) {
         console.error(error);
        } finally {
            setLoading(false);
        }
      };
    
     useEffect(() => {
         getMenu();
         }, []);
    
         const Item = ({ name, price }) => (
    <View style={menuStyles.innerContainer}>
         <Text style={menuStyles.itemText}>{name}</Text>
         <Text style={menuStyles.itemText}>{'$' + price}</Text>
    </View>
         );
    
         const renderItem = ({ item }) => (
         <Item name={item.title} price={item.price} />
         );
    
     return (
    
     <SafeAreaView style={menuStyles.container}>
         <Text style={menuStyles.headerText}>Little Lemon Menu</Text>
         {isLoading ? (
         <ActivityIndicator />
            ) : (
         <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={renderItem}
            />
        )}

<Pressable onPress={() => navigation.navigate('Profile')} style={menuStyles.button}>
            <Text style={menuStyles.buttonText}>Profile</Text>
          </Pressable>
        </SafeAreaView>

        );

    };
    
    const menuStyles = StyleSheet.create({
        container: {
        flex: 1,
    },
    innerContainer: {
        paddingHorizontal: 40,
        paddingVertical: 20,
        backgroundColor: '#495E57',
        flexDirection: 'row',
        justifyContent: 'space-between',
        },
    itemText: {
        color: '#F4CE14',
        fontSize: 22,
        },
    headerText: {
        color: '#495E57',
        fontSize: 30,
        textAlign: 'center',
        },
    button: 
        {
        fontSize: 22,
        padding: 5,
        marginVertical: 50,
        margin: 120,
        backgroundColor: '#EE9972',
        borderColor: '#EE9972',
        borderWidth: 2,
        borderRadius: 10,   
        },
    buttonText: 
        {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 25,
        },

    });
    
    