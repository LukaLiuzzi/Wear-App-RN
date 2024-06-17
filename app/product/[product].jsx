import React from "react"
import { router, Stack, useLocalSearchParams } from "expo-router"
import { Image, Linking, Pressable, Text, View } from "react-native"
import { Ionicons } from "@expo/vector-icons"

const recommendationsData = [
  {
    id: 1,
    src: require("../../assets/images/zapatillas.jpg"),
    title: "Zapatillas de entrenamiento",
  },
  {
    id: 2,
    src: require("../../assets/images/remera.jpg"),
    title: "Remeras",
  },
  {
    id: 3,
    src: require("../../assets/images/campera.jpg"),
    title: "Camperas",
  },
  {
    id: 4,
    src: require("../../assets/images/pantalon.jpg"),
    title: "Pantalones jogging",
  },
  {
    id: 5,
    src: require("../../assets/images/top.jpg"),
    title: "Tops deportivos",
  },
  {
    id: 6,
    src: require("../../assets/images/calza.jpg"),
    title: "Calzas",
  },
]

const Detail = () => {
  const { id } = useLocalSearchParams()
  const imageSrc = recommendationsData.find(
    (item) => item.id === Number(id)
  ).src
  return (
    <>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#FBEBE1",
          },
          headerTintColor: "#7D4F50",
          headerTitle: "Detalle",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 28,
          },
          headerShadowVisible: false,
        }}
      />
      <View
        style={{ flex: 1, backgroundColor: "#FBEBE1", paddingHorizontal: 30 }}
      >
        <Image
          source={imageSrc}
          style={{
            width: 350,
            height: 300,
            marginVertical: 50,
            objectFit: "contain",
          }}
        />
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            marginBottom: 10,
            color: "#7D4F50",
          }}
        >
          Te recomendamos el talle M. Este tipo de prendas las podes encontrar
          en:
        </Text>
        <View
          style={{
            marginVertical: 40,
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Pressable
            style={{
              margin: 2,
              justifyContent: "center",
              borderRadius: 10,
              backgroundColor: "#7D4F50",
              width: "100%",
              height: 80,
            }}
            onPress={() => Linking.openURL("https://www.adidas.com.ar/")}
          >
            <Text
              style={{ color: "#FBEBE1", fontSize: 25, paddingHorizontal: 30 }}
            >
              Adidas
            </Text>
            <Ionicons
              name="arrow-forward"
              size={24}
              color="#FBEBE1"
              style={{ position: "absolute", right: 20 }}
            />
          </Pressable>
          <Pressable
            style={{
              margin: 2,
              justifyContent: "center",
              borderRadius: 10,
              backgroundColor: "#7D4F50",
              width: "100%",
              height: 80,
            }}
            onPress={() => Linking.openURL("https://www.dionysos.com.ar/")}
          >
            <Text
              style={{ color: "#FBEBE1", fontSize: 25, paddingHorizontal: 30 }}
            >
              Dionysos
            </Text>
            <Ionicons
              name="arrow-forward"
              size={24}
              color="#FBEBE1"
              style={{ position: "absolute", right: 20 }}
            />
          </Pressable>
        </View>
      </View>
    </>
  )
}

export default Detail
