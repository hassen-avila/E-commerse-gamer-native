import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
// import './EmptyCart.css'
// import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

const EmptyCart = () => {
  return (
    <View style={styles.emptyCart}>
        <Text style={{color: "white", marginBottom: 10, fontWeight: "bold"}}>Aún no agregaste productos a tu bolsa de compras</Text>
        <Icon style={{fontSize: 40, color: "#88D317"}} name="remove-shopping-cart"/>
    </View>
  )
}

export default EmptyCart

const styles = StyleSheet.create({
  emptyCart: {
    padding: 20,
    shadowColor: "#88D317",
    shadowOffset: { width: -5/10, height: -5/10 },
    shadowOpacity: 10,
    elevation: 20,
    backgroundColor: "#181818",
    margin: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
})