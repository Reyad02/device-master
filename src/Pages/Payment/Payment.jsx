import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Payment = () => {
    const { id } = useParams();

    useEffect(() => {
        const updatePaymentStatus = async () => {
            const response = await axios.put(`/payment/${id}`, {
                paymentStatus: true
            })

            if (response.status === 200) {
                toast.success('Payment status updated successfully!', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            }
        }
        updatePaymentStatus();
    }, [id])

    return (
        <div className="max-w-7xl mx-auto">
            <p>{id}</p>
            <p>You booked a Scheduled</p>

        </div>
    );
};

export default Payment;