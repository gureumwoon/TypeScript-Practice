type PageInfo = {
    title: string;
};
type Page = 'home' | 'about' | 'contact';

const nav: Record<Page, PageInfo> = {
    home: { title: 'Home' },
    about: { title: 'Abot' },
    contact: { title: 'Contact' },
};

// 이처럼 Record라는 타입은 우리가 map과 비슷학게 하나와 어떤 하나를
// 연결하고 싶을 때 하나를 key로 쓰고 나머지를 다른 type으로 묶고 싶을 때
// 유용하게 쓸 수 있다.