import { NextPage } from 'next';

import { Product } from '../components';

import { useOnLoad } from './pages.helpers';

const Home: NextPage = () => {
	const { ui } = useOnLoad();

	return <Product ui={ui} productId='7593553985788' />;
};

export default Home;
