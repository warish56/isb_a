'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import PlusSvg from '../../assets/pricing/plus.svg'

import styles from './style.module.css'

type props = {
    title: string;
    children: React.ReactNode;
}

export const Accordian = ({title, children}:props) => {
    const [visible, setVisible] = useState(false);
    const [initHeight, setHeight] = useState<number | 'auto'>('auto');
    const [contentHeight, setContentHeight] = useState(0);

    const containerRef = useRef<HTMLDivElement|null>(null);
    const contentRef = useRef<HTMLDivElement|null>(null);

    const toggleVisible = () => {
        setVisible(val => !val)
    }


    useLayoutEffect(() => {
        const dimensionContainer = containerRef.current?.getBoundingClientRect();
        setHeight(dimensionContainer?.height ?? 0)


        if(!contentRef.current){
            return;
        }

        contentRef.current.style.display = 'block';
        const dimensionContent =  contentRef.current.getBoundingClientRect();
        setContentHeight(dimensionContent?.height ?? 0);
        contentRef.current.style.display = 'none';
    }, [])

    return (
        <div
        ref={containerRef}
        style={{
            height: visible ? Number(initHeight) + Number(contentHeight) :  initHeight,
            overflow: 'hidden',
        }} 
        className={`${styles.container} column gap-10 bg-gray`}>
            <div className={`row align-center space-between`}>
                <span className='text-body-1 color-text-primary'>{title}</span>
                <button onClick={toggleVisible} className={`${styles.expand_btn} row-center`}>
                    <PlusSvg />
                </button>
            </div>
            
            <div 
            ref={contentRef}
            style={{
                display: visible ? 'block' : 'none'
            }} 
            className={`${styles.content}`}>
                {children}
            </div>
        </div>
    )
}