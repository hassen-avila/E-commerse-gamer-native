import React,{useState,useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import productActions from '../../redux/actions/productActions';
import { Link } from "react-router-native";
import logo from '../../../assets/Tecnocel.png';
import EmptyCart from "./EmptyCart";
import { Button, Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';


const Cart = () => {

  
  const [reload,setReload]=useState(false);
  const dispatch = useDispatch();

  let carrito = useSelector(store => store.productReducer.carrito) 

  let subtotal = carrito.map((item) => item.price * item.__v) 

  let total = subtotal.reduce((sum, a) => sum + a, 0)
  
  


const addToCart = async (id) => {

  await dispatch(productActions.agregarCarrito(id))


};

const removeToCart = async (id, all = false) => {

  if (all) {

    await dispatch(productActions.removerTodoCarrito(id))
   

  } else {
    await dispatch(productActions.removerCarrito(id))
    
  }

};

const clearCart = async () => {
  
  await dispatch(productActions.limpiarCarrito())
 

};

console.log(carrito.length)


  return (
    <ScrollView>
    <ImageBackground source={{uri: "https://besthqwallpapers.com/Uploads/20-8-2019/102143/thumb2-black-stylish-background-green-neon-lines-green-light-effects-abstract-black-background.jpg"}} style={carrito.length !== 0 ? { marginBottom: 150, height: "100%", width: "100%"} : {marginBottom: 400, height: "100%", width: "100%"}} >
    <View style={styles.logoLinkdiv}>
      <View style={styles.logoLink}>
        <Link to="/"><Text style={{color: '#88D317', fontSize: 20}}>Ir al Inicio</Text></Link>
        <Image source={logo} alt="logo" style={{height: 115, width: 135}}></Image>
      </View>
    </View>
          <Text style={styles.textEnviosGratis}> Envio gratis y 12 cuotas sin interes desde $1.000</Text>
          <View style={styles.boxes}>
            <View style={styles.boxProductos}>
              {carrito.length !== 0 ? carrito.map(item=>
                <View key={item.name} style={styles.productos}>
                    <View style={styles.imgText}>
                    <Image source={{uri: item.images}} alt="image" style={{height: 100, width: 100}}></Image>
                    <Text style={{color: "white", fontWeight: 'bold', fontSize: 15}}>{item.name}</Text>
                    </View>
                    <View style={styles.precioCantidad}>
                    <Text style={{fontWeight: "bold", color: 'white', fontSize: 16}}>$ {item.price}</Text>
                    <View style={styles.cantidad}>
                  <Icon onPress={()=>removeToCart(item._id)} name="remove" style={{color: "#88D317", cursor: "pointer", fontSize: 23, marginRight: 20}}/>
                    <Text style={{fontWeight: "bold", color: 'white', marginRight: 20}}>{item.__v}</Text>
                  <Icon onPress={()=>addToCart(item._id)} name="add" style={{color: "#88D317", cursor: "pointer", fontSize: 23}}/>
                    </View>
                  <Icon onPress={()=>removeToCart(item._id,true)} name="delete" style={{color: "#88D317", cursor: "pointer", fontSize: 23}} />
                  </View>
                  </View>
                ):<EmptyCart/>}

               <View style={styles.vaciar}>
               <Icon name="delete" onPress={clearCart}  style={carrito.length ? { display:'flex', backgroundColor: 'transparent', marginRight: 10, border: 'none', justifyContent: 'center', color: "#88D317", cursor: "pointer", fontSize: 25} : {display : 'none'}} />
               <Text style={carrito.length ? { display:'flex', backgroundColor: 'transparent', justifyContent: 'center', color: "white", fontWeight: 'bold'} : {display : 'none'}}>Vaciar Carrito </Text>
               </View>
            </View>
            <View  style={carrito.length !== 0 ? { display:'flex', padding: 10, marginBottom: 30, marginHorizontal: 30, marginTop: 30, backgroundColor: "#181818", shadowColor: "#88D317", justifyContent: 'center', alignItems: 'center', shadowOffset: { width: -5/10, height: -5/10 }, shadowOpacity: 10, elevation: 20, } : {display : 'none'}}>
              <Text style={{color: "white", fontWeight: 'bold'}}>Resumen de compra</Text>
              <View >
                <Text style={{color: "white", fontWeight: 'bold', textAlign: 'center', marginTop: 10}}>Total:${total}</Text>
                <View color="white" style={styles.iniciarCompra}>
                <Text style={{color: 'white'}}>Iniciar Compra</Text>
                </View>
            {/*     <Paypal/> */}
              </View>
            </View>
          </View> 
          </ImageBackground>
          </ScrollView>
      )
      
};

export default Cart;

const styles = StyleSheet.create({
  contenedor: {
    height: "100%",
    width: "100%",
    marginBottom: 400,
  },
  logoLinkdiv: {
    display: 'flex',
    width: "100%",
    alignItems: 'center'
  },
  logoLink: {
    paddingTop: 50,
    display: 'flex',
    width: "100%",
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginBottom: 40,
    gap: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: 10,
    flexDirection: 'row',
    paddingHorizontal: 20
  },
  textEnviosGratis: {
    color: "white",
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18
  },
  vaciarCarrito: {
    color: "white",
    border: "none",
    backgroundColor: "transparent"
  },
  boxes: {
    overflow: 'visible',
    marginTop: 30,
    display: 'flex',
    gap: 30,
    justifyContent: 'center'
  },
  boxProductos: {
    shadowColor: "#88D317",
    shadowRadius: "30"
  },
  productos: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 40,
    padding: 10,
    shadowColor: "#88D317",
    shadowOffset: { width: -5/10, height: -5/10 },
    shadowOpacity: 10,
    elevation: 20,
    backgroundColor: "#181818"
  },
  cantidad: {
    display: 'flex', 
    flexDirection: 'row',
  },
  imgText: {
    display: 'flex',
    flexDirection: 'row',
    width: "100%",
    justifyContent: 'space-between'
  },
  precioCantidad: {
    display: 'flex',
    marginVertical: 20,
    justifyContent:"space-between",
    flexDirection: 'row',
    width: "100%"
  },
  vaciar: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iniciarCompra: {
    backgroundColor: "#88D317",
    borderColor: "#88D317",
    borderRadius: 10,
    padding: 10,
    marginTop: 10
  }

})