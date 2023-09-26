interface TopArtistsDataReturn {
    href: string;
    items: Artist[];
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
}

interface Artist {
    external_urls: {
        spotify: string;
    };
    followers: {
        href: string;
        total: number;
    };
    genres: string[];
    href: string;
    id: string;
    images: SpotifyImage[];
    name: string;
    popularity: number;
    type: string;
    uri: string;
}

interface SpotifyImage {
    url: string;
    height: number;
    width: number;
}

interface TopTracksDataReturn {
    href: string;
    items: Song[];
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
}

interface TrackArtists {
    external_urls: {
        spotify: string
    }
    href: string
    id: string
    name: string
    type: string
    uri: string
}

interface Song {
    album: {
        album_type: string
        total_tracks: number
        available_markets: string[]
        external_urls: {
            spotify: string
        }
        href: string
        id: string
        images: SpotifyImage[]
        name: string
        release_date: string
        release_date_precision: string
        type: string
        uri: string
        artists: TrackArtists[]
    }
    artists: TrackArtists[]
    available_markets: string[]
    disc_number: number
    explicit: boolean
    external_ids: {
        isrc: string
    }
    external_urls: {
        spotify: string
    }
    href: string
    id: string
    name: string
    popularity: number
    preview_url: string
    track_number: number
    type: string
    uri: string
    is_local: boolean
}

interface RecentlyPlayedTrack {
    track: Song
    played_at: string
    context: {
        type: string
        href: string
        external_urls: {
            spotify: string
        }
        uri: string
    }
}

interface RecentlyPlayedDataReturn {
    href: string
    limit: number
    next: string
    cursors: {
        after: string
        before: string
    }
    total: number
    items: RecentlyPlayedTrack[]
}