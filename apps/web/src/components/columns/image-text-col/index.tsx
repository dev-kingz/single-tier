import SectionHeader from '@/components/headers/section-header'
import Image from 'next/image'
import React from 'react'
import { cn } from '@/lib/utils';

interface ImageTextColProps {
    title?: string; 
    content?: string; 
    src?: string;
    alt?: string;
    width?: number;
    height?: number;
    titleClassName?: string;
    contentClassName?: string;
    imageClassName?: string;
    containerClassName?: string;
}

const ImageTextCol= ({
    title,
    content,
    src,
    alt,
    width,
    height,
    titleClassName = '',
    contentClassName = '',
    imageClassName = '',
    containerClassName = '',
  }: ImageTextColProps) => {
    return (
        <section className={cn("ImageTextSection px-8 sm:px-48 py-12 flex flex-col sm:flex-row gap-5 sm:gap-36", containerClassName)}>
            <div className="flex flex-col gap-3 sm:gap-6 max-w-lg flex-grow">
                {title && (
                    <SectionHeader
                        title={title}
                        className={titleClassName} 
                    />
                )}
                {content && <p className={contentClassName}>{content}</p>}
            </div>
            {src && (
                <div className={cn("flex-shrink-0", imageClassName)}>
                    <Image
                        src={src}
                        alt={alt || 'Image'} 
                        width={width || 100}
                        height={height || 100} 
                        className="rounded-lg"
                    />
                </div>
            )}
        </section>
    )
}

export default ImageTextCol