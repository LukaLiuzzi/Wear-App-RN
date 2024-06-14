import React from "react"
import { Image, Pressable, Text, View } from "react-native"
import { Ionicons } from "@expo/vector-icons"

const Detail = () => {
  return (
    <View
      style={{ flex: 1, backgroundColor: "#FBEBE1", paddingHorizontal: 30 }}
    >
      <Image
        source={require("../../assets/images/remera.jpg")}
        style={{ width: 350, height: 300, marginVertical: 50 }}
      />
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 10,
          color: "#7D4F50",
        }}
      >
        Te recomendamos el talle M. Este tipo de prendas las podes encontrar en:
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
  )
}

export default Detail
