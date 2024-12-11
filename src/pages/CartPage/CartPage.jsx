// components import
import MainLayout from "../../components/MainLayout/MainLayout";
import Container from "../../components/Container/Container";
// components import

import "./CartPage.css";

const CartPage = ()=>{
    return(  
        <MainLayout>
          <Container>
                    <div className="cart">
                        <table >
                           <thead >
                            <tr>
                                <th colSpan={2}>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>

                           </thead>
                           <tbody >
                            <tr>
                                <td data-label="product" >
                                    <a href="#">
                                        <img src="src\assets\Taza_Peppermint-slab_medium.avif" alt="pepermint" />
                                    </a>
                                </td>
                                <td >
                                    <a href="#">	
                                    Peppermint Bark 1 lb.</a>
                                    <a href="#">Remove</a>
                                </td>
                                <td data-label="price" >
                                    <span>$234.45</span>
                                </td>
                                <td data-label="quantity" >
                                    <input type="number" name="product_quntity" id="product_quntity" value={1} />
                                </td>
                                <td data-label="total" >
                                    <span>$234.45</span>
                                </td>
                            </tr>
                            

                           </tbody>

                        </table>
                    </div>
          </Container>
        </MainLayout>)
}


export default CartPage;
