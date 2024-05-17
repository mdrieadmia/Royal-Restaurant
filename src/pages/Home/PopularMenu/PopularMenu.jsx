import { useEffect, useState } from 'react';
import SectionHeading from '../../../components/SectionHeading/SectionHeading';
import MenuItem from '../../../components/MenuItem/MenuItem';

const PopularMenu = () => {

    const [menuItems, setMenuItems] = useState([])

    useEffect(()=>{
        fetch('MenuData.json')
        .then((res)=> res.json())
        .then(data =>{
            const popularItems = data.filter(item =>item.category === 'popular')
            setMenuItems(popularItems)
        })
    }, [])

    return (
        <section>
            <SectionHeading title={'From Our Menu'} subtitle={"Popular Items"}/>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {
                    menuItems.map(item => <MenuItem key={item._id} item={item}/>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;