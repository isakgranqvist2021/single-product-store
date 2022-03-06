export const SHOPIFY_OPTIONS = {
	product: {
		styles: {
			product: {
				'@media (min-width: 601px)': {
					'max-width': 'calc(25% - 20px)',
					'margin-left': '20px',
					'margin-bottom': '50px',
				},
			},
			button: {
				'font-family': 'Droid Sans, sans-serif',
				':hover': {
					'background-color': '#383838',
				},
				'background-color': '#3e3e3e',
				':focus': {
					'background-color': '#383838',
				},
				'border-radius': '28px',
				'padding-left': '34px',
				'padding-right': '34px',
			},
		},
		text: {
			button: 'Add to cart',
		},
		googleFonts: ['Droid Sans'],
	},
	productSet: {
		styles: {
			products: {
				'@media (min-width: 601px)': {
					'margin-left': '-20px',
				},
			},
		},
	},
	modalProduct: {
		contents: {
			img: false,
			imgWithCarousel: true,
			button: false,
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
				'font-family': 'Droid Sans, sans-serif',
				':hover': {
					'background-color': '#383838',
				},
				'background-color': '#3e3e3e',
				':focus': {
					'background-color': '#383838',
				},
				'border-radius': '28px',
				'padding-left': '34px',
				'padding-right': '34px',
			},
		},
		googleFonts: ['Droid Sans'],
		text: {
			button: 'Add to cart',
		},
	},
	option: {},
	cart: {
		styles: {
			button: {
				'font-family': 'Droid Sans, sans-serif',
				':hover': {
					'background-color': '#383838',
				},
				'background-color': '#3e3e3e',
				':focus': {
					'background-color': '#383838',
				},
				'border-radius': '28px',
			},
		},
		text: {
			total: 'Subtotal',
			button: 'Checkout',
		},
		googleFonts: ['Droid Sans'],
	},
	toggle: {
		styles: {
			toggle: {
				'font-family': 'Droid Sans, sans-serif',
				'background-color': '#3e3e3e',
				':hover': {
					'background-color': '#383838',
				},
				':focus': {
					'background-color': '#383838',
				},
			},
		},
		googleFonts: ['Droid Sans'],
	},
};
