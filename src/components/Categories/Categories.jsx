import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Categories = ({ categories }) => {
    // const { id, category, is_active } = categories;
    // console.log(categories);

    return (
        <div>

            <div className="rounded-xl p-6 grid max-sm:grid-cols-2 auto-rows-max gap-4 max-h-fit bg-white">
                {
                    categories.map(category =>
                        <NavLink
                            key={category.category}
                            to={`/category/${category.category.replace(/\s+/g, "-")}`}
                            className={({ isActive }) => `btn font-semibold lg:text-xl rounded-full border-gray-200 ${isActive ? 'bg-[#9538E2] hover:bg-[#9538E2] text-white hover:text-white' : 'hover:bg-base-200 text-gray-500'}`}>
                            {category.category}
                        </NavLink>
                    )
                }
            </div>


        </div >
    );
};

Categories.propTypes = {
    categories: PropTypes.array,
};

export default Categories;