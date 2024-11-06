import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import FaqAccordion from "../components/FaqAccordion/FaqAccordion";


const Faq = () => {
    const faqData = useLoaderData();
    const shoppingInfoData = faqData[0].Shopping_Information;
    const paymentInfoData = faqData[1].Payment_Information;
    


    return (
        <div className="bg-base-200">
            <div>
                <Banner
                    title={"FAQs"}
                    description={"Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"}
                ></Banner>
            </div>

            <div className="container mx-auto px-4 pt-10 pb-20 grid grid-cols-1 md:grid-cols-2 gap-8">

                <div>
                    <div className="divider text-2xl font-semibold py-10">Shopping Information</div>
                    {
                        shoppingInfoData.map((item, index) => (
                            <FaqAccordion
                                key={index}
                                question={item.question}
                                answer={item.answer}
                            ></FaqAccordion>
                        ))
                    }
                </div>
                <div>
                    <div className="divider text-2xl font-semibold py-10">Payment Information</div>
                    {
                        paymentInfoData.map((item, index) => (
                            <FaqAccordion
                                key={index}
                                question={item.question}
                                answer={item.answer}
                            ></FaqAccordion>
                        ))
                    }
                </div>


            </div>

        </div>
    );
};

export default Faq;