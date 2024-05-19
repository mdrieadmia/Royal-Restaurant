import SectionHeading from '../../../components/SectionHeading/SectionHeading';
import MenuItem from '../../../components/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === "popular")
    return (
        <section>
            <SectionHeading title={'From Our Menu'} subtitle={"Popular Items"}/>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {
                    popular.map(item => <MenuItem key={item._id} item={item}/>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;