{

    // Pick과 반대로 원하는 것을 빼버리는 것이다.
    // 원하는 것을 제외한 우리가 빼고싶은 것만 명시할 수 있다.
    // type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
    // 이 말은 Omit에 전달되는 key가 type(여기서는 type Video)에 없는 것도 가능하다는 말

    type Video = {
        id: string;
        title: string;
        url: string;
        data: string;
    };

    type VideoMetadata = Omit<Video, 'url' | 'data'>

    function getVideo(id: string): Video {
        return {
            id,
            title: 'video',
            url: 'https://..',
            data: 'byte-data..',
        };
    }
    function getVideoMetadata(id: string): VideoMetadata {
        return {
            id: id,
            title: 'title',
        };
    }
}