import React, { FC, HTMLAttributes, ReactNode, useEffect, useRef } from 'react'

// type attrs = Omit<HTMLAttributes<HTMLDivElement>, 'children'>
interface IsIntersectingProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode
    options?: IntersectionObserverInit

    Tag: React.ElementType
    Intersected: boolean
    setState?: (state: boolean) => void
}

const IsIntersecting: FC<IsIntersectingProps> = ({
    children,
    options,
    Intersected,
    setState,
    Tag,
    ...attrs
}) => {
    const container = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (container.current && !Intersected) {
            var observer = new IntersectionObserver(([entry]) => {
                if (entry && entry.isIntersecting) {
                    setState && setState(true)
                    observer.disconnect()
                }
            }, options)

            observer.observe(container.current)
        }
        return () => {
            if (observer) observer.disconnect()
        }
    }, [container])

    return (
        <Tag ref={container} {...attrs}>
            {children}
        </Tag>
    )
}

export { IsIntersecting }
