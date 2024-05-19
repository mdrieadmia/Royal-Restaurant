import { Helmet } from 'react-helmet-async';
import Cover from '../../shared/Cover/Cover';
import menuImg from "../../assets/menu/banner3.jpg"
import dessertImg from "../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../assets/menu/pizza-bg.jpg"
import saladImg from "../../assets/menu/salad-bg.jpg"
import soupImg from "../../assets/menu/soup-bg.jpg"
import useMenu from '../../hooks/useMenu';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import MenuCategory from './MenuCategory/MenuCategory';

const Menu = () => {

    const [menu] = useMenu()
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')

    return (
        <div>
            <Helmet>
                <title>Royal Restaurant | Menu</title>
            </Helmet>
            <Cover image={menuImg} title={"our menu"} />
            <SectionHeading subtitle={"Don't miss"} title={"todays offer"}/>
            <MenuCategory items={offered}/>
            <MenuCategory items={dessert} title={"dessert"} coverImg={dessertImg}/>
            <MenuCategory items={pizza} title={"pizza"} coverImg={pizzaImg}/>
            <MenuCategory items={salad} title={"salad"} coverImg={saladImg}/>
            <MenuCategory items={soup} title={"soup"} coverImg={soupImg}/>
        </div>
    );
};

export default Menu;
