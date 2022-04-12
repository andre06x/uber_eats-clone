import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import OrderItem from "./OrderItem";

const ViewCart = ({ }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const { items, restaurantName } = useSelector((state) => state.cartReducer.selectedItems);
  const total = items.map((item => Number(item.price.replace('$', '')))).reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString('en', {
    style: "currency",
    currency: "USD"
  })

  console.log(totalUSD);

  const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: "flex-end",
      backgroundColor: "rgba(0,0,0,0.7)",
    },

    modalchekoutModalContainer: {
      backgroundColor: "white",
      padding: 16,
      height: 500,
      borderWidth: 1
    },

    modalCheckoutButton: {
      textAlign: "center",
      fontWeight: "600",
      fontSize: 18,
      marginBottom: 10,
    },

    subtotalContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 15,
    },

    subtotalText: {
      textAlign: 'left',
      fontWeight: "600",
      fontSize: 15,
      marginBottom: 10
    },
    restaurantName: {
      fontSize: 18,
      fontWeight: "700",
      textAlign: "center"
    }
  })

  const checkoutModalContent = () => {
    return (
      <>
        <View style={styles.modalContainer}>
          <View style={styles.modalchekoutModalContainer}>
            <Text style={styles.restaurantName}>{restaurantName}</Text>

            {items.map((item, index) => (
              <OrderItem key={index} item={item}/>
            ))}

            <View style={styles.subtotalContainer}>
              <Text style={styles.subtotalText}>Subtotal</Text>
              <Text>${totalUSD}</Text>
            </View>

            <View style={{flexDirection: "row", justifyContent: "center"}}>
              <TouchableOpacity 
                style={{
                  marginTop: 20, 
                  backgroundColor: "black",
                  alignItems: "center",
                  padding: 13,
                  borderRadius: 30,
                  width: 300,
                  positio: "relative"
                  }}
                  onPress={() => setModalVisible(false)}>
                <Text style={{color: "white", fontSize: 20}}>Chekout</Text>
                <Text style={{position: "absolute", right: 20, top: 18, color: "#fff", fontSize: 16}}>${totalUSD}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    )

  };

  return (
    <>
      <Modal animationType="slide" visible={modalVisible} transparent={true} onRequestClose={() => setModalVisible(false)}>

        {checkoutModalContent()}
      </Modal>
      {total ? (
        <View style={{
          flex: 1,
          alignItems: "center",
          flexDirection: "row",
          position: "absolute",
          bottom: 10,
          zIndex: 999,
        }}>
          <View style={{
            flexDirection: "row",
            justifyContent: "center",
            width: "100%"
          }}>
            <TouchableOpacity style={{
              marginTop: 20,
              backgroundColor: "black",
              alignItems: "center",
              padding: 13,
              borderRadius: 30,
              width: 300,
              position: "relative"
            }}
              onPress={() => setModalVisible(true)}
            >

              <Text style={{ color: "white", fontSize: 20 }}>ViewCart ${totalUSD}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : <View />}

    </>


  )
}

export default ViewCart;