import { View, Text, Image, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export function Post({ post }) {
    return (
        <View className="bg-gray-50 p-3 rounded-lg mb-3">
            <View className="flex-row items-center mb-2">
                <Image source={post.avatar} style={{ width: 40, height: 40, borderRadius: 32 }}
                    resizeMode="cover"
                    className="mr-2" />
                <View>
                    <Text className="font-bold text-gray-800">{post.user}</Text>
                    <Text className="text-gray-500 text-xs">{post.time}</Text>
                </View>
            </View>
            <Text className="text-gray-700 mb-3">{post.content}</Text>
            <View className="flex-row justify-between">
                <TouchableOpacity className="flex-row items-center">
                    <FontAwesome5 name="heart" size={16} color="#6B7280" solid />
                    <Text className="ml-1 text-gray-600">{post.likes}</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row items-center">
                    <FontAwesome5 name="comment" size={16} color="#6B7280" />
                    <Text className="ml-1 text-gray-600">{post.comments}</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome5 name="share" size={16} color="#6B7280" />
                </TouchableOpacity>
            </View>
        </View>
    );
}