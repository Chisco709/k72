const nodemailer = require('nodemailer');
const config = require('../config');

const transporter = nodemailer.createTransport({
  host: config.email.host,
  port: config.email.port,
  secure: true,
  auth: {
    user: config.email.user,
    pass: config.email.pass
  }
});

const sendOrderConfirmation = async (customer, order) => {
  const mailOptions = {
    from: config.email.user,
    to: customer.email,
    subject: '¡Gracias por tu compra!',
    html: `
      <h1>Confirmación de Orden</h1>
      <p>Hola ${customer.name},</p>
      <p>Tu orden #${order.id} ha sido confirmada.</p>
      <p>Total: $${(order.total / 100).toFixed(2)}</p>
      <h2>Detalles del pedido:</h2>
      <ul>
        ${order.items.map(item => `
          <li>${item.title} - $${(item.price / 100).toFixed(2)}</li>
        `).join('')}
      </ul>
    `
  };

  return transporter.sendMail(mailOptions);
};

module.exports = {
  sendOrderConfirmation
};