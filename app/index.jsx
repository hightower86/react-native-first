import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';

export default function App() {
    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView contentContainerStyle={{ height: '100%' }}>
                <View className="h-full w-full px-4 items-center justify-center">
                    <Image
                        source={images.logo}
                        className="w-[130px] h-[44px]"
                        resizeMode="contain"
                    />
                    <Image
                        source={images.cards}
                        className="w-full max-w-[380px] h-[240px]"
                        resizeMode="contain"
                    />
                    <View className="relative mt-5">
                        <Text className="text-white text-3xl font-bold text-center">
                            Discover Endless Possibilities with{' '}
                            <Text className="text-secondary-200 font-bold">
                                Aora
                            </Text>
                        </Text>

                        <Image
                            source={images.path}
                            className="w-[96px] h-[25px] absolute -bottom-4 left-24"
                            resizeMode="contain"
                        />
                    </View>

                    <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
                        Where Creativity Meets Innovation: Embark on a Journey
                        of Limitless Exploration with Aora
                    </Text>

                    <CustomButton
                        title="Continue with Email"
                        handlePress={() => router.push('/sign-in')}
                        containerStyles="w-full mt-7"
                    />
                </View>
            </ScrollView>

            <StatusBar backgroundColor="#161622" style="light" />
        </SafeAreaView>
    );
}
