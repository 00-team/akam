import { Entry } from 'webpack'

import { APP_DIR, resolve } from './path'

const Entries: Entry = {
    react_vendors: { import: ['react', 'react-dom'], runtime: 'runtime' },

    shared: {
        import: ['react-router-dom', '@00-team/utils'],
        dependOn: ['react_vendors'],
    },

    components: {
        import: resolve(APP_DIR, 'components'),
        dependOn: ['react_vendors'],
    },

    main: {
        import: APP_DIR,
        dependOn: ['Home'],
    },

    Home: {
        import: resolve(APP_DIR, 'Home'),
        dependOn: ['shared', 'components'],
    },
}

export default Entries
