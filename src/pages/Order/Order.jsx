import { useState } from 'react';
import orderCover from '../../assets/shop/banner2.jpg'
import Cover from '../../shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hooks/useMenu';
import OrderTab from './OrderTab/OrderTab';
import { useParams } from 'react-router-dom';

const Order = () => {
    const allCategory = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const { category } = useParams();
    const initaialIndex = allCategory.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initaialIndex)
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const drinks = menu.filter(item => item.category === 'drinks')

    return (
        <div>
            <Cover image={orderCover} title={"Order"} />
            <div>
             
                        <div className='my-10 w-full'>
                            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                                <TabList>
                                    <Tab>Salad</Tab>
                                    <Tab>Pizza</Tab>
                                    <Tab>Soup</Tab>
                                    <Tab>Dessert</Tab>
                                    <Tab>Drinks</Tab>
                                </TabList>
                                <TabPanel>
                                    <OrderTab items={salad} />
                                </TabPanel>
                                <TabPanel>
                                    <OrderTab items={pizza} />
                                </TabPanel>
                                <TabPanel>
                                    <OrderTab items={soup} />
                                </TabPanel>
                                <TabPanel>
                                    <OrderTab items={dessert} />
                                </TabPanel>
                                <TabPanel>
                                    <OrderTab items={drinks} />
                                </TabPanel>
                            </Tabs>
                        </div>
         
            </div>
        </div>
    );
};

export default Order;