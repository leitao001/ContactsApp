import adjust from '@utils/adjust';
import { Colors } from '@theme';

const Fonts = {
    title: {
        fontFamily: 'Proxima Nova Bold',
        fontSize: adjust(20),
        lineHeight: adjust(24),
        textAlignVertical: 'top',
        textAlign: 'center',
    },
    input: {
        fontFamily: 'Proxima Nova Rg',
        fontSize: adjust(16),
        lineHeight: adjust(19),
        textAlign: 'left',
    },
    button: {
        fontFamily: 'Proxima Nova Rg',
        fontSize: adjust(14),
        lineHeight: adjust(17),
        textAlignVertical: 'top',
        textAlign: 'center',
    },
    info: {
        fontFamily: 'Proxima Nova Rg',
        fontSize: adjust(14),
        lineHeight: adjust(17),
        textAlignVertical: 'top',
        textAlign: 'center',
    },
    explain: {
        fontFamily: 'Proxima Nova Rg',
        fontSize: adjust(16),
        lineHeight: adjust(19),
        textAlignVertical: 'top',
        textAlign: 'center',
    },
    item: {
        fontFamily: 'Proxima Nova Rg',
        fontSize: adjust(15),
        lineHeight: adjust(18),
        textAlignVertical: 'top',
        color: Colors.black,
        // textAlign: 'center',
    },
    itemInfo: {
        fontFamily: 'Proxima Nova Rg',
        fontSize: adjust(13),
        lineHeight: adjust(16),
        textAlignVertical: 'top',
        color: Colors.grey5,
        // textAlign: 'center',
    },
    //=======================

    description: {
        // family: 'SFProText',
        fontSize: adjust(15),
        fontWeight: 'normal',
    },

    itemTitle: {
        // family: 'SFProText,
        fontSize: adjust(16),
        fontWeight: 'bold',
    },
    headerTitle: {
        // family: 'SFProText,
        fontSize: adjust(13),
        fontWeight: 'bold',
    },
    menu: {
        fontSize: adjust(9),
        fontWeight: 'normal',
    },
    note: {
        fontSize: adjust(12),
        fontWeight: 'normal',
    },
    smallTitle: {
        fontSize: adjust(10),
        fontWeight: 'normal',
    },
    tinyTitle: {
        fontSize: adjust(7),
        fontWeight: 'normal',
    },
};
export default Fonts;
