import { useRouter } from 'next/navigation';

export const useMenuItems = () => {
  const router = useRouter();

  const menuItems = [
    {
      label: 'Profile',
      shortcut: '⇧⌘P',
      action: () => router.push('/dashboard/profile/user-details'),
    },
    {
      label: 'Invite users',
      subItems: [
        {
          label: 'Email',
          action: () => console.log('Invite via Email'),
        },
        {
          label: 'Message',
          action: () => console.log('Invite via Message'),
        },
      ],
    },
    {
      label: 'Log out',
      shortcut: '⇧⌘Q',
      action: () => console.log('Log out action'),
    },
  ];

  return menuItems;
};
