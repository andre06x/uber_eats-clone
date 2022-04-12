import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from "react-native";
import { useSelector } from "react-redux";

const ViewCart = ({ }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const items = useSelector((state) => state.cartReducer.selectedItems.items);
  const total = items.map((item => Number(item.price.replace('$', '')))).reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString('en', {
    style: "currency",
    currency: "USD"
  })

  console.log(totalUSD);

  const checkoutModalContent = () => {

    return (

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginTop: 30 }}>
        <View style={{ backgroundColor: 'black', padding: 10, borderRadius: 30, width: 150, alignItems: 'center' }}>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text style={{ color: "white" }}>Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
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