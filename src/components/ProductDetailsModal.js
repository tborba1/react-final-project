import { useState, useEffect } from "react";
import ReactModal from "react-modal";
import { 
    ProductImage,
    ProductBox,
    ProductContent, 
} from "../components/StyledComponents";

export default function ProductDetailsModal(props) {
    const [details, setDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    // console.log(details);
    
        useEffect(() => {
            setIsLoading(true);
            const getDetails = async() => {
            const url = `https://fakestoreapi.com/products/${details.id}`;
            const response = await fetch(url);
            const data = await response.json();
            // console.log(data);
            setDetails(data);
            setIsLoading(false);
            }
            getDetails();
        },[details.id]);

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
            <ProductBox>
                <div>
                    <ProductImage src={details.image} />
                    <ProductContent>
                        <p>${details.price}</p>
                        <h5>{details.title}</h5>
                        <p>Category: {details.category}</p>
                        <p>{details.description}</p>
                    </ProductContent>
                </div>
            </ProductBox>
        </ReactModal>
    );
}