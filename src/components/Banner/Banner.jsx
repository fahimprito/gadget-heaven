import PropTypes from 'prop-types';

const Banner = ({ title, description }) => {
    return (
        <div>
            <div className="bg-[#9538E2]">
                <div className="flex flex-col gap-4 text-white py-10 md:py-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-center ">{title}</h2>
                    <p className="text-base text-center px-5 w-10/12 lg:w-1/2 mx-auto">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

Banner.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
};

export default Banner;