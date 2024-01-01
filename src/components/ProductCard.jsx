import React from 'react';
import {
    Dimensions,
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
    BORDERRADIUS,
    COLORS,
    FONTFAMILY,
    FONTSIZE,
    SPACING,
} from '../theme/theme';
import CustomIcon from './CustomIcon';

const CARD_WIDTH = Dimensions.get('window').width * 0.38;

const ProductCard = ({
    id,
    images,
    name,
    discountAmount,
    originalAmount,
    discountPercentage,
    buttonPressHandler,
}) => {
    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.CardLinearGradientContainer}
            colors={[COLORS.primaryGreyHex, COLORS.primaryWhiteHex]}>
            <ImageBackground
                source={{ uri: images[0] }}
                style={styles.CardImageBG}
                resizeMode="cover">
                <View style={styles.CardRatingContainer}>
                    <Text style={styles.CardRatingText}>{discountPercentage}% OFF</Text>
                </View>
            </ImageBackground>
            <Text style={styles.CardTitle}>{name}</Text>
            {/* <Text style={styles.CardSubtitle}>{'special_ingredient'}</Text> */}
            <View style={styles.CardFooterRow}>
                <Text style={styles.CardPriceCurrency}>
                    <Text style={styles.CardPrice}>₹{discountAmount}</Text> &nbsp;
                    <Text style={styles.CardOriginalPrice}>₹{originalAmount}</Text>
                </Text>
                <TouchableOpacity
                    onPress={() => {
                        buttonPressHandler({
                            id,
                            name,
                            prices: [{ ...discountAmount, quantity: 1 }],
                        });
                    }}>
                    <MaterialIcons
                        name="add"
                        color="#666"
                        style={styles.AddButton}
                    />

                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    CardLinearGradientContainer: {
        // padding: SPACING.space_15,
        // borderRadius: BORDERRADIUS.radius_25,
    },
    CardImageBG: {
        width: CARD_WIDTH,
        height: CARD_WIDTH,
        marginBottom: SPACING.space_10,
        overflow: 'hidden',
    },
    CardRatingContainer: {
        flexDirection: 'row',
        backgroundColor: COLORS.darkBlue,
        alignItems: 'center',
        justifyContent: 'center',
        gap: SPACING.space_10,
        paddingHorizontal: SPACING.space_15,
        position: 'absolute',
        top: 0,
        right: 0,
    },
    CardRatingText: {
        fontFamily: FONTFAMILY.poppins_medium,
        color: COLORS.primaryWhiteHex,
        lineHeight: 22,
        fontSize: FONTSIZE.size_14,
    },
    CardTitle: {
        fontFamily: FONTFAMILY.poppins_medium,
        color: COLORS.primaryBlackRGBA,
        fontSize: FONTSIZE.size_16,
        paddingLeft: SPACING.space_10,
    },
    CardSubtitle: {
        fontFamily: FONTFAMILY.poppins_light,
        color: COLORS.primaryBlackRGBA,
        fontSize: FONTSIZE.size_10,
    },
    CardFooterRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: SPACING.space_15,
        padding: SPACING.space_10,
    },
    CardPriceCurrency: {
        fontFamily: FONTFAMILY.poppins_semibold,
        color: COLORS.primaryOrangeHex,
        fontSize: FONTSIZE.size_14,
    },
    AddButton: {
        color: COLORS.primaryWhiteHex,
        backgroundColor: COLORS.primaryOrangeHex,
        fontSize: FONTSIZE.size_24,
        padding: SPACING.space_2,
    },
    CardPrice: {
        color: COLORS.primaryBlackRGBA,
      },
      CardOriginalPrice: {
        color: COLORS.primaryBlackRGBA,
        textDecorationLine: 'line-through',
        textDecorationColor: 'black',
      },
});

export default ProductCard;