import React, { useState } from "react"
import { FlatList, Image, Pressable, Text, View } from "react-native"

const data = [
  {
    id: 1,
    src: require("../../assets/images/1.png"),
  },
  {
    id: 2,
    src: require("../../assets/images/2.png"),
  },
  {
    id: 3,
    src: require("../../assets/images/3.png"),
  },
  {
    id: 4,
    src: require("../../assets/images/4.png"),
  },
]

const SelectBodyScreen = () => {
  const [selected, setSelected] = useState(null)

  return (
    <View style={{ flex: 1, backgroundColor: "#F9EAE1" }}>
      <View style={{ marginTop: 60 }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 10,
            color: "#7D4F50",
            paddingHorizontal: 20,
          }}
        >
          Selecciona la imagen que se asemeja a vos
        </Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Pressable
            style={{
              margin: 10,
              borderWidth: selected === item.id ? 1 : 0,
              justifyContent: "center",
              alignItems: "center",
              borderColor: "#7D4F50",
              borderRadius: 20,
            }}
            onPress={() => setSelected(item.id)}
          >
            <Image
              source={item.src}
              style={{ width: 300, height: 510, objectFit: "contain" }}
            />
          </Pressable>
        )}
      />
      <Pressable
        style={{
          backgroundColor: "#CC8B86",
          padding: 10,
          borderRadius: 20,
          margin: 20,
          opacity: selected ? 1 : 0.5,
        }}
        disabled={!selected}
      >
        <Text style={{ color: "white", textAlign: "center", fontSize: 20 }}>
          Seleccionar y continuar
        </Text>
      </Pressable>
    </View>
  )
}

export default SelectBodyScreen
