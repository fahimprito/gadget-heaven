import PropTypes from 'prop-types';

const FaqAccordion = ({ question, answer }) => {


    return (
        <div>
            <div>
                
                <div tabIndex={0} className="collapse bg-[#9538e249]">
                    <div className="collapse-title text-xl font-medium">{question}</div>
                    <div className="collapse-content">
                        <p>{answer}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

FaqAccordion.propTypes = {
    question: PropTypes.string,
    answer: PropTypes.string,
};

export default FaqAccordion;