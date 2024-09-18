'use client';

import { MobileNavBar } from '@lobehub/ui';
import { usePathname, useRouter } from 'next/navigation';
import { memo } from 'react';
import urlJoin from 'url-join';

import { mobileHeaderSticky } from '@/styles/mobileHeader';

const Header = memo(() => {
  const pathname = usePathname();
  const router = useRouter();

  const path = pathname.split('/').filter(Boolean)[1];

  return (
    <MobileNavBar
      onBackClick={() => router.push(urlJoin('/discover', `${path}s`))}
      showBackButton
      style={mobileHeaderSticky}
    />
  );
});

export default Header;