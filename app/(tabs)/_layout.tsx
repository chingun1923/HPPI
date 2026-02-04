import React from 'react';
import { Tabs } from 'expo-router';
import { View, Platform, Text } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { useFonts } from 'expo-font';
import { Image } from 'expo-image';

interface TabBarIconProps {
  color: string;
  size?: number;
  focused?: boolean;
}

export default function TabLayout(): React.ReactElement | null {
  const isWeb = Platform.OS === 'web';
  
  // Don't load fonts on web
  const [fontsLoaded] = useFonts(
    isWeb ? {} : {
      ...AntDesign.font,
      ...SimpleLineIcons.font,
      ...Ionicons.font,
      ...MaterialCommunityIcons.font,
      ...EvilIcons.font,
    }
  );

  // Only check fontsLoaded on mobile
  if (!isWeb && !fontsLoaded) return null;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#0066ff',
        tabBarInactiveTintColor: '#333',
        tabBarStyle: { 
          height: 70, 
          paddingBottom: 5, 
          position: 'absolute',
        },
        tabBarLabelStyle: { fontSize: 12 },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'нүүр',
          tabBarIcon: ({ color }: TabBarIconProps) => {
            if (isWeb) {
              return (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Image source={require('@/assets/images/7392.png')} style={{height: 40, width: 40,}} />
                </View>
              );
            }
            return <SimpleLineIcons name="home" size={23} color={color} />;
          },
        }}
      />

      <Tabs.Screen
        name="services"
        options={{
          title: 'үйлчилгээ',
          tabBarIcon: ({ color }: TabBarIconProps) => {
            if (isWeb) {
              return (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Image source={require('@/assets/images/7386.png')} style={{height: 40, width: 40,}} />
                </View>
              );
            }
            return <SimpleLineIcons name="grid" size={20} color={color} />;
          },
        }}
      />

      <Tabs.Screen
        name="qr"
        options={{
          title: '',
          tabBarIcon: () => {
            if (isWeb) {
              return (
                <View
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: 36,
                    backgroundColor: '#0066ff',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 25,
                    borderWidth: 6,
                    borderColor: '#f9f9f9',
                  }}
                >
                  <Image source={require('@/assets/images/qr.png')} style={{height: 40, width: 40,}} />
                </View>
              );
            }
            return (
              <View
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: 36,
                  backgroundColor: '#0066ff',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 25,
                  borderWidth: 6,
                  borderColor: '#f9f9f9',
                }}
              >
                <MaterialCommunityIcons name="qrcode-scan" size={32} color="white" />
              </View>
            );
          },
        }}
      />

      <Tabs.Screen
        name="chat"
        options={{
          title: 'Чат',
          tabBarIcon: ({ color }: TabBarIconProps) => {
            if (isWeb) {
              return (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Image source={require('@/assets/images/7388.png')} style={{height: 40, width: 40,}} />
                </View>
              );
            }
            return <Ionicons name="chatbubbles-outline" size={24} color={color} />;
          },
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Профайл',
          tabBarIcon: ({ color }: TabBarIconProps) => {
            if (isWeb) {
              return (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Image source={require('@/assets/images/7396.png')} style={{height: 40, width: 40,}} />
                </View>
              );
            }
            return <EvilIcons name="user" size={35} color={color} />;
          },
        }}
      />
    </Tabs>
  );
}