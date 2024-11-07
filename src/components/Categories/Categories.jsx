import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';

const Categories = ({ categories }) => {
    const location = useLocation();

    return (
        <div>

            <div className="rounded-xl p-6 grid max-sm:grid-cols-2 auto-rows-max gap-4 max-h-fit bg-white">
                {
                    categories.map((category, index) => {
                        const isActive = location.pathname === '/' && index === 0 
                            || location.pathname === `/category/${category.category.replace(/\s+/g, "-")}`;

                        return (
                            <NavLink
                                key={category.category}
                                to={`/category/${category.category.replace(/\s+/g, "-")}`}
                                className={`btn font-semibold lg:text-xl rounded-full border-gray-200 ${isActive ? 'bg-[#9538E2] hover:bg-[#9538E2] text-white hover:text-white' : 'hover:bg-base-200 text-gray-500'}`}>
                                {category.category}
                            </NavLink>
                        );
                    })
                }
            </div>
        </div>
    );
};

Categories.propTypes = {
    categories: PropTypes.array.isRequired,
};

export default Categories;