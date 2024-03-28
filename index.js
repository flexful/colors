const colors = {
    red: {
      50: '#ffe6e6',
      100: '#ffcccc',
      200: '#ff9999',
      300: '#fe6666',
      400: '#fe3333',
      500: '#fe0000',
      600: '#cb0000',
      700: '#980000',
      800: '#660000',
      900: '#330000',
      950: '#190000'
    },
    crimson: {
      50: '#f8e7e7',
      100: '#f1cfce',
      200: '#e39f9d',
      300: '#d46f6c',
      400: '#c63f3b',
      500: '#b80f0a',
      600: '#930c08',
      700: '#6e0906',
      800: '#4a0604',
      900: '#250302',
      950: '#120101'
    },
    grenadier: {
      50: '#f8eceb',
      100: '#f1d9d7',
      200: '#e4b4af',
      300: '#d68e86',
      400: '#c9695e',
      500: '#bb4336',
      600: '#96362b',
      700: '#702820',
      800: '#4b1b16',
      900: '#250d0b',
      950: '#130705'
    },
    pink: {
      50: '#fef5fa',
      100: '#fdebf5',
      200: '#fbd7eb',
      300: '#fac2e1',
      400: '#f8aed7',
      500: '#f69acd',
      600: '#c57ba4',
      700: '#945c7b',
      800: '#623e52',
      900: '#311f29',
      950: '#190f14'
    },
    rose: {
      50: '#fff4f7',
      100: '#feeaef',
      200: '#fed4de',
      300: '#fdbfce',
      400: '#fda9bd',
      500: '#fc94ad',
      600: '#ca768a',
      700: '#975968',
      800: '#653b45',
      900: '#321e23',
      950: '#190f11'
    },
    fushcia: {
      50: '#ffedf7',
      100: '#fedaee',
      200: '#feb5dd',
      300: '#fd90cc',
      400: '#fd6bbb',
      500: '#fc46aa',
      600: '#ca3888',
      700: '#972a66',
      800: '#651c44',
      900: '#320e22',
      950: '#190711'
    },
    magneta: {
      50: '#fce8f3',
      100: '#f9d0e6',
      200: '#f3a1ce',
      300: '#ed73b5',
      400: '#e7449d',
      500: '#e11584',
      600: '#b4116a',
      700: '#870d4f',
      800: '#5a0835',
      900: '#2d041a',
      950: '#16020d'
    },
    peach: {
      50: '#fff4f3',
      100: '#feeae6',
      200: '#fdd4cd',
      300: '#fdbfb5',
      400: '#fca99c',
      500: '#fb9483',
      600: '#c97669',
      700: '#97594f',
      800: '#643b34',
      900: '#321e1a',
      950: '#190f0d'
    },
    strawberry: {
      50: '#ffeded',
      100: '#fedbdc',
      200: '#feb7b8',
      300: '#fd9495',
      400: '#fd7071',
      500: '#fc4c4e',
      600: '#ca3d3e',
      700: '#972e2f',
      800: '#651e1f',
      900: '#320f10',
      950: '#190808'
    },
    orange: {
      50: '#fdf1e8',
      100: '#fbe2d0',
      200: '#f8c6a1',
      300: '#f4a972',
      400: '#f18d43',
      500: '#ed7014',
      600: '#be5a10',
      700: '#8e430c',
      800: '#5f2d08',
      900: '#2f1604',
      950: '#180b02'
    },
    amber: {
      50: '#f3eae6',
      100: '#e7d6cc',
      200: '#d0ad99',
      300: '#b88367',
      400: '#a15a34',
      500: '#893101',
      600: '#6e2701',
      700: '#521d01',
      800: '#371400',
      900: '#1b0a00',
      950: '#0e0500'
    },
    tiger: {
      50: '#fff0e6',
      100: '#fee1cc',
      200: '#fec49a',
      300: '#fda667',
      400: '#fd8935',
      500: '#fc6b02',
      600: '#ca5602',
      700: '#974001',
      800: '#652b01',
      900: '#321500',
      950: '#190b00'
    },
    gold: {
      50: '#fef6e6',
      100: '#feedcc',
      200: '#fddb9a',
      300: '#fbca67',
      400: '#fab835',
      500: '#f9a602',
      600: '#c78502',
      700: '#956401',
      800: '#644201',
      900: '#322100',
      950: '#191100'
    },
    yellow: {
      50: '#fffaea',
      100: '#fef6d4',
      200: '#feedaa',
      300: '#fde37f',
      400: '#fdda55',
      500: '#fcd12a',
      600: '#caa722',
      700: '#977d19',
      800: '#655411',
      900: '#322a08',
      950: '#191504'
    },
    lemon: {
      50: '#fdffef',
      100: '#fcffdf',
      200: '#f9febf',
      300: '#f5fe9f',
      400: '#f2fd7f',
      500: '#effd5f',
      600: '#bfca4c',
      700: '#8f9839',
      800: '#606526',
      900: '#303313',
      950: '#181909'
    },
    purple: {
      50: '#f6eaf9',
      100: '#edd5f3',
      200: '#daabe7',
      300: '#c880dc',
      400: '#b556d0',
      500: '#a32cc4',
      600: '#82239d',
      700: '#621a76',
      800: '#41124e',
      900: '#210927',
      950: '#100414'
    },
    violet: {
      50: '#f1e6f4',
      100: '#e3cce9',
      200: '#c699d4',
      300: '#aa67be',
      400: '#8d34a9',
      500: '#710193',
      600: '#5a0176',
      700: '#440158',
      800: '#2d003b',
      900: '#17001d',
      950: '#0b000f'
    },
    lavender: {
      50: '#fcf5fe',
      100: '#f9ecfd',
      200: '#f3d9fb',
      300: '#eec5fa',
      400: '#e8b2f8',
      500: '#e29ff6',
      600: '#b57fc5',
      700: '#885f94',
      800: '#5a4062',
      900: '#2d2031',
      950: '#171019'
    },
    magenta: {
      50: '#f6e6ee',
      100: '#eccdde',
      200: '#d99bbd',
      300: '#c7699b',
      400: '#b4377a',
      500: '#a10559',
      600: '#810447',
      700: '#610335',
      800: '#400224',
      900: '#200112',
      950: '#100009'
    },
    grape: {
      50: '#f0eaed',
      100: '#e0d6da',
      200: '#c2acb5',
      300: '#a38391',
      400: '#85596c',
      500: '#663047',
      600: '#522639',
      700: '#3d1d2b',
      800: '#29131c',
      900: '#140a0e',
      950: '#0a0507'
    },
    green: {
      50: '#ebf7ec',
      100: '#d8efd9',
      200: '#b1e0b4',
      300: '#89d08e',
      400: '#62c169',
      500: '#3bb143',
      600: '#2f8e36',
      700: '#236a28',
      800: '#18471b',
      900: '#0c230d',
      950: '#061207'
    },
    emerald: {
      50: '#e6f3e7',
      100: '#cce7cf',
      200: '#9ad09f',
      300: '#67b870',
      400: '#35a140',
      500: '#028910',
      600: '#026e0d',
      700: '#01520a',
      800: '#013706',
      900: '#001b03',
      950: '#000e02'
    },
    sea: {
      50: '#ecfdf5',
      100: '#d8fbea',
      200: '#b1f7d5',
      300: '#8af4c1',
      400: '#63f0ac',
      500: '#3cec97',
      600: '#30bd79',
      700: '#248e5b',
      800: '#185e3c',
      900: '#0c2f1e',
      950: '#06180f'
    },
    pistachio: {
      50: '#f7fbf9',
      100: '#f0f6f3',
      200: '#e0ede7',
      300: '#d1e5da',
      400: '#c1dcce',
      500: '#b2d3c2',
      600: '#8ea99b',
      700: '#6b7f74',
      800: '#47544e',
      900: '#242a27',
      950: '#121513'
    },
    sage: {
      50: '#f1f4f0',
      100: '#e3e8e1',
      200: '#c7d1c3',
      300: '#aabaa5',
      400: '#8ea387',
      500: '#728c69',
      600: '#5b7054',
      700: '#44543f',
      800: '#2e382a',
      900: '#171c15',
      950: '#0b0e0a'
    },
    pear: {
      50: '#f1f8ea',
      100: '#e3f0d5',
      200: '#c7e2ab',
      300: '#acd380',
      400: '#90c556',
      500: '#74b62c',
      600: '#5d9223',
      700: '#466d1a',
      800: '#2e4912',
      900: '#172409',
      950: '#0c1204'
    },
    lime: {
      50: '#f7feef',
      100: '#effdde',
      200: '#dffabd',
      300: '#cef89c',
      400: '#bef57b',
      500: '#aef35a',
      600: '#8bc248',
      700: '#689236',
      800: '#466124',
      900: '#233112',
      950: '#111809'
    },
    blue: {
      50: '#ebecf8',
      100: '#d8d9f1',
      200: '#b0b4e3',
      300: '#898ed6',
      400: '#6169c8',
      500: '#3a43ba',
      600: '#2e3695',
      700: '#232870',
      800: '#171b4a',
      900: '#0c0d25',
      950: '#060713'
    },
    lapis: {
      50: '#e9ebf9',
      100: '#d4d6f3',
      200: '#a9ade7',
      300: '#7d84da',
      400: '#525bce',
      500: '#2732c2',
      600: '#1f289b',
      700: '#171e74',
      800: '#10144e',
      900: '#080a27',
      950: '#040513'
    },
    navy: {
      50: '#e7e7f1',
      100: '#cecfe3',
      200: '#9da0c6',
      300: '#6d70aa',
      400: '#3c418d',
      500: '#0b1171',
      600: '#090e5a',
      700: '#070a44',
      800: '#04072d',
      900: '#020317',
      950: '#01020b'
    },
    indigo: {
      50: '#eae9ef',
      100: '#d4d2df',
      200: '#a9a5be',
      300: '#7e789e',
      400: '#534b7d',
      500: '#281e5d',
      600: '#20184a',
      700: '#181238',
      800: '#100c25',
      900: '#080613',
      950: '#040309'
    },
    aegean: {
      50: '#e9ecf1',
      100: '#d2dae2',
      200: '#a5b5c5',
      300: '#788fa8',
      400: '#4b6a8b',
      500: '#1e456e',
      600: '#183758',
      700: '#122942',
      800: '#0c1c2c',
      900: '#060e16',
      950: '#03070b'
    },
    ocean: {
      50: '#e6eff0',
      100: '#ccdfe0',
      200: '#99bfc1',
      300: '#67a0a2',
      400: '#348083',
      500: '#016064',
      600: '#014d50',
      700: '#013a3c',
      800: '#002628',
      900: '#001314',
      950: '#000a0a'
    },
    stone: {
      50: '#eef2f4',
      100: '#dee4e8',
      200: '#bdc9d1',
      300: '#9baebb',
      400: '#7a93a4',
      500: '#59788d',
      600: '#476071',
      700: '#354855',
      800: '#243038',
      900: '#12181c',
      950: '#090c0e'
    },
    slate: {
      50: '#f1f2f3',
      100: '#e3e5e7',
      200: '#c8cacf',
      300: '#acb0b7',
      400: '#91959f',
      500: '#757b87',
      600: '#5e626c',
      700: '#464a51',
      800: '#2f3136',
      900: '#17191b',
      950: '#0c0c0d'
    },
    sky: {
      50: '#eff9fb',
      100: '#e0f3f8',
      200: '#c0e8f0',
      300: '#a1dce9',
      400: '#81d1e1',
      500: '#62c5da',
      600: '#4e9eae',
      700: '#3b7683',
      800: '#274f57',
      900: '#14272c',
      950: '#0a1416'
    },
    brown: {
      50: '#eae8e6',
      100: '#d5d0cd',
      200: '#aba19a',
      300: '#807368',
      400: '#564435',
      500: '#2c1503',
      600: '#231102',
      700: '#1a0d02',
      800: '#120801',
      900: '#090401',
      950: '#040200'
    },
    peanut: {
      50: '#f2efeb',
      100: '#e4ded6',
      200: '#c9beae',
      300: '#af9d85',
      400: '#947d5d',
      500: '#795c34',
      600: '#614a2a',
      700: '#49371f',
      800: '#302515',
      900: '#18120a',
      950: '#0c0905'
    },
    gray: {
      50: '#f9f9fa',
      100: '#f4f4f6',
      200: '#e8e8ec',
      300: '#dddde3',
      400: '#d1d1d9',
      500: '#c6c6d0',
      600: '#9e9ea6',
      700: '#77777d',
      800: '#4f4f53',
      900: '#28282a',
      950: '#141415'
    },
    silver: {
      50: '#f7f7f9',
      100: '#efeff4',
      200: '#dedee9',
      300: '#cecedd',
      400: '#bdbdd2',
      500: '#adadc7',
      600: '#8a8a9f',
      700: '#686877',
      800: '#454550',
      900: '#232328',
      950: '#111114'
    },
    dove: {
      50: '#f2f1f2',
      100: '#e5e2e5',
      200: '#cbc5cc',
      300: '#b0a8b2',
      400: '#968b99',
      500: '#7c6e7f',
      600: '#635866',
      700: '#4a424c',
      800: '#322c33',
      900: '#191619',
      950: '#0c0b0d'
    },
    cream: {
      50: '#fffffb',
      100: '#fffef8',
      200: '#fffdf0',
      300: '#fffce9',
      400: '#fffbe1',
      500: '#fffada',
      600: '#ccc8ae',
      700: '#999683',
      800: '#666457',
      900: '#33322c',
      950: '#191916'
    },
    snow: {
      50: '#fdffff',
      100: '#fbfefe',
      200: '#f7fefe',
      300: '#f4fdfd',
      400: '#f0fdfd',
      500: '#ecfcfc',
      600: '#bdcaca',
      700: '#8e9797',
      800: '#5e6565',
      900: '#2f3232',
      950: '#181919'
    },
    black: '#000000',
    white: '#FFFFFF'
};

export const red = colors.red;
export const crimson = colors.crimson;
export const grenadier = colors.grenadier;
export const pink = colors.pink;
export const rose = colors.rose;
export const fushcia = colors.fushcia;
export const magneta = colors.magneta;
export const peach = colors.peach;
export const strawberry = colors.strawberry;
export const orange = colors.orange;
export const amber = colors.amber;
export const tiger = colors.tiger;
export const gold = colors.gold;
export const yellow = colors.yellow;
export const lemon = colors.lemon;
export const purple = colors.purple;
export const violet = colors.violet;
export const lavender = colors.lavender;
export const magenta = colors.magenta;
export const grape  = colors.grape;
export const green = colors.green;
export const emerald = colors.emerald;
export const sea = colors.sea;
export const pistachio = colors.pistachio;
export const sage = colors.sage;
export const pear = colors.pear;
export const lime = colors.lime;
export const blue = colors.blue;
export const lapis = colors.lapis;
export const navy = colors.navy;
export const indigo = colors.indigo;
export const aegean = colors.aegean;
export const ocean = colors.ocean;
export const stone  = colors.stone;
export const slate = colors.slate;
export const sky = colors.sky;
export const brown = colors.brown;
export const peanut = colors.peanut;
export const gray = colors.gray;
export const silver = colors.silver;
export const dove = colors.dove;
export const cream = colors.cream;
export const snow = colors.snow;
export const black = colors.black;
export const white = colors.white;

export default colors;