export default [
    {
        title: 'Home',
        url: '/',
    },
    {
        title: 'Account',
        url: '/account',
        submenu: {
            type: 'menu',
            menu: [
                { title: 'Login', url: '/account/login' },
                { title: 'Dashboard', url: '/account/dashboard' },
                { title: 'Edit Profile', url: '/account/profile' },
                { title: 'Order History', url: '/account/orders' },
                { title: 'Address Book', url: '/account/addresses' },
                { title: 'Change Password', url: '/account/password' },
            ],
        },
    },
    {
        title: 'Brands',
        url: '',
    },
    {
        title: 'Contact Us',
        url: '/site/contact-us',
    },

    // {
    //     title: 'Shop',
    //     url: '/shop',
    // },
    {
        title: 'About Us',
        url: '/site/about-us',
    },
];
