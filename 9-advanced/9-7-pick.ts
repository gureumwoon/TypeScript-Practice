{

    // Pick은 기존의 타입에서 원하는 속성들과 vlaue들만 뽑아다 조금 더 제한적인 타입을
    // 만들고 싶을 때 사용할 수 있다.

    type Video = {
        id: string;
        title: string;
        url: string;
        data: string;
    };

    type VideoMetadata = Pick<Video, 'id' | 'title'>

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

    // 이처럼 어떤 정보들이 많은 타입이 있고 그중에 몇가지만 다루는 타입이
    // 있다면 이렇게 Pick을 이용하면 좋다.
}