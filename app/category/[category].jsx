import { Stack, useLocalSearchParams } from "expo-router"
import React from "react"
import { FlatList, Image, View } from "react-native"

const categorieData = [
  {
    id: 1,
    src: require("../../assets/images/medias.jpg"),
  },
  {
    id: 2,
    src: require("../../assets/images/cordones.jpg"),
  },
  {
    id: 3,
    src: require("../../assets/images/rinonera.jpg"),
  },
  {
    id: 4,
    src: require("../../assets/images/mochila.jpg"),
  },
  {
    id: 5,
    src: require("../../assets/images/gorra.jpg"),
  },
  {
    id: 6,
    src: require("../../assets/images/vincha.jpg"),
  },
]

const Category = () => {
  const { id, title } = useLocalSearchParams()
  return (
    <>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#FBEBE1",
          },
          headerTintColor: "#7D4F50",
          headerTitle: `Categoria: ${title}`,
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
        <FlatList
          data={categorieData}
          numColumns={2}
          renderItem={({ item }) => (
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 20,
              }}
            >
              <Image
                source={item.src}
                style={{
                  width: 170,
                  height: 220,
                  borderRadius: 15,
                  objectFit: "cover",
                }}
              />
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </>
  )
}

export default Category
