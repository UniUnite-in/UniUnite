import { Tabs } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
import "../../global.css";
export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="home/index"
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="community/index"
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="users" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="events"
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="calendar-alt" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="notes"
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="sticky-note" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="chats"
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="comments" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
