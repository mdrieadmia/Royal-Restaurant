import { Helmet } from 'react-helmet-async';
import Cover from '../../shared/Cover/Cover';
import menuImg from "../../assets/menu/banner3.jpg"
import PopularMenu from '../Home/PopularMenu/PopularMenu';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Royal Restaurant | Menu</title>
            </Helmet>
            <Cover image={menuImg} title={"our menu"} />
            <PopularMenu/>
            <Cover image={menuImg} title={"our menu"} />
            <PopularMenu/>
            <Cover image={menuImg} title={"our menu"} />
            <PopularMenu/>
        </div>
    );
};

export default Menu;
