import React, { useState, useRef } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  Modal, 
  Dimensions, 
  Pressable,
  Animated,
  Platform // Added this to detect Web vs Mobile
} from 'react-native';
import { Image } from 'expo-image';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function ProfileScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  // --- Animation Logic for ID Card Flip ---
  const [isFlipped, setIsFlipped] = useState(false);
  const flipAnimation = useRef(new Animated.Value(0)).current;

  const handleFlip = () => {
    Animated.spring(flipAnimation, {
      toValue: isFlipped ? 0 : 180,
      friction: 8,
      tension: 10,
      useNativeDriver: true,
    }).start();
    setIsFlipped(!isFlipped);
  };

  const frontInterpolate = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });

  const backInterpolate = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });

  const frontAnimatedStyle = { transform: [{ rotateY: frontInterpolate }] };
  const backAnimatedStyle = { transform: [{ rotateY: backInterpolate }] };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#eaf5ff' }} edges={['top']}>
        <ScrollView       
          contentContainerStyle={{ paddingBottom: 105 }}
          showsVerticalScrollIndicator={false}>
          
          <View style={styles.cont}>
            {/* Header Section */}
            <View style={styles.profileHeader}>
              <View>
                <Image
                  source={require('@/assets/images/me.jpg')}
                  style={{ width: 50, height: 50, borderRadius: 70, marginLeft: 10, borderWidth: 0.2 }}
                />
              </View>
              <View style={styles.information1}>
                <Text style={styles.name}>Ч.Жамух</Text>
                <Text style={{paddingLeft: 10, fontSize: 12.5, paddingTop: 7}}>852675413756@e-mongolia.mn</Text>
              </View>
              <Image
                source={require('@/assets/images/arr.png')}
                style={{ width: 32, height: 32, marginLeft: 50 }}
              />
            </View>

            <View style={{display: "flex", paddingTop: 20, flexDirection: "row", justifyContent: "space-evenly", alignItems: "center"}}>
              <Text style={{paddingLeft: 0, fontWeight: "500"}}>Миний бичиг баримтууд</Text>
              <View style={{display: "flex", alignItems: "center", justifyContent: "center",}}>
                <Text style={styles.update}>Шинэчлэх</Text>
              </View>
            </View>

            {/* Swiper Section */}
            <View style={{display: "flex", alignItems: "center", width: "auto", height: 270, borderWidth: 0, marginTop: -10}}>
              <ScrollView 
                horizontal 
                pagingEnabled 
                showsHorizontalScrollIndicator={false} 
                style={styles.cardSwiper}
              >
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                  <Image source={require('@/assets/images/id.png')} style={styles.idCardImage} contentFit="contain" />
                </TouchableOpacity>
              </ScrollView>
            </View>

            <View style={{display: "flex", alignItems: "center"}}>
              <View style={{display: "flex", alignItems: "center", justifyContent: "center",}}>
              <View style={{display: "flex", justifyContent: "center", alignItems: "center"}}></View>
              <Text style={styles.info2}>Бүх бичиг баримтыг харах</Text>
              </View>
              
              <View>
                {/* Section 1 */}
                <View style={styles.profileMiddle}>
                  <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <View style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                      <Image source={require('@/assets/images/6805.png')} style={{ width: 50, height: 50, borderRadius: 70 }} />
                      <Text style={styles.itemText}>Төрд байгаа миний мэдээлэл</Text>
                    </View>
                    <View style={{ justifyContent: "center"}}>
                      <Image source={require('@/assets/images/arr.png')} style={{ width: 27, height: 27 }} />
                    </View>
                  </View>
                  <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <View style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                      <Image source={require('@/assets/images/6796.png')} style={{ width: 50, height: 50, borderRadius: 70 }} />
                      <Text style={styles.itemText}>Цахим хэтэвч</Text>
                    </View>
                    <View style={{ justifyContent: "center"}}>
                      <Image source={require('@/assets/images/arr.png')} style={{ width: 27, height: 27 }} />
                    </View>
                  </View>
                </View>

                {/* Section 2 */}
                <View style={styles.profileMiddle1}>
                  <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <View style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                      <Image source={require('@/assets/images/6809.png')} style={{ width: 50, height: 50, borderRadius: 70 }} />
                      <Text style={styles.itemText}>Төрд байгаа миний мэдээлэл</Text>
                    </View>
                    <View style={{ justifyContent: "center"}}>
                      <Image source={require('@/assets/images/arr.png')} style={{ width: 27, height: 27 }} />
                    </View>
                  </View>
                </View>

                {/* Section 3 - THE BIG LIST */}
                <View style={styles.profileMiddle1}>
                  <View style={styles.listItem}>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                      <Image source={require('@/assets/images/6807.png')} style={styles.smallIcon} />
                      <Text style={styles.itemText}>Үндэсний шуудан</Text>
                    </View>
                    <Image source={require('@/assets/images/arr.png')} style={styles.smallArr} />
                  </View>

                  <View style={styles.listItem}>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                      <Image source={require('@/assets/images/6826.png')} style={styles.smallIcon} />
                      <Text style={styles.itemText}>Талархал</Text>
                    </View>
                    <Image source={require('@/assets/images/arr.png')} style={styles.smallArr} />
                  </View>

                  <View style={styles.listItem}>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                      <Image source={require('@/assets/images/6814.png')} style={styles.smallIcon} />
                      <Text style={styles.itemText}>Судалгаа</Text>
                    </View>
                    <Image source={require('@/assets/images/arr.png')} style={styles.smallArr} />
                  </View>

                  <View style={styles.listItem}>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                      <Image source={require('@/assets/images/6818.png')} style={styles.smallIcon} />
                      <Text style={styles.itemText}>Санал, гомдол</Text>
                    </View>
                    <Image source={require('@/assets/images/arr.png')} style={styles.smallArr} />
                  </View>

                  <View style={styles.listItem}>
                    <View style={{flexDirection: "row",alignItems: "center"}}>
                      <Image source={require('@/assets/images/6820.png')} style={styles.smallIcon} />
                      <Text style={styles.itemText}>Баталгаажуулалт</Text>
                    </View>
                    <Image source={require('@/assets/images/arr.png')} style={styles.smallArr} />
                  </View>
                </View>

                {/* Section 4 - Exit */}
                <View style={styles.profileMiddle1}>
                  <View style={styles.listItem}>
                    <View style={{flexDirection: "row",alignItems: "center"}}>
                      <Image source={require('@/assets/images/6824.png')} style={styles.smallIcon} />
                      <Text style={styles.itemText}>Системээс гарах</Text>
                    </View>
                    <Image source={require('@/assets/images/arr.png')} style={styles.smallArr} />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>

        {/* Modal - Unified for Web/Mobile */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
          presentationStyle={Platform.OS === 'ios' ? 'overFullScreen' : undefined}
          statusBarTranslucent={true}
        >
          <View style={styles.modalOverlay}>
            <Pressable style={styles.absoluteBackground} onPress={() => setModalVisible(false)} />
            
            <View style={styles.modalContent}>
              <View style={styles.modalHandle} />
              <Text style={styles.modalTitle}>Иргэний үнэмлэх</Text>
              
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.cardContainer}>
                  <TouchableOpacity activeOpacity={1} onPress={handleFlip}>
                    <Animated.View style={[styles.flipCard, frontAnimatedStyle]}>
                      <Image source={require('@/assets/images/id.png')} style={styles.modalIdImage} contentFit="contain" />
                    </Animated.View>
                    <Animated.View style={[styles.flipCard, styles.flipCardBack, backAnimatedStyle]}>
                      <Image source={require('@/assets/images/idback.png')} style={styles.modalIdImage} contentFit="contain" />
                    </Animated.View>
                  </TouchableOpacity>
                </View>

                <View style={{ alignItems: 'center', paddingBottom: 15 }}>
                  <TouchableOpacity style={styles.downloadBtn}>
                    <Text style={styles.downloadBtnText}>Лавлагаа авах</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.downloadBtn1}>
                    <Text style={styles.downloadBtnText1}>Дахин захиалах</Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'flex-end', 
    alignItems: 'center',
    zIndex: 99999,
    // FIXED: Use Dimensions instead of "100vh"
    height: Dimensions.get('window').height,
    position: Platform.OS === 'web' ? 'fixed' : 'absolute',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    width: '100%',
    maxWidth: 500, 
    maxHeight: '70%',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -10 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    marginBottom: 0,
  },
  modalHandle: {
    width: 40,
    height: 5,
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    alignSelf: 'center',
    marginVertical: 0,
    marginTop: 10,
  },
modalTitle: {
  textAlign: 'center',
  fontSize: 13,
  fontWeight: '300',
  marginTop: 14,
  marginBottom: -80,
},
modalIdImage: { 
    width: SCREEN_WIDTH - 20, 
    height: 350, // Front height
    borderRadius: 15,
    marginBottom: -100,
  },
  flipCard: { 
    backfaceVisibility: 'hidden',
    width: SCREEN_WIDTH - 20,
    height: 350, // Match front
    alignItems: 'center',
    justifyContent: 'center',
  },
  flipCardBack: { 
    position: 'absolute', 
    top: 0,
    width: SCREEN_WIDTH - 20,
    height: 350, // FIXED: Was 200, now matches front
    alignItems: 'center',
    justifyContent: 'center',
  },
cardContainer: {
  alignItems: "center",
  width: '100%',
  marginTop: 6,
  marginBottom: 6,
},
    absoluteBackground: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
  },
  listItem: { display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  smallIcon: { width: 50, height: 50, borderRadius: 70 },
  smallArr: { width: 27, height: 27 },
  itemText: { fontWeight: "500", verticalAlign: "middle", paddingLeft: 7 },
  downloadBtn: { backgroundColor: '#0066ff', height: 50, width: 350, marginTop: 10, borderRadius: 10, alignItems: 'center', justifyContent: "center" },
  downloadBtn1: { backgroundColor: '#c0daecff', height: 50, width: 350, marginTop: 10, borderRadius: 10, alignItems: 'center', justifyContent: "center" },
  downloadBtnText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
  downloadBtnText1: { color: '#0066ff', fontWeight: 'bold', fontSize: 16 },
  cont: { display: "flex", justifyContent: "center" },
  profileHeader: { backgroundColor: 'white', marginTop: 10, alignSelf: 'center', width: 350, height: 80, borderRadius: 15, flexDirection: "row", alignItems: "center" },
  information1: { display: "flex", flexDirection: "column", alignItems: "flex-start" },
  name: { color: "#0066ff", fontWeight: "400", fontSize: 17, paddingLeft: 10 },
  update: { width: 100, borderRadius: 20, height: 30, textAlign: "center",justifyContent: "center",textAlignVertical: "center", backgroundColor: "white", marginTop: 0, marginLeft: 20, fontSize: 13,display: "flex", alignItems: "center" },
  info2: { height: 40, borderRadius: 13, width: 200, textAlign: "center", textAlignVertical: "center",justifyContent: "center", fontSize: 12, fontWeight: "500", color: "#0066ff", backgroundColor: "white", marginTop: -0, display: "flex", alignItems: "center", },
  cardSwiper: { height: 220, marginBottom: 20 },
  idCardImage: { width: SCREEN_WIDTH - 40, height: 350, marginHorizontal: 20, marginTop: -45 },
  profileMiddle: { backgroundColor: 'white', marginTop: 20, alignSelf: 'center', width: 350, borderRadius: 15, padding: 5 },
  profileMiddle1: { backgroundColor: 'white', marginTop: 10, alignSelf: 'center', width: 350, borderRadius: 15, padding: 5 },
});