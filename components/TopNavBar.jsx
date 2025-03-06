import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter, usePathname } from 'expo-router';

const TopNavBar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const isProfilePage = pathname === '/profile';

  return (
    <View className="bg-purple-600 p-4 flex-row items-center justify-between relative" 
    style={{ justifyContent: 'space-between' }}>
      {isProfilePage ? (
        <TouchableOpacity onPress={() => router.back()} className="z-10">
          <FontAwesome name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
      ) : (
        <View className="w-6" /> // Placeholder to balance space on the left
      )}

      {/* Title Centered */}
      <Text className="text-white text-lg font-bold"
      style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
        UniUnite
      </Text>

      {!isProfilePage && (
        <TouchableOpacity onPress={() => router.push('/profile')} className="z-10">
          <FontAwesome name="user-circle" size={24} color="white" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TopNavBar;
