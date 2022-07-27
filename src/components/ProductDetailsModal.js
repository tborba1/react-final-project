import { useState, useEffect } from "react";
import ReactModal from "react-modal";
import { ProductBox, ProductDetailsBox, ProductImage } from "../components/StyledComponents";

export default function ProductDetailsModal(props) {
    const [details, setDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    // console.log(details);
    
        useEffect(() => {
            setIsLoading(true);
            const getDetails = async() => {
            const url = `https://fakestoreapi.com/products/${props.products}`;
            const response = await fetch(url);
            const data = await response.json();
            // console.log(data);
            setDetails(data);
            setIsLoading(false);
            }
            getDetails();
        },[]);

    const handleClose = () => {
        props.setIsModalOpen(false);
        setDetails(null);
    }

    useEffect(() => {
        ReactModal.setAppElement("body");
    }, []);

    return (
        <ReactModal isOpen={props.isOpen} ariaHideApp={false} onRequestClose={() => props.setIsModalOpen(false)}>
            <button onClick={handleClose}>CLOSE</button>
            <br></br>
            <ProductDetailsBox>
                <ProductImage src={details.image} />
                <p>${details.price}</p>
                <h3>{details.title}</h3>
                <p style={{ fontWeight:"bold"}}>Category:</p>
                <p>{details.category}</p>
                <p style={{ fontWeight:"bold"}}>Description:</p>
                <p>{details.description}</p>
            </ProductDetailsBox>
        </ReactModal>
    );
}