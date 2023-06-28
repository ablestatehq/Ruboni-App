import { Dimensions } from "react-native"
import { 
    APPWRITE_DB_ID, 
    APPWRITE_USER_COLLECTION_ID,
    APPWRITE_PRODUCT_COLLECTION_ID,
    APPWRITE_USER_BUCKET,
    APPWRITE_PROJECT_ID,
    APPWRITE_API_ENDPOINT
} from '@env';

export const COLORS = {
    PRIMARY:'#82AAE3',
    PRIMARY_1:'#BFEAF5',
    PRIMARY_2:'#EAFDFC',
    WHITE: '#fff',
    WHITE_1:'#F9F8F8',
    BLACK: '#000',
    GREEN:'#00FF00',
    RED: '#FF0000'
}

export const DIMENS = {
    FORM: {
        PADDING: 20,
    },
    SCREENHEIGHT: Dimensions.get('screen').height,
    SCREENWIDTH: Dimensions.get('screen').width,
}

export const FONTS = {
    SIZE: {
        HEADING: 25,
        NORMAL: 15,
        SMALLEST: 10
    },
}

// store variables 
export const ENDPOINT = APPWRITE_API_ENDPOINT;
export const PROJECTID = APPWRITE_PROJECT_ID;
export const databaseId = APPWRITE_DB_ID;
export const pCollection = APPWRITE_PRODUCT_COLLECTION_ID;
export const uCollection = APPWRITE_USER_COLLECTION_ID;
export const userBucket = APPWRITE_USER_BUCKET;