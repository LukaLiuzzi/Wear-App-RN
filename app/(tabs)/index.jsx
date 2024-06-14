import React from "react"
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Pressable,
  FlatList,
  Image,
} from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons"

const categoriesData = [
  {
    id: 1,
    src: require("../../assets/images/cap.png"),
  },
  {
    id: 2,
    src: require("../../assets/images/pyjamas.png"),
  },
  {
    id: 3,
    src: require("../../assets/images/skirt.png"),
  },
  {
    id: 4,
    src: require("../../assets/images/pullover.png"),
  },
  {
    id: 5,
    src: require("../../assets/images/blazer.png"),
  },
  {
    id: 6,
    src: require("../../assets/images/bustier.png"),
  },
  {
    id: 7,
    src: require("../../assets/images/trunks.png"),
  },
]

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

const HomeScreen = () => {
  return (
    <>
      <View
        style={{ flex: 1, backgroundColor: "#FBEBE1", paddingHorizontal: 30 }}
      >
        <SearchBar
          handleChange={() => console.log("Cambio")}
          handleSearchPress={() => console.log("Se presiono")}
        />
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            marginBottom: 10,
            color: "#7D4F50",
            marginVertical: 20,
          }}
        >
          Categorias
        </Text>
        <View>
          <FlatList
            data={categoriesData}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <Pressable
                style={{
                  margin: 2,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 10,
                  backgroundColor: "#7D4F50",
                  width: 70,
                  height: 80,
                }}
              >
                <Image
                  source={item.src}
                  style={{
                    width: 44,
                    height: 48,
                    objectFit: "cover",
                  }}
                />
              </Pressable>
            )}
          />
        </View>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            marginBottom: 10,
            color: "#7D4F50",
            marginVertical: 20,
          }}
        >
          Recomendaciones
        </Text>
        <View>
          <FlatList
            data={recommendationsData.slice(0, 3)}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View
                style={{
                  margin: 4,
                  justifyContent: "center",
                }}
              >
                <Image
                  source={item.src}
                  style={{
                    width: 160,
                    height: 160,
                    objectFit: "cover",
                    borderRadius: 10,
                  }}
                />
                <Text
                  style={{
                    color: "#7D4F50",
                    fontSize: 12,
                    marginTop: 20,
                  }}
                >
                  {item.title}
                </Text>
              </View>
            )}
          />
          <View style={{ marginVertical: 15 }}></View>
          <FlatList
            data={recommendationsData.slice(3)}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View
                style={{
                  margin: 4,
                  justifyContent: "center",
                }}
              >
                <Image
                  source={item.src}
                  style={{
                    width: 160,
                    height: 160,
                    objectFit: "cover",
                    borderRadius: 10,
                  }}
                />
                <Text
                  style={{
                    color: "#7D4F50",
                    fontSize: 12,
                    marginTop: 20,
                  }}
                >
                  {item.title}
                </Text>
              </View>
            )}
          />
        </View>
      </View>
    </>
  )
}

export default HomeScreen

const SearchBar = ({
  handleChange,
  handleSearchPress,
  showSearchBtn = true,
  showFilterBtn = false,
  search,
  handleFilterPress,
  isInputDisabled = false,
}) => {
  return (
    <View style={styles.navigationContainer}>
      <View style={styles.inputContainer}>
        {showSearchBtn && (
          <Pressable onPress={() => handleSearchPress()}>
            <Ionicons name="search" size={32} color="#ACB8C2" />
          </Pressable>
        )}
        <TextInput
          placeholder="Buscar"
          style={styles.input}
          value={search}
          onChangeText={(text) => handleChange(text)}
          editable={!isInputDisabled}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  navigationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: 10,
    marginTop: 10,
  },
  inputContainer: {
    backgroundColor: "#FFF",
    flexDirection: "row",
    alignItems: "center",
    width: 294,
    height: 40,
    borderColor: "#ACB8C2",
    width: "100%",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 5,
    fontSize: 20,
  },
  input: {
    color: "black",
    flex: 1,
  },
})
