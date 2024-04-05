import type { RawTiledLayer } from './raw-tiled-layer';
import type { TiledFrame, TiledProperty } from './tiled-types';

/**
 * @deprecated
 */
export interface RawTilesetTile {
    id: number;
    type: string;
    class: string;
    image: string;
    imageheight: number;
    imagewidth: number;
    animation: TiledFrame[];
    properties?: TiledProperty[];
    terrain: number[];
    objectgroup: RawTiledLayer;
    probability: number;
}
