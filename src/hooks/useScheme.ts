import { useEffect } from 'react';

import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getCookie, setCookie } from 'cookies-next';
import { CONFIG } from 'site.config';
import { queryKey } from 'src/constants/queryKey';
import { SchemeType } from 'src/types';

type SetScheme = (scheme: SchemeType) => void;

const useScheme = (): [SchemeType, SetScheme] => {
    const queryClient = useQueryClient();
    const followsSystemTheme = CONFIG.blog.scheme === 'system';

    const { data } = useQuery({
        queryKey: queryKey.scheme(),
        enabled: false,
        initialData: followsSystemTheme
            ? 'dark'
            : (CONFIG.blog.scheme as SchemeType),
    });

    const setScheme = (scheme: SchemeType) => {
        localStorage.theme = scheme

        queryClient.setQueryData(queryKey.scheme(), scheme);

        const root = window.document.documentElement;
        root.classList.remove(scheme === 'dark' ? 'light' : 'dark');
        root.classList.add(scheme);
    };

    useEffect(() => {
        if (!window) return;

        const cachedScheme = localStorage.theme as SchemeType;
        const defaultScheme = followsSystemTheme
            ? window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light'
            : data;
        setScheme(cachedScheme || defaultScheme);
    }, []);

    return [data, setScheme];
};

export default useScheme;
