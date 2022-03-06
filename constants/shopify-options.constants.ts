import { PAGE_SETTINGS } from './page-settings.constants';

const BORDER_RADIUS = '28px';
const GOOGLE_FONTS = ['Droid Sans'];

const BUTTON_STYLES = {
	'font-family': 'Droid Sans, sans-serif',
	'background-color': PAGE_SETTINGS.buttons.background_color,
	':focus': {
		'background-color': PAGE_SETTINGS.buttons.hover.background_color,
	},
	':hover': {
		'background-color': PAGE_SETTINGS.buttons.hover.background_color,
	},
};

const PRODUCT = {
	googleFonts: GOOGLE_FONTS,
	text: { button: 'Add to cart' },
	styles: {
		product: {
			'@media (min-width: 601px)': {
				'margin-left': '20px',
				'margin-bottom': '50px',
				'max-width': 'calc(25% - 20px)',
			},
		},
		button: {
			...BUTTON_STYLES,
			'padding-left': '34px',
			'padding-right': '34px',
			'border-radius': BORDER_RADIUS,
		},
	},
};

const MODAL_PRODUCT = {
	googleFonts: GOOGLE_FONTS,
	text: { button: 'Add to cart' },
	contents: {
		img: false,
		button: false,
		imgWithCarousel: true,
		buttonWithQuantity: true,
	},
	styles: {
		product: {
			'@media (min-width: 601px)': {
				'max-width': '100%',
				'margin-left': '0px',
				'margin-bottom': '0px',
			},
		},
		button: {
			...BUTTON_STYLES,
			'padding-left': '34px',
			'border-radius': '28px',
			'padding-right': '34px',
		},
	},
};

const CART = {
	googleFonts: GOOGLE_FONTS,
	text: { total: 'Subtotal', button: 'Checkout' },
	styles: { button: { ...BUTTON_STYLES, 'border-radius': BORDER_RADIUS } },
};

const TOGGLE_DRAWER = {
	googleFonts: GOOGLE_FONTS,
	styles: { toggle: BUTTON_STYLES },
};

export const SHOPIFY_OPTIONS = {
	cart: CART,
	product: PRODUCT,
	toggle: TOGGLE_DRAWER,
	modalProduct: MODAL_PRODUCT,
};
