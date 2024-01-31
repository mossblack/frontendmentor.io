const vaultSideBar = ['YOUR INFO', 'SELECT PLAN', 'ADD-ONS', 'SUMMARY'];

const getPlanDetails = () =>([
    {
        id: 1,
        img: '/images/icon-arcade.svg',
        name: 'Arcade',
        price: '$9/mo',
    },
    {
        id: 2,
        img: '/images/icon-advanced.svg',
        name: 'Advanced',
        price: '$12/mo',
    },
    {
        id: 3,
        img: '/images/icon-pro.svg',
        name: 'Pro',
        price: '$15/mo'
    },
]);

export { vaultSideBar, getPlanDetails };