# Mercado Pago Checkout Integration (Node.js)

A clean and efficient implementation of the Mercado Pago SDK (v2) for Node.js. This module allows you to generate payment links (Checkouts) and manage payment preferences dynamically.

## 🚀 Features

- **Asynchronous Execution**: Uses `async/await` for non-blocking database and API operations.
- **SDK v2 Ready**: Implements the latest Mercado Pago official library.
- **Security**: Environment variable support for sensitive API credentials.
- **Customizable**: Pre-configured to exclude specific payment methods (like 'ticket/boleto') and limit installments.

## 🛠️ Technologies

- **Runtime:** Node.js (ES Modules)
- **SDK:** `mercadopago`
- **Environment Management:** `dotenv`

## 📦 Installation

**Clone the repository:**
   ```bash
   git clone https://github.com/LeonardoCides/mp-payment-gateway-node
   npm install mercadopago dotenv
   ```
