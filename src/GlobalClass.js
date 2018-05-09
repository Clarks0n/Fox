/**
 * ...
 * @author
 */
var GlobalClass = {
    // for slotgame
    GAME_NAME: "Fox Girl",
    GAME_ENGINE: null,

    SCALE_FACTOR: 1,
    STAGE_WIDTH: 1280,
    STAGE_HEIGHT: 720,
    SYMBOL_WIDTH: 170,
    SYMBOL_HEIGHT: 170,
    TOTAL_COLUMN: 5,
    TOTAL_ROW: 3,
    ROW_START_POS: 140,
    SYMBOL_POSITION_DELETE: 786,
    SYMBOL_POSITION_APPEAR: [598, 781, 962, 1147, 1330],

    // for sound
    GAME_SOUND_ENABLE: true,
    GAME_SOUND_VOLUME: 1,

    // for gameplay

    GAME_BALANCE: 2000,
    GAME_BALANCE_CURRENCY: 2000,
    GAME_CURRENCY: "$",


    // GAME_BALANCE: 1000000,
    GAME_TOTALBET: 100,

    GAME_REEL: [],
    GAME_STOPCODE: [0, 0, 0, 0, 0],


    GAME_COIN_POS: 4,

    GAME_COIN_VALUE: [0.01, 0.05, 0.1, 0.5, 1, 5, 10],
    GAME_BET_POS: 0,
    GAME_BET_VALUE: [1, 2, 3, 5, 10, 15],

    GAME_BET: 10,
    GAME_BET_MIN: 1,
    GAME_BET_MAX: 10,
    GAME_LINE: 30,
    GAME_LINE_MIN: 1,
    GAME_LINE_MAX: 30,


    // GAME_COIN_POS: 3,
    // GAME_COIN_VALUE: [0.1, 0.2, 0.5, 1, 2, 5, 10, 20, 50, 100],
    // GAME_BET: 10,
    // GAME_BET_MIN: 1,
    // GAME_BET_MAX: 10,
    // GAME_LINE: 30,
    // GAME_LINE_MIN: 1,
    // GAME_LINE_MAX: 30,

    GAME_CHEAT: 0, // 0:normal, 1:feature, 2:big win, 3:massivewin, 4:massivesymbol, 5:randomwild, 6:fullwild
    GAME_CANCEL: false,

    /////////////////////
    GAME_ROTATION: true,

    GAME_MODE: 0,
    GAME_MODE_NORMAL: 0,
    GAME_MODE_FEATURE1: 1,
    GAME_MODE_FEATURE2: 2,


    GAME_TYPE: 0,
    GAME_TYPE_NORMAL: 0,
    GAME_TYPE_WILD_RANDOM: 1,
    GAME_TYPE_WILD_RESPIN: 2,
    GAME_TYPE_WILD_FULL: 3,
    FOX_TYPE_MASSIVE: 4,
    FOX_TYPE_RANDOMWILD: 5,
    FOX_TYPE_FULLWILD: 6,

    GAME_WILD_COL: [],
    GAME_WILD_ROW: [],
    GAME_WILD_TYPE: [],

    GAME_WILD_RESPIN_COL: [],
    GAME_WILD_RESPIN_ROW: [],
    GAME_WILD_RESPIN_TYPE: [],

    GAME_WILD_FULL_COL: [],
    GAME_WILD_FULL_ROW: [],
    GAME_WILD_FULL_TYPE: [],

    GAME_MULTIPLIER: 0,
    GAME_MULTIPLIER_COL: [],
    GAME_MULTIPLIER_ROW: [],

  //////////////////////

    GAME_CONDITION: 0,
    GAME_CONDITION_PREPARE: 0,
    GAME_CONDITION_IDLE: 1,
    GAME_CONDITION_USE_CHEAT: 2,
    GAME_CONDITION_SPIN: 3,
    GAME_CONDITION_STOP: 4,
    GAME_CONDITION_STOP_RESPIN: 5,
    GAME_CONDITION_ANIMATIONS: 6,
    GAME_CONDITION_ANIMATION_ALL: 7,
    GAME_CONDITION_ANIMATION_SYMBOL: 8,
    GAME_CONDITION_ANIMATION_ALL_RESPIN: 9,
    GAME_CONDITION_ANIMATION_SYMBOL_RESPIN: 10,

    // HUD
    CONFIG_QUICKSPIN: false,
    CONFIG_SPACEBAR: false,

    CONFIG_AUTO_REMAINING: 0,
    CONFIG_AUTO_SINGLE_VALUE: 0,
    CONFIG_AUTO_INCREASE_VALUE: 0,
    CONFIG_AUTO_DECREASE_VALUE: 0,
    CONFIG_AUTO_ANYWIN_ACTIVE: false,
    CONFIG_AUTO_FREESPIN_ACTIVE: false,
    CONFIG_AUTO_SINGLE_ACTIVE: false,
    CONFIG_AUTO_INCREASE_ACTIVE: false,
    CONFIG_AUTO_DECREASE_ACTIVE: false,

    AUTO_PLAY_BALANCE: 0,

    // for judgement
    GAME_RULES: null,
    GAME_JUDGEMENT: null,
    GAME_SPECIAL_VALUE: new Array(),

    FREEGAMES_GET: [0, 0, 5, 10, 15],

    // GAME_ROOT: null,
    //GAME_AUTOSPIN                             : false,
    GAME_BANNER: false,
    GAME_FEATURE: false,
    //GAME_FEATURE_GET                          : false,
    GAME_FEATURE_TOTAL: 0,
    GAME_FEATURE_LEFT: 0,
    GAME_FEATURE_TYPE: 0,
    GAME_FEATURE_TOTALWIN: 0,

    GAME_COIN_TEMP: 1,
    GAME_TOTAl_WIN: 0,

    GAME_WIN_SOUND: [10, 20, 40, 60, 80],

    MULTIPLIER_FEATURE: 1,
    MULTIPLIER_WILD_FEATURE: 1,
    MULTIPLIER_WILD_NORMAL: 1,

    MIN_SCATTER: 3,
    SCATTER_WIN_SKIP: true,
    FEATURE_RETRIGGER: false,
    JUDGEMENT_LEFT_TO_RIGHT: true,
    JUDGEMENT_RIGHT_TO_LEFT: false,

    // for fox girl only
    FOX_TYPE: 0,
    FOX_TYPE_NORMAL: 0,
    FOX_TYPE_MASSIVE: 1,
    FOX_TYPE_RANDOMWILD: 2,
    FOX_TYPE_FULLWILD: 3,

    FOX_MASSIVE: 0,
    FOX_MASSIVE_NONE: 0,
    FOX_MASSIVE_TOP1: 1,
    FOX_MASSIVE_TOP2: 2,
    FOX_MASSIVE_BOTTOM1: 3,
    FOX_MASSIVE_BOTTOM2: 4,
    FOX_MASSIVE_ALL: 5,

    FOX_MASSIVE_SYMBOL: 0,
    FOX_MASSIVE_REEL: [],

    FOX_COL: [],
    FOX_ROW: [],
    SIDE_BET: false,
    FEATURE_BALL: [],


    // for infromation
    TEXT_SPIN: new Array("Good Luck"),
    TEXT_MAXBEAT_REACH: new Array("Max Bet Reached"),
    TEXT_NOCOIN: new Array("Not Enough Credit"),
    TEXT_RESULT_NOWIN: new Array("I feel your luck is about to change"),
    TEXT_RESULT_WIN: ["Nice spin",
        "Nice spin",
        "That's a nice win!",
        "Jackpot!",
        "Hand pay !! Someone call the attendant please!"
    ],
    TEXT_IDLE: ['Real Slots. Real Players. Real Deal.',
        "Press Spin to Play.",
        "substitutes for all symbols except",
        "3         triggers random bonus features"
    ],


    // for reel and symbol
    SYMBOL_DATA: [{
        id: 0,
        name: "wild.png",
        paytable: [0, 0, 0, 0, 0],
        isWild: true,
        isScatter: false,
        isRoyal: false
    }, {
        id: 1,
        name: "pic_1.png",
        paytable: [0, 0, 50, 100, 1000],
        isWild: false,
        isScatter: false,
        isRoyal: false
    }, {
        id: 2,
        name: "pic_2.png",
        paytable: [0, 0, 10, 25, 250],
        isWild: false,
        isScatter: false,
        isRoyal: false
    }, {
        id: 3,
        name: "pic_3.png",
        paytable: [0, 0, 10, 25, 250],
        isWild: false,
        isScatter: false,
        isRoyal: false
    }, {
        id: 4,
        name: "pic_4.png",
        paytable: [0, 0, 10, 15, 125],
        isWild: false,
        isScatter: false,
        isRoyal: false
    }, {
        id: 5,
        name: "pic_5.png",
        paytable: [0, 0, 10, 15, 125],
        isWild: false,
        isScatter: false,
        isRoyal: false
    }, {
        id: 6,
        name: "royal_ace.png",
        paytable: [0, 0, 5, 10, 75],
        isWild: false,
        isScatter: false,
        isRoyal: true
    }, {
        id: 7,
        name: "royal_king.png",
        paytable: [0, 0, 5, 10, 75],
        isWild: false,
        isScatter: false,
        isRoyal: true
    }, {
        id: 8,
        name: "royal_queen.png",
        paytable: [0, 0, 5, 10, 75],
        isWild: false,
        isScatter: false,
        isRoyal: true
    }, {
        id: 9,
        name: "royal_jack.png",
        paytable: [0, 0, 5, 10, 75],
        isWild: false,
        isScatter: false,
        isRoyal: true
    }, {
        id: 10,
        name: "royal_ten.png",
        paytable: [0, 0, 5, 10, 75],
        isWild: false,
        isScatter: false,
        isRoyal: true
    }, {
        id: 11,
        name: "royal_nine.png",
        paytable: [0, 0, 5, 10, 75],
        isWild: false,
        isScatter: false,
        isRoyal: true
    }, {
        id: 12,
        name: "scatter.png",
        paytable: [0, 1, 3, 10, 100],
        isWild: false,
        isScatter: true,
        isRoyal: false
    }],

    REEL_NORMAL: [
        [5, 8, 4, 9, 3, 8, 5, 9, 4, 8, 3, 6, 9, 5, 10, 1, 6, 3, 7, 2, 6, 7, 1, 11, 7, 2, 10, 11, 12, 10, 11],
        [1, 7, 3, 11, 6, 4, 8, 11, 0, 2, 8, 9, 3, 10, 2, 8, 12, 10, 4, 7, 6, 0, 11, 1, 7, 2, 11, 5, 0, 9, 6, 5, 10, 6, 0, 11],
        [5, 10, 0, 9, 8, 1, 7, 10, 3, 9, 4, 0, 6, 4, 9, 1, 7, 0, 9, 11, 3, 12, 8, 4, 7, 2, 9, 11, 0, 2],
        [7, 11, 0, 6, 11, 2, 12, 7, 6, 1, 11, 8, 0, 3, 11, 7, 5, 0, 8, 3, 10, 5, 0, 6, 7, 4, 6, 5, 7, 6, 5, 8, 9, 5, 6, 8, 0],
        [4, 6, 1, 9, 5, 8, 1, 11, 6, 2, 11, 8, 4, 9, 7, 2, 10, 4, 12, 10, 7, 4, 10, 8, 3, 10, 9]

    ],

    REEL_SIDE_BET: [
        [5, 8, 4, 9, 3, 8, 5, 9, 4, 8, 3, 12, 6, 9, 5, 10, 1, 6, 3, 7, 2, 6, 7, 1, 11, 7, 2, 10, 11, 12, 10, 11],
        [1, 7, 3, 11, 0, 4, 8, 3, 0, 2, 8, 1, 9, 5, 12, 3, 10, 2, 8, 12, 10, 4, 9, 2, 0, 4, 5, 0, 7, 2, 11, 3, 0, 6, 5, 11, 0, 6, 2],
        [5, 0, 4, 10, 1, 8, 2, 0, 6, 1, 10, 3, 0, 4, 6, 1, 11, 2, 0, 5, 11, 3, 12, 5, 8, 4, 0, 7, 2, 9, 0, 2],
        [11, 5, 6, 0, 11, 4, 9, 2, 12, 1, 6, 2, 8, 1, 6, 0, 3, 11, 4, 6, 1, 0, 8, 5, 0, 2, 7, 4, 8, 3, 10, 2, 8, 4, 0],
        [4, 11, 1, 10, 4, 8, 5, 7, 2, 10, 5, 8, 2, 6, 5, 10, 4, 12, 3, 7, 4, 10, 1, 9, 3, 10, 9]

    ],

    REEL_ENDLESS: [
        [5, 8, 4, 9, 3, 8, 5, 9, 4, 8, 3, 6, 9, 5, 10, 1, 6, 3, 7, 2, 6, 7, 1, 11, 7, 2, 10, 11, 4, 10, 11],
        [1, 6, 3, 7, 1, 8, 4, 10, 11, 5, 6, 0, 4, 9, 5, 0, 11, 2, 7, 0, 5, 8, 9, 4, 0, 10],
        [5, 10, 0, 9, 8, 1, 7, 10, 3, 9, 4, 5, 6, 4, 9, 1, 6, 5, 9, 2, 3, 8, 4, 7, 2, 11, 0, 2],
        [7, 11, 0, 6, 11, 2, 7, 4, 6, 1, 11, 4, 8, 2, 11, 7, 5, 8, 3, 10, 4, 6, 3, 9, 5, 7, 4, 8, 5, 6, 4, 8, 5],
        [4, 6, 1, 9, 5, 8, 1, 11, 6, 2, 11, 8, 4, 10, 7, 2, 10, 4, 9, 7, 4, 10, 8, 3, 10, 9]
    ],

    REEL_RANDOM_WILD: [
        [5, 8, 4, 9, 3, 8, 5, 9, 4, 8, 3, 6, 1, 9, 5, 10, 1, 6, 3, 7, 2, 6, 7, 1, 11, 7, 2, 10, 11, 4, 10, 11],
        [1, 10, 11, 1, 10, 11, 1, 0, 3, 6, 4, 7, 2, 8, 9, 3, 6, 7, 3, 8, 7, 3, 0, 4, 8, 9, 4, 2, 0, 11, 2, 6, 10, 0, 5, 11],
        [5, 10, 0, 9, 8, 1, 7, 10, 3, 9, 4, 0, 5, 1, 4, 9, 0, 1, 6, 5, 9, 2, 3, 8, 4, 7, 2, 11, 0, 2],
        [7, 11, 0, 6, 11, 2, 7, 0, 6, 1, 11, 0, 8, 3, 11, 0, 7, 5, 8, 0, 3, 10, 4, 7, 3, 6, 5, 7, 6, 5, 8, 9, 5, 6, 8, 5],
        [4, 6, 1, 9, 5, 8, 1, 11, 6, 2, 11, 8, 4, 10, 7, 2, 9, 4, 10, 7, 4, 10, 8, 3, 10, 9]

    ],

    REEL_FULL_WILD: [
        [5, 8, 4, 9, 3, 8, 5, 9, 8, 4, 6, 9, 5, 10, 1, 6, 3, 7, 2, 6, 7, 1, 11, 7, 2, 10, 11, 3, 10, 11],
        [1, 7, 3, 11, 6, 4, 8, 11, 0, 2, 8, 9, 3, 10, 2, 8, 10, 4, 7, 6, 0, 11, 1, 7, 2, 11, 5, 0, 9, 6, 5, 10, 6, 0, 11],
        [5, 10, 0, 9, 8, 1, 7, 10, 3, 9, 4, 0, 6, 4, 9, 1, 7, 0, 9, 11, 3, 8, 4, 7, 2, 9, 11, 0, 2],
        [7, 11, 0, 6, 11, 2, 7, 6, 1, 11, 8, 0, 3, 11, 7, 5, 0, 8, 3, 10, 5, 0, 6, 7, 4, 6, 5, 7, 6, 5, 8, 9, 5, 6, 8, 0],
        [4, 6, 1, 9, 5, 8, 1, 11, 6, 2, 11, 8, 4, 10, 7, 2, 9, 4, 10, 7, 4, 10, 8, 3, 10, 9]
    ],

    REEL_MASSIVE_SYMBOL_PIC_A: [
        [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5],
        [1, 1, 1, 1, 2, 5, 5, 4, 0, 3, 5, 0, 3, 4, 1, 1, 5, 2, 3, 4, 1, 2, 4, 0, 5, 5, 0, 2, 3, 5, 2, 3, 0, 2, 3, 0, 3, 4, 1, 1, 5, 2, 3, 4, 1, 2, 3, 0, 2, 3, 0],
        [1, 1, 1, 1, 2, 0, 5, 4, 0, 3, 5, 0, 4, 5, 3, 2, 0, 4, 4, 5, 3, 1, 5, 0, 1, 5, 0, 4, 4, 0, 4, 4, 0, 4, 4, 0, 4, 5, 3, 2, 0, 4, 4, 5, 3, 4, 4, 0, 4, 4, 0],
        [1, 1, 1, 3, 1, 0, 2, 1, 3, 2, 1, 0, 1, 2, 4, 3, 0, 1, 1, 2, 4, 1, 1, 0, 2, 1, 3, 3, 1, 0, 2, 1, 3, 2, 1, 0, 1, 2, 4, 3, 0, 1, 1, 2, 4, 1, 1, 0, 2, 1, 3],
        [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 0, 0, 0]
    ],

    REEL_MASSIVE_SYMBOL_PIC_B: [
        [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5],
        [2, 2, 2, 1, 2, 5, 5, 4, 0, 3, 5, 0, 3, 4, 1, 1, 5, 2, 3, 4, 1, 2, 4, 0, 5, 5, 0, 2, 3, 5, 2, 3, 0, 2, 3, 0, 3, 4, 1, 1, 5, 2, 3, 4, 1, 2, 3, 0, 2, 3, 0],
        [2, 2, 2, 1, 2, 0, 5, 4, 0, 3, 5, 0, 4, 5, 3, 2, 0, 4, 4, 5, 3, 1, 5, 0, 1, 5, 0, 4, 4, 0, 4, 4, 0, 4, 4, 0, 4, 5, 3, 2, 0, 4, 4, 5, 3, 4, 4, 0, 4, 4, 0],
        [2, 2, 2, 3, 1, 0, 2, 1, 3, 2, 1, 0, 1, 2, 4, 3, 0, 1, 1, 2, 4, 1, 1, 0, 2, 1, 3, 3, 1, 0, 2, 1, 3, 2, 1, 0, 1, 2, 4, 3, 0, 1, 1, 2, 4, 1, 1, 0, 2, 1, 3],
        [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 0, 0, 0]
    ],

    REEL_MASSIVE_SYMBOL_PIC_C: [
        [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5],
        [3, 3, 3, 1, 2, 5, 5, 4, 0, 3, 5, 0, 3, 4, 1, 1, 5, 2, 3, 4, 1, 2, 4, 0, 5, 5, 0, 2, 3, 5, 2, 3, 0, 2, 3, 0, 3, 4, 1, 1, 5, 2, 3, 4, 1, 2, 3, 0, 2, 3, 0],
        [3, 3, 3, 1, 2, 0, 5, 4, 0, 3, 5, 0, 4, 5, 3, 2, 0, 4, 4, 5, 3, 1, 5, 0, 1, 5, 0, 4, 4, 0, 4, 4, 0, 4, 4, 0, 4, 5, 3, 2, 0, 4, 4, 5, 3, 4, 4, 0, 4, 4, 0],
        [3, 3, 3, 3, 1, 0, 2, 1, 3, 2, 1, 0, 1, 2, 4, 3, 0, 1, 1, 2, 4, 1, 1, 0, 2, 1, 3, 3, 1, 0, 2, 1, 3, 2, 1, 0, 1, 2, 4, 3, 0, 1, 1, 2, 4, 1, 1, 0, 2, 1, 3],
        [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 0, 0, 0]
    ],

    REEL_MASSIVE_SYMBOL_PIC_D: [
        [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5],
        [4, 4, 4, 1, 2, 5, 5, 4, 0, 3, 5, 0, 3, 4, 1, 1, 5, 2, 3, 4, 1, 2, 4, 0, 5, 5, 0, 2, 3, 5, 2, 3, 0, 2, 3, 0, 3, 4, 1, 1, 5, 2, 3, 4, 1, 2, 3, 0, 2, 3, 0],
        [4, 4, 4, 1, 2, 0, 5, 4, 0, 3, 5, 0, 4, 5, 3, 2, 0, 4, 4, 5, 3, 1, 5, 0, 1, 5, 0, 4, 4, 0, 4, 4, 0, 4, 4, 0, 4, 5, 3, 2, 0, 4, 4, 5, 3, 4, 4, 0, 4, 4, 0],
        [4, 4, 4, 3, 1, 0, 2, 1, 3, 2, 1, 0, 1, 2, 4, 3, 0, 1, 1, 2, 4, 1, 1, 0, 2, 1, 3, 3, 1, 0, 2, 1, 3, 2, 1, 0, 1, 2, 4, 3, 0, 1, 1, 2, 4, 1, 1, 0, 2, 1, 3],
        [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 0, 0, 0]
    ],

    REEL_MASSIVE_SYMBOL_PIC_E: [
        [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5],
        [5, 5, 5, 1, 2, 5, 5, 4, 0, 3, 5, 0, 3, 4, 1, 1, 5, 2, 3, 4, 1, 2, 4, 0, 5, 5, 0, 2, 3, 5, 2, 3, 0, 2, 3, 0, 3, 4, 1, 1, 5, 2, 3, 4, 1, 2, 3, 0, 2, 3, 0],
        [5, 5, 5, 1, 2, 0, 5, 4, 0, 3, 5, 0, 4, 5, 3, 2, 0, 4, 4, 5, 3, 1, 5, 0, 1, 5, 0, 4, 4, 0, 4, 4, 0, 4, 4, 0, 4, 5, 3, 2, 0, 4, 4, 5, 3, 4, 4, 0, 4, 4, 0],
        [5, 5, 5, 3, 1, 0, 2, 1, 3, 2, 1, 0, 1, 2, 4, 3, 0, 1, 1, 2, 4, 1, 1, 0, 2, 1, 3, 3, 1, 0, 2, 1, 3, 2, 1, 0, 1, 2, 4, 3, 0, 1, 1, 2, 4, 1, 1, 0, 2, 1, 3],
        [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 0, 0, 0]
    ],

    WIN_LINE: [
        [1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0],
        [2, 2, 2, 2, 2],
        [0, 1, 2, 1, 0],
        [2, 1, 0, 1, 2],
        [1, 2, 2, 2, 1],
        [1, 0, 0, 0, 1],
        [2, 2, 1, 0, 0],
        [0, 0, 1, 2, 2],
        [2, 1, 1, 1, 0],
        [0, 1, 1, 1, 2],
        [1, 2, 1, 0, 1],
        [1, 0, 1, 2, 1],
        [0, 1, 0, 1, 0],
        [2, 1, 2, 1, 2],
        [1, 1, 0, 1, 1],
        [1, 1, 2, 1, 1],
        [0, 2, 0, 2, 0],
        [2, 0, 2, 0, 2],
        [2, 0, 1, 0, 2],
        [0, 2, 1, 2, 0],
        [0, 0, 2, 0, 0],
        [2, 2, 0, 2, 2],
        [1, 0, 2, 0, 1],
        [1, 2, 0, 2, 1],
        [0, 0, 1, 0, 0],
        [2, 2, 1, 2, 2],
        [0, 2, 2, 2, 0],
        [2, 0, 0, 0, 2],
        [2, 1, 1, 1, 2]
    ],


    ///////////////////////////////////////////////////////////////////////////////////
    getCoinBalance: function get() {
        var coinValue = GlobalClass.GAME_COIN_VALUE[GlobalClass.GAME_COIN_POS] * 1000;
        GlobalClass.GAME_BALANCE = Math.floor(GlobalClass.GAME_BALANCE_CURRENCY / (coinValue / 1000));
        return GlobalClass.GAME_BALANCE;
    },

    getCashBet: function get() {
        var multi = 1;
        if (GlobalClass.SIDE_BET) {
            multi = 2;
        }

        var coinValue = GlobalClass.GAME_COIN_VALUE[GlobalClass.GAME_COIN_POS] * 1000;
        return GlobalClass.GAME_LINE * GlobalClass.GAME_BET_VALUE[GlobalClass.GAME_BET_POS] * coinValue / 1000 * multi;
        // return GlobalClass.GAME_LINE * GlobalClass.GAME_BET_VALUE[GlobalClass.GAME_BET_POS];
    },

    coin: function get() {
        var multi = 1;
        if (GlobalClass.SIDE_BET) {
            multi = 2;
        }

        var coinValue = GlobalClass.GAME_COIN_VALUE[GlobalClass.GAME_COIN_POS] * 1000;
        return GlobalClass.GAME_BALANCE_CURRENCY * coinValue / 1000 ;
    },

    // for function
    betPerLine: function get() {
        return GlobalClass.GAME_LINE * GlobalClass.GAME_BET;
    },

    trueCoinValue: function get() {
        var coinValue = GlobalClass.GAME_COIN_VALUE[GlobalClass.GAME_COIN_POS] * 1000;
        return coinValue / 1000;
    },

    totalBet: function get() {
        var multi = 1;
        if (GlobalClass.SIDE_BET) {
            multi = 2;
        }

        // var coinValue = GlobalClass.GAME_COIN_VALUE[GlobalClass.GAME_COIN_POS] * 1000;
        // return GlobalClass.GAME_LINE * GlobalClass.GAME_BET * coinValue / 1000 * multi;

         return GlobalClass.GAME_LINE * GlobalClass.GAME_BET_VALUE[GlobalClass.GAME_BET_POS] * multi;
    },


    // for resolution
    setScaleFactor: function() {

    },
    getPosX: function(value) {
        return value * this.SCALE_FACTOR;
    },
    getPosY: function(value) {
        return value * this.SCALE_FACTOR;
    },


    // ?????
    randomRange: function(min, max) {
        return (Math.floor(Math.random() * (max - min + 1)) + min);
    },

    formatNumber: function(number) { // give comma ---> trace ( String("100000000000000").replace( /\d{1,3}(?:(\d{3})+(?!\d))/g , "$&,") ),
        var numString = number.toString();
        var result = '';
        var result2 = '.00';

        if (numString.indexOf(".") != -1) {
            result2 = numString.substring(numString.indexOf("."), numString.length);
            numString = numString.substring(0, numString.indexOf("."));
        }

        while (numString.length > 3) {
            var chunk = numString.substr(-3);
            numString = numString.substr(0, numString.length - 3);
            result = ',' + chunk + result;
        }

        if (numString.length > 0) {
            result = numString + result;
        }
        return result + result2;
    },

    deleteChildren: function(group) {
        for (var i = group.children.length - 1; i >= 0; i--) {
            group.children[i].destroy();
        }
    },

    create: function() {
        this.GAME_RULES = new SlotsGameRules();
        this.GAME_RULES.setSymbolsPerRow(this.TOTAL_ROW);
        this.GAME_RULES.setFeatureMultiplier(this.MULTIPLIER_FEATURE);
        this.GAME_RULES.setFeatureWildMultiplier(this.MULTIPLIER_WILD_FEATURE);
        this.GAME_RULES.setNormalWildMultiplier(this.MULTIPLIER_WILD_NORMAL);
        this.GAME_RULES.setFreeGames(this.FREEGAMES_GET);
    }
};

GlobalClass.create();
