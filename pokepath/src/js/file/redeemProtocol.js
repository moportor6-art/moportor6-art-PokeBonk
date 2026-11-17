export const redeemProtocol = {
	version: 1,
	algorithm: {
		id: 'hmac-sha256-base32-v1',
		base32Alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567',
		playerCode: {
			context: 'PLAYER_CODE_V1',
			length: 32,
		},
		code: {
			hashLength: 32,
			signatureLength: 8,
			checksumLength: 2,
		},
	},
	rewards: [
		{
			id: 'missingno',
			codePrefix: 'MN',
			salt: 'REDEEM_SALT_MISSINGNO',
			bindToPlayerCode: true,
			reward: {
				kind: 'pokemon',
				key: 'missingNo',
			},
		},
		{
			id: 'gold25k',
			codePrefix: 'GD',
			salt: 'REDEEM_SALT_GOLD25K',
			bindToPlayerCode: false,
			staticCode: 'WELCOME_GIFT_25',
			reward: {
				kind: 'currency',
				currency: 'gold',
				amount: 25000,
			},
		},
		{
			id: 'sandyShocks',
			codePrefix: 'SS',
			salt: 'REDEEM_SALT_SANDYSHOCKS',
			bindToPlayerCode: true,
			reward: {
				kind: 'pokemon',
				key: 'sandyShocks',
			},
		},
		{
			id: 'ironThorns',
			codePrefix: 'IT',
			salt: 'REDEEM_SALT_IRONTHORNS',
			bindToPlayerCode: true,
			reward: {
				kind: 'pokemon',
				key: 'ironThorns',
			},
		},
		{
			id: 'ironBundle',
			codePrefix: 'IB',
			salt: 'REDEEM_SALT_IRONBUNDLE',
			bindToPlayerCode: true,
			reward: {
				kind: 'pokemon',
				key: 'ironBundle',
			},
		},
		{
			id: 'flutterMane',
			codePrefix: 'FM',
			salt: 'REDEEM_SALT_FLUTTERMANE',
			bindToPlayerCode: true,
			reward: {
				kind: 'pokemon',
				key: 'flutterMane',
			},
		},
		{
			id: 'halloweenMap2026',
			codePrefix: 'HW',
			salt: 'REDEEM_SALT_HALL26',
			bindToPlayerCode: false,
			staticCode: 'HALLOWEEN_2026',
			reward: {
				kind: 'map',
				secret: 'halloween2026',
				id: 46,
			},
		},
		{
			id: 'pumpkaboo',
			codePrefix: 'PK',
			salt: 'REDEEM_SALT_PUMPKABOO',
			bindToPlayerCode: false,
			staticCode: 'BOOPKABOO',
			reward: {
				kind: 'pokemon',
				key: 'pumpkaboo',
			},
		},
	],
};
