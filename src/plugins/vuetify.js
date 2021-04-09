import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: false,
        themes: {
            light: {
                primary: '#F3D740',
                secondary: '#91DBF6',
                blue_light: '#EBF8FD',
                green: '#4CDEB2',
            },
        },
    },
    icons: {
        iconfont: 'mdi',
    },
});
