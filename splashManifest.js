const filePathMenu = 'assets/main-menu/';
const filePathClient = 'assets/client-images/';
const manifest = {
    bundles: [
        {
            name: 'main-menu-images',
            assets: [
                {
                    alias: 'Swirling Galaxy for UFOs',
                    src: 'swirl',
                    publish: true,
                },
                {
                    alias: 'UX Case Studies',
                    src: 'ux',
                    publish: true,
                },
                {
                    alias: 'Tiger Stripes For My Cat',
                    src: 'tiger',
                    publish: true,
                },
                {
                    alias: 'Logos I Have Created',
                    src: 'logos',
                    publish: true,
                },
                {
                    alias: 'Eyes Looking at You',
                    src: 'eyes',
                    publish: true,
                },
                {
                    alias: 'Who am I? Who knows...',
                    src: 'me',
                    publish: true,
                },
            ],
        },
        {
            name: 'my-clients-logos',
            assets: [
                {
                    alias: 'Colorado Chapter of the American Institute of Architects',
                    src: 'aia',
                    publish: true,
                },
                {
                    alias: 'Campbell\'s Soup Company',
                    src: 'campbells',
                    publish: true,
                },
                {
                    alias: 'Charter Communications',
                    src: 'charter',
                    publish: true,
                },
                {
                    alias: 'Colorado Structural Repair',
                    src: 'csr',
                    publish: true,
                },
                {
                    alias: 'Denver Digerati - Supernova Digital Animation Festival',
                    src: 'denverdigerati',
                    publish: true,
                },
                {
                    alias: 'Detroit Energy Company',
                    src: 'dte',
                    publish: true,
                },
                {
                    alias: 'Emmanuel Art Gallery',
                    src: 'emmanuel',
                    publish: true,
                },
                {
                    alias: 'Helmerich & Payne',
                    src: 'hp',
                    publish: true,
                },
                {
                    alias: 'Hospital Corporation of America Healthcare',
                    src: 'hca',
                    publish: true,
                },
                {
                    alias: 'Launch an NTT Data Company',
                    src: 'launch',
                    publish: true,
                },
                {
                    alias: 'Magnetic Variations',
                    src: 'magvar',
                    publish: true,
                },
                {
                    alias: 'Nexient - Software Development',
                    src: 'nexient',
                    publish: true,
                },
                {
                    alias: 'Spectrum Enterprise',
                    src: 'spectrum',
                    publish: true,
                },
                {
                    alias: 'Starz Entertainment',
                    src: 'starz',
                    publish: true,
                },
                {
                    alias: 'Yellow Logistics',
                    src: 'yellow',
                    publish: true,
                },
            ],
        },
    ],
};

export { manifest, filePathMenu, filePathClient };