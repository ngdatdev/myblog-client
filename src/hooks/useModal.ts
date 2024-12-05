'use client';

import { useCallback, useState } from "react";

export const useModal = () => {
    const [visible, setVisible] = useState<boolean>(false);

    const toggle = useCallback(() => {
        setVisible(!visible)
    }, [visible]);

    const open = useCallback(() => {
        setVisible(true);
    }, []);

    const close = useCallback(() => {
        setVisible(false);
    }, []);

    return {
        visible,
        toggle,
        open,
        close
    }
}