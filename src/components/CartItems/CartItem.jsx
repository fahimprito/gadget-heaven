import { MdOutlineCancel } from "react-icons/md";
import s24ultra from "../../assets/s24-ultra.jpeg"

const CartItem = () => {
    return (
        <div>
            <div className="flex justify-between items-center bg-white rounded-2xl p-4 mb-4">
                <div className="flex items-center gap-4">
                    <img className="w-36 rounded-2xl object-cover" src={s24ultra} alt="" />
                    <div className="flex flex-col gap-4">
                        <h2 className="text-2xl font-bold">name</h2>
                        <p className="text-lg text-gray-600">role</p>
                        <p className="text-lg text-gray-600 font-bold">$999</p>
                    </div>

                </div>
                <button
                    className="text-4xl text-red-500 hover:bg-gray-200 rounded-full mr-10">
                    <MdOutlineCancel />
                </button>

            </div>
        </div>
    );
};

export default CartItem;