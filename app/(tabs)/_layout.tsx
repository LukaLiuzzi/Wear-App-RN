import { Tabs } from "expo-router"
import React from "react"
import { TabBarIcon } from "@/components/navigation/TabBarIcon"

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarInactiveTintColor: "#fff",
        tabBarActiveTintColor: "#7D4F50",
        headerShown: false,
        tabBarInactiveBackgroundColor: "#CC8B86",
        tabBarActiveBackgroundColor: "#CC8B86",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerStyle: {
            backgroundColor: "#CC8B86",
            height: 100,
          },
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: "#FBEBE1",
            fontSize: 50,
            fontWeight: "bold",
          },
          headerTitle: "Wear",
          headerShown: true,
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="information"
        options={{
          title: "Information",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "information" : "information-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "accessibility" : "accessibility-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  )
}
