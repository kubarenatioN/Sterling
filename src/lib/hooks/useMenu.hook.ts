export interface NavItem {
  path: string;
  label: string;
}

export const useMenu = (): NavItem[] => {
  return [
    {
      path: '/',
      label: 'Home',
    },
    {
      path: '/about',
      label: 'About Us',
    },
    {
      path: '/services',
      label: 'Services',
    },
    {
      path: '/team',
      label: 'Team',
    },
    {
      path: '/blog',
      label: 'Blog',
    },
    {
      path: '/contacts',
      label: 'Contacts',
    },
  ];
};
