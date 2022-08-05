import { Outlet, useNavigate } from "react-router-dom";
import { CheckoutContainer, LoginButton } from "../components/StyledComponents";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faCreditCard,
  faEnvelope,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function CheckoutForm() {
  const { cart, setCart } = useContext(CartContext);
  const [confirm, setConfirm] = useState(false);
  const [showOrderError, setShowOrderError] = useState();
  const [copyAddress, setCopyAddress] = useState();
  const [billingAddress, setBillingAddress] = useState();
  const [shippingAddress, setShippingAddress] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (copyAddress) {
      setBillingAddress(shippingAddress);
    }
  }, [copyAddress, setBillingAddress, shippingAddress]);

  function toggleShippingToBilling() {
    setCopyAddress(!copyAddress);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (cart.length > 0 && confirm === true) {
      console.log(`order submitted for ${cart.length} item(s)`);
      navigate("/products");
      alert("Thank you! Your order has been submitted.");
      setCart([]);
    } else {
      setShowOrderError(true);
    }
  }

  return (
    <>
      {cart.length > 0 ? (
        <>
          <p>Cart Total = $</p>

          <CheckoutContainer>
            <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
              <FontAwesomeIcon icon={faEnvelope} />
              <label htmlFor="Email">Email</label>
              <input name="Email" label="Email" />
              <br></br>
              <FontAwesomeIcon icon={faUser} />
              <label htmlFor="Name">Name</label>
              <input name="Name" label="Name" />
              <br></br>
              <FontAwesomeIcon icon={faAddressCard} />
              <label htmlFor="ShippingAddress">Shipping Address</label>
              <input
                name="ShippingAddress"
                label="Shipping Address"
                value={shippingAddress}
                onChange={(e) => setShippingAddress(e.target.value)}
              />
              <label>
                <br></br>
                <input
                  type="checkbox"
                  name="sameadr"
                  onChange={toggleShippingToBilling}
                />{" "}
                Check here if shipping and billing addresses are the same.
              </label>
              <br></br>
              <FontAwesomeIcon icon={faAddressCard} />
              <label htmlFor="BillingAddress">Billing Address</label>
              <input
                name="BillingAddress"
                label="Billing Address"
                value={billingAddress}
                disabled={copyAddress}
                onChange={(e) => setBillingAddress(e.target.value)}
              />
              <br></br>
              <FontAwesomeIcon icon={faCreditCard} />
              <label htmlFor="ccnum">Credit Card #</label>
              <input
                id="ccnum"
                name="cardnumber"
                placeholder="1111-2222-3333-4444"
              />
              <br></br>
              <label>
                <input
                  type="checkbox"
                  name="confirm"
                  value={confirm}
                  onChange={(event) => setConfirm(true)}
                />{" "}
                Confirm Order
              </label>
              <br></br>
              <LoginButton type="submit">Submit Order</LoginButton>
              {showOrderError && (
                <div
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "#E1523D",
                  }}
                >
                  Please complete the order form.
                </div>
              )}
            </form>
          </CheckoutContainer>
        </>
      ) : (
        <></>
      )}
      <Outlet />
    </>
  );
}
