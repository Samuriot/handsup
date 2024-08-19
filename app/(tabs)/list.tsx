import { View } from 'react-native';
import { Link } from 'expo-router';

const ListPage = () => {
    return (
        <View>
            <Link href="../list/1">Illenium</Link>
            <Link href="../list/2">Illenium</Link>
            <Link href="../list/3">Illenium</Link>
        </View>
    )
}

export default ListPage