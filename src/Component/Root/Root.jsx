
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Root = () => {
    return (
        <div className='p-2 lg:p-10'>
            <div>
                <Header></Header>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;