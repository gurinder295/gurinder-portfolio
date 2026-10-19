'use client';

import { useEffect } from 'react';

type PageTitleProps = {
  title: string;
};

export default function PageTitle({ title }: PageTitleProps) {
  useEffect(() => {
    document.title = `${title} | Gurinder Portfolio`;
  }, [title]);

  return null;
}
