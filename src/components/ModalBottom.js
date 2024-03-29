import React, {useEffect, useRef} from "react";
import {
	Animated,
	Dimensions,
	Modal,
	PanResponder,
	StyleSheet,
	View,
} from 'react-native';
import {BlurView} from "expo-blur";


const styles = StyleSheet.create({
	overlay: {
		backgroundColor: 'rgba(45,45,45,0.2)',
		flex: 1,
		justifyContent: 'flex-end',
	},
	container: {
		backgroundColor: 'black',
		paddingTop: 12,
		paddingHorizontal: 12,
		borderTopRightRadius: 12,
		borderTopLeftRadius: 12,
		minHeight: 200
	},
	sliderIndicatorRow: {
		flexDirection: 'row',
		marginBottom: 4,
		alignItems: 'center',
		justifyContent: 'center',
	},
	sliderIndicator: {
		backgroundColor: '#CECECE',
		height: 4,
		width: 45,
	},
	modalBackground: {
		flex: 1,
		alignItems: 'center',
		flexDirection: 'column',
		justifyContent: 'space-around',
	},
});
const ModalBottom = (props) => {
	const screenHeight = Dimensions.get('screen').height;
	const panY = useRef(new Animated.Value(screenHeight)).current;

	const resetPositionAnim = Animated.timing(panY, {
		toValue: 0,
		duration: 300,
		useNativeDriver: true,
	});

	const closeAnim = Animated.timing(panY, {
		toValue: screenHeight,
		duration: 500,
		useNativeDriver: true,
	});

	const translateY = panY.interpolate({
		inputRange: [-1, 0, 1],
		outputRange: [0, 0, 1],
	});

	const handleDismiss = () => closeAnim.start(props.onDismiss);

	useEffect(() => {
		resetPositionAnim.start();
	}, [resetPositionAnim]);

	const panResponders = useRef(
		PanResponder.create({
			onStartShouldSetPanResponder: () => true,
			onMoveShouldSetPanResponder: () => false,
			onPanResponderMove: Animated.event([null, {dy: panY}], {
				useNativeDriver: false,
			}),
			onPanResponderRelease: (_, gs) => {
				if (gs.dy > 0 && gs.vy > 2) {
					return handleDismiss();
				}
				return resetPositionAnim.start();
			},
		}),
	).current;
	return (
		<Modal
			animated
			backdropColor="black"
			animationType="fade"
			visible={props.visible}
			transparent
			onRequestClose={handleDismiss}>
			<BlurView tint="dark" intensity={80} style={styles.overlay}>
				<Animated.View
					style={[styles.container, { transform: [{translateY: translateY}], height: props.height, minHeight: props.height}]}
					{...panResponders.panHandlers}>
					<View style={styles.sliderIndicatorRow}>
						<View style={styles.sliderIndicator} />
					</View>
					{props.children}
				</Animated.View>
			</BlurView>
		</Modal>
	);
};
export default ModalBottom;
