import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { useRouter } from "expo-router";
import { useState, useMemo } from "react";
import { eventData } from "../../../data/events";
import { EventCard } from "../../../components/home/EventCard";
import { SafeAreaView } from "react-native-safe-area-context";

export default function EventsList() {
  const router = useRouter();
  const { width } = useWindowDimensions();

  // Dynamically set columns:
  // 1 for mobile, 2 for tablets, 3 for wide desktops (adjust breakpoints as desired).
  let numColumns = 1;
  if (width > 1024) {
    numColumns = 3;
  }
  else if (width > 768) {
    numColumns = 2;
  }

  // Force re-render of FlatList when numColumns changes
  const flatListKey = useMemo(() => `events-${numColumns}`, [numColumns]);

  // State for filters and search
  const [search, setSearch] = useState("");
  const [selectedFilter, setSelectedFilter] = useState(null);

  // Filters to show at the top
  const filters = ["Upcoming", "Workshops", "Concerts", "Today"];

  // Filter logic
  const filteredEvents = eventData.filter(
    (event) =>
      (!selectedFilter || event.type.includes(selectedFilter)) &&
      event.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View className="flex-1 bg-white p-2">
      {/* Search Bar */}
      <TextInput
        className="border border-gray-300 p-3 rounded-lg mb-2 shadow-sm"
        placeholder="Search for events..."
        value={search}
        onChangeText={setSearch}
      />

      {/* Horizontal Filters */}
      <View className="h-14">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="h-full mb-2"
        >
          <View className="flex-row space-x-3 items-center">
            {/* 'All' Filter */}
            <TouchableOpacity
              className={`h-10 px-5 mr-1 rounded-full flex items-center justify-center ${selectedFilter === null ? "bg-purple-600" : "bg-gray-200"
                }`}
              onPress={() => setSelectedFilter(null)}
            >
              <Text
                className={`text-sm ${selectedFilter === null ? "text-white" : "text-black"
                  }`}
              >
                All
              </Text>
            </TouchableOpacity>

            {filters.map((filter) => (
              <TouchableOpacity
                key={filter}
                className={`h-10 px-5 mr-1 rounded-full flex items-center justify-center ${selectedFilter === filter ? "bg-purple-600" : "bg-gray-200"
                  }`}
                onPress={() => setSelectedFilter(filter)}
              >
                <Text
                  className={`text-sm ${selectedFilter === filter ? "text-white" : "text-black"
                    }`}
                >
                  {filter}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>

      {/* Responsive Event List */}
      <FlatList
        key={flatListKey}
        data={filteredEvents}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={
          numColumns > 1
            ? {
              justifyContent: "space-between",
              marginBottom: 10,
            }
            : null
        }
        renderItem={({ item }) => {
          return (
            <View
              className="bg-white border border-gray-300 rounded-lg shadow-sm mb-4"
              style={{ width: (numColumns >= 2) ? ((numColumns == 3) ? "33%" : "48%") : "100%" }}
            >
              {/* Row Container: Image on Left, Info on Right */}
              <EventCard key={item.id} event={item} />
            </View>
          );
        }}
      />
    </View>
  );
}
