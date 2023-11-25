import axios from 'axios'

const handleShippoSuccessfulPayment = async () => {
  try {
    // Call your Shippo endpoint to create a shipment

    const shipmentResponse = await axios.post(
      'http://localhost:3001/api/ship',
      {
        recipient: {
          name: 'Recipient Name',
          address: 'Recipient Address',
        },
        items: [{ weight: 1 }],
      },
    )
    console.log('shipmentResponse', shipmentResponse)

    // Retrieve the shipping label URL from the response
    const shippingLabelURL = shipmentResponse.data.shippingLabelURL
    console.log('shippingLabelURL', shippingLabelURL)

    // Open the shipping label URL in a new window or redirect the user to it
    window.open(shippingLabelURL, '_blank')
  } catch (error) {
    console.error('Error creating shipment:', error.response.data)
    // Handle error as needed
  }
}

export default handleShippoSuccessfulPayment
