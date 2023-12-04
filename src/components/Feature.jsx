// eslint-disable-next-line
import React from 'react'
import './ShopingCart.css'; // Import your CSS file for styling

    const ShoppingCart = () => {
      return (
        <div className="shopping-cart">
          <table>
            <thead>
              <tr>
                <th>Product & Image</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Remove item</th>
              </tr>
            </thead>
            <tbody>
             
              <tr>
                <td>
                  <img src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hvZXN8ZW58MHx8MHx8fDA%3D" alt="" srcset="" />
                  <h1>NIKE JORDON BLUE</h1>
                  <p>Add Installation Service</p>
                  <p>Add Installation</p>
                  </td>
                <td>$299</td>
                <td>
                  <input className="inputclass" type="number" defaultValue="1" />
                  <button>Update</button>
                </td>
                <td>$299</td>
                <td><button>Remove</button></td>
              </tr>
              
            </tbody>
          </table>
    
          <div className="total-information">
            <h2>Total and Tax Information</h2>
            <table>
              <tbody>
                <tr>
                  <td>Subtotal:</td>
                  <td>$299</td>
                </tr>
                <tr>
                  <td>Shipping:</td>
                  <td>$0.00(Free)</td>
                </tr>
                <tr>
                  <td>Tax/GST(18%):</td>
                  <td>$798</td>
                </tr>
                <tr>
                  <td>Order Total Incl. Tax:</td>
                  <td>$848</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    };
    
    export default ShoppingCart;
 
