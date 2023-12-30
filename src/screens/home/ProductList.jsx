import React from 'react';
import {
    Dimensions,
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import {
    BORDERRADIUS,
    COLORS,
    FONTFAMILY,
    FONTSIZE,
    SPACING,
} from '../../theme/theme';
import ProductCard from '../../components/ProductCard';
import { useNavigation } from '@react-navigation/native';

const ProductList = ({ products = [] }) => {
    const navigation = useNavigation();

    const CoffeCardAddToCart = () => {
    }

    return <FlatList
        horizontal
        ListEmptyComponent={
            <View style={styles.EmptyListContainer}>
                <Text style={styles.CategoryText}>No Products Available</Text>
            </View>
        }
        showsHorizontalScrollIndicator={false}
        data={products}
        contentContainerStyle={styles.FlatListContainer}
        keyExtractor={item => item._id}
        renderItem={({ item }) => {
            return (
                <TouchableOpacity
                    onPress={() => {
                        navigation.push('Details', {
                            index: item._id,
                            id: item._id,
                            type: item.type,
                        });
                    }}>
                    <ProductCard
                        id={item._id}
                        index={item._id}
                        type={item.type}
                        roasted={item?.roasted || 2}
                        imagelink_square={item.images[0]}
                        name={item.name}
                        special_ingredient={item?.special_ingredient | ""}
                        average_rating={4}
                        price={item.discountAmount}
                        buttonPressHandler={CoffeCardAddToCart}
                    />
                </TouchableOpacity>
            );
        }}
    />
}


const styles = StyleSheet.create({
    ScreenContainer: {
        flex: 1,
        backgroundColor: COLORS.primaryBlackHex,
    },
    ScrollViewFlex: {
        flexGrow: 1,
    },
    ScreenTitle: {
        fontSize: FONTSIZE.size_28,
        fontFamily: FONTFAMILY.poppins_semibold,
        color: COLORS.primaryWhiteHex,
        paddingLeft: SPACING.space_30,
    },
    InputContainerComponent: {
        flexDirection: 'row',
        margin: SPACING.space_30,
        borderRadius: BORDERRADIUS.radius_20,
        backgroundColor: COLORS.primaryDarkGreyHex,
        alignItems: 'center',
    },
    InputIcon: {
        marginHorizontal: SPACING.space_20,
    },
    TextInputContainer: {
        flex: 1,
        height: SPACING.space_20 * 3,
        fontFamily: FONTFAMILY.poppins_medium,
        fontSize: FONTSIZE.size_14,
        color: COLORS.primaryWhiteHex,
    },
    CategoryScrollViewStyle: {
        paddingHorizontal: SPACING.space_20,
        marginBottom: SPACING.space_20,
    },
    CategoryScrollViewContainer: {
        paddingHorizontal: SPACING.space_15,
    },
    CategoryScrollViewItem: {
        alignItems: 'center',
    },
    CategoryText: {
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_16,
        color: COLORS.primaryLightGreyHex,
        marginBottom: SPACING.space_4,
    },
    ActiveCategory: {
        height: SPACING.space_10,
        width: SPACING.space_10,
        borderRadius: BORDERRADIUS.radius_10,
        backgroundColor: COLORS.primaryOrangeHex,
    },
    FlatListContainer: {
        gap: SPACING.space_20,
        paddingVertical: SPACING.space_20,
        paddingHorizontal: SPACING.space_30,
    },
    EmptyListContainer: {
        width: Dimensions.get('window').width - SPACING.space_30 * 2,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: SPACING.space_36 * 3.6,
    },
    CoffeeBeansTitle: {
        fontSize: FONTSIZE.size_18,
        marginLeft: SPACING.space_30,
        marginTop: SPACING.space_20,
        fontFamily: FONTFAMILY.poppins_medium,
        color: COLORS.secondaryLightGreyHex,
    },
});

export default ProductList