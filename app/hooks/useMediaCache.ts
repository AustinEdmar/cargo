// hooks/useMediaCache.ts
import { useEffect, useRef } from "react";

type SlideMedia =
    | { type: "image"; src: string }
    | { type: "video"; src: string; poster?: string };

export function useMediaCache(mediaList: SlideMedia[]) {
    // Map de src original → blob URL (para vídeos) ou src (para imagens)
    const blobMap = useRef<Map<string, string>>(new Map());
    const loaded = useRef(false);

    useEffect(() => {
        if (loaded.current) return;
        loaded.current = true;

        mediaList.forEach((media) => {
            if (media.type === "image") {
                // Browser HTTP cache cuida disso — apenas força o download
                const img = new Image();
                img.src = media.src;
                if (media.src && !blobMap.current.has(media.src)) {
                    blobMap.current.set(media.src, media.src);
                }
            }

            if (media.type === "video") {
                if (blobMap.current.has(media.src)) return;

                fetch(media.src)
                    .then((res) => res.blob())
                    .then((blob) => {
                        const url = URL.createObjectURL(blob);
                        blobMap.current.set(media.src, url);
                    })
                    .catch(() => {
                        // Fallback: usa src original se fetch falhar
                        blobMap.current.set(media.src, media.src);
                    });

                // Poster também
                if (media.poster) {
                    const img = new Image();
                    img.src = media.poster;
                }
            }
        });

        // Cleanup: revoga blob URLs ao desmontar
        return () => {
            blobMap.current.forEach((url) => {
                if (url.startsWith("blob:")) URL.revokeObjectURL(url);
            });
        };
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    // Retorna src resolvida (blob URL se vídeo já carregado, senão src original)
    function resolve(src: string): string {
        return blobMap.current.get(src) ?? src;
    }

    return { resolve };
}