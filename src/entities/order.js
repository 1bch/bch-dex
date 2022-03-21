/*
  Order Entity
  An Order Entity is nearly the same as an Offer. But while an Offer is generated
  by a webhook from P2WDB, the Order Entity is created internally. It is used
  to track an Order generated by this application.

  The Order tracks the hdIndex address used to hold tokens or BCH for sale.
*/
class Order {
  validate (data) {
    const {
      messageType,
      messageClass,
      tokenId,
      buyOrSell,
      rateInSats,
      minSatsToExchange,
      numTokens
    } = data

    // Input Validation
    if (!messageType || typeof messageType !== 'number') {
      throw new Error("Property 'messageType' must be an integer number.")
    }
    if (!messageClass || typeof messageClass !== 'number') {
      throw new Error("Property 'messageClass' must be an integer number.")
    }
    if (!tokenId || typeof tokenId !== 'string') {
      throw new Error("Property 'tokenId' must be a string.")
    }
    if (!buyOrSell || typeof buyOrSell !== 'string') {
      throw new Error("Property 'buyOrSell' must be a string.")
    }
    if (!rateInSats || typeof rateInSats !== 'number') {
      throw new Error("Property 'rateInSats' must be an integer number.")
    }
    if (!minSatsToExchange || typeof minSatsToExchange !== 'number') {
      throw new Error("Property 'minSatsToExchange' must be an integer number.")
    }
    if (!numTokens || typeof numTokens !== 'number') {
      throw new Error("Property 'numTokens' must be a number.")
    }

    const offerData = {
      messageType,
      messageClass,
      tokenId,
      buyOrSell,
      rateInSats,
      minSatsToExchange,
      numTokens
    }

    return offerData
  }
}

module.exports = Order
